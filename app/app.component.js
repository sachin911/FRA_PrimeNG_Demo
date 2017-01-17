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
var AppComponent = (function () {
    function AppComponent(dataService) {
        this.dataService = dataService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.discs = [];
        this.clients = [];
        //this.selectedDisclosure = "Please select the Disclosure";
        console.log("hello reached init");
        // this.dataService.getDisclosureData()
        // 	.then(discs => this.discs = discs);
        // this.dataService.getClientData()
        // 	.then(clients => this.clients = clients);
        // this.dataService.getAssetClassificationData()
        // 	.then(assets => this.assets = assets);
        this.dataService.getIndustryOrderData()
            .then(function (data) {
            //this.industry = industry
            _this.industry = [];
            console.log("this is the IndustryOrder app component");
            for (var i = 0; i < data.length; i++) {
                console.log(data[i]);
                _this.industry[i] = ({ label: data[i].industry_name, value: data[i] });
            }
            console.log("---Industry dropDown---");
            console.log(_this.industry);
            //return this.result;
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/app.component.html',
        selector: 'my-app'
    }),
    __metadata("design:paramtypes", [DataService_1.DataService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map