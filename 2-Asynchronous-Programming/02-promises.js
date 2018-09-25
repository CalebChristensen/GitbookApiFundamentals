// MDN definition of a Promises is:

//     The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.

// Essentially, a Promise is code that is on it's way after it finishes running somewhere else. 
// This is a key idea of understanding how asynchronous programming works within JavaScript.

// STATES OF PROMISE:

// Promises, including the example above, have 3 states: 

// 1. Pending - You have to wait until December 25 to receive your gift and find out whether you are naughty or nice. 
// 2. Resolved - You've been a good little boy/girl and get that super awesome toy from Santa that you asked for. 
// 3. Rejected - That super awesome toy of your dreams isn't waiting under the tree. 

// Boolean declaration 
var amIGood = true;

// Promise 
var iCanHasGift = new Promise(
    function (resolve, reject) {
        if (amIGood) {
            var gift = {
                brand: 'HasMattelbro',
                item: 'Turbo-Man action figure'
            };
            resolve(gift); // fulfilled 
        } else {
            var naughty = "You've made Santa's naughty list; enjoy your coal!";
            reject(naughty); // rejected
        }
    }
);

// 1. amIGood - A Boolean variable to define whether you are naughty or nice.
// 2. iCanHasGift - The promise itself.
// 3. resolve(gift) - You made the nice list and received a Turbo-Man figure. The promise is resolved!
// 4. reject(naughty) - Your poor behavior has landed you on the naughty list. The promise is rejected. Don't forget your coal!

// PROPER SYNTAX FOR A PROMISE:

// new Promise(/* executor */ function (resolve, reject) {...} );

// Promise call 
var checkTwice = function () {
    iCanHasGift
        .then(function (fulfilled) {
            // nice list = gift
            console.log(fulfilled);
        // output: { brand: 'HasMattelbro', item: 'Turbo-Man action figure'} 
        })
        .catch(function (error) {
            // naughty list = coal
            console.log(error);
        // output: "You've made Santa's naughty list; enjoy your coal!"
        });
};

checkTwice();

// 1. checkTwice - function that consumes the promise iCanHasGift
// 2. .then - used with function(fulfilled) {...} if promise is resolved.
// 3. .catch - used with function(error){...} if promise is rejected.
// 4. fulfilled - the value  passed in resolve(). In our case, gift is the fulfilled value.
// 5. error - the value passed in reject(). In our case, naughty is the error value.

// 2nd promise
var playDate = function (gift) {
            var message = "Salutations fellow child I enjoy interacting with! I notice you received a posable plastic Batman figurine during the Yultide season. What do you think of my new " + gift.brand + ' ' + gift.item + '?';

            return Promise.resolve(message); 
        };

// Promise call
var checkTwice = function () {
    iCanHasGift
        .then(playDate) //chain here
        .then(function (fulfilled) {
            console.log(fulfilled);
            // output: "Salutations fellow child I enjoy interacting with! 
            // I notice you received a posable plastic Batman figurine during the Yultide season. 
            // What do you think of my new HasMattelbro Turbo-Man action figure?"
        })
        .catch(function (error) {
            console.log(error)
        });
};

checkTwice();

// What do you think the order of output will be? 
// 1. before Christmas 
// 2. Salutations fellow child I enjoy interacting with! 

// I notice you received a posable plastic Batman figurine during the Yultide season. 
// What do you think of my new HasMattelbro Turbo-Man action figure? 3. after opening gifts

// You would think this is the correct order, but you would be wrong. It's actually:

// 1. before Christmas
// 2. after opening gifts
// 3. Salutations fellow child I enjoy interacting with! 
// I notice you received a posable plastic Batman figurine during the Yultide season. 
// What do you think of my new HasMattelbro Turbo-Man action figure?

// If you think about it, it does make sense. You wouldn't play with your new action figures before Christmas. You haven't received them yet!

// This is where asynchronous programming fits in. The code will run without blocking or waiting for the result. 
// Anything that needs to wait for a promise to proceed is put in .then.

