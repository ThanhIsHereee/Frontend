// API
// client_id = "f85782ea60296794b4e6"
// client_secrets = "03575469a5099ce557c299b39a7abc01a5236e3f"

//tham khảo api của git tại : https://docs.github.com/en/rest/overview/endpoints-available-for-github-apps

//Fetch Profile: https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secrets}

//Fetch Repo: https://api.github.com/users/${username}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secrets}

class Api{
    constructor(){
        this.client_id = "f85782ea60296794b4e6";
        this.client_secrets = "03575469a5099ce557c299b39a7abc01a5236e3f";
    }

    async getInfor(username){
        //lấy profile 
        let profile = await fetch(
            `https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secrets}`
        ).then(Response => {
            if(Response.ok){
                return Response.json();
            }else{
                throw new Error(Response.statusText);
            }
        });
        
        //lấy response
        let repos = await fetch(
            `https://api.github.com/users/${username}/repos?client_id=${this.client_id}&client_secret=${this.client_secrets}`
        ).then(Response => {
            if(Response.ok){
                return Response.json();
            }else{
                throw new Error(Response.statusText);
            }
        });

        return {
            profile : profile,
            repos : repos,
        };
    }
}

//test
let http = new Api();
// đưa username sai thì lỗi 404
// bị ban thì lỗi 403
http.getInfor("lehodiep")
    .then(value => {
        console.log(value);
    }).catch(error => {
        console.log(error);
    })






















