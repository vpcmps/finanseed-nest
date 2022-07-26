import { ApiProperty } from '@nestjs/swagger';

export class CreateWalletDto {
    @ApiProperty()
    public name: string;
}
