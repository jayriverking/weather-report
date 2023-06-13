const state ={
    temp: 0,
    number: document.getElementById("temperature-now"),
}
const upButton = document.getElementById("up-button");
const downButton = document.getElementById("button-down");
const tempButton = document.getElementById("get-temp")
// let number = document.getElementById("temperature-now");
// let temp = parseFloat(number.innerText);
state.temp = parseFloat(state.number.innerText);
const weatherGarden = document.getElementById('weather-garden');
const weatherEmojis = document.getElementById('weather-emojis');
const cityDisplay = document.getElementById("city-display")
const cityId = document.getElementById("city-input")


function display() {
    cityDisplay.innerText = cityId.value;
}

// console.log('curret temp', number.innerText);

const incrementNum = () => {
    state.number.innerText = state.temp++;
}
// color changing function
const colorTemp = () => {

    if (state.temp < 49){
        state.number.style.color = "teal";
    }
    else if (state.temp < 59){
        state.number.style.color = "green";
    }
    else if (state.temp < 69){
        state.number.style.color = "yellow";
    }
    else if (state.temp < 79){
        state.number.style.color = "orange";
    }
    else {

        state.number.style.color = "red";
    }

}

const weatherGardenChanges = () => {

  if (state.temp < 59){
      weatherGarden.style.backgroundColor = "green";
      weatherEmojis.innerHTML = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"
  }
  else if (state.temp < 69){
      weatherGarden.style.backgroundColor = "yellow";
      weatherEmojis.innerHTML = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃"
  }
  else if (state.temp < 79){
      weatherGarden.style.backgroundColor = "orange";
      weatherEmojis.innerHTML = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷"
  }
  else {
          weatherGarden.style.backgroundColor = "red";
          weatherEmojis.innerHTML = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂"
  }

}


upButton.addEventListener("click", () => {
    console.log(state.temp);
    incrementNum();
    colorTemp(state.temp);
    weatherGardenChanges(state.temp);
});


const decrementNum = () => {
    state.number.innerText = state.temp--;
}

downButton.addEventListener("click", () => {
    console.log(state.temp);
    decrementNum()
    colorTemp(state.temp)
    weatherGardenChanges(state.temp);
});

const getLanLon = (city) => {
    return axios.get(`http://localhost:5000/location?q=${city}`)
    .then(response => {
        let lat = response.data[0].lat
        let lon = response.data[0].lon
        console.log(response.data[0].display_name)
        return [lat, lon]
    })
    .catch(error => {
        console.log(error)
    })
}

const getWeather = (coords) => {
    let lat = coords[0]
    let lon = coords[1]
    return axios.get(`http://localhost:5000/weather?lat=${lat}&lon=${lon}`)
    .then(response => {
        console.log(response.data.main.temp)
        return response.data.main.temp
    }).catch(error => {
        console.log(error)
    })
}

// should this be async-await so that I can change the innerTEXT? probably yes! (unless I can use .then to change the innerText (lol))

// tempButton.addEventListener("click", () => {
//     const cityNow = cityDisplay.innerText;
//     console.log(cityNow)
//     getLanLon(cityNow).then(resp => getWeather(resp))

// })

const kelvinToFarenheit = (k) => {
    return Math.floor((k - 273.15) * 9/5 + 32);
}

tempButton.addEventListener("click", () => {
    const cityNow = cityDisplay.innerText;
    console.log(cityNow)
    getLanLon(cityNow)
    .then(resp => getWeather(resp))
    .then(weather => {
        state.temp = kelvinToFarenheit(weather)
        state.number.innerText = state.temp;
    })

    
})