import {html, repeat, when, ref} from '@microsoft/fast-element';
import type {Order} from './order';
import { sync } from '@genesislcap/foundation-utils';
import { OrderStyles} from './order.styles';
import { positionGridStyles} from "./positionsGrid.styles";
import { orderColumnDefs} from './orderColumnDefs';
import { ordersGridStyles} from "./orders-grid.styles";
import { InsertOrdersForm } from './insert-orders-form/insert-orders-form';
import { OrdersGrid } from './orders-grid/orders-grid';
import { InstrumentsGrid } from './instruments-grid/instruments-grid';

InsertOrdersForm;
OrdersGrid;
InstrumentsGrid;

export const OrderTemplate = html<Order>`
  <zero-layout>
    <zero-layout-region type="horizontal">
      <zero-layout-region type="vertical">
        <zero-layout-item title="Orders Grid">
            <orders-grid></orders-grid>
        </zero-layout-item>
        <zero-layout-item title="Orders Grid">
            <instruments-grid></instruments-grid>
        </zero-layout-item>
      </zero-layout-region>
      <zero-layout-region type="vertical">
        <zero-layout-item title="Orders Form">
            <insert-orders-form></insert-orders-form>>
        </zero-layout-item>
      </zero-layout-region>
    </zero-layout-region>
  </zero-layout>
`