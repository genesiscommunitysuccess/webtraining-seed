import {customElement, FASTElement, observable} from '@microsoft/fast-element';
import {myTemplate as template} from './playground.template';
import {playgroundStyles as styles} from './playground.styles';
import {Connect} from '@genesislcap/foundation-comms';
import {Modal} from '@genesislcap/foundation-zero'
import {GridPro} from '@genesislcap/grid-pro';

const name = 'playground-route'

@customElement({
    name,
    template,
    styles
})

export class Playground extends FASTElement {

    @Connect connection: Connect

    @observable availableDirection: string[] = [];
    @observable availableCounterparty: {id: string; name: string}[] = []
    @observable availableInstrument: {id: string; name: string}[] = []
    @observable availableStatus: string[] = []
    @observable direction: string;
    @observable symbol: string;
    @observable counterpartyId: string;
    @observable instrumentId: string;
    @observable quantity: number;
    @observable price: number;
    @observable status: string;
    @observable modify: boolean;
    trade_id: string;
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
    tradeGrid: GridPro

    newTradeModal: Modal

     async modifyTrade(){
            const modifyTradeEvent = await this.connection.commitEvent('EVENT_TRADE_MODIFY', {
                    DETAILS: {
                        TRADE_ID: this.trade_id,
                        DIRECTION: this.direction,
                        SYMBOL: this.symbol,
                        COUNTERPARTY_ID: this.counterpartyId,
                        INSTRUMENT_ID: this.instrumentId,
                        QUANTITY: this.quantity,
                        PRICE: this.price,
                        TRADE_STATUS: this.status
                    }
                },)
                    console.log(modifyTradeEvent)
                    this.newTradeModal.close()
        }


        openModifyModal(rowData){
            this.modify = true
            this.trade_id = rowData.TRADE_ID
            this.direction = rowData.DIRECTION
            this.symbol = rowData.SYMBOL
            this.counterpartyId = rowData.COUNTERPARTY_ID
            this.instrumentId = rowData.INSTRUMENT_ID
            this.quantity = rowData.QUANTITY
            this.price = rowData.PRICE
            this.status = rowData.TRADE_STATUS
            this.newTradeModal.show()
        }

    createInsertTradeForms(){
        this.modify = false
        this.direction = 'BUY'
        this.symbol = ''
        this.counterpartyId = ''
        this.instrumentId = ''
        this.quantity = null
        this.price = null
        this.status = 'NEW'
        this.newTradeModal.show()
    }

    async submitTrade(){
        const insertTradeEvent = await this.connection.commitEvent('EVENT_TRADE_INSERT', {
            DETAILS: {
                DIRECTION: this.direction,
                SYMBOL: this.symbol,
                COUNTERPARTY_ID: this.counterpartyId,
                INSTRUMENT_ID: this.instrumentId,
                QUANTITY: this.quantity,
                PRICE: this.price,
                STATUS: this.status
            }
        },)
            this.newTradeModal.close()
    }

    async connectedCallback() {
        super.connectedCallback();

        const msgInsertEvent = await this.connection.getMetadata('EVENT_TRADE_INSERT')
        const directionField = msgInsertEvent.FIELD?.find(field => field.NAME == 'DIRECTION');
        const statusField = msgInsertEvent.FIELD?.find(field => field.NAME == 'TRADE_STATUS');

        this.availableDirection = Array.from(directionField.VALID_VALUES);
        this.direction = this.availableDirection[0]

        this.availableStatus = Array.from(statusField.VALID_VALUES);
        this.status = this.availableStatus[0]

        const msgAllCounterparties = await this.connection.snapshot('ALL_COUNTERPARTIES');
        this.availableCounterparty = Array.from(msgAllCounterparties.ROW.map((row) => ({
            id: row.COUNTERPARTY_ID,
            name: row.COUNTERPARTY_NAME
        })));
        this.counterpartyId = this.availableCounterparty[0].id;

        const msgAllInstruments = await this.connection.snapshot('ALL_INSTRUMENTS');
        this.availableInstrument = Array.from(msgAllInstruments.ROW.map((row) => ({
            id: row.INSTRUMENT_ID,
            name: row.INSTRUMENT_NAME
        })));
        this.instrumentId = this.availableInstrument[0].id;
    }

}