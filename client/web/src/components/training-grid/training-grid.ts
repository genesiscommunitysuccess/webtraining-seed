import {ZeroGridPro, zeroGridPRoTemplate} from '@genesislcap/foundation-zero';
import {customElement} from '@microsoft/fast-element';
import {trainingGridStyles} from './training-grid.styles';

@customElement ({
    name: 'training-grid',
    template: zeroGridPRoTemplate,
    styles: trainingGridStyles
})

export class trainingGrid extends ZeroGridPro {

}