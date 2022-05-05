function adicionarFilme (novoFilme){
    filmes.push(novoFilme);
}

adicionarFilme({
        código: 3,
        título: "harry potter 3",
        duração: 2.2,
        atores: ["harry", "emyroneee"],
        anoDeLançamento: 2017,
        emCartaz: true,

});

console.log(filmes);

// function catalogo(){
//     return filmes[2];    
// };

// console.log(catalogo());


// function buscarFilme(código){
//     filmes.find((filme) => {   
//         return filme.codigo === 2   //true || false
//     });

// const filmeEncontrado = buscarFilme(2);


