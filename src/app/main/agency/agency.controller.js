export class AgencyController {
    constructor (MEMBERS) {
        'ngInject';
        this.members = MEMBERS;
    }
    listMembers(){ return this.members; }
}
