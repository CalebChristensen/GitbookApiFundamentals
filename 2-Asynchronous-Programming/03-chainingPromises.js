// Promises can be stacked on top of each other, or chained. 
// Let's say you promise your friend you'll come to his house and play with the toys you get for Christmas.

// We'll write this new promise a bit differently:

// 2nd promise
var playDate = function (gift) {
    return new Promise(
        function (resolve, reject) {
            var message = "Salutations fellow child I enjoy interacting with! I notice you received a posable plastic Batman figurine during the Yultide season. What do you think of my new " + gift.brand + ' ' + gift.item + '?';

            resolve(message); 
        }
    );
};

// Did you notice reject wasn't called? Turns out it's optional!
// We can refactor this example using Promise.resolve.

// 2nd promise
var playDate = function (gift) {
    var message = "Salutations, fellow child I enjoy interacting with! I notice you received a posable plastic Batman figurine during the Yultide season. What do you think of my new " + gift.brand + ' ' + gift.item + '?';
  ​
    return Promise.resolve(message);
  };

  // Promise call
var checkTwice = function () {
    iCanHasGift
    .then(playDate) // chain here
    .then(function (fulfilled) {
        console.log(fulfilled);
        // output: "Salutations fellow child I enjoy interacting with! I notice you received a posable plastic Batman figurine during the Yultide season. What do you think of my new HasMattelbro Turbo-Man action figure?"
    })
    .catch(function (error) {
        // all I got was a lump of coal :(
        console.log(error)
        // output: "You've made Santa's naughty list; enjoy your coal!"
    });
};
​
checkTwice();

// PROMISES SUMMARY

// Promises for actions that will take an unknown amount of time that we want to react to. So some common examples: 
// images being loaded, API calls, the page fully loading, calling a complex function, etc. 
// The key, is that since JavaScript is a single threaded language, we want to be able to do things constantly, 
// and don't want to be stuck waiting. Promises help us avoid waiting around for something to happen before we do anything else. 
// So instead of just waiting forever for my info to come back from my API call, I can do everything else I need to do and then react 
// to the info I get back when it eventually resolves.

// When you see .then think promise!

// We'll see a lot of promises when dealing with APIs! Because our API calls can take an unknown amount of time pending the internet, 
// how well the API is written, etc. We always make API calls with promises when possible, so that we can do other things while we wait!

// Promise Analogies (again):

// 1. buying concert tickets 4 months out. doing other things while waiting for the concert. 
// getting what you were promised (a concert) 4 months later, and reacting to it (having a great time); 
// or not getting what you were promised, and having to react to that (sadness)

// 2. applying to a job. doing other things while waiting to hear back like applying for more jobs. 
// reacting to either the acceptance (preparing for a new job, giving 2 weeks, excitement, etc.), 
// or the rejection (being sad, continuing to apply to other places).