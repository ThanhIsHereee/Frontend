// "use strict"
console.log('Bài 10 : String Method');
//chuỗi trong js được bọc bàng '' || ""(rcm)
//method in String
//1. length() // return độ dài chuỗi
let str = "ThanhIsHereee";
console.log(str.length);
//2.    indexOf() // vị trí đầu tiên của từ hoặc chuỗi trong chuỗi
console.log(str.indexOf('a'));
console.log(str.indexOf('e'));
console.log(str.indexOf('st'));
console.log(str.indexOf('ere'));
//I.   tách chuỗi
//  1. slice(start, end): retur đoạn từ start đến end - 1
var x = "helauuu, ThanhIsHereee";
console.log(x.slice(3, 11));

// cắt ngược
console.log(x.slice(-13, -1));

//cắt thiếu parameter
console.log(x.slice(9));

//cắt thiếu parameter chiều ngược
console.log(x.slice(-13));

//  2. subString(start, end) //giống cách xài của slice nhưng nó chiều ngược
//  3. subStr(start, length) //return ra chuỗi bắt đầu từ start dài bằng length
console.log(x.substr(9, 13));// từ vị trí số 9, cắt 13 phần tử

//II.   các method phổ biến
var str1 = "Piedteam có giá học phí rẻ và chất lượng, rẻ nhưng rẻ";
//  1. replace(old, new) return 1 Str thay old bằng new thay old bằng new
console.log(str1.replace("rẻ", "thấp"));// chỉ thay được old đầu tiên thành new
console.log(str1.replaceAll("rẻ", "thấp"));// that được tất cả các old thày new

//  2.  chuyển đổi hoa thường:  .toUpperCase()  .toLowerCase()
//  3.  concat(): nối chuỗi
str1 = "xin chào";
str2 = "PiedTeam";
str3 = str1.concat(" ", "mừng bạn đến với", " ", str2);
console.log(str3);  

//  4.  trim(): xóa khoảng cách 2 đầu chuỗi
str1 = "          Ha    lâuuuuu      ";
str1 = str1.trim();
console.log(str1);
str1 = "          Ha    lâuuuuu      ";
// str1 = str1.replace(/\s+/g, " ").trim();
// console.log(str1);

str1 = str1
            .split(" ")//   băm nhỏ
            .filter((item) => item != "")// lọc các thằng""
            .join(" ");//   nỗi lại bằng " "

console.log(str1);//    Ha lâuuuuu

//  5.  so sánh chuỗi == | ===

//  6.  charAt(index) hoặc [], return ký tự ở vị trí index
str1 = "ThanhIsHereee";
console.log(str1.charAt(4));//h
console.log(str1[6]);//s
str1[6] = "h";// không lỗi là không chạy luôn
console.log(str1);

//String là immutable: string không bị tác động. method của String chỉ tạo ra
//String mới