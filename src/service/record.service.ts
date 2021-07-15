import { Injectable } from '@nestjs/common';
import {
  CreateRecordDto
} from '../dto/create-record.dto';
import {
  RecordRepository
} from '../repository/record.repository';
import {
  RecordUtils
} from '../util/record.utils';

@Injectable()
export class RecordService {

  constructor(
    private readonly recordRepository: RecordRepository,
    private readonly appUtils: RecordUtils
  ) {}

  getHealthCheck(): string {
    return 'I am a nest.js healthy service';
  }

  async create(createRecordDto: CreateRecordDto) {
    createRecordDto.id = await this.appUtils.getRandomInt(1, 999);
    createRecordDto.creationTime = new Date();
    //FIXME - "I am not connected to mongoDB yet";
    //return this.recordRepository.create(createRecordDto);
    return createRecordDto;
  }

  getRandomInt(min, max) : number{
  	min = Math.ceil(min);
  	max = Math.floor(max);
  	return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
