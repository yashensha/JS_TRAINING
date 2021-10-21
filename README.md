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
