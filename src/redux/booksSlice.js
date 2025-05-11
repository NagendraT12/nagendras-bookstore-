import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  books: [
    {
      id: '1',
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      category: 'Fiction',
      description: 'A story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan.',
      rating: 4.5,
      image: 'https://m.media-amazon.com/images/I/71FTb9X6wsL._AC_UF1000,1000_QL80_.jpg'
    },
    {
      id: '2',
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      category: 'Fiction',
      description: 'The story of racial injustice and the loss of innocence in the American South.',
      rating: 4.8,
      image: 'https://m.media-amazon.com/images/I/71FxgtFKcQL._AC_UF1000,1000_QL80_.jpg'
    },
    {
      id: '3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Non-Fiction',
      description: 'A book on evolution that explains how natural selection works at the genetic level.',
      rating: 4.6,
      image: 'https://m.media-amazon.com/images/I/71FxgtFKcQL._AC_UF1000,1000_QL80_.jpg'
    },
    {
      id: '4',
      title: '1984',
      author: 'George Orwell',
      category: 'Sci-Fi',
      description: 'A dystopian social science fiction novel and cautionary tale set in a totalitarian society.',
      rating: 4.7,
      image: 'https://m.media-amazon.com/images/I/71kxa1-0mfL._AC_UF1000,1000_QL80_.jpg'
    },
    {
      id: '5',
      title: 'The Da Vinci Code',
      author: 'Dan Brown',
      category: 'Mystery',
      description: 'A mystery thriller novel that follows symbologist Robert Langdon as he investigates a murder in the Louvre Museum.',
      rating: 4.3,
      image: 'https://m.media-amazon.com/images/I/71QKQ9mwV7L._AC_UF1000,1000_QL80_.jpg'
    },
    {
      id: '6',
      title: 'Steve Jobs',
      author: 'Walter Isaacson',
      category: 'Biography',
      description: 'The authorized biography of Apple co-founder Steve Jobs, based on more than forty interviews with Jobs.',
      rating: 4.6,
      image: 'https://m.media-amazon.com/images/I/71d1Z4L-1qL._AC_UF1000,1000_QL80_.jpg'
    },
    {
      id: '7',
      title: 'The Alchemist',
      author: 'Paulo Coelho',
      category: 'Fiction',
      description: 'A philosophical novel that follows a young Andalusian shepherd in his journey to the pyramids of Egypt.',
      rating: 4.5,
      image: 'https://m.media-amazon.com/images/I/71ZvnK+4JkL._AC_UF1000,1000_QL80_.jpg'
    },
    {
      id: '8',
      title: 'Sapiens',
      author: 'Yuval Noah Harari',
      category: 'Non-Fiction',
      description: 'A brief history of humankind, exploring the ways in which biology and history have defined us.',
      rating: 4.7,
      image: 'https://m.media-amazon.com/images/I/71-ghD6Jp5L._AC_UF1000,1000_QL80_.jpg'
    },
  ]
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        id: uuidv4(),
        ...action.payload
      };
      state.books.push(newBook);
    }
  }
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer; 