let mudaFundo = window.document.querySelector(".filme-principal")

function aoEntrar(){
    // console.log("teste")
 
    mudaFundo.innerHTML = "<iframe width='100%' height='100%' src='https://www.youtube.com/embed/5hAXVqrljbs?controls=0&amp;start=2' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
}

function aoSair(){
    // console.log()

    mudaFundo.style.background = "linear-gradient(rgba(0,0,0,.10),rgba(0,0,0.10)), url('../img/ozark.jpg')";
}