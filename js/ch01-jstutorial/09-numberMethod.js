console.log("Bài 9: number - method");

//số trong js chỉ có kiểu number mà thôi
//số nguyên độ chính xác chỉ đến 15 số

var x = 999999999999999;
x = 9999999999999999;
//giới hạn của số thập phân là 17 số
x = 0.2 + 0.1;
x = (0.2*10 + 0.1*10)/10;
// console.log(x);

//làm tròn
x = 0.2 + 0.1;

console.log(Number(x.toFixed(1)));
// .toFixed trả ra số đã làm tròn dưới dạn chuỗi
//wrapper constructor Number ép về số
//Math.js (npm i mạt)

console.log(2 + 2);//4
//số + số = số
console.log(2 + '2');//22
//số + chuỗi = chuỗi
console.log(4 - 2);//2
//số - số = số
console.log(4 - '2');//2
//số - chuỗi = số
console.log(4 - 'a');//NaN
console.log(NaN == NaN);//false
console.log(2/0);//infinity | => typeof number
console.log(-2/0);//-infinity | => typeof number

x = 07;//hệ octal
x = 0xff;//hệ hexa 16

//ép số thành chuỗi
x = String(2002);
x = 2002;
x.toString();

//ép kiểu về số
//Number() | parseInt() | parseFloat()

