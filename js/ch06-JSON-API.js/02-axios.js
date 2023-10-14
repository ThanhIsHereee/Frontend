//02-axios
//Axios: 1 HTTP client hoạt động trong môi trường nodeJS và trình duyệt
//       1 thư viện giúp tương tác với API như GET | POST | PUT | DELETE

//axios không có sẵn, phải cài đặt(cdn)
//demo get data từ sever bằng axios
// axios({
//     method: "get",
//     url: "https://6335aa228aa85b7c5d206e74.mockapi.io/user"

// })
//     .then((response) => {
//         // console.log(response);
//         if([200,201].includes(response.status)){
//             return response.data;
//         }else{
//             throw new Error(response.statusText);
//         }
//     }).then((value) => {
//         console.log("lấy thành công data : ", value);
//     }).catch((error) => {
//         console.log("lý do thất bại : ", error);
//     });


//demo POST 1 user len table user bằng axios
// axios({
//     method: "post",
//     url: "https://6335aa228aa85b7c5d206e74.mockapi.io/user",
//     data: {
//         name: "Thanh không suy",
//         yob: 2002,
//     },
// })
//     .then((response) => {
//         // console.log(response);
//         if([200,201].includes(response.status)){
//             return response.data;
//         }else{
//             throw new Error(response.statusText);
//         }
//     }).then((value) => {
//         console.log("lấy thành công data : ", value);
//     }).catch((error) => {
//         console.log("lý do thất bại : ", error);
//     });

//request method aliases
// axios.post("https://6335aa228aa85b7c5d206e74.mockapi.io/user",
//             {name: "Thanh suyED",
//              yob: 2002,},)
//     .then((response) => {
//         console.log(response)
//     })

//instance trong axios
//để đỡ phải lặp đi lặp lại code
// const instance = axios.create({
//     baseURL: 'https://6335aa228aa85b7c5d206e74.mockapi.io',
//     timeout: 10000,//sau 10s thì tự hủy request
//     headers: {'Content-Type': 'application/json'},
// });

// instance.post("user",{
//     name: "Thanh không suy",
//     yob: 2002,
// })
//     .then((response) => {
//         console.log(response);
//     })

//class + instance + interceptors để cấu hình
class Http{
    constructor(){
        this.instance = axios.create({
            baseURL: 'https://6335aa228aa85b7c5d206e74.mockapi.io',
            timeout: 10000,//sau 10s thì tự hủy request
            headers: {'Content-Type': 'application/json'},
        });

        //cấu hình response bằng interceptor
        this.instance.interceptors.response.use(response => {
            return {
                data: response.data,
                status: response.status,
            };
        }, response => {
            return Promise.reject({
                data: response.data,
                status: response.status,
            });
        });

        //cấu hình request
        //nếu chưa đăng nhập(accessToken) thì vẫn cho request 
        //nếu đã đăng nhập (có accessToken) 
        this.instance.interceptors.response.use(request => {
            const accessToken = localStorage.getItem("accessToken");
            if(accessToken){
                request.headers.authorization = accessToken
            }
            return request;
        }), 
        (request) => {
            return Promise.reject(request.response);
        }
    }
}

let http = new Http().instance;
http.post('user',{
    name: "Thanh không suy",
    age: 20,
}).then(response => {
    console.log(response);
})


















































