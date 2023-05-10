import {
  Auth,
  FoundationAnalytics,
  FoundationAnalyticsEvent,
  FoundationAnalyticsEventType,
  Session,
} from '@genesislcap/foundation-comms';
import {Settings as LoginSettings} from '@genesislcap/foundation-login';
import {Constructable} from '@microsoft/fast-element';
import {Container} from '@microsoft/fast-foundation';
import {Route, RouterConfiguration} from '@microsoft/fast-router';
import {defaultLayout, loginLayout} from '../layouts';
import {Home} from './home/home';
import {NotFound} from './not-found/not-found';
import {Reporting} from '@genesislcap/foundation-reporting';
import { MarketdataComponent } from './playground/playground';
import { Order } from './order/order'
import { Report } from './report/report'
import { CustomOrderPage } from './custom-order/custom-order';
import { UserComponent } from './user/user';


type RouterSettings = {
  autoAuth?: boolean;
} & LoginSettings;

export class MainRouterConfig extends RouterConfiguration<RouterSettings> {
  constructor(
    @Auth private auth: Auth,
    @Container private container: Container,
    @FoundationAnalytics private analytics: FoundationAnalytics,
    @Session private session: Session
  ) {
    super();
  }

  public allRoutes = [
    { index: 1, path: 'home', title: 'Home', icon: 'home', variant: 'solid'},
    { index: 2, path: 'playground', title: 'Playground', icon: 'gear', variant: 'solid' },
    { index: 3, path: 'order', title: 'Order', icon: 'money-bill', variant: 'solid' },
    { index: 4, path: 'report', title: 'Report', icon: 'chart-simple', variant: 'solid' },
    { index: 5, path: 'custom-order', title: 'Custom Order Grid', icon: 'paintbrush', variant: 'solid'},
    { index: 6, path: 'user', title: 'Users', icon: 'users', variant: 'solid'},

  ];

  public configure() {
    this.title = 'WebDeveloper Training';
    this.defaultLayout = defaultLayout;

    const authPath = 'login';
    const commonSettings: RouterSettings = { autoAuth: true };

    this.routes.map(
      { path: '', redirect: authPath },
      {
        path: authPath,
        name: 'login',
        title: 'Login',
        element: async () => {
          const { configure, define } = await import(
            /* webpackChunkName: "foundation-login" */
            '@genesislcap/foundation-login'
          );
          configure(this.container, {
            autoConnect: true,
            defaultRedirectUrl: 'home',
          });
          return define({
            name: `blank-app-login`,
            /**
             * You can augment the template and styles here when needed.
             */
          });
        },
        layout: loginLayout,
        settings: { public: true },
        childRouters: true,
      },
      {path: 'home', element: Home, title: 'Home', name: 'home', settings: commonSettings},
      {path: 'not-found', element: NotFound, title: 'Not Found', name: 'not-found'},
      {path: 'playground', element: MarketdataComponent, title: 'Playground', name: 'playground', settings: commonSettings},
      {path: 'order', element: Order, title: 'Order', name: 'order', settings: commonSettings},
      {path: 'report', element: Reporting, title: 'Report', name: 'report'},
      {path: 'custom-order', element: CustomOrderPage, title: 'Custom Order', name: 'custom-order', settings: commonSettings},
      {path: 'user', element: UserComponent, title: 'User', name: 'user', settings: commonSettings},
);

    const auth = this.auth;

    /**
     * Example of a FallbackRouteDefinition
     */
    this.routes.fallback(() =>
      this.auth.isLoggedIn ? { redirect: 'not-found' } : { redirect: authPath }
    );
    /**
     * Example of a NavigationContributor
     */
    this.contributors.push({
      navigate: async (phase) => {
        const settings = phase.route.settings;

        this.analytics.trackEvent(FoundationAnalyticsEventType.routeChanged, <
          FoundationAnalyticsEvent.RouteChanged
        >{
          path: phase.route.endpoint.path,
        });

        /**
         * If public route don't block
         */
        if (settings && settings.public) {
          return;
        }

        /**
         * If logged in don't block
         */
        if (this.auth.isLoggedIn) {
          return;
        }

        /**
         * If allowAutoAuth and session is valid try to connect+auto-login
         */
        if (settings && settings.autoAuth && await auth.reAuthFromSession()) {
          return;
        }

        /**
         * Otherwise route them somewhere, like to a login
         */
        phase.cancel(() => {
          this.session.captureReturnUrl();
          Route.name.replace(phase.router, 'login');
        });
      },
    });
  }

  public construct<T>(Type: Constructable<T>): T {
    return this.container.get(Type) as T;
  }
}
