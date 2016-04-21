System.register(['angular2/core', './services/data.service', './services/user.service', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, data_service_1, user_service_1, router_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(_dataService, _router, _userService) {
                    this._dataService = _dataService;
                    this._router = _router;
                    this._userService = _userService;
                }
                LoginComponent.prototype.onSubmit = function (form) {
                    var _this = this;
                    this._dataService.postData(form.value, 'login')
                        .subscribe(function (data) { return _this.loginUser(data); }, function (error) { return _this.handleError(error); });
                };
                LoginComponent.prototype.loginUser = function (data) {
                    var _this = this;
                    var user_data = {
                        "user_session": data.response.user.session_id,
                        "username": data.response.user.username
                    };
                    localStorage.setItem('credentials', JSON.stringify(user_data));
                    this._dataService.postData(user_data, 'get_agent')
                        .subscribe(function (data) {
                        localStorage.setItem('user', JSON.stringify(data.response.user));
                        localStorage.setItem('agent', JSON.stringify(data.response.agent));
                        localStorage.setItem('opportunities', JSON.stringify(data.response.agent['opportunity']));
                        _this._router.navigate(['MyClients', { group: 'all' }]);
                    }, function (error) { return console.log(error); });
                };
                LoginComponent.prototype.handleError = function (error) {
                    this.show_error = error;
                    console.log(error);
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'my-login',
                        templateUrl: './templates/login.tpl.html',
                        styleUrls: ['../src/css/login.css'],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [data_service_1.DataService, router_1.Router, user_service_1.UserService])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVdBO2dCQUlJLHdCQUFvQixZQUF5QixFQUFVLE9BQWUsRUFBVSxZQUF5QjtvQkFBckYsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUTtvQkFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtnQkFBRyxDQUFDO2dCQUU3RyxpQ0FBUSxHQUFSLFVBQVMsSUFBSTtvQkFBYixpQkFNQztvQkFMRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQzt5QkFDOUMsU0FBUyxDQUNOLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBcEIsQ0FBb0IsRUFDNUIsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUF2QixDQUF1QixDQUNuQyxDQUFDO2dCQUNOLENBQUM7Z0JBRUQsa0NBQVMsR0FBVCxVQUFVLElBQUk7b0JBQWQsaUJBa0JDO29CQWpCRyxJQUFJLFNBQVMsR0FBRzt3QkFDWixjQUFjLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVTt3QkFDN0MsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVE7cUJBQzFDLENBQUM7b0JBQ0YsWUFBWSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO29CQUUvRCxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDO3lCQUNqRCxTQUFTLENBQ04sVUFBQSxJQUFJO3dCQUNBLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUNqRSxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzt3QkFDbkUsWUFBWSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBRTFGLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUMsQ0FBQztvQkFDekQsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsQ0FDOUIsQ0FBQztnQkFDTixDQUFDO2dCQUVELG9DQUFXLEdBQVgsVUFBWSxLQUFLO29CQUNiLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO29CQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN2QixDQUFDO2dCQTNDTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxVQUFVO3dCQUNwQixXQUFXLEVBQUUsNEJBQTRCO3dCQUN6QyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQzt3QkFDbkMsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7cUJBQ2xDLENBQUM7O2tDQUFBO2dCQXVDRixxQkFBQztZQUFELENBdENBLEFBc0NDLElBQUE7WUF0Q0QsMkNBc0NDLENBQUEiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge0RhdGFTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL2RhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7VXNlclNlcnZpY2V9IGZyb20gJy4vc2VydmljZXMvdXNlci5zZXJ2aWNlJztcclxuaW1wb3J0IHtSb3V0ZXIsIFJPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LWxvZ2luJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi90ZW1wbGF0ZXMvbG9naW4udHBsLmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4uL3NyYy9jc3MvbG9naW4uY3NzJ10sXHJcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XHJcblxyXG4gICAgc2hvd19lcnJvcjogT2JqZWN0O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2RhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSwgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgX3VzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSkge31cclxuXHJcbiAgICBvblN1Ym1pdChmb3JtKSB7XHJcbiAgICAgICAgdGhpcy5fZGF0YVNlcnZpY2UucG9zdERhdGEoZm9ybS52YWx1ZSwgJ2xvZ2luJylcclxuICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+IHRoaXMubG9naW5Vc2VyKGRhdGEpLFxyXG4gICAgICAgICAgICBlcnJvciA9PiB0aGlzLmhhbmRsZUVycm9yKGVycm9yKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9naW5Vc2VyKGRhdGEpIHtcclxuICAgICAgICBsZXQgdXNlcl9kYXRhID0ge1xyXG4gICAgICAgICAgICBcInVzZXJfc2Vzc2lvblwiOiBkYXRhLnJlc3BvbnNlLnVzZXIuc2Vzc2lvbl9pZCxcclxuICAgICAgICAgICAgXCJ1c2VybmFtZVwiOiBkYXRhLnJlc3BvbnNlLnVzZXIudXNlcm5hbWVcclxuICAgICAgICB9O1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjcmVkZW50aWFscycsIEpTT04uc3RyaW5naWZ5KHVzZXJfZGF0YSkpO1xyXG5cclxuICAgICAgICB0aGlzLl9kYXRhU2VydmljZS5wb3N0RGF0YSh1c2VyX2RhdGEsICdnZXRfYWdlbnQnKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXInLCBKU09OLnN0cmluZ2lmeShkYXRhLnJlc3BvbnNlLnVzZXIpKTtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhZ2VudCcsIEpTT04uc3RyaW5naWZ5KGRhdGEucmVzcG9uc2UuYWdlbnQpKTtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdvcHBvcnR1bml0aWVzJywgSlNPTi5zdHJpbmdpZnkoZGF0YS5yZXNwb25zZS5hZ2VudFsnb3Bwb3J0dW5pdHknXSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ015Q2xpZW50cycsIHtncm91cDogJ2FsbCd9XSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlRXJyb3IoZXJyb3IpIHtcclxuICAgICAgICB0aGlzLnNob3dfZXJyb3IgPSBlcnJvcjtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
