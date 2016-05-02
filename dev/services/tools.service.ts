import {Injectable} from 'angular2/core';

@Injectable()
export class ToolService {

    trim(value: any) {
        if (typeof value == 'string')
            return value.replace(/^\s+|\s+$/g,"");
        return '';
    }

    explode(value: any, sep: string = ';') {
        let str = this.trim(value);
        if (str.length > 0)
            return str.split(sep);
        return [];
    }

    implode(value: string[], glue: string = ';') {
        if (value.length > 0)
            return value.join(glue);
        return '';
    }   

    clean(value: any) {
        let str = this.trim(value);
        if (str.length > 0) {
            str = str.replace(/��_|��_|��_|�/gi, "");
            str = str.replace(/&quot;/g, '"');
            return str;
        }
        return '';
    }
    
    makeAddress(fields: Array<string>) {
        let address = [];
        let cityState = '';
        
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
    }
    
    formatPhone (phone: string, link: boolean = false) {
        phone = this.trim(phone);
        phone = phone.replace(/[^0-9]/g, '');
        if (phone.length == 10) {
            if (link) {
                phone = "1-" + phone.substring(0, 3) + "-" + phone.substring(3, 6) + "-" + phone.substring(6);
            } else {
                phone = "(" + phone.substring(0, 3) + ") " + phone.substring(3, 6) + "-" + phone.substring(6);
            }
        }
        return phone;
    }
    
    formatDate(date: string) {
        date = this.trim(date);
        if (date.length > 0)
            return new Date(date.replace('-', '/'));
        return null;
    }    
    
    getObjects(obj, key, val) {
        var objects = [];
        for (var i in obj) {
            if (!obj.hasOwnProperty(i)) continue;
            if (typeof obj[i] == 'object') {
                objects = objects.concat(this.getObjects(obj[i], key, val));
            } else if (i == key && obj[key].toLowerCase() == val.toLowerCase()) {
                objects.push(obj);
            }
        }
        return objects;
    }
    
    setCookie(cname: string, cvalue: string, exdays: number = 0) {
        if (exdays > 0) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays*24*60*60*1000));
            var expires = "expires="+d.toUTCString();
            document.cookie = cname + "=" + cvalue + "; path=/; " + expires;
        } else {
            document.cookie = cname + "=" + cvalue + "; path=/";
        }
    }

    getCookie(cname: string) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1);
            if (c.indexOf(name) == 0 && c.substring(name.length,c.length).length > 0) return c.substring(name.length,c.length);
        }
        return "";
    }    
}