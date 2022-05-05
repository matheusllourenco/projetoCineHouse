const filmes = require('./database/catalogo.json');

function adicionarFilme(filme) { // ouvinte adicionar filme
    filmes.push(filme)
}

function buscarFilme(codigo) {
    return filmes.find((filme) => {
        return filme.codigo === codigo // true || false
    })
}

const listarTodosOsFilmes = () => {
    for (let i = 0; i < filmes.length; i++) {
        const filme = filmes[i];

        console.log(`
            Filme: ${filme.titulo}
            Lançou no ano: ${filme.anoLancamento}
            ${filme.emCartaz ? 'Filme esta em cartaz' : 'Filme nao esta em cartaz'}
        `)

        // IF ternario
        // filmes[i].emCartaz ? 'Filme esta em cartaz' : 'Filme nao esta em cartaz'

        // IF tradicional
        // if (filmes[i].emCartaz) {
        //     console.log('Filme esta em cartaz');
        // } else {
        //     console.log('Filme nao esta em cartaz')
        // }
    }
}


const listarFilmesEmCartaz = () => {
    for (let i = 0; i < filmes.length; i++) {
        const filme = filmes[i];

        if (filme.emCartaz) {
            console.log(`
                Filme: ${filme.titulo}
                Lançou no ano: ${filme.anoLancamento}
                ${filme.emCartaz ? 'Filme esta em cartaz' : 'Filme nao esta em cartaz'}
            `)
        }
    }
}

const alterarStatusEmCartaz = (codigo, callback) => {
    const filmeEncontrado = callback(codigo);

    filmeEncontrado.emCartaz = !filmeEncontrado.emCartaz;
    console.log(filmeEncontrado);
}

alterarStatusEmCartaz(2, buscarFilme);

adicionarFilme({
    codigo: 3,
    titulo: 'Homem Aranha 3',
    duracao: 1.5,
    atores: ['fulano 1', 'fulano 2', 'fulano 3'],
    anoLancamento: 2021,
    emCartaz: false
});

const filmeEncontrado = buscarFilme(2);

// filmeEncontrado.emCartaz = !filmeEncontrado.emCartaz
// console.log('Filme encontrado:', filmeEncontrado);
// listarTodosOsFilmes();
// listarFilmesEmCartaz();

const listarFilmesDeLongaDuracao = () => {
    return filmes.filter((filme) => {
        return filmes.duracao >= 2;
    })
};

const FilmesDeLongaDuracao = listarFilmesDeLongaDuracao();

console.log(FilmesDeLongaDuracao);
