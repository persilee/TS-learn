//布尔值
document.body.innerHTML += '<h2>布尔值</h2>';
let isDone: boolean = false;
document.body.innerHTML += `布尔值: ${isDone} </br>`;

//数字
document.body.innerHTML += '<h2>数字</h2>';
document.body.innerHTML += '<p>数字不仅支持十进制，而且支持十六进制、二进制、八进制</p>';
let num: number = 10;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;
document.body.innerHTML += `数字十进制: ${num} </br>`;
document.body.innerHTML += `数字十六进制: ${hexLiteral} </br>`;
document.body.innerHTML += `数字二进制: ${binaryLiteral} </br>`;
document.body.innerHTML += `数字八进制: ${octalLiteral} </br>`;

//字符串
document.body.innerHTML += '<h2>字符串</h2>';
document.body.innerHTML += '<p>字符串可以使用双引号（“）或者单引号（‘），也可以使用es6的字符串模板(`...${}...`)</p>';
let sName: string = `lishaoy`;
let nAge: number = 999;
document.body.innerHTML += `字符串模板输出: 姓名：${sName} 年龄：${nAge}</br>`;

//数组
document.body.innerHTML += '<h2>数组</h2>';
document.body.innerHTML += '<p>有两种方式定义数组</p>';
document.body.innerHTML += '<h3>方式1</h3>';
document.body.innerHTML += '<p>直接用number[]</p>';
let list1: number[] = [1,2,3];
list1.forEach(((e,i )=> {
    document.body.innerHTML += `${i+1}:${e}</br>`;
}));
document.body.innerHTML += '<h3>方式2</h3>';
document.body.innerHTML += '<p>第二种方式是使用数组泛型，Array<元素类型></p>';
let list2: Array<number> = [4,5,6];
list2.foo = 'haha';
list2.push('hehe');
for (const i of list2) {
    document.body.innerHTML += `${i}</br>`;
}

//元组
document.body.innerHTML += '<h2>元组</h2>';
document.body.innerHTML += '<p>可以定义不同类型的数组</p>';
let x: [string, number] = ['hello',666];
document.body.innerHTML += `${x[0]} and  ${x[1]}`;