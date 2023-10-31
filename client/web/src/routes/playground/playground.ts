import {customElement, FASTElement, observable} from '@microsoft/fast-element';
import {myTemplate as template} from './playground.template';
import {playgroundStyles as styles} from './playground.styles';
import {Connect} from '@genesislcap/foundation-comms';
import {Modal} from '@genesislcap/foundation-zero'
import {logger} from '../../utils';

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


    newTradeModal: Modal


    createInsertTradeForms(){
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
        }
    },)
        console.log(insertTradeEvent)
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