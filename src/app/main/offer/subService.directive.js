export function SubServiceDirective(){
    'ngInject';

    let directive = {
        restrict: 'E',
        scope: {
            service: '='
        },
        template: '<div class="sub-service"></div>',
        replace: true,
        controller: SubServiceController,
        controllerAs: 'ctrl',
        bindToController: true
    }
    return directive;
}

class SubServiceController {
    constructor($log, $element, $compile, $scope){
        'ngInject';
        let pattern = /\([^\(\)]*\)\[[^\[\]]*\]/g;
        let service_name = this.service;
        let terms_and_definitions = service_name.match(pattern);

        if(terms_and_definitions){
            $log.log(terms_and_definitions);
            let terms_and_definitions_obj = terms_and_definitions.map((match)=>{
                let obj = {
                    matched: match,
                    term: match.match(/\(.*\)/)[0].replace(/[\(\)]/g, ''),
                    definition: match.match(/\[.*\]/)[0].replace(/[\[\]]/g, '')
                };
                $log.log('obj: ', obj);
                return obj;
            });

            for(let i in terms_and_definitions_obj){
                let obj = terms_and_definitions_obj[i];
                let term_html = `<div uib-tooltip="${obj.definition}"
                      tooltip-append-to-body="true"
                      tooltip-placement="right"
                      tooltip-animation="false">
                      ${obj.term}
                </div>`;
                $log.log('html produced: ', term_html);
                service_name = service_name.replace(obj.matched, term_html);
            }
            $log.log('service_name: ', service_name);
        }
        $element.html(service_name);
        $compile($element.contents())($scope);
    }
}
