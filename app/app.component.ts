import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {DataService} from './services/DataService';
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
	constructor(private dataService : DataService) {}

	ngOnInit() {
		this.discs = [];
		this.clients = [];
		//this.selectedDisclosure = "Please select the Disclosure";
		console.log("hello reached init");
		// this.dataService.getDisclosureData()
		// 	.then(discs => this.discs = discs);

		// this.dataService.getClientData()
		// 	.then(clients => this.clients = clients);

		// this.dataService.getAssetClassificationData()
		// 	.then(assets => this.assets = assets);

		this.dataService.getIndustryOrderData()
			.then(data => {
				//this.industry = industry
				this.industry = [];
				console.log("this is the IndustryOrder app component");
				for(var i=0; i< data.length; i++){
					console.log(data[i]);
					this.industry[i]=({label:data[i].industry_name, value:data[i]});
				}
				console.log("---Industry dropDown---");
				console.log(this.industry);
				//return this.result;
			});

	}

}