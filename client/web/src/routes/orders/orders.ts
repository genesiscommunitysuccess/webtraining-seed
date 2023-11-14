import {customElement, FASTElement, observable} from '@microsoft/fast-element';
import {ordersTemplate as template} from './orders.template';
import {ordersStyles as styles} from './orders.styles';


@customElement({
  name: 'orders-route',
  template,
  styles,
})

export class Orders extends FASTElement {

}