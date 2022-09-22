
let listaPessoas = [
    { nome: "João", prioritario: false },
    { nome: "Jubileu", prioritario: true },
    { nome: "Januario", prioritario: false },
  ]

function mostrarLista(listaPessoas) {
    let listaEl = document.getElementById("lista")
    let conteudo = ""
    listaPessoas.forEach(listaPessoas=> {
        conteudo += ` 
                <li class='task-item'>
                    ${listaPessoas}
                    <button class="deletar-item" onclick='deletarItem("${listaPessoas}")'> deletar 
                    </button>  
                </li>         
                `
    })
    listaEl.innerHTML = conteudo
}
adicionarItem()

function deletarItem(produtoParaDeletar) {
    listaPessoas = listaPessoas.filter(listaPessoas > listaPessoas != produtoParaDeletar)
    mostrarLista(listaPessoas)
}
    
function adicionarItem() {
    let produtoInput = document.getElementById('idInput')
    listaPessoas.push([produtoInput.value])
    mostrarLista(listaPessoas)
    produtoInput.value = ""
}

