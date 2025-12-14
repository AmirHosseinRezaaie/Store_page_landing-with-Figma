import { Link, useParams } from 'react-router-dom';
import { ShoppingCart, Heart, Share2, Star, Phone, Smartphone, Instagram, Twitter } from 'lucide-react';
import { useState } from 'react';

const productDetails = {
  '1': {
    name: 'گوشی سامسونگ S24 اولترا',
    price: '۴۵,۹۹۰,۰۰۰',
    image: 'https://images.unsplash.com/photo-1699265837122-7636e128b4b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwcHJvZHVjdHxlbnwxfHx8fDE3NjU2MDU2OTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'گوشی موبایل سامسونگ مدل Galaxy S24 Ultra با حافظه داخلی 256 گیگابایت و رم 12 گیگابایت',
    specs: {
      'صفحه نمایش': '۶.۸ اینچ Dynamic AMOLED',
      'پردازنده': 'Snapdragon 8 Gen 3',
      'دوربین': '۲۰۰ مگاپیکسل + ۱۲ مگاپیکسل + ۱۰ مگاپیکسل',
      'باتری': '۵۰۰۰ میلی‌آمپر ساعت',
      'سیستم عامل': 'Android 14'
    }
  },
  '2': {
    name: 'گوشی اپل iPhone 15 Pro',
    price: '۵۲,۵۰۰,۰۰۰',
    image: 'https://images.unsplash.com/photo-1717996563514-e3519f9ef9f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMGVsZWN0cm9uaWNzJTIwbW9kZXJufGVufDF8fHx8MTc2NTY5NDAwNXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'گوشی موبایل اپل مدل iPhone 15 Pro با حافظه داخلی 256 گیگابایت',
    specs: {
      'صفحه نمایش': '۶.۱ اینچ Super Retina XDR',
      'پردازنده': 'A17 Pro',
      'دوربین': '۴۸ مگاپیکسل + ۱۲ مگاپیکسل + ۱۲ مگاپیکسل',
      'باتری': '۳۲۷۴ میلی‌آمپر ساعت',
      'سیستم عامل': 'iOS 17'
    }
  }
};

export default function ProductDetail() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  
  const product = productDetails[id as keyof typeof productDetails] || productDetails['1'];
  const images = [product.image, product.image, product.image, product.image];

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Header (Same as Homepage) */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
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
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Link to="/" className="hover:text-[#00ffd1]">خانه</Link>
          <span>/</span>
          <span>محصولات</span>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>
      </div>

      {/* Product Details */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 gap-12">
          {/* Images */}
          <div>
            <div className="bg-gray-50 rounded-xl p-8 mb-4">
              <img 
                src={images[selectedImage]} 
                alt={product.name}
                className="w-full h-96 object-contain"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`bg-gray-50 rounded-lg p-4 border-2 transition-colors ${
                    selectedImage === idx ? 'border-[#00ffd1]' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-20 object-contain" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-600">(۱۲۳ نظر)</span>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-bold text-[#00ffd1]">{product.price}</span>
                <span className="text-gray-600">تومان</span>
              </div>
              <p className="text-sm text-gray-600">موجود در انبار</p>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-lg mb-3">توضیحات محصول:</h3>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>

            <div className="mb-8">
              <h3 className="font-bold text-lg mb-4">مشخصات فنی:</h3>
              <div className="space-y-3">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between py-3 border-b border-gray-200">
                    <span className="text-gray-600">{key}</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 hover:bg-gray-50"
                >
                  -
                </button>
                <span className="px-6 py-3 border-x border-gray-300">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 hover:bg-gray-50"
                >
                  +
                </button>
              </div>

              <button className="flex-1 bg-[#00ffd1] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#00e6bb] transition-colors flex items-center justify-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                افزودن به سبد خرید
              </button>
            </div>

            <div className="flex gap-3">
              <button className="flex-1 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:border-[#00ffd1] hover:text-[#00ffd1] transition-colors flex items-center justify-center gap-2">
                <Heart className="w-5 h-5" />
                افزودن به علاقه‌مندی‌ها
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-[#00ffd1] hover:text-[#00ffd1] transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-8">نظرات کاربران</h2>
        <div className="space-y-6">
          {[1, 2, 3].map((review) => (
            <div key={review} className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#00ffd1] rounded-full flex items-center justify-center text-white font-bold">
                    ک
                  </div>
                  <div>
                    <h4 className="font-bold">کاربر امیرحسین‌شاپ</h4>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <span className="text-sm text-gray-500">۲ روز پیش</span>
              </div>
              <p className="text-gray-700 leading-relaxed">
                محصول عالی و با کیفیتی بود. کاملاً راضی هستم و به همه پیشنهاد می‌کنم.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Related Products */}
      <section className="max-w-7xl mx-auto px-6 py-12 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8">محصولات مرتبط</h2>
        <div className="grid grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <Link
              key={item}
              to={`/product/${item}`}
              className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all group"
            >
              <div className="aspect-square bg-gray-50 p-4">
                <img 
                  src="https://images.unsplash.com/photo-1699265837122-7636e128b4b0?w=400" 
                  alt=""
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">گوشی سامسونگ Galaxy S23</h3>
                <p className="text-[#00ffd1] font-bold text-lg">۳۵,۹۹۰,۰۰۰ تومان</p>
              </div>
            </Link>
          ))}
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
