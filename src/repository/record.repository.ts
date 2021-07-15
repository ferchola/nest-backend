import {
    Injectable
} from "@nestjs/common";
import {
    InjectModel
} from "@nestjs/mongoose";
import {
    Model
} from "mongoose";
import {
    CreateRecordDto
} from "../dto/create-record.dto";
import {
    Record,
    RecordDocument
} from "../schema/record.schema";

@Injectable()
export class RecordRepository {

  constructor(@InjectModel(Record.name) private recordModel: Model < RecordDocument > ) {}

  async create(createRecordDto: CreateRecordDto): Promise < RecordDocument > {
          const createdRecord = new this.recordModel(createRecordDto);
          return createdRecord.save();
      }
}
