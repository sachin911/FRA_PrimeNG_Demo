"use strict";
var core_1 = require("@angular/core");
var DynamicFormDropDown_1 = require("../model/dynamicForm/DynamicFormDropDown");
core_1.Injectable();
var DynamicService = (function () {
    function DynamicService() {
    }
    DynamicService.prototype.getDropDownOptions = function () {
        var dynamicForm = [
            new DynamicFormDropDown_1.DynamicFormDropDown({
                key: "disclosure",
                label: "Disclosure",
                options: [
                    { key: "ASC820 Disclosure", value: "ASC820 Disclosure" }
                ],
                order: 1
            })
        ];
        return dynamicForm;
    };
    return DynamicService;
}());
exports.DynamicService = DynamicService;
//# sourceMappingURL=DynamicService.js.map