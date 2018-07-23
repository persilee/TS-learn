"use strict";
var color;
(function (color) {
    color[color["red"] = 1] = "red";
    color[color["green"] = 2] = "green";
})(color || (color = {}));
;
var colorName = color.red;
console.log(colorName);
//# sourceMappingURL=hello.js.map