import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import * as React from "react";

type Props = {
  count: number;
  page: number;
  handleChange: (event: React.ChangeEvent<unknown>, value: number) => void;
};

export default function PaginationBtns({ count, page, handleChange }: Props) {
  return (
    <Stack spacing={2}>
      <Pagination
        className="!font-groteska-medium !font-your-custom-font"
        count={Math.ceil(count / 8)} 
        page={page}
        onChange={handleChange}
        size="large"
        variant="outlined"
        renderItem={(item) => (
          <PaginationItem
            sx={{
              color: "#335C6E", 
              borderColor: "#5ACCCC", 
              "&.Mui-selected": {
                backgroundColor: "#5ACCCC", 
                color: "#fff", 
              },
              "&.Mui-selected:hover": {
                backgroundColor: "#4AA088", 
                color: "#fff", 
              },
            }}
            {...item}
          />
        )}
      />
    </Stack>
  );
}
