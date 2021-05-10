function adicionar()
{
    localStorage.setItem(nomeAnuncio.value, cliente.value);
    alert("Item adicionado.");
    nomeAnuncio = cliente.value = ""
};

function ler()
{
    var nome = localStorage.getItem(nomeAnuncio.value);
      if(nome != null)
       alert(nome)
    else
        alert("O item procurado não existe.")
}


function remover()
{
    localStorage.removeItem(nomeAnuncio.value);
    alert("Item removido.");
};

function limpar()
{
    localStorage.clear();
    alert("");
};







/*var input = document.querySelector("#investimento");

if (input <= 0,01){
    //alert("Informe um valor válido");

} else{
    var anuncioOrigi = ((input * 30) / 1);

    var visualizacao = ((anuncioOrigi * 4) * 40);

    var cliques = ((visualizacao * 12) / 100);

    var compartilhamentos = ((cliques * 3) / 20);
}

console.log(visualizacao); */