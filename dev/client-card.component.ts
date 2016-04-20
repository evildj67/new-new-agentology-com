import {Component, Input} from 'angular2/core';

@Component({
    selector: 'client-card', 
    templateUrl: './templates/client-card.tpl.html'
})
export class ClientCardComponent {
    @Input() client: Object;
    stages = {
        "Prospect": "prospect",
        "Client": "client", 
        "Listed": "listed", 
        "In Escrow": "escrow", 
        "Closed Lost": "closed"
    };
    
    formatDate(dateString) {
        return new Date(dateString.replace('-', '/'));
    }
}