// const addButton = document.getElementById('add__button');
// const taskContainer = dcoument.getElementById('task-container')

// function addTask() {
//     if (inputField.value.trim() === '') {
//         alert("You must write something!");
//     } else {
//         let li = document.createElement("li");
//         li.innerHTML = inputField.value;
//         taskContainer.appendChild(li);
//     }
// }


const taskContainer = document.getElementById('task-container');
const input = document.querySelector('#input');
const add__button = document.querySelector('#add__button');
const card__button = document.querySelector('.card__button');
const no_tasks = document.querySelector('.no-tasks');
let taskCount = 0;

function addTask() {

    if (input.value.trim() === '') {
        card__button.style.border = '2px solid red';
    } else {
        taskCount++
        let li = document.createElement("li");
        let span = document.createElement("input");
        let radioButton = document.createElement("input");
        let editBtn = document.createElement("button");
        let removeBtn = document.createElement("button");


        radioButton.type = 'checkbox';
        radioButton.setAttribute('class', 'radioButton')
        span.value = input.value;
        span.type = "text";
        span.setAttribute('class', 'textfield');
        span.disabled = true;
        li.style.cursor = 'pointer';
        li.setAttribute('class', 'li_container');
        li.appendChild(radioButton);
        li.appendChild(span);
        // console.log('span', span);

        span.value = input.value;
        removeBtn.innerHTML = "\u00d7";
        removeBtn.className = "remover";
        li.style.cursor = 'pointer';

        editBtn.innerHTML = "✎";
        editBtn.className = "edit";


        radioButton.onclick = function () {
            if (this.style.textDecoration === 'underline') {
                this.style.textDecoration = 'none';
                radioButton.checked = false;
            } else {
                this.style.textDecoration = 'underline';
                radioButton.checked = true;
            }
        };


        removeBtn.onclick = function (e) {
            e.stopPropagation();
            li.remove();
            taskCount--;
            console.log('taskCount with remove', taskCount);
            if (taskCount > 0) {
                no_tasks.style.display = 'none';
            } else {
                no_tasks.style.display = 'flex';
            }
        };

        let buttonsContainer = document.createElement("div");
        buttonsContainer.setAttribute('class', 'buttons__container');


        editBtn.onclick = function () {
            console.log('span', span.disabled)
            if (span.disabled) {
                span.disabled = false;
                span.style.border = '1px solid red';
                editBtn.innerHTML = "✔️";

            } else {
                span.disabled = true;
                span.style.border = 'none';
                editBtn.innerHTML = "✎";

            }

        }

        buttonsContainer.appendChild(removeBtn);
        buttonsContainer.appendChild(editBtn);
        li.appendChild(buttonsContainer);
        taskContainer.appendChild(li);
        input.value = '';

        if (taskCount > 0) {
            no_tasks.style.display = 'none';
        } else {
            no_tasks.style.display = 'flex';
        }
    }





    const li1_container = document.querySelectorAll('.li1_container');
    // console.log('li1_container', li1_container.length)
    for (let i = 0; i < li1_container.length; i++) {
        li1_container[i].addEventListener('click', function () {
            if (li1_container[i].style.textDecoration === 'underline') {
                li1_container[i].style.textDecoration = 'none';
            } else {
                li1_container[i].style.textDecoration = 'underline';
            }
        });

    }


}
add__button.addEventListener('click', function () {
    addTask()
})

input.addEventListener('keydown', function (event) {
    console.log('event', event);
    if (event.keyCode === 13) {
        addTask()
    }
})

input.addEventListener('input', function (event) {
    if (event.target.value !== '') {
        card__button.style.border = '2px solid transparent';
    } else {
        card__button.style.border = '2px solid red';

    }
})











// const addButton = document.getElementById('add__button');
// addButton.style.color = 'red'
// addButton.style.fontSize = '16px'

// const listItems = querySelectorAll('list-items');

// for (i = 0; i < listItems; i++) {
//     listItems[i].style.fontSize = '16px'
// }

// console.log(addButton);

// const ul = document.querySelector('ul')
// const li = document.querySelector('li')
// ul.append(li);

// li.innerText = 'mkmkmkm';
// li.setAttribute('id', 'main-heading');
// li.removeAttribute('id');

// li.classList.add('list-items');
// li.classList.remove('list-items');
// console.log()