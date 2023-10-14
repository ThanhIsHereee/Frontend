//làm lại các chức năng API nhưng dùng 
//fetch (Promise) + class
class FastHttp{
    send(method, url, body){
        return fetch(url,{
            method: method,
            headers: {"Content-Type":"application/json"},
            body : body ? JSON.stringify(body) : null ,
        }).then((response) => {
            if(response.ok){
                return response.json();
            }else{
                throw new Error(response.statusText);
            }
        })
    };
    //get
    get(url){
        return this.send("GET", url, null);
    }

    //post
    post(url, body){
        return this.send("POST", url, body);
    }

    //put
    put(url, body){
        return this.send("PUT", url, body);
    }

    //delete
    delete(url){
        return this.send("DELETE", url, null);
    }
};

// test code
//api sever
let baseURL = "https://6335aa228aa85b7c5d206e74.mockapi.io/user";
const http = new FastHttp();
//get
// http.get(baseURL)
//     .then(value => {
//         console.log("lấy data là ", value);
//     }).catch(error => {
//         console.log("lấy data thất bại vì ", error);
//     });
//post
http.post(baseURL, {name: "Thanh đã hết suy", yob: 2002})
    .then(value => {
        console.log("đã thêm data là ", value);
    }).catch(error => {
        console.log("thêm data thất bại vì ", error);
    });






















