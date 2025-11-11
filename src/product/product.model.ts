import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class ProductModel extends Document {
  @Prop()
  image: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  price: number;

  @Prop()
  oldPrice?: number;

  @Prop()
  credit?: number;

  @Prop()
  calculatedRating?: number;

  @Prop()
  description?: string;

  @Prop()
  advantages?: string;

  @Prop()
  disAdvantages?: string;

  @Prop({ type: [String] })
  categories: string[];

  @Prop({ type: [String] })
  tags: string[];

  @Prop({ type: Object })
  characteristics: Record<string, string>;
}

export const ProductSchema = SchemaFactory.createForClass(ProductModel);
