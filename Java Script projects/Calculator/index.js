var displayingValue = document.getElementById("display")

function isOperator(buttonValue){
    if(buttonValue === '+' || buttonValue === '-' || buttonValue === '*' || buttonValue === '/' || buttonValue === '%'){
        return true
    }
    else{
        return false
    }
}

function selectedButton(buttonValue){
    if(buttonValue ==="CLR"){
        displayingValue.innerText = '0'
    }
    else if(buttonValue === 'b'){
        displayingValue.innerText = displayingValue.innerText.slice(0,-1)
    }
    else if(buttonValue === '='){
            if(isOperator(displayingValue.innerText.slice(-1))){
                while(isOperator(displayingValue.innerText.slice(-1))){
                    displayingValue.innerText = displayingValue.innerText.slice(0,-1)
                }
            }
            displayingValue.innerText = eval(displayingValue.innerText)
    }
    else{
        if(displayingValue.innerText === '0'){
            if(buttonValue != '00'){
                if(buttonValue === '.' || isOperator(buttonValue)){
                    displayingValue.innerText = displayingValue.innerText + buttonValue
                }
                else{
                    displayingValue.innerText = buttonValue
                }                
            }
        }
        else{
            let i = displayingValue.innerText.length
            if(buttonValue === '.' && displayingValue.innerText.substring(i-2,i)==="00"){
                displayingValue.innerText = displayingValue.innerText.slice(0,-1) + buttonValue
            }
            else if(isOperator(displayingValue.innerText[i-1]) && isOperator(buttonValue)){
                displayingValue.innerText = displayingValue.innerText.slice(0,-1) + buttonValue
            }
            else{
                displayingValue.innerText = displayingValue.innerText + buttonValue
            }            
        }
    }    
}
