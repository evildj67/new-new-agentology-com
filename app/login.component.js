System.register(['angular2/core', './services/data.service', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, data_service_1, router_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(_dataService, _router) {
                    this._dataService = _dataService;
                    this._router = _router;
                }
                LoginComponent.prototype.onSubmit = function (form) {
                    var _this = this;
                    this._dataService.postData(form.value, 'login')
                        .subscribe(function (data) { return _this.loginUser(data); }, function (error) { return _this.handleError(error); });
                };
                LoginComponent.prototype.loginUser = function (data) {
                    sessionStorage.setItem('session_id', data.response.user.session_id);
                    sessionStorage.setItem('username', data.response.user.username);
                    this._router.navigate(['MyClients', { group: 'all' }]);
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
                    __metadata('design:paramtypes', [data_service_1.DataService, router_1.Router])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVBO2dCQUlJLHdCQUFvQixZQUF5QixFQUFVLE9BQWU7b0JBQWxELGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUFVLFlBQU8sR0FBUCxPQUFPLENBQVE7Z0JBQUcsQ0FBQztnQkFFMUUsaUNBQVEsR0FBUixVQUFTLElBQUk7b0JBQWIsaUJBTUM7b0JBTEcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUM7eUJBQzlDLFNBQVMsQ0FDTixVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQXBCLENBQW9CLEVBQzVCLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBdkIsQ0FBdUIsQ0FDbkMsQ0FBQztnQkFDTixDQUFDO2dCQUVELGtDQUFTLEdBQVQsVUFBVSxJQUFJO29CQUNWLGNBQWMsQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUNwRSxjQUFjLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDaEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN6RCxDQUFDO2dCQUVELG9DQUFXLEdBQVgsVUFBWSxLQUFLO29CQUNiLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO29CQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN2QixDQUFDO2dCQTdCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxVQUFVO3dCQUNwQixXQUFXLEVBQUUsNEJBQTRCO3dCQUN6QyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQzt3QkFDbkMsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7cUJBQ2xDLENBQUM7O2tDQUFBO2dCQXlCRixxQkFBQztZQUFELENBeEJBLEFBd0JDLElBQUE7WUF4QkQsMkNBd0JDLENBQUEiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge0RhdGFTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL2RhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7Um91dGVyLCBST1VURVJfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1sb2dpbicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vdGVtcGxhdGVzL2xvZ2luLnRwbC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuLi9zcmMvY3NzL2xvZ2luLmNzcyddLFxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xyXG5cclxuICAgIHNob3dfZXJyb3I6IE9iamVjdDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kYXRhU2VydmljZTogRGF0YVNlcnZpY2UsIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7fVxyXG5cclxuICAgIG9uU3VibWl0KGZvcm0pIHtcclxuICAgICAgICB0aGlzLl9kYXRhU2VydmljZS5wb3N0RGF0YShmb3JtLnZhbHVlLCAnbG9naW4nKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4gdGhpcy5sb2dpblVzZXIoZGF0YSksXHJcbiAgICAgICAgICAgIGVycm9yID0+IHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dpblVzZXIoZGF0YSkge1xyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3Nlc3Npb25faWQnLCBkYXRhLnJlc3BvbnNlLnVzZXIuc2Vzc2lvbl9pZCk7XHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgndXNlcm5hbWUnLCBkYXRhLnJlc3BvbnNlLnVzZXIudXNlcm5hbWUpO1xyXG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ015Q2xpZW50cycsIHtncm91cDogJ2FsbCd9XSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlRXJyb3IoZXJyb3IpIHtcclxuICAgICAgICB0aGlzLnNob3dfZXJyb3IgPSBlcnJvcjtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
