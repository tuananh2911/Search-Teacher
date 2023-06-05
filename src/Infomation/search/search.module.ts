import { Module } from '@nestjs/common';
import { SearchController } from './search.controller';
import { SearchService } from './search.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Teacher } from './teacher.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Teacher])],
  controllers: [SearchController],
  providers: [SearchService],
})
export class SearchModule {}
