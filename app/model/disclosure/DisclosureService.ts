import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from "rxjs/Observable";
import {Disclosure} from './Disclosure';
import {SelectItem} from 'primeng/primeng';

@Injectable()
export class DisclosureService {
	private discUrl = "app/resources/data/disclosureData.json";
	result : SelectItem[];
	constructor( private http : Http) {

	}

	getDisclosureData(){
		return this.http.get(this.discUrl)
						.toPromise()
						.then(res => <Disclosure[]> res.json().data)
						.then(data => { 
							this.result = [];
							console.log("this is the Disclosure service");
							for(var i=0; i< data.length; i++){
								this.result[i]=({label:data[i].type, value:data[i]});
							}
							console.log("---Disclosure dropDown---");
							console.log(this.result);
							return this.result;});
	}


	getDisclosureHardData(){
		this.result = [];
		this.result.push({label : 'None' , value : 'None' });
		this.result.push({label: 'ASC820 Disclosure', value: {d_id : 1, type: 'ASC820 Disclosure'}});
		this.result.push({label: 'ASC2011_4 Disclosure', value: {d_id : 2, type: 'ASC2011_4 Disclosure'}}); 
		return this.result;
	}
}
 