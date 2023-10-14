let btnList = document.querySelectorAll(".navtab-button");
let tabContent = document.querySelectorAll(".tab-content-item");
btnList.forEach((btn) => {
    btn.addEventListener("click", event => {
        //duyệt lại danh sách các button và xóa active cho từng button
        btnList.forEach(_btn => {
            _btn.classList.remove("actived");
        });
        //thêm active cho nút vừa nhấn
        event.target.classList.add("actived");
        //duyệt danh sách các tabContent và xóa actived
        tabContent.forEach((content) => {
            content.classList.remove("actived");
        })
        //thêm actived cho tab-content-item có data-id trùng với id của btn vừa nhấn
        let id = event.target.id;//lấy ra id của nút vừa nhấn
        document
            .querySelector(`.tab-content-item[data-id='${id}']`)
            .classList.add("actived");
    });
});