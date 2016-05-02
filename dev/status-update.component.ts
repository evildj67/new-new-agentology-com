import {Component, Input} from 'angular2/core';
@Component({
    selector: 'status-update', 
    templateUrl: './templates/status-update.modal.tpl.html',    
    styleUrls: ['../src/css/my-clients.css']
})
export class StatusUpdateComponent {
    @Input() clientid: string;
    status: string = '1';
}