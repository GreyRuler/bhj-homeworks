const xhr = new XMLHttpRequest();
const title = document.querySelector('.poll__title')
const answers = document.querySelector('.poll__answers')

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php')

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        const response = JSON.parse(xhr.responseText)
        title.textContent = response.data.title
        response.data.answers.forEach((element, index) => {
            const button = document.createElement('button')
            button.classList.add("poll__answer")
            button.textContent = element
            button.addEventListener('click', function() {
                xhr.open( 'POST', 'https://netology-slow-rest.herokuapp.com/poll.php' );
                xhr.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
                xhr.send( `vote=${response.data.id}&answer=${index}`);
                alert("Спасибо, ваш голос засчитан!")
                responseVotes()
            })
            answers.appendChild(button)
        })
    }
})

xhr.send()

const responseVotes = () => {
    xhr.addEventListener('readystatechange', () => {
        const response = JSON.parse(xhr.responseText)
        const elements = response.stat.map(element => {
            console.log(element)
            const div = document.createElement('div')
            div.classList.add("poll__answer")
            div.textContent = `${element.answer}: ${element.votes}`
            return div
        })
        answers.replaceChildren(...elements)
    })
}