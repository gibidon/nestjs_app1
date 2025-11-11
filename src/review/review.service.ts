import { Injectable } from '@nestjs/common';
import { ReviewModel } from './review.model';
import { CreateReviewDto } from './dto/create-review.dto';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

const leaks: Array<number> = [];

@Injectable()
export class ReviewService {
  constructor(
    @InjectModel(ReviewModel.name)
    private readonly reviewModel: Model<ReviewModel>,
  ) {}
  async create(dto: CreateReviewDto): Promise<ReviewModel> {
    return this.reviewModel.create({
      ...dto,
      productId: new Types.ObjectId(dto.productId),
    });
  }

  async delete(id: string): Promise<ReviewModel | null> {
    return this.reviewModel.findByIdAndDelete(id).exec();
  }

  async findProductId(productId: string): Promise<ReviewModel[]> {
    leaks.push(Math.random()).toFixed(5);
    return this.reviewModel
      .find({ productId: new Types.ObjectId(productId) })
      .exec();
  }

  async deleteByProductId(productId: string) {
    return this.reviewModel
      .deleteMany({ productId: new Types.ObjectId(productId) })
      .exec();
  }
}
