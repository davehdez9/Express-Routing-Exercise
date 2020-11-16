
function average (nums){
    let total = 0
    for(let i = 0; i < nums.length; i++){
        total += nums[i]
    }
    return total / nums.length
}

function midpoint(nums){
    let mid = Math.floor(nums.length / 2)
    return nums[mid]
}

const mostFrequent = nums => Object.entries(
    nums.reduce((a,v) => {
        a[v] = a[v] ? a[v] + 1 : 1
        return a
    }, {})
).reduce((a,v) => (v[1] >= a[1] ? v : a), [null, 0])[0]


function convertNumArray(nums){
    let arr = []

    for(let i = 0; i < nums.length; i++){
        let valToNum = Number(nums[i])

        if(Number.isNaN(valToNum)){
            return new Error(
                `The value ${nums[i]} is not a valid number`
            )
        }
        arr.push(valToNum)
    }
    return arr
}



module.exports = { average, convertNumArray, midpoint, mostFrequent }