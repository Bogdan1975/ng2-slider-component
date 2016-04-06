/**
 * Created by User on 21.03.2016.
 */

import {
    Component, Input, Output, ViewChild, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, EventEmitter,
    QueryList, ContentChildren, ContentChild, Query, ViewChildren
} from 'angular2/core'
import {SlideAbleDirective, BoundingRectClass} from '../ng2-slideable-directive/slideable.directive';

export enum RangeHandle {Start, End, Both}

@Component({
    selector: 'ng2-slider',
    templateUrl: 'app/ng2-slider-component/ng2-slider.component.html',
    directives: [SlideAbleDirective],
    changeDetection: ChangeDetectionStrategy.CheckAlways
})

export class Ng2SliderComponent {

    @Input() min:number;
    @Input() max:number;
    @Input() startValue:any;
    @Input() endValue:any;

    @Output('onRangeChanged') rangeChangedEvent = new EventEmitter();

    @ViewChild('ribbon') ribbon:ElementRef;
    @ViewChild('start') startRef:ElementRef;
    @ViewChild('end') endRef:ElementRef;
    @ViewChild('startInput') startInputRef:ElementRef;
    @ViewChild('endInput') endInputRef:ElementRef;

    @ViewChild('start') startD:SlideAbleDirective;

    @ContentChildren(SlideAbleDirective) contentChildren: QueryList<SlideAbleDirective>;
    @ContentChild(SlideAbleDirective) child1: SlideAbleDirective;

    private range:Range;
    private id;

    private handlers:any = {};

    constructor(private CDR:ChangeDetectorRef, private _elementRef: ElementRef) {
    }

    refreshInputBox(boundingRect, handle:RangeHandle) {
        let value = this.range.calculateValueFromX(boundingRect.left + Math.round(boundingRect.width / 2))
        switch (handle) {
            case RangeHandle.Start:
                this.startValue = value.toString();
                break;
            case RangeHandle.End:
                this.endValue = value.toString();
                break;
            default:
                break;
        }

        this.CDR.detectChanges();
        this.CDR.markForCheck();

        return value;
    }

    /**
     * Set new handle position when value was changed in input-box
     * @param handle
     */
    valueChanged(el: any, handle:RangeHandle = RangeHandle.Both) {

        if (handle == RangeHandle.Both || handle == RangeHandle.Start) {
            if (parseFloat(this.startValue) > parseFloat(this.endValue)) {
                this.startValue = this.endValue;
                this.CDR.markForCheck();
                this.CDR.detectChanges();
            } else {
                // this.startRef.nativeElement.style.left = this.range.calculatePercentFromValue(this.startValue) + '%';
            }
            this.handlers.Start.redraw(this.range.calculateXFromValue(this.startValue), 0);
        }
        if (handle == RangeHandle.Both || handle == RangeHandle.End) {
            if (parseFloat(this.startValue) > parseFloat(this.endValue)) {
                this.endValue = this.startValue
                this.CDR.markForCheck();
                this.CDR.detectChanges();
            }
            // this.endRef.nativeElement.style.left = this.range.calculatePercentFromValue(this.endValue) + '%';
            this.handlers.End.redraw(this.range.calculateXFromValue(this.endValue), 0);
        }

        // this.CDR.markForCheck();
        // this.CDR.detectChanges();

    }

    ngAfterViewInit() {

        /**
         *   In case of ng2-slider is root component, @inputs would not work, so we check inputs - if they are not defined,
         *   get them as attributes
         */
        if (!this.min) this.min = this._elementRef.nativeElement.attributes.getNamedItem('min').value;
        if (!this.max) this.max = this._elementRef.nativeElement.attributes.getNamedItem('max').value;
        if (!this.startValue) this.startValue = this._elementRef.nativeElement.attributes.getNamedItem('startValue').value;
        if (!this.endValue) this.endValue = this._elementRef.nativeElement.attributes.getNamedItem('endValue').value;

        // If "id" was not set, create it randomly (8 signs)
        if (!this._elementRef.nativeElement.id) {
            this.id = Math.random().toString(36).slice(2, 10);
            this._elementRef.nativeElement.id = this.id;
        } else {
            this.id = this._elementRef.nativeElement.id
        }

        this.range = new Range({
            element: this.ribbon.nativeElement,
            min: this.min,
            max: this.max
        });


    }

    ngAfterViewChecked() {
        // Seting handles to their places
        // this.valueChanged({});
        // this.CDR.markForCheck();
        // this.CDR.detectChanges();
        var a = 5;
    }

    ngAfterContentChecked() {
        var a = 5;
        var b = RangeHandle;
    }

    ngAfterContentInit() {
        var a = 5;
    }

    rangeChangedTrigger() {
        //this.rangeChangedEvent.emit({start: this.startValue, end: this.endValue});
        this.rangeChangedEvent.emit(this);
    }

    setStartValue(v) {
        this.startValue = v;
        this.valueChanged(RangeHandle.Start);
        this.CDR.detectChanges();
        this.CDR.markForCheck();
    }

    setEndValue(v) {
        this.endValue = v;
        this.valueChanged(RangeHandle.End);
        this.CDR.detectChanges();
        this.CDR.markForCheck();
    }

    onStopSliding(event) {
        this.rangeChangedTrigger();
    }

    onSliding(event) {
        var handle = RangeHandle.Both;
        if (event.elementId == this.id+'-left-handle') handle = RangeHandle.Start;
        if (event.elementId == this.id+'-right-handle') handle = RangeHandle.End;
        this.refreshInputBox(event.boundingRect, handle);
    }

    initHandlers(name, instance) {
        this.handlers[name] = instance;
        if (name == 'Start') this.valueChanged({}, RangeHandle.Start);
        if (name == 'End') this.valueChanged({}, RangeHandle.End);
        // this.valueChanged({}, RangeHandle[name]);
    }
}


export class Range {

    private boundingRect:BoundingRectClass;

    constructor(private config:{element:any, min:any, max:any}) {
        if (typeof(this.config.min == 'string')) this.config.min = parseFloat(this.config.min);
        if (typeof(this.config.max == 'string')) this.config.max = parseFloat(this.config.max);
        this.boundingRect = config.element.getBoundingClientRect();
    }

    // Calculate relative handle position (percent) from value
    /**
     * Calculate relative handle position (percent) from value
     *
     * @param value
     * @returns {float}
     */
    calculatePercentFromValue(value:number) {
        return Math.round(100 * (value - this.config.min) / (this.config.max - this.config.min));
    }

    calculateXFromValue(value:number) {
        return  this.boundingRect.left +  Math.round((this.boundingRect.right - this.boundingRect.left) * (value - this.config.min) / (this.config.max - this.config.min));
    }

    // Calculate relative handle position (percent) from his position coordinate
    calculatePercentFromX(x:number) {
        return Math.round(100 * (x - this.boundingRect.left) / (this.boundingRect.right - this.boundingRect.left));
    }

    // Calculate value from handle position coordinate
    calculateValueFromX(x:number) {
        return this.config.min + Math.round((this.config.max - this.config.min) * (x - this.boundingRect.left) / (this.boundingRect.right - this.boundingRect.left));
    }


    getLeftX() {
        return this.boundingRect.left;
    }

    getRightX() {
        return this.boundingRect.right;
    }

}