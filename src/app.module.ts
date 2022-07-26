import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransactionsModule } from './transactions/transactions.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'Joi';
import { DatabaseModule } from './database/database.module';
import { CreditCardModule } from './credit-card/credit-card.module';
import { WalletModule } from './wallet/wallet.module';
import { BankAccountModule } from './bank-account/bank-account.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            validationSchema: Joi.object({
                POSTGRES_HOST: Joi.string().required(),
                POSTGRES_PORT: Joi.number().required(),
                POSTGRES_USER: Joi.string().required(),
                POSTGRES_PASSWORD: Joi.string().required(),
                POSTGRES_DB: Joi.string().required(),
                PORT: Joi.number(),
            }),
        }),
        DatabaseModule,
        TransactionsModule,
        CreditCardModule,
        WalletModule,
        BankAccountModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
