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
    var ToolService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ToolService = (function () {
                function ToolService() {
                }
                ToolService.prototype.trim = function (value) {
                    if (typeof value == 'string')
                        return value.replace(/^\s+|\s+$/g, "");
                    return '';
                };
                ToolService.prototype.explode = function (value, sep) {
                    if (sep === void 0) { sep = ';'; }
                    var str = this.trim(value);
                    if (str.length > 0)
                        return str.split(sep);
                    return [];
                };
                ToolService.prototype.implode = function (value, glue) {
                    if (glue === void 0) { glue = ';'; }
                    if (value.length > 0)
                        return value.join(glue);
                    return '';
                };
                ToolService.prototype.clean = function (value) {
                    var str = this.trim(value);
                    if (str.length > 0) {
                        str = str.replace(/��_|��_|��_|�/gi, "");
                        str = str.replace(/&quot;/g, '"');
                        return str;
                    }
                    return '';
                };
                ToolService.prototype.makeAddress = function (fields) {
                    var address = [];
                    var cityState = '';
                    // Check for street address
                    if (fields[0] != null)
                        address.push(fields[0]);
                    // Check for city name
                    if (fields[1] != null)
                        cityState = fields[1];
                    // Check for state
                    if (fields[2] != null) {
                        if (cityState.length > 0)
                            cityState += ', ';
                        cityState += fields[2];
                    }
                    // Check for zip
                    if (fields[3] != null) {
                        if (cityState.length > 0)
                            cityState += " ";
                        cityState += fields[3];
                    }
                    address.push(cityState);
                    return address.join("<br />");
                };
                ToolService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ToolService);
                return ToolService;
            }());
            exports_1("ToolService", ToolService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3Rvb2xzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHQTtnQkFBQTtnQkE2REEsQ0FBQztnQkEzREcsMEJBQUksR0FBSixVQUFLLEtBQVU7b0JBQ1gsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFLLElBQUksUUFBUSxDQUFDO3dCQUN6QixNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUMsRUFBRSxDQUFDLENBQUM7b0JBQzFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7Z0JBQ2QsQ0FBQztnQkFFRCw2QkFBTyxHQUFQLFVBQVEsS0FBVSxFQUFFLEdBQWlCO29CQUFqQixtQkFBaUIsR0FBakIsU0FBaUI7b0JBQ2pDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzNCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO3dCQUNmLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUMxQixNQUFNLENBQUMsRUFBRSxDQUFDO2dCQUNkLENBQUM7Z0JBRUQsNkJBQU8sR0FBUCxVQUFRLEtBQWUsRUFBRSxJQUFrQjtvQkFBbEIsb0JBQWtCLEdBQWxCLFVBQWtCO29CQUN2QyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzt3QkFDakIsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzVCLE1BQU0sQ0FBQyxFQUFFLENBQUM7Z0JBQ2QsQ0FBQztnQkFFRCwyQkFBSyxHQUFMLFVBQU0sS0FBVTtvQkFDWixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUMzQixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ2pCLEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLEVBQUUsQ0FBQyxDQUFDO3dCQUN6QyxHQUFHLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7d0JBQ2xDLE1BQU0sQ0FBQyxHQUFHLENBQUM7b0JBQ2YsQ0FBQztvQkFDRCxNQUFNLENBQUMsRUFBRSxDQUFDO2dCQUNkLENBQUM7Z0JBRUQsaUNBQVcsR0FBWCxVQUFZLE1BQXFCO29CQUM3QixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7b0JBQ2pCLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQztvQkFFbkIsMkJBQTJCO29CQUMzQixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDO3dCQUNsQixPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUU1QixzQkFBc0I7b0JBQ3RCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUM7d0JBQ2xCLFNBQVMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBRTFCLGtCQUFrQjtvQkFDbEIsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ3BCLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDOzRCQUNyQixTQUFTLElBQUksSUFBSSxDQUFDO3dCQUN0QixTQUFTLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMzQixDQUFDO29CQUVELGdCQUFnQjtvQkFDaEIsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ3BCLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDOzRCQUNyQixTQUFTLElBQUksR0FBRyxDQUFDO3dCQUNyQixTQUFTLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMzQixDQUFDO29CQUVELE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBRXhCLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNsQyxDQUFDO2dCQTdETDtvQkFBQyxpQkFBVSxFQUFFOzsrQkFBQTtnQkE4RGIsa0JBQUM7WUFBRCxDQTdEQSxBQTZEQyxJQUFBO1lBN0RELHFDQTZEQyxDQUFBIiwiZmlsZSI6InNlcnZpY2VzL3Rvb2xzLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVG9vbFNlcnZpY2Uge1xyXG5cclxuICAgIHRyaW0odmFsdWU6IGFueSkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycpXHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLFwiXCIpO1xyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuXHJcbiAgICBleHBsb2RlKHZhbHVlOiBhbnksIHNlcDogc3RyaW5nID0gJzsnKSB7XHJcbiAgICAgICAgbGV0IHN0ciA9IHRoaXMudHJpbSh2YWx1ZSk7XHJcbiAgICAgICAgaWYgKHN0ci5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICByZXR1cm4gc3RyLnNwbGl0KHNlcCk7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGltcGxvZGUodmFsdWU6IHN0cmluZ1tdLCBnbHVlOiBzdHJpbmcgPSAnOycpIHtcclxuICAgICAgICBpZiAodmFsdWUubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLmpvaW4oZ2x1ZSk7XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfSAgIFxyXG5cclxuICAgIGNsZWFuKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICBsZXQgc3RyID0gdGhpcy50cmltKHZhbHVlKTtcclxuICAgICAgICBpZiAoc3RyLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UoL++/ve+/vV9877+977+9X3zvv73vv71ffO+/vS9naSwgXCJcIik7XHJcbiAgICAgICAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKC8mcXVvdDsvZywgJ1wiJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBzdHI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICAgIFxyXG4gICAgbWFrZUFkZHJlc3MoZmllbGRzOiBBcnJheTxzdHJpbmc+KSB7XHJcbiAgICAgICAgbGV0IGFkZHJlc3MgPSBbXTtcclxuICAgICAgICBsZXQgY2l0eVN0YXRlID0gJyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ2hlY2sgZm9yIHN0cmVldCBhZGRyZXNzXHJcbiAgICAgICAgaWYgKGZpZWxkc1swXSAhPSBudWxsKVxyXG4gICAgICAgICAgICBhZGRyZXNzLnB1c2goZmllbGRzWzBdKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gQ2hlY2sgZm9yIGNpdHkgbmFtZVxyXG4gICAgICAgIGlmIChmaWVsZHNbMV0gIT0gbnVsbClcclxuICAgICAgICAgICAgY2l0eVN0YXRlID0gZmllbGRzWzFdO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAvLyBDaGVjayBmb3Igc3RhdGVcclxuICAgICAgICBpZiAoZmllbGRzWzJdICE9IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKGNpdHlTdGF0ZS5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICAgICAgY2l0eVN0YXRlICs9ICcsICc7XHJcbiAgICAgICAgICAgIGNpdHlTdGF0ZSArPSBmaWVsZHNbMl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIENoZWNrIGZvciB6aXBcclxuICAgICAgICBpZiAoZmllbGRzWzNdICE9IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKGNpdHlTdGF0ZS5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICAgICAgY2l0eVN0YXRlICs9IFwiIFwiO1xyXG4gICAgICAgICAgICBjaXR5U3RhdGUgKz0gZmllbGRzWzNdO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGFkZHJlc3MucHVzaChjaXR5U3RhdGUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBhZGRyZXNzLmpvaW4oXCI8YnIgLz5cIik7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
