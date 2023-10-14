let btnAdd = document.querySelector("#btn-add");
btnAdd.addEventListener("click", (event) =>{
    console.log(event);
    console.log(event.clientX, event.clientY);
    //clientX: là tọa độ có hệ quy chiếu là màn hình của trang web
    console.log(event.offsetX, event.offsetY);
    //offset: là tọa độ có hệ quy chiếu là element
    console.log(event.target);
    //target: là ám chỉ element phát sinh sự kiện
    let inputName = document.querySelector("#name").value;
    let newCard = document.querySelector("li");
    newCard.classList.add("card","bm-3","p-2");
    newCard.innerHTML = `<p>${inputName}</p>`;
    document.querySelector("#list").appendChild(newCard);
});
//mouse event :
//dblclick : bấm 2 lần mới thực thi
//mouseover : đưa chuột vào là thực thi 
//mouseout : đưa chuột ra là thực thi

//keyBoard event :
//keypress : nhận tất cả các phím khi nhấn 1 phím bất kì
//keydown : nhận tát cả các phím khi nhấn 1 phím bất kỳ
//          (-alt,esc,shift,ctrl)
//keyup : nhận tát cả các phím khi nhả 1 phím bất kỳ | * | 
//          (-alt,esc,shift,ctrl)
//input : thực thi khi có thay đổi (giống keyup)
//change : thực thi khi bỏ focus
let inputNode = document.querySelector("#name");
inputNode.addEventListener("keypress", (event) =>{
    console.log("inputNode.value");
});

