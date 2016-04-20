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
    var ClientCardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
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
                        templateUrl: './templates/client-card.tpl.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], ClientCardComponent);
                return ClientCardComponent;
            }());
            exports_1("ClientCardComponent", ClientCardComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC1jYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BO2dCQUFBO29CQUVJLFdBQU0sR0FBRzt3QkFDTCxVQUFVLEVBQUUsVUFBVTt3QkFDdEIsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixXQUFXLEVBQUUsUUFBUTt3QkFDckIsYUFBYSxFQUFFLFFBQVE7cUJBQzFCLENBQUM7Z0JBS04sQ0FBQztnQkFIRyx3Q0FBVSxHQUFWLFVBQVcsVUFBVTtvQkFDakIsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xELENBQUM7Z0JBWEQ7b0JBQUMsWUFBSyxFQUFFOzttRUFBQTtnQkFMWjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxhQUFhO3dCQUN2QixXQUFXLEVBQUUsa0NBQWtDO3FCQUNsRCxDQUFDOzt1Q0FBQTtnQkFjRiwwQkFBQztZQUFELENBYkEsQUFhQyxJQUFBO1lBYkQscURBYUMsQ0FBQSIsImZpbGUiOiJjbGllbnQtY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2NsaWVudC1jYXJkJywgXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vdGVtcGxhdGVzL2NsaWVudC1jYXJkLnRwbC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2xpZW50Q2FyZENvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBjbGllbnQ6IE9iamVjdDtcclxuICAgIHN0YWdlcyA9IHtcclxuICAgICAgICBcIlByb3NwZWN0XCI6IFwicHJvc3BlY3RcIixcclxuICAgICAgICBcIkNsaWVudFwiOiBcImNsaWVudFwiLCBcclxuICAgICAgICBcIkxpc3RlZFwiOiBcImxpc3RlZFwiLCBcclxuICAgICAgICBcIkluIEVzY3Jvd1wiOiBcImVzY3Jvd1wiLCBcclxuICAgICAgICBcIkNsb3NlZCBMb3N0XCI6IFwiY2xvc2VkXCJcclxuICAgIH07XHJcbiAgICBcclxuICAgIGZvcm1hdERhdGUoZGF0ZVN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlU3RyaW5nLnJlcGxhY2UoJy0nLCAnLycpKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
