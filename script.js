const apikey="b48edf98a6c9a3489ebbe021a8e6d9c3";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const icon=document.querySelector(".temp-img");
const searchBox=document.querySelector(".search input")
const search_button=document.getElementById("search_button");

async function checkWeather(city){
const response =await fetch(apiUrl+ city+`&appid=${apikey}`);
var data  =await response.json();
if(response.status==404){
    document.querySelector(".error").style.display="block";
    document.querySelector(".content").style.display="none";
}
else{
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.floor(data.main.temp)+"°C";
    document.querySelector(".wind").innerHTML=data.wind.speed+"Km/h";
    document.querySelector(".humid").innerHTML=Math.floor(data.main.humidity)+"%";
    
    if(data.weather[0].main=="Clouds"){ 
       icon.src="/weather-app-img/images/clouds.png";
    }
    else if(data.weather[0].main=="Rain"){ 
        icon.src="./weather-app-img/images/rain.png";
    }
    else if(data.weather[0].main=="Clear"){ 
        icon.src="./weather-app-img/images/clear.png";
    }
    else if(data.weather[0].main=="Drizzle"){ 
        icon.src="./weather-app-img/images/drizzle.png";
    }
    else if(data.weather[0].main=="Haze"){ 
        icon.src="./weather-app-img/images/mist.png";
    }
    else if(data.weather[0].main=="Snow"){ 
        icon.src="./weather-app-img/images/snow.png";
    }
    document.querySelector(".content").style.display="block";
}



}


search_button.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})