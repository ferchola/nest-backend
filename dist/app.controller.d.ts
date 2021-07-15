import { RecordService } from './service/record.service';
import { CreateRecordDto } from './dto/create-record.dto';
export declare class AppController {
    private readonly recordService;
    constructor(recordService: RecordService);
    getHealthCheck(): string;
    saveRecord(recordDto: CreateRecordDto): Promise<{
        message: string;
        data: CreateRecordDto;
    }>;
}
