// code that picks a random number between 1 and 100:
const secret = Math.floor(Math.random() * 99) + 1;
document.querySelector('#secret').innerHTML = secret;

// make counter
let counter = 0;
function check() {

//tally their guesses 
//counter += 1;
//counter = counter = 1;
 
    // your code here.
   // step 1. get what user ty[ed into imput and 
// store it in a wariable.

let userGuess = document.querySelector('#guess').value;
console.log(userGuess); 
++counter

// step 2. convert the value stored in the variable
// to a number. 
userGuess = Number(userGuess);
// step 3. lets check if the user guess the correct number.
// guesss === secret: You win!
// guess < secret: too low
// guess > secret: too high
if(userGuess === secret) {
    console.log('You Win!');
    document.querySelector('#message').innerHTML = 'You Win!';
    document.querySelector('#celebrate').className = '';
} else if (userGuess < secret) {
    console.log('Too Low!');
    document.querySelector('#message').innerHTML = 'Too Low!';
} else {
    console.log('Too High!')
    document.querySelector('#message').innerHTML = 'Too High!';
}
document.querySelector('#num-guesses').innerHTML = 'You have guessed '+counter + ' times ';
}

