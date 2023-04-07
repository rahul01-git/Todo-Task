const btn = document.querySelector('.btn');
const inputVal = document.querySelector('.todo');
const tbody = document.querySelector('tbody');
let count = 1;
const todos = JSON.parse(localStorage.getItem('todos') || '[]');

window.addEventListener('load',()=>{
    todos.forEach(todo=>{
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td = document.createElement('td');
        tr.appendChild(td1);
        tr.appendChild(td);
        tr.appendChild(td2);
        td.innerText = todo;
        td1.innerText = count++;
        td2.innerHTML = "<button class='btn dlt' onclick='deleteTodo()'>x</button>";
        tbody.append(tr);
    })

})

btn.addEventListener('click',()=>{
    let todo = inputVal.value;

    todos.push(todo);
    localStorage.setItem('todos',JSON.stringify(todos));

    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td = document.createElement('td');
    td1.innerText = count++;
    tr.appendChild(td1);
    tr.appendChild(td);
    tr.appendChild(td2);
    td.innerText = todo;
    td2.innerHTML = "<button class='btn dlt' onclick='deleteTodo()'>x</button>";
    todos.forEach(todo => {
        tbody.append(tr);
    });

})

function deleteTodo(){
    alert('dlt pressed');
}