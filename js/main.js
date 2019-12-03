
//The book class
class Book {
  constructor(title, author, pages, status, id) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
  }

  togglestat() {
    if (this.status == "Read") {
      (this.status = "Not Read")
    } else {
      this.status = "Read";
    }
    // this.cleardrow(lib); 
  }
}

// The Canvas class initialises a library
class Canvas {
  constructor(library) {
    this.library = library;
  }

  //adds book to library, clears page and adds to page
  addaBook(bk) {
    this.library.push(bk);
    this.clearPage();
    this.adder(lib);
  }

  //get inputs, createa new book and add it
  addtolib(e) {
    var ttitle = document.querySelector('#titleIn').value;
    var aauthor = document.querySelector('#authorIn').value;
    var ppages = document.querySelector('#pagesIn').value;
    var sstatus = document.querySelector('#redIn').value;
    iid += 1;
    var newbook = new Book(ttitle, aauthor, ppages, sstatus, iid);
    this.addaBook(newbook);
  }


