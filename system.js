function New() {
  const name = "bheem";
  if (true) {
    const name = "raj";
    console.log(name);
  }
  console.log(name);
}

New();

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
let Name="bheemraj"
let lastName="kumawat"
console.log("my name is "+Name + lastName );

console.log(`my name is ${Name}${lastName}`)


let a=20;
let b=30;
console.log(a +"="+(a+b)+" "+ b+"="+(a-b) );

console.log(`${a}=${a+b} ${b}=${a-b}`)

// template-literal( template string)method
 
let name="bheemraj"
let last_name="kumawat"
console.log(`${name}`.startsWith("b"))
console.log(`${name}`.endsWith("j"))
console.log(`${name} `.repeat(100))

