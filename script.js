var cityinh = document.getElementById('cityinh')
var temp = document.getElementById('temp')
var tempmin = document.getElementById('tempmin')
var tempmax= document.getElementById('tempmax')
var humidity = document.getElementById('humidity')
var wind_speed = document.getElementById('wind_speed')
function getCity(event) {
  event.preventDefault()
    var city = document.getElementById('city').value;
    console.log(city);
    cityinh.innerHTML = city;
    getWeather(city); // Call getWeather with the city name
  }
  
  function getWeather(city) {
    const options = {
      method: 'GET',
      headers: {
        'content-type': 'application/octet-stream',
        'X-RapidAPI-Key': '763c810bdfmshb9f4669b80c3925p18d818jsn3db5be365864',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
      }
    };
  
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
      .then(response => response.json())
      .then(response => 
      {console.log(response)
      temp.innerHTML=response.temp
      tempmin.innerHTML = response.min_temp
    humidity.innerHTML= response.humidity
    wind_speed.innerHTML=response.wind_speed

    

  }

      )

      .catch(err => console.error(err));
  }

  