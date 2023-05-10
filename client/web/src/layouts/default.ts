import { css, html, repeat } from '@microsoft/fast-element';
import { FASTElementLayout } from '@microsoft/fast-router';

const baseLayoutCss = css`
  .container {
    width: 100%;
    height: 100%;
    display: block;
    position: relative;
  }

  .content {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

export const loginLayout = new FASTElementLayout(
  html`
    <div class="container">
      <div class="content">
        <slot></slot>
      </div>
    </div>
  `,
  baseLayoutCss
);

export const defaultLayout = new FASTElementLayout(
  html`
    <div class="container">
      <foundation-header
        logo-src="https://icotar.com/avatar/webtraining"
        show-luminance-toggle-button
        show-misc-toggle-button
        show-notification-button>
        <div slot="menu-contents">
            <zero-button
                appearance="neutral-grey"
                @click=${(x, _) => {
                    const { resetLayout } = x.lastChild;
                    resetLayout();
                }}
            >
                Reset Layout
            </zero-button>
        </div>
        ${repeat(
          (x) => x.config.allRoutes,
          html`
            <zero-button
              appearance="neutral-grey"
              slot="routes"
              value="${(x) => x.index}"
              @click=${(x, c) => c.parent.navigation.navigateTo(x.path)}
            >
              <zero-icon variant="${(x) => x.variant}" name="${(x) => x.icon}"></zero-icon>
              ${(x) => x.title}
            </zero-button>
          `
        )}
        <div slot="menu-contents">
            <p>Training Menu</p>
            <zero-tree-view>
              <zero-tree-item @click=${(x) => x.navigation.navigateTo("/playground")}>
                <zero-icon variant="solid" name="gear"></zero-icon>
                Playground
              </zero-tree-item>
              <zero-tree-item @click=${(x) => x.navigation.navigateTo("/home")}>
                <zero-icon variant="solid" name="home"></zero-icon>
                Trades & Positions
              </zero-tree-item>
              <zero-tree-item @click=${(x) => x.navigation.navigateTo("/home")}>
                <zero-icon variant="solid" name="money-bill"></zero-icon>
                Orders
              </zero-tree-item>
              <zero-tree-item @click=${(x) => x.navigation.navigateTo("/home")}>
                <zero-icon variant="solid" name="chart-simple"></zero-icon>
                Report
              </zero-tree-item>
              <zero-tree-item @click=${(x) => x.navigation.navigateTo("/custom-order")}>
              <zero-icon variant="solid" name="paintbrush"></zero-icon>
                Custom Order
              </zero-tree-item>
            </zero-tree-view>
        </div>
      </foundation-header>
      <div class="content">
        <slot></slot>
      </div>
    </div>
  `,
  css`
    ${baseLayoutCss}

    .content {
      padding-top: 60px;
    }

    foundation-header {
      z-index: 999;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      align-items: center;
      border: none;
    }

    zero-tree-item zero-icon {
      color: #879ba6;
      padding-right: 10px;
    }
  `
);
