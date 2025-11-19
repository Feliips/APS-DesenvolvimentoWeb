const pedidoStringJSON = `{
  "pedido": {
    "id": "PED12345",
    "status": "Aguardando Pagamento",
    "cliente": {
      "nome": "Ana Costa",
      "email": "ana.costa@exemplo.com",
      "telefone": "11987654321"
    },
    "itens": [
      { "id": "PROD001", "nome": "Teclado Mecânico", "qtd": 1, "precoUnit": 150.00 },
      { "id": "PROD007", "nome": "Mouse Sem Fio", "qtd": 1, "precoUnit": 89.90 },
      { "id": "PROD015", "nome": "Mousepad G", "qtd": 2, "precoUnit": 25.00 }
    ],
    "total": 289.90
  }
}`;

function processarPedidoDadosString(dadosString) {
  
  const dadosObjeto = JSON.parse(dadosString);

  console.log("---- Sistema de Processamento de Pedidos ----");
  console.log(`Status do Pedido: ${dadosObjeto.pedido.status}`);
  console.log(`Cliente: ${dadosObjeto.pedido.cliente.nome} (${dadosObjeto.pedido.cliente.email})`);

  console.log("Itens Comprados:");
  dadosObjeto.pedido.itens.forEach(item => {
    console.log(`  - ${item.nome} (Qtd: ${item.qtd}, Preço Unit: R$ ${item.precoUnit.toFixed(2)})`);
  });

  console.log(`Valor Total: R$ ${dadosObjeto.pedido.total.toFixed(2)}`);
  console.log("----------------------------------------");
}

processarPedidoDadosString(pedidoStringJSON);