function verificaVitoria (tabela){
    let celulas = tabela.querySelectorAll(".celula");
    let linhas = montaLinhas(celulas);
    let colunas = montaColunas(celulas);
    let diagonais = montaDiagonal(celulas);
    for (let linha of linhas){
        let vencedor = verificaVencedor(linha);
        if (vencedor){
            console.log(vencedor + " ganhou");
            alert('Você ganhou o jogo!');
        }
    }
    for (let coluna of colunas){
        let vencedor = verificaVencedor(coluna);
        if (vencedor){
            console.log(vencedor + " ganhou");
            alert('Você ganhou o jogo!');
        }
    }
    for (let diagonal of diagonais){
        let vencedor = verificaVencedor(diagonal);
        if (vencedor){
            console.log(vencedor + " ganhou");
            alert('Você ganhou o jogo!');
        }
    }
}

 function verificaVencedor (string){
    if (string == "XXX"){
        return "X";
    }else if(string == "OOO"){
        return "O";
    }
 }

function montaLinhas (celulas){
    let linha1 = "";
    let linha2 = "";
    let linha3 = "";
    for(i in celulas){
        selecao = celulas[i].textContent;
        if (i<3){
            linha1 += selecao;
        }else if(i<6){
            linha2 += selecao;
        }else if(i<9){
            linha3 += selecao;
        }
    }
    return [linha1, linha2, linha3];
}

function montaColunas (celulas){
    let coluna1 = "";
    let coluna2 = "";
    let coluna3 = "";
    for (i in celulas){
        selecao = celulas[i].textContent;
        let restoDivisao = (i+1)%3;
        if(restoDivisao == 0){
            coluna3 += selecao;
        }else if(restoDivisao == 2){
            coluna2 += selecao;
        }else if(restoDivisao == 1){
            coluna1 += selecao;
        }
    }
    return [coluna1, coluna2, coluna3];
}

function montaDiagonal (celulas){
    let diagonal1 = "";
    let diagonal2 = "";
    for (i in celulas){
        selecao = celulas[i].textContent;
        if (i == 0 || i == 4 || i == 8){
            diagonal1 += selecao;
        }
        if (i == 2 || i == 4 || i == 6){
            diagonal2 += selecao;
        }
    }
    return [diagonal1, diagonal2];

}