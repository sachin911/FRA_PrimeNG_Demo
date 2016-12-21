import {Injectable} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {DynamicFormBase} from "../model/dynamicForm/DynamicFormBase";

@Injectable()
export class DynamicFormControlService {
    constructor() {}

    toFormGroup(dynamicDisc: DynamicFormBase<any>[]) {
        let group: any = {};

        dynamicDisc.forEach(dynamicDisc => {
            group[dynamicDisc.key] = dynamicDisc.required ? new FormControl(dynamicDisc.value || "", Validators.required)
                                                      : new FormControl(dynamicDisc.value || "");
        });

        return new FormGroup(group);
    }
}
