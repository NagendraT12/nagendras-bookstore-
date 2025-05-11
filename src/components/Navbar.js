import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <Link to="/" style={styles.link}>Nagendra's Bookstore</Link>
      </div>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/books" style={styles.link}>Browse Books</Link>
        <Link to="/add-book" style={styles.link}>Add Book</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#111',
    boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
    position: 'sticky',
    top: 0,
    zIndex: 1000
  },
  logo: {
    fontSize: '1.7rem',
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: '2px',
    fontFamily: 'cursive',
    transition: 'transform 0.3s ease'
  },
  links: {
    display: 'flex',
    gap: '2rem'
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    position: 'relative',
    padding: '0.5rem 0',
    '&:hover': {
      color: '#e50914',
      transform: 'translateY(-2px)'
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '0%',
      height: '2px',
      backgroundColor: '#e50914',
      transition: 'width 0.3s ease'
    },
    '&:hover::after': {
      width: '100%'
    }
  }
};

export default Navbar; 