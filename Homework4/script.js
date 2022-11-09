window.addEventListener('load', () => {
    let todoListArray = JSON.parse(localStorage.getItem('todos')) || []

    const form = document.querySelector('form')
    const input = form.querySelector('.input')
    const filterOption = document.querySelector('.select')

    function sortByName () {
        todoListArray.sort((a, b) => {
            return (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1)
        })
    }

    function sortByData() {
        todoListArray.sort((a, b) => {
            return (a.timeStampData < b.timeStampData ? 1 : -1)
        })
    }
    
    function getData (data) {
        return data.getHours() + ":"  
        + data.getMinutes() + '\t'
        + data.getDate() + "/"
        + (data.getMonth()+1)  + "/" 
        + data.getFullYear() ;
    }

    function createToDoObj () {
        let name = input.value.trim()
        let toDoItemData = new Date()
        let timeStampData = toDoItemData.getTime()
        let data = getData(toDoItemData)
        let completed = false
        
        return    {   name,
                timeStampData,
                data,
                completed,
        }
    }

    function getDragAfterElement(todoList, y) {
        const draggableElements = [...todoList.querySelectorAll('.todo-item:not(.dragging)')]

        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect()
            const offset = y - box.top - box.height/2
            // console.log(offset)
            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child,}
            } else {
                return closest
            }
        }, {offset: Number.NEGATIVE_INFINITY}).element
    }

    function showToDo () {
        let todoList = document.querySelector('.todo-list')
        todoList.innerHTML = ''

        todoListArray.forEach(element => {

            let todoItem = document.createElement('div')
            todoItem.classList.add('todo-item')
            

            let todoText = document.createElement('div')
            todoText.classList.add('todo-item_text')
            
            let infoAndOptions = document.createElement('div')
            infoAndOptions.classList.add('info-and-options')
            let todoData = document.createElement('div')
            todoData.classList.add('todo-item_data')
            todoData.innerHTML = element.data
            let done = document.createElement('button')
            done.classList.add('done')
            done.innerHTML = 'Done'
            let edit = document.createElement('button')
            edit.classList.add('edit')
            edit.innerHTML = 'Edit'
            let del = document.createElement('button')
            del.classList.add('del')
            del.innerHTML = 'Delete'

            if(element.completed) {
                todoText.innerHTML = `<input class="todo-input" type="text" style="border:none; text-decoration: line-through" value="${element.name}" readonly>`
            } else {
                todoText.innerHTML = `<input class="todo-input" type="text" style="border:none" value="${element.name}" readonly>`
            }

            infoAndOptions.appendChild(todoData)
            infoAndOptions.appendChild(done);
            infoAndOptions.appendChild(edit);
            infoAndOptions.appendChild(del);

            todoItem.appendChild(todoText)
            todoItem.appendChild(infoAndOptions)

            todoList.appendChild(todoItem)
            

            edit.addEventListener('click', (e) => {
                const input = todoText.querySelector('.todo-input');
                input.removeAttribute('readonly');
                input.focus();
                input.addEventListener('blur', (e) => {
                    input.setAttribute('readonly', true);
                    element.name = e.target.value;
                    localStorage.setItem('todos', JSON.stringify(todoListArray));
                    showToDo()
                })
            })

            del.addEventListener('click', (e) => {
                todoListArray = todoListArray.filter(t => t != element);
                localStorage.setItem('todos', JSON.stringify(todoListArray));
                showToDo()
            })

            done.addEventListener('click', (e) => {
                if(element.completed) {
                    element.completed = false
                } else {
                    element.completed = true
                }
                localStorage.setItem('todos', JSON.stringify(todoListArray));
                showToDo()
            })

            filterOption.addEventListener('change', function () {
                if(filterOption.value == "name") {
                    sortByName ()
                    showToDo() 
                } else {
                    sortByData()
                    showToDo()
                }
            }) 

            todoItem.draggable = true

            todoItem.addEventListener('dragstart', () => {
                // console.log("Drag start!")
                todoItem.classList.add('dragging')
            })

            todoItem.addEventListener('dragend', () =>{
                todoItem.classList.remove('dragging')
            })

            todoList.addEventListener('dragover', (event) => {
                event.preventDefault()
                const afterElement = getDragAfterElement(todoList, event.clientY)
                const draggable = document.querySelector('.dragging')
                // console.log(afterElement)
                if (afterElement == null) {
                    todoList.appendChild(draggable)
                } else {
                    todoList.insertBefore(draggable, afterElement)
                }
            })
        });
    }

    const submitFormHandler = (event) => {
        event.preventDefault()

        if (!input.value) {
            alert("Please enter your todo first!")
        }

        toDo = createToDoObj()
        todoListArray.push(toDo)
        localStorage.setItem('todos', JSON.stringify(todoListArray))
        showToDo()
        input.value = ''
    }

    showToDo()
    form.addEventListener('submit', submitFormHandler)   
    
})












