import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from "rxjs/Observable";
import {AssetClassification} from './AssetClassification';
import {SelectItem} from 'primeng/primeng';

@Injectable()
export class AssetClassificationService {
	private assetUrl = "app/resources/data/assetData.json";
	result : SelectItem[];
	constructor( private http : Http) {

	}

	getAssetClassificationData(){
		return this.http.get(this.assetUrl)
						.toPromise()
						.then(res => <AssetClassification[]> res.json().data)
						.then(data => { 
							this.result = [];
							console.log("this is the Asset service");
							for(var i=0; i< data.length; i++){
								this.result[i]=({label:data[i].name, value:data[i]});
							}
							console.log("---Assets dropDown---");
							console.log(this.result);
							return this.result;
						});
	}


	/*getAssetObservable() : Observable<SelectItem[]>{
		return this.http.get(this.assetUrl)
				.map()
	}*/

	getAssetClassificationHardData(){
		this.result = [];
		this.result.push({label : 'None' , value : 'None' });
		this.result.push({label: 'Common Stock, Limited partnership', value: {asset_id : 1, name: 'Common Stock, Limited partnership', order : 1}});
		this.result.push({label: 'Total Return Swap', value: {asset_id : 2, name: 'Total Return Swap', order : 2}});
		this.result.push({label: 'Asset Swap', value: {asset_id : 3, name: 'Asset Swap', order : 2}});
		this.result.push({label: 'Bank Debt', value: {asset_id : 4, name: 'Bank Debt', order : 1}});
		return this.result;
	}
}
 