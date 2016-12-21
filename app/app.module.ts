import {NgModule}      from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpModule}    from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';

import 'rxjs/add/operator/toPromise';

import {AppComponent}  from './app.component';

import {DataService} from './services/DataService';
import {InputTextModule,DataTableModule,ButtonModule,DialogModule,DropdownModule} from 'primeng/primeng';
import {DynamicFormComponent} from "./View/dynamicForm/DynamicFormComponent";
import {DynamicDropDownComponent} from "./View/dynamicForm/DynamicDropDownComponent";

@NgModule({
	imports:      [BrowserModule, FormsModule,HttpModule,InputTextModule,DataTableModule,ButtonModule,DialogModule,DropdownModule,ReactiveFormsModule],
	declarations: [AppComponent,DynamicFormComponent,DynamicDropDownComponent],
	exports: [DynamicFormComponent, DynamicDropDownComponent],
	bootstrap:    [AppComponent],
	providers:    [DataService]
})
export class AppModule { }
