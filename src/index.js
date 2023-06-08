
const upButton = document.getElementById("up-button");
const downButton = document.getElementById("down-button");
let number = document.getElementById("temperature-now");
let numInt = parseFloat(number.innerText);

console.log('curret temp', number.innerText);

const incrementNum = () => {
    number.innerText = numInt++;
}

upButton.addEventListener("click", () => {
    console.log(number);
    incrementNum();
    //console.log(numInt, number);
});

// // upButton.addEventListener("click", (incrementNum));