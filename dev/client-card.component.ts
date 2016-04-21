import {Component, Input} from 'angular2/core';
import {StatusUpdateComponent} from './status-update.component';

@Component({
    selector: 'client-card', 
    templateUrl: './templates/client-card.tpl.html', 
    directives: [StatusUpdateComponent]
})
export class ClientCardComponent {
    @Input() client: Object;
    statusUpdateId: string;
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