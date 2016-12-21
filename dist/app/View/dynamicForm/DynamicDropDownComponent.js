"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var DynamicFormBase_1 = require("../../model/dynamicForm/DynamicFormBase");
var DynamicDropDownComponent = (function () {
    function DynamicDropDownComponent() {
    }
    Object.defineProperty(DynamicDropDownComponent.prototype, "isValid", {
        get: function () {
            console.log("reached the dropdown component");
            return this.form.controls[this.dynamicDiscs.key].valid;
        },
        enumerable: true,
        configurable: true
    });
    return DynamicDropDownComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", DynamicFormBase_1.DynamicFormBase)
], DynamicDropDownComponent.prototype, "dynamicDiscs", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", forms_1.FormGroup)
], DynamicDropDownComponent.prototype, "form", void 0);
DynamicDropDownComponent = __decorate([
    core_1.Component({
        // moduleId : module.id,
        selector: "df-dropDown",
        templateUrl: "app/View/dynamicForm/DynamicDropDownComponent.html"
    }),
    __metadata("design:paramtypes", [])
], DynamicDropDownComponent);
exports.DynamicDropDownComponent = DynamicDropDownComponent;
//# sourceMappingURL=DynamicDropDownComponent.js.map