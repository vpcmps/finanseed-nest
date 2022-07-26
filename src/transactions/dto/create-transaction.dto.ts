import { ApiProperty } from '@nestjs/swagger';

export class CreateTransactionDto {
    @ApiProperty()
    title: string;
    @ApiProperty()
    value: number;
}
