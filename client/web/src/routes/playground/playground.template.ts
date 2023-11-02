import {html, ref, repeat, when} from '@microsoft/fast-element';
import {Playground} from './playground';
import {playgroundStyles} from './playground.styles';
import {sync} from '@genesislcap/foundation-utils'


export const myTemplate = html<Playground>`
    <h2>This is my first component</h2>

    <zero-button @click=${(x) => x.createInsertTradeForms()}>Insert Trade</zero-button>

	<zero-modal ${ref('newTradeModal')} position="right" id="stockModal" class="ScrollOn">
        Insert a new trade
        <form id="newTradeForm">
            <zero-select :value=${sync((x) => x.direction)}>
                ${repeat(x => x.availableDirection, html`
                    <zero-option :value=${(x) => x}>${(x) => x}</zero-option>
                `)}
            </zero-select>
            <zero-text-field :value=${sync((x) => x.symbol)}>Symbol</zero-text-field>
            <span>Counterparty</span>
            <zero-select :value=${sync((x) => x.counterpartyId)}>
                ${repeat(x => x.availableCounterparty, html`
                    <zero-option :value=${(x) => x.id}>${(x) => x.name}</zero-option>
                `)}
            </zero-select>
            <span>Instrument</span>
            <zero-select :value=${sync((x) => x.instrumentId)}>
                ${repeat(x => x.availableInstrument, html`
                    <zero-option :value=${(x) => x.id}>${(x) => x.name}</zero-option>
                `)}
            </zero-select>
            <zero-number-field :value=${sync((x) => x.quantity)}>Quantity</zero-number-field>
            <zero-number-field :value=${sync((x) => x.price)}>Price</zero-number-field>
            <span>Status</span>
            <zero-select :value=${sync((x) => x.status)}>
                ${repeat(x => x.availableStatus, html`
                    <zero-option :value=${(x) => x}>${(x) => x}</zero-option>
                `)}
            </zero-select>
            ${when((x) => x.modify, html`
                <zero-button @click=${(x) => x.modifyTrade()}>Modify</zero-button>
            `, html`
                <zero-button @click=${(x) => x.submitTrade()}>Submit</zero-button>
            `)}

        </form>
    </zero-modal>

    <zero-grid-pro ${ref('tradeGrid')} only-template-col-defs>
        <grid-pro-genesis-datasource
            resource-name="ALL_TRADES"/>
            ${repeat((x) => x.columnsDefTrade, html`
                <grid-pro-column :definition=${x => x}></grid-pro-column>
            `)}
    </zero-grid-pro>
`;