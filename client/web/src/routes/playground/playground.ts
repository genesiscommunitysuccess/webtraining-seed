import {
  FASTElement,
  customElement,
  html,
  attr,
  css,
  observable,
  repeat
} from "@microsoft/fast-element";

const marketdataComponentCSS = css`
  h4 {
    color: #00ffff;
  }
`;

const myTemplate = html<MarketdataComponent>`
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
  </div>
`;

const msftPrice = 101.23;
const aaplPrice = 227.12;

@customElement({
  name: "marketdata-component",
  template: myTemplate,
  styles: marketdataComponentCSS,
}) // custom element being created

export class MarketdataComponent extends FASTElement {

    @attr lastPrice: number = 0;

    @observable instruments: String[] = ['MSFT', 'AAPL'];
    @observable lastPrices: number[] = [msftPrice, aaplPrice];

    public getLastPriceRealTime(instrumentName: string) {
      const instrumentIndex = this.instruments.indexOf(instrumentName);
      return this.lastPrices[instrumentIndex];
    }
}