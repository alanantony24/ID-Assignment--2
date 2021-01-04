
const appID = 'e4eb93ab8f89ca443bd386dd864ee705';
const input = document.querySelector(".locationinput input")
document.getElementById("resultbtn").addEventListener("click", e=> {
    e.preventDefault();
    const inputval = input.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputval}&appid=${appID}&units=metric`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const{main, name, sys, weather} = data;
            document.getElementById("temp").innerHTML = main.temp + '&deg;C';
            document.getElementById("country").innerHTML = name;
            document.getElementById("desc").innerHTML = weather[0].description;
            document.getElementById('activity').innerHTML = getActivity();
            document.getElementById("img").src = getIcon();

            
            function getIcon(){
                if(weather[0].description == 'heavy intensity rain' || weather[0].description == 'moderate rain'){
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
                else if(weather[0].description == 'heavy shower snow' || weather[0].description == 'snow' || weather[0].description == 'light snow'){
                    document.getElementById("weatherapp").style.background = ' #8aa7ec';
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
                else if(weather[0].description == 'drizzle' || weather[0].description == 'light intensity drizzle'){
                    document.getElementById("weatherapp").style.background = '#8aa7ec';
                    return 'icons/chancerain.png'
                }
                else{
                    document.getElementById("weatherapp").style.background = 'grey'
                    return 'icons/unknown.png'
                }
            }
            function getActivity(){
                if(weather[0].description == 'heavy intensity rain' || weather[0].description == 'moderate rain'){
                    return 'Recommended activities: Baking, Movie Marathon, Home Workout'
                }
                else if(weather[0].description == 'mist' || weather[0].description == 'fog' || weather[0].description == 'haze'){
                    return 'Recommended activities: Fog Photography, Read, Take the day off' 
                }
                else if(weather[0].description == 'few clouds' || weather[0].description == 'scattered clouds' || weather[0].description == 'broken clouds' || weather[0].description == 'overcast clouds'){
                    return 'Recommended activities: Shopping, Sleeping, Chatting with friends or family'
                }
                else if(weather[0].description == 'clear sky'){
                    return 'Recommended activities: Outdoor games, Jogging, Picnic'
                }
                else if(weather[0].description == 'heavy shower snow' || weather[0].description == 'snow' || weather[0].description == 'light snow'){
                    return 'Recommended activities: Snowman Making, Smores, Sledding'
                }
                else if(weather[0].description == 'drizzle' || weather[0].description == 'light intensity drizzle' || weather[0].description =='light rain'){
                    return 'Recommended activities: Rainy Day Walk, Reading, Cooking'
                }
                else{
                    return 'Recommended activities: Listening to music, Walk, Movies'
                }
            }
        })
})

