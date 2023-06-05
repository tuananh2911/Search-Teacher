import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SearchController } from './infomation/search/search.controller';
import { SearchService } from './infomation/search/search.service';
import { SearchModule } from './infomation/search/search.module';
import { DatabaseModule } from './infomation/database/database.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from '@hapi/joi';
@Module({
  imports: [
    SearchModule,
    DatabaseModule,
    ConfigModule.forRoot({
      envFilePath: `.env`,
      isGlobal: true,
      validationSchema: Joi.object({
        PGHOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        PGUSER: Joi.string().required(),
        PGPASSWORD: Joi.string().required(),
        PGDATABASE: Joi.string().required(),
        ENDPOINT_ID: Joi.string().required(),
        PORT: Joi.number(),
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
