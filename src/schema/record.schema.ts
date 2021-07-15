import {
    Prop,
    Schema,
    SchemaFactory
} from "@nestjs/mongoose";

export type RecordDocument = Record;

@Schema({
    collection: 'record'
})
export class Record {

    @Prop({
        required: true
    })
    id: number;

    @Prop({
        required: true
    })
    heroname: string;

    @Prop({
        required: true,
        default: new Date()
    })
    creationTime: Date
}

export const RecordSchema = SchemaFactory.createForClass(Record);
