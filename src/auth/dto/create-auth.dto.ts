import { IsString } from 'class-validator';
export class CreateAuthDto {
  @IsString()
  readonly name: number;

  @IsString()
  readonly brand: string;

  @IsString({ each: true })
  readonly flavors: string[];
}
