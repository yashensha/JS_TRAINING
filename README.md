# JS NOTES

## TABLE OF CONTENTS.

1. [Variables & Data Types.](#Topic1)
    1. [Data Types](#Topic1.1)
    1. [Variable Declaration](#Topic1.2)
        1.[var](#Topic1.2.1)
        2.[let](#Topic1.2.2)
        3.[const](#Topic1.2.3) 
 
<br>

<br>

---

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


#### NOTES:-

>Use `const` to declare value for first time, to reduce errors.


