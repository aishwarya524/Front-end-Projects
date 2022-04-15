var displayingValue = document.getElementById("display")

function selectedButton(buttonValue){
    if(buttonValue ==="CLR"){
        displayingValue.innerText = ''
    }
    else if(buttonValue === 'b'){
        displayingValue.innerText = displayingValue.innerText.substring(0,displayingValue.innerText.length-1)
    }
    else if(buttonValue === '='){
        let newValue = displayingValue.innerText
        if(newValue!=""){
            displayingValue.innerText = eval(newValue)
        }
    }
    else{
        if(displayingValue.innerText === '0'){
            displayingValue.innerText = buttonValue
        }
        else{
            displayingValue.innerText = displayingValue.innerText + buttonValue
        }
    }    
}
