import {ZeroGridPro, zeroGridProTemplate} from '@genesislcap/foundation-zero-grid-pro';
import {customElement, attr} from '@microsoft/fast-element';
import {trainingGridStyles} from './training-grid.styles';


@customElement({
  name: 'training-grid',
  template: zeroGridProTemplate,
  styles: trainingGridStyles,
})
export class TrainingGrid extends ZeroGridPro {
    @attr greeting: string

    emitEvent(){
        this.$emit('traininggridevent',this.greeting)
    }
}