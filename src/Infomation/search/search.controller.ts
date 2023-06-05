import { Controller, Get, Query } from '@nestjs/common';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}
  @Get('')
  getTeacher(@Query('name') name: string, @Query('page') page: number) {
    return this.searchService.getTeachersByName(name, page);
  }
}
