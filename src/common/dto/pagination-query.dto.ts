import { IsOptional, IsPositive, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class PaginationQueryDto {
  @IsOptional()
  @IsPositive()
  @Type(() => Number) // Converts string query param to number
  limit: number = 10; // Default to 10 items per page

  @IsOptional()
  @Min(0)
  @Type(() => Number)
  offset: number = 0; // Default to skipping 0 items
}
