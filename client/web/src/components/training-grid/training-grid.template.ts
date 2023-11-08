import { zeroGridProTemplate } from '@genesislcap/foundation-zero-grid-pro';
import {html, repeat} from '@microsoft/fast-element';
import { trainingGridColumnDefs } from '../../components/training-grid/trainingGridColumnDefs';
import {TrainingGrid} from './training-grid'


export const TrainingGridTemplate = html <TrainingGrid>`
    <zero-grid-pro>
        <grid-pro-genesis-datasource
                  resource-name=${(x) => x.resourceName}
        </grid-pro-genesis-datasource>
        ${repeat(() => trainingGridColumnDefs, html`
          <grid-pro-column :definition="${x => x}"></grid-pro-column>
        `)}
        <grid-pro-column :definition=${x => x.actionMenu}></grid-pro-column>
    <zero-grid-pro>

`;