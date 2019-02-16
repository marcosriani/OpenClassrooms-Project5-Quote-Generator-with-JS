
const quotes1 = [
   [
    "I'm from ",
    'I love ',
    'I will travel to ',
    "I don't like ",
    'I will live in ',
  ],
   [
    'Brazil ',
    'Canada ',
    'the USA ',
    'Mexico ',
    'Spain ',
   ],
   [
    "that's why I came here.",
    "I can't leave now.",
    'and I never been that far.',
    "and I'm going far away from there.",
    'because I commute there every day',
   ],
];

const quotes2 = [
   {
    stepOne: 'The book',
    stepTwo: 'The tree',
    stepThree: 'The statue',
    stepFour: 'The car',
    stepFive: 'Our house',
  },
  {
    stepOne: 'is orange',
    stepTwo: 'is black',
    stepThree: 'is yellow',
    stepFour: 'is green',
    stepFive: 'is pink',
  },
  {
    stepOne: 'and I love it.',
    stepTwo: 'and I hate it so much.',
    stepThree: "I'm giving it away.",
    stepFour: 'it is from London.',
    stepFive: 'it is a disaster',
  },
];

const arrayOfObj1 = Object.entries(quotes2[0]);
const arrayOfObj2 = Object.entries(quotes2[1]);
const arrayOfObj3 = Object.entries(quotes2[2]);

const divQuote = document.querySelector('#quote');

const firstGenerator = document.querySelector('#firstGenerator');
const secondGenerator = document.querySelector('#secondGenerator');

// number of quotes to be generated
const oneQuote = document.querySelector('#oneQuote');
const twoQuotes = document.querySelector('#twoQuotes');
const threeQuotes = document.querySelector('#threeQuotes');
const fourQuotes = document.querySelector('#fourQuotes');
const fiveQuotes = document.querySelector('#fiveQuotes');

const switcher = document.querySelector('#switch');
const buttons = document.querySelector('#buttons');

let boxQuoteButtons = document.querySelector('.box-quote-buttons');

// FIRST QUOTE GENERATOR PART 1
function firstRandomQuoteGenerator() {
  let randomQuote;
  for (let i = 0; i < quotes1.length; i += 1) {
    randomQuote = Math.floor(Math.random() * quotes1[i].length);
  }

  return randomQuote;
}

// SECOND QUOTE GENERATOR

function secondRandomQuoteGenerator() {
  const randomNumber = Math.floor(Math.random() * arrayOfObj1.length);

  // Using arrayOfObj1.length because there will always be 3 objects with equal length
  // to construct the quote

  return randomNumber;
}

let generatorButtonPressed;
function manyTimes(x) {
  let count = x;
  let quotation = [];

  if (generatorButtonPressed === 1) {
    for (let i = 0; i < count; i += 1) {
      quotation.push(
      quotes1[0][firstRandomQuoteGenerator()] + ' ' +
      quotes1[1][firstRandomQuoteGenerator()] + ' ' +
      quotes1[2][firstRandomQuoteGenerator()]
      );
      console.log(quotation[i]);
    }
  } else if (generatorButtonPressed === 2) {
    for (let i = 0; i < count; i += 1) {
      quotation.push(
        arrayOfObj1[secondRandomQuoteGenerator()][1] + ' ' +
        arrayOfObj2[secondRandomQuoteGenerator()][1] + ' ' +
        arrayOfObj3[secondRandomQuoteGenerator()][1]
      );
      console.log(quotation[i]);
    }
  }

  console.log('----    ----    ---- ');
  return quotation;
}

function htmlGenerator() {
  if (event.target.id === 'oneQuote') {
    const quoteOne = manyTimes(1);
    divQuote.innerHTML = `<p>"${quoteOne[0]}"</p>`;
  } else if (event.target.id === 'twoQuotes') {
    const quoteTwo = manyTimes(2);
    divQuote.innerHTML = `
     <p>"${quoteTwo[0]}"</p>
     <p> "${quoteTwo[1]}"</p>
    `;
  } else if (event.target.id === 'threeQuotes') {
    const quoteThree = manyTimes(3);
    divQuote.innerHTML = `
      <p>"${quoteThree[0]}"</p>
      <p> "${quoteThree[1]}"</p>
      <p> "${quoteThree[2]}"</p>
    `;
  } else if (event.target.id === 'fourQuotes') {
    const quoteFour = manyTimes(4);
    divQuote.innerHTML = `
      <p>"${quoteFour[0]}"</p>
      <p> "${quoteFour[1]}"</p>
      <p>"${quoteFour[2]}"</p>
      <p> "${quoteFour[3]}"</p>
    `;
  } else if (event.target.id === 'fiveQuotes') {
    const quoteFive = manyTimes(5);
    divQuote.innerHTML = `
      <p>"${quoteFive[0]}"</p>
      <p> "${quoteFive[1]}"</p>
      <p> "${quoteFive[2]}"</p>
      <p> "${quoteFive[3]}"</p>
      <p> "${quoteFive[4]}"</p>
    `;
  } else if (event.target.id === 'quit') {
    divQuote.innerHTML = '';
    console.clear();
    hideElement();
    firstGenerator .classList.remove('active-switch');
    secondGenerator .classList.remove('active-switch');

  }
}

function generatorExecution(x) {
  buttons.addEventListener('click', function (event) {

    if (event.target && event.target.nodeName === 'BUTTON') {

      generatorButtonPressed = x;
      console.clear();
      htmlGenerator();
    }
  });
}

function hideElement() {
  boxQuoteButtons.style.display = 'none';
}

function showElement() {
  boxQuoteButtons.style.display = 'block';
}

function pressedButton() {

  switcher.addEventListener('click', () => {

    if (event.target && event.target.nodeName === 'BUTTON') {

      if (event.target.id === 'firstGenerator') {

        secondGenerator .classList.remove('active-switch');

        if (firstGenerator.classList.contains('active-switch')) {
          firstGenerator .classList.remove('active-switch');
          hideElement();
          console.clear();
          divQuote.innerHTML = '';
        } else {
          firstGenerator.classList.add('active-switch');
          showElement();
        }

        generatorExecution(1);

      } else if (event.target.id === 'secondGenerator') {

        firstGenerator .classList.remove('active-switch');

        if (secondGenerator.classList.contains('active-switch')) {
          secondGenerator .classList.remove('active-switch');
          hideElement();
          console.clear();
          divQuote.innerHTML = '';
        } else {
          secondGenerator.classList.add('active-switch');
          showElement();
        }

        generatorExecution(2);

      }
    }
  });
}

pressedButton();
