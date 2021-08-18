const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const books = document.querySelector(".books");
const deleteAllBtn = document.querySelector(".footer button");
let authorInput = document.querySelector("authorInput").value;
let titleInput = document.querySelector("titleInput").value;
let numberInput = document.querySelector("numberInput").value;


inputBox.onkeyup = ()=>{
    let userData = inputBox.value; 
    if(userData.trim() !=0){
        addBtn.classList.add("active");
    } else{
        addBtn.classList.remove("active");
    }
}

showBooks();

addBtn.onclick = () =>{
    openForm()
    let userData = inputBox.value;
    let getLocalStorage = localStorage.getItem("Welcome to the University Library");
    if (getLocalStorage == null){
        listArr = [];
    } else{
        listArr = JSON.parse(getLocalStorage);
    }
    listArr.push(userData);
    localStorage.setItem("Welcome to the University Library", JSON.stringify(listArr));
    showBooks();
    addBtn.classList.remove("active");
    

}

function showBooks(){
    let userData = inputBox.value;
    let getLocalStorage = localStorage.getItem("Welcome to the University Library");
    if (getLocalStorage == null){
        listArr = [];
    } else{
        listArr = JSON.parse(getLocalStorage);
    }
    const availableBooks = document.querySelector(".availableBooks");
    availableBooks.textContent = listArr.length;
    let newBook="";
    listArr.forEach((element, index) => {
        newBook += `<li>${element}<button onclick = "deleteBook()"; class="deleteButton">Delete</button></li>`;
    });
    books.innerHTML = newBook;
    inputBox.value="";
}

function deleteBook(index){
    let getLocalStorage = localStorage.getItem("Welcome to the University Library");
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index,1)
    localStorage.setItem("Welcome to the University Library", JSON.stringify(listArr));
    showBooks();

}

deleteAllBtn.onclick = () =>{
    listArr=[];
    localStorage.setItem("Welcome to the University Library", JSON.stringify(listArr));
    showBooks();

}





function openForm(){
    document.getElementById("form")
    .style.display = "block";
}

function addBook (){
    let author = authorInput.value;
    let title = titleInput.value;
    let pages = numberInput.value;

    const books = [];

    books.push({
        author, title, pages
    })


}