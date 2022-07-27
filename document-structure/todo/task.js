const tasksInput = document.querySelector('.tasks__input')
const button = document.querySelector('.tasks__add')
const tasksList = document.querySelector('.tasks__list')
let storageTask = JSON.parse(localStorage.getItem("tasks")) || []

storageTask.forEach(element => {
    const task = createTask(element)
    tasksList.appendChild(task)
})

function createTask(inputValue) {
    const task = document.createElement("div")
    task.classList.add("task")
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
        storageTask.forEach((element, index) => {
            if (element === task.nextElementSibling) {
                delete storageTask[index]
            }
        })
        event.preventDefault()
    })
    task.appendChild(taskRemove)
    return task
}

button.addEventListener('click', (event) => {
    if (tasksInput.value.trim()) {
        const task = createTask(tasksInput.value)
        tasksList.appendChild(task)
        storageTask.push(tasksInput.value)
        localStorage.setItem("tasks", JSON.stringify(storageTask))
        tasksInput.value = ""
        event.preventDefault()
    }
})