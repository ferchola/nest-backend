/// <reference types="mongoose" />
export declare type RecordDocument = Record;
export declare class Record {
    id: number;
    heroname: string;
    creationTime: Date;
}
export declare const RecordSchema: import("mongoose").Schema<import("mongoose").Document<Record, any, any>, import("mongoose").Model<any, any, any>, undefined, any>;
