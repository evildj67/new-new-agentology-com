System.register(['angular2/core', 'angular2/router', './services/data.service', './services/user.service', './nav.component', './login.component', './my-clients.component', './outbound-referrals.component', './manage-my-team.component', './my-profile.component'], function(exports_1, context_1) {
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
    var core_1, router_1, data_service_1, user_service_1, nav_component_1, login_component_1, my_clients_component_1, outbound_referrals_component_1, manage_my_team_component_1, my_profile_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
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
                function AppComponent(_dataService, _router, _userService) {
                    this._dataService = _dataService;
                    this._router = _router;
                    this._userService = _userService;
                }
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    if (sessionStorage.getItem('session_id') && typeof this._userService.agent != undefined) {
                        this.user_data = {
                            "user_session": sessionStorage.getItem('session_id'),
                            "username": sessionStorage.getItem('username')
                        };
                        this._dataService.postData(this.user_data, 'get_agent')
                            .subscribe(function (data) {
                            _this._userService.user = data.response.user;
                            _this._userService.agent = data.response.agent;
                            _this._userService.opportunities = data.response.agent['opportunity'];
                        }, function (error) { return console.log(error); });
                    }
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <my-nav></my-nav>\n        <div class=\"main row\">\n            <router-outlet></router-outlet>\n        </div>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES, nav_component_1.NavComponent]
                    }),
                    router_1.RouteConfig([
                        { path: '/login', name: 'Login', component: login_component_1.LoginComponent, useAsDefault: true },
                        { path: '/my-clients/:group', name: 'MyClients', component: my_clients_component_1.MyClientsComponent },
                        { path: '/outbound-referrals/:group', name: 'OutboundReferrals', component: outbound_referrals_component_1.OutboundReferralsComponent },
                        { path: '/manage-my-team', name: 'ManageMyTeam', component: manage_my_team_component_1.ManageMyTeamComponent },
                        { path: '/my-profile', name: 'MyProfile', component: my_profile_component_1.MyProfileComponent }
                    ]), 
                    __metadata('design:paramtypes', [data_service_1.DataService, router_1.Router, user_service_1.UserService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE0QkE7Z0JBR0ksc0JBQW9CLFlBQXlCLEVBQVUsT0FBZSxFQUFVLFlBQXlCO29CQUFyRixpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFBVSxZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO2dCQUFHLENBQUM7Z0JBRTdHLCtCQUFRLEdBQVI7b0JBQUEsaUJBZ0JDO29CQWZHLEVBQUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO3dCQUN0RixJQUFJLENBQUMsU0FBUyxHQUFHOzRCQUNiLGNBQWMsRUFBRSxjQUFjLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQzs0QkFDcEQsVUFBVSxFQUFFLGNBQWMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO3lCQUNqRCxDQUFDO3dCQUNGLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDOzZCQUN0RCxTQUFTLENBQ04sVUFBQSxJQUFJOzRCQUNBLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDOzRCQUM1QyxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQzs0QkFDOUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7d0JBQ3pFLENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLENBQzlCLENBQUM7b0JBQ04sQ0FBQztnQkFDTCxDQUFDO2dCQXRDTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUsa0lBS1Q7d0JBQ0QsVUFBVSxFQUFFLENBQUMsMEJBQWlCLEVBQUUsNEJBQVksQ0FBQztxQkFDaEQsQ0FBQztvQkFDRCxvQkFBVyxDQUFDO3dCQUNULEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUM7d0JBQzlFLEVBQUMsSUFBSSxFQUFFLG9CQUFvQixFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLHlDQUFrQixFQUFDO3dCQUM5RSxFQUFDLElBQUksRUFBRSw0QkFBNEIsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUUsU0FBUyxFQUFFLHlEQUEwQixFQUFDO3dCQUN0RyxFQUFDLElBQUksRUFBRSxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxnREFBcUIsRUFBQzt3QkFDakYsRUFBQyxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLHlDQUFrQixFQUFDO3FCQUMxRSxDQUFDOztnQ0FBQTtnQkF1QkYsbUJBQUM7WUFBRCxDQXRCQSxBQXNCQyxJQUFBO1lBdEJELHVDQXNCQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Um91dGVyLCBSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge0RhdGFTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL2RhdGEuc2VydmljZSc7XG5pbXBvcnQge1VzZXJTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL3VzZXIuc2VydmljZSc7XG5pbXBvcnQge05hdkNvbXBvbmVudH0gZnJvbSAnLi9uYXYuY29tcG9uZW50JztcbmltcG9ydCB7TG9naW5Db21wb25lbnR9IGZyb20gJy4vbG9naW4uY29tcG9uZW50JztcbmltcG9ydCB7TXlDbGllbnRzQ29tcG9uZW50fSBmcm9tICcuL215LWNsaWVudHMuY29tcG9uZW50JztcbmltcG9ydCB7T3V0Ym91bmRSZWZlcnJhbHNDb21wb25lbnR9IGZyb20gJy4vb3V0Ym91bmQtcmVmZXJyYWxzLmNvbXBvbmVudCc7XG5pbXBvcnQge01hbmFnZU15VGVhbUNvbXBvbmVudH0gZnJvbSAnLi9tYW5hZ2UtbXktdGVhbS5jb21wb25lbnQnO1xuaW1wb3J0IHtNeVByb2ZpbGVDb21wb25lbnR9IGZyb20gJy4vbXktcHJvZmlsZS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPG15LW5hdj48L215LW5hdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1haW4gcm93XCI+XG4gICAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLCBOYXZDb21wb25lbnRdXG59KVxuQFJvdXRlQ29uZmlnKFtcbiAgICB7cGF0aDogJy9sb2dpbicsIG5hbWU6ICdMb2dpbicsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnQsIHVzZUFzRGVmYXVsdDogdHJ1ZX0sXG4gICAge3BhdGg6ICcvbXktY2xpZW50cy86Z3JvdXAnLCBuYW1lOiAnTXlDbGllbnRzJywgY29tcG9uZW50OiBNeUNsaWVudHNDb21wb25lbnR9LFxuICAgIHtwYXRoOiAnL291dGJvdW5kLXJlZmVycmFscy86Z3JvdXAnLCBuYW1lOiAnT3V0Ym91bmRSZWZlcnJhbHMnLCBjb21wb25lbnQ6IE91dGJvdW5kUmVmZXJyYWxzQ29tcG9uZW50fSxcbiAgICB7cGF0aDogJy9tYW5hZ2UtbXktdGVhbScsIG5hbWU6ICdNYW5hZ2VNeVRlYW0nLCBjb21wb25lbnQ6IE1hbmFnZU15VGVhbUNvbXBvbmVudH0sXG4gICAge3BhdGg6ICcvbXktcHJvZmlsZScsIG5hbWU6ICdNeVByb2ZpbGUnLCBjb21wb25lbnQ6IE15UHJvZmlsZUNvbXBvbmVudH1cbl0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICB1c2VyX2RhdGE6IE9iamVjdDtcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kYXRhU2VydmljZTogRGF0YVNlcnZpY2UsIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLCBwcml2YXRlIF91c2VyU2VydmljZTogVXNlclNlcnZpY2UpIHt9XG4gICAgXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdzZXNzaW9uX2lkJykgJiYgdHlwZW9mIHRoaXMuX3VzZXJTZXJ2aWNlLmFnZW50ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy51c2VyX2RhdGEgPSB7XG4gICAgICAgICAgICAgICAgXCJ1c2VyX3Nlc3Npb25cIjogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnc2Vzc2lvbl9pZCcpLFxuICAgICAgICAgICAgICAgIFwidXNlcm5hbWVcIjogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcm5hbWUnKVxuICAgICAgICAgICAgfTsgICBcbiAgICAgICAgICAgIHRoaXMuX2RhdGFTZXJ2aWNlLnBvc3REYXRhKHRoaXMudXNlcl9kYXRhLCAnZ2V0X2FnZW50JylcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VzZXJTZXJ2aWNlLnVzZXIgPSBkYXRhLnJlc3BvbnNlLnVzZXI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VzZXJTZXJ2aWNlLmFnZW50ID0gZGF0YS5yZXNwb25zZS5hZ2VudDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXNlclNlcnZpY2Uub3Bwb3J0dW5pdGllcyA9IGRhdGEucmVzcG9uc2UuYWdlbnRbJ29wcG9ydHVuaXR5J107XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
