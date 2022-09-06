import { SummaryCard, SummaryContainer } from "./styles";
import { ArrowDown, ArrowUp, CurrencyDollar } from 'phosphor-react'

export function Summary(){
    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowUp size={32} color="#00b37e"/>
                </header>
                <strong>R$ 17.400,00</strong>
            </SummaryCard>

            <SummaryCard>
                <header>
                    <span>Saídas</span>
                    <ArrowDown size={32} color="#f75a68"/>
                </header>
                <strong>R$ 17.400,00</strong>
            </SummaryCard>

            <SummaryCard variant="green">
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color="#fff"/>
                </header>
                <strong>R$ 17.400,00</strong>
            </SummaryCard>
        </SummaryContainer>
    )
}