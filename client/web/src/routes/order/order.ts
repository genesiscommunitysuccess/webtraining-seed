import {customElement, FASTElement, observable } from '@microsoft/fast-element';
import {OrderTemplate as template} from './order.template';
import {OrderStyles as styles} from './order.styles';
import {Connect} from '@genesislcap/foundation-comms';
import {logger} from '../../utils';

const name = 'order-route';

@customElement({
  name,
  template,
  styles,
})

export class Order extends FASTElement {
    @Connect connect: Connect;
    @observable public instrument: string;
    @observable public lastPrice: number;
    @observable public quantity: number;
    @observable public price: number;
    @observable public direction: string;
    @observable public notes: string;
    @observable public allInstruments: Array<{value: string, label: string}>; //add this property
    @observable public directionOptions: Array<{value: string, label: string}>; //add this property


    public async insertOrder(event) {
      const formData = event.detail.payload;
      const insertOrderEvent = await this.connect.commitEvent('EVENT_ORDER_INSERT', {
        DETAILS: {
          INSTRUMENT_ID: formData.INSTRUMENT_ID,
          QUANTITY: formData.QUANTITY,
          PRICE: formData.PRICE,
          DIRECTION: formData.DIRECTION,
          NOTES: formData.NOTES,
        },
      });
      logger.debug('EVENT_ORDER_INSERT result -> ', insertOrderEvent);
    }
    public async getMarketData() {
      const msg = await this.connect.request('INSTRUMENT_MARKET_DATA', {
        REQUEST: {
          INSTRUMENT_ID: this.instrument,
        }});
      console.log(msg);

      this.lastPrice = msg.REPLY[0].LAST_PRICE;
    }

    public async connectedCallback() { //add this method to Order class
        super.connectedCallback(); //FASTElement implementation

        const msg = await this.connect.snapshot('ALL_INSTRUMENTS'); //get a snapshot of data from ALL_INSTRUMENTS data server
        console.log(msg); //add this to look into the data returned and understand its structure
        this.allInstruments = msg.ROW?.map(instrument => ({
          value: instrument.INSTRUMENT_ID, label: instrument.INSTRUMENT_NAME}));
        const metadata = await this.connect.getMetadata('ALL_ORDERS');
        console.log(metadata);
        const directionField = metadata.FIELD?.find(field => field.NAME == 'DIRECTION');
        this.directionOptions = Array.from(directionField.VALID_VALUES).map(v => ({value: v, label: v}));


      }

    constructor() {
        super();
    }
}