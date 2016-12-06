import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Disclosure} from './model/disclosure/Disclosure';
import {DisclosureService} from './model/disclosure/DisclosureService';
import {ClientService} from './model/client/ClientService';
import {Client} from './model/client/Client';
import {AssetClassification} from './model/assetClassification/AssetClassification';
import {AssetClassificationService} from './model/assetClassification/AssetClassificationService';
import {IndustryOrderService} from './model/industryOrder/IndustryOrderService';
import {SelectItem} from 'primeng/primeng';

@Component({
	templateUrl : 'app/app.component.html',
	selector : 'my-app'
})


export class AppComponent implements OnInit {
	discs : SelectItem[];
	clients : SelectItem[];
	assets : SelectItem[];
	industry : SelectItem[];
	selectedDisclosure : string;
	constructor(private disclosureService : DisclosureService,
	 private clientService : ClientService, private assetClassificationService : AssetClassificationService
	 ,private industryOrderService : IndustryOrderService) {}

	ngOnInit() {
		this.discs = [];
		this.clients = [];
		//this.selectedDisclosure = "Please select the Disclosure";
		console.log("hello reached init");
		this.disclosureService.getDisclosureData()
			.then(discs => this.discs = discs);

		this.clientService.getClientData()
			.then(clients => this.clients = clients);

		this.assetClassificationService.getAssetClassificationData()
			.then(assets => this.assets = assets);

		this.industryOrderService.getIndustryOrderData()
			.then(industry => this.industry = industry);

	}

}