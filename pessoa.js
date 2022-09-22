var pessoa = {
  nome: "João",
  prioritario: false
}

var listaPessoas = [
  { nome: "João", prioritario: false },
  { nome: "Jubileu", prioritario: false },
  { nome: "Januario", prioritario: false },
]

listaPessoas.push({ nome: "Maria", prioritario: false })

// function f(x) {
//   return x+5;
// }

// const y = (x) => {
//   return x+5;
// }

// console.log(f(8))
// console.log(y(0))
var pacientePrioritario = null;

listaPessoas.forEach((item) => {
  console.log(item.nome)
  if (item.prioritario == true) {
    console.log('é prioritário')
    pacientePrioritario = item;
  }
})

console.log("Paciente prioritário é: ", pacientePrioritario);

listaPaciente.forEach((passe) => {
  console.log(passe.nome)
  if (item.prioritario == true) {
    console.log('é prioritário')
    pacientePasse = passe;
  }
})

console.log("Paciente", pacientePasse);
