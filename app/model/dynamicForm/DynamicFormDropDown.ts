import {DynamicFormBase} from './DynamicFormBase';

export class DynamicFormDropDown extends DynamicFormBase<string> {
	controlType = 'dropdown';
	options : {key : string, value : string} [] = [];

	constructor(options: {} = {}) {
		super(options);
		this.options = options['options'] || [];
	} 
}