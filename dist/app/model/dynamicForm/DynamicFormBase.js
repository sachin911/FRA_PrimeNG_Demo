"use strict";
var DynamicFormBase = (function () {
    function DynamicFormBase(options) {
        if (options === void 0) { options = {}; }
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.required = !!options.required;
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';
    }
    return DynamicFormBase;
}());
exports.DynamicFormBase = DynamicFormBase;
//# sourceMappingURL=DynamicFormBase.js.map