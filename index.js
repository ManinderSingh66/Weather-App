const search = document.querySelector('.search-btn');
const weatherDiv = document.querySelector('.weather');
const h2 = document.querySelector('.forecast');
const searchDiv = document.querySelector('.search');
const img = document.querySelector('.img');
const temp = document.querySelector('.temp');
const city = document.querySelector('.city');
const title = document.querySelector('.title');
const input = document.querySelector('.input');
const humidity = document.querySelector('.humid');
const wind = document.querySelector('.speed');
const apiKey = "ecdd425bcf7dc424e546dbd04b2da968";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric";


search.addEventListener('click', (() => {
   weatherDiv.classList.toggle('show');
   h2.classList.toggle('active');
   handleData()
}
));
input.addEventListener('keydown', ((e) => {
   if (e.key === "Enter") {
      search.click();
   }
}));
async function handleData() {
   let apiCity = input.value;
   const res = await fetch(apiURL + `&appid=${apiKey}` + `&q=${apiCity}`);
   const data = await res.json();
   console.log(data);

   if (data.cod !== 200) {
      title.innerHTML = "FORECAST";
      img.src = "./images/404.png";
      city.innerHTML = 'Check Spelling';
      temp.innerHTML = 'Not Found';
      humidity.innerHTML = 'N/A';
      wind.innerHTML = 'N/A';
      return; 
   }

   title.innerHTML = data.name;
   city.innerHTML = data.name
   temp.innerHTML = Math.floor(data.main.temp) + '°C';
   humidity.innerHTML = data.main.humidity + '%';
   wind.innerHTML = data.wind.speed + ' km/h';

   console.log(data.weather[0].main)

   if (data.weather[0].main == "Rain") {
      img.src = "./images/rain.png";
   }
   else if (data.weather[0].main == "Clear") {
      img.src = "./images/clear.png";
   }
   else if (data.weather[0].main == "Mist") {
      img.src = "./images/mist.png";
   }
   else if (data.weather[0].main == "Snow") {
      img.src = "./images/snow.png";
   }
   else if (data.weather[0].main == "Clouds") {
      img.src = "./images/cloud.png";
   }
   else {
      title.innerHTML = "FORECAST";
      img.src = "./images/404.png";
      city.innerHTML = 'Check Spelling';
      temp.innerHTML = 'Not Found';
      humidity.innerHTML = 'N/A';
      wind.innerHTML = 'N/A';
   }
}
