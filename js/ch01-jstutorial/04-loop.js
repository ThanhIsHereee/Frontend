console.log("bài 5: vòng lặp - LOOP");
//reuse : dùng lại | repeat : lặp lại
/*
while | do-while | for
*/
var student1 = {name:"Thanh", point:8, major:"SE"};
// student = {name:"ThanhIsHereee", point: 9, major:"SE"};
//              thuộc tính | property | entry
//              key: value
//For-in: lặp các key trong value
for (const/* dùng let cũng được */ key in student1) {
    console.log(key);
}
console.log(student1['name']);
console.log(student1.name);

var array1 = [12, 17, 19];
console.log(array1[1]);
//duyệt array bằng for
for (const key in array1) {
    console.log(key + " " + array1[key]);
}

//For-in sõ vô dụng với set
//                      set là một tập giá trị không lặp lại
let set1 = new Set(['a', 'b', 'c', "a", "d"]);
//a | b | c | d - nó đã tự động loại trừ các phần tử tử trùng nhau
//                  nên thứ tự của nó sẽ không có định => không có key => For-in không dùng được
for (const key in set1) {
    console.log(set1);
}

//For-of : chuyện mục value
let workerList = ['Điệp', 'Lan', 'Huệ', 'Lan'];
for (const x in workerList) {
    console.log(x);
}
/*0 1 2 3 */

for (const x of workerList) {
    console.log(x);
}

//array là object nhưng không phải là object phẳng

//For-of không chơi với object phẳng
// var object1 = {a:1 , b:2, c:3 };
// for (const x in object1) {
//     console.log(x);//TypeError: object1 is not iterable
// }
//iterable : tính khả lập


//For-each: Fore: lặp value && key(index)
['a', 'b', 'c'].forEach(item => {
    console.log(item);
});

['a', 'b', 'c'].forEach((val) => {
    console.log(val);
});

['a', 'b', 'c'].forEach((index, val) => {
    console.log(val + " " + index);
});
