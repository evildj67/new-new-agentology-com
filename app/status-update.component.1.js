System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var StatusUpdateComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            StatusUpdateComponent = (function () {
                function StatusUpdateComponent() {
                    this.status = '1';
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], StatusUpdateComponent.prototype, "clientid", void 0);
                StatusUpdateComponent = __decorate([
                    core_1.Component({
                        selector: 'status-update',
                        templateUrl: './templates/status-update.modal.tpl.html',
                        styleUrls: ['../src/css/my-clients.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], StatusUpdateComponent);
                return StatusUpdateComponent;
            }());
            exports_1("StatusUpdateComponent", StatusUpdateComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXR1cy11cGRhdGUuY29tcG9uZW50LjEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQTtnQkFBQTtvQkFFSSxXQUFNLEdBQVcsR0FBRyxDQUFDO2dCQUN6QixDQUFDO2dCQUZHO29CQUFDLFlBQUssRUFBRTs7dUVBQUE7Z0JBTlo7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsZUFBZTt3QkFDekIsV0FBVyxFQUFFLDBDQUEwQzt3QkFDdkQsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7cUJBQzNDLENBQUM7O3lDQUFBO2dCQUlGLDRCQUFDO1lBQUQsQ0FIQSxBQUdDLElBQUE7WUFIRCx5REFHQyxDQUFBIiwiZmlsZSI6InN0YXR1cy11cGRhdGUuY29tcG9uZW50LjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc3RhdHVzLXVwZGF0ZScsIFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3RlbXBsYXRlcy9zdGF0dXMtdXBkYXRlLm1vZGFsLnRwbC5odG1sJywgICAgXHJcbiAgICBzdHlsZVVybHM6IFsnLi4vc3JjL2Nzcy9teS1jbGllbnRzLmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdGF0dXNVcGRhdGVDb21wb25lbnQge1xyXG4gICAgQElucHV0KCkgY2xpZW50aWQ6IHN0cmluZztcclxuICAgIHN0YXR1czogc3RyaW5nID0gJzEnO1xyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
