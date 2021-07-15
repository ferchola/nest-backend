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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const record_service_1 = require("./service/record.service");
const create_record_dto_1 = require("./dto/create-record.dto");
let AppController = class AppController {
    constructor(recordService) {
        this.recordService = recordService;
    }
    getHealthCheck() {
        return this.recordService.getHealthCheck();
    }
    async saveRecord(recordDto) {
        try {
            const createdRecord = await this.recordService.create(recordDto);
            const message = "Hero record created successfully.";
            return {
                message: message,
                data: createdRecord
            };
        }
        catch (e) {
            throw new common_1.HttpException('Error creating hero record. ' + e.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHealthCheck", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_record_dto_1.CreateRecordDto]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "saveRecord", null);
AppController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [record_service_1.RecordService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map