import { FASTElement, customElement, html, attr, css, observable, repeat } from "@microsoft/fast-element";
import {Connect} from '@genesislcap/foundation-comms';

const marketdataComponentCSS = css`
  h4 {
    color: #00ffff;
  }
`;

export const marketDataComponent = html<MarketdataComponent>`
  <div class="header">
    <h3>My marketdata component</h3>
    <ul>
    ${repeat(x => x.instruments, html<string>`
      <li>
        Instrument from static Array &nbsp;
        <span class="instrument-name">${x => x}</span>&nbsp;
        <span class="instrument-price">${(x, c) => c.parent.getLastPriceRealTime(x)}</span>
      </li>
    `, {positioning: true})}

    ${repeat(x => x.allInstruments, html<{name: any, price: any}>`
      <li>
        Instrument from Server Resources&nbsp;
        <span class="instrument-name">${x => x.name}</span>&nbsp;
        <span class="instrument-price">${x => x.price}</span>
      </li>
    `, {positioning: true})}
    </ul>

    <!--
    <ui-training-design-system-provider>
      <ui-training-button appearance="training-green">UI Training Design System Button</ui-training-button>
    </ui-training-design-system-provider>

    <zero-design-system-provider>
      <zero-button appearance="primary-gradient">Zero Design System Button</zero-button>
    </zero-design-system-provider>
    -->
  </div>
`;

const msftPrice = 101.23;
const aaplPrice = 227.12;

@customElement({
  name: "marketdata-component",
  template: marketDataComponent,
  styles: marketdataComponentCSS,
}) // custom element being created

export class MarketdataComponent extends FASTElement {
    @Connect connect: Connect;

    @observable instruments: String[] = ['MSFT', 'AAPL'];
    @observable lastPrices: number[] = [msftPrice, aaplPrice];

    @observable public allInstruments: Array<{id: any, name: any, price: any}> = []; // add this property

    public async connectedCallback() { // add this method to Order class
      super.connectedCallback(); // FASTElement implementation

      await this.setAllAllInstruments();
    }

    public getLastPriceRealTime(instrumentName: string) {
      const instrumentIndex = this.instruments.indexOf(instrumentName);
      return this.lastPrices[instrumentIndex];
    }

    public async getMarketDataLastPrice(instrumentId: string) {
      const msg = await this.connect.request('INSTRUMENT_MARKET_DATA', {
        REQUEST: {
          INSTRUMENT_ID: instrumentId,
        }});
      console.log(msg);

      return msg.REPLY[0] ? msg.REPLY[0].LAST_PRICE : 'N/A';
    }

    private async setAllAllInstruments() {
      const msg = await this.connect.snapshot('ALL_INSTRUMENTS'); // get a snapshot of data from ALL_INTRUMENTS data server
      msg.ROW.forEach((instrument) => {
        this.getMarketDataLastPrice(instrument.INSTRUMENT_ID).then( (price) => {
          this.allInstruments.push({id: instrument.INSTRUMENT_ID, name: instrument.INSTRUMENT_NAME, price: price});
        });
      });
    }
}