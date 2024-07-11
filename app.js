// 1. ixtiyoriy array yarating va undagi bir martadan ko'p takrorlangan
//  item larni boshqa array ko'chiradigan function yarating

// let arr = [1,2,3,2,5,2,6,4,2]
// let resultArr = []
// let newArr = arr.filter(val =>   arr.indexOf(val) != arr.lastIndexOf(val))

// newArr.forEach(val => {
//     if (!resultArr.includes(val)) {
//         resultArr.push(val)
//         console.log(resultArr);
//     }
// })



//  2. Array elementlari kvadratlaridan hosil bo’lgan
//  array hosil qiling. Input: [1, 2, 3, 4, 5] Output: [1, 4, 9, 16, 25]

// let arr = [1,2,3,4,5]
// let newArr = arr.map(val => val ** 2)
// console.log(newArr);



// 3.Arraydagi musbat sonlar yig’indisini hisoblang. 
// (filter va reduce). Input: [ 1, -4, 12, 0, -3, 29, -150] Output: 42

// let nums = [1,-4,12,0,-3,29,-150]
// let newNums = nums.filter(val => val > 0)
// let total = newNums.reduce((acc,val)=> acc + val,0)
// console.log(total);



// 4. Stringdagi so’zlarning bosh harflarini oling. (split, map, join).
//  Input: 'George Raymond Richard Martin'. Output: 'GRRM'

// let str = "George Raymond Richard MArtin"
// let newOne = str.split(" ").map((val,index) => val[0]).join("")
// console.log(newOne);



// 5. Berilgan stringni faqatgina harflardan iborat ekanligiga tekshiring

// let str = "salom"
// let istext
// let result
// for(let find of str) {
//     istext = isNaN(find)
//     if (istext == true) {
//         result = "Bu string faqat haflardan tashkil topgan"
//     }else {
//         result = "Bu strinda son qantnashgan"
//     }

// }
// console.log(result);



// 6. String berilgan. Stringdagi so'zlar uzunligidan iborat bo'lgan 
// array qaytaring. (split, map) Input: "Hello world" Output: [3, 9, 12]

// let str = "hello world"
// let newOne = str.split(" ").map(val => val.length)
// console.log(newOne);



// 7. Stringni bo'sh joy bor yoki yo'qligini tekshiring. Input: "salom dunyo" Output: true 

// let str = "hello world"
// if (str.includes(" ")) {
//     console.log("Bo'sh joy bor");
// }else {
//     console.log("Bo'sh joy yo'q");
// }



// 8. Objectning kalit va qiymatlarining string ko'rinishidagi yig'indisidan 
// iborat array qaytaring Input: {a: 2, b: 5, c: 7}. Output: ['a2', 'b5', 'c7']

// let obj = {a:2, b:5, c:7}
// let str = Object.entries(obj).map(([key, value]) => key + value).join(", ")
// console.log(str);