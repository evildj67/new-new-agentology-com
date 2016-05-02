System.register(['angular2/core', './services/user.service'], function(exports_1, context_1) {
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
    var core_1, user_service_1;
    var LeadDetailsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            LeadDetailsComponent = (function () {
                function LeadDetailsComponent(_userService) {
                    this._userService = _userService;
                    this.tab = '1';
                }
                LeadDetailsComponent.prototype.ngOnChanges = function (changes) {
                    this.clientid = this.client['id'];
                    // this._userService.getLeadNotes(this.clientid)
                    // .subscribe(
                    //     data => this.statusNotes = data
                    // )
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], LeadDetailsComponent.prototype, "client", void 0);
                LeadDetailsComponent = __decorate([
                    core_1.Component({
                        selector: 'lead-details',
                        templateUrl: './templates/lead-details.modal.tpl.html',
                        styleUrls: []
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
                ], LeadDetailsComponent);
                return LeadDetailsComponent;
            }());
            exports_1("LeadDetailsComponent", LeadDetailsComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlYWQtZGV0YWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFRQTtnQkFNSSw4QkFBb0IsWUFBeUI7b0JBQXpCLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUg3QyxRQUFHLEdBQVcsR0FBRyxDQUFDO2dCQUc4QixDQUFDO2dCQUVqRCwwQ0FBVyxHQUFYLFVBQVksT0FBTztvQkFDZixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBRWxDLGdEQUFnRDtvQkFDaEQsY0FBYztvQkFDZCxzQ0FBc0M7b0JBQ3RDLElBQUk7Z0JBQ1IsQ0FBQztnQkFkRDtvQkFBQyxZQUFLLEVBQUU7O29FQUFBO2dCQU5aO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGNBQWM7d0JBQ3hCLFdBQVcsRUFBRSx5Q0FBeUM7d0JBQ3RELFNBQVMsRUFBRSxFQUFFO3FCQUNoQixDQUFDOzt3Q0FBQTtnQkFpQkYsMkJBQUM7WUFBRCxDQWhCQSxBQWdCQyxJQUFBO1lBaEJELHVEQWdCQyxDQUFBIiwiZmlsZSI6ImxlYWQtZGV0YWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlc30gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7VXNlclNlcnZpY2V9IGZyb20gJy4vc2VydmljZXMvdXNlci5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdsZWFkLWRldGFpbHMnLCBcclxuICAgIHRlbXBsYXRlVXJsOiAnLi90ZW1wbGF0ZXMvbGVhZC1kZXRhaWxzLm1vZGFsLnRwbC5odG1sJywgICAgXHJcbiAgICBzdHlsZVVybHM6IFtdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMZWFkRGV0YWlsc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgICBASW5wdXQoKSBjbGllbnQ6IE9iamVjdDtcclxuICAgIGNsaWVudGlkOiBzdHJpbmc7XHJcbiAgICB0YWI6IHN0cmluZyA9ICcxJztcclxuICAgIHN0YXR1c05vdGVzOiBPYmplY3Q7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3VzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSkge31cclxuICAgIFxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlcykge1xyXG4gICAgICAgIHRoaXMuY2xpZW50aWQgPSB0aGlzLmNsaWVudFsnaWQnXTtcclxuICAgICAgICBcclxuICAgICAgICAvLyB0aGlzLl91c2VyU2VydmljZS5nZXRMZWFkTm90ZXModGhpcy5jbGllbnRpZClcclxuICAgICAgICAvLyAuc3Vic2NyaWJlKFxyXG4gICAgICAgIC8vICAgICBkYXRhID0+IHRoaXMuc3RhdHVzTm90ZXMgPSBkYXRhXHJcbiAgICAgICAgLy8gKVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
