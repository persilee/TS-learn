"use strict";
//布尔值
document.body.innerHTML += '<h2>布尔值</h2>';
var isDone = false;
document.body.innerHTML += "\u5E03\u5C14\u503C: " + isDone + " </br>";
//数字
document.body.innerHTML += '<h2>数字</h2>';
document.body.innerHTML += '<p>数字不仅支持十进制，而且支持十六进制、二进制、八进制</p>';
var num = 10;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
document.body.innerHTML += "\u6570\u5B57\u5341\u8FDB\u5236: " + num + " </br>";
document.body.innerHTML += "\u6570\u5B57\u5341\u516D\u8FDB\u5236: " + hexLiteral + " </br>";
document.body.innerHTML += "\u6570\u5B57\u4E8C\u8FDB\u5236: " + binaryLiteral + " </br>";
document.body.innerHTML += "\u6570\u5B57\u516B\u8FDB\u5236: " + octalLiteral + " </br>";
//字符串
document.body.innerHTML += '<h2>字符串</h2>';
document.body.innerHTML += '<p>字符串可以使用双引号（“）或者单引号（‘），也可以使用es6的字符串模板(`...${}...`)</p>';
var sName = "lishaoy";
var nAge = 999;
document.body.innerHTML += "\u5B57\u7B26\u4E32\u6A21\u677F\u8F93\u51FA: \u59D3\u540D\uFF1A" + sName + " \u5E74\u9F84\uFF1A" + nAge + "</br>";
//数组
document.body.innerHTML += '<h2>数组</h2>';
document.body.innerHTML += '<p>有两种方式定义数组</p>';
document.body.innerHTML += '<h3>方式1</h3>';
document.body.innerHTML += '<p>直接用number[]</p>';
var list1 = [1, 2, 3];
list1.forEach((function (e, i) {
    document.body.innerHTML += i + 1 + ":" + e + "</br>";
}));
document.body.innerHTML += '<h3>方式2</h3>';
document.body.innerHTML += '<p>第二种方式是使用数组泛型，Array<元素类型></p>';
var list2 = [4, 5, 6];
list2.foo = 'haha';
list2.push('hehe');
for (var _i = 0, list2_1 = list2; _i < list2_1.length; _i++) {
    var i = list2_1[_i];
    document.body.innerHTML += i + "</br>";
}
//元组
document.body.innerHTML += '<h2>元组</h2>';
document.body.innerHTML += '<p>可以定义不同类型的数组</p>';
var x = ['hello', 666];
document.body.innerHTML += x[0] + " and  " + x[1];
//枚举
document.body.innerHTML += '<h2>枚举</h2>';
document.body.innerHTML += '<p>enum类型是对JavaScript标准数据类型的一个补充</p>';
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
;
var c = Color.blue;
document.body.innerHTML += "1." + c + "</br>";
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Green"] = 2] = "Green";
    Color1[Color1["Blue"] = 3] = "Blue";
})(Color1 || (Color1 = {}));
var c1 = Color1.Green;
document.body.innerHTML += "2." + c1 + "</br>";
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {}));
var colorName = Color2[2];
var c2 = Color2.Green;
document.body.innerHTML += "3." + colorName + " - " + c2 + "</br>";
//Any
document.body.innerHTML += '<h2>Any</h2>';
document.body.innerHTML += '<p>动态类型</p>';
var notSure = 666;
notSure = 'maybe a string instead';
document.body.innerHTML += notSure + "</br>";
var notSure1 = 4;
// notSure1.ifItExists(); // okay, ifItExists might exist at runtime
// notSure1.toFixed();
var prettySure = 4;
// prettySure.toFixed(); //error
var anyList = [1, true, "free"];
anyList[1] = 100;
document.body.innerHTML += anyList[0] + " - " + anyList[1] + " - " + anyList[2];
//# sourceMappingURL=basic-type.js.map