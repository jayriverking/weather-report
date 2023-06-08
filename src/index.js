
const upButton = document.getElementById("up-button");
const downButton = document.getElementById("button-down");
let number = document.getElementById("temperature-now");
let numInt = parseFloat(number.innerText);
const weatherGarden = document.getElementById('weather-garden');

console.log('curret temp', number.innerText);

const incrementNum = () => {
    number.innerText = numInt++;
}
// color changing function
const colorTemp = (number) => {

    if (numInt < 49){
        number.style.color = "teal";
    }
    else if (numInt < 59){
        number.style.color = "green";
    }
    else if (numInt < 69){
        number.style.color = "yellow";
    }
    else if (numInt < 79){
        number.style.color = "orange";
    }
    else {

            number.style.color = "red";
    }

}

const weatherGardenChanges = (number) => {

  if (numInt < 59){
      weatherGarden.style.backgroundColor = "green";
  }
  else if (numInt < 69){
      weatherGarden.style.backgroundColor = "yellow";
  }
  else if (numInt < 79){
      weatherGarden.style.backgroundColor = "orange";
  }
  else {

          weatherGarden.style.backgroundColor = "red";
  }

}


upButton.addEventListener("click", () => {
    console.log(number);
    incrementNum();
    colorTemp(number);
    weatherGardenChanges(number);
});


const decrementNum = () => {
    number.innerText = numInt--;
}

downButton.addEventListener("click", () => {
    console.log(number);
    decrementNum()
    colorTemp(number)
    weatherGardenChanges(number);
});

