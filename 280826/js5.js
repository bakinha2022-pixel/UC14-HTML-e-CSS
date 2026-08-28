let Usuariocorreto = "admin";
let Senhacorreta = "1234";

let usuario = prompt("Digite seu usuário:");
let senha = prompt("Digite sua senha:");

if (usuario === Usuariocorreto && senha === Senhacorreta) {
  console.log("Login bem-sucedido!");
}
else if (usuario !== Usuariocorreto && senha === Senhacorreta) {
  console.log("Usuário incorreto!");
}
