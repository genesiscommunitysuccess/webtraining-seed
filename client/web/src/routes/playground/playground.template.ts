import {html, ref} from '@microsoft/fast-element';
import {Playground} from './playground';
import {playgroundStyles} from './playground.styles';
import {sync} from "@genesislcap/foundation-utils"


export const myTemplate = html<Playground>`
    <h2>This is my first component</h2>
    <fieldset>
      <legend>Fruits</legend>
      <zero-checkbox @change=${(x) => (x.change(x.apple))}
                     :checked="${sync((x) => x.apple, 'boolean')}">Apple</zero-checkbox>
    </fieldset>

    <zero-combobox ignore-input-click="true" autocomplete="both" placeholder="This s a combobox" value=${sync((x) => x.comboValue)} @change=${(x) => x.display1(x.comboValue)} >
      <zero-option>Christopher Eccleston</zero-option>
      <zero-option>David Tennant</zero-option>
      <zero-option>Matt Smith</zero-option>
      <zero-option>Peter Capaldi</zero-option>
      <zero-option>Jodie Whittaker</zero-option>
    </zero-combobox>


    <zero-button ${ref('zeroTabs')} @click=${(x) => x.createBanner("BannerId","BannerDivSlot")}>button</zero-button>

    <zero-tabs @change=${(x) => console.log("I was changed")} activeid="entrees">
      <zero-tab @click=${(x) => console.log("I was clicked 1")} id="apps">Appetizers</zero-tab>
      <zero-tab @click=${(x) => console.log("I was clicked 2")} id="entrees">Entrees</zero-tab>
      <zero-tab @click=${(x) => console.log("I was clicked 3")} id="desserts">Desserts</zero-tab>
      <zero-tab-panel id="appsPanel">
        hi 1
      </zero-tab-panel>
      <zero-tab-panel id="entreesPanel">
        hi 2
      </zero-tab-panel>
      <zero-tab-panel id="dessertsPanel">
        hi 3
      </zero-tab-panel>
    </zero-tabs>
<zero-tree-view>
    <zero-tree-item>
    Root
    <zero-tree-item @selected-change=${x => x.changeTree()} ${ref('treeItem')}>
      Item 1
      <zero-tree-item @selected-change=${x => x.changeTree()}>Sub-item 1</zero-tree-item>
      <zero-tree-item @selected-change=${x => x.changeTree()}>Sub-item 2</zero-tree-item>
    </zero-tree-item>
    <zero-tree-item>Item 3</zero-tree-item>
    </zero-tree-item>
</zero-tree-view>
<div id="BannerDivSlot"></div>

<zero-dropdown-menu></zero-dropdown-menu>

`;