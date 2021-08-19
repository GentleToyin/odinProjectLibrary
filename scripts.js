let books=[];
function deleteBook(index){
    books.splice(index,1)
}

const authorInput = document.getElementById('author');
const titleInput = document.getElementById('title');
const pagesInput = document.getElementById('pages');
const form = document.querySelector('.form');
const button = document.querySelector('#button');
const body =  document.querySelector('body');
const bookList =  document.querySelector('.bookList');



// let userInput = {
//     authorName: author,
//     booktitle : title,
//     pages: pages
// }

let myDiv = document.createElement('div') // create a div element
myDiv.innerHTML = 'Hello Everyone' //inside the div created insert hello everyone

body.appendChild(myDiv) // add the div into body

console.log(body) 

//console.log(userInput)
function bookInstance(title, author,page){       
    this.title = title;                     
    this.author = author;
    this.page = page;
}
function addBook (title,author,page){
    const newBook = new bookInstance(title, author,page)
    books.push(newBook)
}



button.addEventListener( "click", (e) => {
    e.preventDefault()
    let authorValue = authorInput.value
    let titleValue = titleInput.value
    let pageValue = pagesInput.value
    addBook(titleValue, authorValue, pageValue)
    let titleTag = document.createElement('p');
    let authorTag = document.createElement('p');
    let pageTag = document.createElement('p');
    let divTag = document.createElement('div');
    let deleteButton = document.createElement('button');

    for (i=0; i<=books.length; i++){
        titleTag.innerHTML =  books[i].title;
        authorTag.innerHTML = books[i].author;
        pageTag.innerHTML = books[i].page;
        deleteButton.innerHTML = "delete"
        divTag.appendChild(titleTag)
        divTag.appendChild(authorTag)
        divTag.appendChild(pageTag)
        divTag.appendChild(deleteButton)
        bookList.appendChild(divTag)
        form.reset();

    }

    deleteButton.addEventListener("click",(e) => {
       })
    
       deleteBook();   
})

console.log(books);







// function addBook(event) {
    //     event.preventDefault()
    //     const author = authorInput.value;
    // const title = titleInput.value;
// const pages = pagesInput.value;

// let userInput = {
//     authorName: author,
//     booktitle : title,
//     pages: pages
// }
    
//     books.push(userInput);
//     console.log('Im here...')
//     console.log(books);
//     form.reset();
    
// }