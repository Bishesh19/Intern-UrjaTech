import { useState, useEffect } from 'react'
import ProductCard from './ProductCard'
import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Using a CORS proxy to bypass potential network blocks or CORS issues preventing the API from loading locally
        const response = await fetch('https://api.allorigins.win/raw?url=' + encodeURIComponent('https://fakestoreapi.com/products'))
        if (!response.ok) {
          throw new Error('Failed to fetch products')
        }
        const data = await response.json()
        setProducts(data)
      } catch (err) {
        // Provide a clearer error message
        setError(err.message === "Failed to fetch" 
          ? "Failed to fetch: Your network or ad-blocker might be blocking the API, or you are offline." 
          : err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return (
    <div className="app-layout">
      <header className="navbar">
        <div className="navbar-container">
           <div className="logo">
             <span className="logo-icon">🛍️</span>
             FakeStore<span className="logo-highlight">Hub</span>
           </div>
           <nav className="nav-links">
             <a href="#" className="active">All Products</a>
             <a href="#">Electronics</a>
             <a href="#">Jewelery</a>
             <a href="#">Men's</a>
             <a href="#">Women's</a>
           </nav>
        </div>
      </header>

      <main className="main-content">
        <div className="page-header">
          <h1>Discover Our Premium Collection</h1>
          <p>Explore high-quality products from top brands matching your lifestyle.</p>
        </div>
        
        {loading && (
          <div className="status-container">
            <div className="loader"></div>
            <h3>Loading incredible products...</h3>
          </div>
        )}

        {error && (
          <div className="status-container error">
            <div className="error-icon">⚠️</div>
            <h3>Oops! Something went wrong</h3>
            <p>{error}</p>
            <button className="retry-btn" onClick={() => window.location.reload()}>
              Try Again
            </button>
          </div>
        )}

        {!loading && !error && (
          <div className="products-grid">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>
      
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} FakeStoreHub. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
