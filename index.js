const templateCountries = document.querySelector(".countries").innerHTML
const countriesTemplate = Handlebars.compile(templateCountries)
const countryDiv = document.querySelector(".displayCountries")
const addCountries = document.querySelector(".addCountry")
const addFlags = document.querySelector(".addFlag")
const addCountryBtn = document.querySelector(".add-country-btn")
const sortBtn = document.querySelector(".sort")
const searchFilter = document.querySelector(".search-countries")
const errorMessage = document.querySelector(".errorMessage")
const regex = /[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/
const lettersRegex = /^[A-Za-z\s]+$/

let countries = [{
    country: "Argentina",
    flag: "🇦🇷"
},
{
    country: "Brazil",
    flag: "🇧🇷"
},
{
    country: "Chile",
    flag: "🇨🇱"
},
{
    country: "Zambia",
    flag: "🇿🇲"
},
{
    country: "Uganda",
    flag: "🇺🇬"
},
{
    country: "Malawi",
    flag: "🇲🇼"
},
{
    country: "Rwanda",
    flag: "🇷🇼"
},
{
    country: "Ireland",
    flag: "🇮🇪"
},
{
    country: "Switzerland",
    flag: "🇨🇭"
}
]
if (localStorage['countryList']) {
    countries = JSON.parse(localStorage.getItem('countryList'));

}
let displayCountries = countriesTemplate({
    country: countries
});

function duplicateCountry(arr, val) {
    return arr.some(function (arrVal) {
        return val === arrVal.country;
    });
}
function duplicateFlag(arr, val) {
    return arr.some(function (arrVal) {
        return val === arrVal.flag;
    });
}
addCountryBtn.addEventListener('click', () => {
    let theCountry = addCountries.value
    let addedFlag = addFlags.value

    if (!theCountry || !addedFlag) {
        errorMessage.innerHTML = "Please add a valid country"
        setTimeout(() => { errorMessage.innerHTML = "" }, 2000);
    } else {
        let addedCountry = theCountry.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
        if (duplicateCountry(countries, addedCountry) === true || duplicateFlag(countries, addedFlag) === true) {
            errorMessage.innerHTML = "Country or flag has already been added"
            setTimeout(() => { errorMessage.innerHTML = "" }, 2000);
        }
        else {
            if (lettersRegex.test(addedCountry) && regex.test(addedFlag)) {
                countries.push({ country: addedCountry, flag: addedFlag })
                localStorage.setItem('countryList', JSON.stringify(countries));
            }
            else if (!lettersRegex.test(addedCountry) && !regex.test(addedFlag)) {
                errorMessage.innerHTML = "Please add a valid country"
                setTimeout(() => { errorMessage.innerHTML = "" }, 2000);
            }

        }
    }
    displayCountries = countriesTemplate({
        country: countries
    });

    countryDiv.innerHTML = displayCountries
});



sortBtn.addEventListener('click', () => {
    countries.sort(function (a, b) {
        let nameA = a.country.toUpperCase();
        let nameB = b.country.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }

    });
    displayCountries = countriesTemplate({
        country: countries
    });
    countryDiv.innerHTML = displayCountries;

});

if (searchFilter) {
    searchFilter.addEventListener('keyup', (filSearch) => {
        const filterCountries = filSearch.target.value;

        const displayFilter = countries.filter(function (filtered) {
            return filtered.country.toLowerCase().includes(filterCountries);
        });
        displayCountries = countriesTemplate({
            country: displayFilter
        });
        countryDiv.innerHTML = displayCountries;
    })
}
countryDiv.innerHTML = displayCountries;
