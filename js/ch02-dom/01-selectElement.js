//liên kết (DOM) | móc 1 biến vào 1 đối tượng trong DOM 
//nếu muốn lấy 1 đối tượng
// document.getElementById("...");//chỉ được điền tên của id : live
// document.querySelector("...");//cách select của nó giống css có dấu '#' ở đầu : nonelive
let input = document.getElementById("name");
input = document.querySelector("#name");
console.log(input);

//nếu muốn lấy 1 danh sách các đối tượng thỏa thì sao
// document.querySelectorAll("...")
let cardlist = document.querySelectorAll(".card");//nodelist
cardlist = [...document.getElementsByClassName("card")];//HTMLCollection
console.log(cardlist)
//HTMLCollection: nó giống array, nhưng không có các method hỗ trợ nhiều
//cụ thể: forEach
//cách xử lí : phải phân rã HTMLCollection rồi bỏ vào mảng

//NodeList: nó giống array. có cả method của array
cardlist.forEach((item) => {
    console.log(item);
});

//
console.log("demo method");
let card = document.querySelector(".card");
let a = document.querySelector(".card");
console.log(card);
console.log(card.children);//HTMLCollection(2) [h1, p]
console.log(card.childNodes);//NodeLisst   NodeList(5) [text, h1, text, p, text]
console.log(card.parentElement);//element cha chứa nó
console.log(card.nextElementSibling);// tìm ra thằng giống nó nhưng ở dưới
console.log(card.firstChild);//phần tử con đầu tiên text
console.log(card.lastChild);//phần tử con cuối cùng text

//tạo mới 1 element
let newCard = document.createElement('div');
// newCard.className = 'card p-2 mb-3';
newCard.classList.add("card");
newCard.classList.add("p-2");
newCard.classList.add("mb-3");
newCard.innerHTML = 
    "<h1>Tui là phần tử được tạo bằng DOM </h1><p>xin chào mọi người</p>";
let cardGroup = document.querySelector(".card-group");
// cardGroup.appendChild(newCard);//nhét newCard vào cuối cardGgroup
cardGroup.replaceChild(newCard, cardGroup.children[1]);//thay thế

card.setAttribute("data-id", "1");
card.getAttribute("data-id");
console.log(card.getAttribute("data-id"));
card.removeAttribute("data-id");//xóa thuộc tính





