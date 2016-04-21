System.register(['angular2/core', './status-update.component'], function(exports_1, context_1) {
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
    var core_1, status_update_component_1;
    var ClientCardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (status_update_component_1_1) {
                status_update_component_1 = status_update_component_1_1;
            }],
        execute: function() {
            ClientCardComponent = (function () {
                function ClientCardComponent() {
                    this.stages = {
                        "Prospect": "prospect",
                        "Client": "client",
                        "Listed": "listed",
                        "In Escrow": "escrow",
                        "Closed Lost": "closed"
                    };
                }
                ClientCardComponent.prototype.formatDate = function (dateString) {
                    return new Date(dateString.replace('-', '/'));
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ClientCardComponent.prototype, "client", void 0);
                ClientCardComponent = __decorate([
                    core_1.Component({
                        selector: 'client-card',
                        templateUrl: './templates/client-card.tpl.html',
                        directives: [status_update_component_1.StatusUpdateComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ClientCardComponent);
                return ClientCardComponent;
            }());
            exports_1("ClientCardComponent", ClientCardComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC1jYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVFBO2dCQUFBO29CQUdJLFdBQU0sR0FBRzt3QkFDTCxVQUFVLEVBQUUsVUFBVTt3QkFDdEIsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixXQUFXLEVBQUUsUUFBUTt3QkFDckIsYUFBYSxFQUFFLFFBQVE7cUJBQzFCLENBQUM7Z0JBS04sQ0FBQztnQkFIRyx3Q0FBVSxHQUFWLFVBQVcsVUFBVTtvQkFDakIsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xELENBQUM7Z0JBWkQ7b0JBQUMsWUFBSyxFQUFFOzttRUFBQTtnQkFOWjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxhQUFhO3dCQUN2QixXQUFXLEVBQUUsa0NBQWtDO3dCQUMvQyxVQUFVLEVBQUUsQ0FBQywrQ0FBcUIsQ0FBQztxQkFDdEMsQ0FBQzs7dUNBQUE7Z0JBZUYsMEJBQUM7WUFBRCxDQWRBLEFBY0MsSUFBQTtZQWRELHFEQWNDLENBQUEiLCJmaWxlIjoiY2xpZW50LWNhcmQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtTdGF0dXNVcGRhdGVDb21wb25lbnR9IGZyb20gJy4vc3RhdHVzLXVwZGF0ZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2NsaWVudC1jYXJkJywgXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vdGVtcGxhdGVzL2NsaWVudC1jYXJkLnRwbC5odG1sJywgXHJcbiAgICBkaXJlY3RpdmVzOiBbU3RhdHVzVXBkYXRlQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2xpZW50Q2FyZENvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBjbGllbnQ6IE9iamVjdDtcclxuICAgIHN0YXR1c1VwZGF0ZUlkOiBzdHJpbmc7XHJcbiAgICBzdGFnZXMgPSB7XHJcbiAgICAgICAgXCJQcm9zcGVjdFwiOiBcInByb3NwZWN0XCIsXHJcbiAgICAgICAgXCJDbGllbnRcIjogXCJjbGllbnRcIiwgXHJcbiAgICAgICAgXCJMaXN0ZWRcIjogXCJsaXN0ZWRcIiwgXHJcbiAgICAgICAgXCJJbiBFc2Nyb3dcIjogXCJlc2Nyb3dcIiwgXHJcbiAgICAgICAgXCJDbG9zZWQgTG9zdFwiOiBcImNsb3NlZFwiXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBmb3JtYXREYXRlKGRhdGVTdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZVN0cmluZy5yZXBsYWNlKCctJywgJy8nKSk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
