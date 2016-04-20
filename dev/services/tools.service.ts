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
}