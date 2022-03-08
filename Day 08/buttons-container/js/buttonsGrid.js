let btnOrder = [1, 2, 3, 6, 9, 8, 7, 4];

const btn5 = document.getElementById("btn5");

const btnIds = [
    document.getElementById("btn1"),
    document.getElementById("btn2"),
    document.getElementById("btn3"),
    document.getElementById("btn6"),
    document.getElementById("btn9"),
    document.getElementById("btn8"),
    document.getElementById("btn7"),
    document.getElementById("btn4"),
];

btn5.addEventListener('click', () => {
    let lastRef = btnIds[btnIds.length - 1].innerHTML;
    for (let i=btnOrder.length-1; i>=0; i--) {
        if (i==0) {
            btnIds[i].innerHTML = lastRef;
        } else {
            let valRef = btnIds[i-1].innerHTML;
            btnIds[i].innerHTML = valRef;
        }
    }
});