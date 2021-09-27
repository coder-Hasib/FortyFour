/* const loadCountries = () =>{
    fetch('https://restcountries.com/v3/all')
    .then(response => response.json())
    .then(data =>displayCountries(data))
};
const displayCountries = countries => {
    console.log(countries[0]);
    const container =document.getElementById('countries')

    const countryHTML = countries.map(country =>  getCountryHTML(country))
    console.log(countryHTML);
    container.innerHTML= countryHTML.join( ' ')
}
const getCountryHTML = country =>{
    return `
    <div class="country">
    <h3>${ country.capital} </h3>
    <h2>${country.name.official}</h2>
    <img src ="${country.flags[0]}" alt="flage">
    </div>
    
    `
}
loadCountries() */

const loadCountries = () =>{
    fetch('./myAPI.JSON')
    .then(response => response.json())
    .then(data =>displayCountries(data))
};
const displayCountries = countries => {
    console.log(countries[0]);
    const container =document.getElementById('countries')

    const countryHTML = countries.map(country =>  getCountryHTML(country))
    console.log(countryHTML);
    container.innerHTML= countryHTML.join( ' ')
}
const getCountryHTML = country =>{
    const{name,company,img}=country
    return `
    <div class="country">
    <img src ="${img}" alt="flage">
    <h2>${ name} </h2>
    <h4>${company}</h4>
    
    </div>
    
    `
}
loadCountries()