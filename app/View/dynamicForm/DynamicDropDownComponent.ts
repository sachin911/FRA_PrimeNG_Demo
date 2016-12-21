import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

import { DynamicFormBase } from "../../model/dynamicForm/DynamicFormBase";


@Component({
    // moduleId : module.id,
    selector : "df-dropDown",
    templateUrl : "app/View/dynamicForm/DynamicDropDownComponent.html"
})
export class DynamicDropDownComponent {

    @Input() dynamicDiscs: DynamicFormBase<any>;
    @Input() form: FormGroup;
    get isValid(){
		console.log("reached the dropdown component");
        return this.form.controls[this.dynamicDiscs.key].valid;
    }
}
