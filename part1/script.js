const quotes = [
	["I'm from ", 'I love ', 'I will travel to ', "I don't like ", 'I will live in '],
	['Brazil ', 'Canada ', 'the USA ', 'Mexico ', 'Spain '],
	["that's why I came here.", "I can't leave now.", 'and I never been that far.', "and I'm going far away from there.", 'because I commute there every day']
];

function randomQuoteGenerator () {
	let randomQuote;
	for (let i = 0; i < quotes.length; i += 1) {
		randomQuote = Math.floor(Math.random() * quotes[i].length);
	}
	return randomQuote;
}


const buttonQuoteGenerator = document.querySelector('#quote-generator');

buttonQuoteGenerator.addEventListener('click',  () => {
	document.getElementById('quote').innerHTML = "<h2>" + " \" " + quotes[0][randomQuoteGenerator()] + quotes[1][randomQuoteGenerator()] + quotes[2][randomQuoteGenerator()] + " \" " + "</h2>" ;
	console.log(quotes[0][randomQuoteGenerator()] + " " + quotes[1][randomQuoteGenerator()]  + " " +  quotes[2][randomQuoteGenerator()]);
});



