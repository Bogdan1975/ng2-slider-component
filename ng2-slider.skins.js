"use strict";
exports.skins = {
    default: {
        block: [
            ".range-ribbon {position: absolute; width: 100%; height: 10px; border: 1px solid #ddd; -webkit-border-radius: 4px; -moz-border-radius: 4px; border-radius: 4px; background: #eee 50% top repeat-x; color: #333; top: 4px;}",
            ".slider-handle {position: absolute; border: 1px solid #ccc; -webkit-border-radius: 4px; -moz-border-radius: 4px; border-radius: 4px; background: #f6f6f6 50% 50% repeat-x; width: 18px; height: 18px; box-sizing: border-box;}",
            ".slider-handle.sliding {border: 1px solid #fbcb09; background: #fdf5ce 50% 50% repeat-x;}"
        ]
    },
    'simple-1': {
        block: [
            ".range-ribbon {position: absolute; width: 100%; height: 8px; border: 1px solid #bdc3c7; -webkit-border-radius: 8px; -moz-border-radius: 8px; border-radius: 8px; background: white; top: 6px;}",
            ".slider-handle {position: absolute; border: 1px solid #bdc3c7; -webkit-border-radius: 10px; -moz-border-radius: 10px; border-radius: 10px; background: #ecf0f1; width: 20px; height: 20px;}",
            ".slider-handle:hover {border: 1px solid #fbcb09; background: #fdf5ce 50% 50% repeat-x;}",
            ".slider-handle.sliding {border: 1px solid #fbcb09; background: #fdf5ce 50% 50% repeat-x;}"
        ]
    },
    'elegance-1': {
        block: [
            ".range-ribbon {position: absolute; width: 100%; height: 3px; background: #ccc; top: 14px;}",
            ".slider-handle {position: absolute; width: 8px; height: 8px; border: 12px solid #a6d8ef; cursor: ew-resize;; background-color: #5082e0; opacity: .7; -webkit-border-radius: 18px; -moz-border-radius: 18px; border-radius: 18px;}",
            ".slider-handle:hover {opacity: 1}",
            ".slider-handle.sliding {opacity: 1}"
        ]
    },
    first: {
        block: [
            ".range-ribbon {left: 0%; width: 100%; height: 10px; border: solid 1px; position: absolute; top: 4px;}",
            ".slider-handle {width: 18px; height: 18px; border: solid 1px red; position: absolute; background-color: yellow;}"
        ]
    },
    'elegance-2': {
        block: [
            ".range-ribbon {position: absolute; width: 100%; height: 4px; background: #d8e0f3; top: 14px;}",
            ".slider-handle {position: absolute; width: 32px; height: 32px; cursor: pointer; background-color: #0db9f0; -webkit-border-radius: 16px; -moz-border-radius: 16px; border-radius: 16px;}",
            ".slider-handle::after {position: absolute; width: 8px; height: 8px; background: #ffffff; -webkit-border-radius: 4px; -moz-border-radius: 4px; border-radius: 4px; content: ''; top: 12px; left: 12px;}",
            ".slider-handle.sliding::after {background:red}"
        ]
    },
    'rear-sight': {
        block: [
            ".slider-container {margin-top: 15px;}",
            ".range-ribbon {position: absolute; width: 100%; height: 1px; background: #d8e0f3; top: 2px;}",
            ".slider-handle {position: absolute; width: 5px; height: 5px; cursor: pointer; background-color: black; -webkit-border-radius: 4px; -moz-border-radius: 4px; border-radius: 4px; /*margin-top: 13px*/}",
            ".slider-handle::before {position: absolute; width: 1px; height: 18px; background: black; content: ''; top: -7px; left: 2px;}",
            ".slider-handle::after {position: absolute; width: 18px; height: 1px; background: black; content: ''; top: 2px; left: -7px;}",
            ".slider-handle.sliding {background:red}",
            ".slider-handle.sliding::before {background:blue}",
            ".slider-handle.sliding::after {background:blue}"
        ]
    }
};
//# sourceMappingURL=ng2-slider.skins.js.map