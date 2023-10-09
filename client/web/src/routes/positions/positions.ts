import {customElement, FASTElement, observable} from '@microsoft/fast-element';
import {positionsTemplate as template} from './positions.template';
import {positionsStyles as styles} from './positions.styles';
import {TextField, Combobox, Select, Modal as zeroModal, Dialog as zeroDialog, Menu} from '@genesislcap/foundation-zero';

@customElement({
    name: "positions-route",
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

    environmentAlertModal: zeroModal;
    combo : Combobox;
    localDialog: zeroDialog;
    zeroSelect: Select;
    zeroMenu: Menu;

    openModal(){
        this.environmentAlertModal.show()
    }

    close(){
        this.zeroMenu.collapseExpandedItem() // Does not work
    }
    closeModal(){
        this.environmentAlertModal.close()
    }
    display(x){
        console.log(this.zeroSelect.length)
        console.log(x)
    }
    connectedCallback(){
        super.connectedCallback()

         this.environmentAlertModal.onShowCallback = () => {
                alert("yes, it worked")
            }

         this.environmentAlertModal.onCloseCallback = () => {
                alert("yes, it worked too")
            }

        this.number_field= 50
        for (let i = 0; i < 4; i++) {
          this.options.push("Label " + i);
          this.selectOptions.push({value:"v" + i, label: "Label " + i})
        }
    }
}