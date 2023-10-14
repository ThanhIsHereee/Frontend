//03-Prototypal-Inheritance
// Prototypal Inheritance : kế thừa nguyên mẫu
// [[Prototype]]
// trong js 1 số thuộc tính ẩn trong obj được gọi là [[Prototype]]
//          dù bị ẫn nhưng có nhiều cách sử dụng nó 
//          một trong những cách dùng là thông qua getter và setter là __proto__
//          vd: tạo object rabbit kế thừa object animal

//
//sự kế thừa nguyên mẫu
// [[Prototype]] => __proto__
//   kế thừa này cho phép 2 Object kế thừa nhau

let congido = {
    eats: true,
    walk(){
        console.log("Tạo chạy bộ nè");
    },
};

let rabbitPink = {
    jumps: true,

};
let longEar = {
    ear: "Long",
    __proto__: rabbitPink,//điều này đồng nghĩa với việc set longEar.[[Prototype]] = rabbitPink
                                        //longEar kế thừa rabbitPink
};
rabbitPink.__proto__ = congido;//set rabbitPink.[[Prototype]] = congido

console.log(longEar.jumps);
console.log(longEar.eats);

//nếu như gốc thay đổi thì nhanh trên ăn theo
congido.height = 10;
console.log(longEar.height);//10
longEar.height = 7;
console.log(longEar.height);//7
console.log(congido.height);//10

//Lưu ý với __proto__
/* trước es6(2015) không có cách chính thống nào truy vào prototype của 1 object
   vậy nên hầu hết các trình duyệt đều thêm vào 1 accessor property(get/set) được gọi là __proto__
   __proto__ không phải thuộc tính của [[Prototype]] mà là getter và setter của nó
   __proto__ tính đến năm 2021 thì đang được loại bỏ, k còn khuyên dùng nữa
                nhưng vẫn còn giữ lại trên 1 số lý do chưa cập nhật/ hay gì đó ai biết :))
    chúng ta nên thay thế nó bằng Object.getPrototypeOf()/ Object.setPrototypeOf() (ES6)
*/

let Student = {
    lastName: "Thanh",
    firstName: "Nguyễn",
    //getter : dùng để lấy giá trị
    //accessor property
    get fullName(){
        return this.firstName + " " + this.lastName;
    },
    //setter : dùng để thay đổi giá trị
    //accessor property
    set fullName(newName){
        [this.firstName, this.lastName] = newName.split(" ");
    },
};

let user = {
    isUser: true,
    __proto__: Student,

};
user.fullName = "khủng lonk";
console.log(user);
console.log(Student);