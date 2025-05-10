const apikey="29a584c7f81ed09e8e88c6ad7d34648e";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=gandhinagar";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");

https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=29a584c7f81ed09e8e88c6ad7d34648e&units=metric


searchbtn.addEventListener("click", ()=>{
    checkWeather(searchbox.value);
});
async function checkWeather(city) {
    const response = await fetch(apiurl +city+ `&appid=${apikey}`);
    const data = await response.json();    
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML  = Math.round(data.main.temp) +"°C";
    document.querySelector(".humidity").innerHTML = Math.round(data.main.humidity) +"%";
    document.querySelector(".wind").innerHTML =data.wind.speed + "km/h";
}
// 

