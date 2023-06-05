import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Teacher } from './teacher.entity';
import { Repository, ILike } from 'typeorm';

@Injectable()
export class SearchService {
  constructor(
    @InjectRepository(Teacher)
    private readonly teacherRepository: Repository<Teacher>,
  ) {}

  async getTeachersByName(name: string, page: number) {
    const perPage = 10;
    const startOffset: number = (page - 1) * perPage;
    const teacher = await this.teacherRepository.find({
      order: { stt: 'ASC' },
      skip: startOffset,
      take: perPage,
      select: ['fullName', 'class', 'organization'],
      where: {
        fullName: ILike(`%${name}%`),
      },
    });
    const teacherCount: number = await this.teacherRepository.count({
      where: { fullName: ILike(`%${name}%`) },
    });
    console.log('teacherCount', teacherCount);
    return { teacher: teacher, teacherCount: teacherCount };
  }
}
