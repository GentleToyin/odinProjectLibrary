let books=[];

const authorInput = document.getElementById('author');
const titleInput = document.getElementById('title');
const pagesInput = document.getElementById('pages');
const form = document.querySelector('.form');
const button = document.querySelector('#button')
const body =  document.querySelector('body')


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
function bookInstance(title, author){       
    this.title = title;                     
    this.author = author;
}
function addBook (title,author){
    const newBook = new bookInstance(title, author)
    books.push(newBook)
}



button.addEventListener( "click", (e) => {
    e.preventDefault()
    const authorValue = authorInput.value
    const titleValue = titleInput.value
    addBook(titleValue, authorValue)
    console.log(books[0].title);
    console.log(books[0].author);
    let titleTag = document.createElement('p');
    let authorTag = document.createElement('p');
    titleTag.innerHTML = books[0].title;
    authorTag.innerHTML = books[0].author;
    body.appendChild(titleTag)
    body.appendChild(authorTag)

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
