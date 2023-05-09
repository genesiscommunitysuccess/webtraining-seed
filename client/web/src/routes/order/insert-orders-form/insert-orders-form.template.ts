import { sync } from '@genesislcap/foundation-utils';
import { html, repeat, when } from '@microsoft/fast-element';
import { InsertOrdersForm } from './insert-orders-form';

export const insertOrdersFormTemplate = html<InsertOrdersForm>`
<template>
    <div class = "column-split-layout">
        <zero-anchor disabled appearance="accent">Order_ID - ${x => x.Order_ID}</zero-anchor>
        <span class='${x => x.instrumentClass}'>Instrument</span>
        <zero-select :value=${sync(x=> x.instrument)} @change=${x => x.getMarketData()} position="below">
          <zero-option :selected=${sync(x => x.instrument==undefined)}>-- Select --</zero-option>
          ${repeat(x => x.allInstruments, html`
            <zero-option value=${x => x.value}>${x => x.label}</zero-option>
          `)}
        </zero-select>
        <span>Last price: ${x => x.lastPrice}</span>
        <!--
        <zero-text-field required :value=${sync(x=> x.quantity)} :class='${x => x.quantityClass}'>Quantity</zero-text-field>
        <zero-text-field :value=${sync(x=> x.price)} class='${x => x.priceClass}'>Price</zero-text-field>
        -->
        <ui-training-design-system-provider>
          <ui-training-text-field required :value=${sync(x=> x.quantity)}><span class='${x => x.quantityClass}'>Quantity</span></ui-training-text-field>
          <ui-training-text-field :value=${sync(x=> x.price)}><span class='${x => x.priceClass}'>Price</span></ui-training-text-field>
        </ui-training-design-system-provider>
        <span>Total: ${x => x.quantity * x.price}</span>
        <span>Direction</span>
        <zero-select :value=${sync(x=> x.direction)}>
          ${repeat(x => x.directionOptions, html`
            <zero-option value=${x => x.value}>${x => x.label}</zero-option>
          `)}
        </zero-select>
        <zero-text-area :value=${sync(x=> x.notes)}>Notes</zero-text-area>
        <!--
        <zero-button @click=${x=> x.insertOrder()}>Add Order</zero-button>
        -->
        <ui-training-design-system-provider>
              <ui-training-button appearance="training-green" @click=${x=> x.insertOrder()}>Add Order<//ui-training-button>
        </ui-training-design-system-provider>
        ${when(x => x.serverResponse, html`
            <zero-banner id="js-banner">
              <div slot="content">
                ${x=> x.serverResponse.MESSAGE_TYPE == 'EVENT_ACK' ? 'Successfully added order' : 'Something went wrong'} </div>
              </zero-banner>
            `)}
    </div>
</template>
`