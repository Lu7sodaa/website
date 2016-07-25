export class AgencyController {
    constructor (MEMBERS, PREVIOUS_WORK) {
        'ngInject';
        this.chartData = [
            {
                name: 'Appropriation',
                value: 19,
                description: `Nous venons à votre rencontre et nous impliquons
                fortement pour apprivoiser au mieux votre objet de recherche,
                vos méthodes de travail et vos enjeux.`
            },{
                name: 'Clarification',
                value: 17,
                description: `À partir des travaux de recherche, nous élaborons
                un discours accessible à tous. Sans le déformer, nous mettons en
                récit le savoir pour le rendre universel.`
            },{
                name: 'Co-design',
                value: 15,
                description: `En associant notre savoir-faire et votre expertise,
                nous travaillons ensemble à la conception et au design d’une interface
                de restitution sur-mesure.`
            },{
                name: 'Développement',
                value: 25,
                description: `Nous mettons en oeuvre notre expertise technique
                pour développer et maintenir des interfaces et des outils fiables
                et performants.`
            },{
                name: 'Diffusion',
                value: 20,
                description: `Nous mettons en oeuvre des stratégies de
                communication (réseaux sociaux, relations publiques et presse)
                pour optimiser la diffusion de nos réalisations.`
            }
        ];
        this.members = MEMBERS;
        this.previousWork = PREVIOUS_WORK;
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
