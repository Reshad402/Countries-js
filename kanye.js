const loadQuote = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => display(data))
}
const display = quote =>{
    // console.log(quot)
    const blockQuote =document.getElementById('quote')
    console.log(quote)
    // blockQuote.innerText = quote.quote;
}
