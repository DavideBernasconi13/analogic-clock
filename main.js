const numberHours = document.querySelector('.number-hours');
const barSeconds = document.querySelector('.bar-seconds'); 

const numberEl = [];
const barEl = []; 

//create number hours
for (let i = 1; i <= 12; i++) {
    numberEl.push(
        `<span style="--index: ${i};"><p>${i}</p></span>`
    );
    console.log(numberEl);
}

numberHours.insertAdjacentHTML("afterbegin", numberEl.join("")); 


//create bar seconds
for (let i = 1; i <= 60; i++){
    barEl.push(
        `<span style="--index: ${i};"><p></p></span>`
    );
    console.log(barEl); 
}

barSeconds.insertAdjacentHTML("afterbegin", barEl.join("")); 