
const upButton = document.getElementById("up-button");
const downButton = document.getElementById("button-down");
let number = document.getElementById("temperature-now");
let numInt = parseFloat(number.innerText);

console.log('curret temp', number.innerText);

const incrementNum = () => {
    number.innerText = numInt++;
}
// decrementNum function

upButton.addEventListener("click", () => {
    console.log(number);
    incrementNum();
});

// // upButton.addEventListener("click", (incrementNum));

const decrementNum = () => {
  number.innerText = numInt--;
}

downButton.addEventListener("click", () => {
  console.log(number);
  decrementNum()
});
// downButton -- add event listender

// changing text color: 
    // checktemperature 
        // document.getElementById("myH1's Id").style.color = "red";
