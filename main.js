const containerFirst = document.querySelector('.container');
const buttonLoteria = document.querySelector('.buttonBtn');
const buttonSorteioMega = document.querySelector('.buttonBtnMega');
const buttonSorteioDupla = document.querySelector('.buttonBtnDupla');
const buttonSorteioLoto = document.querySelector('.buttonBtnLoto');
const insertResult = document.querySelector('.number')

const min = 1;
const max = 60;


function randomNumber(min=1,max=60) {

  
  let showNumber = [];

  for (let i =1; i<= 6; i++) {
    showNumber.push(Math.floor(Math.random() * (max - min) + min));
    
    console.log(showNumber)
    
  }
  result = showNumber;
  insertResult.innerText = result
     
    }
buttonSorteioMega.addEventListener("click",function(){
  randomNumber()
})
    


