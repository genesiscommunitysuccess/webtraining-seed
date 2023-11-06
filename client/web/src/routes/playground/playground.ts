import {customElement, FASTElement, observable} from '@microsoft/fast-element';
import {myTemplate as template} from './playground.template';
import {playgroundStyles as styles} from './playground.styles';
import {Connect} from '@genesislcap/foundation-comms';
import {Modal} from '@genesislcap/foundation-zero'
import {GridPro} from '@genesislcap/grid-pro';
import {Form} from '@genesislcap/foundation-forms';
import {FoundationLayout, CustomButton, LAYOUT_ICONS, LayoutReceiveEvents, LayoutReceiveEventsDetail } from '@genesislcap/foundation-layout'
import {DEFAULT_LAYOUT} from './pre-defined-layout';

const name = 'playground-route'

Form

@customElement({
    name,
    template,
    styles
})

export class Playground extends FASTElement {

    @Connect connection: Connect
    @observable resourceName: string
    @observable columnsDefTrade = [
        {field: "TRADE_ID", onCellDoubleClicked: (e) => this.openModifyModal(e.data)},
        {field: "DIRECTION"},
        {field: "COUNTERPARTY_ID"},
        {field: "INSTRUMENT_ID"},
        {field: "QUANTITY"},
        {field: "PRICE"},
        {field: "SYMBOL"},
        {field: "TRADE_STATUS"},
    ]

  @observable chartConfiguration = {
    width: 800,
    angleField: 'value',
    colorField: 'groupBy',
    radius: 0.75,
    label: {
      type: 'spider',
      labelHeight: 28,
      content: '{name}\n{percentage}',
      style: {
        fill: 'white',
      },
    },
    interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
  };

    @observable data: {
        COUNTERPARTY_ID: string;
        DIRECTION: string;
        ENTERED_BY: string;
        INSTRUMENT_ID: string;
        PRICE: number;
        QUANTITY: number;
        SYMBOL: string;
        TRADE_ID: string;
        TRADE_STATUS: string;
    }
    @observable buttonDefinition: CustomButton[] = [ {
        svg: LAYOUT_ICONS.renameSVG,
        onClick: (button: HTMLElement, elem: HTMLElement) => {
          const title = prompt('New name?');
          const event: LayoutReceiveEventsDetail['changeTitle'] = {
            title,
            mode: 'replace',
          };
          elem.dispatchEvent(
            new CustomEvent(LayoutReceiveEvents.changeTitle, { detail: event, bubbles: true }),
          );
        },
      }
    ]

  resetLayout() {
    this.layout.loadLayout(JSON.parse(DEFAULT_LAYOUT));
  }

    tradeGrid: GridPro
    tradeForms: Form
    trade_id: string;
    newTradeModal: Modal
    layout: FoundationLayout;

    closeModal(){
        this.newTradeModal.close()
        this.tradeForms.reset()
    }

    openModifyModal(rowData){
        this.resourceName = "EVENT_TRADE_MODIFY"
        this.data ={
            COUNTERPARTY_ID: rowData.COUNTERPARTY_ID,
            DIRECTION: rowData.DIRECTION,
            ENTERED_BY: rowData.ENTERED_BY,
            INSTRUMENT_ID: rowData.INSTRUMENT_ID,
            PRICE: rowData.PRICE,
            QUANTITY: rowData.QUANTITY,
            SYMBOL: rowData.SYMBOL,
            TRADE_ID: rowData.TRADE_ID,
            TRADE_STATUS: rowData.TRADE_STATUS,
        }
        this.newTradeModal.show()
    }

    createInsertTradeForms(){
        this.resourceName = "EVENT_TRADE_INSERT"
        this.newTradeModal.show()
    }

    async connectedCallback() {
        super.connectedCallback();

    }

}