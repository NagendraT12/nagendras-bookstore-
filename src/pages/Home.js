import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';

function Home() {
  const books = useSelector(state => state.books.books);
  const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Mystery', 'Biography', 'Indian Literature'];
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (bookId) => {
    setImageErrors(prev => ({
      ...prev,
      [bookId]: true
    }));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.welcome}>Welcome to Nagendra's Bookstore</h1>
      
      <section style={styles.section}>
        <h2>Book Categories</h2>
        <div style={styles.categories}>
          {categories.map(category => (
            <Link 
              key={category} 
              to={`/books/${category}`}
              style={styles.category}
            >
              {category}
            </Link>
          ))}
        </div>
      </section>

      <section style={styles.section}>
        <h2>Popular Books</h2>
        <div style={styles.books}>
          {books.slice(0, 3).map(book => (
            <div key={book.id} style={styles.bookCard}>
              {!imageErrors[book.id] ? (
                <img 
                  src={book.image} 
                  alt={book.title} 
                  style={styles.bookImage}
                  onError={() => handleImageError(book.id)}
                />
              ) : (
                <div style={styles.imagePlaceholder}>
                  <span>Image not available</span>
                </div>
              )}
              <h3>{book.title}</h3>
              <p>By {book.author}</p>
              <p>Rating: {book.rating}/5</p>
              <Link to={`/book/${book.id}`} style={styles.viewButton}>
                View Details
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: '#181818',
    minHeight: '100vh'
  },
  welcome: {
    textAlign: 'center',
    marginBottom: '2rem',
    color: '#fff',
    fontFamily: 'cursive',
    fontSize: '2.5rem',
    letterSpacing: '2px',
    animation: 'fadeIn 1s ease-in'
  },
  section: {
    marginBottom: '3rem',
    color: '#fff',
    animation: 'slideUp 0.5s ease-out'
  },
  categories: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    marginTop: '1rem'
  },
  category: {
    padding: '0.5rem 1rem',
    backgroundColor: '#222',
    borderRadius: '20px',
    textDecoration: 'none',
    color: '#fff',
    border: '1px solid #444',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: '#333',
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
    }
  },
  books: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    marginTop: '1rem'
  },
  bookCard: {
    padding: '1.5rem',
    border: '1px solid #333',
    borderRadius: '8px',
    backgroundColor: '#222',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#fff',
    boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 8px 16px rgba(0,0,0,0.5)'
    }
  },
  bookImage: {
    width: '200px',
    height: '300px',
    objectFit: 'cover',
    marginBottom: '1rem',
    borderRadius: '4px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)'
    }
  },
  imagePlaceholder: {
    width: '200px',
    height: '300px',
    backgroundColor: '#333',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1rem',
    borderRadius: '4px',
    color: '#bbb',
    textAlign: 'center',
    padding: '1rem'
  },
  viewButton: {
    display: 'inline-block',
    padding: '0.5rem 1rem',
    backgroundColor: '#e50914',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '4px',
    marginTop: '1rem',
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

export default Home; 