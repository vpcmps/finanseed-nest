import { Wallet } from './wallet.entity';
import {
    Column,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Transaction } from './transaction.entity';

@Entity()
export class BankAccount {
    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Column()
    public name: string;

    @Column()
    public isActive: boolean;

    @OneToMany(() => Transaction, (transaction) => transaction.account)
    public transactions: Transaction[];

    @ManyToOne(() => Wallet, (wallet) => wallet.accounts)
    public wallet: Wallet;
}
