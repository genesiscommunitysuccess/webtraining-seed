import {customElement, FASTElement, observable} from '@microsoft/fast-element';
import {myTemplate as template} from './playground.template';
import {playgroundStyles as styles} from './playground.styles';
import {Tabs, TreeItem as zeroTreeItem, Banner} from '@genesislcap/foundation-zero';

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
    @observable numberValue: number

    zeroTabs: Tabs
    treeItem: zeroTreeItem
    banner2: Banner
    display(x){
        console.log("you changed to: " + x)
    }
    display1(x){
        this.comboValue = x
        console.log("Combobox: " + this.comboValue)
    }
    changeTree(){
        console.log("I was selected")
    }
    change(x){
        x = !x
        console.log("I was changed to " + x)
    }
    createBanner(bannerId: string, placeholder: string){

        // Create the banner element
        const bannerElement = document.createElement('zero-banner');
        bannerElement.id = bannerId;

        // Set the HTML content of the banner element
        bannerElement.innerHTML = `
            <div slot="content">
                ${placeholder}
            </div>
            <zero-button slot="action" appearance="lightweight" style="margin-right: 5px;">Ignore</zero-button>
            <zero-button id="b${bannerElement.id}" slot="action" appearance="lightweight" style="margin-right: 5px;">Ignore2</zero-button>
        `;

        // Get the host div where you want to append the banner
        const hostdiv = this.shadowRoot.getElementById(placeholder);

        console.log(hostdiv)

        hostdiv.appendChild(bannerElement)

        const button2 = this.shadowRoot.getElementById('b' + bannerElement.id);
        const tempBanner = this.shadowRoot.getElementById(bannerElement.id)  as Banner
        button2.addEventListener('click', function() {tempBanner.dismiss()});
    }

    connectedCallback(){
        super.connectedCallback();
        this.treeItem.expanded = true;
    }
}