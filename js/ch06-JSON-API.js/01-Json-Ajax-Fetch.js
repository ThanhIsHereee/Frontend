//01-Json-Ajax-Fetch
//JSON: js object notation
//      một chuỗi đucợ viết dưới dạng js object
//      dùng để lưu trữ và trao đổi dữ liệu
//          thường se lưu: string , number , boolean , array , object , null
//      dễ dàng sử dụng với tất cả ngôn ngữ lập trình 
//      mình thao tác Json thông qua JSON.parse  | .stringify()
//-------------
//chuyển đổi object thành JSON
const obj1 = {
    name: "Thanh nè",
    age: 20,
    status: "sạt boy`"
}

let myJson = JSON.stringify(obj1);
console.log(obj1);
console.log(myJson);

let str = `{"name":"Thanh không suy","age":20,"status":"đời"}`

let newObject = JSON.parse(str);
console.log(newObject);

//cú pháp json
//  -với object thì data là cặp name:value
//  -data được ngăn cách bởi dấu phẩy(,)
//  -ngoặc nhọn mô tả object
//  -ngoặc vuông mô tả mảng
//  -Json dùng dấu nháy "" để phân với dấu nháy '' ở ngoài cùng string
//  -trường name phải bọc trong nháy kép ""
//value của json phải là 1 trong những kiểu dữ liệu dưới đây
//  -string
//  -number
//  -object
//  -array
//  -boolean
//  -null

//array và json
let arr = ["cam", "ổi", "chuối"];//=> '["cam", "ổi", "chuối"]'
//Number
let num = 1 // => '1'
//String
let str1 = "Thanh không suy";//=> '"Thanh không suy"'
//boolean
let bool = true//=> 'true'
//
const obj2 = {
    name: "Thanh nè",
    age: 20,
    status: "sạt boy`",
    sayHi: function(){
        console.log("không suy chi thuật");
    }
}
//=> '{"name":"Thanh nè","age":20,"status":"sạt boy`"}'

//----------------------------------
//AJAX: Asynchronous javaScript and XML
//      không phải ngôn ngữ lập trình (rất nhiều người mới bị lậm)
//      AJAX chỉ là 1 sự kết hợp của 
            // XMLHttpRequest object có sẳn trên trình duyệt
            //          (dùng để gữi và nhận data từ web server)
//          // Js và HTML DOM (để sử dụng hoặc hiển thị data)

/*
        cái tên ajax bị lầm là ứng dụng dùng ajax sẽ sử dụng XML(một kiểu data như json nhưng
        để gữi và nhận dữ liệu                                   (phức tạp hơn)
        nhưng trên thực tế chúng ta dùng text và json để trao đổi dữ liệu
*/

//      AJAX giúp chúng ta đọc dữ liệu từ server trả vể
//                         gữi dữ liệu lên server ở chế độ ngầm
//                         cập nhật trang web mà không cần reload lại trang
//                         là nền tảng phát triển của React, Angular, Vue



//-----
//cách AJAX hoạt động
//xem hình ajax.gif

//
//XMLHttpRequest(XHR): là constructor function: 
//                dùng để giao tiếp với server
//                XHR là 1 webAPIs nên chỉ có trên môi trường trình duyệt
//                không xuất hiện ở Node.js

//tạo 1 XHR object
let xhr = new XMLHttpRequest();
//xhr sẽ có method và property

//.onreadystatechange: nó sẽ chạy gì đó mỗi lần readystate thay đổi
//readystate: là trạng thái khi kết nối với sever
//0: request chưa tạo 
//1: kết nối với sever đã được thiết lập
//2: request được sever tiếp nhận
//3: đang xử lí request
//4: request đã kết thúc và response đã sẵn sàng để dùng
//  response: 1 gói hàng của sever trả về
xhr.onreadystatechange = function (){
    console.log("readystate đang là : " + this.readyState);
}

//xhr có method .open('method',api-link, statusOfAsync)
//method: get post put
//statusOfAsync: có chạy bất đồng bộ hay không ? (true/false)
// xhr.open('GET',
//             'https://6335aa228aa85b7c5d206e74.mockapi.io/user'
//             ,true
// );
//đang đóng gói request
// xhr.send();


//muốn thêm một user lên sever : POST
// xhr.open('POST',
//             'https://6335aa228aa85b7c5d206e74.mockapi.io/user'
//             ,true);
//xác thực cho sever biết mình là ai
// xhr.setRequestHeader('Content-Type', 'application/json')
//gửi qua body
// const body = {name:"Thanh không suy", age:20,}
// xhr.send(JSON.stringify(body))


//---------------
//dùng XMLHttpRequest để xử lý AJAX được coi là cách cổ xưa nhất và rườm rà nhất
//ngày nay chúng ta có rất nhiều lựa chọn mạnh mẽ để xử lý AJAX như:
//  JQUERY: cung cấp hàm gọi Ajax tiện lợi như load,ajax,get,getJSON
//  FetchAPI: Những trình duyệt ngày nay cũng có: FetchAPI với nhiều tính năng nâng cao
//              và cú pháp dể sử dụng hơn XHR
//  Phổ biến nhất là AXIOS: thư viện chuyên dụng cho việc xử lý Ajax cũng như gọi API
//      cung cấp nhiều tính năng hay,dùng cho cả môi trường trình duyệt và Node.js
//                                  (nếu trình duyệt nó sẽ dựa trên XHR| node sẽ là HTTP Interface)

//đối với mình, thì mình k xài jquery :)) nói đúng hơn là nó cùi chết mẹ
//nên mình sẽ dùng fetchAPI và Axios

//--------------------



//---------------
//-----Fetch API: cung cấp khả năng gửi cũng như nhận request thông qua trình duyệt
// xhr : functions
//fetch thì dùng công nghệ promise => tiện lợi xử lí thao tác bất đồng bộ 
//demo get data từ sever = fetch
//sever không bao giwof mang về reject
//  sever sau khi tiếp nhận request => xử lý => luôn luôn trả ra 1 gói hàng
//      tên là response(status | data)
// fetch('https://6335aa228aa85b7c5d206e74.mockapi.io/user').then((response) => {
//     // console.log(response);
//     if(response.ok){
//         return response.json();
//     }else{
//         throw new Error(response.statusText);
//     }
// }).then((value) => {
//     console.log("lấy thành công data " + value);
// }).catch((error) => {
//     console.log("lý do lấy data thất bại : " + error);
// });

//----------------------------------------------------------------
//demo thêm 1 user vào table user: method: POST
fetch('https://6335aa228aa85b7c5d206e74.mockapi.io/user',{
    method: "POST",
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify({name: "Thanh không suy", yob: 2002}),
}).then((response) => {
    if(response.ok){
            return response.json();
        }else{
            throw new Error(response.statusText);
        }
}).then((value) => {
    console.log("lấy thành công data ", value);
}).catch((error) => {
    console.log("lý do lấy data thất bại : " , error);
});






















