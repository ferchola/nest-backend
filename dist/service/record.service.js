"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordService = void 0;
const common_1 = require("@nestjs/common");
const record_repository_1 = require("../repository/record.repository");
const record_utils_1 = require("../util/record.utils");
let RecordService = class RecordService {
    constructor(recordRepository, appUtils) {
        this.recordRepository = recordRepository;
        this.appUtils = appUtils;
    }
    getHealthCheck() {
        return 'I am a nest.js healthy service';
    }
    async create(createRecordDto) {
        createRecordDto.id = await this.appUtils.getRandomInt(1, 999);
        createRecordDto.creationTime = new Date();
        return createRecordDto;
    }
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
};
RecordService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [record_repository_1.RecordRepository,
        record_utils_1.RecordUtils])
], RecordService);
exports.RecordService = RecordService;
//# sourceMappingURL=record.service.js.map