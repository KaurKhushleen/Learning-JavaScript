let calculation = "";

        function updateCalculation(button){
            calculation += button.innerText;
            document.querySelector('.calculation').innerText = calculation;
        }

        function Calculate(){
        calculation = eval(calculation);
        document.querySelector('.result').innerText = calculation;
        }

        function clearCalculation(){
            calculation = '';
            document.querySelector('.calculation').innerText = calculation;
            document.querySelector('.result').innerText = calculation;
        }