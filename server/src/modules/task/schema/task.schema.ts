import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { TaskBody } from 'src/common/interfaces/TaskBody';

export enum StatusTask {
  DONE = 'Done',
  PENDING = 'Pending',
  CANCEL = 'Cancel',
}

@Schema({ timestamps: true })
export class Task extends Document {
  @Prop()
  id: number;

  @Prop()
  title: string;

  @Prop()
  owner_id: number;

  @Prop()
  status: StatusTask;

  @Prop()
  body: TaskBody;

  @Prop()
  priority: number;

  @Prop()
  deadline: Date;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}
export const TaskSchema = SchemaFactory.createForClass(Task);
