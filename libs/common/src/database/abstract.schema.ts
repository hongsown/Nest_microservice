import { Prop, Schema } from "@nestjs/mongoose";
import { Document, SchemaTypes, Types } from "mongoose";

@Schema()

export class AbstractSchema extends Document {
  @Prop({ type: SchemaTypes.ObjectId })
  _id: Types.ObjectId;
}