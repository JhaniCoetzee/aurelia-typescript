if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
define(["require", "exports", 'aurelia-framework'], function (require, exports, aurelia_framework_1) {
    var HtmlRenderer = (function () {
        function HtmlRenderer(element) {
            this.element = element;
        }
        HtmlRenderer.prototype.valueChanged = function (newValue) {
            this.element.innerHTML = newValue;
        };
        HtmlRenderer = __decorate([
            aurelia_framework_1.customAttribute('html-renderer'),
            aurelia_framework_1.inject(Element)
        ], HtmlRenderer);
        return HtmlRenderer;
    })();
    exports.HtmlRenderer = HtmlRenderer;
});
//# sourceMappingURL=html-renderer.js.map