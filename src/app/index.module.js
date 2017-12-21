import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';

// controllers
import { HomeController   } from './main/home/home.controller';
import { PortfolioController   } from './main/portfolio/portfolio.controller';
import { DetailsController     } from './main/portfolio/details/details.controller';
import { OfferController  } from './main/offer/offer.controller';
import { CHAPTERS         } from './main/offer/offer.constant';
import { AgencyController } from './main/agency/agency.controller';
import { MEMBERS, PREVIOUS_WORK, PROCESS  } from './main/agency/agency.constant';

// directives
import { SubServiceDirective }          from './main/offer/subService.directive';
import { LineChartBackgroundDirective } from './main/home/lineChartBackground/lineChartBackground.directive';
import { LINE_CHART_DATA }              from './main/home/lineChartBackground/data.constant';
import { TriangleBackgroundDirective  } from './main/home/triangleBackground/triangleBackground.directive';
import { TriangleChartDirective       } from '../app/components/triangleChart/triangleChart.directive';
import { NavbarDirective              } from '../app/components/navbar/navbar.directive';
import { SlideshowDirective           } from '../app/components/slideshow/slideshow.directive';
import { ImgLoadDirective             } from '../app/components/imgLoad.directive';
import { FeedDirective                } from '../app/components/feed/feed.directive';
import { GridDirective                } from '../app/components/grid/grid.directive';
import { PageDirective                } from '../app/components/page/page.directive';
import { SidebarDirective             } from '../app/components/sidebar/sidebar.directive';
import { FooterDirective              } from '../app/components/footer/footer.directive';
import { FullHeightSectionDirective   } from '../app/components/fullHeightSection/fullHeightSection.directive';

// filters
import { CapitalizeFilter  } from '../app/components/filters/capitalize';

// services
import { PlatformService } from '../app/components/platform.service';
import { FeedService   } from './main/portfolio/feed.service';

// constants
import { CONFIG } from '../app/components/constants/config';
import { NEWS } from '../app/components/constants/news';
import { EVENTS } from '../app/components/constants/events';
import { PROJECTS } from '../app/components/constants/projects';
import { PARTNERS } from '../app/components/constants/partners';

var dependencies = [
    'angular-scroll-animate',
    'duParallax',
    'angularGrid',
    'ngAnimate',
    'ngCookies',
    'ngTouch',
    'ngSanitize',
    'ngAria',
    'ui.router',
    'ui.bootstrap',
    'btford.markdown'
    // 'ngSanitize',
];

angular.module('skoli', dependencies )
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .constant('CONFIG', CONFIG)
  .constant('PROJECTS', PROJECTS)
  .constant('PARTNERS', PARTNERS)
  .constant('PROCESS', PROCESS)
  .constant('NEWS', NEWS)
  .constant('MEMBERS', MEMBERS)
  .constant('PREVIOUS_WORK', PREVIOUS_WORK)
  .constant('LINE_CHART_DATA', LINE_CHART_DATA)
  .constant('CHAPTERS', CHAPTERS)
  .constant('EVENTS', EVENTS)
  .service('platformService', PlatformService)
  .service('feedService', FeedService)
  .controller('HomeController', HomeController)
  .controller('PortfolioController', PortfolioController)
  .controller('DetailsController', DetailsController)
  .controller('OfferController', OfferController)
  .controller('AgencyController', AgencyController)
  .filter('capitalize', CapitalizeFilter)
  .directive('subService', SubServiceDirective)
  .directive('lineChartBackground', LineChartBackgroundDirective)
  .directive('triangleBackground', TriangleBackgroundDirective)
  .directive('triangleChart', TriangleChartDirective)
  .directive('fullHeightSection', FullHeightSectionDirective)
  .directive('skoliFooter', FooterDirective)
  .directive('skoliSlideshow', SlideshowDirective)
  .directive('skoliFeed', FeedDirective)
  .directive('skoliGrid', GridDirective)
  .directive('skoliPage', PageDirective)
  .directive('skoliImgLoad', ImgLoadDirective)
  .directive('skoliNavbar', NavbarDirective)
  .directive('skoliSidebar', SidebarDirective);
