export function config ($logProvider, $uiViewScrollProvider) {
    'ngInject';
    // Enable log
    $logProvider.debugEnabled(true);
    $uiViewScrollProvider.useAnchorScroll();
}
