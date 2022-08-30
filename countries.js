const country = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => display(data))
} 
const display=(user)=>{
    const userContainer = document.getElementById('countries-container')
    for(const use of user){
        // console.log(use)
        // Crete a div
        const divMade = document.createElement('div')
        divMade.classList.add('classDilam')
        divMade.innerHTML=`
        <h3>Country name-${use.name.common}</h3>
        <p>Capital-${use.capital? use.capital[0] : 'no Capital'}</p>
        <button onclick="loadCountryDetails('${use.cca2}')">Details</button>
        `
        // .capital? use.capital[0] : 'no Capital'}
        // Now add this the 7 lines created a div
        userContainer.appendChild(divMade)
    }
    
}
const loadCountryDetails = (code) =>{
    // used ( ` `)
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    // console.log('get country details with link',url)
    fetch(url)
    .then(res => res.json())
    .then(data=> displayCountryDetails(data[0]))

    // Here we get the object as the the obj is in the array of the first element 
}
const displayCountryDetails = user =>{
    console.log(user)
}



                // ------------------||||||||||||||||||||||||||---------------------
// Work one done to get the code
// const loadCountryDetails = (code)=> {
//     console.log('get Country details',code)
// }
country();