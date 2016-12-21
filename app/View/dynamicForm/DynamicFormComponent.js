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
var DynamicFormControlService_1 = require("../../services/DynamicFormControlService");
var DynamicFormComponent = (function () {
    function DynamicFormComponent(dcs) {
        this.dcs = dcs;
        this.dynamicDisc = [];
        this.payLoad = "";
    }
    DynamicFormComponent.prototype.ngOnInit = function () {
        this.form = this.dcs.toFormGroup(this.dynamicDisc);
    };
    DynamicFormComponent.prototype.onSubmit = function () {
        this.payLoad = JSON.stringify(this.form.value);
    };
    return DynamicFormComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], DynamicFormComponent.prototype, "dynamicDisc", void 0);
DynamicFormComponent = __decorate([
    core_1.Component({
        // moduleId: module.id,
        selector: "dynamic-form",
        templateUrl: "app/View/dynamicForm/DynamicFormComponent.html",
        providers: [DynamicFormControlService_1.DynamicFormControlService]
    }),
    __metadata("design:paramtypes", [DynamicFormControlService_1.DynamicFormControlService])
], DynamicFormComponent);
exports.DynamicFormComponent = DynamicFormComponent;
//# sourceMappingURL=DynamicFormComponent.js.map