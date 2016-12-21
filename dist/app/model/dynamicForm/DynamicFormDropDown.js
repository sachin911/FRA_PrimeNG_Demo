"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DynamicFormBase_1 = require("./DynamicFormBase");
var DynamicFormDropDown = (function (_super) {
    __extends(DynamicFormDropDown, _super);
    function DynamicFormDropDown(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'dropdown';
        _this.options = [];
        _this.options = options['options'] || [];
        return _this;
    }
    return DynamicFormDropDown;
}(DynamicFormBase_1.DynamicFormBase));
exports.DynamicFormDropDown = DynamicFormDropDown;
//# sourceMappingURL=DynamicFormDropDown.js.map