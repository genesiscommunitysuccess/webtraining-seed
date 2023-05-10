import {customElement, FASTElement, observable, attr } from '@microsoft/fast-element';
import {OrderTemplate as template} from './order.template';
import {OrderStyles as styles} from './order.styles';
import {Connect} from '@genesislcap/foundation-comms';
import {logger} from '../../utils';
import { FoundationLayout } from '@genesislcap/foundation-layout';
import { ORDERS_DEFAULT_LAYOUT } from './predefined-layouts';

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
    @observable public serverResponse;
    @observable public instrumentClass: string;
    @observable public quantityClass: string;
    @observable public priceClass: string;
    @attr public Order_ID = Date.now();
    @attr public minimumQuantity: number;
    @attr public sideFilter = 'BUY';

    layout: FoundationLayout;

    public singleOrderActionColDef = {
    headerName: 'Action',
    minWidth: 150,
    maxWidth: 150,
    cellRenderer: 'action',
    cellRendererParams: {
      actionClick: async (rowData) => {
        console.log(rowData);
      },
      actionName: 'Print Order',
      appearance: 'primary-gradient',
    },
    pinned: 'right',
    };

    public cancelOrderActionColDef = {
        headerName: 'Cancel',
        minWidth: 150,
        maxWidth: 150,
        cellRenderer: 'action',
        cellRendererParams: {
          actionClick: async (rowData) => {
            this.serverResponse = await this.connect.commitEvent('EVENT_ORDER_CANCEL', {
              DETAILS: {
                ORDER_ID: rowData.ORDER_ID,
                INSTRUMENT_ID: rowData.INSTRUMENT_ID,
                QUANTITY: rowData.QUANTITY,
                PRICE: rowData.PRICE,
                DIRECTION: rowData.direction,
                NOTES: rowData.NOTES,
              },
            });
            console.log(this.serverResponse);

            if (this.serverResponse.MESSAGE_TYPE == 'EVENT_NACK') {
              const errorMsg = this.serverResponse.ERROR[0].TEXT;
              alert(errorMsg);
            } else {
              alert('Order canceled successfully.');
            }
          },
          actionName: 'Cancel Order',
          appearance: 'primary-gradient',
        },
        pinned: 'right',
      };
    @observable ordersGrid: any;

    public customFilter() {
        this.ordersGrid.criteria = `DIRECTION == 'BUY' || DIRECTION == 'SELL'`;
      }

    public toggleSideFilter() {
        this.sideFilter = this.sideFilter == 'BUY' ? 'SELL' : 'BUY';
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


    public async getMarketData() {
      const msg = await this.connect.request('INSTRUMENT_MARKET_DATA', {
        REQUEST: {
          INSTRUMENT_ID: this.instrument,
        }});
      console.log(msg);

      this.lastPrice = msg.REPLY[0].LAST_PRICE;
    }

        resetLayout() {
            this.layout.loadLayout(JSON.parse(ORDERS_DEFAULT_LAYOUT));
        }

    public async connectedCallback() { //add this method to Order class
        super.connectedCallback(); //FASTElement implementation
        this.resetLayout = this.resetLayout.bind(this);
        this.minimumQuantity = 0;
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