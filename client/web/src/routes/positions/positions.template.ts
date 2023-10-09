import {html,ref, repeat} from '@microsoft/fast-element';
import {Positions} from './positions';
import {positionsStyles} from './positions.styles';
import {sync} from '@genesislcap/foundation-utils';

export const positionsTemplate = html<Positions>`


    <zero-text-field form="hi" placeholder="don't touch me" value="this is a text field" value=${sync((x) => x.text_value)} @change=${(x) => x.display(x.text_value)}>Name</zero-text-field>
    <zero-slider form="hi" min="0" max="151" valueAsNumber=${sync((x) => x.slider_value_number)} valueTextFormatter=${sync((x) => x.slider_value_string)} @change=${(x) => x.display(x.slider_value_number)}>
        <zero-slider-label position="0"> 0 </zero-slider-label>
        <zero-slider-label position="10"> 10 </zero-slider-label>
        <zero-slider-label position="90"> 90 </zero-slider-label>
        <zero-slider-label position="100"> 100 </zero-slider-label>
    </zero-slider>
    <form id="hi">

    <zero-select ${ref('zeroSelect')} size="2" form="hi" :value=${sync((x) => x.selected_value)} @change=${(x) => x.display(x.selected_value)}>
        <zero-option>1</zero-option>
        <zero-option>2</zero-option>
        <zero-option>3</zero-option>
        <zero-option>4</zero-option>
    </zero-select>

    <zero-text-area appearance="filled" value="this is a text area" value=${sync((x) => x.text_area)} @change=${(x) => x.display(x.text_area)}>TEXT</zero-text-area>

    <zero-number-field form="hi" value="100" :value=${sync((x) => x.number_field)} @change=${(x) => x.display(x.number_field)} > hi </zero-number-field>

    <zero-checkbox checked :checked="${sync((x) => x.checkbox, 'boolean')}" @change=${(x) => x.display(x.checkbox)}></zero-checkbox>
    </br>t

    </form>
 <zero-button form="hi" @click=${x => x.display(x.number_field)} type="reset" >Reset</zero-button>
 <zero-button form="hi" @click=${x => x.close()}>close</zero-button>


  <alpha-button id="js-alpha-show-modal" appearance="accent" @click=${x => x.environmentAlertModal.show()}>Show Rapid Modal</alpha-button>
  <alpha-modal position="right" ${ref('environmentAlertModal')}>
    <h5 slot="top">Modal title</h5>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit/</p>
    <alpha-button slot="bottom" @click=${x => x.environmentAlertModal.close()}}>Close this modal</alpha-button>
  </alpha-modal>

    <alpha-button @click=${x => x.localDialog.show()}>Show Dialog</alpha-button>
    <alpha-dialog no-focus-trap="false" show-close-icon="false" ${ref('localDialog')}>
      <h5 slot="top">Dialog</h5>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit/</p>
      <alpha-button slot="bottom" @click=${x => x.localDialog.close()}}>Close this modal</alpha-button>
    </alpha-dialog>


<zero-menu>
    <zero-menu-item @change=${() => console.log("you changed me")}>Menu item one</zero-menu-item>
    <zero-menu-item>Menu item two</zero-menu-item>
    <zero-menu-item expanded>
        Menu item three
        <zero-menu>
            <zero-menu-item disabled @click=${() => console.log("clickd on me")} @change=${() => console.log("i was cliked")} >Nested item one</zero-menu-item>
            <zero-menu-item>Nested item two</zero-menu-item>
            <zero-menu-item>
                Nested item three
                <zero-menu>
                    <zero-menu-item>Nested item one</zero-menu-item>
                    <zero-menu-item>Nested item two</zero-menu-item>
                </zero-menu>
            </zero-menu-item>
        </zero-menu>
    </zero-menu-item>
    <zero-menu-item>Menu item four</zero-menu-item>
</zero-menu>
`;