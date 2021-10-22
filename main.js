
 // String, Numbers, Boolean, null,undefined.
const name = 'john'
const age = 43
const rating = 4.6
const isCool = true
const x = null
const y = undefined
let z


// Concatenation
console.log('My name is '+name+', i am '+age+' years old.') //old
//Template String
const hello = `My name is ${name}, i am ${age} years old. `
console.log(hello)

const s = 'Hello World' 
const d = 'it, technology, code, java, html, css, php'
 console.log(s.length);
console.log(s.toUpperCase()); //uppercase
console.log(s.toLowerCase()); //Lower case
console.log(s.substring(0, 5).toUpperCase()); //substring
console.log(s.split('')) //split to array
console.log(d.split(', ')) //seperator string to array

// Array - variables that hold multiple values.

const number = new Array(1,3,2,5,6,4,5)
console.log(number)

const fruits = new Array ('apple', 'orange','lemon')
console.log(fruits)

console.log(`i need ${fruits[2]} and ${fruits[0]} `)

// const can add element to array, but not reassign

fruits.push('carrot')
fruits.unshift('grapes')
fruits.pop()

console.log(Array.isArray('dgsg'))
console.log(fruits.indexOf('orange')) //know index

// Object

const person = {
    firstName: 'John',
    lastName:'Shelby',
    age: 30,
    hobbies:['Singing', 'Hunting'],
    address:{
        street:'small heath',
        city:'bellingham',
        state:'England'
    }
}
console.log(person)

// accesing

console.log(person.firstName,person.lastName)
console.log(person.hobbies[2])
 console.log(person.address.city)

// pulling out from an Object

const {firstName,lastName,address: {city}} = person

console.log(firstName,lastName,city)

person.email = 'john@gmail.con'

// Convert to JSON

const todoJSON = JSON.stringify(todos)
console.log(todoJSON) 

// object Array

const todos = [{
    id : 1,
    text:'take out the trash.',
    isComplated:true
},
{
    id : 2,
    text:'Meeting',
    isComplated:true
},
{
    id : 3,
    text:'see dentist.',
    isComplated:true
},
{
    id : 4,
    text:'out to play.',
    isComplated:false
}]


console.log(todos[2].text )




// // FOR LOOP

for(let i = 0; i <=10; i++){
    console.log(`for loop ${i}`)
}

// WHILE LOOP

let i = 0
while(i<=20)
{
    console.log(`for loop ${i}`)
    i++
}


for(let i = 0 ; i<=todos.length;i++)
{
    console.log(todos[i].text)
}


for(let todo of todos){
    console.log(todo.id, todo.text,todo.isComplated)

}

// forEach, map, Filter 

todos.forEach(function(todo){
    console.log(todo.text)

})

// map 

const todoText = todos.map(function(todo){
    console.log(todo.text)
    return todo.text

})

console.log(todoText)

// filter

const todoComplated = todos.filter(function(todo){
    return todo.isComplated === false

}).map(function(todo){
    return todo.text
})

console.log(todoComplated)


// // HIGH ORDERED ARRAY METHORD Traversy media


// CONTISIONALS

const x = 30
const y = 20

// // == datatype not cheacked
// // === datatype also checked
if (x > 5 && y > 10){
    console.log('x is 10 or y is more than 5')
}
else if(x>10)
{
    console.log('x is greater than 10')
}
else{
    console.log('x is lesser than 10')
}


const x = 11
const color = x > 10 ? 'red' : 'blue' //then

switch (color){
    case 'red':
        console.log('color is red')
        break; 
    case 'blue':
        console.log('color is blue')
        break;
    default:
        console.log('color is not blue or red')
        break;
}

// Function

function addNums(num1, num2) {
return num1+num2
}
console.log(addNums(5,3))

// ARROW function

const addNums1 = (num1,num2)=>
console.log(num1+num2)

addNums1(4,5)

// easy to use

// example of for each

todo.forEach((todo) => console.log(todo))


// Object oriented program 

// Class

class Person{

    constructor(firstName, lastName, dob) {
        this.firstName = firstName
        this.lastName = lastName
        this.dob = new Date(dob)
    }
    getBirthYear() {
        return this.dob.getFullYear()
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
    }

    // Instantiate

const person1 = new Person('John','Shelby','4-5-2004')
const person2 = new Person('Thomas','Shelby','4-5-2014')
// console.log(person1.dob.getFullYear())
console.log(person1.getBirthYear())
console.log(person1.getFullName())


// DOM

// Single element selector 
console.log(document.getElementById('my-form'))
console.log(document.querySelector('h1'))
// Multiple element selector 
const items = document.querySelectorAll('.item')
console.log(document.getElementsByClassName('item'))
items.forEach((item) => console.log(item))

const ul = document.querySelector('.items')

ul.remove()

ul.lastElementChild.remove()

ul.firstElementChild.textContent = 'HELLO'
ul.children[1].textContent = 'HElp'
ul.lastElementChild.innerHTML = '<h4>Brad pitt</h4>'
const btn = document.querySelector('.btn')
btn.addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector('#my-form').style.background = '#ccc'
    
    // add a class using js 

    document.querySelector('body').classList.add('bg-dark')
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>dggg</h1>'
})
btn.style.background = '#e66f45'


const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const msg = document.querySelector('.msg')
const userList = document.querySelector('#users')

myForm.addEventListener('submit', onSubmit)

function onSubmit(e) {
    e.preventDefault()

if(nameInput.value === '' || emailInput.value === '')
{
    msg.innerHTML = 'please enter all fields'
    msg.classList.add('error')

    setTimeout(()=> msg.remove(), 3000)
}
else{
    console.log(nameInput.value,'-', emailInput.value)
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`))
    userList.appendChild(li)

    //clear fields
    nameInput.value = ''
    emailInput.value = ''
}
}
