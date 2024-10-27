const button = document.querySelector('#btn');

button.addEventListener('click', () => {
    // викликаємо функцію, яка викликає сторінку з постами
    fetch('/post/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: 'post 4',
            author: 'author 4',
            description: 'description 4',
            date: '01.10.2024'
        })
    });
});