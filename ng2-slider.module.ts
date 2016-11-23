/**
 * Created by martinolessio on 13/09/16.
 */
import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import {Ng2SliderComponent} from "ng2-slider-component/ng2-slider.component";
import {SlideAbleDirective} from "ng2-slideable-directive/slideable.directive";
import {Ng2StyledDirective} from "ng2-styled-directive/ng2-styled.directive";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";

@NgModule({
    imports:      [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        Ng2SliderComponent,
        SlideAbleDirective,
        Ng2StyledDirective
    ],
    exports:      [
        Ng2SliderComponent
    ],
    providers:    [

    ]
})
export class Ng2SliderModule { }
