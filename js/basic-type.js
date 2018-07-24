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
//# sourceMappingURL=basic-type.js.map