import {html, ref, repeat} from '@microsoft/fast-element';
import {Orders} from './orders';
import {ordersStyles} from './orders.styles';
import { TrainingGrid } from '../../components/training-grid/training-grid';
import { trainingGridColumnDefs } from '../../components/training-grid/trainingGridColumnDefs';

TrainingGrid;


export const ordersTemplate = html<Orders>`

    <zero-button @click=${(x) => x.openModal()}>Add new order</zero-button>
    <zero-modal ${ref('newOrderModal')} position="right" id="stockModal" class="ScrollOn">
        <foundation-form ${ref('newOrderForms')} resourceName="EVENT_ORDER_INSERT" @submit-success=${(x) => x.closeModal()}></foundation-form>
    </zero-modal>

    <training-grid resourceName="ALL_INSTRUMENTS"></training-grid>
`;