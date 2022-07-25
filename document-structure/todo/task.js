const tasksInput = document.querySelector('.tasks__input')
const button = document.querySelector('.tasks__add')
const tasksList = document.querySelector('.tasks__list')
let countStorageTask = localStorage.length

for (const item in localStorage) {
    const content = localStorage.getItem(item)
    if (content) {
        const task = createTask(content, item)
        tasksList.appendChild(task)
    }
}

function createTask(inputValue, countStorageTask) {
    const task = document.createElement("div")
    task.classList.add("task")
    task.setAttribute("data-id", countStorageTask)
    const taskTitle = document.createElement("div")
    taskTitle.classList.add("task__title")
    taskTitle.innerText = inputValue
    task.appendChild(taskTitle)
    const taskRemove = document.createElement("a")
    taskRemove.classList.add("task__remove")
    taskRemove.innerHTML = '&times;'
    taskRemove.setAttribute("href", "#")
    taskRemove.addEventListener('click', (event) => {
        task.remove()
        localStorage.removeItem(task.dataset.id)
        event.preventDefault()
    })
    task.appendChild(taskRemove)
    return task
}

button.addEventListener('click', (event) => {
    if (tasksInput.value) {
        const task = createTask(tasksInput.value, countStorageTask)
        tasksList.appendChild(task)
        localStorage.setItem(countStorageTask++, tasksInput.value)
        tasksInput.value = ""
        event.preventDefault()
    }
})