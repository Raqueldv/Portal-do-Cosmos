function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    console.log(campoPesquisa);

    // se campoPesquisafor uma string sem nada 
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado :(</p>"
        return
    }

    //Deixa tudo escrito em letra minuscula (Na pesquisa)
    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa um string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Intera sobre cada dado da lista de dados

    for (let dado of dados) {

        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        // Se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {

            //  Cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href=${dado.link} target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.linkMaisInfo} target="_blank">Mais informações</a>
            </div>`

                ;

        }
    }

    if (!resultados){
       resultados = "<p>Nada no universo foi encontrado com este nome!</p>"
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados
}
