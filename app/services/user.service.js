System.register(['angular2/core', '../services/data.service', '../services/tools.service', 'rxjs/Observable'], function(exports_1, context_1) {
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
    var core_1, data_service_1, tools_service_1, Observable_1;
    var UserService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            },
            function (tools_service_1_1) {
                tools_service_1 = tools_service_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            UserService = (function () {
                function UserService(_dataService, _tools) {
                    this._dataService = _dataService;
                    this._tools = _tools;
                    this.credentials = {
                        "user_session": this._tools.getCookie('user_session'),
                        "username": this._tools.getCookie('username')
                    };
                }
                UserService.prototype.setUserData = function () {
                    var _this = this;
                    return Observable_1.Observable.create(function (observer) {
                        _this._dataService.postData(_this.credentials, 'get_agent')
                            .subscribe(function (data) {
                            _this.agent = data.response.agent;
                            _this.user = data.response.user;
                            _this.opportunities = data.response.agent['opportunity'];
                            observer.next();
                            observer.complete();
                        }, function (error) { return console.log(error); });
                    });
                };
                UserService.prototype.getLeadNotes = function (leadid) {
                    var _this = this;
                    if (leadid.length > 0) {
                        return Observable_1.Observable.create(function (observer) {
                            _this._dataService.postData(_this.credentials, 'get_notes', leadid)
                                .subscribe(function (data) {
                                observer.next(data.response.notes);
                                observer.complete();
                            }, function (error) { return console.log(error); });
                        });
                    }
                    return null;
                };
                UserService.prototype.logoutUser = function () {
                    this.agent = undefined;
                    this.user = undefined;
                    this.opportunities = undefined;
                    this._tools.setCookie('user_session', '', -10);
                    this._tools.setCookie('username', '', -10);
                };
                UserService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [data_service_1.DataService, tools_service_1.ToolService])
                ], UserService);
                return UserService;
            }());
            exports_1("UserService", UserService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3VzZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BO2dCQVNJLHFCQUNZLFlBQXlCLEVBQ3pCLE1BQW1CO29CQURuQixpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFDekIsV0FBTSxHQUFOLE1BQU0sQ0FBYTtvQkFQL0IsZ0JBQVcsR0FBRzt3QkFDVixjQUFjLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDO3dCQUNyRCxVQUFVLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDO3FCQUNoRCxDQUFDO2dCQUlnQyxDQUFDO2dCQUVuQyxpQ0FBVyxHQUFYO29CQUFBLGlCQWNDO29CQWJHLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFBLFFBQVE7d0JBQzdCLEtBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDOzZCQUN4RCxTQUFTLENBQ04sVUFBQSxJQUFJOzRCQUNBLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7NEJBQ2pDLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7NEJBQy9CLEtBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7NEJBQ3hELFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs0QkFDaEIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO3dCQUN4QixDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFsQixDQUFrQixDQUM5QixDQUFDO29CQUNOLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBRUQsa0NBQVksR0FBWixVQUFhLE1BQWM7b0JBQTNCLGlCQWNDO29CQWJHLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDcEIsTUFBTSxDQUFDLHVCQUFVLENBQUMsTUFBTSxDQUFDLFVBQUEsUUFBUTs0QkFDN0IsS0FBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFdBQVcsRUFBRSxXQUFXLEVBQUUsTUFBTSxDQUFDO2lDQUNoRSxTQUFTLENBQ04sVUFBQSxJQUFJO2dDQUNBLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQ0FDbkMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDOzRCQUN4QixDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFsQixDQUFrQixDQUM5QixDQUFBO3dCQUNMLENBQUMsQ0FBQyxDQUFDO29CQUNQLENBQUM7b0JBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDaEIsQ0FBQztnQkFFRCxnQ0FBVSxHQUFWO29CQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO29CQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztvQkFDdEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7b0JBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDL0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUMvQyxDQUFDO2dCQXBETDtvQkFBQyxpQkFBVSxFQUFFOzsrQkFBQTtnQkFxRGIsa0JBQUM7WUFBRCxDQXBEQSxBQW9EQyxJQUFBO1lBcERELHFDQW9EQyxDQUFBIiwiZmlsZSI6InNlcnZpY2VzL3VzZXIuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7RGF0YVNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2VzL2RhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7VG9vbFNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2VzL3Rvb2xzLnNlcnZpY2UnO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XHJcbiAgICB1c2VyOiBPYmplY3Q7XHJcbiAgICBhZ2VudDogT2JqZWN0O1xyXG4gICAgb3Bwb3J0dW5pdGllcztcclxuICAgIGNyZWRlbnRpYWxzID0ge1xyXG4gICAgICAgIFwidXNlcl9zZXNzaW9uXCI6IHRoaXMuX3Rvb2xzLmdldENvb2tpZSgndXNlcl9zZXNzaW9uJyksXHJcbiAgICAgICAgXCJ1c2VybmFtZVwiOiB0aGlzLl90b29scy5nZXRDb29raWUoJ3VzZXJuYW1lJylcclxuICAgIH07IFxyXG4gICAgICAgICAgICBcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgX2RhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSwgXHJcbiAgICAgICAgcHJpdmF0ZSBfdG9vbHM6IFRvb2xTZXJ2aWNlKSB7fVxyXG4gICAgXHJcbiAgICBzZXRVc2VyRGF0YSgpOiBPYnNlcnZhYmxlPGFueT4geyAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKG9ic2VydmVyID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fZGF0YVNlcnZpY2UucG9zdERhdGEodGhpcy5jcmVkZW50aWFscywgJ2dldF9hZ2VudCcpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHsgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZ2VudCA9IGRhdGEucmVzcG9uc2UuYWdlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyID0gZGF0YS5yZXNwb25zZS51c2VyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3Bwb3J0dW5pdGllcyA9IGRhdGEucmVzcG9uc2UuYWdlbnRbJ29wcG9ydHVuaXR5J107XHJcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dCgpOyAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpOyAgICBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgKTsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXRMZWFkTm90ZXMobGVhZGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIGlmIChsZWFkaWQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUob2JzZXJ2ZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZGF0YVNlcnZpY2UucG9zdERhdGEodGhpcy5jcmVkZW50aWFscywgJ2dldF9ub3RlcycsIGxlYWRpZClcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQoZGF0YS5yZXNwb25zZS5ub3Rlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7ICBcclxuICAgICAgICAgICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBsb2dvdXRVc2VyKCkge1xyXG4gICAgICAgIHRoaXMuYWdlbnQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy51c2VyID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMub3Bwb3J0dW5pdGllcyA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLl90b29scy5zZXRDb29raWUoJ3VzZXJfc2Vzc2lvbicsICcnLCAtMTApO1xyXG4gICAgICAgIHRoaXMuX3Rvb2xzLnNldENvb2tpZSgndXNlcm5hbWUnLCAnJywgLTEwKTsgICAgICAgIFxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
