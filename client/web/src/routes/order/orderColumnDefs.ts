import {ColDef} from '@ag-grid-community/core';
import {formatNumber} from '../../utils/formatting';

export const orderColumnDefs: ColDef[] = [
    {field: 'INSTRUMENT_ID', headerName: 'Instrument', sort: 'desc', flex: 2},
    {field: 'QUANTITY', headerName: 'Quantity', valueFormatter: formatNumber(0), type: 'rightAligned', cellClass: (params) => params.value >= 100 ? 'sell-direction' : 'buy-direction', flex: 1, enableCellChangeFlash: true},
    {field: 'ORDER_ID', headerName: 'Order ID', flex: 1, enableCellChangeFlash: true},
    {field: 'PRICE', headerName: 'Price', valueFormatter: formatNumber(2), type: 'rightAligned', flex: 1, enableCellChangeFlash: true},
    {field: 'DIRECTION', headerName: 'Order Side', cellClass: (params) => params.value === 'BUY' ? 'buy-direction' : 'sell-direction', sort: 'desc', flex: 2},
    {field: 'NOTES', headerName: 'Notes', sort: 'desc', cellClass: 'notes-column', flex: 2},

];