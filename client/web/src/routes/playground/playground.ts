import {customElement, FASTElement, observable} from '@microsoft/fast-element';
import {myTemplate as template} from './playground.template';
import {playgroundStyles as styles} from './playground.styles';
import {FoundationLayout} from '@genesislcap/foundation-layout'
import {DEFAULT_LAYOUT} from './pre-defined-layout';


const name = 'playground-route'


@customElement({
    name,
    template,
    styles
})

export class Playground extends FASTElement {
    layout: FoundationLayout

      resetLayout() {
        this.layout.loadLayout(JSON.parse(DEFAULT_LAYOUT));
      }
}