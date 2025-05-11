import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function BrowseBooks() {
  const { category } = useParams();
  const books = useSelector(state => state.books.books);
  const [searchTerm, setSearchTerm] = useState('');
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (bookId) => {
    setImageErrors(prev => ({
      ...prev,
      [bookId]: true
    }));
  };

  const filteredBooks = books.filter(book => {
    const matchesCategory = !category || book.category === category;
    const matchesSearch = !searchTerm || 
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        {category ? `${category} Books` : 'All Books'}
      </h1>

      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search by title or author..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.searchInput}
        />
      </div>

      <div style={styles.booksGrid}>
        {filteredBooks.map(book => (
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
            <p>Category: {book.category}</p>
            <p>Rating: {book.rating}/5</p>
            <Link to={`/book/${book.id}`} style={styles.viewButton}>
              View Details
            </Link>
          </div>
        ))}
      </div>

      {filteredBooks.length === 0 && (
        <p style={styles.noResults}>No books found.</p>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: '#181818',
    minHeight: '100vh',
    animation: 'fadeIn 0.5s ease-in'
  },
  title: {
    marginBottom: '2rem',
    color: '#fff',
    fontFamily: 'cursive',
    fontSize: '2rem',
    letterSpacing: '1px',
    animation: 'slideUp 0.5s ease-out'
  },
  searchContainer: {
    marginBottom: '2rem',
    animation: 'slideUp 0.7s ease-out'
  },
  searchInput: {
    width: '100%',
    padding: '0.8rem',
    fontSize: '1rem',
    border: '1px solid #444',
    borderRadius: '4px',
    backgroundColor: '#222',
    color: '#fff',
    transition: 'all 0.3s ease',
    '&:focus': {
      outline: 'none',
      borderColor: '#e50914',
      boxShadow: '0 0 0 2px rgba(229,9,20,0.2)'
    }
  },
  booksGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '2rem',
    animation: 'fadeIn 0.8s ease-in'
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
  },
  noResults: {
    textAlign: 'center',
    color: '#bbb',
    marginTop: '2rem',
    animation: 'fadeIn 0.5s ease-in'
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

export default BrowseBooks; 