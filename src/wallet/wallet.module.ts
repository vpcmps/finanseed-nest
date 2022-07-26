import { Module } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { WalletController } from './wallet.controller';
import { Wallet } from '../database/entities/wallet.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Wallet])],
    controllers: [WalletController],
    providers: [WalletService],
})
export class WalletModule {}
