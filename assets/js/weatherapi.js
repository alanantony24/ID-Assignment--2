
const appID = 'e4eb93ab8f89ca443bd386dd864ee705';
const input = document.querySelector(".locationinput input")
const name = document.getElementById("exampleInputName").value;
var clothesinfo = [
    {
      "_id": "5ff2902a74fa860c00008523",
      "WeatherDesc": "Clear",
      "Temperature": 25,
      "Top": "Cotton Shirt",
      "Bottom": "Bermuda",
      "Accessories": "Cap",
      "Footwear": "Flip Flops/Sandals"
    },
    {
      "_id": "5ff290a074fa860c00008545",
      "WeatherDesc": "Rainy",
      "Temperature": 22,
      "Top": "T-Shirt",
      "Bottom": "Shorts",
      "Accessories": "Umbrella",
      "Footwear": "Flip Flops"
    },
    {
      "_id": "5ff2911d74fa860c0000856a",
      "WeatherDesc": "Heavy Rain",
      "Temperature": 22,
      "Top": "T-Shirt",
      "Bottom": "Shorts",
      "Accessories": "Rain Coat",
      "Footwear": "Sandals"
    },
    {
      "_id": "5ff2963474fa860c0000fa03",
      "WeatherDesc": "Cloudy",
      "Temperature": 23,
      "Top": "Cotton Shirt",
      "Bottom": "Jeans / Bermuda",
      "Accessories": "Hat",
      "Footwear": "Shoes "
    },
    {
      "_id": "5ff2969774fa860c0000fa23",
      "WeatherDesc": "Snow",
      "Temperature": 10,
      "Top": "Jacket",
      "Bottom": "Padded Jeans",
      "Accessories": "Gloves / Scarf",
      "Footwear": "Boots"
    },
    {
      "_id": "5ff296e274fa860c0000fa3b",
      "WeatherDesc": "Heavy Snow",
      "Temperature": -1,
      "Top": "Padded Jackets",
      "Bottom": "Thick Pants",
      "Accessories": "Beanie / Scarf",
      "Footwear": "Boots"
    }
  ]  
document.getElementById("resultbtn").addEventListener("click", e=> {
    e.preventDefault();
    const inputval = input.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputval}&appid=${appID}&units=metric`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const{main, name, wind, weather} = data;
            document.getElementById("clotheshead").innerHTML = "Hey " + name + ", here's our recommendation for today's clothing! :)"
            document.getElementById("temp").innerHTML = main.temp + '&deg;C';
            document.getElementById("country").innerHTML = name;
            document.getElementById("desc").innerHTML = weather[0].description;
            document.getElementById("pressure").innerHTML = main.pressure + "mb";
            document.getElementById("humidity").innerHTML = main.humidity + "%";
            document.getElementById("windspeed").innerHTML =  wind.speed + "km/h";
            document.getElementById("maxtemp").innerHTML = main.temp_max + "&deg;C"
            document.getElementById("img").src = getIcon();
            function getIcon(){
              if(weather[0].description == 'heavy intensity rain' || weather[0].description == 'moderate rain' || weather[0].description == 'thunderstorm'){
                document.getElementById("weatherapp").style.background = ' #8aa7ec';
                return 'icons/tstorms.png'
            }
            else if(weather[0].description == 'mist' || weather[0].description == 'fog' || weather[0].description == 'haze'){
                document.getElementById("weatherapp").style.background = 'orange';
                return 'icons/fog.png'
            }
            else if(weather[0].description == 'few clouds' || weather[0].description == 'scattered clouds' || weather[0].description == 'broken clouds'){
                document.getElementById("weatherapp").style.background = 'green';
                return 'icons/mostlycloudy.png'
            }
            else if(weather[0].description == 'clear sky'){
                document.getElementById("weatherapp").style.background = 'green';
                return 'icons/clear.png'
            }
            else if(weather[0].description == 'snow' || weather[0].description == 'light snow'){
                document.getElementById("weatherapp").style.background = ' #8aa7ec';
                return 'icons/snow.png'
            }
            else if(weather[0].description == 'heavy shower snow'){
                document.getElementById("weatherapp").style.background = '#8aa7ec';
                return 'icons/snow.png'
            }
            else if(weather[0].description == 'overcast clouds'){
                document.getElementById("weatherapp").style.background = 'orange';
                return 'icons/cloudy.png'
            }
            else if(weather[0].description == 'light rain'){
                document.getElementById("weatherapp").style.background = ' #8aa7ec';
                return 'icons/chancerain.png'
            }
            else if(weather[0].description == 'drizzle' || weather[0].description == 'light intensity drizzle' || weather[0].description == 'light intensity shower rain' || weather[0].description == 'shower rain'){
                document.getElementById("weatherapp").style.background = 'green';
                return 'icons/chancerain.png'
            }
            else{
                document.getElementById("weatherapp").style.background = 'grey'
                return 'icons/unknown.png'
            }
            }
            function getClothes(){
              if(weather[0].description == 'light rain' || weather[0].description == 'drizzrle' || weather[0].description == 'light intensity drizzle' || weather[0].description == 'light intensity shower rain' || weather[0].description == 'shower rain'){
                document.getElementById("topwear").innerHTML = clothesinfo[1].Top;
                document.getElementById("bottomwear").innerHTML = clothesinfo[1].Bottom;
                document.getElementById("footwear").innerHTML = clothesinfo[1].Footwear;
                document.getElementById("accessories").innerHTML = clothesinfo[1].Accessories;
              }
              else if(weather[0].description == 'thunderstorm' || weather[0].description == 'heavy intensity rain' || weather[0].description == 'moderate rain'){
                document.getElementById("topwear").innerHTML = clothesinfo[2].Top;
                document.getElementById("bottomwear").innerHTML = clothesinfo[2].Bottom;
                document.getElementById("footwear").innerHTML = clothesinfo[2].Footwear;
                document.getElementById("accessories").innerHTML = clothesinfo[2].Accessories;
              }
              else{
                if(main.temp >= 25){
                  document.getElementById("topwear").innerHTML = clothesinfo[0].Top;
                  document.getElementById("bottomwear").innerHTML = clothesinfo[0].Bottom;
                  document.getElementById("footwear").innerHTML = clothesinfo[0].Footwear;
                  document.getElementById("accessories").innerHTML = clothesinfo[0].Accessories;
                }
                else if(main.temp < 25 && main.temp >=20){
                  document.getElementById("topwear").innerHTML = clothesinfo[3].Top;
                  document.getElementById("bottomwear").innerHTML = clothesinfo[3].Bottom;
                  document.getElementById("footwear").innerHTML = clothesinfo[3].Footwear;
                  document.getElementById("accessories").innerHTML = clothesinfo[3].Accessories;
                }
                else if(main.temp < 20 && main.temp >=15){
                  document.getElementById("topwear").innerHTML = clothesinfo[4].Top;
                  document.getElementById("bottomwear").innerHTML = clothesinfo[4].Bottom;
                  document.getElementById("footwear").innerHTML = clothesinfo[4].Footwear;
                  document.getElementById("accessories").innerHTML = clothesinfo[4].Accessories;
                }
                else if(main.temp < 15){
                  document.getElementById("topwear").innerHTML = clothesinfo[5].Top;
                  document.getElementById("bottomwear").innerHTML = clothesinfo[5].Bottom;
                  document.getElementById("footwear").innerHTML = clothesinfo[5].Footwear;
                  document.getElementById("accessories").innerHTML = clothesinfo[5].Accessories;
                }
              }
            }
            getClothes();
        })
      })

