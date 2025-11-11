import { IsMongoId, IsNumber, IsString, Max, Min } from 'class-validator';

export class CreateReviewDto {
  @IsString()
  name: string;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @Max(5)
  @Min(1, { message: 'Not less than one' })
  @IsNumber()
  rating: number;

  @IsMongoId()
  productId: string;
}
