let tabela = document.querySelector(".jogo");
let vezX = true;

tabela.onclick = (event) => {
    let celula = event.target;
    if (celula.textContent == ""){
        if (vezX == true){
            celula.textContent = "X";
            vezX = false;
        }else{
            celula.textContent = "O";
            vezX = true;
        }
    }
    verificaVitoria(tabela);
}
