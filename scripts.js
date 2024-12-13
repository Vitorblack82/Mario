
const form = document.querySelector(".formulario-orçamento")
const mascara = document.querySelector(".mascara-formulario")


function CliqueiNoBotao() {

    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"

}

function cliqueiNaMascara() {
    mascara.style.visibility = "hidden"
    form.style.left = "-300px"
    form.style.transform = "translateX(0%)"

}


