var arr= [2,5,4,8,6]
function checkEven (arr) {
    let result = []
    for(var i = 0; i<=arr.length; i++) {
        if (arr[i] % 2 == 0) {
            result.push("even")
        }
        else {
            result.push("odd")
        }
    }
    return result
}

let responseFromFunction = checkEven(arr)
console.log(responseFromFunction)