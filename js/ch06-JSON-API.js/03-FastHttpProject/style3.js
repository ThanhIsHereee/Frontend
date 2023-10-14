//promise + async await
class FastHttp{
    async send(method, url, body){
        let response = await fetch(url,{
            method: method,
            headers: {"Content-Type":"application/json"},
            body : body ? JSON.stringify(body) : null ,
        });

        if(response.ok){
            return response.json();
        }else{
            throw new Error(response.statusText);
        }
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


let http = new FastHttp();
let baseURL = "https://6335aa228aa85b7c5d206e74.mockapi.io/user";

//test get
// let getData = async() => {
//     const value = http.get(baseURL);
//     console.log("dữ liệu lấy được là ", value);
// };
// getData();
(async() => {
    try{
        const value = http.get(baseURL);
        console.log("dữ liệu lấy được là ", value);
    }catch(error){
        console.log("lõi vì ", error);
    }
})();




























