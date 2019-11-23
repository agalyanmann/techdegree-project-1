/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

//Array of quotes to be randomly generated. 
var quotes = [
  {
    quote: 'It is impossible for a man to learn what he thinks he already knows.',
    source: 'Epictetus',
    tag: 'Philosophy'
  },
  {
    quote: 'There is only one good, knowledge, and one evil, ignorance',
    source: 'Socrates',
    tag: 'Philosophy'
  },
  {
    quote: 'We are what we repeatedly do. Excellence, then, is not an act, but a habit',
    source: 'Aristotle',
    tag: 'Philosophy'
  },
  {
    quote: 'Going that one more round when you don\'t think you can, that\'s what makes all the difference in your life.',
    source: 'Rocky Balboa',
    citation: 'Rocky IV',
    year: 'November 27, 1985',
    tag: 'Movies'
  },
  {
    quote: 'To create more positive results in your life, replace \'if only\' with \'next time\'',
    source: 'Unknown',
    tag: 'Motivational'
  }
];

var colors = ['#FFFF00', '#DF7401', '#00FFFF', '#D358F7', '#F78181' ];

//The getRandomQuote function will generate a random index position based on the passed array length to generate a random output. In this case a random quote.

function getRandomQuote (array) {
  var indexNum = Math.floor(Math.random() * array.length); //when using random number generators with arrrays leave off the additional "+1" due to array begining at a value of "0".
  return array[indexNum]
}

function getRandomColor (array) {
  var indexNum = Math.floor(Math.random() * array.length);
  return array[indexNum]
}

//The printQuote function builds an html string to display the quotes to the index.html page. This function will also conditionally check if the the selected...
//...object contains any citations or year properties. 

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
  if (quoteObject.tag) {
    html += '<p class="tag">' + quoteObject.tag;
  }
  html += '</p>';
  document.getElementById("quote-box").innerHTML = html; //this points the function to the main "quote-box" <div>.
}




/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE OF CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false); //had to update code, due to orginal "getElementSourceID" would not allow button to function. Updated to "getElementById" function. 