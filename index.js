import express from 'express'

const server = express()
const PORT = 3000 

server.use(express.json())

server.get('/', (req, res) => {
    res.send({'name': 'same'})
})

server.post('/webhook', (req, res) => {
    console.log('ALL HEADERS ->', req.headers)

    const event = req.get('x-github-event')
    
    console.log(`📩 Received event: ${event} new`)

    res.sendStatus(200)
})

server.listen((3000), () => {
    console.log(`Server is listening to PORT ${PORT}`) }
)

