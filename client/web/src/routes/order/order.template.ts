import {html, repeat, when} from '@microsoft/fast-element';
import type {Order} from './order';
import { sync } from '@genesislcap/foundation-utils';

export const OrderTemplate = html<Order>`
<div class="row-split-layout">
    <div class="column-split-layout">
        <span>Instrument</span>
        <zero-select :value=${sync(x=> x.instrument)} @change=${x => x.getMarketData()}>
          <zero-option :selected=${sync(x => x.instrument==undefined)}>-- Select --</zero-option>
          ${repeat(x => x.allInstruments, html`
            <zero-option value=${x => x.value}>${x => x.label}</zero-option>
          `)}
        </zero-select>
        <span>Last price: ${x => x.lastPrice}</span>
        <zero-text-field :value=${sync(x=> x.quantity)}>Quantity</zero-text-field>
        <zero-text-field :value=${sync(x=> x.price)}>Price</zero-text-field>
        <span>Total: ${x => x.quantity * x.price}</span>
        <span>Direction</span>
        <zero-select :value=${sync(x=> x.direction)}>
          ${repeat(x => x.directionOptions, html`
            <zero-option value=${x => x.value}>${x => x.label}</zero-option>
          `)}
        </zero-select>
        <zero-text-area :value=${sync(x=> x.notes)}>Notes</zero-text-area>
    </div>
</div>
`