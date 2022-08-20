
// ====Generate Pin======
function getPin() {
    const random = Math.round(Math.random() * 10000);
    const pinStr = random + "";
  
    if (pinStr.length === 4) {
      return random;
    } else {
      return getPin();
    }
  }
  document.getElementById("generate-pin").addEventListener("click", function () {
    const pin = getPin();
    const inputFiled = document.getElementById("display-pin");
    inputFiled.value = pin;
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
    });
  
  
    // ===macthing===
    document.getElementById('verify').addEventListener('click', function(){
       const generatePinField = document.getElementById('display-pin');
       const generateValue = generatePinField.value;
  
       const inputField = document.getElementById("typed-numbers");
       const inputfieldvalue= inputField.value;
       
       const displaysuccess = document.getElementById('pin-success')
       const displayincorrect = document.getElementById('pin-failure')
  
       if(generateValue === inputfieldvalue){
          displaysuccess.style.display = 'block';
          displayincorrect.style.display = 'none';
       }else{
    
        displayincorrect.style.display = 'block';
        displaysuccess.style.display = 'none';
       }
    })
  
  
  