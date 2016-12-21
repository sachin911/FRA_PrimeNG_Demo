import {Component, OnInit, ViewEncapsulation, Input} from "@angular/core";
import {DataService} from "./services/DataService";
import {SelectItem} from "primeng/primeng";
import {Disclosure} from "./model/disclosure/Disclosure";
import {DynamicService} from "./services/DynamicService";
import {DynamicFormBase} from "./model/dynamicForm/DynamicFormBase";

@Component({
	selector: "my-app",
	templateUrl: "app/app.component.html",
	providers: [DynamicService]
})

export class AppComponent implements OnInit {
	@Input()
	dynamicDisc: DynamicFormBase<any>[] = [];
	// form : FormGroup;
	discs: SelectItem[];
	clients: SelectItem[];
	assets: SelectItem[];
	industry: SelectItem[];
	disclosure: Disclosure[];
	selectedDisclosure: string;
	// dynamicDisc: any[];
	constructor(private dataService: DataService,
	private dynamicService: DynamicService) {}

	ngOnInit() {
		this.discs = [];
		this.clients = [];
		this.disclosure = [];
		// this.selectedDisclosure = "Please select the Disclosure";

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

		// this could be in the constructor. I am checking if it works onInit as well
		this.dynamicDisc = this.dynamicService.getDropDownOptions();

	}

}
