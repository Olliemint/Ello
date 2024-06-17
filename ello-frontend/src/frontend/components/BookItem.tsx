import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useReadingList } from "../../context.tsx/ReadingListContext";
import useImageReplace from "../hooks/useImageReplace";
import { Book } from "../interfaces";

interface BookItemProps {
  book: Book;
}

const BookItem: React.FC<BookItemProps> = ({ book }) => {
  const { addBook, isBookInList } = useReadingList();

  const { title, author, readingLevel, coverPhotoURL } = book;

  const imageUrl = useImageReplace(coverPhotoURL);

  return (
    <div className="w-full md:max-w-[345px]">
      <Card
        sx={{
          borderTop: "2px solid #5ACCCC",
          backgroundColor: "#FFFFFF",
          color: "#335C6E",
        }}
      >
        <CardMedia component="img" height="140" image={imageUrl} alt={title} />
        <CardContent>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {author}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Reading Level: {readingLevel}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button
            variant="contained"
            sx={{
              backgroundColor: isBookInList(title) ? "#FABD33" : "#5ACCCC",
              color: "#FFFFFF",
              "&:hover": {
                backgroundColor: isBookInList(title) ? "#FABD33" : "#53C2C2",
              },
            }}
            startIcon={isBookInList(title) ? null : <AddIcon />}
            onClick={() => addBook(book)}
            disabled={isBookInList(title)}
          >
            {isBookInList(title) ? "Added" : "Add to List"}
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default BookItem;
