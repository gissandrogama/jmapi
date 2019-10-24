const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

app.use(express.json())

app.use(cors())

mongoose.connect('mongodb+srv://gissandrogama:Ycterror18+*@cluster0-alljp.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(require('./routes'))

app.listen(process.env.PORT || 3333)