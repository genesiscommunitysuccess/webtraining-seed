import {css} from "@microsoft/fast-element";
import { mixinScreen } from '../../styles';

export const OrderStyles = css`
  :host {
    ${mixinScreen('flex')}
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .column-split-layout {
    text-align: center;
    flex-direction: column;
    flex: 1;
    width: 100%;
  }

  .row-split-layout {
    justify-content: center;
    display: block;
    flex-direction: row;
    flex: 1;
    width: 100%;
    height: 50%;
  }

  .required-yes {
    color: red;
  }

  zero-select, zero-text-field, zero-text-area, span{
      display: block;
  }
`