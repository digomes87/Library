class Book {
  constructor(title, author, pages, status, id) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
  }

  toggleStat() {
    if (this.status == "Read") {
      (this.status = "Not Read")
    } else {
      this.status = "Read";
    }
  }
}

class render {
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

  //changes read status upon clicking status button
  stati(d) {
    const i = lib.findIndex(function (bk, i) {
      return bk.id === d;
    })
    const buk = lib[i];
    buk.toggleStat();
    this.clearPage();
    this.adder(lib);
  }

  //deletes book from library, clears page and adds to page
  deleBook(rowid) {
    const pp = lib.findIndex(function (bk, pp) {
      return bk.id === rowid;
    })
    lib.splice(pp, 1);
    this.clearPage();
    this.adder(lib);
  }

  //clears
  clearPage() {
    var tebo = document.querySelector('#dtable');
    while (tebo.rows.length > 0) {
      tebo.deleteRow(0);
    }
  }

  adder(lb) {
    lb.forEach(bb => {
      this.addtoPage(bb);
    });
  }

  //adds a book to the page
  addtoPage(b) {
    var tb = document.querySelector('#tb');
    var tr = document.createElement('tr');
    tr.innerHTML = `
			<td>${b.id}</td>
			<td>${b.author}</td>
			<td>${b.title}</td>
			<td>${b.pages}</td>
			<td><input type="button" onclick="statchange(${b.id})"
				value="${b.status}"></td>
			<td><input type="button" onclick="dell(${b.id})"
				value="delete"> </td>
			`;
    tb.append(tr);
  }
}

let lib = [];
let iid = 0;
let libone = new render(lib);
document.querySelector('#adder').addEventListener('click', addtolibc);

function addtolibc(e) {
  e.preventDefault();
  libone.addtolib();
}

function dell(rwid) {
  libone.deleBook(rwid);
}
