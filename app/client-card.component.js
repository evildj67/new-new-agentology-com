System.register(['angular2/core', './status-update.component', './lead-details.component', './services/tools.service'], function(exports_1, context_1) {
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
    var core_1, status_update_component_1, lead_details_component_1, tools_service_1;
    var ClientCardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (status_update_component_1_1) {
                status_update_component_1 = status_update_component_1_1;
            },
            function (lead_details_component_1_1) {
                lead_details_component_1 = lead_details_component_1_1;
            },
            function (tools_service_1_1) {
                tools_service_1 = tools_service_1_1;
            }],
        execute: function() {
            ClientCardComponent = (function () {
                function ClientCardComponent(_tools) {
                    this._tools = _tools;
                    this.stages = {
                        "Prospect": "prospect",
                        "Client": "client",
                        "Listed": "listed",
                        "In Escrow": "escrow",
                        "Closed Lost": "closed"
                    };
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ClientCardComponent.prototype, "client", void 0);
                ClientCardComponent = __decorate([
                    core_1.Component({
                        selector: 'client-card',
                        templateUrl: './templates/client-card.tpl.html',
                        directives: [status_update_component_1.StatusUpdateComponent, lead_details_component_1.LeadDetailsComponent]
                    }), 
                    __metadata('design:paramtypes', [tools_service_1.ToolService])
                ], ClientCardComponent);
                return ClientCardComponent;
            }());
            exports_1("ClientCardComponent", ClientCardComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC1jYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVBO2dCQVdJLDZCQUFvQixNQUFtQjtvQkFBbkIsV0FBTSxHQUFOLE1BQU0sQ0FBYTtvQkFSdkMsV0FBTSxHQUFHO3dCQUNMLFVBQVUsRUFBRSxVQUFVO3dCQUN0QixRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFdBQVcsRUFBRSxRQUFRO3dCQUNyQixhQUFhLEVBQUUsUUFBUTtxQkFDMUIsQ0FBQztnQkFFd0MsQ0FBQztnQkFWM0M7b0JBQUMsWUFBSyxFQUFFOzttRUFBQTtnQkFOWjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxhQUFhO3dCQUN2QixXQUFXLEVBQUUsa0NBQWtDO3dCQUMvQyxVQUFVLEVBQUUsQ0FBQywrQ0FBcUIsRUFBRSw2Q0FBb0IsQ0FBQztxQkFDNUQsQ0FBQzs7dUNBQUE7Z0JBYUYsMEJBQUM7WUFBRCxDQVpBLEFBWUMsSUFBQTtZQVpELHFEQVlDLENBQUEiLCJmaWxlIjoiY2xpZW50LWNhcmQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtTdGF0dXNVcGRhdGVDb21wb25lbnR9IGZyb20gJy4vc3RhdHVzLXVwZGF0ZS5jb21wb25lbnQnO1xyXG5pbXBvcnQge0xlYWREZXRhaWxzQ29tcG9uZW50fSBmcm9tICcuL2xlYWQtZGV0YWlscy5jb21wb25lbnQnO1xyXG5pbXBvcnQge1Rvb2xTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL3Rvb2xzLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2NsaWVudC1jYXJkJywgXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vdGVtcGxhdGVzL2NsaWVudC1jYXJkLnRwbC5odG1sJywgXHJcbiAgICBkaXJlY3RpdmVzOiBbU3RhdHVzVXBkYXRlQ29tcG9uZW50LCBMZWFkRGV0YWlsc0NvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENsaWVudENhcmRDb21wb25lbnQge1xyXG4gICAgQElucHV0KCkgY2xpZW50OiBPYmplY3Q7XHJcbiAgICBzdGF0dXNVcGRhdGVJZDogc3RyaW5nO1xyXG4gICAgc3RhZ2VzID0ge1xyXG4gICAgICAgIFwiUHJvc3BlY3RcIjogXCJwcm9zcGVjdFwiLFxyXG4gICAgICAgIFwiQ2xpZW50XCI6IFwiY2xpZW50XCIsIFxyXG4gICAgICAgIFwiTGlzdGVkXCI6IFwibGlzdGVkXCIsIFxyXG4gICAgICAgIFwiSW4gRXNjcm93XCI6IFwiZXNjcm93XCIsIFxyXG4gICAgICAgIFwiQ2xvc2VkIExvc3RcIjogXCJjbG9zZWRcIlxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfdG9vbHM6IFRvb2xTZXJ2aWNlKSB7fVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
