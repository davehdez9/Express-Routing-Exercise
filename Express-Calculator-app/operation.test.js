const { execPath } = require("process")
const { isMainThread } = require("worker_threads")
const { average, midpoint, mostFrequent} = require("./operations")

describe("midpoint function", function(){
    test('find the average of a set ', function (){
        let avg = midpoint([1,2,3,4])
        expect(avg).toEqual(3)
        expect(avg).not.toBe(0)
    })
})

describe("average function", function(){
    test("find the midpoint of an arr of numbers", function(){
        expect(average([1,2,3,4])).toBe(2.5)
    })
})

describe("Most frequent Function", function(){
    test("find the most frequent number", function(){
        expect(mostFrequent([1,1,1,2,2,3])).toEqual(1)
    })
})