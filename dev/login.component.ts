import {Component} from 'angular2/core';
import {DataService} from './services/data.service';
import {UserService} from './services/user.service';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'my-login',
    templateUrl: './templates/login.tpl.html',
    styleUrls: ['../src/css/login.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class LoginComponent {

    show_error: Object;

    constructor(private _dataService: DataService, private _router: Router, private _userService: UserService) {}

    onSubmit(form) {
        this._dataService.postData(form.value, 'login')
        .subscribe(
            data => this.loginUser(data),
            error => this.handleError(error)
        );
    }

    loginUser(data) {
        let user_data = {
            "user_session": data.response.user.session_id,
            "username": data.response.user.username
        };
        localStorage.setItem('credentials', JSON.stringify(user_data));

        this._dataService.postData(user_data, 'get_agent')
        .subscribe(
            data => {
                localStorage.setItem('user', JSON.stringify(data.response.user));
                localStorage.setItem('agent', JSON.stringify(data.response.agent));
                localStorage.setItem('opportunities', JSON.stringify(data.response.agent['opportunity']));

                this._router.navigate(['MyClients', {group: 'all'}]);
            },
            error => console.log(error)
        );
    }

    handleError(error) {
        this.show_error = error;
        console.log(error);
    }
}
