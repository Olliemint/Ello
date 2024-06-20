
# Ello Frontend

### Link: [https://ello-ten.vercel.app/](https://ello-ten.vercel.app/)


## Features
- **Search Bar**: Allows users to search for books by title.
- **Search Results**: Displays book title, author, and a button to add the book to the reading list if it doesn't exist in the list, or a remove button if it does.
- **Reading List**: Displays all books added by the teacher with the option to remove books from the list.


## Getting Started


### Prerequisites
- Node.js (v14 or later)
- npm (v6 or later)

### Installation
1. Clone the repository
    ```sh
    git clone https://github.com/Olliemint/Ello.git
    ```
2. Navigate to the project directory
    ```sh
    cd ello-frontend
    ```
3. Install the dependencies
    ```sh
    npm install
    ```

### Running the Project Locally
1. Start the GraphQL server
    ```sh
    cd backend
    npm install
    npm start
    ```
   This starts a GraphQL server at `http://localhost:4000/graphql`.

2. Start the frontend
    ```sh
    cd ../frontend
    npm run dev
    ```
   This starts the React app on `http://localhost:5173`.

> **Note**: You don't need to run the backend locally. The frontend makes API calls to the deployed backend.
## Live Demo

You can also access the deployed version of the project at [https://ello-ten.vercel.app/](https://ello-ten.vercel.app/).
## Usage

    1. Use the search bar to search for books by title.
    2. View search results displaying the book title, author, and either:
    - An "Add to Reading List" button if the book is not in the reading list.
    - A "Remove from Reading List" button if the book is already in the reading list.
    3. Add books to the reading list by clicking the "Add to Reading List" button.
    4. Remove books from the reading list by clicking the "Remove from Reading List" button.
    5. View all added books in the reading list.

    ## Components
    - **SearchBar**: Component for the search input.
    - **BookList**: Component displaying the list of books resulting from the search.
    - **ReadingList**: Component displaying the list of books added by the teacher.
    - **BookItem**: Component for individual book details with conditional "Add" or "Remove" button.

    ## GraphQL
    ### Queries
    - **Books**: Fetches a list of books with the following fields:
    ```graphql
    query Books {
        books {
        author
        coverPhotoURL
        readingLevel
        title
        }
    }
## Feedback

If you have any feedback, please reach out to me at oliverkoechrj@gmail.com

