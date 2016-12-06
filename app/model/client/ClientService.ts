import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from "rxjs/Rx";
import {Client} from './Client';
import {SelectItem} from 'primeng/primeng';

@Injectable()
export class ClientService {
	result : SelectItem[];
	constructor( private http : Http) {

	}

	getClientData(){
		return this.http.get('app/resources/data/clientData.json')
						.toPromise()
						.then(res => <Client[]> res.json().data)
						.then(data => { 
							this.result = [];
							console.log("this is the Client service");
							for(var i=0; i< data.length; i++){
								this.result[i]=({label:data[i].name, value:data[i]});
							}
							console.log("---Client dropDown---");
							console.log(this.result);
							return this.result;});
	}

	getClientHardData(){
		this.result = [];
		this.result.push({label : 'None' , value : 'None' });
		this.result.push({label: 'OZ', value: {c_id : 1, name: 'QZ'}});
		this.result.push({label: 'AQR', value: {c_id : 2, name: 'AQR'}}); 
		return this.result;
	}

}
