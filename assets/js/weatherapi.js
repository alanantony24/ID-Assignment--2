const appID = 'e4eb93ab8f89ca443bd386dd864ee705'
const input = document.querySelector(".locationinput input")
document.getElementById("resultbtn").addEventListener("click", e =>{
    e.preventDefault()
    const inputval = input.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputval}&appid=${appID}&units=metric`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const{main, name, sys, weather} = data;
            document.getElementById("resultbtn").onclick = function(){myfunction()};
            function myfunction(){
                document.getElementById("temp").innerHTML = 'The temperature today is ' + main.temp + '&deg;C';
                document.getElementById("weatherdesc").innerHTML = 'Weather description : ' + weather[0].description;s
                document.getElementById("countryname").innerHTML = name + ',' +  sys.country;
         }
     })

})
