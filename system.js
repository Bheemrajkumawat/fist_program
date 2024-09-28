// function New() {
//   const name = "bheem";
//   if (true) {
//     const name = "raj";
//     console.log(name);
//   }
//   console.log(name);
// }

// New();

//  block scoped let and const
// function number(){
//           if(true){
//                     let str="Apple"
//                     // console.log(str)
//           }
//           console.log(str)
// }
// number();

// function number(){
//           if(true){
//                     const str="Apple"
//                     // console.log(str)
//           }
//           console.log(str)
// }
// number();

// function document() {
//   const str = "Apple";
//   // var doc="Apple"
//   if (true) {
//     var str1 = "banana";
//     console.log(str);
//   }
//   console.log(str1);
// }
// document();

// template-literal-string
// let Name="bheemraj"
// let lastName="kumawat"
// console.log("my name is "+Name + lastName );

// console.log(`my name is ${Name}${lastName}`)

// let a=20;
// let b=30;
// console.log(a +"="+(a+b)+" "+ b+"="+(a-b) );

// console.log(`${a}=${a+b} ${b}=${a-b}`)

// // template-literal( template string)method

// let name="bheemraj"
// let last_name="kumawat"
// console.log(`${name}`.startsWith("b"))
// console.log(`${name}`.endsWith("j"))
// console.log(`${name} `.repeat(100))

// Array Destructuring in ES6

// let arr=["js","php","python","c","java"]
//  console.log(arr.length);
//  let arr1=arr[0]
//  let arr2=arr[1]
//  let arr3=arr[2]
//  let arr4=arr[3]
//  let arr5=arr[4]
//  console.log(`my fav language ${arr1} and last fav language${arr2}`)

//  let [arr1,arr2,arr3,arr4,arr5]=arr
//  console.log(`my fav language ${arr1} and last fav language ${arr3}`)

//  console.log(arr1.toUpperCase())
//  console.log(arr1.toLowerCase())
//  console.log(arr1.replace("js","javascript"))
//  console.log(arr1.concat(arr3))
//  console.log(arr1.repeat(100))

//javascript program swap two number

// let i=30;
// let j=40;

// let temp=i
// // console.log(temp)
// i=j;
// // console.log(i)
// j=temp
// // console.log(j)
// console.log(`i=${i} j=${j}`)

// [i,j]=[j,i];// using two var.
// console.log(i,j)


//Object Destructuring in ES6
const obj = {
  Name: "bheemraj",
  lastName: "kumawat",
  age: 21,
};
let {Name,lastName,age}=obj

console.log(`my name is ${Name}${lastName} my age ${age} year`)



//fat arrow function in javascript

const num=function (){
          a=30;
          b=20;
          return a+b;
}
console.log(num())

//es6

let i=40;
let j=50;
const sum =()=>{
return i+j
          
}
console.log(sum())

const num1=(q,w)=>{return  q+w}
console.log(num1(40,90));

// ES6 Default Parameters 

const name=function(a,b){
          console.log(a+b)
}
name(4)

const name2=function (a,b=2){
          console.log(a+b)
}
name2(4)

const name3=(a,b=3)=>{
          console.log(a+b)
}
name3(4)


// Rest Parameters in ES6

const number=(...add)=>{
          
          console.log(...add);
          let num=0;
        for (let i of add){// using to array ke value and in using key and index
          num += i;
        }
        console.log(num);
}
number(1,2,3,4,5,6,7);


const document=(a,b,...c)=>{
          console.log(`${a} and ${b}`)
          console.log(c)
          console.log(c[0])
          console.log(c.length)
          console.log(c.indexOf("ram"))
}
document("Apple","banana","ram","hanuman")


const array=[1,2,3,4,5,5,7,8,9,9]
const arr=()=>{
          let str="";
          for(i in array){
                    str+=i;
          }
          console.log(str)
}
arr()// output=0123456789


//Spread Operator in ES6

const Spread=(a,b,c)=>{
    console.log(a+b+c)
}
 let arrvalue=[1,4,7]
  console.log(...arrvalue)
  Spread(...arrvalue)


  const  scop=(a,b,c)=>{
          console.log(a-b-c)
  }
  let  Spreads=[4,5,6]
  console.log(...Spreads)
  scop(...Spreads)