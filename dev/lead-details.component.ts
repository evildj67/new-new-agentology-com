import {Component, Input, OnChanges} from 'angular2/core';
import {UserService} from './services/user.service';

@Component({
    selector: 'lead-details', 
    templateUrl: './templates/lead-details.modal.tpl.html',    
    styleUrls: []
})
export class LeadDetailsComponent implements OnChanges {
    @Input() client: Object;
    clientid: string;
    tab: string = '1';
    statusNotes: Object;
    
    constructor(private _userService: UserService) {}
    
    ngOnChanges(changes) {
        this.clientid = this.client['id'];
        
        // this._userService.getLeadNotes(this.clientid)
        // .subscribe(
        //     data => this.statusNotes = data
        // )
    }
}