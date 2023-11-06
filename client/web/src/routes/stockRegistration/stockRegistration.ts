import {customElement, FASTElement, observable} from '@microsoft/fast-element';
import {stockRegistrationTemplate as template} from './stockRegistration.template';
import {stockRegistrationStyles as styles} from './stockRegistration.styles';
import {Tabs, Modal} from '@genesislcap/foundation-zero';
import {Connect} from '@genesislcap/foundation-comms';
import {GridPro} from '@genesislcap/grid-pro';
import {getActionsMenuDef} from '@genesislcap/grid-pro';

@customElement({
    name: "stock-route",
    template,
    styles
})

export class StockRegistration extends FASTElement {

    displayTabs: Tabs;
    newStockModal: Modal;
    connection: Connect;
    @observable stockId: number;
    @observable companyName: string;
    @observable symbol: string;
    @observable price: number;
    @observable tradingVolume: number
    @observable CEOName: string;
    @observable listOfStock
    stockGrid: GridPro
    @observable displayStock: {
                                     stockId: number;
                                     companyName: string;
                                     symbol: string;
                                     price: number;
                                     tradingVolume: number;
                                     CEOName: string;
                                 }[] = [];

    @observable columnsDefStock = [
        {field: 'STOCK_ID', onCellDoubleClicked: (e) => console.log(e.data)},
        {field: "SYMBOL"},
        {field: "CEO"},
        {field: "COMPANY_NAME"},
        {field: "PRICE"},
        {field: "TRADING_VOLUME"},
    ]

    @observable actionMenuDefs = getActionsMenuDef (
        [
            {
                name: 'view',
                callback: rowData => this.updateDisplayedStock(rowData)
            }
        ],
        {
            headerName: 'action',
            width: 100
        },
        '+'
    )


    @observable selectStock: string;
    @observable edit: boolean = false;

    count: number = 0;
     @observable chartConfiguration = {
        xField: 'groupBy',
        yField: 'value',
        };




    openModal(){
        this.newStockModal.show();
        console.log(this.columnsDefStock)
    }
    updateDisplayedStock(data){
        this.displayStock.push({
            stockId: data.STOCK_ID,
            companyName: data.COMPANY_NAME,
            symbol: data.SYMBOL,
            price: data.PRICE,
            tradingVolume: data.TRADING_VOLUME,
            CEOName: data.CEO,
        });
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