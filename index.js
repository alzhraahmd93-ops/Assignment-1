//Q1
/*let num=Number("123")
console.log(num+7) */

//Q2
/*let value=0
if (!value){
    console.log("invalid")}*/


//Q3
/*for (let i=1; i<=10;i++){
if (i%2==0){
    continue;
}

console.log(i)

}*/

//Q4

/*let arr=[1,2,3,4,5,6]
let arr2=arr.filter((n)=>{
    return n % 2==0
})
console.log(arr2)*/ 

//Q5

 /*let arr1=[1,2,3] 
 let arr2=[4,5,6]
 let merged_arr=[...arr1,...arr2]
 console.log(merged_arr)*/

 //Q6

 /*let day=1
 switch(day){
    case 1:
        console.log("Sunday")
        break
    case 2:
        console.log("Monday")
        break  
    case 3:
        console.log("Tuesday")
        break
    case 4:
        console.log("Wednesday")
        break
    case 5:
        console.log("Thursday")
        break
    case 6:
        console.log("Friday")
        break
    case 7:
        console.log("saturday")
        break
    default:
        console.log("Invalid")}*/

//Q7
/* let arr=["a","abc","de"]
let arr2=arr.map((arr)=>arr.length)

console.log(arr2)*/  
//Q8
/*function check(n) {
    if (n%3==0 &&n%5==0){
        console.log("Divisible by both")



    }
    else{
        console.log("Invalid")
    }
    
}
check(15)*/

//Q9

/*let square=num=>{ 
     return num*num}
console.log(square(5))*/

//Q10

/*const person ={
    name:"john",
    age:25
}
let {name,age}=person

console.log(name,"is",age,"years old")*/

//Q11

/*function sum (...number){
let total=0
for (let num of number){
    total+=num
}
return total
}
console.log(sum(1,2,3,4,5,))*/
 
//Q12
/*let promise = new Promise((resolve) => {

    setTimeout(() => {
        resolve("Success")
    }, 3000);

});

promise.then(result => {
    console.log(result)
})*/

 //Q13
 /*function largesNumber(arr){
let max=[0]
for (let i=1; i<arr.length;i++){
    if (arr[i]>max)
    {
        max=arr[i]
    }
}
return max
 }
 console.log(largesNumber([1,3,7,2,4]))*/

 //14
 /*let person={

    name:"john",
    age:30
 }
 let keys=Object.keys(person)
 console.log(keys)*/


 // Q15
 /*let text="The quick brown fox"
 let word=text.split(" ")
 console.log(word)*/