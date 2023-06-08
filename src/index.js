
const upButton = document.getElementById("up-button");
const downButton = document.getElementById("button-down");
let number = document.getElementById("temperature-now");
let numInt = parseFloat(number.innerText);

console.log('curret temp', number.innerText);

const incrementNum = () => {
    number.innerText = numInt++;
}
// color changing function
const colorTemp = (number) => {
    let numInt = parseFloat(number.innerText);
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

upButton.addEventListener("click", () => {
    console.log(number);
    incrementNum();
    colorTemp(number);
});



const decrementNum = () => {
    number.innerText = numInt--;
}

downButton.addEventListener("click", () => {
    console.log(number);
    decrementNum()
    colorTemp(number)
});
