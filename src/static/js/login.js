
document.querySelector("#submit").addEventListener("click", function(event) {
    event.preventDefault();
    fetch('/user/login/', {
        method: 'POST',
        body: JSON.stringify({
            email: email.value,
            password: password.value
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
})