///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from "./app.component";
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {DataService} from './services/data.service';
import {ToolService} from './services/tools.service';
import {UserService} from './services/user.service';

bootstrap(AppComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS, DataService, ToolService, UserService]);