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
        
  while (showNumber.length < 6) {
  let numberMega = Math.floor(Math.random() * (max - min)+min)
  
  if (showNumber.indexOf(numberMega) == -1) {
  showNumber.push(numberMega)
  }
  }
          
 result = showNumber.sort()
 insertResult.innerText = result
}
    function numberRandom(min=1,max=50){
      let numberShow=[]
              
      while (numberShow.length < 6) {
      let numberNumber = Math.floor(Math.random() * (max - min)+min)
      
      if (numberShow.indexOf(numberNumber) == -1) {
      numberShow.push(numberNumber)
      }
      }
              
     result = numberShow.sort()
     insertResult.innerText = result
  }
    function numberLot(min=1,max=25){
      
        let randomArray = []
        
        while (randomArray.length < 15) {
        let randomNum = Math.floor(Math.random() * (max - min)+min)
        
        if (randomArray.indexOf(randomNum) == -1) {
        randomArray.push(randomNum)
        }
        }
                
       result = randomArray.sort()
       insertResult.innerText = result
    }
buttonSorteioMega.addEventListener("click",function(){
  randomNumber()
})

buttonSorteioDupla.addEventListener('click',function(){
numberRandom()
})

buttonSorteioLoto.addEventListener('click', function(){
    numberLot();
}
)