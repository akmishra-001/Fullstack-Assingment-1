//1 let
let name ="Varun singh"
console.log(name)

//2 const
const age = 18;
console.log(age)

//3 arrow function
const myFunction=()=>{
    console.log("This is arrow function")
}
myFunction()

//4 object destructring
const obj1 = {
    name:"Udit",
    age:25,
    course:"Pata nahi",
    address:"SPN"
}
const {course} = obj1;
console.log(course)

//5 array destructring
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const [a,b,c] = fruits;
console.log(a,b,c)

//6 ...oprator
const arr1 = [10,"Nirma",30]
const arr2 = ["Singh",20,30]
const arr3 = [10,20,"Varma"]
const arr4 = ["Sharma",20,30]
const arr5 = [...arr1,...arr2,...arr3,...arr4]
console.log(arr5)

//7 for of
for (const i of arr5) {
    console.log(i)    
}

//8 array find
console.log("******************************************")
const numbers = [10, 20, 30, 40, 50];
const foundNumber = numbers.find(number => number > 25);
console.log(foundNumber); 

     