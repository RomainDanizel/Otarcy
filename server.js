const express = require('express');
const app = express();
const cors =  require('cors')


app.use(cors())

app.use('/login', (req, res) => {
    res.send({
        token: 'connected'
    })
})

app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));