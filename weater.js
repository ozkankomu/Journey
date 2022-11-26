//97e2859d1f4268f73c0a90c3e2216c04
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

let search = (city) => {
    
    const whapiKey = '97e2859d1f4268f73c0a90c3e2216c04';
    const whurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${whapiKey}`


    fetch(whurl)
        .then((res) => res.json())
        .then((data) => whdata(data));


    let whdata = (weatherinfo) => {
        let weatherloc = document.getElementById('weatherloc');
        let weatherinfoid = document.getElementById('weatherinfo');
        let weathertempmax = document.getElementById('weathertempmax');
        let weathertempmin = document.getElementById('weathertempmin');
        let weatherhumi = document.getElementById('weatherhumi');



        const { name, main: { temp, temp_min, temp_max, humidity } } = weatherinfo
        const { description, icon } = weatherinfo.weather[0];

        document.getElementById('whimg').src = `https://openweathermap.org/img/wn/${icon}.png`

        weatherinfoid.innerText = `${temp}°C ${description}`;
        weatherloc.innerText = name;
        weathertempmax.innerText = `max: ${temp_max}°C`
        weathertempmin.innerText = `min: ${temp_min}°C`
        weatherhumi.innerText = `humidity: ${humidity}%`
    }

};


const weatherinp = document.getElementById('weatherinp');

weatherinp.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {

        event.preventDefault();

        search(weatherinp.value);

    }
});

window.addEventListener('load', () => {

    search('Washington')

})

