import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';

// controllers
import { HomeController   } from './main/home/home.controller';

import { OfferController  } from './main/offer/offer.controller';
import { CHAPTERS         } from './main/offer/offer.constant';
import { AgencyController } from './main/agency/agency.controller';
import { MEMBERS, PREVIOUS_WORK  } from './main/agency/agency.constant';

// directives
import { AreaChartBackgroundDirective } from './main/home/areaChartBackground/areaChartBackground.directive';
import { TriangleBackgroundDirective  } from './main/home/triangleBackground/triangleBackground.directive';
import { TriangleChartDirective       } from '../app/components/triangleChart/triangleChart.directive';
import { NavbarDirective              } from '../app/components/navbar/navbar.directive';
import { SidebarDirective             } from '../app/components/sidebar/sidebar.directive';
import { FooterDirective              } from '../app/components/footer/footer.directive';
import { FullHeightSectionDirective   } from '../app/components/fullHeightSection/fullHeightSection.directive';

// filters
import { CapitalizeFilter  } from '../app/components/filters/capitalize';

// constants
import { EVENTS } from '../app/components/constants/events';

var dependencies = [
    'angular-scroll-animate',
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
  .constant('PREVIOUS_WORK', PREVIOUS_WORK)
  .constant('CHAPTERS', CHAPTERS)
  .constant('EVENTS', EVENTS)
  // .service('ChaptersService', ChaptersService)
  .controller('HomeController', HomeController)
  .controller('OfferController', OfferController)
  .controller('AgencyController', AgencyController)
  .filter('capitalize', CapitalizeFilter)
  .directive('areaChartBackground', AreaChartBackgroundDirective)
  .directive('triangleBackground', TriangleBackgroundDirective)
  .directive('triangleChart', TriangleChartDirective)
  .directive('fullHeightSection', FullHeightSectionDirective)
  .directive('skoliFooter', FooterDirective)
  .directive('skoliNavbar', NavbarDirective)
  .directive('skoliSidebar', SidebarDirective);
