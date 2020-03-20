// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair="*") {
    return function(param="special") {
        return `You are ${flair}${param}${flair}!`
    }
}

let encouragingPromptFunction = wrapAdjective("!!!")


const Calculator = {
    add: function (num1, num2) {
        return num1 + num2
    },

    subtract: function (num1, num2) {
        return num1 - num2
    },

    divide: function (num1, num2) {
        return num1/num2
    },

    multiply: function (num1, num2) {
        return num1 * num2
    }
}

function actionApplyer (startInt, functionsArray) {
    if (functionsArray.length > 0) {
        // console.log(functionsArray)
        // console.log(functionsArray[0])
        // console.log(functionsArray[0][0])
        let i = 0
        while (i < functionsArray.length) {
        let func = functionsArray[i]
        startInt = func(startInt)
        i++
        }
    }
    return startInt
}