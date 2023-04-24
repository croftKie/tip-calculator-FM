const billAmount = document.querySelector(".bill>div>input");
const buttons = document.querySelectorAll(".tipSelector>div>button");
const customTip = document.querySelector(".tipSelector>div>input");
const people = document.querySelector(".people>div>input");
const reset = document.querySelector(".reset");

const tipAmount = document.querySelector(".tipAmount");
const totalAmount = document.querySelector(".totalAmount");


let bill = 0;
let tip = 0;
let numOfPeople = 0;


billAmount.addEventListener('input',(e)=>{
    bill = parseFloat(e.target.value);
});

buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        tip = 0;
        tip = parseInt(button.attributes[0].value)/100;
        e.target.classList.toggle("buttonActive");
    });
});
customTip.addEventListener('input',(e)=>{
    tip = parseInt(e.target.value)/100;
});
people.addEventListener('input',(e)=>{
    numOfPeople = parseInt(e.target.value);
});
reset.addEventListener('click',()=>{
    tipAmount.textContent = 0;
    totalAmount.textContent = 0;
    bill = 0;
    tip = 0;
    numOfPeople = 1;
    billAmount.value = "";
    people.value = "";
});

window.addEventListener('input',()=>{
    if(bill === 0 || tip === 0 || numOfPeople === 0){
        tipAmount.textContent = 0;
        totalAmount.textContent = 0;
    }
    tipAmount.textContent = `£${((bill * tip) / numOfPeople).toFixed(2)}`;
    totalAmount.textContent = `£${(bill / numOfPeople).toFixed(2)}`;
});