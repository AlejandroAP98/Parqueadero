import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { VehiculosModule } from './vehiculos/vehiculos.module';
import { ParqueaderoMotosModule } from './parqueadero-motos/parqueadero-motos.module';
import { ParqueaderoCarrosModule } from './parqueadero-carros/parqueadero-carros.module';
import { ParqueaderoModule } from './parqueadero/parqueadero.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '',
      database: 'EasyParking',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    VehiculosModule,
    ParqueaderoMotosModule,
    ParqueaderoCarrosModule,
    ParqueaderoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
