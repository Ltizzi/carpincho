import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum StatusTask {
  DONE = 'Done',
  PENDING = 'Pending',
  CANCEL = 'Cancel',
}

@Schema({ timestamps: true })
export class Task extends Document {
  @Prop()
  title: string;

  @Prop()
  owner_id: string;

  @Prop()
  status: StatusTask;

  @Prop()
  priority: number;

  @Prop()
  deadline: Date;
}
export const TaskSchema = SchemaFactory.createForClass(Task);
