"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface QuoteDialogContextType {
    isOpen: boolean;
    openDialog: () => void;
    closeDialog: () => void;
}

const QuoteDialogContext = createContext<QuoteDialogContextType | undefined>(undefined);

export function QuoteDialogProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    const openDialog = () => setIsOpen(true);
    const closeDialog = () => setIsOpen(false);

    return (
        <QuoteDialogContext.Provider value={{ isOpen, openDialog, closeDialog }}>
            {children}
        </QuoteDialogContext.Provider>
    );
}

export function useQuoteDialog() {
    const context = useContext(QuoteDialogContext);
    if (context === undefined) {
        throw new Error("useQuoteDialog must be used within a QuoteDialogProvider");
    }
    return context;
}