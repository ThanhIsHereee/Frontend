// "use strict";
console.log("bài 1: variable-hoisting-scope");
//var | let | const
//var: xuất hiện từ bảng ES đầu tiên
//re-assigning: gán biến
//khai báo và gán
var name1 = 'ThanhIsHereee';
console.log(name1);
mane1 = 'PASSED';
console.log(name1);

//khai báo nhưng không gán biến
var age;
console.log(age);// undefine
age = 10;
console.log(age);

// nguyên tắc đặt tên biến
// không bắt đầu bằng số
// nguyên tắc cammelCase | underscore | Pascal case (UpperCammelCase)
// được phép dùng _(private) và $(protected) ở đầu 

//Hoisting với var: (Hoisting: móc ngược lên)
//đây là tính năng không phải bug
console.log(msg);//undefine
var msg = "W'upppppp";
console.log(msg);

// var msg;
// console.log(msg);//undefine
// msg = "nèee"
// console.log(msg);

// --
//NormalMode | use strict mode
message = "haloooo";//tự tạo cho mình dưới dạng var
console.log(message);//return: haloooo

//let: (ES6 trở lên *2015) | const: hằng số
//let thì giống var nhưng không có hoisting
const profile = {name:'Thanh', height:'183cm'};
// a = 11;
// profile.name= "Thanh không cao";
// profile = {name:'Thanh không cao', height:'183cm'};
console.log(profile);

console.log(2 + 2);
//thử const với array
const array1 = [1, 2, 3, 4, 5];
//array1.push(6);
// array1 = [1, 2, 3, 4, 5, 6];
console.log(array1);

//Scope: trong JS có 3 loại Scope
// Global scope : toàn cục
//Function scope : trong hàm
//Block scope : cục bộ

//var sẽ không bị can thiệp bởi Block scope 
if(true){
    var son = "bra";
}
console.log(son);

//let|const: không có hoisting | var: có hoisting (use strict không lỗi hoisting)
//           có BlockScope    |                out BlockScope 