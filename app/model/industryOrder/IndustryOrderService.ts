import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from "rxjs/Rx";
import {IndustryOrder} from './IndustryOrder';
import {SelectItem} from 'primeng/primeng';

@Injectable()
export class IndustryOrderService {
	result : SelectItem[];
	constructor( private http : Http) {

	}

	getIndustryOrderData(){
		return this.http.get('app/resources/data/industryOrderData.json')
						.toPromise()
						.then(res => <IndustryOrder[]> res.json().data)
						.then(data => { 
							this.result = [];
							console.log("this is the IndustryOrder service");
							for(var i=0; i< data.length; i++){
								this.result[i]=({label:data[i].industry_name, value:data[i]});
							}
							console.log("---Industry dropDown---");
							console.log(this.result);
							return this.result;
						});
	}

	getIndustryOrderHardData(){
		this.result = [];
		this.result.push({label : 'None' , value : 'None' });
		this.result.push({label: 'Technology', value: {industry_id : 1, industry_name: 'Technology', industry_order_id : 1, sort_order: 1}});
		this.result.push({label: 'HealthCare', value: {industry_id : 2, industry_name: 'HealthCare', industry_order_id : 2, sort_order: 2}});
		return this.result;
	}

}
