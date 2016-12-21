import {Component, OnInit, ViewEncapsulation, Input} from "@angular/core";
import {FormGroup} from "@angular/forms";

import {DynamicFormBase} from "../../model/dynamicForm/DynamicFormBase";
import {DynamicFormControlService} from "../../services/DynamicFormControlService";
import {DynamicFormDropDown} from "../../model/dynamicForm/DynamicFormDropDown";

@Component({
	// moduleId: module.id,
	selector: "dynamic-form",
	templateUrl: "app/View/dynamicForm/DynamicFormComponent.html",
	providers: [DynamicFormControlService]
})

export class DynamicFormComponent implements OnInit {
	@Input() dynamicDisc: DynamicFormBase<any>[] = [];
	form: FormGroup;
	payLoad = "";

	constructor(private dcs: DynamicFormControlService) {  }

	ngOnInit() {
		this.form = this.dcs.toFormGroup(this.dynamicDisc);
	}

	onSubmit() {
		this.payLoad = JSON.stringify(this.form.value);
	}
}
