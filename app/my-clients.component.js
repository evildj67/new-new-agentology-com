System.register(['angular2/core', 'angular2/router', './client-card.component', './services/user.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, client_card_component_1, user_service_1;
    var MyClientsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (client_card_component_1_1) {
                client_card_component_1 = client_card_component_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            MyClientsComponent = (function () {
                function MyClientsComponent(_params, _userservice) {
                    this._params = _params;
                    this._userservice = _userservice;
                    this.stages = {
                        "all": "All",
                        "prospect": "Prospect",
                        "client": "Client",
                        "listed": "Listed",
                        "escrow": "In Escrow",
                        "closed": "Closed Lost"
                    };
                    this.opps = {};
                    this.activeOpps = [];
                    this.oppsReady = false;
                }
                MyClientsComponent.prototype.isRouteActive = function (route) {
                    return this._params.get('group') == route;
                };
                MyClientsComponent.prototype.categorizeOpps = function (opps) {
                    var _this = this;
                    if (opps.length > 0) {
                        this.opps = {};
                        opps.forEach(function (element) {
                            if (element.stageName != 'Assigned') {
                                if (!_this.opps.hasOwnProperty(element.stageName))
                                    _this.opps[element.stageName] = [];
                                _this.opps[element.stageName].push(element);
                            }
                        });
                    }
                    if (this._params.get('group') == 'all') {
                        this.activeOpps = this.opportunities;
                    }
                    else {
                        this.activeOpps = this.opps[this.stages[this._params.get('group')]];
                    }
                    this.oppsReady = true;
                    console.log(this.opps);
                };
                MyClientsComponent.prototype.ngOnInit = function () {
                    if (localStorage.getItem('opportunities') && !this.oppsReady) {
                        this.opportunities = JSON.parse(localStorage.getItem('opportunities'));
                        this.categorizeOpps(this.opportunities);
                    }
                };
                MyClientsComponent = __decorate([
                    core_1.Component({
                        templateUrl: './templates/my-clients.tpl.html',
                        directives: [router_1.ROUTER_DIRECTIVES, client_card_component_1.ClientCardComponent]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, user_service_1.UserService])
                ], MyClientsComponent);
                return MyClientsComponent;
            }());
            exports_1("MyClientsComponent", MyClientsComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,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LEVBQUUsMkNBQW1CLENBQUM7cUJBQ3ZELENBQUM7O3NDQUFBO2dCQWdERix5QkFBQztZQUFELENBL0NBLEFBK0NDLElBQUE7WUEvQ0QsbURBK0NDLENBQUEiLCJmaWxlIjoibXktY2xpZW50cy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFUywgUm91dGVQYXJhbXN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XHJcbmltcG9ydCB7Q2xpZW50Q2FyZENvbXBvbmVudH0gZnJvbSAnLi9jbGllbnQtY2FyZC5jb21wb25lbnQnO1xyXG5pbXBvcnQge1VzZXJTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL3VzZXIuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlVXJsIDogJy4vdGVtcGxhdGVzL215LWNsaWVudHMudHBsLmh0bWwnLFxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLCBDbGllbnRDYXJkQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXlDbGllbnRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHN0YWdlcyA9IHtcclxuICAgICAgICBcImFsbFwiOiBcIkFsbFwiLFxyXG4gICAgICAgIFwicHJvc3BlY3RcIjogXCJQcm9zcGVjdFwiLFxyXG4gICAgICAgIFwiY2xpZW50XCI6IFwiQ2xpZW50XCIsXHJcbiAgICAgICAgXCJsaXN0ZWRcIjogXCJMaXN0ZWRcIixcclxuICAgICAgICBcImVzY3Jvd1wiOiBcIkluIEVzY3Jvd1wiLFxyXG4gICAgICAgIFwiY2xvc2VkXCI6IFwiQ2xvc2VkIExvc3RcIlxyXG4gICAgfTtcclxuICAgIG9wcG9ydHVuaXRpZXM7XHJcbiAgICBvcHBzID0ge307XHJcbiAgICBhY3RpdmVPcHBzID0gW107XHJcbiAgICBvcHBzUmVhZHkgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wYXJhbXM6IFJvdXRlUGFyYW1zLCBwcml2YXRlIF91c2Vyc2VydmljZTogVXNlclNlcnZpY2UpIHt9XHJcblxyXG4gICAgaXNSb3V0ZUFjdGl2ZShyb3V0ZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wYXJhbXMuZ2V0KCdncm91cCcpID09IHJvdXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGNhdGVnb3JpemVPcHBzKG9wcHMpIHtcclxuICAgICAgICBpZiAob3Bwcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3BwcyA9IHt9O1xyXG4gICAgICAgICAgICBvcHBzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5zdGFnZU5hbWUgIT0gJ0Fzc2lnbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5vcHBzLmhhc093blByb3BlcnR5KGVsZW1lbnQuc3RhZ2VOYW1lKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHBzW2VsZW1lbnQuc3RhZ2VOYW1lXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3Bwc1tlbGVtZW50LnN0YWdlTmFtZV0ucHVzaChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5fcGFyYW1zLmdldCgnZ3JvdXAnKSA9PSAnYWxsJykge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZU9wcHMgPSB0aGlzLm9wcG9ydHVuaXRpZXM7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVPcHBzID0gdGhpcy5vcHBzW3RoaXMuc3RhZ2VzW3RoaXMuX3BhcmFtcy5nZXQoJ2dyb3VwJyldXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vcHBzUmVhZHkgPSB0cnVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMub3Bwcyk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdvcHBvcnR1bml0aWVzJykgJiYgIXRoaXMub3Bwc1JlYWR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMub3Bwb3J0dW5pdGllcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ29wcG9ydHVuaXRpZXMnKSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcml6ZU9wcHModGhpcy5vcHBvcnR1bml0aWVzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
