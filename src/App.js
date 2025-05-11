import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BrowseBooks from './pages/BrowseBooks';
import BookDetails from './pages/BookDetails';
import AddBook from './pages/AddBook';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div style={styles.app}>
        <Navbar />
        <main style={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<BrowseBooks />} />
            <Route path="/books/:category" element={<BrowseBooks />} />
            <Route path="/book/:id" element={<BookDetails />} />
            <Route path="/add-book" element={<AddBook />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

const styles = {
  app: {
    minHeight: '100vh',
    backgroundColor: '#f8f9fa'
  },
  main: {
    paddingTop: '1rem'
  }
};

export default App;
