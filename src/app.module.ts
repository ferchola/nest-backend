import {
  APP_FILTER
} from '@nestjs/core';
import {
  Module
} from '@nestjs/common';
import {
  MongooseModule
} from '@nestjs/mongoose';
import {
  ConfigModule,
  ConfigService
} from '@nestjs/config';
import dbConfig from 'src/config/db.configuration';

import { AppController } from './app.controller';
import { RecordService } from './service/record.service';
import { RecordRepository } from './repository/record.repository';
import { RecordUtils } from './util/record.utils';
import {
  Record,
  RecordSchema
} from './schema/record.schema';

@Module({
  controllers: [AppController],
  providers: [RecordService, RecordRepository, RecordUtils],
  imports: [ConfigModule.forRoot({
      isGlobal: false,
      load: [
        dbConfig,
      ],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: `mongodb://${configService.get('database.host')}/${configService.get('database.name')}`,
        useFindAndModify: false
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forFeature([{
        name: Record.name,
        schema: RecordSchema
      }
    ])
]
})
export class AppModule {}
