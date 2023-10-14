//02-Promise
//  lời hứa rằng anh sẽ làm hoặc không làm gì đó 
//ES6
//một promise sẽ có 3 trạng thái
//  pending: đang chờ kết quả
//  fullfilled: đã có kết quả (thành công - giữ được lời hứa) resolve
//  reject: đã có kết quả(thất bại - thất hứa) reject("trong này có thể là lôi | chuỗi hay bất cứ thứ gì")

// new Promise(function(resolve, reject){

// })
//viết tắt thành
// new Promise((resolve,reject) => {

// })

//----
//Vd: 
// let wallet = prompt("Nhập giá trị trong ví");

//tạo ra 1 lời hứa
// const b1 = new Promise((resolve, reject) => {
//     if(wallet >= 5000){
//         resolve("đưa đây");
//     }else{
//         reject("cũng là đưa đây");
//     }
// })
//kiểm chứng lời hứa
// b1.then(value =>{
//     console.log("nè : " + value);
// }).catch(error => {
//     console.log("không =))" + error);
// })
//c2
// b1.then(value =>{
//     console.log("nè : " + value);
// } , error => {
//     console.log("không =))" + error);
// })

//thử chuyển 1 ASYNC callback thành promise
// setTimeout(() => {
//     console.log("...");
// }, 1000);

//chuyển thành promise
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("...h");
    }, 1000);
})
 p2.then(value => {
    console.log(value);
 })

//thời gian đợi từ 0 - 1s là pending 
//giai đoạn ta nhận được resolve ngta gọi là on fulfilled

//lưu ý : Promise are eager not lazy: Promise sẽ chạy code bên trong ngay khi khai báo 

let a = 1;
//cách cùi
// let p3 = new Promise((res, rej) => {
//     a++;
// })

//C1:dùng function return Promise
// function b (){
//     let p3 = new Promise((res, rej) => {
//         a++;
//     })
//     return p3;
// }
// b().then();

//C2: dùng Arrow
let p3= () => new Promise((res, rej) => {
     a++;
})  
// p3().then();
console.log(a);
//----------------------------------------------
// 1 promise chỉ có thể rơi vào 1 trong 3 trạng thái(pending | fullfilled(resolve) | reject(reject) )
//không thể đã fillfilled xong rồi reject
//resolve hay reject giống như return (ném giá trị ra bên ngoài) => khác: code vẫn chạy mà không dừng
//Vd:
p4 = new Promise((resolve, reject) => {
    resolve("halooo");
    reject("Lỗi r nè");
    console.log(":>");
})
p4.then(value => {
    console.log("value nhận được là " + value);
}).catch(error => {
    console.log("error là: " + error);
})

//1* .then/ .catch mà return thì nó sẽ trả về cho mình 1 promise(onFullfilled)

//Vd:
p5 = new Promise((resolve, reject) => {
    reject("lỗi òiiii");
})
//onReject => được catch xử lý
p5.then(value => {})
    .catch(error => {
    console.log("Lỗi roài đó " + error);
    return "ahihi";//return 1 cái new promise.resolve("ahihi")
    })
    .then(value => {
        console.log("value là : " + value);
    })

//return trung then và catch là 1 cái promise fullfilled
//sẵn sàng để then tiếp

//2* .throw trong then hay catch sẽ đưa trạng thái về onReject
p5.then(value => {})
    .catch(error => {
    console.log("Lỗi roài đó " + error);
    throw "ahihi";//return 1 cái new promise.reject("ahihi")
    })
    // .then(value => {
    //     console.log("Không bắt được");
    // })
    .catch(error => {
        console.log("lỗi vì dùng throw nè " + error);
    })

//***một số cách viết cần tránh
//lấy thông tin của người dùng
const getProfile = () => Promise.resolve({fname: "ThanhIsHereee", age: 20});
const getArticle = () => Promise.resolve(["sách văn học", "tiểu thuyết"]);
const getArticle2 = () => Promise.resolve(["sách văn học", "tiểu thuyết"]);
//cách callback hell
// getProfile().then(profile => {
//     console.log(profile);
//     getArticle().then(aricleList => {
//         console.log(aricleList)
//     })
// })
//cần lấy kết quả từ 2 lời hứa
getProfile().then(profile => {
    console.log(profile);
    return getArticle()
}).then(aricleList => {
    console.log(aricleList);
    return getArticle2()
}).then(aricleList2 => {
    console.log(aricleList2);
})
// getArticle().then(value =>{
//     console.log(value);
// })










