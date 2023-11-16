import {foundationTextFieldStyles} from '@genesislcap/foundation-ui';
import {css, ElementStyles} from '@microsoft/fast-element';
import type {
  ElementDefinitionContext,
  FoundationElementDefinition,
} from '@microsoft/fast-foundation';

export const alphaTextFieldStyles = (
  context: ElementDefinitionContext,
  definition: FoundationElementDefinition,
): ElementStyles => css`
  ${foundationTextFieldStyles(context, definition)}
  :host {
    display: flex;
    width: 200px;
    flex-direction: column;
    caret-color : #3107ba;

  }

  .control {
    background-color: #0000ff;
  }

  :host .root {
    width: 100%;
  }
`;
