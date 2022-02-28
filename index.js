const templateCountries = document.querySelector(".countries").innerHTML
const countriesTemplate = Handlebars.compile(templateCountries)
const countryDiv = document.querySelector(".displayCountries")
const addCountries = document.querySelector(".addCountry")
const addFlags = document.querySelector(".addFlag")
const addCountryBtn = document.querySelector(".add-country-btn")
const sortBtn = document.querySelector(".sort")
const searchFilter = document.querySelector(".search-countries")
const countries = [{
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

let displayCountries = countriesTemplate({
    country: countries
});

addCountryBtn.addEventListener('click', () => {
    //no duplicates
    //regex for letters only
    //validate emojis
    // let countryNames = countries.map(function(values){ return values.name });
    // let duplicateCheck = countryNames.some(function(item, idx){ 
    //     return countryNames.indexOf(item) != idx 
    // });

    let addedCountry = addCountries.value
    let addedFlag = addFlags.value

    countries.push({ country: addedCountry, flag: addedFlag })


    // if (addedCountry == duplicateCheck) {
    //     
    // }

    // const map = new Map(countries.map(country => [country.id, country]));

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
            return filtered.country.includes(filterCountries);
        });
        displayCountries = countriesTemplate({
            country: displayFilter
        });
        countryDiv.innerHTML = displayCountries;
    })
}

countryDiv.innerHTML = displayCountries;
