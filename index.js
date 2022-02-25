const templateCountries = document.querySelector(".countries").innerHTML
const templateFlags = document.querySelector(".flags").innerHTML
const countriesTemplate = Handlebars.compile(templateCountries)
const flagsTemplate = Handlebars.compile(templateFlags)
const countries = document.querySelector(".displayCountries")
const flags = document.querySelector(".displayFlags")

const countryList = countriesTemplate({
    country: ["Argentina", "Brazil", "Chile", "Zambia", "Uganda", "Malawi", "Rwanda", "Ireland", "Switzerland"],

});
const flagList = flagsTemplate({
    flag: ["🇦🇷", "🇧🇷", "🇨🇱", "🇿🇲", "🇺🇬", "🇲🇼", "🇷🇼", "🇮🇪", "🇨🇭"]

});
//use loop or create array of objects
countries.innerHTML = countryList;
flags.innerHTML = flagList;
//loop over, push into new list
console.log(typeof(countryList));