import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import logoImg from '@/assets/logo.png';

const Footer = () => {
  const [isContactMenuOpen, setIsContactMenuOpen] = useState(true);

  return (
    <footer className="bg-[hsl(215,15%,14%)] text-white">
      <div className="container-custom">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 space-x-reverse">
                <img src={logoImg} alt="شراء سيارات تشليح - لوجو" className="h-14 w-14 object-contain" />
                <span className="text-2xl font-extrabold tracking-wide text-secondary">شراء سيارات تشليح</span>
              </div>
              <p className="text-white/70 leading-relaxed">
                مؤسسة سعودية متخصصة في شراء جميع أنواع السيارات التالفة والمصدومة مع إسقاط اللوحات الفوري وخدمة 24 ساعة.
              </p>
              <div className="flex items-center space-x-2 space-x-reverse text-white/70">
                <Clock className="h-5 w-5" />
                <span>خدمة 24 ساعة</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">روابط سريعة</h3>
              <nav className="flex flex-col space-y-2">
                <Link to="/" className="text-white/70 hover:text-white transition-colors">
                  الرئيسية
                </Link>
                <Link to="/about/" className="text-white/70 hover:text-white transition-colors">
                  من نحن
                </Link>
                <Link to="/services/" className="text-white/70 hover:text-white transition-colors">
                  خدماتنا
                </Link>
                <Link to="/service-steps/" className="text-white/70 hover:text-white transition-colors">
                  خطوات الخدمة
                </Link>
                <Link to="/faq/" className="text-white/70 hover:text-white transition-colors">
                  أسئلة شائعة
                </Link>
                <Link to="/contact/" className="text-white/70 hover:text-white transition-colors">
                  تواصل معنا
                </Link>
              </nav>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">خدماتنا</h3>
              <div className="flex flex-col space-y-2 text-white/70">
                <span>شراء السيارات المصدومة</span>
                <span>شراء السيارات المتعطلة</span>
                <span>إسقاط اللوحات</span>
                <span>شراء جميع الماركات</span>
                <span>خدمة سطحة</span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">تواصل معنا</h3>
              <div className="space-y-3">
                <a 
                  href="tel:0534425343" 
                  className="flex items-center space-x-3 space-x-reverse text-white/80 hover:text-white transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span>0534425343</span>
                </a>
                <a 
                  href="mailto:info@shiracartashlih.com" 
                  className="flex items-center space-x-3 space-x-reverse text-white/80 hover:text-white transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span>info@shiracartashlih.com</span>
                </a>
                <div className="flex items-start space-x-3 space-x-reverse text-white/80">
                  <MapPin className="h-5 w-5 mt-1" />
                  <span>الرياض - السعودية</span>
                </div>
                <a 
                  href="https://wa.me/966534425343" 
                  className="inline-flex items-center space-x-3 space-x-reverse bg-[#25D366] text-white px-4 py-2 rounded-full font-semibold hover:opacity-90 transition-opacity"
                >
                  <span>التواصل عبر واتساب</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col items-center md:items-start space-y-2">
              <p className="text-white/60 text-sm">
                © 2025 شراء سيارات تشليح. جميع الحقوق محفوظة.
              </p>
              <p className="text-sm">
                By{' '}
                <a 
                  href="https://pixelmarketng.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-secondary-light transition-colors font-medium"
                  title="شركة بيكسل للتسويق الالكتروني"
                >
                  Pixel-DM
                </a>
              </p>
            </div>
            <div className="flex items-center space-x-4 space-x-reverse text-white/60 text-sm">
              <a href="/privacy/" className="hover:text-white transition-colors">
                سياسة الخصوصية
              </a>
              <span>•</span>
              <a href="/terms/" className="hover:text-white transition-colors">
                شروط الاستخدام
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Contact Buttons */}
      <div className="fixed bottom-6 right-6 z-50">
        {isContactMenuOpen ? (
          <div className="flex flex-col space-y-3">
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/966534425343"
              className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 animate-fade-in group"
              aria-label="تواصل عبر الواتساب"
            >
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="group-hover:scale-110 transition-transform">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
              </svg>
            </a>
            
            {/* Phone Button */}
            <a
              href="tel:0534425343"
              className="bg-[#34D399] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 animate-fade-in group"
              aria-label="اتصل بنا"
            >
              <Phone className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </a>
            
            {/* Close Button */}
            <button
              onClick={() => setIsContactMenuOpen(false)}
              className="bg-primary text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 animate-fade-in group self-center"
              aria-label="إغلاق أيقونات التواصل"
            >
              <X className="h-7 w-7 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center space-y-2">
            <button
              onClick={() => setIsContactMenuOpen(true)}
              className="bg-gradient-primary text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 animate-fade-in group"
              aria-label="فتح أيقونات التواصل"
            >
              <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </button>
            <span className="text-xs font-medium text-primary bg-white px-2 py-1 rounded-full shadow-sm">
              تواصل معنا
            </span>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;