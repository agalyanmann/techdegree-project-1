/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
var quotes = [
  {
    quote: '"It is impossible for a man to learn what he thinks he already knows."',
    source: 'Epictetus'
  },
  {
    quote: '"There is only one good, knowledge, and one evil, ignorance"',
    source: 'Socrates'
  },
  {
    quote: '"We are what we repeatedly do. Excellence, then, is not an act, but a habit"',
    source: 'Aristotle'
  },
  {
    quote: '"Going that one more round when you don\'t think you can, that\'s what makes all the difference in your life."',
    source: 'Rocky Balboa',
    citation: 'Rocky IV',
    year: 'November 27, 1985'
  },
  {
    quote: '"To create more positive results in your life, replace \'if only\' with \'next time\'"',
    source: 'Unknown'
  }
];


/***
 * `getRandomQuote` function
***/
function getRandomQuote (array) {
  var quoteIndex = Math.floor(Math.random() * array.length)
  return quoteIndex;
}

/***
 * `printQuote` function
***/

function printQuote (array) {
  var quoteIndex = getRandomQuote (quotes);
    document.write (array[quoteIndex].quote);
    document.write (array[quoteIndex].source); 
}

printQuote (quotes);
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE OF CODE BELOW!!
***/

document.getElementsourceId('load-quote').addEventListener("click", printQuote, false);