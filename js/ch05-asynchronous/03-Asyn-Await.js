//03-Asyn-Await      ES7
//Promise: dùng để thay thế cho callBack xử lý bất đồng bộ (tránh được callBack hell)
//ES7: 0Asyn-Await không dùng thay thế cho Promise
//          Asyn-Await dùng để kết hợp Promise giúp Promise dễ đọc hơn


// Asyn function: 1 hàm lên return 1 promise
//                  rút ngắn cách viết hàm return của promise
const handle = () => Promise.resolve("1")
//dùng asyn function
async function handle2(){
    return 1
}

handle().then(value => console.log(value))
handle2().then(value => console.log(value))

//Await: chỉ hoạt động trong asyn function
//hàm lấy dữ liệu từ sever
let getData = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("dataList");
    }, 3000)
})

// getDate().then(value => {
//     console.log("data là " + value)
// })
let handle3 = async () => {
    let value = await getData();
    console.log("halooo");
    console.log(value);
    return value
}

handle3();

//xử lí lỗi

getData = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("lỗi r nè");
    }, 1000);
})

// getData().then(value => {})
//         .catch(error => {
//             console.log("sever lỗi òi : " + error);
//         })

// async await
handle3 = async () => {
    try{
        let value = await getData();
        console.log("hello");
        console.log(value);
        return value;
    }catch(error){
        console.log("sever lỗi òi : " + error);
    }
}
handle3();
//lưu ý: nếu chỉ dùng promise thì mình bắt lỗi bằng .catch
//  nhưng nếu xài promise thông qua asyn await thì mình dung try{} catch để bắt lỗi

//lưu ý: đừng bao giwof dùng toán tử đồng bộ với asyn await
let x = 0;

let p4 = () => new Promise((resolve, reject) => {
    x += 1;
    console.log(x);
    resolve(5)
})

// handle3 = async () => {
//     x += await p4();
//     console.log(x)
// }
handle3 = async () =>{
    let tmp = await p4();
    x += tmp;
    console.log(x)
}
handle3();

//gọi tuần tự

//hàm lấy từ sever về book
let getBooks = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(["sách 1", " sách5", "sách 7"])
    }, 2000);
})
//hàm lấy từ sever về các User
let getUser = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(["thanh 1", " thanh", "thanh 7"])
    }, 3000);
})

//dung async await
// getdata = async () => {
//     const books = await getBooks();
//     console.log(books);
//     const user = await getUser();
//     console.log(user);
// }

// cách giúp cùng đợi 1 lúc 2 getBooks và getUser
getdata = async () => {
    const [books, user] = await Promise.all([getBooks(), getUser()])
    console.log(books);
    console.log(user);
}
getdata();





























































