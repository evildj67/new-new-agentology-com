import {Component, Input} from 'angular2/core';
import {StatusUpdateComponent} from './status-update.component';
import {LeadDetailsComponent} from './lead-details.component';
import {ToolService} from './services/tools.service';

@Component({
    selector: 'client-card', 
    templateUrl: './templates/client-card.tpl.html', 
    directives: [StatusUpdateComponent, LeadDetailsComponent]
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
    
    constructor(private _tools: ToolService) {}
}