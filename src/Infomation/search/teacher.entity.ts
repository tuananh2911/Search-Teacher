import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Teacher {
  @PrimaryGeneratedColumn()
  stt: number;

  @Column({ name: 'full_name' })
  fullName: string;

  @Column()
  class: string;

  @Column()
  organization: string;
}
