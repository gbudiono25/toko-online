import { CartProvider } from './context/CartContext'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Categories from './components/Categories'
import Products from './components/Products'
import Features from './components/Features'
import Footer from './components/Footer'
import WhatsApp from './components/WhatsApp'
import CartDrawer from './components/CartDrawer'
import CartPage from './pages/CartPage'

export default function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <main className="min-h-screen">
              <Hero />
              <Categories />
              <Products />
              <Features />
            </main>
            <Footer />
            <WhatsApp />
            <CartDrawer />
          </>
        } />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </CartProvider>
  )
}
