System.register(['angular2/core', 'angular2/router', './nav.component', './login.component', './my-clients.component', './outbound-referrals.component', './manage-my-team.component', './my-profile.component'], function(exports_1, context_1) {
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
    var core_1, router_1, nav_component_1, login_component_1, my_clients_component_1, outbound_referrals_component_1, manage_my_team_component_1, my_profile_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
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
                function AppComponent() {
                }
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
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUEwQkE7Z0JBQUE7Z0JBRUEsQ0FBQztnQkFuQkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLGtJQUtUO3dCQUNELFVBQVUsRUFBRSxDQUFDLDBCQUFpQixFQUFFLDRCQUFZLENBQUM7cUJBQ2hELENBQUM7b0JBQ0Qsb0JBQVcsQ0FBQzt3QkFDVCxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFDO3dCQUM5RSxFQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSx5Q0FBa0IsRUFBQzt3QkFDOUUsRUFBQyxJQUFJLEVBQUUsNEJBQTRCLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFFLFNBQVMsRUFBRSx5REFBMEIsRUFBQzt3QkFDdEcsRUFBQyxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsZ0RBQXFCLEVBQUM7d0JBQ2pGLEVBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSx5Q0FBa0IsRUFBQztxQkFDMUUsQ0FBQzs7Z0NBQUE7Z0JBR0YsbUJBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELHVDQUVDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XHJcbmltcG9ydCB7TmF2Q29tcG9uZW50fSBmcm9tICcuL25hdi5jb21wb25lbnQnO1xyXG5pbXBvcnQge0xvZ2luQ29tcG9uZW50fSBmcm9tICcuL2xvZ2luLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7TXlDbGllbnRzQ29tcG9uZW50fSBmcm9tICcuL215LWNsaWVudHMuY29tcG9uZW50JztcclxuaW1wb3J0IHtPdXRib3VuZFJlZmVycmFsc0NvbXBvbmVudH0gZnJvbSAnLi9vdXRib3VuZC1yZWZlcnJhbHMuY29tcG9uZW50JztcclxuaW1wb3J0IHtNYW5hZ2VNeVRlYW1Db21wb25lbnR9IGZyb20gJy4vbWFuYWdlLW15LXRlYW0uY29tcG9uZW50JztcclxuaW1wb3J0IHtNeVByb2ZpbGVDb21wb25lbnR9IGZyb20gJy4vbXktcHJvZmlsZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxteS1uYXY+PC9teS1uYXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1haW4gcm93XCI+XHJcbiAgICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGAsXHJcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIE5hdkNvbXBvbmVudF1cclxufSlcclxuQFJvdXRlQ29uZmlnKFtcclxuICAgIHtwYXRoOiAnL2xvZ2luJywgbmFtZTogJ0xvZ2luJywgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCwgdXNlQXNEZWZhdWx0OiB0cnVlfSxcclxuICAgIHtwYXRoOiAnL215LWNsaWVudHMvOmdyb3VwJywgbmFtZTogJ015Q2xpZW50cycsIGNvbXBvbmVudDogTXlDbGllbnRzQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOiAnL291dGJvdW5kLXJlZmVycmFscy86Z3JvdXAnLCBuYW1lOiAnT3V0Ym91bmRSZWZlcnJhbHMnLCBjb21wb25lbnQ6IE91dGJvdW5kUmVmZXJyYWxzQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOiAnL21hbmFnZS1teS10ZWFtJywgbmFtZTogJ01hbmFnZU15VGVhbScsIGNvbXBvbmVudDogTWFuYWdlTXlUZWFtQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOiAnL215LXByb2ZpbGUnLCBuYW1lOiAnTXlQcm9maWxlJywgY29tcG9uZW50OiBNeVByb2ZpbGVDb21wb25lbnR9XHJcbl0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
