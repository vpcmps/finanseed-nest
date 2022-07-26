import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { Transaction } from '../database/entities/transaction.entity';

@Injectable()
export class TransactionsService {
    constructor(
        @InjectRepository(Transaction)
        private transactionsRepository: Repository<Transaction>,
    ) {}

    async create(transaction: CreateTransactionDto) {
        const newTransaction = await this.transactionsRepository.create(
            transaction,
        );
        await this.transactionsRepository.save(newTransaction);
        return newTransaction;
    }

    findAll() {
        return this.transactionsRepository.find();
    }

    async findOne(id: string) {
        const transaction = await this.transactionsRepository.findOneBy({
            id: id,
        });
        if (transaction) {
            return transaction;
        }
        throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
    }

    async update(id: string, transaction: UpdateTransactionDto) {
        await this.transactionsRepository.update(id, transaction);
        const updatedTransaction = await this.transactionsRepository.findOneBy({
            id: id,
        });

        if (updatedTransaction) return updatedTransaction;

        throw new HttpException('Transaction not found', HttpStatus.NOT_FOUND);
    }

    async remove(id: string) {
        const deleteResponse = await this.transactionsRepository.delete(id);
        if (!deleteResponse.affected)
            throw this.transactionsRepository.delete(id);
    }
}
