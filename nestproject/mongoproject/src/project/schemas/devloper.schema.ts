import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

@Schema({ timestamps: true})
export class Devloper extends Document {
    @Prop({required : true})
    name: string;

    @Prop({ type:[{ type: Types.ObjectId, ref:'Project'}]})
    projects:Types.ObjectId
}

export const DevloperSchema = SchemaFactory.createForClass(Devloper);
