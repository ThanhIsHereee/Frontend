//runtimeError : lõi khi vận hành   | do người dùng
//syntaxError : lỗi sai cấu trúc    | do coder
//lgicError : lỗi sai tư duy        | do coder

//trycatch : dùng để xử lý lỗi phát sinh trùn runtimeError
//nhớ rằng trycatch không vận hành trong syntaxError
// try {
//     sdfbsdb;
//     console.log("nè");
// } catch (error) {
//     console.log("có lỗi nè che");
// }

//trycatch chỉ hoạt động đồng bộ mà thôi
// try {
//     setTimeout(() => {
//         sdfbsdb;
//         console.log("nè");
//     }, 1000);
// } catch (error) {
//     console.log("có lỗi nè che");
// }

//cách khắc phục : nhét cả trycatch vào trong callBack
// setTimeout(() => {
//     try {
//         sdfbsdb;
//         console.log("nè");
//     } catch (error) {
//         console.log("có lỗi nè che");
//     }
// }, 1000)

//khi phát sinh ra lỗi thi js tạo thnahf một object chứa thông tin về lỗi đó 
// có 2 prop : 
//name : tên lỗi
//message : thông báo lỗi
//stack : full thông báo

try {
    ThanhIsHereee;
} catch (error) {
    console.log(error);
    console.log(error.name);//ReferenceError
    console.log(error.message);//ThanhIsHereee is not defined
    console.log(error.stack);//ReferenceError: ThanhIsHereee is not defined
                                //at 01-try-catch.js:41:5
}

//ngoài ra mình cso thể chủ động ném lỗi xuống catch bằng 
//throw 'lỗi'
//throw new Error ('Lỗi')
//throw new SyntaxError ('Lỗi')
//throw new ReferenceError ('Lỗi')

//finally : dù lỗi hay không cũng phải chạy 

let loading = false;
try{
    loading = true;
    get();//lỗi
    loading = false;
}catch{
    loading = false;
}

//
loading = false;
try{
    loading = true;
    get();//lỗi
    loading = false;
}catch{
    loading = false;
}finally{
    loading = false;
}
//finally khá vô dụng
// ngoài throw new Error() chúng ta còn có 7 hàm (contructor function) khác phục vụ cho việc
// tường minh lỗi của mình hơn
// EvalError():     tạo 1 instance đại diện cho một lỗi xảy ra liên quan đến hàm toàn cục Eval()
// InternalError(): tạo 1 instance đại diện cho một lỗi xảy ra khi 1 lỗi bên trong jsEngine
//                  được ném. vd: quá nhiều đệ quy
// RangeError()   : tạo 1 instance đại diện cho một lỗi xảy ra khi một biến số hoặc tham chiếu
//                  nằm ngoài phạm vi hợp lệ của nó
// ReferenceError : tạo 1 instance đại diện cho một lỗi xảy ra khi hủy tham chiếu của 1 tham chiếu
//                  không hợp lệ
// SyntaxError    : tạo 1 instance đại diện cho một lỗi xảy ra trong khi phân tích cú pháp 
//                                                                          mã trong Eval()
// TypeError      : tạo 1 instance đại diện cho một lỗi xảy ra khi một biến hoặc 1 tham số
//                  có kiểu không hợp lệ
// URIError       : tạo 1 instance đại diện cho một lỗi xảy ra khi encodeURI() hoặc decodeURI()
//                  truyền các tham số không hợp lệ
class CustomError1 extends Error {
    constructor(message, student){
        super(message)
        this.student = student;
        this.name = "CustomError"
    }
}
try {
    console.log("ThanhISHeree")
    let a = 1 + 2;
    throw new Error("Tao thichs thif tao doi~ dc chua :D", {name: "thanh", age: 20})
} catch (error) {
    console.log(error);
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}