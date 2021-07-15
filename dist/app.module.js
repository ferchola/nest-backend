"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("@nestjs/config");
const db_configuration_1 = require("./config/db.configuration");
const app_controller_1 = require("./app.controller");
const record_service_1 = require("./service/record.service");
const record_repository_1 = require("./repository/record.repository");
const record_utils_1 = require("./util/record.utils");
const record_schema_1 = require("./schema/record.schema");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        controllers: [app_controller_1.AppController],
        providers: [record_service_1.RecordService, record_repository_1.RecordRepository, record_utils_1.RecordUtils],
        imports: [config_1.ConfigModule.forRoot({
                isGlobal: false,
                load: [
                    db_configuration_1.default,
                ],
            }),
            mongoose_1.MongooseModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => ({
                    uri: `mongodb://${configService.get('database.host')}/${configService.get('database.name')}`,
                    useFindAndModify: false
                }),
                inject: [config_1.ConfigService],
            }),
            mongoose_1.MongooseModule.forFeature([{
                    name: record_schema_1.Record.name,
                    schema: record_schema_1.RecordSchema
                }
            ])]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map