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
            
            todoItem.draggable = true
            const draggableElements = [...todoList.querySelectorAll('.todo-item')]
            let idxOfDragable
            let idxOfDroppable

            todoItem.addEventListener('dragstart', () => {
                idxOfDragable = draggableElements.indexOf(todoItem)
                todoItem.classList.add('dragging')
            })

            draggableElements.map((element) => 
                element.addEventListener('dragover', e => {
                    
                    e.preventDefault()
                    const draggable = document.querySelector('.dragging')
                    const dragablePos = draggable.getBoundingClientRect()
                    const offset = e.clientY - dragablePos.top - dragablePos.height/2
                        if (element.nextSibling == null) {
                            todoList.appendChild(draggable)
                        } 
                        else if (element.previousElementSibling == null) {
                            todoList.insertBefore(draggable, element)              
                        }
                        else {
                            if (offset > 0) {
                                todoList.insertBefore(draggable, element.nextElementSibling)
                            }
                            else {
                                todoList.insertBefore(draggable, element.previousSibling)
                            }
                        }
                })
            )

            todoItem.addEventListener('dragend', (e) =>{
                let newOrder = [... todoList.querySelectorAll('.todo-item')]
                e.preventDefault()
                // console.log(e.target)
                idxOfDroppable = newOrder.indexOf(e.target)
                // console.log(idxOfDragable, idxOfDroppable)
                let replacedElement = todoListArray[idxOfDragable]
                todoListArray.splice(idxOfDragable, 1)
                todoListArray.splice(idxOfDroppable, 0, replacedElement)
                localStorage.setItem('todos', JSON.stringify(todoListArray));
                // console.log(todoListArray)
                todoItem.classList.remove('dragging')
            })

        });
    }

    filterOption.addEventListener('change', function () {
        if(filterOption.value === "name") {
            sortByName ()
            showToDo() 
        } 
        else {
            sortByData()
            showToDo()
        }
    }) 

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












