var userNameArray = []
var userBalanceArray = []

function userInput(){
    console.log(userNameArray.unshift(document.getElementById("user-name").value))
    userBalanceArray.unshift(document.getElementById("user-balance").value)

    let newUserName = userNameArray[0]
    let newUserBalance = userBalanceArray[0]

    var table = document.getElementById("user-table")
    let newValue = table.insertRow()
    let userName = newValue.insertCell()
    let userBalance = newValue.insertCell()
    let userInterest = newValue.insertCell();
    userName.innerHTML = newUserName
    userBalance.innerHTML = newUserBalance
    userInterest.innerHTML = userInterestValue(newUserBalance)
}

function userInterestValue(newUserBalance){
    if(newUserBalance > 200000){
        return (newUserBalance + newUserBalance*0.1)
    }

    if(newUserBalance > 100000){
        return (newUserBalance + newUserBalance*0.05)
    }

    else{
        return (newUserBalance + newUserBalance*0.03)
    }
}
