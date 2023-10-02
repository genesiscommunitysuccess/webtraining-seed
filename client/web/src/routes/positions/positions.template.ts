import {html,ref, repeat} from '@microsoft/fast-element';
import {Positions} from './positions';
import {positionsStyles} from './positions.styles';
import {sync} from '@genesislcap/foundation-utils';

export const positionsTemplate = html<Positions>`
    <zero-combobox  form="hi" value="${sync((x) => x.combobox)}" @change=${(x) => x.display(x.combobox)}>
        <zero-option disabled>Christopher Eccleston</zero-option>
        <zero-option selected value="4">David Tennant</zero-option>
        <zero-option value="3">Matt Smith</zero-option>
        <zero-option value="5">Peter Capaldi</zero-option>
        <zero-option value="6">Jodie Whittaker</zero-option>
    </zero-combobox>

    <zero-combobox :value=${sync(x=> x.select)} @change=${x => x.display(x.select)}>
          ${repeat(x => x.options, html`
            <zero-option>${x => x}</zero-option>
          `)}
        </zero-combobox>

    <zero-text-field form="hi" placeholder="don't touch me" value="this is a text field" value=${sync((x) => x.text_value)} @change=${(x) => x.display(x.text_value)}>Name</zero-text-field>
    <zero-slider form="hi" min="0" max="151" valueAsNumber=${sync((x) => x.slider_value_number)} valueTextFormatter=${sync((x) => x.slider_value_string)} @change=${(x) => x.display(x.slider_value_number)}>
        <zero-slider-label position="0"> 0 </zero-slider-label>
        <zero-slider-label position="10"> 10 </zero-slider-label>
        <zero-slider-label position="90"> 90 </zero-slider-label>
        <zero-slider-label position="100"> 100 </zero-slider-label>
    </zero-slider>
    <form id="hi">
    <zero-select form="hi" :value=${sync((x) => x.selected_value)} @change=${(x) => x.display(x.selected_value)}>
       ${repeat(x => x.selectOptions, html`
                  <zero-option value=${x => x.value}>${x => x.label}</zero-option>
                `)}
    </zero-select>

    <zero-text-area appearance="filled" value="this is a text area" value=${sync((x) => x.text_area)} @change=${(x) => x.display(x.text_area)}>TEXT</zero-text-area>

    <zero-number-field form="hi" value="100" :value=${sync((x) => x.number_field)} @change=${(x) => x.display(x.number_field)} > hi </zero-number-field>

    <zero-checkbox checked :checked="${sync((x) => x.checkbox, 'boolean')}" @change=${(x) => x.display(x.checkbox)}></zero-checkbox>
    </br>


    </form>
 <zero-button form="hi" @click=${x => x.display(x.number_field)} type="reset" >Reset</zero-button>

`;