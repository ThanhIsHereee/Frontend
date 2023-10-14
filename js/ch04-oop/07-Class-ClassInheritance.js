//07-Class-ClassInheritance
//Constructor function giúp ta tạo ra nhiều object cùng loại
//nay phát triển tiếp ra class với nhiều tình năng hơn, tiện hơn

//tạo ra cái khuôn (class) tên là user
class User {
    constructor(fullName){
        [this.firstName, this.lastName] = fullName.split(" ");
    }
    //method
    show(){
        console.log(
            `FirstName của tui : ${this.firstName}, LastName của tui : ${this.lastName}`
        );
    }
}

//tạo ra một user tên Thanh
let thanh = new User("Thanh NQ");
console.log(thanh);
thanh.show();//FirstName của tui : Thanh, LastName của tui : NQ

//trong Object thanh có gì? 
//      có property: firtsName và lastName
//  firtsName và lastName được tạo trước dòng 19 hay sau dòng 19 => chạy xong dòng 19 là có
//[[Prototype]]  == User.prototype == class User
//trong class User có gì? : constructor và method show
//nên thanh có thể dùng method show()

//trong JS class được định nghĩa là 1 function đặc biệt
console.log(typeof User);//function
console.log(User === User.prototype.constructor);//true
console.log(User.prototype);//class User (constructor | show)

//thông thường các dev thích dùng __proto__ | prototype để kế thừa
//class là cách dùng khác của họ "syntactic sugar" 
//      cú pháp kẹo đường => việc thay đổi syntax cho dễ tiếp cận với người mới

//bởi vì ngày xưa họ dùng constructor độc lập chứ không dùng class
//------- viết lại student nhưng không dùng class mà dùng constructor
function Student(fullName){
        [this.firstName, this.lastName] = fullName.split(" ");
    //method
    this.show = function(){
        console.log(
            `FirstName của tui : ${this.firstName}, LastName của tui : ${this.lastName}`
        );
    }
}

Student.prototype.show = function(){
    console.log(
        `FirstName của tui : ${this.firstName}, LastName của tui : ${this.lastName}`
    );
};
let thanhStudent = new Student("Thanh Nguyễn");
console.log(thanhStudent); 

//vậy khác gì giữa object  được tạo từ class và object được tạo từ function constructor
//1. constructor tạo được object mà k cần toán tử new
// let huong = User("Hương Lan");
let huong = Student("Hương Nguyễn");
console.log(huong);

//2. User và Student trong hiển thị 
console.log(User);
console.log(Student);

//3. code bên trong Class luôn use Strict
//      tức là không có hoisting

//4. cách tạo class mà bạn vừa mới toa ở trên là class declaration
//  class Expression

Student = class ahihi{
    constructor(fullName){
        [this.firstName, this.lastName] = fullName.split(" ");
    }
    //method
    show(){
        console.log(
            `FirstName của tui : ${this.firstName}, LastName của tui : ${this.lastName}`
        );
    };
};
//ahihi là tên có thể dùng trong phạm vi body của Student


/*Biểu diễn*/
//tạo ra 1 cái function dùng để tạo class

function makeClass () {
    // tạo ra class bên trong này sau dó return ra ngoài 
    //ai gọi makeClass thì sẽ  nhận được class này
    class ahihi{
        constructor(name){
            this.name = name;
        };
        show(){
            console.log("tên tui là : " + this.name);
        };
    }
    return ahihi;
};


let User3 = makeClass();

thanhh = new User3("thanh 10");
thanhh.show();//tên tui là : thanh 10

//Cảnh giác với this trong class
class Button{
    constructor(value){
        this.value = value;
    }
    click(){
        console.log("Giá trị là " + this.value);
    }
}

let btn = new Button("Ahihi");
//btn
//  value: "Ahihi"
// [[Prototype]] : Button.prototype => class
btn.click();//Giá trị là Ahihi

//điều gì xảy ra nếu dừng click trong callback
// setTimeout(btn.click, 1000);//giá trị là undefine
setTimeout(() => {
    btn.click();
}, 1000);//giá trị là Ahihi

//vd2: bind //* không khuyến khích làm cách này
//      đem giá trị vào hàm và return hàm mới dùng giá trị đó
class Button1 {
    constructor(value){
        this.value = value;
        this.click = this.click.bind(this);
    }
    click(){
        console.log("Giá trị là " + this.value);
    }
}
btn1 = new Button1("ahuhu");
setTimeout(btn1.click, 1000);//Giá trị là ahuhu

//vd3: //* không khuyến khích làm cách này
//      
class Button2 {
    constructor(value){
        this.value = value;
        this.click = this.click.bind(this);
    }
    click = () => {
        console.log("Giá trị là " + this.value);
    }
}
btn2 = new Button2("Ahehe");
setTimeout(btn2.click, 1000);//Giá trị là Ahehe

// class ClassInheritance : kế thừa thông qua class
//ngày xa xưa, khi mà loài lập trình viên vứa biết JS 
//thì ngài JS chỉ cho học constructor để tạo object 
//họ kế thừa các constructor bằng prototype 

//về sau khi có đông thần dân, JS cho ra class
// "sugar syntax" cú pháp kẹo đường
//      để việc kế thừa trở nên dễ hơn thông qua keyword "extends"

//
class Animal {
    constructor(name){
        this.name = name;
        this.speed = 0;
    }
    //method
    run(speed){
        this.speed = speed;
        alert(`${this.name} runs with speed ${this.speed}`)
    }
    stop(speed){
        this.speed = 0;
        alert(`${this.name} stands still`)
    }
}
let ani = new Animal("My Animal");
//ani có gì ?
//      name: "My Animal"; | speed: 0; | [[Prototype]]: Animal.prototype => Class Animal
class Rabbit extends Animal{
    constructor(name){
        super(name);// supper này nghĩa là new Animal
    }
    hide(){
        alert(this.name + " hides!!!");
    }
} 

let rabbitYellow = new Rabbit("Yellow Rabbit");
rabbitYellow.hide();//Yellow Rabbit hides!!!
rabbitYellow.run(5);//Yellow Rabbit runs with speed 5
// ani.hide(); //

//trong rabbitYellow có gì?
//rabbitYellow
//  name: "Yellow Rabbit";
//  speed: 5;
//  rabbitYellow.[[Prototype]]: Rabbit.prototype => class Rabbit
//  class Rabbit.[[Prototype]]: Animal.prototype => class Animal
//  class Animal.[[Prototype]]: Object.prototype => class Object
//  class Object.[[Prototype]]: null

class Rabbit1 extends Animal {
    //stop
    stop(speed){
        setTimeout(() => {
            super.stop();
        },2000)
    }
}

//trong Animal có method stop
//trong Rabbit1 cũng có method stop
//hỏi trong Rabbit1 có mấy method stop
//khi 1 Object được tạo ra Rabbit thì nó sẽ dùng method Stop của ai?
//
let rd1 = new Rabbit1("tb Ahihi");
rd1.stop();

//class field
class Animal2 {
    name = "IsAnimal";//class field 
    constructor(){
        alert(this.name);
    }
}

class Rabbit2 extends Animal2{
    name = "isRabbit";//class field
}
let ani1 = new Animal2();// truy cập vào thuộc tính name của cha
let rb2 = new Rabbit2();// truy cập vào thuộc tính name của ai ? => cha
// class field nó không kế thừa, k vượt mặt,không hề có override
//  (nếu là class field thì trong 1 object k hề có 2 thuộc tính trùng tên)
//  class field nó ghi đè ovewrite/ cái giá trị "isRabbit" đã đè lên "isAnimal"



































