import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';

@Component({
    templateUrl : './templates/outbound-referrals.tpl.html', 
    directives: [ROUTER_DIRECTIVES]
})
export class OutboundReferralsComponent {
    constructor(private _params: RouteParams) {}
    
    isRouteActive(route) {
        return this._params.get('group') == route;
    }
}