"use strict"
console.log('Bài 12 : Object Method');
//Object 
//  entry của Object key: value
//  key luôn luôn là String hoặc Number
//  value có thể là bất cứ giá trị nào
var worker1 = {
    lname: "ThanhIsHeree",
    age: 20,
    showInfor(){
        console.log(this.lname + " " + this.age);
    }
}

worker1.showInfor();//ThanhIsHeree 20

//thêm thuộc tính
worker1.point = 10;
//sửa lại thuộc tính
worker1.lname = "ThanhIsHere```";
//xóa thuộc tính
delete worker1.age;

console.log(worker1);

/*
{lname: 'ThanhIsHere```', point: 10, showInfor: ƒ}
lname: "ThanhIsHere```"
point: 10
showInfor: ƒ showInfor()
[[Prototype]]: Object
*/

//  1.  object.assign()
//          merge object
//      có rồi thì ghi đè, chưa có thì thêm zo

var person1 = {
    lname: "Thanh",
    age: 20,
    job: ["s","coder"]
}
var person2 = {
    lname: "Thor",
    age: 18,
    company: "OceanFresh",
}
var person3 = Object.assign(person1, person2);
console.log(person3);
console.log(person1 == person3);//  true
//Object.assign đó là person1 đang thay đổi 
//person1 và person3 là 2 chàng trỏ 1 nàng
//việc merge như này là shallow copy
person3.job.push("Drive");
console.log(person1);
//spread Operator: để merge | cũng là shallow copy
person3 = {...person1, ...person2};
person3.job = [...person3.job];
person3.job.push("Đua xe");
console.log(person1);
console.log(person1 == person3);

var result;
//Object.keys() //   trả ra mảng các key của object
result = Object.keys(person3);
console.log(result);

//Object.values() // trả ra mảng các values của object
result = Object.values(person3);
console.log(result);

//for-in: lặp object