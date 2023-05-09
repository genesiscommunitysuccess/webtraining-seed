import { html} from '@microsoft/fast-element';
import { InstrumentsGrid } from './instruments-grid';

export const instrumentsGridTemplate = html<InstrumentsGrid>`
  <template>
    <zero-grid-pro>
        <grid-pro-genesis-datasource
          resource-name="ALL_INSTRUMENTS"
          order-by="ORDER_ID">
        </grid-pro-genesis-datasource>
    </zero-grid-pro>
  </template>
`;