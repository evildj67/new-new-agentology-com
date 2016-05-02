System.register(['angular2/core', './services/data.service', './services/user.service', './services/tools.service', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, data_service_1, user_service_1, tools_service_1, router_1;
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
            function (tools_service_1_1) {
                tools_service_1 = tools_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(_dataService, _router, _userService, _tools) {
                    this._dataService = _dataService;
                    this._router = _router;
                    this._userService = _userService;
                    this._tools = _tools;
                }
                LoginComponent.prototype.onSubmit = function (form) {
                    var _this = this;
                    this._dataService.postData(form.value, 'login')
                        .subscribe(function (data) { return _this.loginUser(data); }, function (error) { return _this.handleError(error); });
                };
                LoginComponent.prototype.loginUser = function (data) {
                    var _this = this;
                    this._tools.setCookie('user_session', data.response.user.session_id);
                    this._tools.setCookie('username', data.response.user.username);
                    this._userService.setUserData()
                        .subscribe(function (success) {
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
                    __metadata('design:paramtypes', [data_service_1.DataService, router_1.Router, user_service_1.UserService, tools_service_1.ToolService])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVlBO2dCQUlJLHdCQUNZLFlBQXlCLEVBQ3pCLE9BQWUsRUFDZixZQUF5QixFQUN6QixNQUFtQjtvQkFIbkIsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBQ3pCLFlBQU8sR0FBUCxPQUFPLENBQVE7b0JBQ2YsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBQ3pCLFdBQU0sR0FBTixNQUFNLENBQWE7Z0JBQUcsQ0FBQztnQkFFbkMsaUNBQVEsR0FBUixVQUFTLElBQUk7b0JBQWIsaUJBTUM7b0JBTEcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUM7eUJBQzlDLFNBQVMsQ0FDTixVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQXBCLENBQW9CLEVBQzVCLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBdkIsQ0FBdUIsQ0FDbkMsQ0FBQztnQkFDTixDQUFDO2dCQUVELGtDQUFTLEdBQVQsVUFBVSxJQUFJO29CQUFkLGlCQVdDO29CQVZHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDckUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUUvRCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRTt5QkFDOUIsU0FBUyxDQUNOLFVBQUEsT0FBTzt3QkFDSCxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3pELENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLENBQzlCLENBQUM7Z0JBQ04sQ0FBQztnQkFFRCxvQ0FBVyxHQUFYLFVBQVksS0FBSztvQkFDYixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztvQkFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDdkIsQ0FBQztnQkF4Q0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsVUFBVTt3QkFDcEIsV0FBVyxFQUFFLDRCQUE0Qjt3QkFDekMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7d0JBQ25DLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO3FCQUNsQyxDQUFDOztrQ0FBQTtnQkFvQ0YscUJBQUM7WUFBRCxDQW5DQSxBQW1DQyxJQUFBO1lBbkNELDJDQW1DQyxDQUFBIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtEYXRhU2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlcy9kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQge1VzZXJTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL3VzZXIuc2VydmljZSc7XHJcbmltcG9ydCB7VG9vbFNlcnZpY2V9IGZyb20gJy4vc2VydmljZXMvdG9vbHMuc2VydmljZSc7XHJcbmltcG9ydCB7Um91dGVyLCBST1VURVJfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1sb2dpbicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vdGVtcGxhdGVzL2xvZ2luLnRwbC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuLi9zcmMvY3NzL2xvZ2luLmNzcyddLFxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xyXG5cclxuICAgIHNob3dfZXJyb3I6IE9iamVjdDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIF9kYXRhU2VydmljZTogRGF0YVNlcnZpY2UsIFxyXG4gICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLCBcclxuICAgICAgICBwcml2YXRlIF91c2VyU2VydmljZTogVXNlclNlcnZpY2UsIFxyXG4gICAgICAgIHByaXZhdGUgX3Rvb2xzOiBUb29sU2VydmljZSkge31cclxuXHJcbiAgICBvblN1Ym1pdChmb3JtKSB7XHJcbiAgICAgICAgdGhpcy5fZGF0YVNlcnZpY2UucG9zdERhdGEoZm9ybS52YWx1ZSwgJ2xvZ2luJylcclxuICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+IHRoaXMubG9naW5Vc2VyKGRhdGEpLFxyXG4gICAgICAgICAgICBlcnJvciA9PiB0aGlzLmhhbmRsZUVycm9yKGVycm9yKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9naW5Vc2VyKGRhdGEpIHtcclxuICAgICAgICB0aGlzLl90b29scy5zZXRDb29raWUoJ3VzZXJfc2Vzc2lvbicsIGRhdGEucmVzcG9uc2UudXNlci5zZXNzaW9uX2lkKTtcclxuICAgICAgICB0aGlzLl90b29scy5zZXRDb29raWUoJ3VzZXJuYW1lJywgZGF0YS5yZXNwb25zZS51c2VyLnVzZXJuYW1lKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLl91c2VyU2VydmljZS5zZXRVc2VyRGF0YSgpXHJcbiAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgc3VjY2VzcyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydNeUNsaWVudHMnLCB7Z3JvdXA6ICdhbGwnfV0pO1xyXG4gICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVFcnJvcihlcnJvcikge1xyXG4gICAgICAgIHRoaXMuc2hvd19lcnJvciA9IGVycm9yO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
