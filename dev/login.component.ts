import {Component} from 'angular2/core';
import {DataService} from './services/data.service';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'my-login',
    templateUrl: './templates/login.tpl.html',
    styleUrls: ['../src/css/login.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class LoginComponent {

    show_error: Object;

    constructor(private _dataService: DataService, private _router: Router) {}

    onSubmit(form) {
        this._dataService.postData(form.value, 'login')
        .subscribe(
            data => this.loginUser(data),
            error => this.handleError(error)
        );
    }

    loginUser(data) {
        sessionStorage.setItem('session_id', data.response.user.session_id);
        sessionStorage.setItem('username', data.response.user.username);
        this._router.navigate(['MyClients', {group: 'all'}]);
    }

    handleError(error) {
        this.show_error = error;
        console.log(error);
    }
}
