import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { StatusTask } from '../schema/task.schema';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  @IsString()
  owner_id: string;

  @IsEnum(StatusTask)
  status: StatusTask;

  @IsNotEmpty()
  @IsNumber()
  priority: number;

  @IsNotEmpty()
  @IsString()
  deadline: Date;
}
