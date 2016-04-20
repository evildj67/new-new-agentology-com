import {Component} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'my-nav', 
    template: `
        <div class="top-nav row">
            <div class="col-xs-4">
                <img class="logo" src="src/images/logo-agentology.png" />
            </div>
            <div class="col-xs-8 text-xs-right">
                <nav class="nav nav-inline">
                    <a class="nav-link" href="#">New Leads</a>
                    <a class="nav-link" [class.active]="isRouteActive('my-clients')" [routerLink]="['MyClients', {group: 'all'}]">My Clients</a>
                    <a class="nav-link" [class.active]="isRouteActive('outbound-referrals')" [routerLink]="['OutboundReferrals', {group: 'all'}]">Outbound Referrals</a>
                    <a class="nav-link" [class.active]="isRouteActive('manage-my-team')" [routerLink]="['ManageMyTeam']">Manage My Team</a>
                    <a class="nav-link" [class.active]="isRouteActive('my-profile')" [routerLink]="['MyProfile']">My Profile</a>
                </nav>    
            </div>
        </div>    
    `,
    directives: [ROUTER_DIRECTIVES]
})
export class NavComponent {
    constructor(public router: Router) {}
    
    isRouteActive(route) {
        return location.href.indexOf(route) > -1;
    }
}