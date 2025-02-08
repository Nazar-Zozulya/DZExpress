const form = document.querySelector('#form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    // викликаємо функцію, яка викликає сторінку з постами
    fetch('/post/create/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: form.name.value,
            author: form.author.value,
            description: form.description.value,
            // date: form.date.value
        })
    });
});