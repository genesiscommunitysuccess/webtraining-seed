import {customElement, FASTElement, observable} from '@microsoft/fast-element';
import {myTemplate as template} from './playground.template';
import {playgroundStyles as styles} from './playground.styles';
import {Slider} from '@genesislcap/foundation-zero'

const name = 'playground-route'

@customElement({
    name,
    template,
    styles
})

export class Playground extends FASTElement {

    connectedCallback(){
        super.connectedCallback();
        var elementInsideShadowDOM = this.shadowRoot.getElementById('slider') as Slider;
        console.log(elementInsideShadowDOM.max)
    }

}