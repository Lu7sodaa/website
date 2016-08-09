export class AgencyController {
    constructor (MEMBERS, PREVIOUS_WORK, PROCESS, $sce) {
        'ngInject';
        this.chartData = PROCESS;
        this.members = MEMBERS;
        this.previousWork = PREVIOUS_WORK.map(function(work){
            if(typeof work.subtitle === typeof ''){
                work.subtitle = $sce.trustAsHtml(work.subtitle);
            }
            return work;
        });
    }
    listMembers(){ return this.members; }
    listPreviousWork(){ return this.previousWork; }

    getMember(name){
        return this.members.find(function(m){
            return m.name.toLowerCase().indexOf(name) !== -1
        });
    }

    chartData(){
        return
    }
}
