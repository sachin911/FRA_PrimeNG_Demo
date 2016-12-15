import {NgModule}      from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpModule}    from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';

import 'rxjs/add/operator/toPromise';

import {AppComponent}  from './app.component';

import {DataService} from './services/DataService';
import {InputTextModule,DataTableModule,ButtonModule,DialogModule,DropdownModule} from 'primeng/primeng';

@NgModule({
  imports:      [BrowserModule,FormsModule,HttpModule,InputTextModule,DataTableModule,ButtonModule,DialogModule,DropdownModule,ReactiveFormsModule],
  declarations: [AppComponent],
  bootstrap:    [AppComponent],
  providers:    [DataService]
})
export class AppModule { }
