//C1: dùng prototype (function-constructor - không dùng class)
//tạo constructor chuyên tạo ra Students
// function Student(name, birthday) {
//     this.name = name;
//     this.birthday = birthday;
//     this.id = new Date().toISOString();
// }
// --Store: kho
// function Store() {}
// // getStudents: method dùng để lấy danh sách từ localStorage, nếu chưa có thì tra ra mảng rỗng
// Store.prototype.getStudents = function(){
//     return JSON.parse(localStorage.getItem("students")) || [];
// }
// // lưu Students vào localStorage
// Store.prototype.add = function(student){
//     const students = this.getStudents();//lấy danh sách từ Store
//     students.push(student);//thêm student mới vào danh sách
//     // cập nhật danh sách lên lại localStorage
//     localStorage.setItem('students', JSON.stringify(students));
// };
// //getStudent: lấy sinh viên dựa trên id
// Store.prototype.getStudent = function(idRemove){
//     const students = this.getStudents();
//     return students.find(student => student.id == idRemove); 
// };
// //remove: xóa student khỏi LS
// Store.prototype.remove = function (idRemove) {
//     const students = this.getStudents();
//     const indexRemove = students.find(student => student.id == idRemove); 
//     students.splice(indexRemove, 1);
//     localStorage.setItem('students', JSON.stringify(students))
// };

// --renderUI: giao diện
// function RenderUI(){}
// //  method add: add student lên màn hình 
// RenderUI.prototype.add = function(student){
//     const students = new Store().getStudents();
//     const newTr = document.createElement("tr");
//     newTr.innerHTML =`
//         <td>${students.length + 1}</td>
//         <td>${student.name}</td>
//         <td>${student.birthday}</td>
//         <td>
//             <button class="btn btn-danger btn-sm btn-remove" data-id="${student.id}">Delete</button>
//         </td>
//     `;
//     document.querySelector("tbody").appendChild(newTr);
//     document.querySelector("#name").value = "";
//     document.querySelector("#birthday").value = "";
// };
// //renderAll: render tất cả student trong LS lên màn hình
// RenderUI.prototype.renderAll = function(){
//     document.querySelector("tbody").innerHTML = "";// clear nội dung cũ trước khi render ra màn hình
//     const students = new Store().getStudents();//lấy danh sách từ LS
//     // duyệt danh sách và gọi RenderUI.add cho mỗi item (đang là student)
//     // students.forEach((student) => {
//     //     this.add(student);
//     // });
//     let content = students.reduce((result, student, studentIndex) => {
//         return ( result = result + `
//         <tr>
//             <td>${studentIndex + 1}</td>
//             <td>${student.name}</td>
//             <td>${student.birthday}</td>
//             <td>
//                 <button class="btn btn-danger btn-sm btn-remove" data-id="${student.id}">Delete</button>
//             </td>
//         </tr>
//         `);
//     }, "")
//     document.querySelector("tbody").innerHTML = content;
// };
// //alert: dùng để thông báo kết quả ADD
// RenderUI.prototype.alert = function(msg, type = "success"){
//     const newAlert = document.createElement("div");
//     newAlert.innerHTML = msg;   
//     newAlert.className = `alert alert-${type}`;
//     document.querySelector("#notification").appendChild(newAlert);
//     setTimeout(() => {
//         newAlert.remove();
//     }, 2000);
// };

//sự kiện chính
document.querySelector("form").addEventListener("submit", event => {
    event.preventDefault();
    //tạo ra các Object quản lý
    const store = new Store();
    const ui = new RenderUI();
    const name = document.querySelector("#name").value;
    const birthday = document.querySelector("#birthday").value;
    //từ name và birthday tạo Student
    const newStudent = new Student(name, birthday);
    ui.add(newStudent);
    store.add(newStudent);
    ui.alert(`${newStudent.name}ADDED SUCCESSFULLY!!`);
});

document.addEventListener("DOMContentLoaded", () => {
    const ui = new RenderUI();
    ui.renderAll();
});

document.querySelector("tbody").addEventListener("click", event => {
    if(event.target.classList.contains("btn-remove")){
        const store = new Store();
        const ui = new RenderUI()
        const idRemove = event.target.dataset.id;
        const student = store.getStudent(idRemove);
        const isConfirmed = confirm(`ya sure to remove ${student.name}`);
        if(isConfirmed){
            store.remove(idRemove);
            ui.renderAll();
            ui.alert(`ya had removed ${student.name}`);
        };
    };
});


//------------Chuyển cash viết Class
class Student{
    constructor(name, birthday) {
        this.name = name;
        this.birthday = birthday;
        this.id = new Date().toISOString();
    }
}
class Store{
    connsstructor(){}
    
    // getStudents: method dùng để lấy danh sách từ localStorage, nếu chưa có thì tra ra mảng rỗng
    getStudents(){
        return JSON.parse(localStorage.getItem("students")) || [];
    }
    // lưu Students vào localStorage
    add(student){
        const students = this.getStudents();//lấy danh sách từ Store
        students.push(student);//thêm student mới vào danh sách
        // cập nhật danh sách lên lại localStorage
        localStorage.setItem('students', JSON.stringify(students));
    };
    //getStudent: lấy sinh viên dựa trên id
    getStudent(idRemove){
        const students = this.getStudents();
        return students.find(student => student.id == idRemove); 
    };
    //remove: xóa student khỏi LS
    remove(idRemove) {
        const students = this.getStudents();
        const indexRemove = students.find(student => student.id == idRemove); 
        students.splice(indexRemove, 1);
        localStorage.setItem('students', JSON.stringify(students))
    };
}
class RenderUI{
    constructor(){}
    //  method add: add student lên màn hình 
    add(student){
        const students = new Store().getStudents();
        const newTr = document.createElement("tr");
        newTr.innerHTML =`
            <td>${students.length + 1}</td>
            <td>${student.name}</td>
            <td>${student.birthday}</td>
            <td>
                <button class="btn btn-danger btn-sm btn-remove" data-id="${student.id}">Delete</button>
            </td>
        `;
        document.querySelector("tbody").appendChild(newTr);
        document.querySelector("#name").value = "";
        document.querySelector("#birthday").value = "";
    };
    //renderAll: render tất cả student trong LS lên màn hình
    renderAll(){
        document.querySelector("tbody").innerHTML = "";// clear nội dung cũ trước khi render ra màn hình
        const students = new Store().getStudents();//lấy danh sách từ LS
        // duyệt danh sách và gọi RenderUI.add cho mỗi item (đang là student)
        // students.forEach((student) => {
        //     this.add(student);
        // });
        let content = students.reduce((result, student, studentIndex) => {
            return ( result = result + `
            <tr>
                <td>${studentIndex + 1}</td>
                <td>${student.name}</td>
                <td>${student.birthday}</td>
                <td>
                    <button class="btn btn-danger btn-sm btn-remove" data-id="${student.id}">Delete</button>
                </td>
            </tr>
            `);
        }, "")
        document.querySelector("tbody").innerHTML = content;
    };
    //alert: dùng để thông báo kết quả ADD
    alert(msg, type = "success"){
        const newAlert = document.createElement("div");
        newAlert.innerHTML = msg;   
        newAlert.className = `alert alert-${type}`;
        document.querySelector("#notification").appendChild(newAlert);
        setTimeout(() => {
            newAlert.remove();
        }, 2000);
    };
}






























































































