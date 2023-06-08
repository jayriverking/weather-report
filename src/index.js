
const upButton = document.getElementById("up-button");
const downButton = document.getElementById("button-down");
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

const decrementNum = () => {
  number.innerText = numInt--;
}

downButton.addEventListener("click", () => {
  console.log(number);
  decrementNum()
});