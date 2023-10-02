import {customElement, FASTElement, observable} from '@microsoft/fast-element';
import {positionsTemplate as template} from './positions.template';
import {positionsStyles as styles} from './positions.styles';
import {TextField} from '@genesislcap/foundation-zero';

const name = 'positions-route'

@customElement({
    name,
    template,
    styles
})

export class Positions extends FASTElement {

    @observable text_value: string
    @observable text_area: string
    @observable number_field: number
    @observable slider_value_number: number
    @observable slider_value_string: string
    @observable checkbox: boolean
    @observable combobox: string
    @observable select: string
    @observable options: Array<string> = []
    @observable selectOptions: Array<{value: string, label: string}> = []
    @observable selected_value: string


    display(x){
        console.log(x)
    }
    connectedCallback(){
        super.connectedCallback()
        this.number_field= 50
        for (let i = 0; i < 4; i++) {
          this.options.push("Label " + i);
          this.selectOptions.push({value:"v" + i, label: "Label " + i})
        }
        console.log("I was here")
    }
}