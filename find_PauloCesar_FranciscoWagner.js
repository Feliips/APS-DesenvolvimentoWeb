const usuarios = [
  { id: 1, nome: "Ana", email: "ana@email.com" },
  { id: 2, nome: "Carlos", email: "carlos@email.com" },
  { id: 3, nome: "Beatriz", email: "bia@email.com" }
];

const emailProcurado = "carlos@email.com";

const usuarioEncontrado = usuarios.find(usuario => usuario.email === emailProcurado);

if (usuarioEncontrado) {
  console.log("Usuário encontrado:", usuarioEncontrado.nome);
} else {
  console.log("Usuário não encontrado!");
}