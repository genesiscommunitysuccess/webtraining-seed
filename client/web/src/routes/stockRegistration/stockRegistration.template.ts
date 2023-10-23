import {html, ref, repeat} from '@microsoft/fast-element';
import {StockRegistration} from './stockRegistration';
import {stockRegistrationStyles} from './stockRegistration.styles';
import {sync} from '@genesislcap/foundation-utils';

export const stockRegistrationTemplate = html<StockRegistration>`
    <h2>stock Registration Page</h2>

    <zero-button @click=${(x) => x.openModal()}>Add new stock</zero-button>
    <zero-select :value=${sync((x) => x.selectStock)} @change=${(x) => x.selectedStock()} id="selectStock">
        <zero-option>Select a stock</zero-option>
        ${repeat(x => x.listOfStock, html`
            <zero-option value=${(x) => x.stockId}>${(x) => x.symbol}</zero-option>
        `)}
    </zero-select>
    <hr>
    <zero-tabs activeid="Tab1" ${ref('displayTabs')}>
        ${repeat(x => x.displayStock, html`
                <zero-tab id=${x => x.stockId}>
                    ${x => x.symbol}
                </zero-tab>
                <zero-tab-panel style="height: 90%;" class="ScrollOn" id=${x => x.stockId+"P"}>
                    <zero-button @click=${(x,c) => c.parent.closeTab()} id="closeTab" appearance="outline">X</zero-button>
                    <form id="newStockForm">
                        <zero-number-field readonly :value=${sync((x) => x.stockId)} readonly>Id</zero-number-field>
                        <zero-text-field readonly :value=${sync((x) => x.companyName)}>Company name</zero-text-field>
                        <zero-text-field readonly :value=${sync((x) => x.symbol)}>Ticker Symbol</zero-text-field>
                        <alpha-number-field readonly :value=${sync((x) => x.price)} withFormatting :options=${() => ({maximumFractionDigits: 2})}><span slot="start">$</span>Stock price</alpha-number-field>
                        <zero-number-field readonly :value=${sync((x) => x.tradingVolume)} withFormatting :options=${() => ({maximumFractionDigits: 0})}>Trading Volume</zero-number-field>
                        <zero-text-field readonly :value=${sync((x) => x.CEOName)}>CEO name</zero-text-field>
                    </form>
                </zero-tab-panel>
                </zero-tabs>
        `)}
    </zero-tabs>

    <zero-modal ${ref('newStockModal')} position="right" id="stockModal" class="ScrollOn">
        Stock Registration
        <form id="newStockForm">
            <zero-number-field :value=${sync((x) => x.stockId)} readonly>Id</zero-number-field>
            <zero-text-field :value=${sync((x) => x.companyName)}>Company name</zero-text-field>
            <zero-text-field :value=${sync((x) => x.symbol)}>Ticker Symbol</zero-text-field>
            <alpha-number-field :value=${sync((x) => x.price)} withFormatting :options=${() => ({maximumFractionDigits: 2})}><span slot="start">$</span>Stock price</alpha-number-field>
            <zero-number-field :value=${sync((x) => x.tradingVolume)} withFormatting :options=${() => ({maximumFractionDigits: 0})}>Trading Volume</zero-number-field>
            <zero-text-field :value=${sync((x) => x.CEOName)}>CEO name</zero-text-field>
            <zero-button @click=${(x) => x.addNewStock()}>Submit</zero-button>
        </form>
    </zero-modal>
`;