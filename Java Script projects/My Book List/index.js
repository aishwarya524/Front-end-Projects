var bookNameArray = []
var authorNameArray = []
var isbnArray = []

const submitValues = () => {
    let bookName = document.getElementById('bookName').value
    let authorName = document.getElementById('authorName').value
    let isbnValue = document.getElementById('ISBN').value

    if(bookName.trim() === ""){
        alert("Please enter valid book name")
        return
    }

    if(authorName.trim() === ""){
        alert("Please enter valid author name")
        return
    }

    if(isbnValue.trim() === ""){
        alert("Please enter valid ISBN#")
        return
    }

    bookNameArray.push(bookName)
    authorNameArray.push(authorName)
    isbnArray.push(isbnValue)

    let tableBody = document.getElementById("table-body")
    let newRow = document.createElement('tr')
    let newBookName = document.createElement('td')
    let newAuthorName = document.createElement('td')
    let newISBN = document.createElement('td')
    let newCloseBtn = document.createElement('td')

    newBookName.innerText = bookName
    newAuthorName.innerText = authorName
    newISBN.innerText = isbnValue
    newCloseBtn.innerText = "Delete"

    newRow.classList.add('row-values')
    newCloseBtn.classList.add('close-btn')

    tableBody.appendChild(newRow)
    newRow.appendChild(newBookName)
    newRow.appendChild(newAuthorName)
    newRow.appendChild(newISBN)
    newRow.appendChild(newCloseBtn)

    
    newCloseBtn.addEventListener('click', () => {
        newRow.style.display = 'none'
    })
}
