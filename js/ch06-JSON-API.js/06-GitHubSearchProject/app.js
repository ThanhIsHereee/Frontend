//app
//project này mình sẽ thao tác với API của GitHub
// client_id = "f85782ea60296794b4e6"
// client_secrets = "03575469a5099ce557c299b39a7abc01a5236e3f"
//làm bộ API trước
window.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#form-search").addEventListener("submit", async (event) => {
        event.preventDefault();
        const username = document.querySelector("#username").ariaValueMax;
        //tạo bộ công cụ
        let http = new Api();
        let ui = new Ui();

        // let {profile, repos} = await http.getInfor(username);
        try{
            let {profile, repos} = await http.getInfor(username);
            ui.render(profile, repos);
            ui.alert("Successed");
        }catch(error){
            ui.alert("CAN'T FOUND", "danger");
        }
    });
});






















