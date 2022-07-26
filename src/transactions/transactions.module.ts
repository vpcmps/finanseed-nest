import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction } from '../database/entities/transaction.entity';

@Module({
    controllers: [TransactionsController],
    providers: [TransactionsService],
    imports: [TypeOrmModule.forFeature([Transaction])],
    exports: [TransactionsService],
})
export class TransactionsModule {}
