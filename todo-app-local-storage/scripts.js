const input_box = document.querySelector('#input-box')
const add_btn = document.getElementById('add-btn')
const result_list = document.getElementById('result-list')

console.log(localStorage.getItem('todos'))
let todos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];

add_btn.addEventListener('click', () => {
    let todo = input_box.value.trim();
    if(todo){
        todos.push(todo);
        localStorage.setItem('todos' , JSON.stringify(todos));  
        renderList();
        input_box.value = "";
    }    
    console.log(todos)
})


const renderList = () => {
    result_list.innerHTML = null
    todos.map((todo , index) => {
        const li_tag = document.createElement('li');
        li_tag.setAttribute('id' , "todo-" + index);
        li_tag.innerText = todo;
        result_list.appendChild(li_tag);
    })
}

renderList()