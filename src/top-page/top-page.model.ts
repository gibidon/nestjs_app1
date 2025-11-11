import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products,
}

@Schema()
export class TopPageModel extends Document {
  @Prop({ required: true, enum: TopLevelCategory })
  firstLevelCategory: TopLevelCategory;

  @Prop({ required: true })
  secondCategory: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  category: string;

  @Prop({
    type: {
      count: { type: Number },
      juniorSalary: { type: Number },
      middleSalary: { type: Number },
      seniorSalary: { type: Number },
    },
    _id: false,
  })
  hh?: {
    count: number;
    juniorSalary: number;
    middleSalary: number;
    seniorSalary: number;
  };

  @Prop({
    type: [
      {
        title: { type: String, required: true },
        description: { type: String, required: true },
      },
    ],
    _id: false,
  })
  advantages: {
    title: string;
    description: string;
  }[];

  @Prop()
  seoText: string;

  @Prop({ required: true })
  tagsTitle: string;

  @Prop({ type: [String], required: true })
  tags: string[];
}

export const TopPageSchema = SchemaFactory.createForClass(TopPageModel);
