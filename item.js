const myArray = [
    { name: "sky", id: 123 },
    { name: "shed", id: 113 },
    { name: "matt", id: 103 }
];
myArray.forEach((item, index, arr) => {
    console.log(arr);
    console.log(index);
})
const nums = [67, 35, 45, 23, 6, 8, 9, 17];
const above18 = nums.filter((age) => {
    return age >= 18;
});
console.log(above18)
const studentScore = [12, 34, 45, 46];
function sumTotal(par1, par2, index) {
    if (index <= 2) {
        var sum = par1 + par2;
    }
    console.log(sum)
}
let totalScore = studentScore.reduce(sumTotal);
console.log(totalScore);
const foodStuff = ["yam", "rice", "beans"];
console.log(foodStuff.last)
const findAge = nums.find((num) => {
    return num <= 18;
})
console.log(findAge);
const arrObj = ['solomon', 'joboson']

console.log(arrObj.keys());