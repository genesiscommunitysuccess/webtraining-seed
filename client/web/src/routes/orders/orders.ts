import {customElement, FASTElement} from '@microsoft/fast-element';
import {ordersTemplate as template} from './orders.template';
import {ordersStyles as styles} from './orders.styles';
import {Tabs, Modal} from '@genesislcap/foundation-zero';
import {Connect} from '@genesislcap/foundation-comms';
import {GridPro} from '@genesislcap/grid-pro';
import {getActionsMenuDef} from '@genesislcap/grid-pro';
import {Form} from '@genesislcap/foundation-forms';

const name = 'orders-route'

@customElement({
    name,
    template,
    styles
})

export class Orders extends FASTElement {
    newOrderModal: Modal;
    newOrderForms: Form;

    openModal(){
        this.newOrderModal.show();
    }

    closeModal(){
        this.newOrderModal.close();
        this.newOrderForms.reset();
    }
}