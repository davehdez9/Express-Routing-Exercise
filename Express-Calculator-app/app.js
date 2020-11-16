const express = require('express')
const app = express()
const port = 3000
const ExpressError = require('./expressError')

const { convertNumArray, average, midpoint, mostFrequent } = require('./operations')

app.use(express.json())



// GET mean(average)
app.get("/mean", (req, res) => {
    if(!req.query.nums){
        throw new ExpressError('Numbers are required', 400)
    }

    let newNums = req.query.nums.split(',')
    let nums = convertNumArray(newNums)
    if(nums instanceof Error){
        throw new ExpressError(nums.message)
    }

    let result = {
        operation: "mean",
        result: average(nums)
    }

    return res.send(result)
})

// GET median(midpoint)
app.get("/median", (req, res) => {
    if(!req.query.nums){
        throw new ExpressError('Number are required', 400)
    }

    let newNums = req.query.nums.split(',')
    let nums = convertNumArray(newNums)
    if(nums instanceof Error){
        throw new ExpressError(nums.message)
    }

    let result = {
        operation: "median",
        result: midpoint(nums)
    }
    return res.send(result)
})

// GET mode(most frequent)
app.get("/mode", (req, res) => {
    if(!req.query.nums){
        throw new ExpressError('Number are required', 400)
    }
    let newNums = req.query.nums.split(',')
    let nums = convertNumArray(newNums)

    if(nums instanceof Error){
        throw new ExpressError(nums.message)
    }

    let frequentNum = mostFrequent(nums)
    let convertToNum = parseInt(frequentNum)

    let result = {
        operation: "median",
        result: convertToNum
    }
    return res.send(result)
})

// General Error handler
app.use(function(req, res, next){
    const err = new ExpressError('Not Found', 400)
    return next(err)
})


app.use(function(req, res, next){
    res.status(err.status || 500)

    return res.json({
        error: err,
        message: err.message
    })
})

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})