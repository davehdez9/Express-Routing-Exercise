const express = require('express')
const app = express()
const { convertNumArray, average, midpoint, mostFrequent } = require('./operations')
const port = 3000


app.use(express.json())



// GET mean(average)
app.get("/mean", (req, res) => {
    debugger
    let newNums = req.query.nums.split(',')
    let nums = convertNumArray(newNums)

    let result = {
        operation: "mean",
        result: average(nums)
    }

    return res.send(result)
})

// GET median(midpoint)
app.get("/median", (req, res) => {
    let newNums = req.query.nums.split(',')
    let nums = convertNumArray(newNums)

    let result = {
        operation: "median",
        result: midpoint(nums)
    }
    return res.send(result)
})

// GET mode(most frequent)
app.get("/mode", (req, res) => {
    let newNums = req.query.nums.split(',')
    let nums = convertNumArray(newNums)

    let result = {
        operation: "median",
        result: mostFrequent(nums)
    }
    return res.send(result)
})



app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})