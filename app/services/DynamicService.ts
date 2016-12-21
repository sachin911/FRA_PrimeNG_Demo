import {Injectable} from "@angular/core";

import {DynamicFormBase} from "../model/dynamicForm/DynamicFormBase";
import {DynamicFormDropDown} from "../model/dynamicForm/DynamicFormDropDown";

Injectable()
export class DynamicService {
    getDropDownOptions() {
        let dynamicForm: DynamicFormBase<any>[] = [
            new DynamicFormDropDown({
                key: "disclosure",
                label: "Disclosure",
                options: [
                    {key: "ASC820 Disclosure", value : "ASC820 Disclosure"}
                ],
                order: 1
            })
        ];

        return dynamicForm;
    }
}
