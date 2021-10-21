
// // String, Numbers, Boolean, null,undefined.
const name = 'john'
const age = 43
const rating = 4.6
const isCool = true
const x = null
const y = undefined
let z


// // Concatenation
console.log('My name is '+name+', i am '+age+' years old.') //old
// //Template String
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


// Convert to JSON

const todoJSON = JSON.stringify(todos)
console.log(todoJSON)

