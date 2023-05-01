const express = require('express')
const allChef = require('./Chef.json');
const cors = require('cors');

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/allChef', (req, res) => {
    res.send(allChef)
})

app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    const chef = allChef.find(data => data._id == id)
    res.send(chef)
})

app.get('/food/:id', (req, res) => {
    const chefData = []
    const allFood = []
    const id = req.params.id;
    allChef.map(chef => chefData.push(chef._bestFood))
    chefData[0].map(food => allFood.push(food))
    chefData[1].map(food => allFood.push(food))
    chefData[2].map(food => allFood.push(food))
    chefData[3].map(food => allFood.push(food))
    chefData[4].map(food => allFood.push(food))
    chefData[5].map(food => allFood.push(food))
    chefData[6].map(food => allFood.push(food))
    chefData[7].map(food => allFood.push(food))
    chefData[8].map(food => allFood.push(food))
    const findData = allFood.find(data => data.id == id)
    res.send(findData)
})

app.listen(port, () => [
    console.log(`website is running on port: ${port}`)
])