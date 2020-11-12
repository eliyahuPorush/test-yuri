import { IsString } from 'class-validator';

export class CreateProductDTO {
    @IsString()
    name: string = "default name";

    @IsString()
    description: string = "default description";

    @IsString()
    price: string = "default price";
}