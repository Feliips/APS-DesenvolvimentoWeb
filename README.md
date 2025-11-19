# 📘 APS – Desenvolvimento Web  
## Análise e Aplicação de Métodos JavaScript  
### Método Apresentado: `.slice()`

Este repositório faz parte da **Avaliação Prática Supervisionada (APS)** da disciplina de **Desenvolvimento Web**, do curso de Análise e Desenvolvimento de Sistemas da **Unifametro**.

O objetivo da atividade é **pesquisar, compreender e demonstrar o uso prático de um método fundamental da linguagem JavaScript**, aplicando-o em um cenário real, além de apresentar a explicação do método de forma teórica e prática.

---

## 🎯 Objetivo do Projeto

A dupla formada por **Felipe de Oliveira** e **Jonas Lino** ficou responsável por apresentar o método:

### 🔹 `.slice()`

Nosso trabalho consiste em:
- Criar um **código funcional**, utilizando o método `.slice()` em um contexto real.
- Elaborar uma explicação teórica sobre o método.
- Demonstrar na prática como ele resolve um problema.
- Apresentar oralmente os resultados para a turma.

---

# 📌 Sobre o Método `.slice()`

O método **`.slice()`** é utilizado para **extrair partes de um array** sem modificar o array original, retornando um novo array baseado nos índices especificados.

### ✔️ Sintaxe:


- **inicio:** índice onde a extração começa.  
- **fim:** índice onde a extração termina (não é incluído).  
- Se valores negativos forem usados, a contagem é feita a partir do final do array.  

### ✔️ O método retorna:
- Um **novo array**, contendo apenas os itens recortados.

---

#  Projeto Desenvolvido

Criamos um pequeno sistema para simular um **catálogo de produtos**, realizando três operações reais e comuns em sistemas:

1. **Gerar um ranking com os produtos mais vendidos**  
   → Utiliza `slice(0, 3)` após uma ordenação.

2. **Criar uma página de gerenciamento com itens de um intervalo específico**  
   → Exemplo de uso típico de slice em paginação: `slice(2, 5)`.

3. **Obter os últimos produtos cadastrados no catálogo**  
   → Utilizando índice negativo: `slice(-2)`.

Essas funcionalidades demonstram situações em que o método `.slice()` é aplicado no dia a dia no desenvolvimento de sistemas.

---

#  Arquivo Entregue

O arquivo enviado ao repositório segue o padrão obrigatório:



Ele contém o código completo da atividade, totalmente funcional e **sem comentários**, conforme solicitado pela professora.

---

#  Instruções para Execução

Para executar o arquivo localmente:

1. Instale o Node.js (se ainda não tiver).
2. Navegue até a pasta onde está o arquivo.
3. No terminal, execute o comando:



Você verá no console:
- Os 3 produtos mais vendidos.
- A segunda página do catálogo.
- Os dois últimos itens cadastrados.
---

# ✔️ Observação Final
Este projeto foi desenvolvido exclusivamente para fins acadêmicos, como parte da APS da disciplina de Desenvolvimento Web, com foco no aprendizado e aplicação prática de métodos JavaScript.

