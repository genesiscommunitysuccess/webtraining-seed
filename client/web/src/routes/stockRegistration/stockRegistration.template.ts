import {html, ref, repeat, when} from '@microsoft/fast-element';
import {StockRegistration} from './stockRegistration';
import {stockRegistrationStyles} from './stockRegistration.styles';
import {sync} from '@genesislcap/foundation-utils';

export const stockRegistrationTemplate = html<StockRegistration>`
    <h2> Stock Registration Page</h2>

    <zero-button @click=${(x) => x.openModal()}>Add new stock</zero-button>
    <zero-select open :value=${sync((x) => x.selectStock)} @change=${(x) => x.selectedStock()} id="selectStock">
        ${repeat((x) => x.listOfStock, html`
            <zero-option value=${(x) => x.stockId}>${(x) => x.symbol}</zero-option>
        `)}
    </zero-select>
    <hr>
    <zero-grid-pro>
        <grid-pro-genesis-datasource resourceName="ALL_STOCKS" />
    </zero-grid-pro>


    <zero-modal ${ref('newStockModal')} position="right" id="stockModal" class="ScrollOn">
        Stock Registration

        <foundation-form resourceName="EVENT_STOCK_INSERT"></foundation-form>
    </zero-modal>
`;