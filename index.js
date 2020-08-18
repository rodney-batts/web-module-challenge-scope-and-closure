// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 *
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 *
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
 */
function processFirstItem(stringList, callback) {
  return callback(stringList[0]);
}

// ⭐️ Example Challenge END ⭐️

///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 *
 * 1. What is the difference between counter1 and counter2?
 *  Counter1 is returning another counter
 * 2. Which of the two uses a closure? How can you tell?
 *
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better?
 *  If you wanted to access the variable globally you would use counter2. Counter1 would be used to access certain variables.
 */

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter1() {
    return count++;
  };
}

const counter1 = counterMaker();
console.log(counter1());
console.log(counter1());
console.log(counter1());

// counter2 code
let count = 7;

function counter2() {
  return count++;
}

/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(array) {
  array.sort(() => Math.random() - 0.75);
  return array;
}
let points = [1, 2, 3, 4, 5];
randomize(points);
console.log(randomize(numbers));

//function inning(){
//  return Math.floor(math.random() * 3);
//}

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/

function finalScore(cbInning, numInnings) { //cbinning - callback param, num- number param
  let score ={
    home = 0,
    away = 0
  }
  for(i = 0; i <= numInnings; i++);
  score.home += cbInning();
  score.away += cbInning();
  }
  return score;
}

console.log(finalScore(inning, 9));
/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */

//I attemtped to follow along during the stand-up but
//I am completely lost on this one. 
