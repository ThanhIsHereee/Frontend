//09-private-property-method
//Access modifier: là đại diện của tính đóng gói trong OOP của JS

// trong JS chỉ ra 2 dạng prop
//  Internal và External Interface
//  Internal Interface: những prop hay method chỉ có thể truy cập bên trong các method của class
//      không phải từ bên ngoài
//  External Interface: những prop hay method có thể truy cập bên trong lẫn bên ngoài của class

//trong JS có 2 loại thuộc tính và phương thức
//  Public: có thể try cập ở bất cứ đâu
//  Private: có thể truy cập nội bộ class
// trong nhiều ngôn ngữ OOP khác còn có "Protected": chỉ class con được truy cập
// nhưng các dev sẽ tự quy ước với nhau ở cấp độ ngôn ngữ 

//ReadOnly
//  tạo get mà không tạo set
// các dev sẽ quy ước tên có "_" ở trước là private, và sẽ phải dùng getter setter
// --- đây là quy ước không phải là thực

class CoffeMachine{
    constructor(power){
        this._power = power;
    }
    get (power){
        return this._power;
    }
}
let cfm = new CoffeMachine(100);
// cfm.power = 50; // không hề có set
cfm._power = 50; // phải làm như này
//nếu em truy cập như này để set giá trị thì em đã vi phạm quy tắc
console.log("Power: " + cfm.power);

//thực tế các dev thích xài getter và setter giống JAVA
//hơn là getter và setter của JS | vì nó đa năng, nhận nhiều tham số

//private được đảm bảo về mặt ngôn ngữ so với ReadOnly và protected
//đối với privated ng ta còn dùng dấu "#" 
class CoffeMachine1{
    #waterLimit = 200;
    #fixWaterAmount(value){
        if(value < 0) return 0;
        if(value > this.#waterLimit) return this.#waterLimit;
    }
    setWaterAmount(value){
        this.#waterLimit = this.#fixWaterAmount(value);

    }
}

let cfm1 = new CoffeMachine1();
// cfm1.#fixWaterAmount(123);
// cfm1.#waterLimit(321);
























