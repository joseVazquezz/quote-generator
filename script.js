const quoteContainer = document.getElementById(`quote-container`);

const quoteText = document.getElementById(`quote`);
const authorText = document.getElementById(`author`);
const twitterBtn = document.getElementById(`twitter`);
const newQuoteBtn = document.getElementById(`new-quote`);

let apiQuotes = [];

// Show New Quote
function newQuote() {
	// Pick a random quote from apiQuotes array
	const quote = apiQuotes[Math.random() * apiQuotes.lenght];

	authorText.textContent = quote.author;
	quoteText.textContent = quote.text;
}

//Get quote from API

async function getQuotes() {
	const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
	try {
		const responce = await fetch(apiUrl);
		apiQuotes = await response.json();
		newQuote();
	} catch (error) {
		//Handle Error Here
	}
}

//onLoad
getQuotes();
// get in trck
