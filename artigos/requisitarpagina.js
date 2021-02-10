function requisitarPagina(url) {

    document.getElementById('conteudo').innerHTML = '';
    //carregar imagem de loading na tela
    if(!document.getElementById('loading')) {
        let imgLoading = document.createElement('img');
        imgLoading.id = 'loading';
        imgLoading.src = 'loading.gif';
        imgLoading.className = "rounded mx-auto d-block";
        document.getElementById('conteudo').appendChild(imgLoading);
    }

    let ajax = new XMLHttpRequest();

    //requisição nao iniciada, state = 0
    //console.log(ajax.readyState);

    ajax.open('GET', url);

    //conexao estabelecida com o servidor, state = 1
    //console.log(ajax.readyState);

    ajax.onreadystatechange = () => {
        if(ajax.readyState == 4 && ajax.status == 200) {
            document.getElementById('conteudo').innerHTML = ajax.responseText;
            //document.getElementById('loading').remove();
        }

        if(ajax.readyState == 4 && ajax.status == 404) {
            document.getElementById('conteudo').innerHTML = '<div class="alert alert-danger" role="alert">Erro 404: Não encontrado. Tente novamente mais tarde.</div>';
            //document.getElementById('loading').remove();
        }
    }

    ajax.send();

    //console.log(ajax);
}