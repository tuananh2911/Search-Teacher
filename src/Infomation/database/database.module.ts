import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Teacher } from '../search/teacher.entity';
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('PGHOST'),
        // host: 'db',
        port: configService.get('POSTGRES_PORT'),
        username: configService.get('PGUSER'),
        password: `${configService.get('PGPASSWORD')}`,
        database: configService.get('PGDATABASE'),
        entities: [Teacher],
        ssl: true,
        extra: {
          endpoint: configService.get('ENDPOINT_ID'),
        },
        synchronize: true,
        autoLoadEntities: true,
      }),
    }),
  ],
})
export class DatabaseModule {}
