// Define o título da página
var pageTitle = 'Artigo';

$(document).ready(runPage);

function runPage() {

    //obtem o id do artigo da url
    const id = location.search.replace('?', '');

    // Altera o título da página
    setTitle(pageTitle);

    console.log('Executando a view');

}