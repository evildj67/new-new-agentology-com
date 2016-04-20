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
    var NavComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            NavComponent = (function () {
                function NavComponent(router) {
                    this.router = router;
                }
                NavComponent.prototype.isRouteActive = function (route) {
                    return location.href.indexOf(route) > -1;
                };
                NavComponent = __decorate([
                    core_1.Component({
                        selector: 'my-nav',
                        template: "\n        <div class=\"top-nav row\">\n            <div class=\"col-xs-4\">\n                <img class=\"logo\" src=\"src/images/logo-agentology.png\" />\n            </div>\n            <div class=\"col-xs-8 text-xs-right\">\n                <nav class=\"nav nav-inline\">\n                    <a class=\"nav-link\" href=\"#\">New Leads</a>\n                    <a class=\"nav-link\" [class.active]=\"isRouteActive('my-clients')\" [routerLink]=\"['MyClients', {group: 'all'}]\">My Clients</a>\n                    <a class=\"nav-link\" [class.active]=\"isRouteActive('outbound-referrals')\" [routerLink]=\"['OutboundReferrals', {group: 'all'}]\">Outbound Referrals</a>\n                    <a class=\"nav-link\" [class.active]=\"isRouteActive('manage-my-team')\" [routerLink]=\"['ManageMyTeam']\">Manage My Team</a>\n                    <a class=\"nav-link\" [class.active]=\"isRouteActive('my-profile')\" [routerLink]=\"['MyProfile']\">My Profile</a>\n                </nav>    \n            </div>\n        </div>    \n    ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], NavComponent);
                return NavComponent;
            }());
            exports_1("NavComponent", NavComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF1QkE7Z0JBQ0ksc0JBQW1CLE1BQWM7b0JBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtnQkFBRyxDQUFDO2dCQUVyQyxvQ0FBYSxHQUFiLFVBQWMsS0FBSztvQkFDZixNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQzdDLENBQUM7Z0JBekJMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSxxZ0NBZVQ7d0JBQ0QsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7cUJBQ2xDLENBQUM7O2dDQUFBO2dCQU9GLG1CQUFDO1lBQUQsQ0FOQSxBQU1DLElBQUE7WUFORCx1Q0FNQyxDQUFBIiwiZmlsZSI6Im5hdi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Um91dGVyLCBST1VURVJfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1uYXYnLCBcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRvcC1uYXYgcm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImxvZ29cIiBzcmM9XCJzcmMvaW1hZ2VzL2xvZ28tYWdlbnRvbG9neS5wbmdcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy04IHRleHQteHMtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3M9XCJuYXYgbmF2LWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiPk5ldyBMZWFkczwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rXCIgW2NsYXNzLmFjdGl2ZV09XCJpc1JvdXRlQWN0aXZlKCdteS1jbGllbnRzJylcIiBbcm91dGVyTGlua109XCJbJ015Q2xpZW50cycsIHtncm91cDogJ2FsbCd9XVwiPk15IENsaWVudHM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGlua1wiIFtjbGFzcy5hY3RpdmVdPVwiaXNSb3V0ZUFjdGl2ZSgnb3V0Ym91bmQtcmVmZXJyYWxzJylcIiBbcm91dGVyTGlua109XCJbJ091dGJvdW5kUmVmZXJyYWxzJywge2dyb3VwOiAnYWxsJ31dXCI+T3V0Ym91bmQgUmVmZXJyYWxzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiBbY2xhc3MuYWN0aXZlXT1cImlzUm91dGVBY3RpdmUoJ21hbmFnZS1teS10ZWFtJylcIiBbcm91dGVyTGlua109XCJbJ01hbmFnZU15VGVhbSddXCI+TWFuYWdlIE15IFRlYW08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGlua1wiIFtjbGFzcy5hY3RpdmVdPVwiaXNSb3V0ZUFjdGl2ZSgnbXktcHJvZmlsZScpXCIgW3JvdXRlckxpbmtdPVwiWydNeVByb2ZpbGUnXVwiPk15IFByb2ZpbGU8L2E+XHJcbiAgICAgICAgICAgICAgICA8L25hdj4gICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PiAgICBcclxuICAgIGAsXHJcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOYXZDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIHJvdXRlcjogUm91dGVyKSB7fVxyXG4gICAgXHJcbiAgICBpc1JvdXRlQWN0aXZlKHJvdXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIGxvY2F0aW9uLmhyZWYuaW5kZXhPZihyb3V0ZSkgPiAtMTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
