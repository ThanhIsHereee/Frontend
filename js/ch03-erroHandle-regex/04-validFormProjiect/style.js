//rule validate
// email : required, isEmail
// Name  : required, là tên người (không có số), mã 50 ký tự
// Giới tính : required
// Country   : required 
// Password  : required, min 8, max 20
// Confirm-Password : required, min 8, max 20, isSame
// Agree            : required 
const REG_EMAIL = /^[a-zA-Z\d\.\-\_]+(\+\d+)?@[a-zA-Z\d\.\-\_]{1,65}\.[a-zA-z]{1,7}$/
const REG_NAME = /^[a-zA-Z\u00C0-\u024F\u1E00-\u1EFF]+((\s[a-zA-Z\u00C0-\u024F\u1E00-\u1EFF]+)?)+$/
//minh` sẽ viết mấy cái hàm nhận vào value và check theo chuẩn gì đó : nếu hợp yêu vầu => rỗng
                                                                    // nếu không hợp yêu cầu => chửi
const isRequired = (value) => value.trim() !== "" ? "" : "the Field is Required" 
const isEmail = (value) => REG_EMAIL.test(value) ? "" : "Email is not validate" 
const isName = (value) => REG_NAME.test(value) ? "" : "Name is not validate"
const min = num => value => value.length >= num ? "" : `Min is ${num}`
const max = num => value => value.length <= num ? "" : `Max is ${num}`
const isSame = (paramValue, fieldName1, fieldName2) => (value) => {
    return paramValue == value ? "" : `${fieldName1} not matched ${fieldName2}`;

}

//những khái niệm cần nắm
// value :giá trị trong ô input
//funcs : những hàm dùng để check Value
//          để check valueEmail => funcs: [isRequired, isEmail]
//          để check value PassWord => funcs: [isRequired, min 8, max 20]
//parentNode  : node cha của value
//controlNodes : node input

//Viết 1 hàm dùng để báo lỗi trên từng input
const createMSG = (parentNode, controlNodes, msg)=> {
    //tạo div báo lỗi
    const invalidDiv = document.createElement("div")
    invalidDiv.className = "invalid-feedback"
    invalidDiv.textContent = msg
    parentNode.appendChild(invalidDiv)
    // controlNodes.classList.add("is-invalid")
    controlNodes.forEach((itemNode) => {
        itemNode.classList.add("is-invalid")
    });
};

//cần 1 cái hàm nhận vào value, nhận vào funcs, parentNode, controlNodes
//để nó dùng các funcs kiểm tra value, rồi createMsg(parent, controlNodes)
const isValid = (paramObject) => {
    // paramObject bị tách thành value, funcs, parentNode, controlNodes
    const {value, funcs, parentNode, controlNodes} = paramObject
    for (const func of funcs) {
        const msg = func(value)
        if(msg){
            //có msg
            createMSG(parentNode, controlNodes, msg)
            return msg;
        }
    }
    return "";
};
// value, funcs, parentNode, controlNodes
//hàm xóa các thông báo lỗi
const clearMsg = () => {
    document.querySelectorAll(".is-invalid").forEach((inputItem) => {
        inputItem.classList.remove("is-invalid");
    });
    document.querySelectorAll(".invalid-feedback").forEach((divMsg) => {
        divMsg.remove();
    });
}
//sự kiện diễn ra
document.querySelector("form").addEventListener("submit", event => {
    event.preventDefault();
    clearMsg();
    // dom đến tất cả các input có trong sheet
    const emailNode = document.querySelector("#email");
    const nameNode = document.querySelector("#name");
    const genderNode = document.querySelector("#gender");
    //đối với country nó sẽ cần a dom vào th checked
    const countryNode = document.querySelector("input[name = 'country']:checked");
    const password = document.querySelector("#password");
    const confirmPassword = document.querySelector("#confirmPassword");
    const agreeNode = document.querySelector("input#agree:checked");

    // isValid(emailNode.value, [isRequired, isEmail], emailNode.parentElement, [emailNode])
    //mảng chứa các chuỗi sau khi valid
    const errorForm = [
        //email
        isValid({
            value: emailNode.value, 
            funcs: [isRequired, isEmail], 
            parentNode: emailNode.parentElement, 
            controlNodes: [emailNode],
        }),
        //name
        isValid({
            value : nameNode.value,
            funcs : [isRequired, isName, max(50)],
            parentNode : nameNode.parentElement,
            controlNodes : [nameNode],
        }),
        //gender
        isValid({
            value : genderNode.value,
            funcs : [isRequired],
            parentNode : genderNode.parentElement,
            controlNodes : [genderNode],
        }),
        //country
        isValid({
            value : countryNode ? countryNode.value : "",
            funcs : [isRequired],
            parentNode : document.querySelector(".form-check-country"),
            controlNodes : document.querySelectorAll("input[name = 'country']")
        }),
        //password
        isValid({
            value : password.value,
            funcs : [isRequired, min(8), max(20)],
            parentNode : password.parentElement,
            controlNodes : [password],
        }),
        //confirm password
        isValid({
            value : confirmedPassword.value,
            funcs : [isRequired, min(8), max(20) , isSame(password.value, "Password", "Fill confirmedPassword again")],
            parentNode : confirmedPassword.parentElement,
            controlNodes : [confirmedPassword],
        }),
        //agree
        isValid({
            value : agreeNode ? agreeNode.value : "",
            funcs : [isRequired],
            parentNode : document.querySelector("#agree").parentElement,
            controlNodes : [document.querySelector("#agree")],
        }),
    ];
    //Nếu errorMsg chứa toàn chuỗi rỗng => form hợp lệ
    //nếu errorMsg chứ ít nhất 1 chuỗi chửi => form không hợp lệ
    const isValidForm = errorForm.every((item) => !item);
    if(isValidForm){
        alert("Form is valid");
        clearMsg();
    } 
});





























































