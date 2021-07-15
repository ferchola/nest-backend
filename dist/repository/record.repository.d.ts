import { Model } from "mongoose";
import { CreateRecordDto } from "../dto/create-record.dto";
import { RecordDocument } from "../schema/record.schema";
export declare class RecordRepository {
    private recordModel;
    constructor(recordModel: Model<RecordDocument>);
    create(createRecordDto: CreateRecordDto): Promise<RecordDocument>;
}
