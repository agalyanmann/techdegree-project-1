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
    quote: 'It is impossible for a man to learn what he thinks he already knows.',
    source: 'Epictetus'
  },
  {
    quote: 'There is only one good, knowledge, and one evil, ignorance',
    source: 'Socrates'
  },
  {
    quote: 'We are what we repeatedly do. Excellence, then, is not an act, but a habit',
    source: 'Aristotle'
  },
  {
    quote: 'Going that one more round when you don\'t think you can, that\'s what makes all the difference in your life.',
    source: 'Rocky Balboa',
    citation: 'Rocky IV',
    year: 'November 27, 1985'
  },
  {
    quote: 'To create more positive results in your life, replace \'if only\' with \'next time\'',
    source: 'Unknown'
  }
];

/***
 * `getRandomQuote` function
***/

function getRandomQuote (array) {
  var indexNum = Math.floor(Math.random() * array.length);
  return array[indexNum]
}

/***
 * `printQuote` function
***/

function printQuote() {
  var html = ' ';
  var quoteObject = getRandomQuote(quotes);
  html += '<p class="quote">' + quoteObject.quote + '</p>';
  html += '<p class="source">' + quoteObject.source;
  if (quoteObject.citation) {
    html += '<span class="citation">' + quoteObject.citation + '</span>';
  }
  if (quoteObject.year) {
    html += '<span class="year">' + quoteObject.year + '</span>';
  }
  html += '</p>';
  //document.write(html);
  return html; 
}
document.write(printQuote());
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE OF CODE BELOW!!
***/

document.getElementsourceId('load-quote').addEventListener("click", printQuote, false);


// if (quoteObject.hasOwnProperty('citation')) {
//   html += '<span class="citation">' + quoteObject.citation + '</span>';
// }
// if (quoteObject.hasOwnProperty('year')) {
//   html += '<span class="year">' + quoteObject.year + '</span>';
// }