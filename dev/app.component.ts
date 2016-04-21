import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
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
export class AppComponent {

}
