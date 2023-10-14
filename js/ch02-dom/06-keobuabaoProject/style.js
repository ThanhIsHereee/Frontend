//tạo 1 cái bảng chứa giá trị dạng table
const VALUES = [
    {id:"scissors",value:"✌🏻"},//0
    {id:"rock",value:"✊🏻"},//1
    {id:"paper",value:"🖐🏻"},//2
];//độ dài (length) : 3;
//khi nào thì
//      thắng 1 - 0 = 1
//            2 - 1 = 1
//            0 - 2 = -2  
//      indexPlayer - indexComputer = 1 || -2                                       return 1;
//  hòa : indexPlayer - indexComputer = 0;                                          return 0;
//  thua : indexPlayer - indexComputer mà không ra các số trên thì thua             return -1;

//tạo hàm mà mỗi lần gọi thì nó sẽ thay đổi giá trị của máy

//hàm so sánh A và B hàm 1 : thắng  0 : hòa  -1 : thua
let i = 0;//i = 0;
const handleChange = () => {
    //móc vào máy
    let computer = document.querySelector("#computer");//móc vào máy
    computer.textContent = VALUES[i].value;  //đổi giá trị cho computer
    computer.dataset.id = VALUES[i].id;      //đổi data-id cho computer
    if(i === VALUES.length - 1){
        i = 0;
    }else{
        i++;
    }
};

// handleChange();
// handleChange();
// handleChange();

//setInterval(of, milisecond): cứ sau milisecond thì sẽ gọi cf 1 lần 
let interval = setInterval(handleChange, 100);
//lưu lại interval để mình có thể dụng lại việc call cf

//valuePlayer : rock            |           valueomputer : data-id => scissors 
//=> indexPlayer && indexComputer : 1 (rock) | 0 (scissors) | 2 (paper)

//viết 1 hàm nhận vào ( valuePlayer, valueComputer ) từ đó tìm ra vị trí của tụi nó trong mảng VALUES
//sau đó so sánh và trả ra kết qua 1 0 -1 
//để báo rằng players thắng | hòa hay thua 
const compare = (valuePlayer, valueComputer) => {
    let indexPlayer = VALUES.findIndex(item => item.id == valuePlayer );
    let indexComputer = VALUES.findIndex(item => item.id == valueComputer );
    let check = indexPlayer - indexComputer;
    if(check == 1 || check == -2){
        return 1;
    }else if(check == 0){
        return 0;
    }else{
        return -1;
    }
}

//sự kiện trò chơi diễn ra khi 1 tỏng 3 nút player bị clicked
// dom danh sách các nút user

let playerItem = document.querySelectorAll(".user");
playerItem.forEach(item => {
    item.addEventListener("click", event => {
        clearInterval(interval)//dừng interval lại
        let valuePlayer = event.target.id;
        let valueComputer = computer.dataset.id;
        let result = compare(valuePlayer, valueComputer);
        // alert("Kết quả" + " "+ result); //dùng để test kết quả
        //duyệt lại các nút và xóa actived | chặn sự kiện click
        playerItem.forEach(_item => {
            _item.classList.remove("actived");
            _item.style.pointerEvents = "none"
        });
        event.target.classList.add("actived")

        //thông báo kết qủa : tọa 1 cái div để thông báo kết quả
        const alertDiv = document.createElement("div")
        alertDiv.classList.add("alert")//alert là class của Bootstrap
        if(result == 1){
            msg = "Bạn không ngu"
            alertDiv.classList.add("alert-success")//làm cho div có màu xanh lá
        }else if(result == 0){
            msg = "Bạn ngu như may'"
            alertDiv.classList.add("alert-warning")//làm cho div có màu vàng
        }else{
            msg = "Bạn ngu"
            alertDiv.classList.add("alert-dark")//làm cho div có màu xám
        }
        alertDiv.textContent = msg;
        document.querySelector(".notification").appendChild(alertDiv);
        document.querySelector("#play-again").classList.remove("d-none");
    })
    // item.removeEventListener();
});

let retry = document.querySelector(".btn-play-again");
retry.addEventListener("click",e=>{
    
    document.querySelector('.actived').classList.remove('actived');
    let interval = setInterval(handleChange, 100);
    playerItem.forEach(_item => {

        _item.style.pointerEvents = "auto"
    });
})