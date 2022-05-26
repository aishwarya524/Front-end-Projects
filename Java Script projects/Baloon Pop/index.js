var count = 0

const popBaloon = (index) => {
    index++
    console.log(index)
    const baloon = 'baloon'+index
    const pop = 'pop'+index
    console.log(baloon)
    console.log(pop)
    document.getElementById(baloon).style.display = 'none'
    document.getElementById(pop).style.cssText = 'margin-top: 0px;'
    document.getElementById(pop).style.display = 'block'
    count++
    if(count === 30){
        document.getElementById('baloons').style.display = 'none'
        document.getElementById('message').style.display = 'block'
    }
}
