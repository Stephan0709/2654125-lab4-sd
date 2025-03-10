function fetchCountryData(){
    const countryName = document.getElementById("country-input").value;
    //console.log(countryName);
    


fetch(`https://restcountries.com/v3.1/name/${countryName}`)
.then(response =>{
    if(!response.ok){
        throw new Error("That isn't a country")
    }
    return response.json();
})
.then(data => {

    console.log("response: " , data);

    const country = data[0];
    const capital = country.capital[0];
    const population = country.population.toString();
    const region = country.region;
    const flag = country.flags.png;
    const borders = country.borders;

document.getElementById("country-info").innerHTML =`
Capital: ${capital} <br>
Population:${population} <br>
Region: ${region} <br>
<img src="${flag}" width=200> <br>
borders:${borders} 
`;

})
.catch(error => {
    document.getElementById("country-info").innerText = "That country doesn't exist";
    console.log(error);

});

}








 
