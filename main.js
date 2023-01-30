const containerFirst = document.querySelector('.container');
const buttonLoteria = document.querySelector('.buttonBtn');
const buttonSorteioMega = document.querySelector('.buttonBtnMega');
const buttonSorteioDupla = document.querySelector('.buttonBtnDupla');
const buttonSorteioLoto = document.querySelector('.buttonBtnLoto');
const insertResult = document.querySelector('.number')

const min = 1;
const max = 60;



buttonSorteioMega.addEventListener("click", function randomNumber(min,max) {

  min = 1;
  max = 60;
    let result = Math.random() * (max - min) + min;
  
    result = Math.floor(result.toString())      0
    insertResult.innerText = result
    console.log(result)
      
      for (let i = 0; i < result.length; i++) {
        result = Math.random() * (max - min) + min;
        result = Math.floor(result)      
        insertResult.innerText = result + result

       console.log('clicke'+result)
      }
 
    })


