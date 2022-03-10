import {CountryFlags} from "./app.js"

const templateCountries = document.querySelector(".countries").innerHTML
const countriesTemplate = Handlebars.compile(templateCountries)
const countryDiv = document.querySelector(".displayCountries")
const addCountries = document.querySelector(".addCountry")
const addFlags = document.querySelector(".addFlag")
const addCountryBtn = document.querySelector(".add-country-btn")
const sortBtn = document.querySelector(".sort")
const searchFilter = document.querySelector(".search-countries")
const errorMessage = document.querySelector(".errorMessage")
let countryInst = CountryFlags()
let countryList = countryInst.returnCountries()

let displayCountries = countriesTemplate({
    country: countryInst.returnCountries()
});

addCountryBtn.addEventListener('click', () => {
    const theCountry = addCountries.value
    const addedFlag = addFlags.value
    
    countryInst.addCountry(theCountry, addedFlag)
    errorMessage.innerHTML = countryInst.returnMessage()
    setTimeout(() => { errorMessage.innerHTML = "" }, 2000);

    displayCountries = countriesTemplate({
        country: countryList
    });
    countryDiv.innerHTML = displayCountries
});

sortBtn.addEventListener('click', () => {
    countryInst.sortCountries()
    displayCountries = countriesTemplate({
        country: countryList
    });
    countryDiv.innerHTML = displayCountries

});

if (searchFilter) {
    searchFilter.addEventListener('keyup', (filSearch) => {
        const filterCountries = filSearch.target.value;
        displayCountries = countriesTemplate({
            country: countryInst.searchCountries(filterCountries)
        });
        countryDiv.innerHTML = displayCountries
    })
}
countryDiv.innerHTML = displayCountries;