const chatWidget = document.querySelector('.chat-widget')
const inputChatWidget = document.querySelector('.chat-widget__input')
const messages = document.querySelector('.chat-widget__messages')

const messagesRobot = [
    'Добрый день!1',
    'Добрый день!2',
    'Добрый день!3',
    'Добрый день!4',
    'Добрый день!5',
    'Добрый день!6',
    'Добрый день!7',
]

chatWidget.addEventListener('click', function () {
    this.classList.add('chat-widget_active')

})

chatWidget.addEventListener('keyup', (element) => {
    const input = (element.key === 'Enter' && inputChatWidget.value)
    if (input) {
        messages.innerHTML += `
        <div class="message message_client">
            <div class="message__time">${
                new Date().toLocaleTimeString(
                    [],
                    { hour: '2-digit', minute: '2-digit' }
                )
            }</div>
            <div class="message__text">${input}</div>
        </div>
        <div class="message">
            <div class="message__time">${
                new Date().toLocaleTimeString(
                    [],
                    { hour: '2-digit', minute: '2-digit' }
                )
            }</div>
            <div class="message__text">${
                messagesRobot[Math.floor(Math.random( ) * messagesRobot.length)]
            }</div>
        </div>
        `
        inputChatWidget.value = ""
    }
})

