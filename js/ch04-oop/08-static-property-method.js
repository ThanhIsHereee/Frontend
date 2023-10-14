//08-static-property-method
//Static

//static trong Prop
class User{
    name = "Thanh";
    static name1 = "Hương";

}
let obj1 = new User();
console.log(obj1.name);//Thanh
console.log(obj1.name1);//undefine
console.log(User.name1);//Hương
//Static ám chỉ cái property đó thuộc về class
//  muốn dùng thì thông qua class

// ----
class Article{
    constructor(title, date){
        this.title = title;
        this.date = date;
    }
    show(){
        console.log("ahihi");
    }
    static compare(articleA, articleB){
        return articleA.date - articleB.date;
    }
}
//tạo ra mảng chứa các bài báo 
let articleArray = [
    new Article("Tuyển dụng sang Cam làm lợn", new Date(2022, 2, 4)),
    new Article("Nữ đa cáp ngoại tềnh ở Đồng Night", new Date(2022, 0, 6)),
    new Article("Siêu trôm Anna lấy xe của quý nhân bỏ trốn", new Date(2022, 8, 20)),
];
articleArray.sort(Article.compare);
console.log(articleArray);

//



























































