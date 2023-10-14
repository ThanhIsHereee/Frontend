document.querySelector("form").addEventListener("submit", event => {
    event.preventDefault();//chặn sự kiện submit làm reset trang
    let name = document.querySelector("#name").value //lấy giá trị trong ô input có id là name
    //tọa ra một đói tượng có id là thời gian đã tạo, name là giá trị trong ô input
    let item = {
        id : new Date().toISOString(),//tại sao cần id
        name : name.trim(),
    } 
    //reder cái item mới lại lên màn hình
    addItemToUI(item);
    //lưu cái item này vào localStogare
    addItemToLS(item);
})

//getList() : hàm lấy 'danh sách item' (List) trong localStogare
const getList = () => {
    return JSON.parse(localStorage.getItem("list")) || []
}
//hàm nhận vào 1 item và render nó lên man hình
const addItemToUI = item => {
    //tạo 1 cái card
    const newCard = document.createElement('div')
    newCard.className = 'card d-flex flex-row justify-content-between align-items-center p-2 mb-3'
    newCard.innerHTML = `
        <span>${item.name}</span>
        <button type="button" class="btn btn-danger btn-sm btn-remove" data-id="${item.id}">Remove</button>
    `
    document.querySelector(".list").appendChild(newCard);
}
//hàm thêm item vào trong LS
const addItemToLS = item => {
    //lấy danh sách từ localStogare xuống
    let list = getList();
    list.push(item)
    localStorage.setItem("list", JSON.stringify(list));
}

//hàm render tất cả các item trong list  lên ui mỗi lần vào trang
const init = () => {
    let list = getList();
    list.forEach(item => {
        addItemToUI(item);
    });
}
init();
//hàm nhận vào id của item và xóa trên LS
const removeItemFromLS = (itemID) => {
    //lấy list từ LS xuống
    let list = getList();
    //dựa vào itemId tìm index của item trong list
    let index = list.findIndex(item => item.id == itemId)
    list.spice(index, 1);
    localStorage.setItem("list", JSON.stringify(list));//cập nhật list lên lại LS
}
//xáo 1 element 
document.querySelector(".list").addEventListener("click", event => {
    if(event.target.classList.contains("btn-remove")){
        let nameItem = event.target.previousElementSibling.innerHTML
        let isConfirmed = confirm(`Bạn có chắc muốn xóa item : ${nameItem}`)
        if(isConfirmed){
            let card = event.target.parentElement
            card.remove();
            //xóa item trên ls
            removeItemFromLS(event.target.dataset.id)
        }
    }
})
//sự kiện xóa tất cả 
document.querySelector("#btn-remove-all").addEventListener("click", event => {
    const isConfirmed = confirm("Bạn có chắc muốn xóa tất cả ?");
    if(isConfirmed){
        //xóa danh sách trên ui
        document.querySelector(".list").innerHTML = " "
        //xóa danh sách trên ls
        localStorage.removeItem("list")
        
    }
})

//sự kiện filter
document.querySelector("#filter").addEventListener("keyup", event => {
    const valueInput = event.target.value
    //lấy list từ ls
    let list =getList();
    let filteredList = list.filter(item => item.name.includes(valueInput))
    //xóa danh sách trên ui
    document.querySelector(".list").innerHTML = " "
    //render danh sách đã lọc
    filteredList.forEach(item => {
        addItemToUI(item)
    });
})