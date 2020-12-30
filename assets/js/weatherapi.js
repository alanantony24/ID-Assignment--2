const appID = 'e4eb93ab8f89ca443bd386dd864ee705'
const input = document.querySelector(".locationinput input")
document.getElementById("locbutton").addEventListener("click", e =>{
    e.preventDefault()
    const inputval = input.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputval}&appid=${appID}&units=metric`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const{main, name, sys, weather} = data;
            document.getElementById("locbutton").onclick = function(){myfunction()};
            function myfunction(){
            document.getElementById("temps").innerHTML = main.temp;
            document.getElementById("weatherdesc").innerHTML = weather[0].description;
         }
     })

})


