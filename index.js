


let produtos = ['banana', 'uva', 'mamão']

function mostrarLista(produtos) {
    let listaEl = document.getElementById("lista")
    let conteudo = ""
    produtos.forEach(produto => {
        conteudo += ` 
                <li class='task-item'>
                    ${produto}
                    <button class="deletar-item" onclick='deletarItem("${produto}")'> deletar 
                    </button>  
                </li>         
                `
    })
    listaEl.innerHTML = conteudo
}
adicionarItem()

function deletarItem(produtoParaDeletar) {
    produtos = produtos.filter(produto => produto != produtoParaDeletar)
    mostrarLista(produtos)
    
}
function adicionarItem() {
    let produtoInput = document.getElementById('idInput')
    produtos.push(produtoInput.value)
    mostrarLista(produtos)
    produtoInput.value = ""
}

