import {customElement, FASTElement, observable, attr } from '@microsoft/fast-element';
import { ordersGridTemplate } from './orders-grid.template';
import {Connect} from '@genesislcap/foundation-comms';

@customElement({
  name: 'orders-grid',
  template: ordersGridTemplate
})

export class OrdersGrid extends FASTElement {

    @Connect connect: Connect;
    @observable public instrument: string;
    @observable public lastPrice: number;
    @observable public quantity: number;
    @observable public price: number;
    @observable public direction: string;
    @observable public notes: string;
    @observable public serverResponse;
    @observable public instrumentClass: string;
    @observable public quantityClass: string;
    @observable public priceClass: string;
    @attr public Order_ID = Date.now();
    @attr public minimumQuantity: number;
    @attr public sideFilter = 'BUY';


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

}