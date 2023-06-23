const express = require('express')
const userRouter = require('./routes/user.routes')
const postRouter = require('./routes/post.routes')


const PORT = process.env.PORT || 8080

const app = express()

// app.use(express.urlencoded({extended: true})) // вместо body-parser (получаем body из запросов и помещаем в req.body), параметр extended: true позволяет парсить вложенные объекты 

app.use(express.json()) // middleware для того чтобы парсить body запроса в req.body  

// app.use('/api', userRouter)
// app.use('/api', postRouter)
app.use('/api', [userRouter, postRouter])


app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`)
})