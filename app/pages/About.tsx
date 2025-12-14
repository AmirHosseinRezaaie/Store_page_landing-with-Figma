import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Users, Award, ShieldCheck, Instagram, Twitter } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Header */}
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
              <Link to="/" className="text-gray-600 hover:text-[#00ffd1] transition-colors">صفحه اصلی</Link>
              <button className="text-gray-600 hover:text-[#00ffd1] transition-colors">پشتیبانی</button>
              <button className="text-gray-600 hover:text-[#00ffd1] transition-colors">تماس با ما</button>
              <Link to="/about" className="text-[#00ffd1] font-medium">درباره ما</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#00ffd1] to-[#00d4a8] text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h1 className="text-6xl font-black mb-6">امیرحسین‌شاپ</h1>
          <p className="text-2xl mb-4">معتبرترین فروشگاه آنلاین خرید گوشی و لوازم جانبی</p>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            با بیش از ۱۰ سال تجربه در زمینه فروش محصولات الکترونیک، ما به ارائه بهترین کیفیت و خدمات به مشتریان خود افتخار می‌کنیم
          </p>
        </div>
      </section>

      {/* Company Values */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">چرا امیرحسین‌شاپ؟</h2>
        <div className="grid grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-xl transition-shadow">
            <div className="w-20 h-20 bg-[#00ffd1] rounded-full flex items-center justify-center mx-auto mb-6">
              <ShieldCheck className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">کیفیت تضمین شده</h3>
            <p className="text-gray-600 leading-relaxed">
              تمامی محصولات ما با گارانتی معتبر و اصالت کامل ارائه می‌شوند
            </p>
          </div>

          <div className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-xl transition-shadow">
            <div className="w-20 h-20 bg-[#00ffd1] rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">پشتیبانی ۲۴/۷</h3>
            <p className="text-gray-600 leading-relaxed">
              تیم پشتیبانی ما آماده پاسخگویی به تمامی سوالات شما در هر زمان است
            </p>
          </div>

          <div className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-xl transition-shadow">
            <div className="w-20 h-20 bg-[#00ffd1] rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">قیمت رقابتی</h3>
            <p className="text-gray-600 leading-relaxed">
              بهترین قیمت‌ها را برای محصولات باکیفیت به شما ارائه می‌دهیم
            </p>
          </div>
        </div>
      </section>

      {/* About Story */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">داستان ما</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                امیرحسین‌شاپ در سال ۱۳۹۳ با هدف ارائه بهترین محصولات الکترونیکی با قیمت مناسب آغاز به کار کرد. از همان ابتدا، رضایت مشتریان و ارائه خدمات با کیفیت اصلی‌ترین اولویت ما بوده است.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                امروز با بیش از ۱۰۰,۰۰۰ مشتری راضی و فروش هزاران محصول، به یکی از معتبرترین فروشگاه‌های آنلاین در حوزه موبایل و لوازم جانبی تبدیل شده‌ایم.
              </p>
              <p className="text-gray-700 leading-relaxed">
                تیم ما متشکل از افراد متخصص و با تجربه‌ای است که همواره در تلاش هستند تا بهترین تجربه خرید را برای شما فراهم کنند.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <p className="text-5xl font-bold text-[#00ffd1] mb-2">+۱۰</p>
                <p className="text-gray-600">سال تجربه</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <p className="text-5xl font-bold text-[#00ffd1] mb-2">+۱۰۰K</p>
                <p className="text-gray-600">مشتری راضی</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <p className="text-5xl font-bold text-[#00ffd1] mb-2">+۵۰۰</p>
                <p className="text-gray-600">محصول متنوع</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <p className="text-5xl font-bold text-[#00ffd1] mb-2">۲۴/۷</p>
                <p className="text-gray-600">پشتیبانی</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">تیم ما</h2>
        <div className="grid grid-cols-4 gap-8">
          {[
            { name: 'امیرحسین احمدی', role: 'مدیرعامل' },
            { name: 'محمد رضایی', role: 'مدیر فنی' },
            { name: 'سارا کریمی', role: 'مدیر فروش' },
            { name: 'علی محمدی', role: 'مدیر پشتیبانی' }
          ].map((member, idx) => (
            <div key={idx} className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-[#00ffd1] to-[#00d4a8] rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-16 h-16 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-1">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-[#00ffd1] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">ارتباط با ما</h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-[#00ffd1]" />
              </div>
              <h3 className="font-bold text-xl mb-2">تلفن تماس</h3>
              <p className="text-lg">۰۲۱-۵۵۵۵۰۵۰۵</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-[#00ffd1]" />
              </div>
              <h3 className="font-bold text-xl mb-2">ایمیل</h3>
              <p className="text-lg">info@amirhoseinshop.ir</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-[#00ffd1]" />
              </div>
              <h3 className="font-bold text-xl mb-2">آدرس</h3>
              <p className="text-lg">تهران، خیابان ولیعصر، پلاک ۱۲۳</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="h-96 bg-gray-200 rounded-xl overflow-hidden">
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
      <footer className="bg-gray-50 border-t border-gray-200">
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
