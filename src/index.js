
const upButton = document.getElementById("up-button");
const downButton = document.getElementById("down-button");
let number = document.getElementById("temperature-now");
let numInt = parseInt(number);

console.log(numInt);

const incrementNum = () => {
    number.innerText = numInt++;
}

upButton.addEventListener("click", () => {
    console.log(number);
    incrementNum();
    //console.log(numInt, number);
});

// upButton.addEventListener("click", (incrementNum));