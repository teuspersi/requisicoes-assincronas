function getFilmes() {

    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', 'http://localhost/ajax/filmes/filmes.xml');

    xmlHttp.onreadystatechange = () => {

        if(xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            let XMLFilmes = xmlHttp.responseText;
            
            let parser = new DOMParser();

            domFilmes = parser.parseFromString(XMLFilmes, 'text/xml');
            
            jsonFilmes = xmlToJson(domFilmes);

            console.log(jsonFilmes);

            for(let i in jsonFilmes['filmes']['filme']) {
                item = jsonFilmes['filmes']['filme'][i]

                let divRow = document.createElement('div')
                divRow.className='row'

                let divCol = document.createElement('div')
                divRow.className='col'

                let pTitulo = document.createElement('p')
                pTitulo.innerHTML = '<strong>Título:</strong> ' + item['titulo']['#text']

                let pResumo = document.createElement('p')
                pResumo.innerHTML = '<strong>Resumo:</strong> ' + item['resumo']['#text']

                //percorre o array de genero e adiciona o #texto na variavel genero
                let genero = ''
                for(let j in item.genero) {
                //adiciona uma virgula e um espaco - caso genero nao seja vazio -  para cada item de genero
                    if(genero) { genero += ', ' }
                    genero += item.genero[j]['#text']
                }

                let pGenero = document.createElement('p')
                pGenero.innerHTML = '<strong>Gênero:</strong> ' + genero

                //percorre o array de elenco e adiciona o #texto de cada ator na variavel elenco
                let elenco = ''
                for(let k in item.elenco.ator) {
                     //adiciona uma virgula e um espaco - caso elenco nao seja vazio -  para cada item de ator
                    if(elenco) { elenco += ', ' }
                    elenco += item.elenco.ator[k]['#text']
                }

                let pElenco = document.createElement('p')
                pElenco.innerHTML = '<strong>Elenco do filme:</strong> ' + elenco

                let pLancamento = document.createElement('p')
                pLancamento.innerHTML = '<strong>Data de lançamento:</strong> ' + item['dataLancamento']['#text'] + ' - ' + item['dataLancamento']['@attributes']['pais']

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

            /* <div class="row">
                <hr>
                <div class="col">
                    <p><strong>Título:</strong> Título do filme</p>
                    <p><strong>Resumo:</strong> Resumo do filme</p>
                    <p><strong>Gênero:</strong> Gênero do filme</p>
                    <p><strong>Elenco:</strong> Elenco do filme</p>
                    <p><strong>Data de lançamento:</strong> Data de lançamento do filme</p>
                </div>
                <hr>
            </div> */
        }

        if(xmlHttp.readyState == 4 && xmlHttp.status == 404) {
            console.log("Deu erro");
        }

    }

    xmlHttp.send()
}
