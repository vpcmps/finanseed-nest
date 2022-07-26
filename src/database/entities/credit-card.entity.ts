import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Wallet } from './wallet.entity';

@Entity()
export class CreditCard {
    @PrimaryGeneratedColumn('uuid')
    public id: string;
    @Column()
    public name: string;
    @Column()
    public limit: number;
    @ManyToOne(() => Wallet, (wallet) => wallet.creditCards)
    public wallet: Wallet;
}
