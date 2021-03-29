window.addEventListener("load", function () {
    let bntAge = document.querySelector("#btn-age");
    let resultAge = document.querySelector("#result-age");

    resultAge.innerHTML = '0 Años'

    let calulateAge = () => {
        let mars = 0.53;
        let inputAge = parseInt(document.querySelector('#inpud-age').value);
        if (inputAge <= 0) {
            resultAge.innerHTML = `No puedes tener una edad negativa`
        } else if (inputAge >= 105) {
            resultAge.innerHTML = `Imposible vivir en esa edad`
        } else if (isNaN(inputAge)) {
            resultAge.innerHTML = `!UY¡ Algo salió mal`
        } else {
            let age = inputAge * mars;
            resultAge.innerHTML = `${age.toFixed(2)} años`
        }
    }
    bntAge.addEventListener("click", function () { calulateAge(); });

    
})