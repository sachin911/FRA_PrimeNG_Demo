import {NgModule}      from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule}    from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import 'rxjs/add/operator/toPromise';

import {AppComponent}  from './app.component';
import {DisclosureService} from './model/disclosure/DisclosureService';
import {ClientService} from './model/client/ClientService';
import {AssetClassificationService} from './model/assetClassification/AssetClassificationService';
import {IndustryOrderService} from './model/industryOrder/IndustryOrderService';
import {InputTextModule,DataTableModule,ButtonModule,DialogModule,DropdownModule} from 'primeng/primeng';

@NgModule({
  imports:      [BrowserModule,FormsModule,HttpModule,InputTextModule,DataTableModule,ButtonModule,DialogModule,DropdownModule],
  declarations: [AppComponent],
  bootstrap:    [AppComponent],
  providers:    [DisclosureService, ClientService, AssetClassificationService, IndustryOrderService]
})
export class AppModule { }
