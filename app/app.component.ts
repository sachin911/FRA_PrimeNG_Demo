import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {DataService} from './services/DataService';
import {SelectItem} from 'primeng/primeng';
import {Disclosure} from './model/disclosure/Disclosure';

@Component({
	templateUrl : 'app/app.component.html',
	selector : 'my-app'
})


export class AppComponent implements OnInit {
	discs : SelectItem[];
	clients : SelectItem[];
	assets : SelectItem[];
	industry : SelectItem[];
	disclosure : Disclosure[];
	selectedDisclosure : string;
	constructor(private dataService : DataService) {}

	ngOnInit() {
		this.discs = [];
		this.clients = [];
		this.disclosure = [];
		//this.selectedDisclosure = "Please select the Disclosure";

		this.disclosure = this.dataService.getDisclosureHardData();
		console.log("datatable");
		console.log(this.disclosure);
		console.log("hello reached init");
		this.dataService.getDisclosureData()
			.then(discs => this.discs = discs);

		this.dataService.getClientData()
			.then(clients => this.clients = clients);

		this.dataService.getAssetClassificationData()
			.then(assets => this.assets = assets);

		this.dataService.getIndustryOrderData()
			.then(industry => this.industry = industry);

	}

}