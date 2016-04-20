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
                MyClientsComponent.prototype.ngDoCheck = function () {
                    if (this._userservice.user != undefined) {
                        this.user = this._userservice.user;
                    }
                    if (this._userservice.opportunities != undefined && !this.oppsReady) {
                        this.opportunities = this._userservice.opportunities;
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

//# sourceMappingURL=data:application/json;base64,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VUFBVSxFQUFFLENBQUMsMEJBQWlCLEVBQUUsMkNBQW1CLENBQUM7cUJBQ3ZELENBQUM7O3NDQUFBO2dCQWlERix5QkFBQztZQUFELENBaERBLEFBZ0RDLElBQUE7WUFoREQsbURBZ0RDLENBQUEiLCJmaWxlIjoibXktY2xpZW50cy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlUGFyYW1zfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5pbXBvcnQge0NsaWVudENhcmRDb21wb25lbnR9IGZyb20gJy4vY2xpZW50LWNhcmQuY29tcG9uZW50JztcclxuaW1wb3J0IHtVc2VyU2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlcy91c2VyLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZVVybCA6ICcuL3RlbXBsYXRlcy9teS1jbGllbnRzLnRwbC5odG1sJywgXHJcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIENsaWVudENhcmRDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNeUNsaWVudHNDb21wb25lbnQgeyAgXHJcbiAgICBzdGFnZXMgPSB7XHJcbiAgICAgICAgXCJwcm9zcGVjdFwiOiBcIlByb3NwZWN0XCIsXHJcbiAgICAgICAgXCJjbGllbnRcIjogXCJDbGllbnRcIiwgXHJcbiAgICAgICAgXCJsaXN0ZWRcIjogXCJMaXN0ZWRcIiwgXHJcbiAgICAgICAgXCJlc2Nyb3dcIjogXCJJbiBFc2Nyb3dcIiwgXHJcbiAgICAgICAgXCJjbG9zZWRcIjogXCJDbG9zZWQgTG9zdFwiXHJcbiAgICB9O1xyXG4gICAgdXNlcjogT2JqZWN0OyBcclxuICAgIG9wcG9ydHVuaXRpZXM7XHJcbiAgICBvcHBzID0ge307XHJcbiAgICBhY3RpdmVPcHBzID0gW107XHJcbiAgICBvcHBzUmVhZHkgPSBmYWxzZTtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcGFyYW1zOiBSb3V0ZVBhcmFtcywgcHJpdmF0ZSBfdXNlcnNlcnZpY2U6IFVzZXJTZXJ2aWNlKSB7fVxyXG4gICAgXHJcbiAgICBpc1JvdXRlQWN0aXZlKHJvdXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhcmFtcy5nZXQoJ2dyb3VwJykgPT0gcm91dGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNhdGVnb3JpemVPcHBzKG9wcHMpIHtcclxuICAgICAgICB0aGlzLm9wcHMgPSB7fTtcclxuICAgICAgICBvcHBzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50LnN0YWdlTmFtZSAhPSAnQXNzaWduZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMub3Bwcy5oYXNPd25Qcm9wZXJ0eShlbGVtZW50LnN0YWdlTmFtZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHBzW2VsZW1lbnQuc3RhZ2VOYW1lXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHBzW2VsZW1lbnQuc3RhZ2VOYW1lXS5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMuX3BhcmFtcy5nZXQoJ2dyb3VwJykgPT0gJ2FsbCcpIHsgXHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlT3BwcyA9IHRoaXMub3Bwb3J0dW5pdGllcztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZU9wcHMgPSB0aGlzLm9wcHNbdGhpcy5zdGFnZXNbdGhpcy5fcGFyYW1zLmdldCgnZ3JvdXAnKV1dO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9wcHNSZWFkeSA9IHRydWU7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5vcHBzKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbmdEb0NoZWNrKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl91c2Vyc2VydmljZS51c2VyICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnVzZXIgPSB0aGlzLl91c2Vyc2VydmljZS51c2VyOyAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fdXNlcnNlcnZpY2Uub3Bwb3J0dW5pdGllcyAhPSB1bmRlZmluZWQgJiYgIXRoaXMub3Bwc1JlYWR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMub3Bwb3J0dW5pdGllcyA9IHRoaXMuX3VzZXJzZXJ2aWNlLm9wcG9ydHVuaXRpZXM7XHJcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcml6ZU9wcHModGhpcy5vcHBvcnR1bml0aWVzKTtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
