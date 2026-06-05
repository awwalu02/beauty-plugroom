// app/page.tsx
import Image from 'next/image';
import Header from '@/components/header';

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />


      {/* Hero Section */}
      <div 
        className="relative h-screen bg-cover bg-center flex items-center justify-center bg-[url('/img.jpg')]"
  
      >
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-8xl font-serif font-bold text-[#FFFDC3] leading-tight mb-6">
            Beauty Plug
          </h1>
          <p className="text-2xl text-white/90 mb-10 max-w-2xl mx-auto font-medium font-serif">
            Quality for Every Style
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a 
              href="#" 
              className="px-10 py-5 bg-white text-black font-semibold rounded-full text-lg hover:bg-rose-500 hover:text-white transition"
            >
              Shop Now
            </a>
            <a 
              href="#" 
              className="px-10 py-5 border-2 border-white text-white font-semibold rounded-full text-lg hover:bg-white hover:text-black transition"
            >
              Browse All Products
            </a>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Shop Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition cursor-pointer group">
              <Image 
                src={cat.img} 
                alt={cat.name}
                width={400}
                height={300}
                className="w-full h-56 object-cover group-hover:scale-105 transition"
              />
              <div className="p-6 text-center font-semibold text-lg">{cat.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {products.map((product, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="bg-gray-100 rounded-2xl overflow-hidden">
                  <Image 
                    src={product.img} 
                    alt={product.name}
                    width={400}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
               
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-12">Why Buisineses choose us</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <div className="text-5xl">🚚</div>
            <h3 className="text-xl font-semibold">Fast Delivery</h3>
            <p className="text-gray-600">Delivered to you in 2-5 days</p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl">🛡️</div>
            <h3 className="text-xl font-semibold">Premium Quality</h3>
            <p className="text-gray-600">Only professional-grade products</p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl">💬</div>
            <h3 className="text-xl font-semibold">Expert Support</h3>
            <p className="text-gray-600">Dedicated help for salon professionals</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Beauty Plug</h2>
          <p className="text-gray-400 mb-8">Premium supplies for professional salons</p>
          <p className="text-gray-500">&copy; 2026 Beauty Plug Co. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

// Sample Data
const categories = [
  { name: "Clippers", img: "/4.jpeg" },
  { name: "Saloon Funitures", img: "/10.jpeg" },
  { name: "Tools & Equipment", img: "/11.jpeg" },
  { name: "Apron", img: "/12.jpeg" },
];

const products = [
  { name: "Professional Hair Scissors", price: "$89.99", img: "/5.jpeg" },
  { name: "Ceramic Hair Straightener", price: "$129.99", img: "/6.jpeg" },
  { name: "Nail Polish Kit", price: "$45.99", img: "/7.jpeg" },
  { name: "Salon Cape Set", price: "$34.99", img: "/8.jpeg" },
];