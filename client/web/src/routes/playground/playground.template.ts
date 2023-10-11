import {html} from '@microsoft/fast-element';
import {Playground} from './playground';
import {playgroundStyles} from './playground.styles';
import {sync} from '@genesislcap/foundation-utils';


export const myTemplate = html<Playground>`
    <h2>This is my first component</h2>

    <!-- Slider -->
    <zero-slider id="slider" min="0" max="100" step="10">
        Slider
        <zero-slider-label
            position=50 >
            Trigger
        </zero-slider-label>
    </zero-slider>

    <!-- Checkbox -->
    <zero-checkbox>Checkbox</zero-checkbox>


    <!-- Components to display information -->
`;