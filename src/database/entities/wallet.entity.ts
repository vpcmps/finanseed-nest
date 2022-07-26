import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BankAccount } from './bank-account.entity';
import { CreditCard } from './credit-card.entity';

@Entity()
export class Wallet {
    @PrimaryGeneratedColumn('uuid')
    public id: string;
    @Column()
    public name: string;
    @OneToMany(() => BankAccount, (account) => account.wallet)
    public accounts: BankAccount[];
    @OneToMany(() => CreditCard, (creditCard) => creditCard.wallet)
    public creditCards: CreditCard[];
}
