import React from "react";

function BookDetails() {
  const books = [
    { id: 1, name: "React Basics", author: "Jordan Walke", price: 450 },
    { id: 2, name: "Java Programming", author: "James Gosling", price: 600 },
    { id: 3, name: "Python Essentials", author: "Guido van Rossum", price: 500 }
  ];

  return (
    <div>
      <h2>Book Details</h2>

      {books.map((book) => (
        <div key={book.id}>
          <p><b>Book:</b> {book.name}</p>
          <p><b>Author:</b> {book.author}</p>
          <p><b>Price:</b> ₹{book.price}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default BookDetails;