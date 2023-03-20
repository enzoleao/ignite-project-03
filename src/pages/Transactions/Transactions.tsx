import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./Components/SearchForm";
import { PriceHeightLight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
    return (
        <div>
            <Header />
            <Summary />
            <TransactionsContainer>
                <SearchForm/>    
                <TransactionsTable>
                    <tbody>
                        <tr>
                            <td width="50%">Desenvolvimento de Site</td>
                                <td>
                                    <PriceHeightLight variant="income">
                                    R$ 12.000,00
                                    </PriceHeightLight>
                                </td>
                            <td>Venda</td>
                            <td>12/03/2023</td>
                        </tr>
                        <tr>
                            <td width="50%">Hamburguer</td>
                            <td>
                                <PriceHeightLight variant="outcome">
                                - R$ 59,00
                                </PriceHeightLight>
                            </td>
                            <td>Alimentação</td>
                            <td>10/03/2023</td>
                        </tr>
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}