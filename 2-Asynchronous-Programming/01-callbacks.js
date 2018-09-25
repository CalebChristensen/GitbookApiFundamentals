// A callback function is function executed by another function. 
// Usually this occurs when data needs to be processed or modified 
// in some way so that it can be used later within the original function.

function callbackFunction(){
    const data = {
        name: 'Ralf Machio',
        age: 66,
        occupation: 'kickboxing'
    }
    return data;
}

function showGreeting(dataFromFunction){
    return "hello " + dataFromFunction.name + ", I hear you're the greatest?!"
}

console.log(
    showGreeting(callbackFunction())
)

// We see that in the showGreeting(callbackFunction()) line of code, we are invoking the function that we created above called callbackFunction().
// The purpose of our showGreeting() function is to return a string that is built with data that will be coming from our argument.

// But what if that data needs to be built first?

// That's where we create a function that can run a series of operations to take in values and give us something new. 
// In this case, the callbackFunction is returning us a object with 3 properties:

// 1. name 
// 2. age 
// 3. occupation 

// We can then access them in our original showGreeting() function.
// By us passing the callbackFunction() as an argument in the showGreeting(), we have this dialogue with our code

// Developer: "Hey, I see that the function showGreeting() returns some fun text."
// Computer: "Yup, it sure does! Try it out! Just give me a value and I'll put in inside of the sentence."
// Developer: "Okay, but first I need to do a couple of steps to assemble the data for you."
// Computer: "Oh sure! Take your time. Just remember to make it an object, that has the property of name. But do what you must."

// HOW CALLBACKS CAN AFFECT THE PROGRAM THREAD:

// We talked in the previous module about how our Program thread reads each line of code, then runs that line of code before moving on to the next.
// But what happens if our call back is retrieving some data and it's taking a bit too long? Our thread is at mercy of that long process.
// That is something we need to consider when we are using callbacks.

// For an example of what this might look like, let's look at our code from above. 
// This time, however, we will add in this synchronous action (the for loop) and see what gets printed first:

function callbackFunction(){
    for(let i = 0; i < 100; i++){
        console.log(i)
    }
     const data = {
        name: 'Ralf Machio', 
        age: 66, 
        occupation: 'kickboxing'
    }
    return data;
}

function showData(dataFromFunction){
    return "hello " + dataFromFunction.name
}

console.log(
    showData(callbackFunction())
)

// You see 98, 99, hello Ralf Machio
// The code has to wait until the callback function is finished to continue doing what it was intending to do.
// We will continue in the next section with Promises and see how they can be use optimize our code base.
//this simulates empty code in trying to verify with an API.