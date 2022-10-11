import { SummaryCard, SummaryContainer } from "./styles";
import { ArrowDown, ArrowUp, CurrencyDollar } from 'phosphor-react'
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { priceFormatter } from "../../utils/formatter";
import { useSummary } from "../../hooks/useSummary";

export function Summary(){
    const summary = useSummary();

    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowUp size={32} color="#00b37e"/>
                </header>
                <strong>{priceFormatter.format( summary.income)}</strong>
            </SummaryCard>

            <SummaryCard>
                <header>
                    <span>Saídas</span>
                    <ArrowDown size={32} color="#f75a68"/>
                </header>
                <strong>{priceFormatter.format( summary.outcome)}</strong>
            </SummaryCard>

            <SummaryCard variant="green">
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color="#fff"/>
                </header>
                <strong>{priceFormatter.format( summary.total)}</strong>
            </SummaryCard>
        </SummaryContainer>
    )
}