class Book{

  constructor(title,author,isbn){
      this.title = title;
      this.author = author;
      this.isbn = isbn;
  }



}


class UI{
//   creating class prototype:
 
addBookToList(book){
  // nicher list ti holo tbody ke select korar jnne ar eita html ei ase tbody ta:
    
  const list = document.getElementById("book-list") 

  //  create tr(karon tbody er moddeo tr thake):
  const row = document.createElement("tr")
  row.innerHTML = `
  
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href = "#" class = "delete">X</a></td>
  
  
  
  
  
  `
  // eikhane a er parent holo td er parent holo tr:
  
  list.appendChild(row)
  
  
  
  
  
  
  

}


clearFields(){
    document.getElementById("title").value = ""
    document.getElementById("author").value = ""
    document.getElementById("isbn").value = ""
}


showAlert(message,className){
//   create div karon ami error message ti ekti div er moddei dekhabo:
 
const div = document.createElement("div")
// div.className = `alert ${className}` er means holo showAlert er under e sob div e alert thakbe and tader nijer ekta className thakbe:
div.className = `alert ${className}`
div.appendChild(document.createTextNode(message))

// get container(karon ami container er moddei th ar form er agei th amar error message ti show korate chacchi):
const container = document.querySelector(".container")
const form = document.querySelector("#book-form")

container.insertBefore(div,form)

setTimeout(function(){

    // ekhon ei success and alert ti 1.5 sec(1500 millisecond show korbe)

  document.querySelector(".alert").remove();


},1500)



}


deleteBook(target){
    if(target.className === "delete" ){
        target.parentElement.parentElement.remove();


 }


}





}





  // Event Listeners for adding-book:
  document.getElementById("book-form").addEventListener("submit",function(e){
    //   ekhon title,author,and isbn ke ei function er moddei select korte hobe karon eti form submit er jonno addEventListener function and er moddei title, author and isbn ase:
      const title = document.getElementById("title").value
            author = document.getElementById("author").value
           isbn = document.getElementById("isbn").value
    //   console.log(title,author,isbn)

    //  instantiate from Book Constructor:
    const book = new Book(title,author,isbn) 

      //  instantiate from UI Constructor:

    const ui = new UI()

    // validate(mane amra jodi kono input na diye submit kori):
    if(title === "" || author === "" || isbn === "")
    {
        ui.showAlert("Please! Fill in all fields","error")
      


    }

    else{
        // add book to list:
           ui.addBookToList(book);
      // clear when submit all data(mane ekbar submit korle ta jeno clear hoye jay porerbar submit er time e title,author and isbn field e):
      ui.showAlert("Successfully added!","success")
        ui.clearFields();
}

  

 


    e.preventDefault();
  })

//   event listeners for removing books:
document.getElementById("book-list").addEventListener("click",function(e){

   const ui = new UI();
//    creating delete book prototype in UI:
ui.deleteBook(e.target)

// showing deleting successfully:
ui.showAlert("Successfully removed!","success")


    e.preventDefault();
})

   