System.register(['angular2/core', 'angular2/router', './client-card.component', './services/user.service', './services/tools.service'], function(exports_1, context_1) {
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
    var core_1, router_1, client_card_component_1, user_service_1, tools_service_1;
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
            },
            function (tools_service_1_1) {
                tools_service_1 = tools_service_1_1;
            }],
        execute: function() {
            MyClientsComponent = (function () {
                function MyClientsComponent(_router, _params, _userService, _tools) {
                    this._router = _router;
                    this._params = _params;
                    this._userService = _userService;
                    this._tools = _tools;
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
                    this.sortby = 'Date Received';
                }
                MyClientsComponent.prototype.isRouteActive = function (route) {
                    return this._params.get('group') == route;
                };
                MyClientsComponent.prototype.search = function (search) {
                    search = this._tools.trim(search).toLowerCase();
                    if (search.length > 0) {
                        var results = [];
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
                };
                MyClientsComponent.prototype.initOpps = function () {
                    var _this = this;
                    this.opportunities = this._userService.opportunities;
                    if (this.opportunities.length > 0) {
                        this.opps = {};
                        this.opportunities.forEach(function (element) {
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
                };
                MyClientsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    if (this._userService.opportunities != undefined) {
                        if (!this.oppsReady)
                            this.initOpps();
                    }
                    else if (this._tools.getCookie('user_session') && this._tools.getCookie('username')) {
                        this._userService.setUserData()
                            .subscribe(function (success) { return _this.initOpps(); }, function (error) { return console.log(error); });
                    }
                    else {
                        this._router.navigate(['Login']);
                    }
                };
                MyClientsComponent = __decorate([
                    core_1.Component({
                        templateUrl: './templates/my-clients.tpl.html',
                        directives: [router_1.ROUTER_DIRECTIVES, client_card_component_1.ClientCardComponent]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, user_service_1.UserService, tools_service_1.ToolService])
                ], MyClientsComponent);
                return MyClientsComponent;
            }());
            exports_1("MyClientsComponent", MyClientsComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,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QUM7WUFBRCxDQXBGQSxBQW9GQyxJQUFBO1lBcEZELG1EQW9GQyxDQUFBIiwiZmlsZSI6Im15LWNsaWVudHMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Um91dGVyLCBST1VURVJfRElSRUNUSVZFUywgUm91dGVQYXJhbXN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XHJcbmltcG9ydCB7Q2xpZW50Q2FyZENvbXBvbmVudH0gZnJvbSAnLi9jbGllbnQtY2FyZC5jb21wb25lbnQnO1xyXG5pbXBvcnQge1VzZXJTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL3VzZXIuc2VydmljZSc7XHJcbmltcG9ydCB7VG9vbFNlcnZpY2V9IGZyb20gJy4vc2VydmljZXMvdG9vbHMuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlVXJsIDogJy4vdGVtcGxhdGVzL215LWNsaWVudHMudHBsLmh0bWwnLFxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLCBDbGllbnRDYXJkQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXlDbGllbnRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHN0YWdlcyA9IHtcclxuICAgICAgICBcImFsbFwiOiBcIkFsbFwiLFxyXG4gICAgICAgIFwicHJvc3BlY3RcIjogXCJQcm9zcGVjdFwiLFxyXG4gICAgICAgIFwiY2xpZW50XCI6IFwiQ2xpZW50XCIsXHJcbiAgICAgICAgXCJsaXN0ZWRcIjogXCJMaXN0ZWRcIixcclxuICAgICAgICBcImVzY3Jvd1wiOiBcIkluIEVzY3Jvd1wiLFxyXG4gICAgICAgIFwiY2xvc2VkXCI6IFwiQ2xvc2VkIExvc3RcIlxyXG4gICAgfTtcclxuICAgIG9wcG9ydHVuaXRpZXM7XHJcbiAgICBvcHBzID0ge307XHJcbiAgICBhY3RpdmVPcHBzID0gW107XHJcbiAgICBvcHBzUmVhZHkgPSBmYWxzZTtcclxuICAgIHNvcnRieTogc3RyaW5nID0gJ0RhdGUgUmVjZWl2ZWQnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLCBcclxuICAgICAgICBwcml2YXRlIF9wYXJhbXM6IFJvdXRlUGFyYW1zLCBcclxuICAgICAgICBwcml2YXRlIF91c2VyU2VydmljZTogVXNlclNlcnZpY2UsIFxyXG4gICAgICAgIHByaXZhdGUgX3Rvb2xzOiBUb29sU2VydmljZSkge31cclxuXHJcbiAgICBpc1JvdXRlQWN0aXZlKHJvdXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhcmFtcy5nZXQoJ2dyb3VwJykgPT0gcm91dGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNlYXJjaChzZWFyY2g6IHN0cmluZykge1xyXG4gICAgICAgIHNlYXJjaCA9IHRoaXMuX3Rvb2xzLnRyaW0oc2VhcmNoKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGlmIChzZWFyY2gubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0cyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciB4IGluIHRoaXMub3Bwb3J0dW5pdGllcykge1xyXG4gICAgICAgICAgICAgICAgdmFyIG5hbWUgPSAodGhpcy5vcHBvcnR1bml0aWVzW3hdLmZpcnN0TmFtZSArIFwiIFwiICsgdGhpcy5vcHBvcnR1bml0aWVzW3hdLmxhc3ROYW1lKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHBsb2NhdGlvbiA9ICcnO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3Bwb3J0dW5pdGllc1t4XS5wcm9wZXJ0eVN0cmVldClcclxuICAgICAgICAgICAgICAgICAgICBwbG9jYXRpb24gKz0gdGhpcy5vcHBvcnR1bml0aWVzW3hdLnByb3BlcnR5U3RyZWV0O1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3Bwb3J0dW5pdGllc1t4XS5wcm9wZXJ0eUNpdHkpXHJcbiAgICAgICAgICAgICAgICAgICAgcGxvY2F0aW9uICs9IFwiIFwiICsgdGhpcy5vcHBvcnR1bml0aWVzW3hdLnByb3BlcnR5Q2l0eTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wcG9ydHVuaXRpZXNbeF0ucHJvcGVydHlaaXApXHJcbiAgICAgICAgICAgICAgICAgICAgcGxvY2F0aW9uICs9IFwiIFwiICsgdGhpcy5vcHBvcnR1bml0aWVzW3hdLnByb3BlcnR5WmlwO1xyXG4gICAgICAgICAgICAgICAgcGxvY2F0aW9uID0gcGxvY2F0aW9uLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUuaW5kZXhPZihzZWFyY2gpID4gLTEgfHwgcGxvY2F0aW9uLmluZGV4T2Yoc2VhcmNoKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRoaXNvcHAgPSB0aGlzLm9wcG9ydHVuaXRpZXNbeF07XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMub3Bwb3J0dW5pdGllc1t4XSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gICAgIFxyXG4gICAgICAgICAgICBpZiAocmVzdWx0cy5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVPcHBzID0gcmVzdWx0cztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdE9wcHMoKSB7XHJcbiAgICAgICAgdGhpcy5vcHBvcnR1bml0aWVzID0gdGhpcy5fdXNlclNlcnZpY2Uub3Bwb3J0dW5pdGllcztcclxuICAgICAgICBpZiAodGhpcy5vcHBvcnR1bml0aWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5vcHBzID0ge307XHJcbiAgICAgICAgICAgIHRoaXMub3Bwb3J0dW5pdGllcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuc3RhZ2VOYW1lICE9ICdBc3NpZ25lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMub3Bwcy5oYXNPd25Qcm9wZXJ0eShlbGVtZW50LnN0YWdlTmFtZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3Bwc1tlbGVtZW50LnN0YWdlTmFtZV0gPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wcHNbZWxlbWVudC5zdGFnZU5hbWVdLnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3BhcmFtcy5nZXQoJ2dyb3VwJykgPT0gJ2FsbCcpIHtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVPcHBzID0gdGhpcy5vcHBvcnR1bml0aWVzO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlT3BwcyA9IHRoaXMub3Bwc1t0aGlzLnN0YWdlc1t0aGlzLl9wYXJhbXMuZ2V0KCdncm91cCcpXV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub3Bwc1JlYWR5ID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5fdXNlclNlcnZpY2Uub3Bwb3J0dW5pdGllcyAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLm9wcHNSZWFkeSkgdGhpcy5pbml0T3BwcygpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fdG9vbHMuZ2V0Q29va2llKCd1c2VyX3Nlc3Npb24nKSAmJiB0aGlzLl90b29scy5nZXRDb29raWUoJ3VzZXJuYW1lJykpIHsgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuX3VzZXJTZXJ2aWNlLnNldFVzZXJEYXRhKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3MgPT4gdGhpcy5pbml0T3BwcygpLCBcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ0xvZ2luJ10pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
