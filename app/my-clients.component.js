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
                    this.opps = {};
                    opps.forEach(function (element) {
                        if (element.stageName != 'Assigned') {
                            if (!_this.opps.hasOwnProperty(element.stageName))
                                _this.opps[element.stageName] = [];
                            _this.opps[element.stageName].push(element);
                        }
                    });
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

//# sourceMappingURL=data:application/json;base64,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bGUiOiJteS1jbGllbnRzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZVBhcmFtc30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuaW1wb3J0IHtDbGllbnRDYXJkQ29tcG9uZW50fSBmcm9tICcuL2NsaWVudC1jYXJkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7VXNlclNlcnZpY2V9IGZyb20gJy4vc2VydmljZXMvdXNlci5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgdGVtcGxhdGVVcmwgOiAnLi90ZW1wbGF0ZXMvbXktY2xpZW50cy50cGwuaHRtbCcsXHJcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIENsaWVudENhcmRDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNeUNsaWVudHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgc3RhZ2VzID0ge1xyXG4gICAgICAgIFwicHJvc3BlY3RcIjogXCJQcm9zcGVjdFwiLFxyXG4gICAgICAgIFwiY2xpZW50XCI6IFwiQ2xpZW50XCIsXHJcbiAgICAgICAgXCJsaXN0ZWRcIjogXCJMaXN0ZWRcIixcclxuICAgICAgICBcImVzY3Jvd1wiOiBcIkluIEVzY3Jvd1wiLFxyXG4gICAgICAgIFwiY2xvc2VkXCI6IFwiQ2xvc2VkIExvc3RcIlxyXG4gICAgfTtcclxuICAgIG9wcG9ydHVuaXRpZXM7XHJcbiAgICBvcHBzID0ge307XHJcbiAgICBhY3RpdmVPcHBzID0gW107XHJcbiAgICBvcHBzUmVhZHkgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wYXJhbXM6IFJvdXRlUGFyYW1zLCBwcml2YXRlIF91c2Vyc2VydmljZTogVXNlclNlcnZpY2UpIHt9XHJcblxyXG4gICAgaXNSb3V0ZUFjdGl2ZShyb3V0ZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wYXJhbXMuZ2V0KCdncm91cCcpID09IHJvdXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGNhdGVnb3JpemVPcHBzKG9wcHMpIHtcclxuICAgICAgICB0aGlzLm9wcHMgPSB7fTtcclxuICAgICAgICBvcHBzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50LnN0YWdlTmFtZSAhPSAnQXNzaWduZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMub3Bwcy5oYXNPd25Qcm9wZXJ0eShlbGVtZW50LnN0YWdlTmFtZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHBzW2VsZW1lbnQuc3RhZ2VOYW1lXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHBzW2VsZW1lbnQuc3RhZ2VOYW1lXS5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9wYXJhbXMuZ2V0KCdncm91cCcpID09ICdhbGwnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlT3BwcyA9IHRoaXMub3Bwb3J0dW5pdGllcztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZU9wcHMgPSB0aGlzLm9wcHNbdGhpcy5zdGFnZXNbdGhpcy5fcGFyYW1zLmdldCgnZ3JvdXAnKV1dO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9wcHNSZWFkeSA9IHRydWU7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5vcHBzKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ29wcG9ydHVuaXRpZXMnKSAmJiAhdGhpcy5vcHBzUmVhZHkpIHtcclxuICAgICAgICAgICAgdGhpcy5vcHBvcnR1bml0aWVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnb3Bwb3J0dW5pdGllcycpKTtcclxuICAgICAgICAgICAgdGhpcy5jYXRlZ29yaXplT3Bwcyh0aGlzLm9wcG9ydHVuaXRpZXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
