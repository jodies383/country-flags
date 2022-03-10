export const CountryFlags = () => {

    const regex = /[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/
    const lettersRegex = /^[A-Za-z\s]+$/
    let theMessage
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

    const duplicateCountry = (arr, val) => {
        return arr.some(function (arrVal) {
            return val === arrVal.country;
        });
    }

    const duplicateFlag = (arr, val) => {
        return arr.some(function (arrVal) {
            return val === arrVal.flag;
        });
    }

    const addCountry = (theCountry, addedFlag) => {
        const addedCountry = theCountry.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
        if ((!lettersRegex.test(addedCountry) || !regex.test(addedFlag))){
            theMessage = ("Please add a valid country and flag")
        }
        else {
            if (duplicateCountry(countries, addedCountry) === false || duplicateFlag(countries, addedFlag) === false) {
                if (lettersRegex.test(addedCountry) && regex.test(addedFlag)) {
                    countries.push({ country: addedCountry, flag: addedFlag })
                    localStorage.setItem('countryList', JSON.stringify(countries));
                    theMessage = ""
                }
            }

            else {
                theMessage = ("Country or flag has already been added")
            }
        }
    }
    const returnMessage = () => {
        return theMessage
    }

    const sortCountries = () => {
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
    const searchCountries = (filterCountries) => {

        const displayFilter = countries.filter(function (filtered) {
            return filtered.country.toLowerCase().includes(filterCountries);
        });
        return displayFilter
    }

    const returnCountries = () => {
        return countries
    }

    return {
        addCountry,
        returnMessage,
        sortCountries,
        searchCountries,
        returnCountries
    }
}