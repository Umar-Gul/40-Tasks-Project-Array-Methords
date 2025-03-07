// Basic Array Manipulation

// ===>> Task 1
const fruits = ["Apple", "Banana", "Orange", "Potato", "Lemon"]
// console.log(fruits[1]);



// ====>> Task 2
fruits.splice(2, 0, "Mango")
// console.log(fruits);


// ===>> Task 3
const emptyArray = []
emptyArray.push("Red", "Blue", "Yellow")
// console.log(emptyArray);


// ===>> Task 4
emptyArray.pop()
// console.log(emptyArray);


// ===>> Task 5
emptyArray.unshift("Green", "pink")
// console.log(emptyArray);


// ===>> Task 6
emptyArray.shift()
// console.log(emptyArray);

// ===>> Task 7
const elements = [1, 2, 3, 4]
// console.log(elements.length);


// ===>> Task 8
let sliceArr = elements.slice(2, 2)
// console.log(sliceArr);


//  Task 9




//  Task 10
elements.splice(2, 0, 5, 6)
// console.log(elements);


// ===============================================================================================

// Posh, Pop, Shift, and Unshift
// ===>> Task 11
const cities = ["Peshawar", "Kohat", "Mardan"]
cities.push("Parachinar", "Sadda")
// console.log(cities);



// ====>> Task 12
cities.pop()
cities.pop()
// console.log(cities);


// ===>> Task 13
cities.unshift("Red", "Blue")
// console.log ("New array:", cities);


// ===>> Task 14
cities.pop()
// console.log(cities);


// ===>> Task 15
cities.push("Islamabad")
// console.log(cities);


// ===>> Task 16
cities.pop()
// console.log(cities);


// ===>> Task 17
cities.shift()
// console.log(cities);


// ===>> Task 18
cities.unshift("Red")
// console.log(cities);


// ====>> task 19
const district = ["Peshawar", "Kohat", "Bano"]
// console.log(district);
district.pop()
// console.log(district);


// ====>> Task 20
district.splice(1, 0, "Hango", "Tall")
// console.log(district);


//==========================================

// Slice and Splice
// ====>> Task 21
const leanguages = ["Pythen", "JavaScript", "Java", "C++", "TypeScript"]
console.log(leanguages);
let slice = leanguages.slice(0, 3)
// console.log("sliced array = ", slice);


// =====>> Task 22
let sliced = leanguages.slice(2, 4)
// console.log(sliced);


// ====>> Task 23
leanguages.splice(0, 2)
// console.log(leanguages);


// ====>> Task 24
const fruit = ["Apple", "Grape", "PineApple", "Banana", "Mango"]
console.log(fruit);
fruit.splice(2, 2, "Lemon", "Orange")
// console.log(fruit);



// ====>> Task 25
fruit.splice(-2)
// console.log(fruit);


// ====>> Task 26
fruit.splice(0, 0, "Cherry", "Stowberry")
// console.log(fruit);

// ====>> Task 27
const newArray = [1, 2, 3, 4, 5, 6, 7]
// console.log(newArray);

let Slicedelements = newArray.slice(0, 4)
// console.log(Slicedelements);



// ====>> Task 28




// ====>> 29
newArray.splice(3, 1)
// console.log(newArray);


// ====>> 30
newArray.splice(3, 3, 4)
// console.log(newArray);

// ----------------------------------------------------------------------------

// Pass by Reference
// ====>> Task 31
const arr = [1, 2, 3, 4, 5]
let arr2 = arr
arr.push(6)
console.log("Original array :", arr);
console.log("Modify array", arr2);



// ====>> Task 32
function addElement(arr1, element) {
    arr1.push(element)
}
let arr1 = ["A", "B", "C", "D"]
addElement(arr1, "E")
console.log(arr1);


// ====>> Task 33
function firstElement(arr3) {
    arr3[0] = 1

}
let arr3 = [2, 3, 4, 5]
firstElement(arr3)
console.log("Modify first element 1 ;", arr3);


// ====>> Task 34
let arr4 = [1, 2, 3, 4, 5]
let arr5 = arr4;
arr5.push(6)
// console.log("Orignal array", arr4);
// console.log("Modify array", arr5);


// ====>> Task 35
console.log(arr4 === arr5);


// ====>> Task 36
let arr6 = ["arr1", "arr2", "arr3", "arr5"]
function addArray(arr6) {
arr6.shift()
}
addArray(arr6)
console.log(arr6);


// ====>> Task 37
let arr7 = [0, 1, 2, 3, 4, 5]
let arr8 = arr7;
arr7.push(6)
console.log("Orignal array", arr7);
console.log("Modify array", arr8);


// ====>> Task 38
function popFun (arr7) {
    arr7.pop()
}
popFun(arr7)
console.log("Modify arr7 using pop :", arr7);


// ====>> 39
let arr9 = [11, 22, 33, 44, 55 ]
function changeLength(arr9) {
    arr9.length = 3;
}
changeLength(arr9)
console.log("New length is :", arr9);


// ========>> Task 40
let arr11 = [1, 2, 3];
let arr22 = [1, 2, 3];

console.log(arr11 === arr22);
































































