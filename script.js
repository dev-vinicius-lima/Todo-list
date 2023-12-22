const button = document.querySelector('.btn')
const input = document.querySelector('#txt-input')
const listCompleta = document.querySelector('.listGeral')

let listItens = [] // aramazenar os itens digitados

button.addEventListener('click', () => {
    if (input.value == "") {
        alert('Adicione uma tarefa')
    }else {
        listItens.push({
            tarefa: input.value,
            concluida: false
        })
        input.value = '' // limpar o input
    }


    mostrarTarefas()
})

function mostrarTarefas() {
    let novaLi = ''

    listItens.forEach((item, posicao) => { // recebendo o item []
        novaLi = novaLi + ` 
        <li class="list-item ${item.concluida && "done"}">
            <img src="img/checked.png" alt="check"  onclick="concluirTarefa(${posicao})">
               <p>${item.tarefa}</p>
            <img src="img/delete.png" alt="delete"  onclick="deletarItem(${posicao})"> 
        </li>
        ` // ${posicao} esta enviando a posição index do item 
    })

    listCompleta.innerHTML = novaLi
    localStorage.setItem('lista', JSON.stringify(lista)) // guardar [] no localStorage

}
function concluirTarefa(posicao) {
    listItens[posicao].concluida = !listItens[posicao].concluida
    mostrarTarefas()

}

function deletarItem(posicao) {
    listItens.splice(posicao, 1) // deletando posiçao do array
    mostrarTarefas() // ataulizar a lista apos remover
}

function recarregarTela() {
    listItens = JSON.parse(tarefaLocalStorage)
    mostrarTarefas()
}

recarregarTela()
