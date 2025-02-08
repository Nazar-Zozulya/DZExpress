const form = document.querySelector('#dltBtn');

// alert(button)
form.addEventListener('submit', (event)=>{
    event.preventDefault();
    fetch('',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: form.id,
            // author: form.author.value,
            // description: form.description.value,
            // date: form.date.value
        })
    })
})