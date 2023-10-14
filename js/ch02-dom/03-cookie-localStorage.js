//cookie
//cho phép lưu tữ thông tin người dùng máy tính vào bộ nhớ
const date = new Date(2022, 7, 28).toString();
document.cookie = `username = ThanhIsHeree; expires = ${date}; path=/`;
console.log(document.cookie);

//cookie có hạn sử dụng
//không thể truyền cookie từ web này sang web khác được

//thường thì người ta không thao tác như này mà người ta sẽ thông qua thư viện
//js.cookie

//localStorage : lưu trữ có hiệu lực vĩnh viễn, lưu trữ trực tiếp trên web
localStorage.setItem("name","ThanhK17F2");
let lname = localStorage.getItem("lname");
console.log(lname);

//localStorage mà lưu đối tượng | array
const profile = {
    name : "Thanh",
    age : 20,
};
console.log(profile);
//localStorage chỉ lưu String hoặc json
const str = JSON.stringify(profile);//object -> String json
console.log(str);
//lưu vào localStorage
localStorage.setItem("profile", str);

//muốn lấy về dùng
let str1 = localStorage.getItem("profile");
console.log(str1);//lấy object từ localStorage về thì chỉ nhận được json thôi
//phải ép về object
let object1 = JSON.parse(str1);
console.log(object1);
