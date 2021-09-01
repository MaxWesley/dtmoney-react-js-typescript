import React, { createContext, useState, useEffect } from 'react';

import { api } from './services/api';
interface Transaction {
    id: number;
    type: string;
    title: string;
    amount: number;
    category: string;
    createdAt: string;
}

interface TransactionContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionsProviderProps {
    children: React.ReactNode;
}

export const TransactionContext = createContext<TransactionContextData>(
    {} as TransactionContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions))
    }, []);

    async function createTransaction(transactionInput: TransactionInput) {
        const response = await api.post('/transactions', {
            ...transactionInput,
            createdAt: new Date(),
        });

        const { transaction } = response.data;

        setTransactions([
            ...transactions,
            transaction
        ]);
    }

    return (
        <TransactionContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionContext.Provider>
    );
}