import {
  Combobox,
  ComboboxInput,
  ComboboxOptions,
  Transition,
} from "@headlessui/react";
import { Button, ListItem, ListItemText, Typography } from "@mui/material";
import clsx from "clsx";
import { useState } from "react";
import { useReadingList } from "../../context/ReadingListContext";
import { useDebounce } from "../hooks/useDebounce";
import { Book } from "../interfaces";

type ComboboxSearchProps = {
  books: Book[];
};

export default function ComboxSearch({ books }: ComboboxSearchProps) {
  const { addBook, isBookInList, removeBook } = useReadingList();
  const [query, setQuery] = useState("");

  const debouncedSearchTerm = useDebounce(query, 500);

  const filteredBooks =
    debouncedSearchTerm === ""
      ? []
      : books?.filter((book) =>
          book.title
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(debouncedSearchTerm.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="w-full max-w-[400px]">
      <Combobox>
        <div className="relative">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 pointer-events-none"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <ComboboxInput
              className={clsx(
                "block w-full pl-10 py-2.5   border-b border-gray-300 focus:outline-none "
              )}
              placeholder="Search Books"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
        <Transition
          enter="duration-200 ease-out"
          enterFrom="scale-95 opacity-0"
          enterTo="scale-100 opacity-100"
          leave="duration-300 ease-out"
          leaveFrom="scale-100 opacity-100"
          leaveTo="scale-95 opacity-0"
          afterLeave={() => setQuery("")}
        >
          <ComboboxOptions
            anchor="bottom"
            className="w-[var(--input-width)] mt-2 flex  !max-h-96 overflow-y-auto flex-col rounded-lg shadow-2xl border border-gray-300 bg-white [--anchor-gap:var(--spacing-1)] empty:hidden"
          >
            {filteredBooks.length === 0 && query !== "" ? (
              <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                Nothing found.
              </div>
            ) : (
              filteredBooks.map((book) => (
                <ListItem
                  className="flex justify-between px-4 py-2 border-t border-gray-300 hover:bg-gray-100"
                  key={book.title}
                >
                  <ListItemText
                    primary={
                      <Typography variant="body1" className="text-[#335C6E]">
                        {book.title}
                      </Typography>
                    }
                    secondary={
                      <Typography variant="body2" className="text-[#4AA088]">
                        {book.author}
                      </Typography>
                    }
                  />
                  <Button
                    sx={{
                      backgroundColor: isBookInList(book.title)
                        ? "#F76434"
                        : "#5ACCCC",
                      color: "#fff",
                      "&:hover": {
                        backgroundColor: isBookInList(book.title)
                          ? "#FAAD00"
                          : "#4AA088",
                      },
                    }}
                    onClick={() => {
                      isBookInList(book.title)
                        ? removeBook(book.title)
                        : addBook(book);
                    }}
                  >
                    {isBookInList(book.title) ? "Remove" : "Add"}
                  </Button>
                </ListItem>
              ))
            )}
          </ComboboxOptions>
        </Transition>
      </Combobox>
    </div>
  );
}
