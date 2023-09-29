console.log("this is a calculator");
// this is a comment

const txtOp1 = document.getElementById('op1')
const txtOp2 = document.getElementById('op2')
const txtOp = document.getElementById('ops')
const btncal = document.getElementById('cal')
const txtres = document.getElementById('res')

btncal.addEventListener('click', calculate)

function calculate(){
    const operador = txtOp.value
    const op1 = parseFloat(txtOp1.value)
    const op2 = parseFloat(txtOp2.value)

    if ((operador == "+" || operador == "*" || operador == "/" 
    || operador == "-") && !isNaN(op1) && !isNaN(op2))
    {
        let result;
        switch (operador){
            case "+":
                result = op1 + op2
                break;
            case "-":
                result = op1 - op2
                break;
            case "/":
                result = op1 /op2
                break
            case "*":
                result = op1 * op2
                break;
        }
        txtres.innerText ="= " + result
    }
    else{
    txtres.innerText ="imposible calculate"
}
}