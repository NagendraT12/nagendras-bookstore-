import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../redux/booksSlice';

function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: '',
    description: '',
    rating: ''
  });
  const [errors, setErrors] = useState({});

  const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Mystery', 'Biography'];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.author.trim()) newErrors.author = 'Author is required';
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.rating || formData.rating < 0 || formData.rating > 5) {
      newErrors.rating = 'Rating must be between 0 and 5';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(addBook({
        ...formData,
        rating: parseFloat(formData.rating)
      }));
      navigate('/books');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Add New Book</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.title && <span style={styles.error}>{errors.title}</span>}
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.author && <span style={styles.error}>{errors.author}</span>}
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            style={styles.input}
          >
            <option value="">Select a category</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          {errors.category && <span style={styles.error}>{errors.category}</span>}
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            style={styles.textarea}
          />
          {errors.description && <span style={styles.error}>{errors.description}</span>}
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="rating">Rating (0-5)</label>
          <input
            type="number"
            id="rating"
            name="rating"
            min="0"
            max="5"
            step="0.1"
            value={formData.rating}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.rating && <span style={styles.error}>{errors.rating}</span>}
        </div>

        <button type="submit" style={styles.submitButton}>
          Add Book
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: '#181818',
    minHeight: '100vh',
    color: '#fff',
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
  form: {
    backgroundColor: '#222',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
    animation: 'slideUp 0.7s ease-out'
  },
  formGroup: {
    marginBottom: '1.5rem',
    animation: 'fadeIn 0.8s ease-in'
  },
  input: {
    width: '100%',
    padding: '0.8rem',
    fontSize: '1rem',
    border: '1px solid #444',
    borderRadius: '4px',
    marginTop: '0.5rem',
    backgroundColor: '#181818',
    color: '#fff',
    transition: 'all 0.3s ease',
    '&:focus': {
      outline: 'none',
      borderColor: '#e50914',
      boxShadow: '0 0 0 2px rgba(229,9,20,0.2)'
    }
  },
  textarea: {
    width: '100%',
    padding: '0.8rem',
    fontSize: '1rem',
    border: '1px solid #444',
    borderRadius: '4px',
    marginTop: '0.5rem',
    minHeight: '100px',
    resize: 'vertical',
    backgroundColor: '#181818',
    color: '#fff',
    transition: 'all 0.3s ease',
    '&:focus': {
      outline: 'none',
      borderColor: '#e50914',
      boxShadow: '0 0 0 2px rgba(229,9,20,0.2)'
    }
  },
  submitButton: {
    backgroundColor: '#e50914',
    color: '#fff',
    padding: '0.8rem 1.5rem',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
    width: '100%',
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
  error: {
    color: '#dc3545',
    fontSize: '0.875rem',
    marginTop: '0.25rem',
    animation: 'shake 0.5s ease-in-out'
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

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}
`;

// Add the keyframes to the document
const styleSheet = document.createElement('style');
styleSheet.textContent = keyframes;
document.head.appendChild(styleSheet);

export default AddBook; 