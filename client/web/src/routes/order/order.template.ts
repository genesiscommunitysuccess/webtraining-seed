import {html, repeat, when} from '@microsoft/fast-element';
import type {Order} from './order';
import { sync } from '@genesislcap/foundation-utils';
import {OrderStyles} from './order.styles';
import {positionGridStyles} from "./positionsGrid.styles";

export const OrderTemplate = html<Order>`
<div class="column-split-layout">
    <div class="row-split-layout">
      <zero-grid-pro>
          <grid-pro-genesis-datasource
              resource-name="ALL_ORDERS"
              order-by="ORDER_ID">
          </grid-pro-genesis-datasource>
      </zero-grid-pro>
    </div>
    <div class="row-split-layout left">
        <span>Order ID: ${x => x.Order_ID}</span>
        <span class='${x => x.instrumentClass}'>Instrument</span>
        <zero-select :value=${sync(x=> x.instrument)} @change=${x => x.getMarketData()}>
          <zero-option :selected=${sync(x => x.instrument==undefined)}>-- Select --</zero-option>
          ${repeat(x => x.allInstruments, html`
            <zero-option value=${x => x.value}>${x => x.label}</zero-option>
          `)}
        </zero-select>
        <span>Last price: ${x => x.lastPrice}</span>
        <zero-text-field required :value=${sync(x=> x.quantity)} :class='${x => x.quantityClass}'>Quantity</zero-text-field>
        <zero-text-field :value=${sync(x=> x.price)} class='${x => x.priceClass}'>Price</zero-text-field>
        <span>Total: ${x => x.quantity * x.price}</span>
        <span>Direction</span>
        <zero-select :value=${sync(x=> x.direction)}>
          ${repeat(x => x.directionOptions, html`
            <zero-option value=${x => x.value}>${x => x.label}</zero-option>
          `)}
        </zero-select>
        <zero-text-area :value=${sync(x=> x.notes)}>Notes</zero-text-area>
        <zero-button @click=${x=> x.insertOrder()}>Add Order</zero-button>
        ${when(x => x.serverResponse, html`
        <span>${x=> x.serverResponse.MESSAGE_TYPE == 'EVENT_ACK' ?
        'Successfully added trade' : 'Something went wrong'}
        </span>
            `)}
    </div>
</div>
`