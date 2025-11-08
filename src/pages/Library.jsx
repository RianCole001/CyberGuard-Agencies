import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// --- Mock Data (Replace with Backend API Call Later) ---
const mockBooks = [
  {
    id: 1,
    title: "Mastering Ethical Hacking",
    author: "John Doe",
    category: "Ethical Hacking",
    price: 49.99,
    imageUrl: "https://via.placeholder.com/150/0000FF/FFFFFF?text=Ethical+Hacking", // Placeholder image
    description: "A comprehensive guide to ethical hacking techniques and penetration testing."
  },
  {
    id: 2,
    title: "Cybersecurity for Beginners",
    author: "Jane Smith",
    category: "Fundamentals",
    price: 29.99,
    imageUrl: "https://via.placeholder.com/150/FF0000/FFFFFF?text=Cyber+Basics", // Placeholder image
    description: "Start your journey into cybersecurity with this easy-to-understand introduction."
  },
  {
    id: 3,
    title: "Advanced Network Security",
    author: "Robert Johnson",
    category: "Network Security",
    price: 59.99,
    imageUrl: "https://via.placeholder.com/150/008000/FFFFFF?text=Network+Security", // Placeholder image
    description: "Dive deep into securing networks, firewalls, and intrusion detection systems."
  },
  {
    id: 4,
    title: "Cryptography Demystified",
    author: "Alice Brown",
    category: "Cryptography",
    price: 45.00,
    imageUrl: "https://via.placeholder.com/150/FFA500/000000?text=Cryptography", // Placeholder image
    description: "Understand the principles and applications of modern cryptography."
  },
  {
    id: 5,
    title: "Incident Response Handbook",
    author: "Michael Green",
    category: "Incident Response",
    price: 39.50,
    imageUrl: "https://via.placeholder.com/150/800080/FFFFFF?text=Incident+Response", // Placeholder image
    description: "A practical guide to handling cybersecurity incidents and recovery."
  },
];
// --------------------------------------------------------

const Library = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
        setBooks(mockBooks);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) {
    return (
      <div className="container py-5 text-center text-light" style={{ minHeight: '60vh' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-2">Loading books...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-5 text-center" style={{ minHeight: '60vh' }}>
        <div className="alert alert-danger" role="alert">
          Error: {error}
        </div>
        <p className="text-light">Could not load books. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="library-page bg-dark py-5">
      <div className="container">
        {/* Page Description */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-primary">Our Cybersecurity Library</h1>
          <p className="lead text-light">
            Dive into a world of knowledge with our curated collection of cybersecurity books.
            From foundational concepts to advanced techniques, find the resources you need to
            fortify your skills and stay ahead in the digital realm.
          </p>
          <hr className="my-4 bg-primary mx-auto" style={{ width: '100px', height: '3px' }}/>
        </div>

        {/* Books Display */}
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {books.map((book) => (
            <div className="col" key={book.id}>
              <div className="card h-100 shadow-sm border-0 bg-secondary text-light">
                <img
                  src={book.imageUrl}
                  className="card-img-top p-3"
                  alt={book.title}
                  style={{ maxHeight: '200px', objectFit: 'contain', backgroundColor: '#343a40' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-dark fw-bold">{book.title}</h5> {/* 💡 Changed text-primary to text-dark */}
                  <h6 className="card-subtitle mb-2 text-info">{book.author}</h6>
                  <p className="card-text text-light mb-1">
                    <small>Category: <span className="badge bg-primary text-dark">{book.category}</span></small>
                  </p>
                  <p className="card-text fs-5 fw-bold text-dark mt-auto">${book.price.toFixed(2)}</p> {/* 💡 Changed text-success to text-dark */}
                  <button className="btn btn-primary w-100 mt-2">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Library;