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
var DataService_1 = require("./services/DataService");
var DynamicService_1 = require("./services/DynamicService");
var AppComponent = (function () {
    function AppComponent(dataService, dynamicService) {
        this.dataService = dataService;
        this.dynamicService = dynamicService;
        this.dynamicDD = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.discs = [];
        this.clients = [];
        this.disclosure = [];
        // this.selectedDisclosure = "Please select the Disclosure";
        this.disclosure = this.dataService.getDisclosureHardData();
        console.log("datatable");
        console.log(this.disclosure);
        console.log("hello reached init");
        this.dataService.getDisclosureData()
            .then(function (discs) { return _this.discs = discs; });
        this.dataService.getClientData()
            .then(function (clients) { return _this.clients = clients; });
        this.dataService.getAssetClassificationData()
            .then(function (assets) { return _this.assets = assets; });
        this.dataService.getIndustryOrderData()
            .then(function (industry) { return _this.industry = industry; });
        // this could be in the constructor. I am checking if it works onInit as well
        this.dynamicDisc = this.dynamicService.getDropDownOptions();
    };
    return AppComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], AppComponent.prototype, "dynamicDD", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        templateUrl: "app/app.component.html",
        providers: [DynamicService_1.DynamicService]
    }),
    __metadata("design:paramtypes", [DataService_1.DataService,
        DynamicService_1.DynamicService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map