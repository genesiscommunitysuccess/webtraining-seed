import {html, ref, repeat, when} from '@microsoft/fast-element';
import {StockRegistration} from './stockRegistration';
import {stockRegistrationStyles} from './stockRegistration.styles';
import {sync} from '@genesislcap/foundation-utils';

export const stockRegistrationTemplate = html<StockRegistration>`
    <h2> Stock Registration Page</h2>

    <zero-button @click=${(x) => x.openModal()}>Add new stock</zero-button>
    <zero-layout style="height: 420px;">
        <zero-layout-region type="horizontal">
            <zero-layout-region type="vertical">
                <zero-layout-item>
                    <zero-grid-pro>
                        <grid-pro-genesis-datasource resource-name="ALL_STOCKS"/>
                        <grid-pro-column :definition=${(x) => x.actionMenuDefs}></grid-pro-column>
                    </zero-grid-pro>
                </zero-layout-item>
                <zero-layout-item>
                    <zero-g2plot-chart type="column" :config=${(x) => x.chartConfiguration}>
                        <chart-datasource
                            resourceName = "ALL_STOCKS"
                            server-fields = "SYMBOL TRADING_VOLUME"
                        ></chart-datasource>
                    </zero-g2plot-chart>
                </zero-layout-item>
            </zero-layout-region>
            <zero-layout-region type="vertical">
                <zero-layout-region type="tabs">
                ${repeat(x => x.displayStock, html`
                    <zero-layout-item closable>
                        <form id="newStockForm">
                            <zero-number-field readonly :value=${sync((x) => x.stockId)} readonly>Id</zero-number-field>
                            <zero-text-field readonly :value=${sync((x) => x.companyName)}>Company name</zero-text-field>
                            <zero-text-field readonly :value=${sync((x) => x.symbol)}>Ticker Symbol</zero-text-field>
                            <alpha-number-field readonly :value=${sync((x) => x.price)} withFormatting :options=${() => ({maximumFractionDigits: 2})}><span slot="start">$</span>Stock price</alpha-number-field>
                            <zero-number-field readonly :value=${sync((x) => x.tradingVolume)} withFormatting :options=${() => ({maximumFractionDigits: 0})}>Trading Volume</zero-number-field>
                            <zero-text-field readonly :value=${sync((x) => x.CEOName)}>CEO name</zero-text-field>
                            <zero-button @click=${(x,c) => c.parent.editStock()} appearance="outline">Edit</zero-button>
                            <zero-button @click=${(x,c) => c.parent.deleteStock()} appearance="outline">delete</zero-button>
                        </form>
                    </zero-layout-item>
                `)}
                </zero-layout-region>
            </zero-layout-region>
        </zero-layout-region>
    </zero-layout>



    <zero-modal ${ref('newStockModal')} position="right" id="stockModal" class="ScrollOn">
        Stock Registration
        <foundation-form resourceName="EVENT_STOCK_INSERT" @submit-success=${(x, c) => x.updateDisplayedStock(c.event)}></foundation-form>
    </zero-modal>
`;