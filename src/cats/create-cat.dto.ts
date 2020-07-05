import { ApiProperty } from '@nestjs/swagger';
export class CreateCatDto {
  @ApiProperty({ required: true, description: 'male | female' })
  readonly gender: 'male' | 'female';
  @ApiProperty()
  readonly age: number;
  @ApiProperty()
  color: string;
}
