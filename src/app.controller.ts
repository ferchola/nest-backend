import { Controller, Get, Post, Body, HttpStatus, HttpException } from '@nestjs/common';
import { RecordService } from './service/record.service';
import { CreateRecordDto } from './dto/create-record.dto';

@Controller()
export class AppController {
  constructor(private readonly recordService: RecordService) {}

  @Get()
  getHealthCheck(): string {
    return this.recordService.getHealthCheck();
  }

  @Post()
  async saveRecord(@Body() recordDto: CreateRecordDto) {
    try {
      const createdRecord = await this.recordService.create(recordDto);
      const message = "Hero record created successfully.";
      return {
        message: message,
        data: createdRecord
      }
    } catch (e) {
      throw new HttpException('Error creating hero record. ' + e.message,
        HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

}
