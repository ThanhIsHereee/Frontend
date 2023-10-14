"use strict";
console.log("baif 6: Hàm - function");

//Function: Function Declaration | Function expression

//1. cách khai báo hàm (tạo hàm)
//Function Declaration : Hoistring
handle1();//nhờ vào hoisting thì nó lại chạy được
//dùng trước khai báo sau
function handle1(){
    console.log("hàm này được tạo bằng /'/Function Declaration/'/");
}
 handle1();

 //2. Biểu thức hàm Function expression (không Hoisting)
//  Function expression: dù là dùng var nhưng vẫn không hoisting
//  handle2(); *Error
 var handle2 = function(){
    console.log("hàm này được tạo bằng/'/Function expression/'/");
 }
 handle2();

 //IIFE (immediately invokable function expression)
 //vừa mới tạo là được dùng luôn
( function () {
    let a = 1;
    let b = 2;
    console.log(a + b);
 }) ();
//  handle3();//call function

//IIFE: mạnh khi dùng chung với async await (xử lý bất đồng bộ) | gói code lại cho gọn
//nhiều khi mình không biết đặt tên gì | tạo ra dùng rồi thôi không dùng lại
//nếu thiếu dấu " ; " ở đầu, vô tình ở trên có 1 function thì sẽ bị lỗi

//Anonymours function
//callback: gọi lại
//          hàm nhận vào 1 hàm làm đối số
//function1(function2()); callback              //function2() -> callback function


//setTimeout(function(), milisecond) -- callback
//functionE() callback function
//setTimeout: đợi 1 số giây nhất định sau đó mới gọi hàm functionE()
var handle3 = function () {
    console.log("ahihihi đồ tró =)))");
};
//
setTimeout(handle3(), 3000);    
setTimeout(function () {
    console.log('tôi là Anonymours function trong setTimeout');
}, 3000);

//Arrow Function (hàm rút gọn của function expression | anonymous function)

//không phụ thuộc vào this và không thay thế function declaration
//this: trong JS this ám chỉ người gọi nó
//fd
function handle4(){
    console.log(this);
};
//fe
const handle5 = function () {
    console.log(this);
};
//fa
const handle6 = () => {
    console.log(this);
};

//fd giam this
handle4();//undefine | Nếu châm chước thì windowObject
//fe
handle5();//undefine | Nếu châm chước thì windowObject
//fa
handle6();//window

//vd2:
var person1 = {
    fullName: "ThanhIsHereee",

    getNameByFunctionExpression: function() {
        console.log(this.fullName);
    },

    getNameByFunctionArrow: () => {
        console.log(this.fullName);
    }
};
person1.getNameByFunctionExpression();//ThanhIsHereee
person1.getNameByFunctionArrow();//undefine

//=> Arrow function thì không nên xài this

//phân biệt tham số(parametor) và đối số(argument)
function handle7(a, b){
    return a + b;
}

handle7(2, 6);

//tham số mặc định (default parametor)
function handle8 (x, y = 10) {
    console.log(x + " " + y);
}

handle8(5, 7);
handle8(10);

//tham số còn lại | tham số đợi (rest parametor)
//vd1:
function handle9(a, b, ...c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
handle9(2, 5, 7, 8, 9, 10);

//ứng dụng
//  viết hàm nhận vào rất nhiều số, tính tổng các số đó
function sumALL(...numberList) {
    let result = 0;
    for (const x of numberList) {
        result += x;
    }
    return result;
}

let b = sumALL(3, 5, 9, 7, 34, 7, 8);
console.log(b);

//... nằm trong parametor (rest parateter)
//... nằm lộ thiên spread operator (destructuring: kỹ thuật phân rã)

