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



 