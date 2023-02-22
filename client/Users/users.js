// mock api url
const api_uri = "https://jsonplaceholder.typicode.com/users/";

// Defining async function to get data from aoi url
async function getApi(uri) {

    // Storing response from api
    const response = await fetch(uri);

    // Storing data in json format
    let data = await response.json();
    console.log(data);
    if (response) {
        hideLoader();
    }
    show(data);
}

// Invoking async function
console.log(getApi(api_uri))
getApi(api_uri);

// Function to hide loader
let hideLoader = () => { 
    document.getElementById('loading').style.display = 'none';
}

function show(data) {
    let card =
    `
        <h2 class="card-title">Name</h2>
        <p class="card-text">Email</p>
        <p class="card-text">Company Name</p>
        <p class="card-text">Catch phrase</p>
    `;
    for ( let i of data.users) {
        card += 
        `
            <h2>${i.name}</h2>
            <p>${i.email}</p>
            <p>${i.company.name}</p>
            <p>${i.company.catchPhrase}</p>
        `;
    }
    document.getElementById("users").innerHTML = card
}
