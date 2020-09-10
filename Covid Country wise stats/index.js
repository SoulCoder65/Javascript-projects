// ALL COUNTRY NAMES WITH THEIR  CODE
let country_list = [
  { name: "USA", code: "US" },
  { name: "Spain", code: "ES" },
  { name: "Italy", code: "IT" },
  { name: "France", code: "FR" },
  { name: "Germany", code: "DE" },
  { name: "UK", code: "GB" },
  { name: "Turkey", code: "TR" },
  { name: "Iran", code: "IR" },
  { name: "Russia", code: "RU" },
  { name: "Belgium", code: "BE" },
  { name: "Brazil", code: "BR" },
  { name: "Canada", code: "CA" },
  { name: "Netherlands", code: "NL" },
  { name: "Switzerland", code: "CH" },
  { name: "Portugal", code: "PT" },
  { name: "India", code: "IN" },
  { name: "Ireland", code: "IE" },
  { name: "Austria", code: "AT" },
  { name: "Peru", code: "PE" },
  { name: "Sweden", code: "SE" },
  { name: "Japan", code: "JP" },
  { name: "S. Korea", code: "KR" },
  { name: "Chile", code: "CL" },
  { name: "Saudi Arabia", code: "SA" },
  { name: "Poland", code: "PL" },
  { name: "Ecuador", code: "EC" },
  { name: "Romania", code: "RO" },
  { name: "Pakistan", code: "PK" },
  { name: "Mexico", code: "MX" },
  { name: "Denmark", code: "DK" },
  { name: "Norway", code: "NO" },
  { name: "UAE", code: "AE" },
  { name: "Czechia", code: "CZ" },
  { name: "Australia", code: "AU" },
  { name: "Singapore", code: "SG" },
  { name: "Indonesia", code: "ID" },
  { name: "Serbia", code: "RS" },
  { name: "Philippines", code: "PH" },
  { name: "Ukraine", code: "UA" },
  { name: "Qatar", code: "QA" },
  { name: "Malaysia", code: "MY" },
  { name: "Belarus", code: "BY" },
  { name: "Dominican Republic", code: "DO" },
  { name: "Panama", code: "PA" },
  { name: "Finland", code: "FI" },
  { name: "Colombia", code: "CO" },
  { name: "Luxembourg", code: "LU" },
  { name: "South Africa", code: "ZA" },
  { name: "Egypt", code: "EG" },
  { name: "Argentina", code: "AR" },
  { name: "Morocco", code: "MA" },
  { name: "Thailand", code: "TH" },
  { name: "Algeria", code: "DZ" },
  { name: "Moldova", code: "MD" },
  { name: "Bangladesh", code: "BD" },
  { name: "Greece", code: "GR" },
  { name: "Hungary", code: "HU" },
  { name: "Kuwait", code: "KW" },
  { name: "Bahrain", code: "BH" },
  { name: "Croatia", code: "HR" },
  { name: "Iceland", code: "IS" },
  { name: "Kazakhstan", code: "KZ" },
  { name: "Uzbekistan", code: "UZ" },
  { name: "Estonia", code: "EE" },
  { name: "Iraq", code: "IQ" },
  { name: "New Zealand", code: "NZ" },
  { name: "Azerbaijan", code: "AZ" },
  { name: "Slovenia", code: "SI" },
  { name: "Lithuania", code: "LT" },
  { name: "Armenia", code: "AM" },
  { name: "Bosnia and Herzegovina", code: "BA" },
  { name: "Oman", code: "OM" },
  { name: "North Macedonia", code: "MK" },
  { name: "Slovakia", code: "SK" },
  { name: "Cuba", code: "CU" },
  { name: "Hong Kong", code: "HK" },
  { name: "Cameroon", code: "CM" },
  { name: "Afghanistan", code: "AF" },
  { name: "Bulgaria", code: "BG" },
  { name: "Tunisia", code: "TN" },
  { name: "Ghana", code: "GH" },
  { name: "Ivory Coast", code: "CI" },
  { name: "Cyprus", code: "CY" },
  { name: "Djibouti", code: "DJ" },
  { name: "Latvia", code: "LV" },
  { name: "Andorra", code: "AD" },
  { name: "Lebanon", code: "LB" },
  { name: "Costa Rica", code: "CR" },
  { name: "Niger", code: "NE" },
  { name: "Burkina Faso", code: "BF" },
  { name: "Albania", code: "AL" },
  { name: "Kyrgyzstan", code: "KG" },
  { name: "Nigeria", code: "NG" },
  { name: "Bolivia", code: "BO" },
  { name: "Guinea", code: "GN" },
  { name: "Uruguay", code: "UY" },
  { name: "Honduras", code: "HN" },
  { name: "San Marino", code: "SM" },
  { name: "Palestine", code: "PS" },
  { name: "Malta", code: "MT" },
  { name: "Taiwan", code: "TW" },
  { name: "Jordan", code: "JO" },
  { name: "Réunion", code: "RE" },
  { name: "Georgia", code: "GE" },
  { name: "Senegal", code: "SN" },
  { name: "Mauritius", code: "MU" },
  { name: "DRC", code: "CD" },
  { name: "Montenegro", code: "ME" },
  { name: "Isle of Man", code: "IM" },
  { name: "Sri Lanka", code: "LK" },
  { name: "Mayotte", code: "YT" },
  { name: "Kenya", code: "KE" },
  { name: "Vietnam", code: "VN" },
  { name: "Guatemala", code: "GT" },
  { name: "Venezuela", code: "VE" },
  { name: "Mali", code: "ML" },
  { name: "Paraguay", code: "PY" },
  { name: "El Salvador", code: "SV" },
  { name: "Jamaica", code: "JM" },
  { name: "Tanzania", code: "TZ" },
  { name: "Martinique", code: "MQ" },
  { name: "Guadeloupe", code: "GP" },
  { name: "Rwanda", code: "RW" },
  { name: "Congo", code: "CG" },
  { name: "Brunei", code: "BN" },
  { name: "Somalia", code: "SO" },
  { name: "Gibraltar", code: "GI" },
  { name: "Cambodia", code: "KH" },
  { name: "Madagascar", code: "MG" },
  { name: "Trinidad and Tobago", code: "TT" },
  { name: "Gabon", code: "GA" },
  { name: "Myanmar", code: "MM" },
  { name: "Ethiopia", code: "ET" },
  { name: "Aruba", code: "AW" },
  { name: "French Guiana", code: "GF" },
  { name: "Monaco", code: "MC" },
  { name: "Bermuda", code: "BM" },
  { name: "Togo", code: "TG" },
  { name: "Liechtenstein", code: "LI" },
  { name: "Equatorial Guinea", code: "GQ" },
  { name: "Liberia", code: "LR" },
  { name: "Barbados", code: "BB" },
  { name: "Sudan", code: "SD" },
  { name: "Guyana", code: "GY" },
  { name: "Zambia", code: "ZM" },
  { name: "Cabo Verde", code: "CV" },
  { name: "Cayman Islands", code: "KY" },
  { name: "Bahamas", code: "BS" },
  { name: "French Polynesia", code: "PF" },
  { name: "Uganda", code: "UG" },
  { name: "Maldives", code: "MV" },
  { name: "Libya", code: "LY" },
  { name: "Guinea-Bissau", code: "GW" },
  { name: "Macao", code: "MO" },
  { name: "Haiti", code: "HT" },
  { name: "Syria", code: "SY" },
  { name: "Eritrea", code: "ER" },
  { name: "Mozambique", code: "MZ" },
  { name: "Saint Martin", code: "MF" },
  { name: "Benin", code: "BJ" },
  { name: "Chad", code: "TD" },
  { name: "Mongolia", code: "MN" },
  { name: "Nepal", code: "NP" },
  { name: "Sierra Leone", code: "SL" },
  { name: "Zimbabwe", code: "ZW" },
  { name: "Angola", code: "AO" },
  { name: "Antigua and Barbuda", code: "AG" },
  { name: "Eswatini", code: "SZ" },
  { name: "Botswana", code: "BW" },
  { name: "Timor-Leste", code: "TL" },
  { name: "Belize", code: "BZ" },
  { name: "New Caledonia", code: "NC" },
  { name: "Malawi", code: "MW" },
  { name: "Fiji", code: "FJ" },
  { name: "Dominica", code: "DM" },
  { name: "Namibia", code: "NA" },
  { name: "Saint Lucia", code: "LC" },
  { name: "Grenada", code: "GD" },
  { name: "Saint Kitts and Nevis", code: "KN" },
  { name: "CAR", code: "CF" },
  { name: "St. Vincent Grenadines", code: "VC" },
  { name: "Turks and Caicos", code: "TC" },
  { name: "Falkland Islands", code: "FK" },
  { name: "Greenland", code: "GL" },
  { name: "Montserrat", code: "MS" },
  { name: "Seychelles", code: "SC" },
  { name: "Suriname", code: "SR" },
  { name: "Nicaragua", code: "NI" },
  { name: "Gambia", code: "GM" },
  { name: "Vatican City", code: "VA" },
  { name: "Mauritania", code: "MR" },
  { name: "Papua New Guinea", code: "PG" },
  { name: "St. Barth", code: "BL" },
  { name: "Burundi", code: "BI" },
  { name: "Bhutan", code: "BT" },
  { name: "Caribbean Netherlands", code: "BQ" },
  { name: "British Virgin Islands", code: "VG" },
  { name: "Sao Tome and Principe", code: "ST" },
  { name: "South Sudan", code: "SD" },
  { name: "Anguilla", code: "AI" },
  { name: "Saint Pierre Miquelon", code: "PM" },
  { name: "Yemen", code: "YE" },
  { name: "China", code: "CN" },
];

// Countries list details
countryBtn = document.querySelector(".btn-outline-dark");
countryListBlock = document.querySelector(".countries-list");
searchField = document.querySelector(".searchcountry");
closeSearch = document.querySelector(".close");
countriesNames = document.querySelector(".countries-names");
country_name_text = document.querySelector(".search h2");

function showCountries() {
  let i = 0,
    ul_id;
  country_list.forEach((country, index) => {
    if (index % Math.ceil(country_list.length / 3) == 0) {
      ul_id = `list-${i}`;
      countriesNames.innerHTML += `<ul id='${ul_id}'></ul>`;
      i++;
    }
    document.getElementById(`${ul_id}`).innerHTML += `
    <li onclick="fetchData('${country.name}')" id="${country.name}">
    ${country.name}
    </li>
`;
  });
}
closeSearch.addEventListener("click", remove_countriesblock);
countryBtn.addEventListener("click", show_countries_block);

function remove_countriesblock() {
  searchField.value = "";
  resetCountries();
  countryListBlock.classList.toggle("hide");
}
function show_countries_block() {
  searchField.value = "";
  resetCountries();
  countryListBlock.classList.toggle("hide");
}
showCountries();

searchField.addEventListener("input", sorttypecountry);

function sorttypecountry() {
  searchvalue = searchField.value.toUpperCase();
  country_list.forEach((country) => {
    if (country.name.toUpperCase().startsWith(searchvalue)) {
      document.getElementById(country.name).classList.remove("hide");
    } else {
      document.getElementById(country.name).classList.add("hide");
    }
  });
}
function resetCountries() {
  country_list.forEach((country) => {
    a = document.getElementById(country.name);
  });
}

// Fetch API

var requestOptions = {
  method: "GET",
  redirect: "follow",
};

let total_cases = [],
  recovered_cases = [],
  deaths = [],
  dates = [];

function fetchData(country) {
  fetch(`https://api.covid19api.com/total/country/${country}`, requestOptions)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      country_name_text.innerHTML = country;
      showarray(result, country);
    })
    .catch((error) => console.log("error", error));
  // new data of api
  // new_cases=(parseInt(total_cases[total_cases.length-1]))-(parseInt(total_cases[total_cases.length-2]))
}

function showarray(cases_list, country) {
  (total_cases = []), (recovered_cases = []), (deaths = []);
  dates = [];
  cases_list.forEach((data) => {
    dates.push(data.Date.slice(0, 10));
    total_cases.push(data.Confirmed);
    deaths.push(data.Deaths);
    recovered_cases.push(data.Recovered);
  });
  UI(country, dates, total_cases, recovered_cases, deaths);
  // Total cases
  current_total_cases = total_cases[total_cases.length - 1];
  current_recent_cases =
    total_cases[total_cases.length - 1] - total_cases[total_cases.length - 2];

  // Recovered Cases
  current_recovered_cases = recovered_cases[recovered_cases.length - 1];
  current_recent_recovered =
    recovered_cases[recovered_cases.length - 1] -
    recovered_cases[recovered_cases.length - 2];
  // Deaths
  current_deaths_tolls = deaths[deaths.length - 1];
  current_recent_deaths_tolls =
    deaths[deaths.length - 1] - deaths[deaths.length - 2];

  no_of_cases = document.querySelector(".total-cases h4");
  no_of_cases.innerHTML = current_total_cases;
  no_of_new_cases = document.querySelector(".total-cases h5");
  no_of_new_cases.innerHTML = `+${current_recent_cases}`;
  no_recovered_cases = document.querySelector(".recovered-cases h4");
  no_recovered_cases.innerHTML = current_recovered_cases;
  no_new_recovered = document.querySelector(".recovered-cases h5");
  no_new_recovered.innerHTML = `+${current_recent_recovered}`;
  no_deaths_cases = document.querySelector(".deaths h4");
  no_deaths_cases.innerHTML = current_deaths_tolls;
  no_recent_deaths = document.querySelector(".deaths h5");
  no_recent_deaths.innerHTML = `+${current_recent_deaths_tolls}`;
}

// GET COUNTRY USING IP
let countryname = geoplugin_countryName();
fetchData(countryname);

// CHART FOR STATS
let my_chart;
function UI(country, dates, total_cases, total_recovered, total_deaths) {
  // Chart js
  if (my_chart) {
    my_chart.destroy();
  }
  var ctx = document.getElementById("myChart").getContext("2d");
  my_chart = new Chart(ctx, {
    // The type of chart we want to create
    type: "line",

    // The data for our dataset
    data: {
      labels: dates,
      datasets: [
        {
          label: "Total Cases",
          borderColor: "rgb(255, 99, 132)",
          data: total_cases,
          fill: false,
          borderColor: "brown",
          backgroundColor: "#FFF",
          borderWidth: 1,
          fontStyle: "bold",
        },
        {
          label: "Total Recovered",
          borderColor: "blue",
          data: total_recovered,
          fill: false,
          borderColor: "blue",
          backgroundColor: "blue",
          borderWidth: 1,
        },
        {
          label: "Total Deaths",
          borderColor: "red",
          data: total_deaths,
          fill: false,
          borderColor: "red",
          backgroundColor: "red",
          borderWidth: 1,
        },
      ],
    },

    // Configuration options go here
    options: {
      maintainAspectRatio: false,
      response: true,
      legend: {
        display: true,
        labels: {
          // This more specific font property overrides the global property
          fontColor: "white",
          FontFamily: "Poppins",
          fontSize: 20,
        },
      },
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              // To format the scale Lebel
              display: true,
              labelString: "Dates",
              fontColor: "brown",
              fontSize: 25,
            },
            ticks: {
              fontColor: "#cf7500", // To format the ticks, coming on the axis/lables which we are passing.
              fontSize: 14,
            },
          },
        ],
        yAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
              labelString: "Cases",
              fontColor: "brown",
              fontSize: 25,
            },
            ticks: {
              fontColor: "#cf7500",
              fontSize: 14,
            },
          },
        ],
      },
      title: {
        display: true,
        text: `Covid Stats of ${country}`,
        fontSize: 60,
        fontColor: "#382933",
        fontStyle: "bold",
        fontFamily: "Poppins",
      },
    },
  });
}
// Chart js end
