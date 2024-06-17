import React, { ReactNode, createContext, useContext, useState } from "react";
import { Book } from "../frontend/interfaces";
import { toast } from "react-toastify";
import { FaCheckCircle, FaInfoCircle } from "react-icons/fa";

interface ReadingListContextProps {
  readingList: Book[];
  addBook: (book: Book) => void;
  removeBook: (title: string) => void;
  isBookInList: (title: string) => boolean;
  dropdownOpen: boolean;
  setDropdownOpen: (isOpen: boolean) => void;
  setReadingList: (books: Book[]) => void;
}

const ReadingListContext = createContext<ReadingListContextProps | undefined>(
  undefined
);

export const useReadingList = () => {
  const context = useContext(ReadingListContext);
  if (!context) {
    throw new Error("useReadingList must be used within a ReadingListProvider");
  }
  return context;
};

interface ReadingListProviderProps {
  children: ReactNode;
}

export const ReadingListProvider: React.FC<ReadingListProviderProps> = ({
  children,
}) => {
  const [readingList, setReadingList] = useState<Book[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState(true);

  const addBook = (book: Book) => {
    setReadingList((prevList) => {
      if (!prevList.some((b) => b.title === book.title)) {
        return [...prevList, book];
      }
      return prevList;
    });
    toast.success("Book added to reading list", {
      hideProgressBar: true,
      icon: <FaCheckCircle
        className="text-2xl text-white"
      />,
      style: {
        backgroundColor: "#4AA088",
        color: "#FFFFFF",
      },
    });
  };

  const removeBook = (title: string) => {
    setReadingList((prevList) => prevList.filter((b) => b.title !== title));
    toast.info("Book removed from reading list", {
      hideProgressBar: true,
      icon: <FaInfoCircle
        className="text-2xl text-white"
      />,
      style: {
        backgroundColor: "#F76434",
        color: "#FFFFFF",
      },
    
    });
  };

  const isBookInList = (title: string) => {
    return readingList.some((b) => b.title === title);
  };

  return (
    <ReadingListContext.Provider
      value={{
        readingList,
        addBook,
        removeBook,
        isBookInList,
        dropdownOpen,
        setDropdownOpen,
        setReadingList,
      }}
    >
      {children}
    </ReadingListContext.Provider>
  );
};
