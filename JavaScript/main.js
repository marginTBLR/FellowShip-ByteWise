console.log('hello pakistan form js')

// variable
let age = 25
age = 30

console.log(age)

// const
const salary = 80000
console.log(salary)

let sum=0
sum = 8+8
console.log(sum)

const name = "Ahmad"
const language = 'JavaScript'
const standing = 'intermediate'

console.log(name)

// undefined datatype
let hello
console.log(hello)

// Object DataType NONPrementive

const Info = {
    Fname: 'Abdullah',
    Lname: 'Arif',
    age: 22,
}
console.log(Info.Fname)

const OddNum =[3,5,7,9]
console.log(OddNum[0])

// Assignment Operator

let x = 50
let y = 5

console.log(x*y)
console.log(++x)
console.log(--y)
console.log(x==y)
console.log("***************")
const ValidNum = x > 40 && 40 > y
console.log(ValidNum)

const ValidNum2 = x > 40 || 40 > y
console.log(ValidNum2)

const inverse= true
console.log(!inverse)

const inverse2= false
console.log(!inverse2)

// cancatation process
console.log('hello'+' world')

let name2=('Abdulah' + 'Ahmad')
console.log(name2)

// Conditional Operator '?'
const even_odd = 10 % 2 === 0 ? 'Even num ' : 'Odd num'
console.log(even_odd) 


// Type Conversion in JavaScript
//  1.Implicit
console.log(3 + '2')
console.log(3 * '2')
console.log('3' * '2')
console.log(3 - '2')
console.log('3' - '2')

console.log('5' - false)
console.log('5' - true)

console.log('abdullah' - 'arif')

// 2. Explicit
 
console.log(parseInt(3.124))
console.log(parseFloat(3.124))
console.log(Boolean(0))
console.log(Boolean(1))


// Equality in JavaScript
const var1 = 'test'
const var2 = 'test'

console.log(var1==var2)
console.log(var1===var2)

// Conditional Statement
const num = 5
if(num > 0) {
    console.log('num is postive')
}else{
    console.log('Num is Not positve')
}
//  IF ElseIf statement
const num2 = -5
if(num2 > 0) {
    console.log('Num2 is postive')
}else if(num2<0){
    console.log('Num2 is Negative')
} else {
    console.log('Num2 is zero')
}


// Switch Statement

const color = 'blue'
 switch(color){
    case 'blue':
        console.log('color is blue')
        break

        case 'red':
            console.log('color is red') 
            break
        
        default:
            console.log('Varity of colors are also here')


 }


//  Loop in JavaScript/ 1.For Loop / 2.While loop/ 3. Do While Loop
// For loop

for(let i = 1 ; i<=5; i++){
    console.log('iteration of loop for FOR Loop'+i)
}

// While loop

let j=1
while(j <=5){
    console.log('iteration of loop for While Loop'+ j)
    j++

}

// Do While Loop 

let k =1
do{
    console.log('iteration loop for Do While '+ k)
    k++

}while(k<=5)


// For.. Of loop

const numArray =[1,2,3,4,5]

for(const num3 of numArray){
    console.log('For.. Of Loop '+num3)
}

// Functions in JavaScript

function greet(username){
    console.log('good morning '+username)
}
greet('abdullah')//parameter to parse value
greet('umar')
greet('samar')

function multi(a1,b1){
    return a1*b1

}
const mul = multi(10,10)
console.log(mul)


// Scope in JavaScript
// Block / Function / Global Scope
//  IN Block Let and const are used