# JS NOTES

## Variables & Data Types.

*you don't need to declare Data type in java.*

### Data Types in javascript.
- String
- Number
- Boolean
- null
- undefined
```javascript
const name = 'john' //this is a string
const age = 43 //this is a number
const rating = 4.6 //this is also a number(not float)
const isCool = true //this is Boolean
const x = null //this is null
const y = undefined //this is undefined
let z //this is also undefined
```
### Variable Declaration.

**var** : `var` is used to declare a value in a variable, you can change them by assigning value.
          You can change `var` by again declaring same variable name.
          if you do mistakenly in large code, it is difficult to identify.

**let** : `let` is same as var but `let` can be declared once, if you declare a `let` more than once, error will showen.

**const** : `cont` is only once declared you can't change value of `const` by assigning.

#### Two way to show variables in text.

1. Concatenation (Old methord)
```javascript
console.log('My name is '+name+', i am '+age+' years old.')
```
2. Template String
```javascript
console.log(`My name is ${name}, i am ${age} years old.`)
```

#### NOTES:-

>Use `const` to declare value for first time, to reduce errors.
---

### To show length

```javascript
const s = 'Hello World'
console.log(s.length)
```
### To convert to uppercase
```javascript
const s = 'Hello World'
console.log(s.toUpperCase())
```
### To convert to lowercase
```javascript
const s = 'Hello World'
console.log(s.toLowerCase())
```
### To show some part of string (substring)
```javascript
const s = 'Hello World'
console.log(s.substring(0, 5))
```
### Split String to Array contain 1 letter
```javascript
const s = 'Hello World'
console.log(s.split(''))
```
### Spit String to Array contain 1 word
```javascript
//seperate them with `, `.
const d = 'it, technology, code, java, html, css, php'
console.log(d.split(', '))
```
## Array

>Array - variable that hold multiple value.Unlike c/c++, JS can hold various datatype in single array.

**Synthax**

```javascript
const arrayName = new Array(1,'Hello',true,5,6,4,5)
```
**Accesing array elements**

```javascript
console.log(`i need ${fruits[2]} and ${fruits[0]}`)//index starts at 0.
```

### Push element to array

```javascript
fruits.push('carrot')
```

### Add element to front of an array

```javascript
fruits.unshift('grapes')
```

### Pop from an array

```javascript
fruits.pop()
```

### Check if Array.

```javascript
console.log(Array.isArray(fruits)) //true
console.log(Array.isArray('dgsg')) //false
```

### Check index of given array element.

```javascript
console.log(fruits.indexOf('orange'))
```
## Object

>**Object**: Objects are variables too. But objects can contain many values.

**example**

```javascript
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
```

### Accesing elements from object

```javascript
console.log(person.firstName,person.lastName)
console.log(person.hobbies[2])
console.log(person.address.city)
```

### Pulling out from an object.

```javascript
const {firstName,lastName,address: {city}} = person
```

### Adding values to an object

```javascript
person.email = 'john@gmail.com'
```

## Object Array

**example**

```javascript
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

```

### Accesing value.

```javascript
console.log(todos[2].text )
```

### Convert object to JSON

```javascript
const todoJSON = JSON.stringify(todos)
console.log(todoJSON)
```

## Loops 

### For Loop

```javascript
for(let i = 0; i <=10; i++){
    console.log(`for loop ${i}`)
}
```
### While Loop

```javascript
let i = 0
while(i<=20)
{
    console.log(`for loop ${i}`)
    i++
}
```
*Here is an object array*

```javascript
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
```

#### You can display them using id by loop

```javascript
for(let i = 0 ; i<=todos.length;i++)
{
    console.log(todos[i].text)
}
```

*and also,*

```javascript
for(let todo of todos){
    console.log(todo.id, todo.text,todo.isComplated)

}
```
*We can use 3 methors to display object array*

#### forEach

```javascript
todos.forEach(function(todo){
    console.log(todo.text)
    })
```

#### Map

```javascript
const todoText = todos.map(function(todo){
    console.log(todo.text)
    return todo.text

})

console.log(todoText)
```

#### Filter

```javascript
const todoComplated = todos.filter(function(todo){
    return todo.isComplated === false

}).map(function(todo){
    return todo.text
})

console.log(todoComplated)
```

## Contisionals

### IF

```js
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
```

*use '?' as then*

```js
const x = 11
const color = x > 10 ? 'red' : 'blue' //then
```

### Switch 

```js
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
```

## Functions

*We can make user defined functions in javascript*
```js
// this is a function to add two numbers
function addNums(num1, num2) {
return num1+num2
}
console.log(addNums(5,3))

```

## Arrow Functions

```js
const addNums1 = (num1,num2)=>
console.log(num1+num2)

addNums1(4,5)
```
*we can use this arrow function in forEach*

```js
todo.forEach((todo) => console.log(todo))
```

## Object Oriented Program

### Class

```js
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
```

## DOM

#### Single element selector

```js
console.log(document.getElementById('my-form'))
console.log(document.querySelector('h1'))
```

#### Multiple element selector

```js
document.getElementsByClassName('item')
document.querySelectorAll('.item')
```

#### Remove 

```js
ul.remove()
```

#### Remove first Child

```js
ul.firstElementChild.remove()
```

#### Remove last Child

```js
ul.lastElementChild.remove()
```
#### Remove using index

```js
ul.children[1].remove()
```

#### Manipulate child

```js
ul.firstElementChild.textContent = 'HELLO'
ul.children[1].textContent = 'HElp'
```

#### Using innerHTML

```js
ul.lastElementChild.innerHTML = '<h4>Brad pitt</h4>'
```

#### Add EVENTLITSENER 

```js
const btn = document.querySelector('.btn')
btn.addEventListener('click', (e) => {
    e.preventDefault()
    //Changing style
    document.querySelector('#my-form').style.background = '#ccc'
    
    // add a class using js 

    document.querySelector('body').classList.add('bg-dark')
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>dggg</h1>'
})

```

#### Change style 

```js
btn.style.background = '#e66f45'
```

### Making a validator

```js

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

```





