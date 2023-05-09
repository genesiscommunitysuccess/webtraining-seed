import { Connect } from '@genesislcap/foundation-comms';
import {customElement, FASTElement, observable, attr } from '@microsoft/fast-element';
import { insertOrdersFormStyles } from './insert-orders-form.styles';
import { insertOrdersFormTemplate } from './insert-orders-form.template';

@customElement({
  name: 'insert-orders-form',
  template: insertOrdersFormTemplate,
  styles: insertOrdersFormStyles,
})



export class InsertOrdersForm extends FASTElement {
    @Connect connect: Connect;
    @observable public instrument: string;
    @observable public lastPrice: number;
    @observable public quantity: number;
    @observable public price: number;
    @observable public direction: string;
    @observable public notes: string;
    @observable public allInstruments: Array<{value: string, label: string}>; //add this property
    @observable public directionOptions: Array<{value: string, label: string}>; //add this property
    @observable public serverResponse;
    @observable public instrumentClass: string;
    @observable public quantityClass: string;
    @observable public priceClass: string;

    @attr public Order_ID = Date.now();
    @attr public minimumQuantity: number;
    @attr public sideFilter = 'BUY';

    public async getMarketData() {
          const msg = await this.connect.request('INSTRUMENT_MARKET_DATA', {
            REQUEST: {
              INSTRUMENT_ID: this.instrument,
            }});
          console.log(msg);

          this.lastPrice = msg.REPLY[0].LAST_PRICE;
        }

    @observable tradeInstruments: Array<{ value: string; label: string }>;

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

    public async insertOrder() {

        this.Order_ID = Date.now();
        this.instrumentClass = "";
        this.quantityClass = "";
        this.priceClass = "";

        this.serverResponse = await this.connect.commitEvent('EVENT_ORDER_INSERT', {
            DETAILS: {
                ORDER_ID: this.Order_ID,
                INSTRUMENT_ID: this.instrument,
                QUANTITY: this.quantity,
                PRICE: this.price,
                DIRECTION: this.direction,
                NOTES: this.notes,
            },
        });
        console.log("serverResponse: ", this.serverResponse);

        if (this.serverResponse.MESSAGE_TYPE == 'EVENT_NACK') {
            const error = this.serverResponse.ERROR[0];
            alert(error.TEXT);
            switch (error.FIELD) {
                case "INSTRUMENT_ID":
                  this.instrumentClass = 'required-yes';
                  break;

                case "QUANTITY":
                  this.quantityClass = 'required-yes';
                  break;

                case "PRICE":
                  this.priceClass = 'required-yes';
                  break;

                default:
                  console.log("FIELD not found: ", error.FIELD);
            }
        }
    }
}
