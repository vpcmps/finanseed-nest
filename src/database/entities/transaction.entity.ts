import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BankAccount } from './bank-account.entity';

@Entity('transaction')
export class Transaction {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column()
    value: number;

    @Column()
    createdAt: Date;

    @Column()
    paidAt: Date;

    @ManyToOne(() => BankAccount, (bankAcount) => bankAcount.transactions)
    account: BankAccount[];
}
