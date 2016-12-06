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
var http_1 = require('@angular/http');
var IndustryOrderService = (function () {
    function IndustryOrderService(http) {
        this.http = http;
    }
    IndustryOrderService.prototype.getIndustryOrderData = function () {
        var _this = this;
        return this.http.get('app/resources/data/industryOrderData.json')
            .toPromise()
            .then(function (res) { return res.json().data; })
            .then(function (data) {
            _this.result = [];
            console.log("this is the IndustryOrder service");
            for (var i = 0; i < data.length; i++) {
                _this.result[i] = ({ label: data[i].industry_name, value: data[i] });
            }
            console.log("---Industry dropDown---");
            console.log(_this.result);
            return _this.result;
        });
    };
    IndustryOrderService.prototype.getIndustryOrderHardData = function () {
        this.result = [];
        this.result.push({ label: 'None', value: 'None' });
        this.result.push({ label: 'Technology', value: { industry_id: 1, industry_name: 'Technology', industry_order_id: 1, sort_order: 1 } });
        this.result.push({ label: 'HealthCare', value: { industry_id: 2, industry_name: 'HealthCare', industry_order_id: 2, sort_order: 2 } });
        return this.result;
    };
    IndustryOrderService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], IndustryOrderService);
    return IndustryOrderService;
}());
exports.IndustryOrderService = IndustryOrderService;
//# sourceMappingURL=IndustryOrderService.js.map