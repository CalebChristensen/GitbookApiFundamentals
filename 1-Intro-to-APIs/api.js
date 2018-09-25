const baseURL = 'https://api.spacexdata.com/v2/rockets';

const searchForm = document.querySelector('form');
const spaceShips = document.querySelector('ul');

searchForm.addEventListener('submit', fetchSpace); //when someone subits the form we watch to run fetchSpace. IT IS NOT PULLING THE ID. 'submit' is just linked to input.
                                                    //button inside a form is a submit.
function fetchSpace(e) { //e is referring to the event of hitting the button. (e) is just a variable. We can call it whatever.
    console.log(e)
    e.preventDefault(); //e.preventDefault prevents the page from reloading after hitting the submit button. That way we can gather our info from addEventListener.

    fetch(baseURL)
    .then(result => {
        return result.json(); //lets this be user and computer can both read.
    })
    .then(json =>{
        displayRockets(json); //displayRockets should put this into our HTML so we can view the rocket types on the page.
        // console.log(json);
    }) 
    .catch(err => {
        console.log(err);
    })
}

function displayRockets(json) {
    let rockets = json.forEach(r => { //r means lets grab the name of every rocket.
        let rocket = document.createElement('li'); //create a list for every rocket in the ul of our index.html
        rocket.innerText = r.name; //add the innerText into the list
        spaceShips.appendChild(rocket);  //appendChild lists every rocket in the li brackets. Because it's parent is a ul.
    })
}