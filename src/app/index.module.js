import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';

// controllers
import { HomeController   } from './main/home/home.controller';
import { OfferController  } from './main/offer/offer.controller';
import { CHAPTERS         } from './main/offer/offer.constant';
import { AgencyController } from './main/agency/agency.controller';
import { MEMBERS         } from './main/agency/agency.constant';

// directives
import { NavbarDirective              } from '../app/components/navbar/navbar.directive';
import { SidebarDirective             } from '../app/components/sidebar/sidebar.directive';
import { FooterDirective              } from '../app/components/footer/footer.directive';
import { AreaChartBackgroundDirective } from '../app/components/areaChartBackground/areaChartBackground.directive';
import { TriangleBackgroundDirective  } from '../app/components/triangleBackground/triangleBackground.directive';
import { FullHeightSectionDirective   } from '../app/components/fullHeightSection/fullHeightSection.directive';

// filters
import { CapitalizeFilter  } from '../app/components/filters/capitalize';

// constants
import { EVENTS } from '../app/components/constants/events';

var dependencies = [
    'duParallax',
    'ngAnimate',
    'ngCookies',
    'ngTouch',
    'ngSanitize',
    'ngAria',
    'ui.router'
];

angular.module('siteWebV0', dependencies )
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .constant('MEMBERS', MEMBERS)
  .constant('CHAPTERS', CHAPTERS)
  .constant('EVENTS', EVENTS)
  // .service('ChaptersService', ChaptersService)
  .controller('HomeController', HomeController)
  .controller('OfferController', OfferController)
  .controller('AgencyController', AgencyController)
  .filter('capitalize', CapitalizeFilter)
  .directive('areaChartBackground', AreaChartBackgroundDirective)
  .directive('triangleBackground', TriangleBackgroundDirective)
  .directive('fullHeightSection', FullHeightSectionDirective)
  .directive('skoliFooter', FooterDirective)
  .directive('skoliNavbar', NavbarDirective)
  .directive('skoliSidebar', SidebarDirective);