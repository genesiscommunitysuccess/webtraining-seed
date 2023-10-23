import {customElement, FASTElement, observable} from '@microsoft/fast-element';
import {myTemplate as template} from './playground.template';
import {playgroundStyles as styles} from './playground.styles';
import {Tabs} from '@genesislcap/foundation-zero';

@customElement({
    name: "playground-route",
    template,
    styles
})



export class Playground extends FASTElement {
    localTabs: Tabs
    @observable tabId: string

    changeValues(){
        this.tabId = this.localTabs.activeid
    }

    connectedCallback(){
        super.connectedCallback()

        this.tabId = this.localTabs.activeid
    }

}