import {css} from '@microsoft/fast-element';

export const playgroundStyles = css`
    #selectStock{
        position: absolute;
        top: 100px;
        right: 20px;
    }

    #newTradeForm {
        display: flex;
        flex-direction: column;
        width: 300px;
    }

    .ScrollOn {
        overflow-y: scroll;
        overflow-x: hidden;
    }
`;