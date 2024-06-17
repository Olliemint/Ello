import React from "react";
import BookItem from "./BookItem";
import { Book } from "../interfaces";

interface BookListProps {
  books: Book[];
}

const BookList: React.FC<BookListProps> = ({ books }) => {
  return (
    <div className="grid  gap-8 mt-10 grid-flow-row justify-items-center md:justify-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((book) => (
        <BookItem
          key={book.id}
          book={book} />
      ))}
    </div>
  );
};

export default BookList;
