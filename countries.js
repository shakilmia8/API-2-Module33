const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
};
loadCountries();
const displayCountries = countries => {
    const countriesDiv = document.getElementById('Countries');
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
                <img width="350px" src="${country.flag}" />
                <h3>${country.name}</h3>
                <p>${country.capital}</p>
                <button onclick = "loadCountryDetails('${country.name}')">Details</button>
`
        countriesDiv.appendChild(div);
    });
};

const loadCountryDetails = country => {
    const url = `https://restcountries.eu/rest/v2/name/${country}`
    fetch(url)
        .then(res => res.json())
        .then(data => countryDetails(data[0]));
}

const countryDetails = details => {
    const detail = document.getElementById('details');
    detail.innerHTML = `
    <h4>${details.name}</h4>
    <p>Population: ${details.population}</p>
    <p></p>
    <img width = "200px" src = "${details.flag}" />
    `
}