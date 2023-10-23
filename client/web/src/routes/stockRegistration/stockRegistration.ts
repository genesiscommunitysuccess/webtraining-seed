import {customElement, FASTElement, observable} from '@microsoft/fast-element';
import {stockRegistrationTemplate as template} from './stockRegistration.template';
import {stockRegistrationStyles as styles} from './stockRegistration.styles';
import {Tabs, Modal} from '@genesislcap/foundation-zero';

@customElement({
    name: "stock-route",
    template,
    styles
})



export class StockRegistration extends FASTElement {

    displayTabs: Tabs;
    newStockModal: Modal;

    @observable stockId: number;
    @observable companyName: string;
    @observable symbol: string;
    @observable price: number;
    @observable tradingVolume: number
    @observable CEOName: string;
    @observable listOfStock: {
        stockId: number;
        companyName: string;
        symbol: string;
        price: number;
        tradingVolume: number;
        CEOName: string;
    }[] = [];
    @observable displayStock = [] as typeof this.listOfStock;
    @observable selectStock: string;

    count: number = 0;

    addNewStock(){
        this.listOfStock.push({
            stockId: this.stockId,
            companyName: this.companyName,
            symbol: this.symbol,
            price: this.price,
            tradingVolume: this.tradingVolume,
            CEOName: this.CEOName,
        });
        this.displayStock.push({
            stockId: this.stockId,
            companyName: this.companyName,
            symbol: this.symbol,
            price: this.price,
            tradingVolume: this.tradingVolume,
            CEOName: this.CEOName,
        });
        this.newStockModal.close();
        this.resetForms();
    }

    openModal(){
        this.stockId = Math.floor(Math.random() * 9000000000) + 1000000000;
        this.newStockModal.show();
    }

    closeTab(){
        const currentTabId = this.displayTabs.activeid
        const index = this.listOfStock.findIndex( (stock) => String(stock.stockId) ==  currentTabId)
        this.displayStock.splice(index,1)
    }

    selectedStock(){
        const index = this.listOfStock.findIndex( (stock) => String(stock.stockId) ==  this.selectStock)

        if(this.displayStock.findIndex( (stock) => String(stock.stockId) == this.selectStock) < 0){
            this.displayStock.push(this.listOfStock[index])
            this.displayTabs.activeid = this.selectStock
        } else {
            this.displayTabs.activeid = this.selectStock
        }

    }

    resetForms(){
        this.stockId = null;
        this.companyName = null;
        this.symbol = null;
        this.price = null;
        this.tradingVolume = null;
        this.CEOName = null;
    }

    connectedCallback(){
        super.connectedCallback()
        this.newStockModal.onCloseCallback = () =>{
            this.resetForms()
        }
    }


}