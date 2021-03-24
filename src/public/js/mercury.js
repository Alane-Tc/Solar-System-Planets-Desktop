let btnAge = document.querySelector('#calculate-age');
let resultsAge = document.querySelector('#results-age');

resultsAge.innerHTML = '0' + ' Años'

let calculate = () => {
    let mercury = 4.19;
    let inputAge = parseInt(document.querySelector('#input-age').value);
    if (inputAge <= 0) {
        resultsAge.innerHTML = `No puedes tener una edad negativa`
    } else if (inputAge >= 105) {
        resultsAge.innerHTML = `Imposible vivir en esa edad`
    } else if (isNaN(inputAge)) {
        resultsAge.innerHTML = `!UY¡ Algo salió mal`
    } else {
        let age = inputAge * mercury
        resultsAge.innerHTML = `${age.toFixed(2)} años`
    }

}

btnAge.addEventListener('click', function () {
    calculate();
})

let btnWeigh = document.querySelector('#calculate-weight')
let resultWeight = document.querySelector('#result-weight')

resultWeight.innerHTML = `0`
let calculateWeigh = () => {
    let inputWeight = parseFloat(document.querySelector('#input-weigth').value);
    let mercury = 0.38;
    if (inputWeight <= 0) {
        resultWeight.innerHTML = `No puedes tener números negativos`
    } else if (isNaN(inputWeight)) {
        resultWeight.innerHTML = `!UY¡ Algo salió mal`
    } else {
        let W = inputWeight * mercury
        resultWeight.innerHTML = `${W.toFixed(2)}`
    }
}

btnWeigh.addEventListener('click', function () {
    calculateWeigh();
})

