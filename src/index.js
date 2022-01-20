import todoItem from './todoItem'


// const newItem = new todoItem('laundry');

console.log(newItem.title)

let todoList = []
const defaultProjectContainer = document.createElement('div')

defaultProjectContainer.classList.add('default');

const newItemButton = document.getElementById('newItem');

function addItem(){
    console.log('add new item')
    const form = document.createElement('form');
    form.method = "get"
    form.className = "form"
    const label = document.createElement('label');
    label.for = "title";
    label.innerHTML = "add new item";
    const input = document.createElement('input');
    input.type = 'text';
    input.name = 'title';
    input.id = 'title';
    input.placeholder = 'title'
    label.appendChild(input)
    form.appendChild(label);
    const newItem = new todoItem(input.name);
   
    todoList.push(newItem)
    console.log(todoList)
    return newItem 

}
newItemButton.addEventListener('click', addItem);
// addItem()
//<form method="GET" class="todo_item">
//<label for="title">To Do Item</label>

//<input type="text" name="title" id="title" placeholder="title" required>