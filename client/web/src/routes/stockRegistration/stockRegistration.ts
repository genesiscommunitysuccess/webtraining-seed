import {customElement, FASTElement, observable} from '@microsoft/fast-element';
import {stockRegistrationTemplate as template} from './stockRegistration.template';
import {stockRegistrationStyles as styles} from './stockRegistration.styles';
import {Tabs, Modal } from '@genesislcap/foundation-zero';

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
    @observable edit: boolean = false;

    count: number = 0;

    addNewStock(){
        if(!this.validateForms()) { return }
        this.addToStockList();
        this.addToDisplay();
        this.newStockModal.close();
        this.resetForms();
    }

    modify(){
        const currentTabId = this.displayTabs.activeid
        const indexlist = this.listOfStock.findIndex( (stock) => String(stock.stockId) ==  currentTabId)
        const indexdisplay = this.displayStock.findIndex( (stock) => String(stock.stockId) ==  currentTabId)

        if(!this.validateForms()) { return }
        this.displayStock.splice(indexdisplay,1)
        this.listOfStock.splice(indexdisplay,1)
        this.addToStockList()

        this.selectStock = String(this.listOfStock[indexlist].stockId)
        this.addToDisplay()
        this.newStockModal.close();
        this.resetForms();
    }

    addToStockList(){
        this.listOfStock.push({
            stockId: this.stockId,
            companyName: this.companyName,
            symbol: this.symbol,
            price: this.price,
            tradingVolume: this.tradingVolume,
            CEOName: this.CEOName,
        });
    }
    addToDisplay(){
        this.displayStock.push({
            stockId: this.stockId,
            companyName: this.companyName,
            symbol: this.symbol,
            price: this.price,
            tradingVolume: this.tradingVolume,
            CEOName: this.CEOName,
        });
    }

    openModal(){
        this.edit = false;
        this.stockId = Math.floor(Math.random() * 9000000000) + 1000000000;
        this.newStockModal.show();
    }

    editStock(){
        const currentTabId = this.displayTabs.activeid
        const index = this.listOfStock.findIndex( (stock) => String(stock.stockId) ==  currentTabId)
        const tempStock = this.listOfStock[index];

        this.newStockModal.show();
        this.stockId = tempStock.stockId;
        this.companyName = tempStock.companyName;
        this.symbol = tempStock.symbol;
        this.price = tempStock.price;
        this.tradingVolume = tempStock.tradingVolume;
        this.CEOName = tempStock.CEOName;
        this.edit = true;
    }

    deleteStock(){
        const currentTabId = this.displayTabs.activeid
        const indexlist = this.listOfStock.findIndex( (stock) => String(stock.stockId) ==  currentTabId)
        const indexdisplay = this.displayStock.findIndex( (stock) => String(stock.stockId) ==  currentTabId)

        this.listOfStock.splice(indexlist,1);
        this.displayStock.splice(indexdisplay,1);

    }

    closeTab(){
        const currentTabId = this.displayTabs.activeid
        const index = this.displayStock.findIndex( (stock) => String(stock.stockId) ==  currentTabId)
        this.displayStock.splice(index,1)
    }

    selectedStock(){
        if (this.selectStock == null){
            this.selectStock = "";
        }
        console.log("selectedStock(): " + this.selectStock)
        const index = this.listOfStock.findIndex( (stock) => String(stock.stockId) ==  this.selectStock)

        if(this.displayStock.findIndex( (stock) => String(stock.stockId) == this.selectStock) < 0){
            this.displayStock.push(this.listOfStock[index])
            this.displayTabs.activeid = this.selectStock
        } else {
            this.displayTabs.activeid = this.selectStock
        }

    }

    changeTabs(){
      this.selectStock = this.displayTabs.activeid
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

    validateForms(){
        if( this.symbol == null || this.symbol.length < 3){
            alert("Stock symbol needs to be at least 3 characters long")
            return false
        } else {
            return true
        }
    }

}