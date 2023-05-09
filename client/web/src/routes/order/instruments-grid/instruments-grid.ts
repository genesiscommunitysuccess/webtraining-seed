import {customElement, FASTElement, observable, attr } from '@microsoft/fast-element';
import { instrumentsGridTemplate } from './instruments-grid.template';
import {Connect} from '@genesislcap/foundation-comms';

@customElement({
  name: 'instruments-grid',
  template: instrumentsGridTemplate
})

export class InstrumentsGrid extends FASTElement {

}