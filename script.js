const quotes = [
    { text: "The only limit t our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
    { text: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
    { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
    { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis"}
];

const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuotebtn = document.getElementById('new-quote');

function getRandomQuote(){
    let index = Math.floor(Math.random() * quotes.length);
    return quotes[index];
}

function displayQuote(){
    let quote = getRandomQuote();
    quoteText.textContent = `"${quote.text}"`;
    quoteAuthor.textContent = `- ${quote.author}`;
}

newQuoteBtn.addEventListener('click', displayQuote);

window.onload = displayQuote;
