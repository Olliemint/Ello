import {
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { useReadingList } from "../../context.tsx/ReadingListContext";


const ReadingList: React.FC = () => {
  const { readingList, removeBook } = useReadingList();

  return (
    <div className="w-full">
      {readingList.length > 0 ? (
        <List>
          {readingList.map((book,i) => {
           
            return (
              <ListItem
                key={i}
                className="flex items-center justify-between p-4 border-b border-gray-200"
              >
                
                <ListItemText
                  primary={
                    <Typography
                      variant="h6"
                      className="text-[#335C6E] font-bold"
                    >
                      {book.title}
                    </Typography>
                  }
                  secondary={
                    <Typography variant="subtitle1" className="text-[#4AA088]">
                      {book.author}
                    </Typography>
                  }
                  className="ml-4"
                />
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#F76434",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "#FAAD00",
                    },
                  }}
                  onClick={() => removeBook(book.title)}
                >
                  Remove
                </Button>
              </ListItem>
            );
          })}
        </List>
      ) : (
        <Typography variant="h5" className="text-center text-[#335C6E]">
          Your reading list is empty
        </Typography>
      )}
    </div>
  );
};

export default ReadingList;
