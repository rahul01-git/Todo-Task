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
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
          deleteFromLocalStorage(td1.innerText);
          tr.remove();
        });
        tr.appendChild(td1);
        tr.appendChild(td);
        tr.appendChild(deleteBtn);
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
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
          deleteFromLocalStorage(td1.innerText);
          tr.remove();
        });
        td1.innerText = count++;
        tr.appendChild(td1);
        tr.appendChild(td);
        tr.appendChild(deleteBtn);
        td.innerText = todo;
        todos.forEach(todo => {
            tbody.append(tr);
        });
    }

})

function deleteFromLocalStorage(key) {
    todos.splice(key-1,1);
    localStorage.setItem('todos',JSON.stringify(todos))

  }