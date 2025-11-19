const catalogoCompleto = [
  { id: 101, nome: "Notebook", preco: 7500, vendas: 58 },
  { id: 102, nome: "Monitor", preco: 1800, vendas: 42 },
  { id: 103, nome: "Teclado", preco: 450, vendas: 120 },
  { id: 104, nome: "Mouse", preco: 250, vendas: 95 },
  { id: 105, nome: "Webcam", preco: 300, vendas: 70 },
  { id: 106, nome: "Headset", preco: 380, vendas: 88 },
];

function pegarTopProdutos(lista, quantidade) {
  return [...lista].sort((a, b) => b.vendas - a.vendas).slice(0, quantidade);
}

function paginar(lista, inicio, fim) {
  return lista.slice(inicio, fim);
}

function pegarUltimos(lista, quantidade) {
  return lista.slice(-quantidade);
}

function exibir(titulo, dados) {
  console.log("\n" + titulo);
  console.log(dados);
}

const top3 = pegarTopProdutos(catalogoCompleto, 3);
exibir("Produtos Destaque (Top 3):", top3);

const segundaPagina = paginar(catalogoCompleto, 2, 5);
exibir("Itens da 2ª Página de Gerenciamento:", segundaPagina);

const ultimosDois = pegarUltimos(catalogoCompleto, 2);
exibir("Últimos 2 itens do Catálogo:", ultimosDois);
