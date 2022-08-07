const data_1 = [
    { fullname: "John", salary: 25000 },
    { fullname: "Type", salary: 22000 },
    { fullname: "Tew", salary: 30000 },
    { fullname: "Joe", salary: 25000 }
]

const result = data_1.filter((item) => {
    return item.salary >= 25000;
});

console.log(result);

let data_2 = ["ไก่", "เป็ด", "หมู"];
let newdata_1 = [...data_2, "หอย", "กุ้ง"];

console.log("data : ", data_2);
console.log("newdata : ", newdata_1);


let data1 = ["ไก่", "เป็ด", "หมู"];
let data2 = ["หอย", "กุ้ง", "ปลา"];
let newdata_2 = [...data1, ...data2];

console.log("newdata : ", newdata_2);
