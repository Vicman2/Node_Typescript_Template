const jwt = require('jsonwebtoken')
const {publicKey, 
    REFERRAL_PERCENTAGE
    } = require('../config/constants')
const path = require('path')
const fs = require('fs')

exports.generateToken = async(data, expiresIn) => {
    const token = await jwt.sign(data, publicKey, {expiresIn: expiresIn? expiresIn: null})
    return token 
}

exports.decodeToken = async(token) => {
    const validToken  = await jwt.verify(token, publicKey);
    return validToken
}

exports.deleteImage = (filePath) => {
    fs.unlink(filePath, err => {
        if(err)  console.log(err, "This error is on deletion")
    })
}

exports.calculateDayOfWithdrawal= (dateToStart, noOfDaysToAdd)=>{
    const startDate = new Date(dateToStart);
    let daysToAdd = noOfDaysToAdd
    startDate.setDate(startDate.getDate() + daysToAdd)
    return startDate
}

exports.calculateAmountToWithdraw = (plan, allFirstPlanFromRefInvestment)=>{
    // Turn the string values to numbers
    amount = parseFloat(plan.amount)

    
    let yieldOnInvestment = (plan.percentageIncrease/100) * amount
   

    // Calculate the percentage of untapped  ref invesments 
    const allRefPercentage = [...allFirstPlanFromRefInvestment]
        .map(plan => plan.bonus)


    const totalPercentageonRef = allRefPercentage.reduce((a,b) => a + b, 0)

    // The total amount is the sum of the following;
    // The amount invested and the yield
    // The percentage increase in investment
    // The Referral earnings
    const totalDue = 
    amount 
    + yieldOnInvestment 
    + totalPercentageonRef

    return {
        withdrawal_amount: Math.round(totalDue), // Make it to be a whole number
    }
}