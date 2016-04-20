System.register(['angular2/core', 'angular2/http', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var DataService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            DataService = (function () {
                function DataService(_http) {
                    this._http = _http;
                    this._url = 'https://apibeta.agentology.com/api/v0/';
                    this._api_keys = {
                        api_key: '6f46b803be8ec56b3fe72e6e24d2f729f62dc83c',
                        secret_key: '515492aa8f247e832b1736d51329cd785eae7f92'
                    };
                    this._routes = {
                        login: 'agents/access',
                        reset: 'agents/access/forgot',
                        get_agent: 'agents/show',
                        update_agent: 'agents/update',
                        create_lead: 'leads/auth/create',
                        update_opp: 'agents/update/opp',
                        get_notes: 'agents/show/opp/:id/notes'
                    };
                }
                DataService.prototype.postData = function (data, route, id) {
                    if (id === void 0) { id = ''; }
                    route = this._routes[route];
                    if (id.length > 0)
                        route = route.replace(':id', id);
                    var body = JSON.stringify(Object.assign(data, this._api_keys));
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this._http.post(this._url + route, body, { headers: headers })
                        .map(function (response) { return response.json(); });
                };
                DataService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], DataService);
                return DataService;
            }());
            exports_1("DataService", DataService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2RhdGEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQTtnQkFnQkkscUJBQW9CLEtBQVc7b0JBQVgsVUFBSyxHQUFMLEtBQUssQ0FBTTtvQkFmdkIsU0FBSSxHQUFHLHdDQUF3QyxDQUFDO29CQUNoRCxjQUFTLEdBQUc7d0JBQ2hCLE9BQU8sRUFBRSwwQ0FBMEM7d0JBQ25ELFVBQVUsRUFBRSwwQ0FBMEM7cUJBQ3pELENBQUM7b0JBQ00sWUFBTyxHQUFHO3dCQUNkLEtBQUssRUFBRSxlQUFlO3dCQUN0QixLQUFLLEVBQUUsc0JBQXNCO3dCQUM3QixTQUFTLEVBQUUsYUFBYTt3QkFDeEIsWUFBWSxFQUFFLGVBQWU7d0JBQzdCLFdBQVcsRUFBRSxtQkFBbUI7d0JBQ2hDLFVBQVUsRUFBRSxtQkFBbUI7d0JBQy9CLFNBQVMsRUFBRSwyQkFBMkI7cUJBQ3pDLENBQUM7Z0JBRWdDLENBQUM7Z0JBRW5DLDhCQUFRLEdBQVIsVUFBUyxJQUFZLEVBQUUsS0FBYSxFQUFFLEVBQWU7b0JBQWYsa0JBQWUsR0FBZixPQUFlO29CQUVqRCxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFFNUIsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7d0JBQ2QsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO29CQUVyQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO29CQUUvRCxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO29CQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO29CQUVuRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDO3lCQUM5RCxHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUM7Z0JBQzFDLENBQUM7Z0JBakNMO29CQUFDLGlCQUFVLEVBQUU7OytCQUFBO2dCQW1DYixrQkFBQztZQUFELENBbENBLEFBa0NDLElBQUE7WUFsQ0QscUNBa0NDLENBQUEiLCJmaWxlIjoic2VydmljZXMvZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtIdHRwLCBIZWFkZXJzfSBmcm9tICdhbmd1bGFyMi9odHRwJztcclxuaW1wb3J0ICdyeGpzL1J4JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERhdGFTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgX3VybCA9ICdodHRwczovL2FwaWJldGEuYWdlbnRvbG9neS5jb20vYXBpL3YwLyc7XHJcbiAgICBwcml2YXRlIF9hcGlfa2V5cyA9IHtcclxuICAgICAgICBhcGlfa2V5OiAnNmY0NmI4MDNiZThlYzU2YjNmZTcyZTZlMjRkMmY3MjlmNjJkYzgzYycsXHJcbiAgICAgICAgc2VjcmV0X2tleTogJzUxNTQ5MmFhOGYyNDdlODMyYjE3MzZkNTEzMjljZDc4NWVhZTdmOTInXHJcbiAgICB9O1xyXG4gICAgcHJpdmF0ZSBfcm91dGVzID0ge1xyXG4gICAgICAgIGxvZ2luOiAnYWdlbnRzL2FjY2VzcycsXHJcbiAgICAgICAgcmVzZXQ6ICdhZ2VudHMvYWNjZXNzL2ZvcmdvdCcsXHJcbiAgICAgICAgZ2V0X2FnZW50OiAnYWdlbnRzL3Nob3cnLFxyXG4gICAgICAgIHVwZGF0ZV9hZ2VudDogJ2FnZW50cy91cGRhdGUnLFxyXG4gICAgICAgIGNyZWF0ZV9sZWFkOiAnbGVhZHMvYXV0aC9jcmVhdGUnLFxyXG4gICAgICAgIHVwZGF0ZV9vcHA6ICdhZ2VudHMvdXBkYXRlL29wcCcsXHJcbiAgICAgICAgZ2V0X25vdGVzOiAnYWdlbnRzL3Nob3cvb3BwLzppZC9ub3RlcydcclxuICAgIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCkge31cclxuXHJcbiAgICBwb3N0RGF0YShkYXRhOiBPYmplY3QsIHJvdXRlOiBzdHJpbmcsIGlkOiBzdHJpbmcgPSAnJykge1xyXG5cclxuICAgICAgICByb3V0ZSA9IHRoaXMuX3JvdXRlc1tyb3V0ZV07XHJcblxyXG4gICAgICAgIGlmIChpZC5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICByb3V0ZSA9IHJvdXRlLnJlcGxhY2UoJzppZCcsIGlkKTtcclxuXHJcbiAgICAgICAgdmFyIGJvZHkgPSBKU09OLnN0cmluZ2lmeShPYmplY3QuYXNzaWduKGRhdGEsIHRoaXMuX2FwaV9rZXlzKSk7XHJcblxyXG4gICAgICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl91cmwgKyByb3V0ZSwgYm9keSwge2hlYWRlcnM6IGhlYWRlcnN9KVxyXG4gICAgICAgICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XHJcbiAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
