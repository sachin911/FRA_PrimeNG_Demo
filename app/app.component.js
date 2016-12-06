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
var core_1 = require('@angular/core');
var DisclosureService_1 = require('./model/disclosure/DisclosureService');
var ClientService_1 = require('./model/client/ClientService');
var AssetClassificationService_1 = require('./model/assetClassification/AssetClassificationService');
var IndustryOrderService_1 = require('./model/industryOrder/IndustryOrderService');
var AppComponent = (function () {
    function AppComponent(disclosureService, clientService, assetClassificationService, industryOrderService) {
        this.disclosureService = disclosureService;
        this.clientService = clientService;
        this.assetClassificationService = assetClassificationService;
        this.industryOrderService = industryOrderService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.discs = [];
        this.clients = [];
        //this.selectedDisclosure = "Please select the Disclosure";
        console.log("hello reached init");
        this.disclosureService.getDisclosureData()
            .then(function (discs) { return _this.discs = discs; });
        this.clientService.getClientData()
            .then(function (clients) { return _this.clients = clients; });
        this.assetClassificationService.getAssetClassificationData()
            .then(function (assets) { return _this.assets = assets; });
        this.industryOrderService.getIndustryOrderData()
            .then(function (industry) { return _this.industry = industry; });
    };
    AppComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/app.component.html',
            selector: 'my-app'
        }), 
        __metadata('design:paramtypes', [DisclosureService_1.DisclosureService, ClientService_1.ClientService, AssetClassificationService_1.AssetClassificationService, IndustryOrderService_1.IndustryOrderService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map