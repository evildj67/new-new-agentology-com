System.register(['angular2/core', 'angular2/router', './services/user.service', './nav.component', './login.component', './my-clients.component', './outbound-referrals.component', './manage-my-team.component', './my-profile.component'], function(exports_1, context_1) {
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
    var core_1, router_1, user_service_1, nav_component_1, login_component_1, my_clients_component_1, outbound_referrals_component_1, manage_my_team_component_1, my_profile_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (nav_component_1_1) {
                nav_component_1 = nav_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (my_clients_component_1_1) {
                my_clients_component_1 = my_clients_component_1_1;
            },
            function (outbound_referrals_component_1_1) {
                outbound_referrals_component_1 = outbound_referrals_component_1_1;
            },
            function (manage_my_team_component_1_1) {
                manage_my_team_component_1 = manage_my_team_component_1_1;
            },
            function (my_profile_component_1_1) {
                my_profile_component_1 = my_profile_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_router, _userService) {
                    this._router = _router;
                    this._userService = _userService;
                }
                AppComponent.prototype.logOut = function () {
                    this._userService.logoutUser();
                    this._router.navigate(['login']);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <my-nav></my-nav>\n        <div class=\"main row\">\n            <router-outlet></router-outlet>\n        </div>    \n        <div class=\"bottom\">\n            <a href=\"#\" (click)=\"logOut()\">Log out</a>\n        </div>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES, nav_component_1.NavComponent]
                    }),
                    router_1.RouteConfig([
                        { path: '/login', name: 'Login', component: login_component_1.LoginComponent, useAsDefault: true },
                        { path: '/my-clients/:group', name: 'MyClients', component: my_clients_component_1.MyClientsComponent },
                        { path: '/outbound-referrals/:group', name: 'OutboundReferrals', component: outbound_referrals_component_1.OutboundReferralsComponent },
                        { path: '/manage-my-team', name: 'ManageMyTeam', component: manage_my_team_component_1.ManageMyTeamComponent },
                        { path: '/my-profile', name: 'MyProfile', component: my_profile_component_1.MyProfileComponent }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router, user_service_1.UserService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE4QkE7Z0JBQ0ksc0JBQ1ksT0FBZSxFQUNmLFlBQXlCO29CQUR6QixZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUNmLGlCQUFZLEdBQVosWUFBWSxDQUFhO2dCQUFHLENBQUM7Z0JBRXpDLDZCQUFNLEdBQU47b0JBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNyQyxDQUFDO2dCQTVCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUsa1BBUVQ7d0JBQ0QsVUFBVSxFQUFFLENBQUMsMEJBQWlCLEVBQUUsNEJBQVksQ0FBQztxQkFDaEQsQ0FBQztvQkFDRCxvQkFBVyxDQUFDO3dCQUNULEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUM7d0JBQzlFLEVBQUMsSUFBSSxFQUFFLG9CQUFvQixFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLHlDQUFrQixFQUFDO3dCQUM5RSxFQUFDLElBQUksRUFBRSw0QkFBNEIsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUUsU0FBUyxFQUFFLHlEQUEwQixFQUFDO3dCQUN0RyxFQUFDLElBQUksRUFBRSxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxnREFBcUIsRUFBQzt3QkFDakYsRUFBQyxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLHlDQUFrQixFQUFDO3FCQUMxRSxDQUFDOztnQ0FBQTtnQkFVRixtQkFBQztZQUFELENBVEEsQUFTQyxJQUFBO1lBVEQsdUNBU0MsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1JvdXRlciwgUm91dGVDb25maWcsIFJPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5pbXBvcnQge1VzZXJTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL3VzZXIuc2VydmljZSc7XHJcbmltcG9ydCB7TmF2Q29tcG9uZW50fSBmcm9tICcuL25hdi5jb21wb25lbnQnO1xyXG5pbXBvcnQge0xvZ2luQ29tcG9uZW50fSBmcm9tICcuL2xvZ2luLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7TXlDbGllbnRzQ29tcG9uZW50fSBmcm9tICcuL215LWNsaWVudHMuY29tcG9uZW50JztcclxuaW1wb3J0IHtPdXRib3VuZFJlZmVycmFsc0NvbXBvbmVudH0gZnJvbSAnLi9vdXRib3VuZC1yZWZlcnJhbHMuY29tcG9uZW50JztcclxuaW1wb3J0IHtNYW5hZ2VNeVRlYW1Db21wb25lbnR9IGZyb20gJy4vbWFuYWdlLW15LXRlYW0uY29tcG9uZW50JztcclxuaW1wb3J0IHtNeVByb2ZpbGVDb21wb25lbnR9IGZyb20gJy4vbXktcHJvZmlsZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxteS1uYXY+PC9teS1uYXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1haW4gcm93XCI+XHJcbiAgICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cclxuICAgICAgICA8L2Rpdj4gICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJvdHRvbVwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIChjbGljayk9XCJsb2dPdXQoKVwiPkxvZyBvdXQ8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgLFxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLCBOYXZDb21wb25lbnRdXHJcbn0pXHJcbkBSb3V0ZUNvbmZpZyhbXHJcbiAgICB7cGF0aDogJy9sb2dpbicsIG5hbWU6ICdMb2dpbicsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnQsIHVzZUFzRGVmYXVsdDogdHJ1ZX0sXHJcbiAgICB7cGF0aDogJy9teS1jbGllbnRzLzpncm91cCcsIG5hbWU6ICdNeUNsaWVudHMnLCBjb21wb25lbnQ6IE15Q2xpZW50c0NvbXBvbmVudH0sXHJcbiAgICB7cGF0aDogJy9vdXRib3VuZC1yZWZlcnJhbHMvOmdyb3VwJywgbmFtZTogJ091dGJvdW5kUmVmZXJyYWxzJywgY29tcG9uZW50OiBPdXRib3VuZFJlZmVycmFsc0NvbXBvbmVudH0sXHJcbiAgICB7cGF0aDogJy9tYW5hZ2UtbXktdGVhbScsIG5hbWU6ICdNYW5hZ2VNeVRlYW0nLCBjb21wb25lbnQ6IE1hbmFnZU15VGVhbUNvbXBvbmVudH0sXHJcbiAgICB7cGF0aDogJy9teS1wcm9maWxlJywgbmFtZTogJ015UHJvZmlsZScsIGNvbXBvbmVudDogTXlQcm9maWxlQ29tcG9uZW50fVxyXG5dKVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLCBcclxuICAgICAgICBwcml2YXRlIF91c2VyU2VydmljZTogVXNlclNlcnZpY2UpIHt9XHJcbiAgICBcclxuICAgIGxvZ091dCgpIHtcclxuICAgICAgICB0aGlzLl91c2VyU2VydmljZS5sb2dvdXRVc2VyKCk7XHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnbG9naW4nXSk7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
