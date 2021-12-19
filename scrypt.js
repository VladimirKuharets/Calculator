  const myForm = document.getElementById("myForm");
  myForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const firstNum = +document.querySelector('.firstNum').value;
    const secondNum = +document.querySelector('.secondNum').value;
    const operator = document.querySelector('.operator').value;
    const result = document.querySelector('.result');
    result.textContent = `Округлений результат:${Math.round(operators[operator](firstNum, secondNum))}`;
  })

  const operators = {
      "+": (a,b)=>{
        return a + b;
      },
      "-": (a,b)=>{
        return a - b;
      },
      "*": (a,b)=>{
        return a * b;
      },
      "/": (a,b)=>{
        return a / b;
      },
  }