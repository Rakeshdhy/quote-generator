let quote = document.getElementById("quotes");
let authors = document.getElementById("author");
const apiUrl = "https://api.quotable.io/random";


async function dailyQuotes(url){
    const response = await fetch(url);
    var data = await response.json();
    quote.innerHTML = data.content;
    authors.innerHTML = data.authorSlug;

    }

    function tweet(){
        window.open("https://twitter.com/intent/tweet?text=Hello%20world")


    }





