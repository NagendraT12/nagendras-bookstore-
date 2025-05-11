import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';

function BookDetails() {
  const { id } = useParams();
  const books = useSelector(state => state.books.books);
  const book = books.find(b => b.id === id);
  const [imageError, setImageError] = useState(false);

  if (!book) {
    return (
      <div style={styles.container}>
        <h2>Book not found</h2>
        <Link to="/books" style={styles.backButton}>
          Back to Browse
        </Link>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.bookDetails}>
        <div style={styles.imageContainer}>
          {!imageError ? (
            <img 
              src={book.image} 
              alt={book.title} 
              style={styles.bookImage}
              onError={() => setImageError(true)}
            />
          ) : (
            <div style={styles.imagePlaceholder}>
              <span>Image not available</span>
            </div>
          )}
        </div>
        <div style={styles.content}>
          <h1 style={styles.title}>{book.title}</h1>
          <p style={styles.author}>By {book.author}</p>
          <p style={styles.category}>Category: {book.category}</p>
          <p style={styles.rating}>Rating: {book.rating}/5</p>
          <div style={styles.description}>
            <h3>Description</h3>
            <p>{book.description}</p>
          </div>
          <Link to="/books" style={styles.backButton}>
            Back to Browse
          </Link>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '1000px',
    margin: '0 auto',
    backgroundColor: '#181818',
    minHeight: '100vh',
    color: '#fff',
    animation: 'fadeIn 0.5s ease-in'
  },
  bookDetails: {
    backgroundColor: '#222',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
    display: 'flex',
    gap: '2rem',
    color: '#fff',
    animation: 'slideUp 0.5s ease-out'
  },
  imageContainer: {
    flex: '0 0 300px',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.02)'
    }
  },
  bookImage: {
    width: '100%',
    height: '450px',
    objectFit: 'cover',
    borderRadius: '4px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
    transition: 'all 0.3s ease',
    '&:hover': {
      boxShadow: '0 4px 12px rgba(0,0,0,0.6)'
    }
  },
  imagePlaceholder: {
    width: '100%',
    height: '450px',
    backgroundColor: '#333',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '4px',
    color: '#bbb',
    textAlign: 'center',
    padding: '1rem'
  },
  content: {
    flex: '1',
    animation: 'fadeIn 0.8s ease-in'
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1rem',
    color: '#fff',
    fontFamily: 'cursive',
    letterSpacing: '1px',
    animation: 'slideUp 0.6s ease-out'
  },
  author: {
    fontSize: '1.2rem',
    color: '#bbb',
    marginBottom: '0.5rem',
    animation: 'slideUp 0.7s ease-out'
  },
  category: {
    color: '#bbb',
    marginBottom: '0.5rem',
    animation: 'slideUp 0.8s ease-out'
  },
  rating: {
    color: '#bbb',
    marginBottom: '1.5rem',
    animation: 'slideUp 0.9s ease-out'
  },
  description: {
    marginBottom: '2rem',
    animation: 'slideUp 1s ease-out'
  },
  backButton: {
    display: 'inline-block',
    padding: '0.5rem 1rem',
    backgroundColor: '#e50914',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '4px',
    fontWeight: 'bold',
    letterSpacing: '1px',
    boxShadow: '0 2px 8px rgba(229,9,20,0.2)',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: '#ff0f1a',
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 12px rgba(229,9,20,0.4)'
    }
  }
};

// Add keyframes at the end of the file
const keyframes = `
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { 
    opacity: 0;
    transform: translateY(20px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
}
`;

// Add the keyframes to the document
const styleSheet = document.createElement('style');
styleSheet.textContent = keyframes;
document.head.appendChild(styleSheet);

export default BookDetails; 