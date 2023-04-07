const btn = document.querySelector('.btn');
const inputVal = document.querySelector('.todo');
const tbody = document.querySelector('tbody');
let count = 1;
const todos = JSON.parse(localStorage.getItem('todos') || '[]');

window.addEventListener('load', () => {
    todos.forEach(todo => {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td = document.createElement('td');
        tr.appendChild(td1);
        tr.appendChild(td);
        td.innerText = todo;
        td1.innerText = count++;

        tbody.append(tr);
    })

})

btn.addEventListener('click', () => {
    let todo = inputVal.value;
    if (!todo) alert('empty');
    else {

        todos.push(todo);
        localStorage.setItem('todos', JSON.stringify(todos));

        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td = document.createElement('td');
        td1.innerText = count++;
        tr.appendChild(td1);
        tr.appendChild(td);
        td.innerText = todo;
        todos.forEach(todo => {
            tbody.append(tr);
        });
    }

})

