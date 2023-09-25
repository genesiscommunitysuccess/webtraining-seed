import {customElement, FASTElement} from '@microsoft/fast-element';
import {ordersTemplate as template} from './orders.template';
import {ordersStyles as styles} from './orders.styles';

const name = 'orders-route'

@customElement({
    name,
    template,
    styles
})

export class Orders extends FASTElement { }