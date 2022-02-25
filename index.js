const templateCountries = document.querySelector(".countries").innerHTML
const countriesTemplate = Handlebars.compile(templateCountries)
const countries = document.querySelector(".displayCountries")

const countryList = ["Argentina", "Brazil", "Chile", "Zambia", "Uganda", "Malawi", "Rwanda", "Ireland", "Switzerland"];

const flagList = ["🇦🇷", "🇧🇷", "🇨🇱", "🇿🇲", "🇺🇬", "🇲🇼", "🇷🇼", "🇮🇪", "🇨🇭"];

const countryFlags = countryList.map(function (newList, i) {
    return [newList + flagList[i]];
});


const displayCountries = countriesTemplate({
    country: countryFlags
});

countries.innerHTML = displayCountries;
