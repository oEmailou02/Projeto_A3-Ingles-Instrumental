function pesquisar(){
    //secao html onde exibe resultados
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    //se o campoPesquisa for string vazia
    if(!campoPesquisa){
        section.innerHTML = "Nada encontrado. Digite um nome ou um esporte";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();

//string vazia para armazenar resultados
let resultados = "";
let titulo = ""; 
let descricao = "";
let tags = "";

// para cada dado dentro da lista de dado
for(let dado of dados){
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase();
    if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa || tags.includes(campoPesquisa))){
        //criar novo elemento html para cada resultado
        resultados += `
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="esporte">${dado.esporte}</p>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
        `;
    }
}
if(!resultados){
    resultados = "<p>Nada foi encontrado</p>"
}
//atribui resultados gerados à secao html
section.innerHTML = resultados;

}
//console.log(dados[2].titulo);
//console.log(section);



