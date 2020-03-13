let listElement = document.querySelector('#app ul')
let inputElement = document.querySelector('#app input')
let buttonElement = document.querySelector('#app button')

let todos = [
    'Fazer Café',
    'Estudar Javascript',
    'Olhar o Fórum',
];

//arrow function
const renderTodos = () => {
    for (todo of todos) {
        let todoElement = document.createElement('li') //cria li element
        let todoText = document.createTextNode(todo) //cria todoText e joga o array de todos dentro 

        todoElement.appendChild(todoText) //coloca os todoText dentro de todoElement
        listElement.appendChild(todoElement) //coloco todoElement dentro de listElement
    }
}

renderTodos()