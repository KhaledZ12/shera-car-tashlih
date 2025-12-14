import PageSEO from '@/components/PageSEO';
import Layout from '@/components/Layout/Layout';
import InternalLinks from '@/components/InternalLinks';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, MessageCircle, Car, Shield, Clock, Truck, CheckCircle, Star, Wrench, Settings } from 'lucide-react';

// Images now served from assets
import servicesHeroImage from '@/assets/broken-cars-purchase-services.jpg';
import pileCrashImage from '@/assets/cars3.jpg';
import lotCrowdImage from '@/assets/cars7.jpg';
import bmwWhiteDamageImage from '@/assets/bmw-crashed-riyadh.jpg';

const Services = () => {
  const services = [
    {
      title: "شراء السيارات المصدومة",
      description: "نشتري جميع السيارات المصدومة من حوادث مرورية أو كوارث طبيعية بأفضل الأسعار مع تقييم عادل وشفاف.",
      icon: Car,
      features: ["تقييم فوري", "أفضل الأسعار", "جميع الماركات", "أي درجة تضرر"]
    },
    {
      title: "شراء السيارات المتعطلة",
      description: "نشتري السيارات المتعطلة والتي تحتاج إصلاحات مكلفة، مع خدمة سطحة مجانية لنقل السيارة.",
      icon: Wrench,
      features: ["خدمة سطحة مجانية", "لا تحتاج للإصلاح", "نقل من مكان السيارة", "دفع فوري"]
    },
    {
      title: "شراء السيارات سكراب",
      description: "نشتري السيارات القديمة والمهترئة التي تحتاج لتدوير أو استخدام قطع الغيار منها.",
      icon: Settings,
      features: ["سيارات قديمة", "أي حالة", "تدوير صديق للبيئة", "قطع غيار أصلية"]
    },
    {
      title: "إسقاط اللوحات",
      description: "نقوم بإجراءات إسقاط لوحات السيارة فور الشراء مع توفير جميع الأوراق المطلوبة رسمياً.",
      icon: Shield,
      features: ["إجراءات رسمية", "سرعة في الإنجاز", "أوراق كاملة", "خدمة فورية"]
    },
    {
      title: "شراء جميع الماركات",
      description: "نتعامل مع جميع ماركات السيارات المحلية والمستوردة مع خبرة واختصاص في تقييم كل نوع.",
      icon: Car,
      features: ["تويوتا وهيونداي", "مرسيدس وBMW", "نيسان وفورد", "جميع الماركات الأخرى"]
    },
    {
      title: "شراء السيارات المستعملة",
      description: "نشتري السيارات المستعملة في حالة جيدة لعملائنا الذين يريدون البيع السريع بأفضل سعر.",
      icon: Car,
      features: ["حالة جيدة", "بيع سريع", "تقييم عادل", "إجراءات بسيطة"]
    }
  ];

  const coverageAreas = [
    "الرياض", "جدة", "الدمام", "مكة المكرمة", "المدينة المنورة", 
    "الطائف", "تبوك", "بريدة", "الخرج", "الأحساء", "جازان", "نجران",
    "الباحة", "ينبع", "الخبر", "القطيف"
  ];

  return (
    <Layout>
      <PageSEO
        title="خدماتنا - شراء سيارات تشليح | شراء سيارات مصدومة ومتعطلة وسكراب"
        description="نقدم خدمات شاملة لشراء السيارات المصدومة والمتعطلة وسكراب مع إسقاط اللوحات الفوري وخدمة سطحة مجانية في جميع مدن السعودية."
        keywords="بيع سيارات تشليح, بيع سيارات تشليح الرياض, شراء سيارات مصدومة, بيع سيارة مصدومة, نشتري سيارات تشليح الرياض, شراء سيارات مصدومة الرياض, ارقام شراء سيارات سكراب, أسعار بيع السيارات تشليح, شراء سيارات تشليح, تشليح شراء سيارات, رقم شراء سيارات تشليح, طريقة بيع سيارة تشليح, بيع سيارات معطلة, بيع السيارات المصدومة, سيارات تشليح للبيع, سيارات للبيع تشليح, سيارات للبيع مصدومه, سكراب شراء سيارات, بيع السيارة تشليح والاستمارة منتهية, شراء سيارات تشليح الرياض"
        url="https://shiracartashlih.com/services/"
      />
      
      {/* Hero Section - Redesigned */}
      <section className="relative text-white overflow-hidden pt-20 pb-24 md:pt-24 md:pb-28">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${servicesHeroImage})` }} aria-hidden="true"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[hsl(var(--primary)_/_0.75)] to-black/70"></div>
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Settings className="h-8 w-8 text-secondary" />
              <span className="text-secondary font-semibold">خدماتنا</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">حلول بيع متكاملة لكل أنواع السيارات</h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              تقييم فوري، سطحة مجانية، وإسقاط لوحات رسمي — نخلصك من كل التعقيدات بخطوات بسيطة.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" variant="whatsapp" asChild className="w-full sm:w-auto">
                <a href="https://wa.me/966534425343" target="_blank" rel="noopener noreferrer">واتساب الآن</a>
              </Button>
              <Button size="lg" variant="secondary" asChild className="w-full sm:w-auto">
                <a href="tel:0534425343"><Phone className="h-5 w-5 ml-2" />اتصال مباشر</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - Redesigned */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="text-secondary font-semibold">خدماتنا المتخصصة</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">اختَر الخدمة التي تناسب حالتك</h2>
            <p className="text-muted-foreground mt-3">من التشليح والسكراب إلى المستعمل — كل خدمة لها فريقها وخطواتها السريعة.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8">
            <img 
              src={pileCrashImage} 
              alt="حادث تصادم سيارات للبيع بالرياض - خدمات شراء السيارات المصدومة والتالفة"
              className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-xl shadow-lg hover-lift"
              loading="lazy"
            />
            <img 
              src={lotCrowdImage} 
              alt="سيارة مصدومة بيضاء للبيع - شراء سيارات تشليح وسكراب بأفضل الأسعار"
              className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-xl shadow-lg hover-lift"
              loading="lazy"
            />
            <img 
              src={bmwWhiteDamageImage} 
              alt="بي ام دبليو مصدومة في الرياض - خدمة شراء السيارات الفاخرة التالفة"
              className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-xl shadow-lg hover-lift"
              loading="lazy"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover-lift h-full">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="text-center mb-4">
                      <div className="bg-primary text-primary-foreground p-3 rounded-xl w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed text-sm sm:text-base flex-grow">{service.description}</p>
                    </div>
                    
                    <div className="space-y-2 mt-auto">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 space-x-reverse">
                          <CheckCircle className="h-4 w-4 text-success shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section - Redesigned */}
      <section className="bg-muted/50 section-spacing">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="text-secondary font-semibold">خطواتنا</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">عملية واضحة وسريعة</h2>
            <p className="text-muted-foreground mt-3">من أول مكالمة وحتى إسقاط اللوحات — كل شيء بخطوات محددة وبسيطة.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "اتصل بنا", desc: "تواصل معنا عبر الهاتف أو الواتساب", icon: Phone },
              { step: "2", title: "المعاينة", desc: "نقوم بمعاينة السيارة وتقييمها", icon: Car },
              { step: "3", title: "العرض", desc: "نقدم أفضل سعر فوري ومعقول", icon: CheckCircle },
              { step: "4", title: "الشراء", desc: "إتمام الصفقة وإسقاط اللوحات", icon: Shield }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary text-primary-foreground p-5 rounded-xl w-20 h-20 mx-auto mb-3 flex items-center justify-center relative">
                  <process.icon className="h-8 w-8" />
                  <div className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                    {process.step}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-1">{process.title}</h3>
                <p className="text-muted-foreground text-sm">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Section - Redesigned */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="text-secondary font-semibold">نصل إليك أينما كنت</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">مناطق تغطية خدماتنا</h2>
            <p className="text-muted-foreground mt-3">نغطي جميع المدن الرئيسية والمراكز القريبة بخدمة سريعة وموثوقة.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {coverageAreas.map((area, index) => (
              <div key={index} className="bg-card border rounded-xl p-4 text-center font-medium hover-lift">
                <div className="text-foreground">{area}</div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-lg text-muted-foreground mb-4">وجميع المناطق الأخرى في المملكة</p>
            <div className="bg-gradient-card border rounded-xl p-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-3 space-x-reverse text-success">
                <Truck className="h-6 w-6" />
                <span className="font-semibold">خدمة سطحة متوفرة لجميع المناطق</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Redesigned */}
      <section className="bg-primary text-primary-foreground section-spacing">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">جاهز نقيّم سيارتك الآن؟</h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">اتصل بنا أو راسلنا على واتساب لنبدأ حالاً — السعر العادل والإجراءات علينا.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:0534425343">
                  <Phone className="h-5 w-5 ml-2" />
                  اتصال فوري
                </a>
              </Button>
              <Button size="lg" className="bg-[#25D366] hover:bg-[#20BA5A] text-white" asChild>
                <a href="https://wa.me/966534425343" target="_blank" rel="noopener noreferrer">
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

      {/* Internal Links Section - Consistent */}
      <section className="py-12 bg-muted/50">
        <div className="container-custom">
          <InternalLinks currentPage="/services/" />
        </div>
      </section>
    </Layout>
  );
};

export default Services;