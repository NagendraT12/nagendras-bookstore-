import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <h2 style={styles.subtitle}>Page Not Found</h2>
      <p style={styles.message}>
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link to="/" style={styles.homeButton}>
        Back to Home
      </Link>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '60vh',
    padding: '2rem',
    textAlign: 'center'
  },
  title: {
    fontSize: '6rem',
    margin: '0',
    color: '#007bff'
  },
  subtitle: {
    fontSize: '2rem',
    margin: '1rem 0',
    color: '#333'
  },
  message: {
    fontSize: '1.2rem',
    color: '#666',
    marginBottom: '2rem'
  },
  homeButton: {
    display: 'inline-block',
    padding: '0.8rem 1.5rem',
    backgroundColor: '#007bff',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '4px',
    fontSize: '1.1rem'
  }
};

export default NotFound; 