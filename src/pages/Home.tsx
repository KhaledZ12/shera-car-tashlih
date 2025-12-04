import PageSEO from '@/components/PageSEO';
import Layout from '@/components/Layout/Layout';
import InternalLinks from '@/components/InternalLinks';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, MessageCircle, CheckCircle, Star, Trophy, Users, Car, Clock, Shield, Wrench, Settings, Truck, FileText } from 'lucide-react';

// Images now imported from assets for reliable bundling
import yardImage from '@/assets/cars.jpg';
import lotCrowdImage from '@/assets/cars7.jpg';
import pileCrashImage from '@/assets/cars3.jpg';
import bmwWhiteDamageImage from '@/assets/bmw-crashed-riyadh.jpg';
import redDamageImage from '@/assets/red-damaged-car.jpg';

const Home = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "شراء سيارات تشليح",
    "description": "مؤسسة سعودية متخصصة في شراء جميع أنواع السيارات التالفة والمصدومة",
    "url": "https://shiracartashlih.com/",
    "logo": "https://shiracartashlih.com/logo.png",
    "telephone": "0553668948",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "الرياض",
      "addressCountry": "SA"
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "priceRange": "$$"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "ما هي خدماتكم؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "نقدم خدمات شراء السيارات المصدومة والمتعطلة والمستعملة مع إسقاط اللوحات الفوري وخدمة سطحة."
        }
      },
      {
        "@type": "Question", 
        "name": "هل تستقبلون سيارات تالفة جداً؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "نعم، نشتري جميع أنواع السيارات بغض النظر عن حالتها مع تقديم أفضل الأسعار."
        }
      }
    ]
  };

  const combinedSchema = [organizationSchema, faqSchema];

  const achievements = [
    { number: "20,000+", label: "عميل راضي", icon: Users },
    { number: "1,658+", label: "مركبة تم إسقاطها", icon: Car },
    { number: "20+", label: "سنة خبرة", icon: Trophy },
    { number: "15,000", label: "عميل سعيد", icon: Star }
  ];

  const services = [
    { title: "شراء السيارات المصدومة", icon: Car },
    { title: "شراء السيارات المعطلة", icon: Wrench },
    { title: "شراء السيارات سكراب", icon: Car },
    { title: "شراء السيارات المستعملة", icon: Car },
    { title: "إسقاط اللوحات", icon: Shield },
    { title: "خدمة سطحة", icon: Car }
  ];

  const brands = [
    "تويوتا", "هيونداي", "نيسان", "فورد", "مرسيدس", "سكودا", "شيفروليه", "كيا"
  ];

  const faqItems = [
    { question: "ما هي خدماتكم؟", answer: "نقدم خدمات شراء السيارات المصدومة والمتعطلة والمستعملة مع إسقاط اللوحات الفوري وخدمة سطحة." },
    { question: "هل تستقبلون سيارات تالفة جداً؟", answer: "نعم، نشتري جميع أنواع السيارات بغض النظر عن حالتها مع تقديم أفضل الأسعار." },
    { question: "هل تقدمون شراء سيارات مستعملة؟", answer: "نعم، نشتري السيارات المستعملة والجديدة وجميع الماركات بأفضل الأسعار." },
    { question: "كم تستغرق مدة المعاينة والشراء؟", answer: "نقدم خدمة سريعة خلال 24 ساعة مع إسقاط اللوحات الفوري." }
  ];

  return (
    <Layout>
      <PageSEO
        title="شراء سيارات تشليح | شراء سيارات تالفة ومصدومة بالرياض وكافة مدن السعودية"
        description="نشتري جميع أنواع السيارات التالفة والمصدومة في السعودية مع إسقاط اللوحات الفوري وخدمة 24 ساعة. اتصل بنا الآن للحصول على أفضل سعر."
        keywords="بيع سيارات تشليح, بيع سيارات تشليح الرياض, شراء سيارات مصدومة, بيع سيارة مصدومة, نشتري سيارات تشليح الرياض, شراء سيارات مصدومة الرياض, ارقام شراء سيارات سكراب, أسعار بيع السيارات تشليح, شراء سيارات تشليح, تشليح شراء سيارات, رقم شراء سيارات تشليح, طريقة بيع سيارة تشليح, بيع سيارات معطلة, بيع السيارات المصدومة, سيارات تشليح للبيع, سيارات للبيع تشليح, سيارات للبيع مصدومه, سكراب شراء سيارات, بيع السيارة تشليح والاستمارة منتهية, شراء سيارات تشليح الرياض"
        url="https://shiracartashlih.com/"
      />
      
      {/* Hero Section - Redesigned */}
      <section className="relative text-white overflow-hidden pt-20 pb-24 md:pt-24 md:pb-28">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${yardImage})` }}
          aria-hidden="true"
        ></div>
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[hsl(var(--primary)_/_0.75)] to-black/70"></div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Copy */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <Car className="h-7 w-7 text-secondary" />
                <span className="text-secondary font-semibold">خدمة فورية في جميع المناطق</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tight mb-3">
                شراء سيارات تشليح
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-[1.2] mb-4">
                نشتري سيارتك المصدومة أو المعطلة <span className="text-secondary">فوراً</span>
              </h2>
              <p className="text-white/90 text-lg md:text-xl mb-6">
                تقييم سريع، سطحة مجانية، وإسقاط لوحات رسمي بنفس اليوم. نحصل لك على أفضل سعر بدون عناء.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-white/90">
                <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-[#22c55e]"/> دفع فوري نقداً أو تحويل</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-[#22c55e]"/> نشتري جميع الماركات والحالات</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-[#22c55e]"/> نوصل لأي موقع داخل المملكة</li>
                <li className="flex items-center gap-2"><Shield className="h-5 w-5 text-secondary"/> إجراءات نظامية مكتملة</li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="whatsapp" asChild className="w-full sm:w-auto">
                  <a href="https://wa.me/966553668948" target="_blank" rel="noopener noreferrer">
                    واتساب الآن
                  </a>
                </Button>
                <Button size="lg" variant="secondary" asChild className="w-full sm:w-auto">
                  <a href="tel:0553668948">
                    <Phone className="h-5 w-5 ml-2"/>
                    اتصال مباشر
                  </a>
                </Button>
              </div>
            </div>

            {/* Right column intentionally empty (removed images from hero) */}
            <div className="lg:col-span-5 hidden md:block"></div>
          </div>
        </div>
      </section>

      {/* Hero Gallery moved below hero */}
      <section className="section-spacing pt-20 md:pt-24">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-6 md:mb-8">
              <h3 className="text-2xl md:text-3xl font-extrabold">لقطات توضح حالات السيارات التي نشتريها وخدماتنا</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <figure className="relative group overflow-hidden rounded-xl shadow-lg transition-transform duration-300 ease-out will-change-transform hover:scale-[1.02] hover:shadow-xl">
                <img src={pileCrashImage} alt="حوادث سيارات متعددة" className="w-full h-48 sm:h-56 md:h-64 object-cover" loading="lazy"/>
                <figcaption className="absolute inset-x-0 bottom-0 bg-black/45 text-white text-sm sm:text-base px-3 py-2">
                  حوادث سيارات متعددة - نشتري جميع الحالات
                </figcaption>
              </figure>
              <figure className="relative group overflow-hidden rounded-xl shadow-lg transition-transform duration-300 ease-out will-change-transform hover:scale-[1.02] hover:shadow-xl">
                <img src={bmwWhiteDamageImage} alt="بي إم دبليو مصدومة" className="w-full h-48 sm:h-56 md:h-64 object-cover" loading="lazy"/>
                <figcaption className="absolute inset-x-0 bottom-0 bg-black/45 text-white text-sm sm:text-base px-3 py-2">
                  تقييم فوري وسعر عادل لسيارتك
                </figcaption>
              </figure>
              <figure className="relative group overflow-hidden rounded-xl shadow-lg transition-transform duration-300 ease-out will-change-transform hover:scale-[1.02] hover:shadow-xl">
                <img src={redDamageImage} alt="سيارة حمراء متضررة" className="w-full h-48 sm:h-56 md:h-64 object-cover" loading="lazy"/>
                <figcaption className="absolute inset-x-0 bottom-0 bg-black/45 text-white text-sm sm:text-base px-3 py-2">
                  سطحة ونقل مجاني داخل المملكة
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Redesigned */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="text-secondary font-semibold">لماذا نحن</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">اختيارك الأسرع والأضمن للبيع</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">نقدّم تجربة بيع سلسة من أول اتصال حتى استلام المبلغ وإسقاط اللوحات. خبرة، التزام، ونتيجة فورية.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: "شراء فوري", desc: "نقيّم ونشتري خلال ساعات", icon: Car, ariaLabel: "خدمة شراء سيارات التشليح والسكراب" },
              { title: "أفضل سعر", desc: "عروض عادلة وشفافة", icon: CheckCircle, ariaLabel: "التزام بأعلى معايير الجودة" },
              { title: "24 ساعة", desc: "خدمة وتواصل طوال اليوم", icon: Clock, ariaLabel: "سرعة في تقديم الخدمة" },
              { title: "+20 سنة خبرة", desc: "ثقة في السوق السعودي", icon: Trophy, ariaLabel: "خبرة طويلة" }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="text-center hover-lift">
                  <CardContent className="p-6">
                    <div className="bg-primary text-primary-foreground p-4 rounded-xl w-14 h-14 mx-auto mb-4 flex items-center justify-center shadow-md">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Preview - Redesigned */}
      <section className="bg-muted/50 section-spacing">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="slide-in-right">
                <span className="text-secondary font-semibold">من نحن</span>
                <h3 className="text-3xl md:text-4xl font-extrabold mt-2">خبرتنا تضمن لك عملية بيع بلا تعقيد</h3>
                <p className="text-base sm:text-lg text-muted-foreground mt-3 mb-6 leading-relaxed">
                  فريق متخصص في شراء السيارات المصدومة والمعطلة والمستعملة. نأتيك أينما كنت، نقيّم سيارتك فوراً، ونستكمل إسقاط اللوحات رسميًا في نفس اليوم.
                </p>
                <div className="flex gap-3">
                  <Button size="lg" asChild>
                    <a href="/about/">اعرف قصتنا</a>
                  </Button>
                  <Button size="lg" variant="secondary" asChild>
                    <a href="/service-steps/">كيف نعمل؟</a>
                  </Button>
                </div>
              </div>
              <div className="slide-in-up">
                <img 
              src={yardImage} 
              alt="فريق عمل شراء سيارات تشليح - خبرة 20 سنة في شراء السيارات التالفة والمصدومة بالرياض"
                  className="w-full rounded-xl shadow-lg hover-lift"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements - Redesigned */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-8">
            <span className="text-secondary font-semibold">أرقام نتفاخر بها</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">نتائج واضحة وثقة دائمة</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              const achievementLabels = [
                "عدد العملاء الراضين عن خدماتنا",
                "عدد المركبات التي تم إسقاط لوحاتها",
                "سنوات الخبرة في مجال شراء السيارات",
                "عدد العملاء السعداء بخدماتنا"
              ];
              return (
                <div key={index} className="text-center bg-card border rounded-xl p-6 hover-lift">
                  <div className="mx-auto mb-3 flex items-center justify-center w-12 h-12 rounded-lg bg-primary text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-foreground">{achievement.number}</div>
                  <div className="text-muted-foreground text-sm sm:text-base mt-1">{achievement.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Preview - Redesigned */}
      <section className="bg-muted/50 section-spacing">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="text-secondary font-semibold">خدماتنا</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">حلول بيع تناسب كل حالة</h2>
            <p className="text-muted-foreground mt-3">اختر الخدمة المناسبة وسيقوم فريقنا بالباقي من التقييم حتى إسقاط اللوحات.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              const serviceAltTexts = [
                "خدمة شراء السيارات المصدومة والتالفة",
                "خدمة شراء السيارات المعطلة والمتوقفة",
                "خدمة شراء سيارات السكراب والتشليح",
                "خدمة شراء السيارات المستعملة بأفضل الأسعار",
                "خدمة إسقاط لوحات السيارات الفورية",
                "خدمة سطحة لنقل السيارات التالفة"
              ];
              return (
                <Card key={index} className="hover-lift">
                  <CardContent className="p-6 text-center">
                    <div className="bg-primary text-primary-foreground p-3 rounded-lg w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                      <div title={`أيقونة ${service.title}`} aria-label={serviceAltTexts[index]}>
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold">{service.title}</h3>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="text-center">
            <Button size="lg" asChild>
              <a href="/services/">
                <div title="عرض جميع الخدمات" aria-label="اطلع على جميع خدمات شراء السيارات التالفة" className="inline-flex items-center">
                  <Truck className="h-5 w-5 ml-2" />
                  جميع خدماتنا
                </div>
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Brands - Redesigned */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-8">
            <span className="text-secondary font-semibold">الماركات</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">نستقبل كل الموديلات وكل الحالات</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {brands.map((brand, index) => (
              <span key={index} className="px-4 py-2 rounded-full bg-card border text-foreground/80 text-sm font-medium hover-lift">
                {brand}
              </span>
            ))}
          </div>
          
          {/* Important Notice */}
          <div className="mt-12 text-center">
            <div className="bg-secondary/10 border border-secondary/30 rounded-xl p-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-3">
                <div className="bg-secondary/20 p-2 rounded-full">
                  <svg className="h-6 w-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">تنبيه هام</h3>
              <p className="text-foreground/80 font-medium">
                ليس لدينا قطع غيار - نحن متخصصون فقط في شراء السيارات التالفة والمصدومة
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Redesigned */}
      <section className="bg-muted/50 section-spacing">
        <div className="container-custom">
          <div className="text-center mb-8">
            <span className="text-secondary font-semibold">الأسئلة الشائعة</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">كل ما تحتاج معرفته قبل البيع</h2>
          </div>
          <div className="max-w-3xl mx-auto grid gap-4">
            {faqItems.map((faq, index) => (
              <Card key={index} className="border border-border">
                <CardContent className="p-5">
                  <h3 className="text-base md:text-lg font-bold mb-2 text-foreground">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Redesigned */}
      <section className="bg-primary text-primary-foreground section-spacing">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">جاهز تبيع سيارتك اليوم؟</h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">اتصل بنا لنقيّم سيارتك حالًا ونستكمل إجراءات البيع وإسقاط اللوحات في نفس اليوم.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:0553668948">
                  <Phone className="h-5 w-5 ml-2" />
                  اتصال فوري
                </a>
              </Button>
              <Button size="lg" className="bg-[#25D366] hover:bg-[#20BA5A] text-white" asChild>
                <a href="https://wa.me/966553668948" target="_blank" rel="noopener noreferrer">
                  <div className="w-5 h-5 ml-2 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
                    </svg>
                  </div>
                  واتساب الآن
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links Section - Consistent spacing */}
      <section className="py-12 bg-muted/50">
        <div className="container-custom">
          <InternalLinks currentPage="/" />
        </div>
      </section>
    </Layout>
  );
};

export default Home;