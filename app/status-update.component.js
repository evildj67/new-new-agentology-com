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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXR1cy11cGRhdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTUE7Z0JBQUE7b0JBRUksV0FBTSxHQUFXLEdBQUcsQ0FBQztnQkFDekIsQ0FBQztnQkFGRztvQkFBQyxZQUFLLEVBQUU7O3VFQUFBO2dCQU5aO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGVBQWU7d0JBQ3pCLFdBQVcsRUFBRSwwQ0FBMEM7d0JBQ3ZELFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO3FCQUMzQyxDQUFDOzt5Q0FBQTtnQkFJRiw0QkFBQztZQUFELENBSEEsQUFHQyxJQUFBO1lBSEQseURBR0MsQ0FBQSIsImZpbGUiOiJzdGF0dXMtdXBkYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzdGF0dXMtdXBkYXRlJywgXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vdGVtcGxhdGVzL3N0YXR1cy11cGRhdGUubW9kYWwudHBsLmh0bWwnLCAgICBcclxuICAgIHN0eWxlVXJsczogWycuLi9zcmMvY3NzL215LWNsaWVudHMuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFN0YXR1c1VwZGF0ZUNvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBjbGllbnRpZDogc3RyaW5nO1xyXG4gICAgc3RhdHVzOiBzdHJpbmcgPSAnMSc7XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
