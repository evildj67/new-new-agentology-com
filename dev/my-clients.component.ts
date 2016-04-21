import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import {ClientCardComponent} from './client-card.component';
import {UserService} from './services/user.service';

@Component({
    templateUrl : './templates/my-clients.tpl.html',
    directives: [ROUTER_DIRECTIVES, ClientCardComponent]
})
export class MyClientsComponent implements OnInit {
    stages = {
        "prospect": "Prospect",
        "client": "Client",
        "listed": "Listed",
        "escrow": "In Escrow",
        "closed": "Closed Lost"
    };
    opportunities;
    opps = {};
    activeOpps = [];
    oppsReady = false;

    constructor(private _params: RouteParams, private _userservice: UserService) {}

    isRouteActive(route) {
        return this._params.get('group') == route;
    }

    categorizeOpps(opps) {
        this.opps = {};
        opps.forEach(element => {
            if (element.stageName != 'Assigned') {
                if (!this.opps.hasOwnProperty(element.stageName))
                    this.opps[element.stageName] = [];
                this.opps[element.stageName].push(element);
            }
        });

        if (this._params.get('group') == 'all') {
            this.activeOpps = this.opportunities;
        } else {
            this.activeOpps = this.opps[this.stages[this._params.get('group')]];
        }
        this.oppsReady = true;
        console.log(this.opps);
    }

    ngOnInit() {
        if (localStorage.getItem('opportunities') && !this.oppsReady) {
            this.opportunities = JSON.parse(localStorage.getItem('opportunities'));
            this.categorizeOpps(this.opportunities);
        }
    }
}