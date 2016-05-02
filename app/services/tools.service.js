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
                ToolService.prototype.formatPhone = function (phone, link) {
                    if (link === void 0) { link = false; }
                    phone = this.trim(phone);
                    phone = phone.replace(/[^0-9]/g, '');
                    if (phone.length == 10) {
                        if (link) {
                            phone = "1-" + phone.substring(0, 3) + "-" + phone.substring(3, 6) + "-" + phone.substring(6);
                        }
                        else {
                            phone = "(" + phone.substring(0, 3) + ") " + phone.substring(3, 6) + "-" + phone.substring(6);
                        }
                    }
                    return phone;
                };
                ToolService.prototype.formatDate = function (date) {
                    date = this.trim(date);
                    if (date.length > 0)
                        return new Date(date.replace('-', '/'));
                    return null;
                };
                ToolService.prototype.getObjects = function (obj, key, val) {
                    var objects = [];
                    for (var i in obj) {
                        if (!obj.hasOwnProperty(i))
                            continue;
                        if (typeof obj[i] == 'object') {
                            objects = objects.concat(this.getObjects(obj[i], key, val));
                        }
                        else if (i == key && obj[key].toLowerCase() == val.toLowerCase()) {
                            objects.push(obj);
                        }
                    }
                    return objects;
                };
                ToolService.prototype.setCookie = function (cname, cvalue, exdays) {
                    if (exdays === void 0) { exdays = 0; }
                    if (exdays > 0) {
                        var d = new Date();
                        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
                        var expires = "expires=" + d.toUTCString();
                        document.cookie = cname + "=" + cvalue + "; path=/; " + expires;
                    }
                    else {
                        document.cookie = cname + "=" + cvalue + "; path=/";
                    }
                };
                ToolService.prototype.getCookie = function (cname) {
                    var name = cname + "=";
                    var ca = document.cookie.split(';');
                    for (var i = 0; i < ca.length; i++) {
                        var c = ca[i];
                        while (c.charAt(0) == ' ')
                            c = c.substring(1);
                        if (c.indexOf(name) == 0 && c.substring(name.length, c.length).length > 0)
                            return c.substring(name.length, c.length);
                    }
                    return "";
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3Rvb2xzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHQTtnQkFBQTtnQkFvSEEsQ0FBQztnQkFsSEcsMEJBQUksR0FBSixVQUFLLEtBQVU7b0JBQ1gsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFLLElBQUksUUFBUSxDQUFDO3dCQUN6QixNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUMsRUFBRSxDQUFDLENBQUM7b0JBQzFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7Z0JBQ2QsQ0FBQztnQkFFRCw2QkFBTyxHQUFQLFVBQVEsS0FBVSxFQUFFLEdBQWlCO29CQUFqQixtQkFBaUIsR0FBakIsU0FBaUI7b0JBQ2pDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzNCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO3dCQUNmLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUMxQixNQUFNLENBQUMsRUFBRSxDQUFDO2dCQUNkLENBQUM7Z0JBRUQsNkJBQU8sR0FBUCxVQUFRLEtBQWUsRUFBRSxJQUFrQjtvQkFBbEIsb0JBQWtCLEdBQWxCLFVBQWtCO29CQUN2QyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzt3QkFDakIsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzVCLE1BQU0sQ0FBQyxFQUFFLENBQUM7Z0JBQ2QsQ0FBQztnQkFFRCwyQkFBSyxHQUFMLFVBQU0sS0FBVTtvQkFDWixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUMzQixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ2pCLEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLEVBQUUsQ0FBQyxDQUFDO3dCQUN6QyxHQUFHLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7d0JBQ2xDLE1BQU0sQ0FBQyxHQUFHLENBQUM7b0JBQ2YsQ0FBQztvQkFDRCxNQUFNLENBQUMsRUFBRSxDQUFDO2dCQUNkLENBQUM7Z0JBRUQsaUNBQVcsR0FBWCxVQUFZLE1BQXFCO29CQUM3QixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7b0JBQ2pCLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQztvQkFFbkIsMkJBQTJCO29CQUMzQixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDO3dCQUNsQixPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUU1QixzQkFBc0I7b0JBQ3RCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUM7d0JBQ2xCLFNBQVMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBRTFCLGtCQUFrQjtvQkFDbEIsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ3BCLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDOzRCQUNyQixTQUFTLElBQUksSUFBSSxDQUFDO3dCQUN0QixTQUFTLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMzQixDQUFDO29CQUVELGdCQUFnQjtvQkFDaEIsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ3BCLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDOzRCQUNyQixTQUFTLElBQUksR0FBRyxDQUFDO3dCQUNyQixTQUFTLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMzQixDQUFDO29CQUVELE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBRXhCLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNsQyxDQUFDO2dCQUVELGlDQUFXLEdBQVgsVUFBYSxLQUFhLEVBQUUsSUFBcUI7b0JBQXJCLG9CQUFxQixHQUFyQixZQUFxQjtvQkFDN0MsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3pCLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztvQkFDckMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUNyQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOzRCQUNQLEtBQUssR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNsRyxDQUFDO3dCQUFDLElBQUksQ0FBQyxDQUFDOzRCQUNKLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNsRyxDQUFDO29CQUNMLENBQUM7b0JBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFDakIsQ0FBQztnQkFFRCxnQ0FBVSxHQUFWLFVBQVcsSUFBWTtvQkFDbkIsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3ZCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO3dCQUNoQixNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDNUMsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDaEIsQ0FBQztnQkFFRCxnQ0FBVSxHQUFWLFVBQVcsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO29CQUNwQixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7b0JBQ2pCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQ2hCLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFBQyxRQUFRLENBQUM7d0JBQ3JDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUM7NEJBQzVCLE9BQU8sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUNoRSxDQUFDO3dCQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDOzRCQUNqRSxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUN0QixDQUFDO29CQUNMLENBQUM7b0JBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQztnQkFDbkIsQ0FBQztnQkFFRCwrQkFBUyxHQUFULFVBQVUsS0FBYSxFQUFFLE1BQWMsRUFBRSxNQUFrQjtvQkFBbEIsc0JBQWtCLEdBQWxCLFVBQWtCO29CQUN2RCxFQUFFLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDYixJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO3dCQUNuQixDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLE1BQU0sR0FBQyxFQUFFLEdBQUMsRUFBRSxHQUFDLEVBQUUsR0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUNoRCxJQUFJLE9BQU8sR0FBRyxVQUFVLEdBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO3dCQUN6QyxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsTUFBTSxHQUFHLFlBQVksR0FBRyxPQUFPLENBQUM7b0JBQ3BFLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ0osUUFBUSxDQUFDLE1BQU0sR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLE1BQU0sR0FBRyxVQUFVLENBQUM7b0JBQ3hELENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCwrQkFBUyxHQUFULFVBQVUsS0FBYTtvQkFDbkIsSUFBSSxJQUFJLEdBQUcsS0FBSyxHQUFHLEdBQUcsQ0FBQztvQkFDdkIsSUFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3BDLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO3dCQUM1QixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ2QsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFFLEdBQUc7NEJBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzVDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzs0QkFBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDdkgsQ0FBQztvQkFDRCxNQUFNLENBQUMsRUFBRSxDQUFDO2dCQUNkLENBQUM7Z0JBcEhMO29CQUFDLGlCQUFVLEVBQUU7OytCQUFBO2dCQXFIYixrQkFBQztZQUFELENBcEhBLEFBb0hDLElBQUE7WUFwSEQscUNBb0hDLENBQUEiLCJmaWxlIjoic2VydmljZXMvdG9vbHMuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUb29sU2VydmljZSB7XHJcblxyXG4gICAgdHJpbSh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJylcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoL15cXHMrfFxccyskL2csXCJcIik7XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cGxvZGUodmFsdWU6IGFueSwgc2VwOiBzdHJpbmcgPSAnOycpIHtcclxuICAgICAgICBsZXQgc3RyID0gdGhpcy50cmltKHZhbHVlKTtcclxuICAgICAgICBpZiAoc3RyLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIHJldHVybiBzdHIuc3BsaXQoc2VwKTtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcblxyXG4gICAgaW1wbG9kZSh2YWx1ZTogc3RyaW5nW10sIGdsdWU6IHN0cmluZyA9ICc7Jykge1xyXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUuam9pbihnbHVlKTtcclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9ICAgXHJcblxyXG4gICAgY2xlYW4odmFsdWU6IGFueSkge1xyXG4gICAgICAgIGxldCBzdHIgPSB0aGlzLnRyaW0odmFsdWUpO1xyXG4gICAgICAgIGlmIChzdHIubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBzdHIgPSBzdHIucmVwbGFjZSgv77+977+9X3zvv73vv71ffO+/ve+/vV9877+9L2dpLCBcIlwiKTtcclxuICAgICAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UoLyZxdW90Oy9nLCAnXCInKTtcclxuICAgICAgICAgICAgcmV0dXJuIHN0cjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBtYWtlQWRkcmVzcyhmaWVsZHM6IEFycmF5PHN0cmluZz4pIHtcclxuICAgICAgICBsZXQgYWRkcmVzcyA9IFtdO1xyXG4gICAgICAgIGxldCBjaXR5U3RhdGUgPSAnJztcclxuICAgICAgICBcclxuICAgICAgICAvLyBDaGVjayBmb3Igc3RyZWV0IGFkZHJlc3NcclxuICAgICAgICBpZiAoZmllbGRzWzBdICE9IG51bGwpXHJcbiAgICAgICAgICAgIGFkZHJlc3MucHVzaChmaWVsZHNbMF0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAvLyBDaGVjayBmb3IgY2l0eSBuYW1lXHJcbiAgICAgICAgaWYgKGZpZWxkc1sxXSAhPSBudWxsKVxyXG4gICAgICAgICAgICBjaXR5U3RhdGUgPSBmaWVsZHNbMV07XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIC8vIENoZWNrIGZvciBzdGF0ZVxyXG4gICAgICAgIGlmIChmaWVsZHNbMl0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZiAoY2l0eVN0YXRlLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgICAgICBjaXR5U3RhdGUgKz0gJywgJztcclxuICAgICAgICAgICAgY2l0eVN0YXRlICs9IGZpZWxkc1syXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ2hlY2sgZm9yIHppcFxyXG4gICAgICAgIGlmIChmaWVsZHNbM10gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZiAoY2l0eVN0YXRlLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgICAgICBjaXR5U3RhdGUgKz0gXCIgXCI7XHJcbiAgICAgICAgICAgIGNpdHlTdGF0ZSArPSBmaWVsZHNbM107XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgYWRkcmVzcy5wdXNoKGNpdHlTdGF0ZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGFkZHJlc3Muam9pbihcIjxiciAvPlwiKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZm9ybWF0UGhvbmUgKHBob25lOiBzdHJpbmcsIGxpbms6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIHBob25lID0gdGhpcy50cmltKHBob25lKTtcclxuICAgICAgICBwaG9uZSA9IHBob25lLnJlcGxhY2UoL1teMC05XS9nLCAnJyk7XHJcbiAgICAgICAgaWYgKHBob25lLmxlbmd0aCA9PSAxMCkge1xyXG4gICAgICAgICAgICBpZiAobGluaykge1xyXG4gICAgICAgICAgICAgICAgcGhvbmUgPSBcIjEtXCIgKyBwaG9uZS5zdWJzdHJpbmcoMCwgMykgKyBcIi1cIiArIHBob25lLnN1YnN0cmluZygzLCA2KSArIFwiLVwiICsgcGhvbmUuc3Vic3RyaW5nKDYpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcGhvbmUgPSBcIihcIiArIHBob25lLnN1YnN0cmluZygwLCAzKSArIFwiKSBcIiArIHBob25lLnN1YnN0cmluZygzLCA2KSArIFwiLVwiICsgcGhvbmUuc3Vic3RyaW5nKDYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwaG9uZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZm9ybWF0RGF0ZShkYXRlOiBzdHJpbmcpIHtcclxuICAgICAgICBkYXRlID0gdGhpcy50cmltKGRhdGUpO1xyXG4gICAgICAgIGlmIChkYXRlLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLnJlcGxhY2UoJy0nLCAnLycpKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH0gICAgXHJcbiAgICBcclxuICAgIGdldE9iamVjdHMob2JqLCBrZXksIHZhbCkge1xyXG4gICAgICAgIHZhciBvYmplY3RzID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgaSBpbiBvYmopIHtcclxuICAgICAgICAgICAgaWYgKCFvYmouaGFzT3duUHJvcGVydHkoaSkpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9ialtpXSA9PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0cyA9IG9iamVjdHMuY29uY2F0KHRoaXMuZ2V0T2JqZWN0cyhvYmpbaV0sIGtleSwgdmFsKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA9PSBrZXkgJiYgb2JqW2tleV0udG9Mb3dlckNhc2UoKSA9PSB2YWwudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0cy5wdXNoKG9iaik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG9iamVjdHM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNldENvb2tpZShjbmFtZTogc3RyaW5nLCBjdmFsdWU6IHN0cmluZywgZXhkYXlzOiBudW1iZXIgPSAwKSB7XHJcbiAgICAgICAgaWYgKGV4ZGF5cyA+IDApIHtcclxuICAgICAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICBkLnNldFRpbWUoZC5nZXRUaW1lKCkgKyAoZXhkYXlzKjI0KjYwKjYwKjEwMDApKTtcclxuICAgICAgICAgICAgdmFyIGV4cGlyZXMgPSBcImV4cGlyZXM9XCIrZC50b1VUQ1N0cmluZygpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjbmFtZSArIFwiPVwiICsgY3ZhbHVlICsgXCI7IHBhdGg9LzsgXCIgKyBleHBpcmVzO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNuYW1lICsgXCI9XCIgKyBjdmFsdWUgKyBcIjsgcGF0aD0vXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldENvb2tpZShjbmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdmFyIG5hbWUgPSBjbmFtZSArIFwiPVwiO1xyXG4gICAgICAgIHZhciBjYSA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpO1xyXG4gICAgICAgIGZvcih2YXIgaT0wOyBpPGNhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBjID0gY2FbaV07XHJcbiAgICAgICAgICAgIHdoaWxlIChjLmNoYXJBdCgwKT09JyAnKSBjID0gYy5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgICAgIGlmIChjLmluZGV4T2YobmFtZSkgPT0gMCAmJiBjLnN1YnN0cmluZyhuYW1lLmxlbmd0aCxjLmxlbmd0aCkubGVuZ3RoID4gMCkgcmV0dXJuIGMuc3Vic3RyaW5nKG5hbWUubGVuZ3RoLGMubGVuZ3RoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9ICAgIFxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
