System.register(['angular2/platform/browser', "./app.component", 'angular2/router', 'angular2/http', './services/data.service', './services/tools.service', './services/user.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_component_1, router_1, http_1, data_service_1, tools_service_1, user_service_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            },
            function (tools_service_1_1) {
                tools_service_1 = tools_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS, data_service_1.DataService, tools_service_1.ToolService, user_service_1.UserService]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVNBLG1CQUFTLENBQUMsNEJBQVksRUFBRSxDQUFDLHFCQUFjLEVBQUUseUJBQWdCLEVBQUUsMEJBQVcsRUFBRSwyQkFBVyxFQUFFLDBCQUFXLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImJvb3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy88cmVmZXJlbmNlIHBhdGg9XCIuLi9ub2RlX21vZHVsZXMvYW5ndWxhcjIvdHlwaW5ncy9icm93c2VyLmQudHNcIi8+XG5pbXBvcnQge2Jvb3RzdHJhcH0gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3Nlcic7XG5pbXBvcnQge0FwcENvbXBvbmVudH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtST1VURVJfUFJPVklERVJTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtIVFRQX1BST1ZJREVSU30gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5pbXBvcnQge0RhdGFTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL2RhdGEuc2VydmljZSc7XG5pbXBvcnQge1Rvb2xTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL3Rvb2xzLnNlcnZpY2UnO1xuaW1wb3J0IHtVc2VyU2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlcy91c2VyLnNlcnZpY2UnO1xuXG5ib290c3RyYXAoQXBwQ29tcG9uZW50LCBbSFRUUF9QUk9WSURFUlMsIFJPVVRFUl9QUk9WSURFUlMsIERhdGFTZXJ2aWNlLCBUb29sU2VydmljZSwgVXNlclNlcnZpY2VdKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
