import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Model } from "mongoose";

@Schema({timestamps:true})
export class User extends Document{

    @Prop({unique:true,required:true})
    email:string;

    @Prop()
    password:string;

    @Prop()
    username:string
}

export const UserSchema = SchemaFactory.createForClass(User)
export type UserModel = Model<User>
