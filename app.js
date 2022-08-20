// ===create functiom===
function randomNumbar() {
  const random = Math.round(Math.random() * 10000);
  const randomStr = random + "";

  if (randomStr.length === 4) {
    return random;
  } else {
    return randomNumbar();
  }
}

// getpin btn===
document.getElementById("generate-pin").addEventListener("click", function () {
  const pin = randomNumbar();
  const generateField = document.getElementById("display-pin");
  generateField.value = pin;
});


// ======Calcutor field=====
document.getElementById("calculator").addEventListener("click", function (event) {
  
      const number = event.target.innerText;
      const typeNumberField = document.getElementById("typed-numbers");
  
      if (isNaN(number)) {
          if(number === 'C'){
             typeNumberField.value='';
          }
      } else {
        const newTypeNumber = typeNumberField.value;
        const currentNumber = newTypeNumber + number;
        typeNumberField.value = currentNumber;
  
      }
    })


    // ====submit-btn===
    document.getElementById('verify').addEventListener('click', function(){
        const generatePinInput = document.getElementById('display-pin');
        const generateInside = generatePinInput.value;

        const calPinInput = document.getElementById('typed-numbers');
        const calPinInside = calPinInput.value;

        if(generateInside === calPinInside){
        displaysuccess.style.display = 'block';
}
    })
  
    
  