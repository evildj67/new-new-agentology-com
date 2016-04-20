import {Component, OnInit} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {DataService} from './services/data.service';
import {UserService} from './services/user.service';
import {NavComponent} from './nav.component';
import {LoginComponent} from './login.component';
import {MyClientsComponent} from './my-clients.component';
import {OutboundReferralsComponent} from './outbound-referrals.component';
import {ManageMyTeamComponent} from './manage-my-team.component';
import {MyProfileComponent} from './my-profile.component';

@Component({
    selector: 'my-app',
    template: `
        <my-nav></my-nav>
        <div class="main row">
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES, NavComponent]
})
@RouteConfig([
    {path: '/login', name: 'Login', component: LoginComponent, useAsDefault: true},
    {path: '/my-clients/:group', name: 'MyClients', component: MyClientsComponent},
    {path: '/outbound-referrals/:group', name: 'OutboundReferrals', component: OutboundReferralsComponent},
    {path: '/manage-my-team', name: 'ManageMyTeam', component: ManageMyTeamComponent},
    {path: '/my-profile', name: 'MyProfile', component: MyProfileComponent}
])
export class AppComponent implements OnInit {
    user_data: Object;
    
    constructor(private _dataService: DataService, private _router: Router, private _userService: UserService) {}
    
    ngOnInit() {
        if (sessionStorage.getItem('session_id') && typeof this._userService.agent != undefined) {
            this.user_data = {
                "user_session": sessionStorage.getItem('session_id'),
                "username": sessionStorage.getItem('username')
            };   
            this._dataService.postData(this.user_data, 'get_agent')
            .subscribe(
                data => {
                    this._userService.user = data.response.user;
                    this._userService.agent = data.response.agent;
                    this._userService.opportunities = data.response.agent['opportunity'];
                },
                error => console.log(error)
            );
        }
    }
}
