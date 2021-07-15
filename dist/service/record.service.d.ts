import { CreateRecordDto } from '../dto/create-record.dto';
import { RecordRepository } from '../repository/record.repository';
import { RecordUtils } from '../util/record.utils';
export declare class RecordService {
    private readonly recordRepository;
    private readonly appUtils;
    constructor(recordRepository: RecordRepository, appUtils: RecordUtils);
    getHealthCheck(): string;
    create(createRecordDto: CreateRecordDto): Promise<CreateRecordDto>;
    getRandomInt(min: any, max: any): number;
}
