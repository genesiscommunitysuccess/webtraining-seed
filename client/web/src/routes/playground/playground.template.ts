import {html} from '@microsoft/fast-element';
import {Playground} from './playground';
import {playgroundStyles} from './playground.styles';
import {sync} from '@genesislcap/foundation-utils';


export const myTemplate = html<Playground>`
    <h2>This is my first component</h2>

    <!-- checkbox -->
    <zero-checkbox checked="true" @change=${(x) => x.readOnlySlider()} :checked="${sync((x) => x.checkbox_value, 'boolean')}">Checkbox</zero-checkbox>

   <!-- Slider -->
    <zero-slider @change=${(x) => x.changeBackgroundColor()} id="slider-local" :value=${sync((x) => x.slider_value)} min="0" max="100" step="10">
        <zero-slider-label position="30"> Low </zero-slider-label>
        <zero-slider-label position="50"> Mid </zero-slider-label>
        <zero-slider-label position="80"> High </zero-slider-label>
    </zero-slider>


   <!-- see these values-->
    <zero-text-field readonly :value=${sync((x) => x.slider_value)}>Slider Value</zero-text-field>
    <zero-text-field id="checkbox_value_field" readonly :value=${sync((x) => x.checkbox_value)}>Checkbox Value</zero-text-field>


`;