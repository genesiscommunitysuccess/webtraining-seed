import {html, ref} from '@microsoft/fast-element';
import {Playground} from './playground';
import {playgroundStyles} from './playground.styles';
import {sync} from '@genesislcap/foundation-utils';
import type { DropdownMenuItem } from '@genesislcap/foundation-ui';


export const myTemplate = html<Playground>`
    <h4>A button:</h4>
    <zero-button appearance="neutral" @click=${x=> x.test()}>Button</zero-button>
    <zero-button appearance="accent" @click=${x=> x.openModal()}>modal</zero-button>
    <zero-button appearance="lightwieght">Button</zero-button>
    <zero-button appearance="outline">Button</zero-button>
    <zero-button appearance="stealth">Button</zero-button>

    <zero-picker></zero-picker>

    <zero-select :value=${sync(x=> x.select_value)}>
      <zero-option value="s">Small</zero-option>
      <zero-option value="m">Medium</zero-option>
      <zero-option value="l">Large</zero-option>
      <zero-option value="xl">Extra Large</zero-option>
    </zero-select>

    <zero-slider :value=${sync(x=> x.slider_value)} min="0" max="100" step="10" value="70">
      <zero-slider-label position="0"> 0 </zero-slider-label>
      <zero-slider-label position="10"> 10 </zero-slider-label>
      <zero-slider-label position="90"> 90 </zero-slider-label>
      <zero-slider-label position="100"> 100 </zero-slider-label>
    </zero-slider>

    <zero-modal ${ref('environmentModal')} >
        <h5 slot="top">Modal title</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit/</p>
    </zero-modal>

<zero-tabs activeid="entrees">
  <zero-tab id="apps">Menu</zero-tab>
  <zero-tab id="entrees">dropdown menu</zero-tab>
  <zero-tab id="desserts">Desserts</zero-tab>
  <zero-tab-panel id="appsPanel">
    <zero-menu>
      <zero-menu-item>
        Menu item 1
        <zero-menu>
          <zero-menu-item>Menu item 1.1</zero-menu-item>
          <zero-menu-item>Menu item 1.2</zero-menu-item>
          <zero-menu-item>Menu item 1.3</zero-menu-item>
        </zero-menu>
      </zero-menu-item>
      <zero-menu-item>
        Menu item 2
        <zero-menu>
          <zero-menu-item>Menu item 2.1</zero-menu-item>
          <zero-menu-item>Menu item 2.2</zero-menu-item>
          <zero-menu-item>Menu item 2.3</zero-menu-item>
        </zero-menu>
      </zero-menu-item>
      <zero-menu-item>
        Menu item 3
        <zero-menu>
          <zero-menu-item @click=${(x) => x.stageIsYours("orders")}>click here</zero-menu-item>
          <zero-menu-item>Menu item 3.2</zero-menu-item>
          <zero-menu-item>Menu item 3.3</zero-menu-item>
        </zero-menu>
      </zero-menu-item>
    </zero-menu>
  </zero-tab-panel>
  <zero-tab-panel id="entreesPanel">
   <zero-dropdown-menu ${ref('localdropdown')} id="zero-dropdown-menu"></zero-dropdown-menu>
  </zero-tab-panel>
</zero-tabs>
`;