//05-nativePrototype
// Thuộc tính prototype sử dụng rộng rãi trong js
// mọi constructor function có sẵn trong js đều sử dụng nó

//Tổng kết các khái niệm như sau:
//-[[Prototype]] là 1 thuộc tính ẩn trong object(function).đại diện cho prototype thực tế
//-__proto__ là get/set truy cập của [[Prototype]]
//-thuộc tính 'prototype' tồn tại trong constructor function nó là 1 thuộc tính bình thường
//      không phải là [[Prototype]]. nó giúp ta kế thừa khi tạo object từ constructor function
// khi mà một object được tạo ra từ 1 constructor thì [[Prototype]] của object đó sẽ có giá trị
//      là prototype của constructor

//Object.prototype
// object rỗng
let obj = {}; 
// let obj1 = new Object();
console.log(obj.toString());//[object Object]

//đối tượng obj được tạo thành từ constructor tên là Object 
//  điều đó đồng nghĩa với việc [[Prototype]] của obj là Object.prototype là class Object

// bên trong 1 object có gì ? : thuộc tính, [[Prototype]] => sử dụng bằng __proto__
// 
console.log(obj.__proto__ == Object.prototype); // true

console.log(Object.prototype.__proto__);// null
console.log(obj.__proto__.__proto__);// null

//Array, Date, Function cũng giữ cho mình các phuogne thức có sẵn trong prototype
let arr1 = [1,2,3];
//arr1 không có prototype vì nó không phải constructor mà nó chỉ là sản phẩm của constructor của Array
console.log(arr1.prototype);// undefine
console.log(arr1.__proto__ == Array.prototype);// true
console.log(arr1.__proto__.__proto__ == Object.prototype);// true
// Object {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

//có trường hợp Object có các method trùng nhau của các prototype 
//ví dụ như method toString() cả object và array đều có

//vậy thì arr1 sẽ chọn toString() của Object hay toString() của Array 
//Override: ghi đè, vượt mặt

// Object >> Array => arr1


//primitives - kiểu nguyên thủy
//String, number, boolean không phải là Object nhưng vẫn có thể try cập chúng như sau
let a = 1;
console.log(a.toString());


















