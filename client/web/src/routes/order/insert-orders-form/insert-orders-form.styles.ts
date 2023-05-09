import {css, ElementStyles} from "@microsoft/fast-element";
import { mixinScreen } from '../../../styles';

export const insertOrdersFormStyles = css`
  :host {
    ${mixinScreen('flex')}
    justify-content: top;
    flex-direction: column;
    display: block;
  }

  .required-yes {
    color: red;
  }

  .column-split-layout {
    margin-up: 5%;
    display: flex;
    flex-direction: column;
    vertical-align: center;

  }

  span, zero-select {
  display: block;
  }

`;