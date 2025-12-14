import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, Search, Phone, Laptop, Headphones, Smartphone, Menu, Instagram, Twitter } from 'lucide-react';
import { useState } from 'react';

// Product data
const products = [
  {
    id: 1,
    name: 'گوشی سامسونگ S24 اولترا',
    price: '۴۵,۹۹۰,۰۰۰',
    image: 'https://images.unsplash.com/photo-1699265837122-7636e128b4b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwcHJvZHVjdHxlbnwxfHx8fDE3NjU2MDU2OTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    badge: null
  },
  {
    id: 2,
    name: 'گوشی اپل iPhone 15 Pro',
    price: '۵۲,۵۰۰,۰۰۰',
    image: 'https://images.unsplash.com/photo-1717996563514-e3519f9ef9f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMGVsZWN0cm9uaWNzJTIwbW9kZXJufGVufDF8fHx8MTc2NTY5NDAwNXww&ixlib=rb-4.1.0&q=80&w=1080',
    badge: null
  },
  {
    id: 3,
    name: 'گوشی اپل iPhone 13',
    price: '۳۸,۹۹۰,۰۰۰',
    image: 'https://images.unsplash.com/photo-1551789028-47bd9d06b118?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwaG9uZSUyMGRldmljZXxlbnwxfHx8fDE3NjU2OTQwMDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    badge: null
  },
  {
    id: 4,
    name: 'گوشی سامسونگ Z Flip',
    price: '۴۱,۵۰۰,۰۰۰',
    image: 'https://images.unsplash.com/photo-1699265837122-7636e128b4b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwcHJvZHVjdHxlbnwxfHx8fDE3NjU2MDU2OTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    badge: null
  },
  {
    id: 5,
    name: 'گوشی اپل iPhone 14',
    price: '۴۲,۰۰۰,۰۰۰',
    image: 'https://images.unsplash.com/photo-1717996563514-e3519f9ef9f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMGVsZWN0cm9uaWNzJTIwbW9kZXJufGVufDF8fHx8MTc2NTY5NDAwNXww&ixlib=rb-4.1.0&q=80&w=1080',
    badge: 'جدید'
  },
  {
    id: 6,
    name: 'گوشی سامسونگ A73',
    price: '۱۴,۵۰۰,۰۰۰',
    image: 'https://images.unsplash.com/photo-1551789028-47bd9d06b118?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwaG9uZSUyMGRldmljZXxlbnwxfHx8fDE3NjU2OTQwMDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    badge: null
  },
  {
    id: 7,
    name: 'گوشی شیائومی رِدمی نوت',
    price: '۷,۲۰۰,۰۰۰',
    image: 'https://images.unsplash.com/photo-1699265837122-7636e128b4b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwcHJvZHVjdHxlbnwxfHx8fDE3NjU2MDU2OTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    badge: 'جدید'
  },
  {
    id: 8,
    name: 'گوشی اپل iPhone 14 Pro',
    price: '۴۸,۵۰۰,۰۰۰',
    image: 'https://images.unsplash.com/photo-1717996563514-e3519f9ef9f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMGVsZWN0cm9uaWNzJTIwbW9kZXJufGVufDF8fHx8MTc2NTY5NDAwNXww&ixlib=rb-4.1.0&q=80&w=1080',
    badge: 'جدید'
  }
];

export default function Homepage() {
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          {/* Top Bar */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Phone className="w-8 h-8 text-[#00ffd1]" />
              <div>
                <p className="text-sm text-gray-600">پشتیبانی همه روزه از ۸ تا ۲۲</p>
                <p className="text-sm font-semibold">۰۲۱-۵۵۵۵۰۵۰۵</p>
              </div>
            </div>

            <nav className="flex gap-10">
              <Link to="/" className="text-[#00ffd1] font-medium">صفحه اصلی</Link>
              <button className="text-gray-600 hover:text-[#00ffd1] transition-colors">پشتیبانی</button>
              <button className="text-gray-600 hover:text-[#00ffd1] transition-colors">تماس با ما</button>
              <Link to="/about" className="text-gray-600 hover:text-[#00ffd1] transition-colors">درباره ما</Link>
            </nav>
          </div>

          <div className="h-px bg-gray-200 mb-4"></div>

          {/* Main Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 bg-gray-50 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex items-center justify-center w-8 h-8 bg-[#00ffd1] text-white rounded-full">
                  {cartCount}
                </div>
                <span className="text-[#00ffd1] font-medium">سبد خرید</span>
                <ShoppingBag className="w-8 h-8 text-gray-700" />
              </button>

              <button className="flex items-center gap-2 border-2 border-[#00ffd1] px-4 py-3 rounded-lg hover:bg-[#00ffd1] hover:text-white transition-colors">
                <span className="text-[#00ffd1] font-medium hover:text-white">ورود یا ثبت نام</span>
                <div className="w-8 h-8 text-[#00ffd1]">
                  <svg fill="currentColor" viewBox="0 0 32 32"><path d="M14.3467 2.66667C13.7067 2.66667 13.2 3.17333 13.2 3.81333V15.0933H18.0933L16 13C15.6133 12.6133 15.6133 11.9733 16 11.5867C16.3867 11.2 17.0267 11.2 17.4133 11.5867L21.2 15.3867C21.5867 15.7733 21.5867 16.4133 21.2 16.8L17.4133 20.6C17.2133 20.8 16.96 20.8933 16.7067 20.8933C16.4533 20.8933 16.2 20.8 16 20.6C15.6133 20.2133 15.6133 19.5733 16 19.1867L18.08 17.1067H13.2V28.2133C13.2 28.84 13.7067 29.36 14.3467 29.36C22.2 29.36 27.68 23.88 27.68 16.0267C27.68 8.17333 22.1867 2.66667 14.3467 2.66667Z"/></svg>
                </div>
              </button>
            </div>

            {/* Search */}
            <div className="flex-1 mx-8 max-w-lg">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="جستجو..."
                  className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00ffd1]"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
              </div>
            </div>

            {/* Logo */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-[#00ffd1] rounded-tl-[40px] rounded-br-lg rounded-tr-lg rounded-bl-[40px] flex items-center justify-center shadow-[0_0_20px_rgba(0,255,209,0.3)] transform rotate-45">
                <div className="transform -rotate-45 text-white text-center">
                  <p className="font-bold text-xl">Amir</p>
                  <p className="text-sm">Hosein</p>
                </div>
              </div>
              <div className="text-center mt-2">
                <p className="text-2xl font-bold text-[#00ffd1]">امیرحسین‌شاپ</p>
                <p className="text-xs text-gray-500 tracking-widest">AMIRHOSEINSHOP</p>
              </div>
            </div>
          </div>
        </div>

        {/* Category Bar */}
        <div className="bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <button className="bg-[#00ffd1] text-white px-6 py-4 rounded-lg font-bold shadow-lg hover:shadow-xl transition-shadow">
              فروش ویژه
            </button>

            <div className="flex gap-6">
              <button className="flex items-center gap-2 text-gray-700 hover:text-[#00ffd1] transition-colors">
                <Menu className="w-5 h-5" />
                <span>لپ‌تاپ</span>
                <Laptop className="w-6 h-6" />
              </button>
              <button className="flex items-center gap-2 text-gray-700 hover:text-[#00ffd1] transition-colors">
                <Menu className="w-5 h-5" />
                <span>لوازم جانبی گوشی</span>
                <Headphones className="w-6 h-6" />
              </button>
              <button className="flex items-center gap-2 text-gray-700 hover:text-[#00ffd1] transition-colors">
                <Menu className="w-5 h-5" />
                <span>گوشی</span>
                <Smartphone className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="relative h-80 bg-gradient-to-r from-purple-900 to-purple-700 rounded-lg overflow-hidden group">
          <img 
            src="https://images.unsplash.com/photo-1606625000171-fa7d471da28c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBsYXB0b3AlMjBjb21wdXRlcnxlbnwxfHx8fDE3NjU1ODUzODR8MA&ixlib=rb-4.1.0&q=80&w=1080" 
            alt="Gaming Laptops"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          
          <div className="absolute right-12 top-12 text-white">
            <h2 className="text-6xl font-black mb-2">بهترین</h2>
            <h2 className="text-6xl font-black mb-2">لپ‌تاپ های</h2>
            <h2 className="text-6xl font-black">بازی</h2>
          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <div className="w-3 h-3 bg-[#00ffd1] rounded-full"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          </div>

          {/* Navigation Arrows */}
          <button className="absolute left-6 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#00ffd1] rounded-full flex items-center justify-center hover:scale-110 transition-transform">
            <svg fill="currentColor" className="w-5 h-5 text-white" viewBox="0 0 32 32"><path d="M16 2.66667C8.65333 2.66667 2.66667 8.65333 2.66667 16C2.66667 23.3467 8.65333 29.3333 16 29.3333C23.3467 29.3333 29.3333 23.3467 29.3333 16C29.3333 8.65333 23.3467 2.66667 16 2.66667ZM19.72 16.7067L15.0133 21.4133C14.8133 21.6133 14.56 21.7067 14.3067 21.7067C14.0533 21.7067 13.8 21.6133 13.6 21.4133C13.2133 21.0267 13.2133 20.3867 13.6 20L17.6 16L13.6 12C13.2133 11.6133 13.2133 10.9733 13.6 10.5867C13.9867 10.2 14.6267 10.2 15.0133 10.5867L19.72 15.2933C20.12 15.68 20.12 16.32 19.72 16.7067Z"/></svg>
          </button>
          <button className="absolute right-6 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#00ffd1] rounded-full flex items-center justify-center hover:scale-110 transition-transform">
            <svg fill="currentColor" className="w-5 h-5 text-white" viewBox="0 0 32 32"><path d="M16 2.66667C8.65333 2.66667 2.66667 8.65333 2.66667 16C2.66667 23.3467 8.65333 29.3333 16 29.3333C23.3467 29.3333 29.3333 23.3467 29.3333 16C29.3333 8.65333 23.3467 2.66667 16 2.66667ZM18.3867 20C18.7733 20.3867 18.7733 21.0267 18.3867 21.4133C18.1867 21.6133 17.9333 21.7067 17.68 21.7067C17.4267 21.7067 17.1733 21.6133 16.9733 21.4133L12.2667 16.7067C11.88 16.32 11.88 15.68 12.2667 15.2933L16.9733 10.5867C17.36 10.2 18 10.2 18.3867 10.5867C18.7733 10.9733 18.7733 11.6133 18.3867 12L14.3867 16L18.3867 20Z"/></svg>
          </button>
        </div>
      </section>

      {/* Special Offers */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-4 gap-6">
          <div className="bg-[#00ffd1] rounded-lg overflow-hidden p-6 flex items-center justify-between hover:shadow-xl transition-shadow cursor-pointer">
            <div>
              <h3 className="text-white text-2xl font-bold mb-1">خرید گوشی</h3>
              <h3 className="text-white text-2xl font-bold">ارزان قیمت</h3>
              <button className="mt-4 bg-white text-[#00ffd1] px-4 py-2 rounded text-sm font-medium hover:bg-gray-100 transition-colors">
                خرید →
              </button>
            </div>
            <img src="https://images.unsplash.com/photo-1699265837122-7636e128b4b0?w=200" alt="" className="w-20 h-28 object-contain" />
          </div>

          <div className="bg-[#61ff00] rounded-lg overflow-hidden p-6 flex items-center justify-between hover:shadow-xl transition-shadow cursor-pointer">
            <div>
              <h3 className="text-white text-2xl font-bold mb-1">خرید گوشی</h3>
              <h3 className="text-white text-2xl font-bold">ارزان قیمت</h3>
              <button className="mt-4 bg-white text-[#61ff00] px-4 py-2 rounded text-sm font-medium hover:bg-gray-100 transition-colors">
                خرید →
              </button>
            </div>
            <img src="https://images.unsplash.com/photo-1717996563514-e3519f9ef9f7?w=200" alt="" className="w-20 h-28 object-contain" />
          </div>

          <div className="bg-[#ff005c] rounded-lg overflow-hidden p-6 flex items-center justify-between hover:shadow-xl transition-shadow cursor-pointer">
            <div>
              <h3 className="text-white text-2xl font-bold mb-1">خرید گوشی</h3>
              <h3 className="text-white text-2xl font-bold">ارزان قیمت</h3>
              <button className="mt-4 bg-white text-[#ff005c] px-4 py-2 rounded text-sm font-medium hover:bg-gray-100 transition-colors">
                خرید →
              </button>
            </div>
            <img src="https://images.unsplash.com/photo-1551789028-47bd9d06b118?w=200" alt="" className="w-20 h-28 object-contain" />
          </div>

          <div className="bg-[#ffe500] rounded-lg overflow-hidden p-6 flex items-center justify-between hover:shadow-xl transition-shadow cursor-pointer">
            <div>
              <h3 className="text-white text-2xl font-bold mb-1">خرید گوشی</h3>
              <h3 className="text-white text-2xl font-bold">ارزان قیمت</h3>
              <button className="mt-4 bg-white text-[#ffe500] px-4 py-2 rounded text-sm font-medium hover:bg-gray-100 transition-colors">
                خرید →
              </button>
            </div>
            <img src="https://images.unsplash.com/photo-1699265837122-7636e128b4b0?w=200" alt="" className="w-20 h-28 object-contain" />
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold">محصولات پیشنهادی</h2>
        </div>
        
        <div className="grid grid-cols-4 gap-6">
          {products.map((product) => (
            <div 
              key={product.id}
              onClick={() => navigate(`/product/${product.id}`)}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer group relative"
            >
              {product.badge && (
                <div className="absolute top-3 right-3 bg-[#ffe500] text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                  {product.badge}
                </div>
              )}
              <div className="aspect-square bg-gray-50 p-4 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <p className="text-[#00ffd1] font-bold text-xl">{product.price} تومان</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Large Banner */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-[#00ffd1] rounded-2xl p-12 flex items-center justify-between hover:shadow-xl transition-shadow cursor-pointer">
            <div>
              <h3 className="text-white text-4xl font-bold">خرید گوشی ارزان قیمت</h3>
              <button className="mt-6 bg-white text-[#00ffd1] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                خرید →
              </button>
            </div>
            <img src="https://images.unsplash.com/photo-1699265837122-7636e128b4b0?w=300" alt="" className="w-32 h-48 object-contain" />
          </div>

          <div className="bg-[#ff005c] rounded-2xl p-12 flex items-center justify-between hover:shadow-xl transition-shadow cursor-pointer">
            <div>
              <h3 className="text-white text-4xl font-bold">خرید گوشی ارزان قیمت</h3>
              <button className="mt-6 bg-white text-[#ff005c] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                خرید →
              </button>
            </div>
            <img src="https://images.unsplash.com/photo-1717996563514-e3519f9ef9f7?w=300" alt="" className="w-32 h-48 object-contain" />
          </div>
        </div>
      </section>

      {/* More Products */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold">محصولات جدید</h2>
        </div>
        
        <div className="grid grid-cols-4 gap-6">
          {products.slice(0, 4).map((product) => (
            <div 
              key={product.id}
              onClick={() => navigate(`/product/${product.id}`)}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer group"
            >
              <div className="aspect-square bg-gray-50 p-4 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <p className="text-[#00ffd1] font-bold text-xl">{product.price} تومان</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207358.85989264734!2d-122.68274889999999!3d37.8044999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580d7d57a0569%3A0x5a8e30a9e6d9f7f1!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1639576479169!5m2!1sen!2sus"
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">درباره ما</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                امیرحسین‌شاپ یکی از معتبرترین فروشگاه‌های آنلاین خرید گوشی موبایل و لوازم جانبی در ایران است.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">دسترسی سریع</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="text-gray-600 hover:text-[#00ffd1]">صفحه اصلی</Link></li>
                <li><Link to="/about" className="text-gray-600 hover:text-[#00ffd1]">درباره ما</Link></li>
                <li><button className="text-gray-600 hover:text-[#00ffd1]">تماس با ما</button></li>
                <li><button className="text-gray-600 hover:text-[#00ffd1]">شرایط و قوانین</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">خدمات مشتریان</h3>
              <ul className="space-y-2 text-sm">
                <li><button className="text-gray-600 hover:text-[#00ffd1]">پرسش‌های متداول</button></li>
                <li><button className="text-gray-600 hover:text-[#00ffd1]">رویه بازگشت کالا</button></li>
                <li><button className="text-gray-600 hover:text-[#00ffd1]">پیگیری سفارش</button></li>
                <li><button className="text-gray-600 hover:text-[#00ffd1]">گارانتی محصولات</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">تماس با ما</h3>
              <div className="space-y-3 text-sm">
                <p className="text-gray-600">تلفن: ۰۲۱-۵۵۵۵۰۵۰۵</p>
                <p className="text-gray-600">ایمیل: info@amirhoseinshop.ir</p>
                <div className="flex gap-3 mt-4">
                  <button className="w-10 h-10 bg-white border border-gray-300 rounded-lg flex items-center justify-center hover:border-[#00ffd1] hover:text-[#00ffd1] transition-colors">
                    <Instagram className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 bg-white border border-gray-300 rounded-lg flex items-center justify-center hover:border-[#00ffd1] hover:text-[#00ffd1] transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 7 14"><path d="M6.25251 7.00559H4.29013C4.29013 10.1408 4.29013 14 4.29013 14H1.38227C1.38227 14 1.38227 10.1782 1.38227 7.00559H0V4.53354H1.38227V2.93458C1.38227 1.78942 1.92643 0 4.31685 0L6.47163 0.00825959V2.40791C6.47163 2.40791 5.16224 2.40791 4.90765 2.40791C4.65306 2.40791 4.2911 2.53521 4.2911 3.08131V4.53403H6.50661L6.25251 7.00559Z"/></svg>
                  </button>
                  <button className="w-10 h-10 bg-white border border-gray-300 rounded-lg flex items-center justify-center hover:border-[#00ffd1] hover:text-[#00ffd1] transition-colors">
                    <Twitter className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 text-center">
            <p className="text-gray-600 text-sm">
              © ۱۴۰۳ امیرحسین‌شاپ. تمامی حقوق محفوظ است.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
