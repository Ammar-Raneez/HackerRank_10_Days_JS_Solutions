const resRef = document.getElementById('res');
let opr = '';

function addBtnValues(val, operator='') {
    resRef.innerHTML += val + operator;
    if (operator !== '') {
        opr = operator;
    }
}

function clearBtn() {
    res.innerHTML = "";
}

function eqlBtn() {
    const operands = resRef.innerHTML.split(opr).map((val) => Number(val));
    let result;
    switch (opr) {
        case '+':
            result = parseInt(operands[0], 2) + parseInt(operands[1], 2);
            break;
        case '*':
            result = parseInt(operands[0], 2) * parseInt(operands[1], 2);
            break;       
        case '-':
            result = parseInt(operands[0], 2) - parseInt(operands[1], 2);
            break;   
        case '/':
            result = Math.floor(operands[0] / operands[1]);
            break;            
    }
    
    if (opr !== '/') {
         resRef.innerHTML = result.toString(2);   
    } else {
        resRef.innerHTML = result;
    }
}
