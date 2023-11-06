export const UISchema ={
    type: "VerticalLayout",
    elements: [
        {
            type: "Control",
            scope: "#/properties/QUANTITY",
            label: "Quantity",
        },
        {
            type: "Control",
            scope: "#/properties/PRICE",
            label: "PRICE",
        },
        {
            type: "Control",
            scope: "#/properties/TRADE_STATUS",
            label: "Status",
        },
        {
            type: "Control",
            scope: "#/properties/INSTRUMENT_ID",
            label: "Instrument",
            options: {
                allOptionsResourceName: "ALL_INSTRUMENTS",
                valueField: "INSTRUMENT_ID",
                labelField: "INSTRUMENT_NAME"
            }
        }
    ]
};