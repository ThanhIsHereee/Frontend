// "use strict"
console.log('07-objectMethod-this-function.js');
//object method; this va` function na^ng cao
//
//Object: đối tượng
//          là tất cả những gì có thể sờ được đếm được đều là đối tượng
//          trong object sẽ có properties dùng để mô tả đối tượng
//          thường có hành động: function(nếu function mà nằm trong object thì gọi là method)
const promotionBoy1 = {
    nickName:'ThanhIsHereee',//properties
    age: 20,//.................properties
    //hành động: method(function)
    //fd | literal shorthand
    sayHi(){
        console.log("Let's go");
    },
    //fe
    sayHi2 : function(){
        console.log("Let's go");
    },
    //fa ( không ai tạo method bằng arrow )
    sayHi1 : () => {
        console.log("Let's go");
    },

};
//cách tạo method bằng fd || fe về mặt lý thuyết là có khác nhau trên cơ sở kế thừa (OOP)
//nhưng mà không đáng kể, nên người ta thường vẫn dùng fd

//fd rút ngắn code
//dân chơi object rất chuộng dùng fd

//viết function ng ta thích fe && fa
//viết method ng ta thích fd

//ta có thể tạo thêm prop hay method sau khi đã tạo object 
console.log(promotionBoy1.money);//undefine
//khi em mới sinh ra em không hề biết tiền là gì 
//ai đó đề cập tới tiền với em | em nhân ra mình có prop là tiền nhưng
//      không biết đó là gì => undefine

promotionBoy1.money = 10000;
promotionBoy1.chuikhach = function() {
    console.log('Hỏi giá mà không mua hả mạy!!!');
};

//THIS trong method
let promotionBoy2 = {
    nickName:'ThanhIsHereee',//properties
    age: 20,//.................properties
    //hành động: method(function)
    //fd | literal shorthand
    showName(){
        console.log("Nick Name nè : " + this.nickName); //this : undefine
    },
    //fe
    showName2 : function(){
        console.log("Nick Name nè : " + this.nickName); //this : undefine   
    },
    //fa ( không ai tạo method bằng arrow )
    showName1 : () => {
        console.log("Nick Name nè : " + this.nickName);  //this : undefine
    },

};
//this chỉ được có giá trị khi runtime | this đại diện cho object gọi nó 
promotionBoy2.showName();//ThanhIsHereee
//  promotionBoy2 được xác định là người gọi
//  showName : fd => giam this => ép this phải là người gọi
//  this => promotionBoy2
promotionBoy2.showName1();
//  người gọi là promotionBoy2
//  showName1 là fa => thả this => global(window)
//  this => window

//nặng thêm 1 tý
let promotionBoy4 = {
    nickName:'ThanhIsHereee',//properties
    age: 20,//.................properties
    //hành động: method(function)
    //fd | literal shorthand
    showName(){
        console.log("Nick Name nè : " + promotionBoy4.nickName); //this : undefine
    },
};
// promotionBoy4.showName();
let promotionBoy5 = promotionBoy4;//2 chàng trỏ 1 nàng
promotionBoy4 = null;
// promotionBoy5.showName(); //lỗi vì promotionBoy4 đã là null nên không thể define

//this không bị ràng buộc giá trị

//nâng lên thêm 1 tý
//this trong function bên trong method (object > function > this)
let promotionBoy6 = {
    nickName:'ThanhIsHereee',//properties
    age: 20,//.................properties
    //hành động: method(function)
    //fd | literal shorthand
    showName(){
        // console.log("Nick Name nè : " + this.nickName); //this : undefine
        let arrow = () => {
            console.log("Nick Name nè : " + this.nickName);
        };

        arrow();
    },
    showName2(){
        // console.log("Nick Name nè : " + this.nickName); //this : undefine
        let expression = () => {
            console.log("Nick Name nè : " + this.nickName);
        };

        expression();
    },
};

promotionBoy6.showName();//ThanhIsHereee
// người gọi : promotionBoy6
//  showName() "fd"
//          arrow() "fa" => không giam this => this bay ra ngoài 
//              showName chặn => ép this phải là người gọi showName
//      showName có ai gọi không> promotionBoy6
// => this là promotionBoy6

//
promotionBoy6.showName2();
// promotionBoy6 gọi showName2 
//          expression là ai => fe không ai gọi
//              vì là fe nên giam this: undefine | nhưng mà du di vì đang ở chế độ normal mode global => window
//                    undefine.showName2() : lỗi |  window.showName2() : undefine

//nâng lên 1 tý
//this trong callback
let promotionBoy7 = {
    nickName:'ThanhIsHereee',//properties
    age: 20,//.................properties
    //hành động: method(function)
    //fd | literal shorthand
    showName(){
        // console.log("Nick Name nè : " + this.nickName); //this : undefine
        setTimeout(function (){
            console.log("Nick Name nè : " + this.nickName);
        }, 1000);
    },
};
promotionBoy7.showName();
//showName do promotionBoy7 gọi : fd
//      function trong setTimeout là fe => giam this
//                                         không ai gọi 
//      => this => undefined (khi "use strict") | window (normal)
//                 undefine.nickName: lỗi       | window.nickname: undefine

//
let promotionBoy8 = {
    nickName:'ThanhIsHereee',//properties
    age: 20,//.................properties
    //hành động: method(function)
    //fd | literal shorthand
    showName(){
        // console.log("Nick Name nè : " + this.nickName); //this : undefine
        setTimeout(() => {
            console.log("Nick Name nè : " + this.nickName);
        }, 1000);
    },
};

promotionBoy8.showName();
// showName ai gọi promotionBoy8 : fd
//          hàm vô danh: fa => thả this
//              showName chặn : this phải là người gọi showName
//              => thí = promotionBoy8 
//              promotionBoy8.nickName: "ThahIsHereee"


//nâng cao: HOF
//Higher Order Function : 
//      1.  Callback : hàm nhận 1 hàm làm parameter
//      2.  Closure  : 
//      3.  Currying : 

//viết hàm nhần vào và tính tổng của 2 số và trả ra kết quả
let sumDemo = (a) => {
    return (b) => {
        return a + b;
    };
}
console.log(sumDemo(2)(5));//7

//HOF: có 3 khái niệm
//      1. callback : hàm nhận vào 1 hàm làm parameter
const array1= [1, 2, 3, 4, 5];
array1.forEach((val, key) =>{
    console.log(val + ' ' + key);
});
//   2. cloruse
//      2.1 lexical scoping: hàm con dùng biến của hàm cha
//      2.2 Closure: 1 function return 1 function

//ứng dụng: tạo ra 1 hàm chuyện render id (máy tạo key tự tăng)
const initIdentity = () => {
    let newId = 0;
    return () => {
        return ++newId;
    }
}
console.log(initIdentity());//() => ++newId; | kèm theo newId = 0
console.log(initIdentity()());// 1 | kèm theo newId = 0
console.log(initIdentity()());// 1 | kèm theo newId = 0
//initIdentity() thì nó reset newId() trả ra hàm con () => ++newId;
//initIdentity()() thì nó lại initIdentity() | newId => chạy hàm con 
//                                                      | trả ra kq
//------

let closureDemo = initIdentity();//() => ++newId;
console.log(closureDemo());//1
console.log(closureDemo());//2
console.log(closureDemo());//3
console.log(closureDemo());//4

//  3. Currying: kỹ thuật chuyển đổi từ 1 finction nhận vào nhiều parameter 
                // thành những function liên tiếp có tham số

//Viết 1 hàm xử lý 3 bài toán sau
//1 hàm sử dụng được cho 3 bài toán
//          tìm các số từ 0 - 10 là số lẻ
//          tìm các số từ 0 - 20 là số chẵn
//          tìm các số từ 0 -30 chia cho 3 dư 2
//=> callback | callback + currying
function handle3(number, fun){
    let result = [];
    for(let i = 0; i <= number; i++){
        if(fun(i)){
            result.push(i);
        }
    }
    return result;
};
console.log(handle3(7,(number) => number % 2 == 1));
console.log(handle3(17,(number) => number % 2 == 0));
console.log(handle3(24,(number) => number % 3 == 2));

function handle3(number, fun){
    let result = [];
    for(let i = 0; i <= number; i++){
        if(fun(i)){
            result.push(i);
        }
    }
    return result;
};


























































































































