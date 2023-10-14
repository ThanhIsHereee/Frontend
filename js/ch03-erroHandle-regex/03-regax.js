//I.regax
//regax | regular expression | pattern | biểu thức chính quy (định dạng mẫu)
//

let regax1 = /nam///chuỗi có chứa chuỗi nam là true
let str = "Thanh Is My Name"

//regax.test(str) => return true | false

console.log(regax1.test(str));//str có khớp với regax không ?


//i : ignore case
regax1 = /nam/i
str = "Thanh Is My Name"
console.log(regax1.test(str));//nếu thiếu i là false | có i là true

//regax.exec(str) : mảng | null
regax1 = /nam/i
str = "Thanh Is My Name"
console.log(regax1.exec(str));//['Nam', index: 12, input: 'Thanh Is My Name', groups: undefined]

//str.match(regex) : str có khớp regex : trả ra giống exec
regax1 = /nam/i
str = "Thanh Is My Name"
console.log(str.match(regax1));//['Nam', index: 12, input: 'Thanh Is My Name', groups: undefined]

//2. striong.replace(regax, newString)
regax1 = /Thanh/gi  // g : global : cho phép tìm nhiều hơn 1
str = "Thanh Is My Name , My Name Is Thanh"
str = str.replace(regax1, "Ai giờ ta")
console.log(str);//Ai giờ ta Is My Name , My Name Is Thanh


//II.Regex Metcharacter Symbols : // nên test code regex trên trang này https://regexr.com/
    //bắt đầu bằng: vd: /^hello/i chuỗi bắt đầu bằng hello

    //kết thúc bằng:                 vd: /hello$/i  chuỗi bắt đầu bằng hello
    //kết thúc cũng là bắt đầu bằng: vd: /^hello$/i chuỗi chỉ có hello
    //khớp với 1 ký tự bất kỳ(khong dai dien enter):       vd: /m.y/i     .đại diện 1 ký tự bất kỳ 
    //                                              m y|may|mey true
    //                                              my          false
    //cho phép ký tự trước lập lại nhiều lần hoặc không :
    //                               vd: /m*y/i     my|mmmy|ey true
    //khớp ký tự tùy chọn: ký tự phía trước dấu ? có hoặc không cũng đc
                                    //  vd: /ma?y?h?o?r?n?y/i 
    //escape character bằng \ phía trước ký tự cần escape

//III.Regex character sets and Quantifiers
//      chuỗi ký tự và giới hạn ký tự
//  [...] set các ký tự                  vd: /m[an]/i        ma|mn true
//  [^..] set các ký tự phải khác        vd: /m[^an]/i       ma|mn false
                                                           //me|mo true
//  khớp tất cả các chữ cái
    // [a-z]                             vd:/[a-z]hello/    zhello true |hello false
    // [A-Z]
    // [a-zA-Z]

//  khớp số
    // [0-9]

//  giới hạn số lượng ký tự {}          vd:/me{2}t/     met|meeet false    || meet true
                                        // /me{2,5}t/   met false   meet|meeet|meeeet|meeeeet true
//                                         /me{2,}t/    từ 2 ký tự trở lên
//  gom nhóm ()
//                                         /(me){2,}t/  memememememet true

// hoặc |                               vd:/(Hồ|Lê) Điệp/  Hồ Điệp| Lê Điệp true
// Regex ShortHand Character classes
//  khớp 1 chữ cái hoặc số, _             vd: /Die\w/  Diet|Diee|Diev true
//                                                   Diett false
//  khớp nhiều chữ cái hoặc số \w+/     vd: /Die\w/  Dietttt|Dieeeee|Dievvvvvv true
//                                                   Die false                       
//  khớp không phải chữ cái hoặc số \W/
//  khớp 1 số \d | khớp nhiều số \d+ | khớp không phải số \D
//  khớp với dấu cách \s | khớp không phải là dấu cách \S
//  khớp nếu b theo ngay sau a          vd: /a(?=b)/   ac false  |  ab true
//          lưu ý kết quả của cái này là a không phải ab
//  khớp nếu b không theo ngay sau a    vd: /a(?!b)/   ac true  |  ab false
//          lưu ý kết quả của cái này là a không phải ac


// khớp nếu chuỗi là ký tự biên:
    //ký tự biên là ký tự nắm giữa ký tự từ + ký tự biên + không phải ký tự từ
    //           hoặc   không phải ký tự từ + ký tự biên + không phải ký tự từ
    //vd:/an\b/        'an'|'an '|ban tot|toi an com true
    //                 'anh trai'|Oanh false










