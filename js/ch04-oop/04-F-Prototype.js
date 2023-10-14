//04-F-Prototype
//trong JS ng ta thích dùng functions hơn là class
//bên JAVA nếu muốn tạo 1 Object(tượng) em phải thông qua class(khuôn)
//bên JS : ta có constructor độc lập 
//tức là 1 function dùng để tạo object (mà không cần đến class bọc nó)
function car (name, price){
    this.name = name;
    this.price = price;
}

let factory = {
    date: 2021,
    
}

let audi = new car("Audi", "2 ty? 3");
//nhờ vào constructor (phễu) tạo ra 1 chiếc xe audi 2 ty? 3
//trong constructor car có gì?
//nó có 
        /*
            this.name = name;
            this.price = price;
            prototype
        */
//trong prototype có gì?

console.log(audi);
//đối với các Object được tạo bằng constructor hay class
//ta có thể kế thừa bằng .prototype của constructor
console.log(audi.date);
car.prototype = factory;
console.log(audi.date);

let toyota = new car("Toyota", "200");
console.log(toyota.date);//2021


///////////////////////////////////////////////////////////////////////////////////////////////////
//F.prototype mặc định , thuộc tính constructor
// mỗi function đều có thuộc tính prototype ngay cả khi chưa gán hoặc cung cấp 
//      prototype mặc định là 1 object chứa thuộc tính là constructor trỏ ngược lại contructor function đó

function Animal(name){
    this.name = name
    /*
        prototype == class Animal{
            contructor
        }
    */
}

//ngta gọi contructor hay class đều là animal 
console.log(Animal.prototype) //Animal{}
console.log(Animal.prototype.constructor === Animal) //true
//nên nếu như có 1 object đc tạo ra từ constructor function này thì nó sẽ có constructor
//                                                                  của prototype
let dog = new Animal();
console.log(dog)
console.log(dog.constructor)//func Animal
console.log(dog.constructor === Animal)//*true

//vậy tức là mỗi 1 object đều có constructor 
//vậy ta có thể tạo ra 1 object tương tự object dog từ constructor mà dog có
let cat = new dog.constructor('kyky');
console.log(cat.constructor)//*Animal
console.log(cat)//*Animal {name: 'kyky'}


//NHƯNG: js không đảm bảo đúng constructor mà ta cần
//nếu như ta thay thế prototype thì nó k còn là constructor nữa
// Animal.prototype = {
//     jump: true
// }











































































































































