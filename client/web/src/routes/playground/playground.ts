import {customElement, FASTElement, observable} from '@microsoft/fast-element';
import {myTemplate as template} from './playground.template';
import {playgroundStyles as styles} from './playground.styles';
import { Modal as ZeroModal, Banner as zeroBanner} from '@genesislcap/foundation-zero'
import { DropdownMenu } from '@genesislcap/foundation-zero';
import { Connect } from '@genesislcap/foundation-comms';

const name = 'playground-route'

@customElement({
    name,
    template,
    styles
})
/*
const showcaseDropdown = [
      {
        name: 'Menu item 1',
        callback: () => console.log(`Menu item 1`),
      },
      {
        name: 'Menu item 2',
        callback: () => console.log(`Menu item 2`),
        isDisabled: () => true,
      },
      {
        name: 'Menu item 3',
        callback: () => console.log(`Menu item 3`),
        submenu: [
          {
          name: 'Menu item 5',
          callback: () => console.log(`Menu item 5`),
          },
          {
            name: 'Menu item 6',
            callback: () => console.log(`Menu item 6`),
            submenu: [
              {
              name: 'Menu item 7',
              callback: () => console.log(`Menu item 7`),
              icon: {
                name: "apple",
                variant: "brand"
              },
              submenu: [
                {
                name: 'Menu item 9',
                callback: () => console.log(`Menu item 9`),
                icon: {
                  name: "apple",
                  variant: "brand"
                }
                },
                {
                  name: 'Menu item 10',
                  callback: () => console.log(`Menu item 10`),
                },
              ]
              },
              {
                name: 'Menu item 8',
                callback: () => console.log(`Menu item 8`),
                isDisabled: () => true,
              },
            ]
          },
        ]
      },
      {
        name: 'Menu item 4',
        callback: () => console.log(`Menu item 4`),
        isDisabled: () => true,
      },
    ];
*/
export class Playground extends FASTElement {
    @Connect connect: Connect;
    @observable public select_value: string;
    @observable public slider_value: number;
    @observable public counterparty;
    environmentModal: ZeroModal;
    localBanner: zeroBanner;

    public async connectedCallback() { //add this method to Order class
       super.connectedCallback();
       alert("hii");
    }

    closeBanner(){
        this.localBanner.dismiss()
    }

    public async loadData(){
        const msg = await this.connect.snapshot('ALL_COUNTERPARTIES');
        console.log(msg.ROW)

        this.counterparty = msg.ROW?.map(counterparty => ({
                  value: counterparty.COUNTERPARTY_ID, label: counterparty.COUNTERPARTY_NAME}));

        console.log(this.counterparty)

    }


    public async test(){
    console.log(this.select_value)
    console.log(this.slider_value)


    if (this.select_value == 'm'){
        this.slider_value = 50
        this.select_value = 'l'
        }
    }
    stageIsYours(x: string){
    alert("hi " + x)
    }
    openModal(){
        this.environmentModal.show()
    }
}