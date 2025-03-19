function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json())
    .then((books) => {
      renderBooks(books);
      return books;
      console.log("5th book:", books[4].name);
    });
  fetch("https://anapioficeandfire.com/api/characters/1031")
    .then((resp) => resp.json())
    .then((character) => console.log("1031st character:", character.name));
  fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json())
    .then((books) => {
      const totalPages = books.reduce(
        (sum, book) => sum + book.numberOfPages,
        0
      );
      console.log("Total number of pages:", totalPages);
    });

  // To pass the tests, don't forget to return your fetch!
}

function renderBooks(books) {
  const main = document.querySelector("main");
  books.forEach((book) => {
    const h2 = document.createElement("h2");
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  fetchBooks();
});
