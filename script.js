function generate(){
let quotes = {
    '-Margaret Mead': 'Always remember that you are absolutely unique. Just like everyone else.',
    '-Robert Louis Stevenson': 'Don\'t judge each day by the harvest you reap but by the seeds that you plant. ',
    '-Aristotle': 'It is during our darkest moments that we must focus to see the light.',
    '-Maya Angelou': 'You will face many defeats in life, but never let yourself be defeated.',
    '-John Wooden': 'Do not let making a living prevent you from making a life.'
}

let authors = Object.keys(quotes)
let randomAuthor = authors[Math.floor(Math.random()*authors.length)]
let randomQuote = quotes[randomAuthor]

document.querySelector('#quote').textContent = randomQuote
document.querySelector('#author').textContent = randomAuthor
}