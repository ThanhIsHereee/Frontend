console.log('14-windowObject');
//windowObject(wo) la` dai. dien. cho cua? so? trinh` duyet.
//tất cả global object, function, biến mà tạo bằng var
//đều được xem là method | prop của windowObject
//( let và const thì không phải )

//ngay cả DOM ( document object model ) cũng là thuộc tính của windowObject

//I- prop và method
//  1.1- window.innerHeight : return ra chiều cao của trang web
console.log(window.innerHeight);
//  1.2- window.innerWidth : return ra chiều rộng của trang web
console.log(window.innerWidth);
//  1.3- window.open(url, target, fieldter);
// setTimeout(() => {
//     window.open("https://gearvn.com/", "_blank", "width = 500, height = 1000");
// }, 3000);
// window.open("https://gearvn.com/", "_blank", "width = 500, height = 1000");
//  1.4- window.close() : tab tự đóng
// window.close();
//  1.5- window.resideTo(w, h);
// let mytab = window.open(
//     "https://gearvn.com/", 
//     "_blank", 
//     "width = 900, height = 500"
// );
// mytab.resizeTo(700, 300);

//II - Window location
//  2.1- 
console.log(window.location);
console.log(window.location.href);//url hiện tại
console.log(window.location.hostname);//host hiện tại
console.log(window.location.pathname);//
console.log(window.location.protocol);


//href : protocol + hostname | pathname
//  assign(url): chuyển hướng về trang mới
// window.assign("https://gearvn.com/");
// location.href = "https://gearvn.com/";

// navigator: thuộc tính của người dùng trình duyệt
// console.log(navigator);
// history: lịch sử trình duyệt đối với web tab đó
// history.back();//lùi về 1 tab
// history.forward();//tiến lên 1 tab

//trình duyệt cung cấp 3 loại popup
//  alert
// alert("ThanhIsHereee");
// confirm: trả ra true false
// let resutl = confirm("Had ya have a GF");
// if(resutl){
//     console.log("...")
// }else{
//     console.log("NON :Đ");
// }
// prompt
let resutl = prompt("ya name?");
console.log(resutl);

