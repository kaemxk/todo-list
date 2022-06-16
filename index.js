const todoNode = document.querySelector('.js-todoList')
const inputNode = document.querySelector('.js-input')
const btnNode = document.querySelector('.js-btn')
let todoList = []

function addTodo(text) {
	const todo = {
		text,
		done: false,
		id: `${Math.random()}`,
	}
	if (todo.text != '') {
		todoList.push(todo)
	}
}

function deleteTodo(id) {
	todoList.forEach((todo) => {
		if (todo.id === id) {
			todo.done = true
		}
	})
}

function render() {
	let html = ''

	todoList.forEach((todo) => {
		if (todo.done) {
			return
		}
		html += `
		<div class='to-do-list'>
			<div class='text'>${todo.text}</div>
			<button data-id='${todo.id}' class='button'>Сделано</button>
		</div>`
	})

	todoNode.innerHTML = html
}

btnNode.addEventListener('click', () => {
	const text = inputNode.value
	addTodo(text)
	render()
	inputNode.value = ''
})

todoNode.addEventListener('click', (event) => {
	if (event.target.tagName !== 'BUTTON') {
		return
	}

	const id = event.target.dataset.id
	deleteTodo(id)
	render()
})

render()
