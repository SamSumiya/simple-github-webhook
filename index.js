import express from 'express'

const server = express()
const PORT = 3000 

server.use(express.json())

server.get('/', (req, res) => {
    res.send({'name': 'same'})
})

server.post('/webhook', (req, res) => {
    const event = req.header['x-github-event']
    console.log(`📩 Received event: ${event}`)
    console.log("Payload:", req.body)

    res.sendStatus(200)
})

server.listen((3000), () => {
    console.log(`Server is listening to PORT ${PORT}`) }
)

