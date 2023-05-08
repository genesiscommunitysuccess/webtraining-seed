import {html, repeat, when, ref} from '@microsoft/fast-element';
import type {Order} from './order';
import { sync } from '@genesislcap/foundation-utils';
import {OrderStyles} from './order.styles';
import {positionGridStyles} from "./positionsGrid.styles";
import {orderColumnDefs} from './orderColumnDefs';
import {ordersGridStyles} from "./orders-grid.styles";

export const OrderTemplate = html<Order>`
<div class="column-split-layout">
<zero-button @click=${x=> x.toggleSideFilter()}>Toggle filter: ${x => x.sideFilter}</zero-button>
<zero-button @click=${x=> x.customFilter()}>No filters</zero-button>
<zero-text-field :value = ${sync( x => x.minimumQuantity )}>Minimum Quantity Displayed</zero-text-field>
    <div class="row-split-layout">
        <zero-grid-pro only-template-col-defs persist-column-state-key='order-grid-settings' rowHeight = 20>
            <slotted-styles :styles=${() => ordersGridStyles}></slotted-styles>
            <grid-pro-genesis-datasource ${ref('ordersGrid')}
              resource-name="ALL_ORDERS"
              order-by="ORDER_ID"
              criteria="QUANTITY >= ${x=>x.minimumQuantity} && DIRECTION == '${x=> x.sideFilter}'">
            </grid-pro-genesis-datasource>
            ${repeat(() => orderColumnDefs, html`
            <grid-pro-column :definition="${x => x}" />
            `)}
            <grid-pro-column :definition="${x => x.singleOrderActionColDef}" />
            <grid-pro-column :definition="${x => x.cancelOrderActionColDef}" />
        </zero-grid-pro>
    </div>
    <div class="row-split-layout">
        <span class= "order_ID">Order ID: ${x => x.Order_ID}</span>
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