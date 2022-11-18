let number1 = 0;
let number2 = 0;
let number3 = 0;
let number4 = 0;

let inputEl = document.querySelector("#minutes");
let timeEl = document.querySelector("#time");
let timer;

//========= Erster Button ==================
function startMinCountdown() {
    console.log("Start");
    //Länge vom Input (Eine 1 = 1 eine 10 = 2 usw.)
    let lengthInput = inputEl.value.length;

    //Falls es zwei Ziffern sind
    if (lengthInput > 1) {
        let firstDigit = inputEl.value[0];
        let secondDigit = inputEl.value[1];
        number1 = Number(firstDigit);
        number2 = Number(secondDigit);
        //Falls es eine Ziffer ist
    } else {
        number2 = Number(inputEl.value);
    }

    //Die Counter Funktion wird jede Sekunde wiederholt
    timeEl.textContent = `${number1}${number2}:${number3}${number4}`;
    timer = setInterval(counter, 1000);
}

//========= Zweiter Button ==================
function pauseMinCountdown() {
    console.log("Pause");
    clearInterval(timer);

}

//========= Dritter Button ==================
function restartMinCountdown() {
    console.log("Restart");

    timer = setInterval(counter, 1000);
    //Hole die aktuellen Zahlen und damit neu starten
}


//========= Allgemeine Funktion die Runterzählt ==================
function counter() {

    number4--;
    if (number4 < 0) { number3--; number4 = 9 };
    if (number3 < 0) { number2--; number3 = 9 };
    if (number2 < 0) { number1--; number2 = 9 };

    //Sobald die erste Zahl auf 0 geht, den Timer stoppen
    if (number1 < 0) {
        clearInterval(timer);
        number1 = 0;
        number2 = 0;
        number3 = 0;
        number4 = 0;
    }
    // Längere Schreibweise
    // if (number4 < 0) {
    //     number3--
    //     number4 = 9;
    // }

    // if (number3 < 0) {
    //     number2--
    //     number3 = 9;
    // }

    // if (number2 < 0) {
    //     number1--
    //     number2 = 9;
    // }


    console.log(`${number1}${number2}:${number3}${number4}`);
    timeEl.textContent = (`${number1}${number2}:${number3}${number4}`);
}