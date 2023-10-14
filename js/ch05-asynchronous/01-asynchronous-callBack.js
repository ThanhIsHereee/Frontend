//ch05-asynchronous
//  01-asynchronous-callBack
//JS là ngôn ngữ chạy đơn luồng 
//PHP hay Java là đa luồng

//Vd: ta có 2 dòng code lần lượt từ trên xuống là L1(5p) và L2(1p)
//đơn luồng: L1 xong L2 chạy tiếp tục : 6p cho toàn bộ công việc

//đa luồng: L1 chạy song song với L2 : 5p cho toàn bộ chương trình

//call stack: là một cấu trúc dữ liệu dạng ngăn xếp (stack) dùng để chứa thông tin
//          lúc code thực thi, 
//call sẽ hoạt động theo kiểu LIFO: last in first out

function a(x){
    console.log(x);
}

function b(y){
    a(y + 2)
}

function c(z){
    b(z + 1)
}

c(5); //8

//Event loop và Callback Queue
//trong một JS runtime(môi trường chạy JS - web) còn 1 thứ khác quan trọng không kém gì call stack
//tổng thể JS có 
//  về vùng nhớ: JS có
//      memory heap
//      call stack

//event loop: liên tục lặp đi lặp lại chờ đợi 1 sự kiện "click, submit, change"
//                      event loop                          callback queue

//webAPIS: những gì web đưa cho ta như là DOM | AJAX(XMLhttpRequest) | timeout(setTimeOut)

function handle(){
    console.log("command1");
    setTimeout(function a(){
        console.log("command2");
    },3000);
    console.log("command3");
}
handle();

//mô tả cách code vận hành

////Ý kiến 2: 1 3 2 (Đúng)
//      mô tả: 1 chạy, 2 chạy nhưng mà phải đợi 3 giây, trong lúc đợi thì 3 chạy
//          nên sau 3 giây thì 2 mới in ra

//ASYNC CallBack - bất đồng bộ từ callback 
//  ưu điểm : dễ hiểu
//  nhược điểm: code bị lồng vào nhau, khó fix ( callBack hell )

//độ quan trọng của bất đồng bộ và đồng bộ
//Vd1: slider
//Vd2: có 2 dòng code
//L1: trích xuất dữ liệu từ file và chuyên thành mảng Student(3p)
//L2: in ra danh sách students đã được trích xuất từ L1

//CallBack gây khó khăn trong việc xử lí lỗi
try{
    setTimeout(function a(){
        throw new Error("Lỗi èn che");
    },1000);
}catch(error){
    console.log(error);
}


//promise: ES6 dùng để thay thế cho callBack










































