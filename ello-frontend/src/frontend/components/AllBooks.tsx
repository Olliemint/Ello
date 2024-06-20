import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { GET_BOOKS } from "../graphql/queries";
import { getPaginatedItems } from "../hooks/usePagination";
import BookList from "./BookList";
import ComboxSearch from "./ComboxSearch";
import PaginationBtns from "./PaginationBtns";
import SkeletonLoader from "./SkeletonLoader";







interface Book {
  author: string;
  coverPhotoURL: string;
  readingLevel: string;
  title: string;
}

const AllBooks: React.FC = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  if (loading) return (<div className="grid  gap-8 mt-10 grid-flow-row justify-items-center md:justify-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {Array.from({ length: 8 }).map((_, index) => (
      <SkeletonLoader key={index} />
    ))}
  </div>
  );

  if (error) return <p>Error: {error.message}</p>;

  const { books } = data as { books: Book[] };




  const paginatedItems = getPaginatedItems(books, currentPage, 8);



  return (
    <div>
      <ComboxSearch books={books} />

      <div className="">
        <BookList books={paginatedItems.data} />
      </div>

      <div className="w-full flex items-center justify-center mt-8">
        <PaginationBtns
          count={books.length}
          page={currentPage}
          handleChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default AllBooks;
