const {response} = require('express')

fetch ('http://localhost:3000/api/users', {
    method :'POST',
    headers : {
        'Content-type' : 'application/json'
    },

    body:JSON.stringify({
        name : 'Agus',
        email:'agus@agus.com',
        phone:'083293289'
    })
})

.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error))