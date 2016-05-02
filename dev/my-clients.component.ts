import {Component, OnInit} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import {ClientCardComponent} from './client-card.component';
import {UserService} from './services/user.service';
import {ToolService} from './services/tools.service';

@Component({
    templateUrl : './templates/my-clients.tpl.html',
    directives: [ROUTER_DIRECTIVES, ClientCardComponent]
})
export class MyClientsComponent implements OnInit {
    stages = {
        "all": "All",
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
    sortby: string = 'Date Received';

    constructor(
        private _router: Router, 
        private _params: RouteParams, 
        private _userService: UserService, 
        private _tools: ToolService) {}

    isRouteActive(route) {
        return this._params.get('group') == route;
    }
    
    search(search: string) {
        search = this._tools.trim(search).toLowerCase();
        if (search.length > 0) {
            let results = [];
            for (var x in this.opportunities) {
                var name = (this.opportunities[x].firstName + " " + this.opportunities[x].lastName).toLowerCase();
                var plocation = '';
                if (this.opportunities[x].propertyStreet)
                    plocation += this.opportunities[x].propertyStreet;
                if (this.opportunities[x].propertyCity)
                    plocation += " " + this.opportunities[x].propertyCity;
                if (this.opportunities[x].propertyZip)
                    plocation += " " + this.opportunities[x].propertyZip;
                plocation = plocation.toLowerCase();

                if (name.indexOf(search) > -1 || plocation.indexOf(search) > -1) {
                    var thisopp = this.opportunities[x];
                    results.push(this.opportunities[x]);
                }
            }     
            if (results.length > 0)
                this.activeOpps = results;
        }
    }

    initOpps() {
        this.opportunities = this._userService.opportunities;
        if (this.opportunities.length > 0) {
            this.opps = {};
            this.opportunities.forEach(element => {
                if (element.stageName != 'Assigned') {
                    if (!this.opps.hasOwnProperty(element.stageName))
                        this.opps[element.stageName] = [];
                    this.opps[element.stageName].push(element);
                }
            });
        }

        if (this._params.get('group') == 'all') {
            this.activeOpps = this.opportunities;
        } else {
            this.activeOpps = this.opps[this.stages[this._params.get('group')]];
        }
        this.oppsReady = true;
    }

    ngOnInit() {
        if (this._userService.opportunities != undefined) {
            if (!this.oppsReady) this.initOpps();
        } else if (this._tools.getCookie('user_session') && this._tools.getCookie('username')) {          
            this._userService.setUserData()
            .subscribe(
                success => this.initOpps(), 
                error => console.log(error)
            );
        } else {
            this._router.navigate(['Login']);
        }
    }
}