import {customElement, FASTElement} from '@microsoft/fast-element';
import {positionsTemplate as template} from './positions.template';
import {positionsStyles as styles} from './positions.styles';

const name = 'positions-route'

@customElement({
    name,
    template,
    styles
})

export class Positions extends FASTElement {

}