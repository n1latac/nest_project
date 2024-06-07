import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { CatsModule } from './cats/cats.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import configurations from './configurations';
import { User } from './models/user.model';
import { AuthModule } from './modules/auth/auth.module';
import { TokenModule } from './modules/token/token.module';
import { Basket } from './models/basket.model';
import { BasketModule } from './modules/basket/basket.module';
import { BasketDevice } from './models/basketDevice.model';
import { Device } from './models/device.model';
import { DeviceModule } from './modules/device/device.module';
import { Rating } from './models/rating.model';
import { RatingModule } from './modules/rating/rating.module';
import { TypeModule } from './modules/type/type.module';
import { BrandModule } from './modules/brand/brand.module';
import { Brand } from './models/brand.model';
import { Type } from './models/type.model';
import { DeviceInfo } from './models/deviceInfo.model';
import { TypeBrand } from './models/typeBrand.model';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configurations],
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        dialect: 'mysql',
        host: configService.get('db_host'),
        port: configService.get('db_port'),
        database: configService.get('db_name'),
        username: configService.get('db_user'),
        password: configService.get('db_password'),
        synchronize: true,
        autoLoadModels: true,
        models: [
          User,
          Basket,
          BasketDevice,
          Device,
          Rating,
          Brand,
          Type,
          DeviceInfo,
          TypeBrand,
        ],
      }),
    }),
    UsersModule,
    CatsModule,
    AuthModule,
    TokenModule,
    BasketModule,
    BasketModule,
    DeviceModule,
    RatingModule,
    TypeModule,
    BrandModule,
    DeviceModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
