function CountryFlags() {

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
    function addCountry(theCountry, addedFlag) {
        if (!theCountry || !addedFlag) {
            return ("Please add a valid country and flag")
        } else {
            let addedCountry = theCountry.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
            if (duplicateCountry(countries, addedCountry) === true || duplicateFlag(countries, addedFlag) === true) {
                return ("Country or flag has already been added")
            }
            else {
                if (lettersRegex.test(addedCountry) && regex.test(addedFlag)) {
                    countries.push({ country: addedCountry, flag: addedFlag })
                    localStorage.setItem('countryList', JSON.stringify(countries));
                }
                else if (!lettersRegex.test(addedCountry) && !regex.test(addedFlag)) {
                    return ("Please add a valid country and flag")
                }

            }
        }
    }
    function sortCountries() {
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

    }
    function searchCountries(filterCountries) {

        const displayFilter = countries.filter(function (filtered) {
            return filtered.country.toLowerCase().includes(filterCountries);
        });
        return displayFilter
    }
    function returnCountries() {
        return countries
    }
    return {
        addCountry,
        sortCountries,
        searchCountries,
        returnCountries
    }
}