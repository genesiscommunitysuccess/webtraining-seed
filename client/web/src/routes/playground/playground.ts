import {customElement, FASTElement, observable} from '@microsoft/fast-element';
import {myTemplate as template} from './playground.template';
import {playgroundStyles as styles} from './playground.styles';
import {Slider} from '@genesislcap/foundation-zero';

const name = 'playground-route'

@customElement({
    name,
    template,
    styles
})

export class Playground extends FASTElement {
    @observable slider_value: number;
    @observable checkbox_value: boolean = false;

    readOnlySlider(){
        const localSlider = this.shadowRoot.getElementById("slider-local") as Slider

        localSlider.readOnly = !this.checkbox_value;

    }

    changeBackgroundColor(){
        const localCheckboxValueField = this.shadowRoot.getElementById("checkbox_value_field")

        if (this.slider_value < 30){
            localCheckboxValueField.style.backgroundColor = "green"
        } else if (this.slider_value < 80){
            localCheckboxValueField.style.backgroundColor = "blue"
        } else {
            localCheckboxValueField.style.backgroundColor = "red"
        }

    }
}