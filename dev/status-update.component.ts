import {Component, Input} from 'angular2/core';

@Component({
    selector: 'status-update', 
    templateUrl: './templates/status-update.modal.tpl.html' 
})
export class StatusUpdateComponent {
    @Input() clientid: string;
}