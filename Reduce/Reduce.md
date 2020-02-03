
# JavaScript has a Reduce Method. You Should Use It.
Everyone loves JavaScript’s `.map`, `.forEach`, and `.filter` iteration methods, but what about the often overlooked `.reduce`? I think people never really get comfortable with it, so they ignore it. Let’s talk about how it really works, and then do something interesting with it.

# Reducing an array of values
It’s called reduce because it will  **reduce an array of multiple values into a single value.**

    total([1,2,3,4]); // 10
We _could_ just loop with `.forEach` and be done with it:

     const total = (arr) => { 
     let result = 0; 
     arr.forEach(num => { result += num }); 
     return result;
     };

It seems a bit much though, right? We’re creating a value, manipulating it, and then returning it _immediately_. All these actions block us from using the arrow function’s implicit return value. Let’s _reduce_ the steps:

    const total = (arr) => arr.reduce((result, num) => result + num, 0);

# Breaking down .reduce

The `reduce` method itself takes two arguments, the `callback` and `startingValue`. That `callback` takes 2 main arguments, the `accumulator` and the `nextValue`:

    // reduce's arguments  
    .reduce(**reducerCallback**, **startingValue**)// callback's arguments  
    reducerCallback(**accumulator**, **nextValue**)

Here’s the previous example with the callback separately:

    const  reducerCallback = (accumulator, nextValue) => {  
    return  accumulator + nextValue;  
    };  
    const  total = (arr) => arr.reduce(reducerCallback, 0);

# Understanding the callback

Basically, it sets the  `accumulator`  to be the given  `startingValue`, and then moves through the array, with each  **value**  at the index becoming the  `nextValue`  argument. Whatever the callback function returns becomes the  `accumulator`  for the start of the next iteration. After the array has been fully run through, the  `reduce`  method returns the final  `accumulator`  value.

It’s  _possible_  to not give a  `startingValue`  to  `reduce`; it will simply use the first value in the array as the  `accumulator`  (and the second value as the first  `nextValue`). However, giving a starting value keeps  `reduce`  from throwing an error if given an empty array.

# Where it gets interesting

There’s nothing that says we have to use numbers. All  `reduce`  does is give us a continuous value to manipulate as we iterate through an array.  **_That’s_** where the power of this method comes from. So, what if the starting value was  `{}`?

# Making our own count function

Sometimes you want to count all the times things appear in a list:

       const arr = ['x', 'y', 'z', 'z']; 
       // I want: { x: 1, y: 1, z: 2 };

With `forEach`:

      

    const  counts = (arr) => {
	    const  result = {};
	    arr.forEach((item) => {
		    result[item] ? result[item]++ : result[item] = 1;
	    });
	    return  result;
    }

What we’re doing is checking if there’s a value at the key of our letter. If so, then we +1 to that value. If not, then we save the key with a value of 1. But, this is the same pattern from earlier: _create_ object, _manipulate_ object, _return_ object. Keep an eye out for that pattern, because `reduce` works perfectly:

    const  counts = (arr) =>  arr.reduce((result, item) => {
	    result[item] ? result[item] += 1 : result[item] = 1
	    return  result;
    }, {});

# Breaking down our count function

Things didn’t change so much as they simplified. We’re using the same exact  [ternary](https://itnext.io/whats-a-javascript-ternary-5edf4415a09d)  to fill our  `result`  object, but this time we don’t need to waste the space of declaring a variable, because we have our accumulator argument. Then, we just return our accumulator  `result`  object. We  _always_ have to return the object because  **the return value of the callback is the value given to the accumulator in the next call.**

For fun, check out this  [code golf](https://en.wikipedia.org/wiki/Code_golf)  piece that does it all in one line:

    const  count = (arr) =>  arr.reduce((acc, val)=>{
    	return {...acc, [val]:  acc[val] ? acc[val] +1 : 1};
    },{});

[Main article >>>](https://levelup.gitconnected.com/javascript-has-a-reduce-method-you-should-use-it-ff4dd29d6c9d)