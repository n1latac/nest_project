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
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_module_1 = require("./modules/users/users.module");
const cats_module_1 = require("./cats/cats.module");
const config_1 = require("@nestjs/config");
const sequelize_1 = require("@nestjs/sequelize");
const configurations_1 = require("./configurations");
const user_model_1 = require("./models/user.model");
const auth_module_1 = require("./modules/auth/auth.module");
const token_module_1 = require("./modules/token/token.module");
const basket_model_1 = require("./models/basket.model");
const basket_module_1 = require("./modules/basket/basket.module");
const basketDevice_model_1 = require("./models/basketDevice.model");
const device_model_1 = require("./models/device.model");
const device_module_1 = require("./modules/device/device.module");
const rating_model_1 = require("./models/rating.model");
const rating_module_1 = require("./modules/rating/rating.module");
const type_module_1 = require("./modules/type/type.module");
const brand_module_1 = require("./modules/brand/brand.module");
const brand_model_1 = require("./models/brand.model");
const type_model_1 = require("./models/type.model");
const deviceInfo_model_1 = require("./models/deviceInfo.model");
const typeBrand_model_1 = require("./models/typeBrand.model");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [configurations_1.default],
            }),
            sequelize_1.SequelizeModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (configService) => ({
                    dialect: 'mysql',
                    host: configService.get('db_host'),
                    port: configService.get('db_port'),
                    database: configService.get('db_name'),
                    username: configService.get('db_user'),
                    password: configService.get('db_password'),
                    synchronize: true,
                    autoLoadModels: true,
                    models: [
                        user_model_1.User,
                        basket_model_1.Basket,
                        basketDevice_model_1.BasketDevice,
                        device_model_1.Device,
                        rating_model_1.Rating,
                        brand_model_1.Brand,
                        type_model_1.Type,
                        deviceInfo_model_1.DeviceInfo,
                        typeBrand_model_1.TypeBrand,
                    ],
                }),
            }),
            users_module_1.UsersModule,
            cats_module_1.CatsModule,
            auth_module_1.AuthModule,
            token_module_1.TokenModule,
            basket_module_1.BasketModule,
            basket_module_1.BasketModule,
            device_module_1.DeviceModule,
            rating_module_1.RatingModule,
            type_module_1.TypeModule,
            brand_module_1.BrandModule,
            device_module_1.DeviceModule,
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', 'uploads'),
                serveRoot: '/uploads',
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map