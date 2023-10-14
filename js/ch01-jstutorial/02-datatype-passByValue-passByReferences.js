console.log("Bài 2: kểu dữ liệu - truyền tham trị - truyền tham chiếu");
// I-1 primitive datatype : nguyên thủy
//      Number
//      String
//      boolean
//      NULL (rỗng\biết kiểu nhưng không biết giá trị)
//      undefine(rỗng\không biết cả kiểu cũng như giá trị)
//      Symbol (ES6) 
//  null và undefine: khác nhau như nào?
console.log(typeof null);//OBJECT, nhưng không xếp vào 
                                    //object mà là primitive
console.log(typeof undefine);//undefine

console.log(null == undefine); // true
console.log(null === undefine); // false

//==: là so sánh giá trị
//===: là so sánh giá trị và kiểu

//undefine trong thuộc tính của object
let thanh = {name:'Thanh', height:'183cm'};
console.log(thanh.nguoieu);//undefine

//undefine trong parameter của function
function handle1(a, b){
    return b;
}

let c = handle1(2);
console.log(c);//undefine

//function mà không return thì trả ra undefined

// *NULL
let str = '';// gọi là chuỗi rỗng
str = null;//này gọi alf rỗng (Object) nhưng là là primitive

//null và undefine thì sẽ không có thuộc tính
// let object1 = undefine;
// object1.name;//lỗi | rỗng k có gì mà đọc hết

// I.2 Object datatype: khác primitive
// Plane Object : object phẳng

let student = {name:"Thanh", point: 8};
//              thuộc tính \ property \ entry
//              key : value

//Array: là cách khai báo nhiều biến, cùng tên, cùng thời điểm
//          liền kề, san sát nhau
var flw = ["ROSE",1];
// Array là OBJECT

//regular expression : regex là object
var regex1 = /ad+c/;
//regex1 là object

//function typeOf là function nhưng nó thuộc object
console.log(typeof handle1);// function
// *      function được coi là object
// *null typeof Object nhưng kiểu là primitive
// *NaN typeof Number nhưng NaN == number => false
console.log(typeof NaN);//number
console.log(NaN == number);//false

//tất cả các cách khai báo primitive đều dùng constructor
//Wrapper Class : class trai bao
var str1 = 'không có gì hết'
console.log(str1); //không có gì hết
str1 = new String ("không có gì hết");
console.log(str1);//String

console.log(str1 === "không có gì hết");
console.log(str1.valueOf() === "không có gì hết");
//.valueOf() lấy cái core trong hộp
console.log(str1 == "không có gì hết");//true //auto-unboxing
//==: so sánh châm chước
//===: so sánh khắt khe

//dùng wrapper class constructor để ép kiểu
let year = String(2002);//ép từ số thành String
console.log(typeof year);//String
//
year = Number(2002);//ép từ String thành số
console.log(typeof year);//Number

//bàn riêng về boolean
var isFind = Boolean(2002);//số
console.log(isFind);// true

isFind = Boolean(0);// số
console.log(isFind);// false

isFind = Boolean('0'); // ký tự 0
console.log(isFind);//true

isFind = Boolean('');//chuỗi rỗng
console.log(isFind);//false

isFind = Boolean(" ");// chuỗi có 1 ký tự
console.log(isFind);//true

isFind = Boolean(null);//null
console.log(isFind);// false

isFind = Boolean({});//Object rỗng
console.log(isFind);//true

isFind = Boolean([[]]);//mảng rỗng
console.log(isFind);//true

isFind = Boolean(10/'T');//NaN
console.log(isFind);//false

isFind = Boolean(false);//false
console.log(isFind);//false

//Falsy: đối với JS những gì không chứa giá trị thì đều là false
//null
//undefine
//0 
//-0
//""
//false
//NaN

//Truthy: ngược lại với falsy
//chuỗi khác rỗng
//số khác 0
//Object đều là true

//passByValue: truyền tham trị
let a = 1;
b = a;
b = 2;
console.log(a);//1
console.log(b);//2

//vd2:
let point = 4;
function updatePoint(pointCurrent){
    pointCurrent = 10;
}

updatePoint(point);
console.log(point);

//2. passByReferences: truyền tham chiếu | phép chiếu pi
var boyFr1 = {name:'hotGirl', size:'H CUB'};
var boyFr2 = boyFr1;
boyFr2.size = "E CUB";
console.log(boyFr1);//{name:'hotGirl', size:'E CUB'};

// OPERATOR Toán tử
//trong js có 10 loại toán tử
/*
1  Assignment            gán
2  Comparison            so sánh
3  Arithmetic            toán hạng
4  bitwase               bitwase
5  logical               logic
6  String                chuỗi
7  Conditional(ternary)  ba ngôi
8  Comma                 phẩy
9  Unary                 một ngôi
10 Relational            Quan hệ
*/
// 
// Arithmetic Operator toán tử toán hạng
//  + | - | * | ** | / | % | variable++ | variable-- | ++variable | --variable |
//  không được n++ ++n --n n-- với n là số bất kỳ

// Assignment Operator toán tử gán
//  = | += | -= | *= | **= | /= | %= |
// 

// Comparison Operator toán tử so sánh
//  == bằng giá trị là được (không quan tâm kiểu)


//logic AND(&&) OR(||) !(phủ định kết quả của cả mệnh đề condition)
//  true && false false
//  true && true  true
//  false&& false false
//  true || false true
//  true || true  true
//  false|| false false
//  AND(&&) luôn đi tìm mệnh đề false thấy false là dừng trả ra false 
//                                    thấy 0 là đừng trả ra 0
//  OR(||) luôn đi tìm mệnh đề true thấy true là dừng trả ra true 
//                                    thấy 1 là đừng trả ra 1


