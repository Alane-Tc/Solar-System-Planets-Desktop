window.addEventListener("load", function () {
    let bntAge = document.querySelector("#calculate-age");
    let resultAge = document.querySelector("#result-age");

    resultAge.innerHTML = `0 años`
    let calculateAge = () => {
        let venus = 1.62;
        let inputAge = parseInt(document.querySelector('#input-Age').value);
        if (inputAge <= 0) {
            resultAge.innerHTML = `No puedes tener una edad negativa`
        } else if (inputAge >= 105) {
            resultAge.innerHTML = `Imposible vivir en esa edad`
        } else if (isNaN(inputAge)) {
            resultAge.innerHTML = `!UY¡ Algo salió mal`
        } else {
            let age = inputAge * venus;
            resultAge.innerHTML = `${age.toFixed(2)} años`;
        }
    }
    bntAge.addEventListener("click", function () { calculateAge(); })

    let btnPeso = document.querySelector("#btn-peso");
    let resultPeso = document.querySelector("#result-peso");

    resultPeso.innerHTML = `0`
    let calculatePeso = () => {
        let venusPeso = 0.9;
        let inputPeso = parseInt(document.querySelector('#input-peso').value);

        if (inputPeso <= 0) {
            resultPeso.innerHTML = `No puedes tener números negativos`
        } else if (isNaN(inputPeso)) {
            resultPeso.innerHTML = `!UY¡ Algo salió mal`
        } else {
            let w = inputPeso * venusPeso;
            resultPeso.innerHTML = `${w.toFixed(2)}`;
        }
    }

    btnPeso.addEventListener("click", function () { calculatePeso(); })
});