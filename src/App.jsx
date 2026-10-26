import { useState } from 'react'
import './App.css'
import ProductCard from './components/ProductCard'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)
const products = [
  {
    id: 1,
    name: 'Floral Summer Dress',
    category: 'Women',
    price: 129,
    image:
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    name: 'Classic Handbag',
    category: 'Accessories',
    price: 89,
    image:
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    name: 'Elegant Everyday Style',
    category: 'Women',
    price: 159,
    image:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80',
  },
]

  return (
    <div className="min-h-screen bg-[#faf8f4] text-[#29251f]">
      {/* Navbar */}
      
<nav className="relative flex items-center justify-between px-6 py-5 md:px-12">
  <a href="/" className="text-2xl font-bold tracking-wide">
    Style<span className="text-[#a87952]">Nest</span>
  </a>

  <div className="hidden items-center gap-8 md:flex">
    <a href="/">Home</a>
    <a href="#shop">Shop</a>
    <a href="#women">Women</a>
    <a href="#men">Men</a>
    <a href="#accessories">Accessories</a>
  </div>

  <div className="flex items-center gap-3">
    <button className="rounded-full border border-[#29251f] px-4 py-2 text-sm">
  Cart ({cartCount})
</button>

    <button
      type="button"
      onClick={() => setMenuOpen(!menuOpen)}
      className="rounded-lg border px-3 py-2 md:hidden"
      aria-label="Toggle navigation menu"
      aria-expanded={menuOpen}
    >
      {menuOpen ? '✕' : '☰'}
    </button>
  </div>

  {menuOpen && (
    <div className="absolute left-0 top-full z-50 flex w-full flex-col gap-4 border-t border-[#e8e0d6] bg-[#faf8f4] px-6 py-5 shadow-lg md:hidden">
      <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
      <a href="#shop" onClick={() => setMenuOpen(false)}>Shop</a>
      <a href="#women" onClick={() => setMenuOpen(false)}>Women</a>
      <a href="#men" onClick={() => setMenuOpen(false)}>Men</a>
      <a href="#accessories" onClick={() => setMenuOpen(false)}>Accessories</a>
    </div>
  )}
</nav>


      {/* Hero Section */}
      <section className="grid items-center gap-8 px-6 py-10 md:grid-cols-2 md:px-12 md:py-16">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#a87952]">
            New Season Collection
          </p>

          <h1 className="max-w-xl text-4xl font-semibold leading-tight md:text-6xl">
            Find Your
            <br />
            Everyday Style.
          </h1>

          <p className="mt-5 max-w-md leading-7 text-[#756e65]">
            Discover timeless fashion, beautiful essentials,
            and styles made for every moment.
          </p>

          <a
            href="#shop"
            className="mt-8 inline-block rounded-full bg-[#29251f] px-8 py-3 text-white transition hover:bg-[#a87952]"
          >
            Explore Collection →
          </a>
        </div>

        <div className="overflow-hidden rounded-2xl bg-[#e9e0d5]">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=85"
            alt="Fashion collection"
            className="h-[350px] w-full object-cover md:h-[480px]"
          />
        </div>
      </section>

      {/* Collection Intro */}
      <section id="shop" className="px-6 py-12 text-center md:px-12">
        <p className="text-sm uppercase tracking-[0.2em] text-[#a87952]">
          Curated for you
        </p>
        <h2 className="mt-3 text-3xl font-semibold">
          Discover Your Style
        </h2>
        <p className="mt-3 text-[#756e65]">
          Everyday essentials. Effortless elegance.
        </p>
      </section>
      <ProductCard products={products} onAddToCart={() => setCartCount((prev) => prev + 1)} />
    </div>
  )
}

export default App
