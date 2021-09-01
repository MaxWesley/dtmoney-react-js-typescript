import React, { createContext, useState, useEffect } from 'react';

import { api } from './services/api';

export const TransactionContext = createContext<Transaction[]>([]);

interface Transaction {
    id: number;
    type: string;
    title: string;
    amount: number;
    category: string;
    createdAt: string;
}

interface TransactionsProviderProps {
    children: React.ReactNode;
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions))
    }, []);

    return (
        <TransactionContext.Provider value={transactions}>
            {children}
        </TransactionContext.Provider>
    );
}