//06-PrototypeMethod-ObjectWithoutProto
//các phương thức của prototype và nếu object k có prototype thì sẽ như thế nào
//mình đang code ở thời đại 2021 rồi, mình biết _proto_ là gì, xài như nào, nhưng
//  hãy xem như nó đã bị loại bỏ rồi, giờ mình dùng các method khác 
//Object.create(proto, [descriptor]) - tạo 1 object rỗng với việc cung cấp proto như một [[Prototype]]
//                                          và tùy chọn các bộ mô tả thuộc tính property descriptor
//Object.getPrototypeOf(obj)         - return về [[Prototype]] của object
//Object.setPrototypeOf(obj,proto)   - set [[Prototype]] của object thành proto

let animal = {
    eats: true,

};

//muốn try cập vào [[Prototype]] dùng __proto__
console.log(animal.__proto__ == Object.prototype);// true

let rabbit = {
    // __proto__ : animal,
    
    jumps: true,

};

let rabbit1 = Object.create(animal);
rabbit1.jumps = true;

console.log(rabbit1.eats); // true

console.log(rabbit1.__proto__ === animal);// true
console.log(Object.getPrototypeOf(rabbit1) === animal); //true

//set [[Prototype]]
//giả sử ta xét cho [[Prototype]] của rabbit  thành rỗng
// rabbit.__proto__ = {};
Object.setPrototypeOf(rabbit1, {});
console.log(rabbit1);

//ngoài cách viết kế thừa __proto__ như trên
//ta có thể viết tắt như sau
rabbit1 = Object.create(animal, {
    jumps:{
        value: true,
        writable: true,
        enumerable: true,
        configurable: true,
    },
});

//giờ ta có con rabbit 
//nếu như giờ ta muốn clone lại nó
// rabbit1 = Object.create(animal);

//cách clone 1
console.log(rabbit1);
let objClone = {...rabbit1};
//không lấy được cờ mà còn không clone được [[Prototype]]
console.log(objClone);

//cách clone 2
objClone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(rabbit1));
console.log(objClone);
//lấy được bộ cờ nhưng không lấy được [[Prototype]]

//cách clone 3
objClone = Object.create(Object.getPrototypeOf(rabbit1), Object.getOwnPropertyDescriptors(rabbit1));
//lấy được cả cờ cả [[Prototype]]
console.log(objClone);

//------------------------------------
/*
Như đã thấy thì chúng ta có nhiều cách để quản lý [[Prototype]]. Nhiều cách để làm cùng 1 thứ. Tại sao? Sau đây là nguyên nhân lịch sử

Thuộc tính prototype của constructor function đã có từ xa xưa
Sau đó, vào năm 2012, Object.create xuất hiện trong JS tiêu chuẩn. Nó cung cấp khả năng tạo một object với một prototype được cung cấp, nhưng không cung cấp khả năng get/set nó. Vì thế các trình duyệt thêm một thuộc tính "không thuộc JS tiêu chuẩn" là _proto_ để cho phép người dùng có thể get/set một prototype bất cứ lúc nào.
Sau đó, vào năm 2015, Object.setPrototypeOf và Object.getProtypeOf được thêm vào JS tiêu chuẩn, để thực hiện chức năng tương tự như __proto__.
Tại sao __proto__ bị thay thế bởi các hàm getPrototypeOf/setPrototypeOf? Đây là một câu hỏi thú vị, đòi hỏi chúng ta phải hiểu tại sao __proto__ khá tệ. Đọc thêm để biết câu trả lời. "very plain Object" để hiểu rỏ tại sao nó tệ

Đừng thay đổi [[Prototype]] trên các object đang tồn tại nếu quan tâm đến vấn đề tốc độ Về mặt kỹ thuật, chúng ta có thể get/set [[Prototype]] bất kỳ lúc nào. Nhưng thường thì chúng ta chỉ set một lần khi object khởi tạo và không thay đổi nó nữa: rabbit kế thừa từ animal, và nó sẽ không thay đổi.

Và các Javascript engine được tối ưu hóa cao cho việc này. Thay đổi một prototype "đang hoạt động" với Object.setPrototypeOf hoặc obj.__proto__= là một phép tất rất chậm bởi vì nó phá vỡ sự tối ưu hóa nội bộ cho các hoạt động truy cập đến thuộc tính object. Vì thế tránh sử dụng nó nếu bạn không biết nó làm gì, hoặc tốc độ Javasript không phải là vấn đề bạn quan tâm.
*/

//very plain Object - Object siêu phẳng | base Object 
//String không thể trở thành 1 prototype được 
obj = {};
let key = prompt("nhập vào key", " __proto__");
obj[key] = " giá trị bất kỳ nào đó";
console.log(obj);
// __proto__ chỉ có thể là null hoặc object dạng bth, chứ không thể là 1 String


//---------------------
//trường hợp này thì k có nhiều hậu quả, nhưng nếu mình làm trong 
//dự án lớn __proto__([[Prototype]]) bị thay đổi như vậy rất dể
//mang đến những kết quả sai lệch không mong muốn
//vậy làm sao cho người dùng nhập proto vẫn được, nhưng k thể sửa đỗi
// ta có 2 cách
//1.Map
// //2.Tạo object không có [[Prototype]](_proto_) và sau đó set lại
// let newObj = Object.create(null) //không truyển vào đây prototype của thằng nào cả|VERY PLAIN OBJECT - object siêu phẳng
// //1 object không có bất cứ thứ gì-Base Object
// let key = prompt("Nhập vào key",'_proto_')
// newObj[key] = 'giá trị bất kỳ nào đó'
// console.log(newObj)
// //lúc này nó xem _proto_ là 1 key bình thường, chứ k phải _proto_ đại diện cho [[Prototype]]
// //vì là base Object : nên nó k có thứ gì bên trong kể cả toString
// //thế nên khi ta alert(newObj) ta sẽ bị lỗi, vì bth alert sẽ âm thầm gọi toString()
// alert(newObj)//error

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/* 
Tóm lại
Các phương thức hiện đại để setup và truy cập trực tiếp vào prototype là:

Object.create(proto, [descriptors]) - Tạo một object rỗng với việc cung cấp proto như [[Prototype]] và tùy chọn là các bộ mô tả thuộc tính (property descriptors)
Object.getPrototypeOf(obj) - return về [[Prototype]] của obj
Object.setPrototypeOf(obj, proto) - set [[Prototype]] của obj thành proto
getter/setter bằng _proto_ thì không an toàn nếu chúng ta muốn người dùng tự tạo key cho object. Bởi vì nếu người dùng nhập "_proto_" như là key, và nó sẽ gây ra lỗi, và đôi khi sẽ gây ra các kết quả không mong muốn.

Vì thế chúng ta có thể sử dụng Object.create(null) để tạo một "very plain" object mà không có __proto__, hoặc chuyển qua Map object.

Cũng như Object.create cung cấp một cách dễ dàng để shallow-copy một object với tất cả descriptor (bộ mô tả)

let clone = Object.create(
  Object.getPrototypeOf(obj),
  Object.getOwnPropertyDescriptors(obj)
)
Chúng ta cũng cần rõ ràng là _proto_ là getter/setter cho [[Prototype]] và nằm trong Object.prototype, như là các phương thức khác.

Chúng ta có thể tạo một object mà không có prototype bằng cách Object.create(null). Những object như vậy được sử dụng như là "pure dictionaries", chúng không có vấn đề gì với key "_proto_".

Các phương thức khác:

Object.keys(obj) / Object.values(obj) / Object.entries(obj) – Trả về một mảng về keys/values/cặp key-values (chỉ các thuộc tính có thể đếm)
Tất cả các phương thức mà return về thuộc tính object (như Object.keys và một số khác) - chỉ return về thuộc tính của nó. Nếu chúng ta muốn các thuộc tính mà nó kế thừa, chúng ta có thể sử dụng for...in
*/





















































