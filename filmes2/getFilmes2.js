function getFilmes() {

    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', 'http://localhost/ajax/filmes2/filmes.json');

    xmlHttp.onreadystatechange = () => {

        if(xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            let JSONFilmes = xmlHttp.responseText;
            
            let objJSONFilmes = JSON.parse(JSONFilmes)

            console.log(objJSONFilmes);

            for(let i in objJSONFilmes.filmes) {
                item = objJSONFilmes.filmes[i]

                console.log(item)

                
                let divRow = document.createElement('div')
                divRow.className='row'

                let divCol = document.createElement('div')
                divRow.className='col'

                let pTitulo = document.createElement('p')
                pTitulo.innerHTML = '<strong>Título:</strong> ' + item.titulo

                let pResumo = document.createElement('p')
                pResumo.innerHTML = '<strong>Resumo:</strong> ' + item.resumo

                //percorre o array de genero e adiciona o #texto na variavel genero
                let genero = ''
                for(let j in item.generos) {
                //adiciona uma virgula e um espaco - caso genero nao seja vazio -  para cada item de genero
                    if(genero) { genero += ', ' }
                    genero += item.generos[j].genero
                }

                let pGenero = document.createElement('p')
                pGenero.innerHTML = '<strong>Gênero:</strong> ' + genero

                //percorre o array de elenco e adiciona o #texto de cada ator na variavel elenco
                let elenco = ''
                for(let k in item.elenco) {
                     //adiciona uma virgula e um espaco - caso elenco nao seja vazio -  para cada item de ator
                    if(elenco) { elenco += ', ' }
                    elenco += item.elenco[k].ator
                }

                let pElenco = document.createElement('p')
                pElenco.innerHTML = '<strong>Elenco do filme:</strong> ' + elenco

                let pLancamento = document.createElement('p')
                pLancamento.innerHTML = '<strong>Data de lançamento:</strong> ' + item.dataLancamento.data + ' (' + item.dataLancamento.pais + ')'

                let hr = document.createElement('hr')

                divRow.appendChild(divCol)
                divCol.appendChild(pTitulo)
                divCol.appendChild(pResumo)
                divCol.appendChild(pGenero)
                divCol.appendChild(pElenco)
                divCol.appendChild(pLancamento)
                divCol.appendChild(hr)

                document.getElementById('lista').appendChild(divRow)

                
            }
            
        
        }


        if(xmlHttp.readyState == 4 && xmlHttp.status == 404) {
            console.log("Deu erro");
        }

    }

    xmlHttp.send()
}
