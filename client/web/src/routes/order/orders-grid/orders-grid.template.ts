import { html} from '@microsoft/fast-element';
import { OrdersGrid } from './orders-grid';

export const ordersGridTemplate = html<OrdersGrid>`
  <template>
    <zero-grid-pro>
        <grid-pro-genesis-datasource
          resource-name="ALL_ORDERS"
          order-by="ORDER_ID">
        </grid-pro-genesis-datasource>
        <grid-pro-column :definition="${x => x.singleOrderActionColDef}" />
        <grid-pro-column :definition="${x => x.cancelOrderActionColDef}" />
    </zero-grid-pro>
  </template>
`;