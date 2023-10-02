import {customElement, FASTElement, observable} from '@microsoft/fast-element';
import {myTemplate as template} from './playground.template';
import {playgroundStyles as styles} from './playground.styles';

const name = 'playground-route'

@customElement({
    name,
    template,
    styles
})

export class Playground extends FASTElement {
    @observable apple: boolean = false
    @observable honey: boolean
    @observable mango: boolean
    @observable banana: boolean
    @observable comboValue: string

    display(){
        console.log("apple: " + this.apple)
    }
    display1(x){
        this.comboValue = x
        console.log("Combobox: " + this.comboValue)
    }
    change(x){
        x = !x
        console.log("I was changed to " + x)
    }

    connectedCallback(){
        super.connectedCallback();


    }
}