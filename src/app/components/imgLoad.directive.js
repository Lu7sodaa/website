// const ImgLoadDirective = ImgLoadDirective = function() {
//     return {
//         restrict: 'A',
//         link: function(scope, element, attrs) {
//             element.bind('load', function() {
//                 alert('image is loaded');
//             });
//             element.bind('error', function(){
//                 alert('image could not be loaded');
//             });
//         }
//     };
// };

export const ImgLoadDirective = function() {
    return {
        restrict: 'A',
        scope: {
            skoliImgLoad: '&'
        },
        link: function(scope, element) {
            element.bind('load', function() {
                scope.skoliImgLoad();
            });
            element.bind('error', function(){
                scope.skoliImgLoad();
            });
        }
    };
};
