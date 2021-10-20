# JS NOTES

## Variables & Data Types.<a name="Topic1"></a>

*you don't need to declare Data type in java.*

### Data Types in javascript.<a name="Topic1.1"></a>
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
### Variable Declaration.<a name="Topic1.2"></a>

**var**<a name="Topic1.2.1"></a> : `var` is used to declare a value in a variable, you can change them by assigning value.
          You can change `var` by again declaring same variable name.
          if you do mistakenly in large code, it is difficult to identify.

**let**<a name="Topic1.2.2"></a> : `let` is same as var but `let` can be declared once, if you declare a `let` more than once, error will showen.

**const**<a name="Topic1.2.3"></a> : `cont` is only once declared you can't change value of `const` by assigning.

#### Two way to show variables in text.

1. Concatenation (Old methord)
```javascript
console.log('My name is '+name+', i am '+age+' years old.')
```
2. Template String
```javascript
const hello = `My name is ${name}, i am ${age} years old.`
```


#### NOTES:-

>Use `const` to declare value for first time, to reduce errors.


