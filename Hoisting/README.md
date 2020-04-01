
##  what is hoisting?

Basically, when Javascript compiles all of your code, all variable declarations using  `_var_`  are hoisted/lifted to the top of their functional/local scope (if declared inside a function) or to the top of their global scope (if declared outside of a function) regardless of where the actual declaration has been made. This is what we mean by “_hoisting_”.

Functions declarations are also hoisted, but these go to the very top, so will sit above all of the variable declarations.

Enough talk, lets show you some basic examples of code to demonstrate the impact of hoisting.

If we were to write the following in our global scope:

    console.log(myName);  
    var myName = ‘Sunil’;

## Pop quiz! What do you think the console.log will output?

**_1._** `Uncaught ReferenceError: myName is not defined`

**_2._** `Sunil`

**3.** `undefined`

It turns out that this third option is actually the correct answer.

As we mentioned earlier, variables get moved to the top of their scope when your Javascript compiles at runtime (which — if we exclude the use of NodeJS — at a very basic level simply means as your webpage is loading). However, a  key thing to note is that the only thing that gets moved to the top is the variable declarations , not the actual value given to the variable.

Just to clarify what we mean, if we had a chunk of code and let’s say that on Line 10, we had  `var myName = 'Sunil'`, when the Javascript gets compiled,  `var myName`  would get moved to the top of its scope, whilst  `myName = 'Sunil'` would stay on Line 10 (or possibly now Line 11 if  `var myName`  were hoisted up onto Line 1).

## Let’s look at the same block of code from earlier, but look at how the JavaScript compiler will output the code at runtime:

    var myName;  
    console.log(myName);  
    myName = ‘Sunil’;

This is why the console.log is able to output ‘**undefined**’, because it recognises that the variable  **myName**  exists, but  **myName**  hasn’t been given a value until the third line.

## By the way…

We have named our variable  `myName`  instead of simply  `name`  as the ‘window’ object in the browser already has a  `name`  property. If we were to test this in a browser, any variables created in the global scope actually end up being part of the ‘window’ object. Therefore, creating  `var name = 'Sunil';`  is the same as doing  `window.name = 'Sunil';`  and therefore, creating  `var name = ‘Sunil';`  can also be referenced by typing  `window.name`.

So as `window.name` already exists (for your interest, `window.name` simply returns an empty string — at least in Chrome Dev Tools anyway), we don’t really get the proper sense of how hoisting works. We, therefore, chose to use  `myName`  instead! Don’t worry if that just went over your head, hoisting is like that!

## And as we climb back out of that rabbit hole…

We also briefly mentioned earlier that functions are also hoisted to the top (right at the top, above where the variable declarations are hoisted).

## So if we look at the following example:

    function hey() {  
    console.log('hey ' + myName);  
    };  
    hey();  
    var myName = 'Sunil';

The  **hey()**  function call will return undefined still, because really the Javascript interpreter to compiling to the following at run time:

    function hey() {  
    console.log('hey ' + myName);  
    };  
    var myName;  
    hey();  
    myName = 'Sunil';

So by the time the function gets called, it knows that there is a variable called  `myName`, but the variable has not been given a value. There are a couple of variants to this, which occur when using variable expressions of  **IIFE’s**  ([click here if you want to read an earlier article on IIFEs](https://medium.com/javascript-in-plain-english/https-medium-com-javascript-in-plain-english-stop-feeling-iffy-about-using-an-iife-7b0292aba174)) but trying to get a mental grip on all of this at once is not ideal, so I’ll leave you to research hoisting with respect to  **function expressions**  and  **IIFE’s**  by yourself.

Having said that, everything else mentioned above should help you to get a better understanding of how hoisting works.

The concept of hoisting is the reason why you may sometimes come across other people’s code where variables are declared right at the top, and then are given values later. These people are simply trying to make their code closely resemble how the interpreter will compile it in order to help them minimise any possible errors.

## But what about Let and Const?

They’re also hoisted — in fact,  `var`,  `let`,  `const`,  `function`  and  `class`  declarations are hoisted — what we have to remember though is that the concept of hosting is not a literal process (ie, the declarations themselves do not move to the top of the file — it is simply a process of the JavaScript compiler reading them first in order to create space in memory for them).

The difference between  `var`,  `let`  and  `const`  declarations is their  **initialisation** —  in plain terms this simply means the value they are given to begin with.

Instances of  `var`  and  `let`  can be initialised without a value, while  `const`  will throw a  `Reference error`  if you try to declare one without assigning it a value at the same time. So  `const myName = 'Sunil'`  would work, but  `const myName; myName = 'Sunil';`  would not. With  `var`  and  `let`, you can try to use a  `var`  value before it has been assigned and it would return  `undefined`. However, if you did the same with  `let`  you would receive a  `Reference Error`.

## So is there any difference between var,  `let`  and  `const`  in terms of hoisting?

Yes, if you create a  `var`  at the top level (global level), it would create a property on the global object — in the case of a browser, this is likely to be the window object. So creating  `var myName = 'Sunil';`  can also be referenced by calling  `window.myName`.

However, if you wrote  `let newName = 'Sunny';`  this would not be accessible in the global window object — therefore, you would not be able to use  `window.newName`  as a reference to  `'Sunny'`.

## The following issue is also fundamental to your understanding of how hoisting can affect your codebase.

Declarations made with  `var`  can be accessed from outside of their initial scope, whereas declarations made with  `let`  and  `const`  are not.

As we can see in the below example, declarations made with  `var`  return  `undefined`  whereas those made with  `let`  and  `const`  return errors _for raising and writing the following_

    console.log(‘1a’, myName1); // undefined  
    if (1) {  
     console.log(‘1b’, myName1); // undefined  
     var myName1 = ‘Sunil’;  
    }console.log('2a', myName2); // error: myName2 is not defined  
    if (1) {  
        console.log('2b', myName2); // undefined  
        let myName2 = 'Sunil';  
    }console.log('3a', myName3); // error: myName3 is not defined  
    if (1) {  
        console.log('3b', myName3); // undefined  
        const myName3 = 'Sunil';  
    }
