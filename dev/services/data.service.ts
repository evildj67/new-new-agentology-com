import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import 'rxjs/Rx';

@Injectable()
export class DataService {
    private _url = 'https://apibeta.agentology.com/api/v0/';
    private _api_keys = {
        api_key: '6f46b803be8ec56b3fe72e6e24d2f729f62dc83c',
        secret_key: '515492aa8f247e832b1736d51329cd785eae7f92'
    };
    private _routes = {
        login: 'agents/access',
        reset: 'agents/access/forgot',
        get_agent: 'agents/show',
        update_agent: 'agents/update',
        create_lead: 'leads/auth/create',
        update_opp: 'agents/update/opp',
        get_notes: 'agents/show/opp/:id/notes'
    };

    constructor(private _http: Http) {}

    postData(data: Object, route: string, id: string = '') {

        route = this._routes[route];

        if (id.length > 0)
            route = route.replace(':id', id);

        var body = JSON.stringify(Object.assign(data, this._api_keys));

        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this._http.post(this._url + route, body, {headers: headers})
            .map(response => response.json());
    }

}