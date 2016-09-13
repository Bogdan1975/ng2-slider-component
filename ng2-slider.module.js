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
var common_1 = require('@angular/common');
var ng2_slider_component_1 = require("ng2-slider-component/ng2-slider.component");
var slideable_directive_1 = require("ng2-slideable-directive/slideable.directive");
var ng2_styled_directive_1 = require("ng2-styled-directive/ng2-styled.directive");
var forms_1 = require("@angular/forms");
var Ng2SliderModule = (function () {
    function Ng2SliderModule() {
    }
    Ng2SliderModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule
            ],
            declarations: [
                ng2_slider_component_1.Ng2SliderComponent,
                slideable_directive_1.SlideAbleDirective,
                ng2_styled_directive_1.Ng2StyledDirective
            ],
            exports: [
                ng2_slider_component_1.Ng2SliderComponent
            ],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], Ng2SliderModule);
    return Ng2SliderModule;
}());
exports.Ng2SliderModule = Ng2SliderModule;
//# sourceMappingURL=ng2-slider.module.js.map