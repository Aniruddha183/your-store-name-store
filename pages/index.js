import Layout from '../components/Layout';
import { ShoppingBag } from 'lucide-react';

export default function Home() {
  return (
    <Layout>
      <div className="min-h-screen font-inter" 
           style={{ backgroundColor: '#FFFFFF', color: '#000000' }}>
        <header className="border-b" style={{ borderColor: '#00000015' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded flex items-center justify-center" style={{ backgroundColor: '#3B82F6' }}>
                    <ShoppingBag size={24} style={{ color: '#FFFFFF' }} />
                  </div>
                <span className="text-xl font-bold" style={{ color: '#000000' }}>
                  Your Store
                </span>
              </div>
              
              <nav className="hidden md:flex items-center gap-8">
                <button className="text-sm font-medium transition-colors duration-200 hover:opacity-70" 
                        style={{ color: '#000000' }}>
                  Shop
                </button>
                <button className="text-sm font-medium transition-colors duration-200 hover:opacity-70" 
                        style={{ color: '#000000' }}>
                  Collections
                </button>
                <button className="text-sm font-medium transition-colors duration-200 hover:opacity-70" 
                        style={{ color: '#000000' }}>
                  About
                </button>
              </nav>
            </div>
          </div>
        </header>

        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight" 
                style={{ color: '#000000' }}>
              Your Store Name
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-70" 
               style={{ color: '#000000' }}>
              Beautiful products for modern living
            </p>
            <button className="px-8 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:scale-105 active:scale-95"
                    style={{ backgroundColor: '#3B82F6', color: '#FFFFFF' }}>
              Shop Now
            </button>
          </div>
        </section>

        <footer className="mt-16 border-t" style={{ borderColor: '#00000015' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold mb-4" style={{ color: '#000000' }}>
                  Contact
                </h3>
                <p className="text-sm mb-2 opacity-70" style={{ color: '#000000' }}>
                  hello@yourstore.com
                </p>
                <p className="text-sm mb-2 opacity-70" style={{ color: '#000000' }}>
                  +1 (555) 123-4567
                </p>
                <p className="text-sm opacity-70" style={{ color: '#000000' }}>
                  123 Main Street, City, State 12345
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Layout>
  );
}