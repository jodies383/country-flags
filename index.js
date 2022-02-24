const templateCountries = document.querySelector('.countries').innerHTML

const countriesTemplate = Handlebars.compile(templateCountries)

const countries = document.querySelector(".displayCountries")

const countryList = countriesTemplate({
    country: ["Argentina", "Brazil", "Chile", "Zambia", "Uganda", "Malawi", "Rwanda", "Ireland", "Switzerland"],
    flag: ["🇦🇷", "🇧🇷", "🇨🇱", "🇿🇲", "🇺🇬", "🇲🇼", "🇷🇼", "🇮🇪", "🇨🇭"]

});
countries.innerHTML = countryList;
