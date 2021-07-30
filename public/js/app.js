console.log('Client side javascript');

const weatherForm = document.querySelector('form')
const searchElement = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {

    const location = searchElement.value

    messageOne.textContent = ''
    messageTwo.textContent = 'Loading ...'
    fetch('http://127.0.0.1:8081/weather?address=' + location).then((response) => {
        response.json().then((data) => {

            if (data.error) {
                messageOne.textContent = data.error
                messageTwo.textContent = ''
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })


    e.preventDefault()
})