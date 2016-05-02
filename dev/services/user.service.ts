import {Injectable} from 'angular2/core';
import {DataService} from '../services/data.service';
import {ToolService} from '../services/tools.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {
    user: Object;
    agent: Object;
    opportunities;
    credentials = {
        "user_session": this._tools.getCookie('user_session'),
        "username": this._tools.getCookie('username')
    }; 
            
    constructor(
        private _dataService: DataService, 
        private _tools: ToolService) {}
    
    setUserData(): Observable<any> {        
        return Observable.create(observer => {
            this._dataService.postData(this.credentials, 'get_agent')
            .subscribe(
                data => {       
                    this.agent = data.response.agent;
                    this.user = data.response.user;
                    this.opportunities = data.response.agent['opportunity'];
                    observer.next();       
                    observer.complete();    
                },
                error => console.log(error)
            );                    
        });
    }
    
    getLeadNotes(leadid: string): Observable<any> {
        if (leadid.length > 0) {
            return Observable.create(observer => {
                this._dataService.postData(this.credentials, 'get_notes', leadid)
                .subscribe(
                    data => {
                        observer.next(data.response.notes);
                        observer.complete();  
                    }, 
                    error => console.log(error)
                )
            });
        }
        return null;
    }
    
    logoutUser() {
        this.agent = undefined;
        this.user = undefined;
        this.opportunities = undefined;
        this._tools.setCookie('user_session', '', -10);
        this._tools.setCookie('username', '', -10);        
    }
}