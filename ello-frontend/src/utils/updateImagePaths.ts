import { Book } from "../frontend/interfaces";

// src/utils/updateImagePaths.ts
export const updateImagePaths = (data: any, basePath: string): any => {
  const updatedData = { ...data };
  updatedData.data.books = updatedData.data.books.map((book: Book) => ({
    ...book,
    coverPhotoURL: `${basePath}/${book.coverPhotoURL}`,
  }));
  return updatedData;
};
