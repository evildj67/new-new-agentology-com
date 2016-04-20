System.register(['angular2/core', 'angular2/router', './my-clients.component'], function(exports_1, context_1) {
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
    var core_1, router_1, my_clients_component_1;
    var MainComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (my_clients_component_1_1) {
                my_clients_component_1 = my_clients_component_1_1;
            }],
        execute: function() {
            MainComponent = (function () {
                function MainComponent() {
                }
                MainComponent = __decorate([
                    core_1.Component({
                        selector: 'my-main',
                        template: "\n        <div class=\"main row\">\n            <router-outlet></router-outlet>\n        </div>\n    ",
                        directives: [ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/my-clients', name: 'MyClients', component: my_clients_component_1.MyClientsComponent, useAsDefault: true },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], MainComponent);
                return MainComponent;
            }());
            exports_1("MainComponent", MainComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBa0JBO2dCQUFBO2dCQUVBLENBQUM7Z0JBaEJEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFNBQVM7d0JBQ25CLFFBQVEsRUFBRSx1R0FJVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztxQkFDbEMsQ0FBQztvQkFDRCxvQkFBVyxDQUFDO3dCQUNULEVBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSx5Q0FBa0IsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFDO3FCQUc5RixDQUFDOztpQ0FBQTtnQkFHRixvQkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQseUNBRUMsQ0FBQSIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtSb3V0ZUNvbmZpZ30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuaW1wb3J0IHtNeUNsaWVudHNDb21wb25lbnR9IGZyb20gJy4vbXktY2xpZW50cy5jb21wb25lbnQnXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktbWFpbicsIFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbiByb3dcIj5cclxuICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYCxcclxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU11cclxufSlcclxuQFJvdXRlQ29uZmlnKFtcclxuICAgIHtwYXRoOiAnL215LWNsaWVudHMnLCBuYW1lOiAnTXlDbGllbnRzJywgY29tcG9uZW50OiBNeUNsaWVudHNDb21wb25lbnQsIHVzZUFzRGVmYXVsdDogdHJ1ZX0sXHJcbiAgICAvLyB7cGF0aDogJy9yZXNldC1wYXNzd29yZCcsIG5hbWU6ICdSZXNldFBhc3N3b3JkJywgY29tcG9uZW50OiBSZXNldFBhc3N3b3JkQ29tcG9uZW50fSxcclxuICAgIC8vIHtwYXRoOiAnL3BvcnRhbCcsIG5hbWU6ICdQb3J0YWwnLCBjb21wb25lbnQ6IFBvcnRhbENvbXBvbmVudH1cclxuXSlcclxuZXhwb3J0IGNsYXNzIE1haW5Db21wb25lbnQge1xyXG4gICAgXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
