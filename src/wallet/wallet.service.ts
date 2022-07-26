import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { Wallet } from '../database/entities/wallet.entity';

@Injectable()
export class WalletService {
    constructor(
        @InjectRepository(Wallet) private walletRepository: Repository<Wallet>,
    ) {}
    async create(createWalletDto: CreateWalletDto) {
        const newWallet = await this.walletRepository.create(createWalletDto);
        await this.walletRepository.save(newWallet);
        return newWallet;
    }

    findAll() {
        return `This action returns all wallet`;
    }

    findOne(id: number) {
        return `This action returns a #${id} wallet`;
    }

    update(id: number, updateWalletDto: UpdateWalletDto) {
        return `This action updates a #${id} wallet`;
    }

    remove(id: number) {
        return `This action removes a #${id} wallet`;
    }
}
