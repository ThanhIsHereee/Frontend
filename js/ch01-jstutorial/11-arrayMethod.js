"use strict"    
console.log("Bài 11 : Array Method");
//mảng trong JS không nhất thiết phải cùng kiểu dữ liệu
var arr1 = [1, 2, "a", {lname:"Hẹo", age: 18,}, [3, 5]];

//  1.  cách lấy phần tử trong mảng
console.log(arr1[3]);// {lname:"Hẹo", age: 18,}
//array là mutable: là method gây ảnh hưởng lên đối tượng
arr1[3] = "ThanhIsHereee";
console.log(arr1);//    [1, 2, 'a', 'ThanhIsHereee', Array(2)]

//  2. length(): lấy ra độ dài của array
console.log(arr1.length);// 5

//  3.  isArray() hoặc instanceof Array để nhận biết 1 biến có phải array không
console.log(arr1.isArray);//undefine
console.log(arr1 instanceof Array);//true

//  4.  toString(): biến mảng thành chuỗi kèm ','
var workerList = ["Huệ","Lan","Thanh"];
var str1 = workerList.toString();
console.log(str1);

//  5.  demo split: băm và join: nối
var title = "xin chào các bạn"
//title => 'xin-chào-các-bạn'
str1 = title
            .split(" ")
            .filter((item) => item != "")
            .join("-");
console.log(str1);

//chèn phần tử
//  6.  push(): nhét phần tử vào cuối | return ra độ dài mới
workerList = ["Huệ","Lan","Thanh"];
var result = workerList.push("Thơ");//  mutable
console.log(workerList, result);//['Huệ', 'Lan', 'Thanh', 'Thơ'] 4

//  7.  pop(): xóa phần tử cuối | return đối tượng đã xóa
result = workerList.pop();// mutable
console.log(workerList, result);//['Huệ', 'Lan', 'Thanh'] 'Thơ'

//  8.  unshift(): thêm phần tử vào đầu | return độ dài mới
result = workerList.unshift("Thơ");// mutable
console.log(workerList, result);//['Thơ', 'Huệ', 'Lan', 'Thanh'] 4

//  9.  shift(): xóa phần tử đầu | return phần tử bị xóa
result = workerList.shift();// mutable
console.log(workerList, result);//['Huệ', 'Lan', 'Thanh'] 'Thơ'

//  10. delete array[index]
//          xóa phần tử của array tại vị trí index
//              để lại khoảng trống ở vị trí
//              nếu mà truy cập vào vị trí đó sẽ log ra undefined
//  ['Huệ', 'Lan', 'Thanh', 'Thơ']
//      delete array[3] = ['Huệ', 'Lan', , 'Thơ'] => array[3]: undefined

//  11. splice(index, sl cần xóa,...phần tử cần thêm)
//          thêm hoặc xóa nhiều phần tử ở vị trí mình muốn
//          return về mảng  các phần tử đã xóa

//splice: vừa thêm vừa xóa
workerList = ['Huệ', 'Lan', 'Thanh', 'Thơ'];
result = workerList.splice(1, 1,"Hoàng", "Trinh");
console.log(workerList, result);//  ['Huệ', 'Hoàng', 'Trinh', 'Thanh', 'Thơ'] ['Lan']

//splice: thêm không xóa
workerList = ['Huệ', 'Lan', 'Thanh', 'Thơ'];
result = workerList.splice(1, 0,"Hoàng", "Trinh");
console.log(workerList, result);

//splice: xóa không thêm
workerList = ['Huệ', 'Lan', 'Thanh', 'Thơ'];
result = workerList.splice(1, 1);
console.log(workerList, result);

//  12. splice: lấy ra đoạn giữa giống String
//  13. concat(): nối mảng giống str
var workerBoy = ["Thanh", "Hùng", "Khánh"];
var workerGirl = ["Huyền", "Yến", "Tâm"];
workerList = workerGirl.concat(workerBoy, "Tâm", ["Phú", "Đại"]);
console.log(workerList);
//['Huyền', 'Yến', 'Tâm', 'Thanh', 'Hùng', 'Khánh', 'Tâm', 'Phú', 'Đại']

//  14. spread operator: destructuring: phân rã     ...[1, 2, 3, 5] => 1, 2, 3, 5
workerList = [...workerGirl, ...workerBoy];
//người a gọi là shallow copy
console.log(workerList);//['Huyền', 'Yến', 'Tâm', 'Thanh', 'Hùng', 'Khánh']


//  15. forEach(callbackFunction): lặp qua từng phần tử trong mảng
//          callbackFunction có 3 đối số
//              value, index, array

arr1 = [1, 2, "t", "Thanh"];
arr1.forEach((value, index, array) => {
    console.log(value, index,array);
});

//  16. map(callback funct) : tạo ra mảng mới bằng khả năng tính toán từng phần tử
arr1 = [2, 5, 7];
arr1 = arr1.map((item) => item * 3);

console.log(arr1);

//  17. filter(): lọc theo 1 function
arr1 = [1, 2, 3, 4, 5];
arr1 = arr1.filter((item) => {
    return item % 2 == 0;// 2   4    
});
console.log(arr1);// 2   4  

//  18. find(callbackFunction): trả về value nào thỏa điều kiện của callback Function đầu tiên
//                              nếu không tìm được return undefined
arr1 = [1, 2, 3, 4, 5];
arr1 = arr1.find((item) => {
    return item % 2 == 0;// 2       
});
console.log(arr1);//2

//  19. findIndex(callbackFunction): return index tìm được 
//                                      nếu không return -1
arr1 = [1, 2, 3, 4, 5];
arr1 = arr1.findIndex((item) => {
    return item % 2 == 0;// 2       
});
console.log(arr1);//1

//  20. indexOf()
//          find()
//          findIndex()

//  21. every() giống thằng ALL trong DBI
//                  tất cả thỏa điều kiện => true
//                  chỉ cần 1 thằng không thỏa => false
arr1 = [1, 2, 3, 4, 5];
arr1 = arr1.every(item => {
    return item >= 1;
});
console.log(arr1);//    true

//  22. some(): giống thằng in trong DBI
//                  chỉ cần 1 phần tử thỏa => true
//                      tất cả phần tử không thỏa => false
arr1 = [1, 2, 3, 4, 5];
arr1 = arr1.some(item => {
    return item >= 7;
});
console.log(arr1);//    false

//  23. includes(): tìm xem value có tồn tại trong mảng hay không return true || false
arr1 = ['Huệ', 'Lan', 'Thanh', 'Thơ'];
result = arr1.includes("Hồng");
console.log(result);//  false

//  24. reverse(): đảo ngược mảng

//  25. sort(): sắp xếp
//      1. String
arr1 = ['Huệ', 'Thanh', 'Thơ', 'Lan'];
arr1.sort().reverse();
console.log(arr1);

/*
sort(): nó thuộc nhà String nên nó xem như đang sort String
cần dạy nó cách sort
*/

//      2.  Number
arr1 = [1, 225, 3, 43, 35];
arr1.sort((a, b) => a - b);
console.log(arr1);//    [1, 3, 35, 43, 225]

//  26. reduce()
//      nếu map là thay đổi từng phần tử theo một công thức nào đó
//      thì reduce dồn các phần tử bằng một công thức
arr1 = [1, 3, 35, 43, 225];
result = arr1.reduce((total, current, currentIndex) => {
    return total + current;
}, 0);//    initalValue

console.log(result);//  304
//initalValue: nếu quên thì tự có 0

//reduce biến mảng thành object
arr1 = ["Thanh", 20, 2];

var newObject = arr1.reduce((total, current, currentIndex) => {
    total[currentIndex] = current;
    return total;
}, {});

console.log(newObject);









