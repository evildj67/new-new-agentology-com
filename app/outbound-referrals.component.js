System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, router_1;
    var OutboundReferralsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            OutboundReferralsComponent = (function () {
                function OutboundReferralsComponent(_params) {
                    this._params = _params;
                }
                OutboundReferralsComponent.prototype.isRouteActive = function (route) {
                    return this._params.get('group') == route;
                };
                OutboundReferralsComponent = __decorate([
                    core_1.Component({
                        templateUrl: './templates/outbound-referrals.tpl.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams])
                ], OutboundReferralsComponent);
                return OutboundReferralsComponent;
            }());
            exports_1("OutboundReferralsComponent", OutboundReferralsComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm91dGJvdW5kLXJlZmVycmFscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQTtnQkFDSSxvQ0FBb0IsT0FBb0I7b0JBQXBCLFlBQU8sR0FBUCxPQUFPLENBQWE7Z0JBQUcsQ0FBQztnQkFFNUMsa0RBQWEsR0FBYixVQUFjLEtBQUs7b0JBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQztnQkFDOUMsQ0FBQztnQkFUTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFdBQVcsRUFBRyx5Q0FBeUM7d0JBQ3ZELFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO3FCQUNsQyxDQUFDOzs4Q0FBQTtnQkFPRixpQ0FBQztZQUFELENBTkEsQUFNQyxJQUFBO1lBTkQsbUVBTUMsQ0FBQSIsImZpbGUiOiJvdXRib3VuZC1yZWZlcnJhbHMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZVBhcmFtc30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgdGVtcGxhdGVVcmwgOiAnLi90ZW1wbGF0ZXMvb3V0Ym91bmQtcmVmZXJyYWxzLnRwbC5odG1sJywgXHJcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPdXRib3VuZFJlZmVycmFsc0NvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wYXJhbXM6IFJvdXRlUGFyYW1zKSB7fVxyXG4gICAgXHJcbiAgICBpc1JvdXRlQWN0aXZlKHJvdXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhcmFtcy5nZXQoJ2dyb3VwJykgPT0gcm91dGU7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
