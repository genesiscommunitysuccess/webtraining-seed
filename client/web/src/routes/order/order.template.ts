import {html, repeat, when, ref} from '@microsoft/fast-element';
import type {Order} from './order';
import { OrderStyles} from './order.styles';
import { InsertOrdersForm } from './insert-orders-form/insert-orders-form';
import { OrdersGrid } from './orders-grid/orders-grid';
import { InstrumentsGrid } from './instruments-grid/instruments-grid';
import { OrdersChart } from './orders-chart/orders-chart';

InsertOrdersForm;
OrdersGrid;
InstrumentsGrid;
OrdersChart;

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
            <insert-orders-form></insert-orders-form>
        </zero-layout-item>
        <zero-layout-item title="Orders Chart">
            <orders-chart></orders-chart>
        </zero-layout-item>
      </zero-layout-region>
    </zero-layout-region>
  </zero-layout>
`