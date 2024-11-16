var quotes = [`“Be yourself; everyone else is already taken.”
― Oscar Wilde` ,
    `“So many books, so little time.”
― Frank Zappa`,
    `“A room without books is like a body without a soul.”
― Marcus Tullius Cicero` ,
    `“Be the change that you wish to see in the world.”
― Mahatma Gandhi`,
    `“If you tell the truth, you don't have to remember anything.”
― Mark Twain`,
    `“Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .”
― C.S. Lewis, The Four Loves`,
`“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”
― Ralph Waldo Emerson`,
`“It is better to be hated for what you are than to be loved for what you are not.”
― Andre Gide, Autumn Leaves`
]


function newQuote() {
    var randomQute = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote").innerHTML = randomQute;
}
