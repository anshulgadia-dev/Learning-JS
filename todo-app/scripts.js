const input_box = document.querySelector('#input-box')
const add_btn = document.getElementById('add-btn')
const result_list = document.getElementById('result-list')


add_btn.addEventListener('click', () => {
    let todo = input_box.value;
    if(todo){
        const li_tag = document.createElement('li');
        li_tag.innerText = todo;
        result_list.appendChild(li_tag)
        todo = "";
        input_box.value = ""

    }    
    console.log(todos)
})

