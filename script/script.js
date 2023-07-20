
const form = document.querySelector('#form');


let lista = Array()

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const inputValues = document.getElementById("todo-input").value;

    // let option = comboTasks.options[comboTasks.selectedIndex].text;

    let toDo = {
        inputValues,
        statusTask: 'Não Finalizada',
    }

    console.log(toDo);
    console.log(JSON.stringify(toDo))

    if(entradaValida(toDo.inputValues)) {
        inserirLista(toDo)
        insertDOM(toDo)
    } else {
        alert("Não é possível incluir uma tarefa vazia!");
    }

    console.log(lista)
})


function entradaValida(entrada) {
    if(entrada == '') {
        return false;
    } else {
        return true;
    }
}

function inserirLista(array) {
    lista.push(array);
}

function insertDOM(array) {

    const ul = document.querySelector('.todo-list');

    //Caixa de texto da tarefa

    let li = document.createElement('li');
    li.className = 'todo-item'
    
    let inputValue = document.getElementById('todo-input').value;

    let textNode = document.createTextNode(inputValue);
    li.appendChild(textNode);


    // Botões

    //Botão Check
    let btnCheck = document.createElement('button');
    btnCheck.className = 'check-btn'

    let imgCkBtn = document.createElement('i');
    imgCkBtn.className = 'fas fa-check';
    btnCheck.appendChild(imgCkBtn);


    //Botão Trash
    let btnTrash = document.createElement('button');
    btnTrash.className = 'trash-btn';

    let imgTrashBtn = document.createElement('li');
    imgTrashBtn.className = 'fas fa-trash';
    btnTrash.appendChild(imgTrashBtn)


    // Associando pai ao filho
    let div = document.createElement('div');
    div.className = 'todo';
    div.appendChild(li)
    div.appendChild(btnCheck);
    div.appendChild(btnTrash);
    ul.appendChild(div);

    const divContainer = document.querySelector('.todo-container');
    divContainer.appendChild(ul);


    document.getElementById('todo-input').value = ''

    // ARRUMAR
    // filterTasks(array) 

    //Eventos nos botões

    //btnCheck
    btnCheck.addEventListener('click', (event) => {

        if(li.className == 'todo-item') {
            li.classList = 'todo-item completed';

            for (let task of Object.keys(array)) {
                array.statusTask = "Finalizada"
                // console.log(array.statusTask, array)
            }

        } else {
            li.classList = 'todo-item'

            for (let task of Object.keys(array)) {
                array.statusTask = "Não Finalizada"
                // console.log(array.statusTask, array)
            }
        }

        // lista.statusTask = 'Finalizada'
        // console.log(lista)

        // const filtro = lista.filter( finalizadas => (lista.statusTask == 'Finalizada'))

        // console.log(filtro)
    })

    //btnTrash
    btnTrash.addEventListener('click', (evt) => {
        removeList(array, lista)
        console.log({lista})
        removeDOM('todo-list', evt.target)
    })
}

const removeList = (item, listaTarefas) => {
    let posicao = listaTarefas.indexOf(item)

    if(posicao >= 0) {
        lista.slice(posicao, 1)
    } else {
        alert('Não existem valores para serem excluídos')
    }

}

const removeDOM = (classUl, botao) => {
    let ul = document.querySelector('.'+classUl);
    let div = botao.parentNode;
    ul.removeChild(div);
}


// FILTRANDO --> FINALIZADAS / NÃO FINALIZADAS / TODAS

let comboTasks = document.getElementById('todos');
comboTasks.addEventListener('click', () => { filterTasks(lista) })

const filterTasks = (array) => {

    let option = comboTasks.options[comboTasks.selectedIndex].text;

    if (option === 'Finalizadas') {
        // return 'Todas'
        let finalizadas = array.filter((obj) => {
            console.log(obj.statusTask === 'Finalizada') 
        })
        // atualizarArray(obj, finalizadas);
    } else if (option === 'Não Finalizadas') {
        let pendentes = array.filter((obj) => {
            return obj.statusTask === 'Não Finalizada'
        })
        // atualizarArray(obj, pendentes)
    } else if (option === 'Todas') {
        let todas = lista.filter((obj) => {
            return obj.statusTask === 'Finalizada' && obj.statusTask === 'Não Finalizada'
        })
        // atualizaArray(obj, todas)
    }

    // console.log(atualizarArray())



    // opcao = option;

    // console.log(opcao);
    // return opcao;

}

function filterPendentes() {
    if( lista != null ) {
        
    }
}