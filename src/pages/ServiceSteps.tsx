import PageSEO from '@/components/PageSEO';
import Layout from '@/components/Layout/Layout';
import InternalLinks from '@/components/InternalLinks';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, MessageCircle, CheckCircle, Clock, Car, FileText, CreditCard, Truck } from 'lucide-react';

// Images now served from assets
import serviceStepsHeroImage from '@/assets/download.jpg';
import lotCrowdImage from '@/assets/cars7.jpg';

const ServiceSteps = () => {
  const steps = [
    {
      number: 1,
      title: "اتصل بنا أو راسلنا",
      description: "تواصل معنا عبر الهاتف أو الواتساب وأخبرنا عن سيارتك وحالتها",
      icon: Phone,
      details: [
        "رقم الهاتف: 0534425343",
        "متاح 24 ساعة",
        "رد فوري على الاستفسارات",
        "تحديد موعد المعاينة"
      ]
    },
    {
      number: 2,
      title: "معاينة السيارة",
      description: "فريقنا المختص يأتي إليك لمعاينة السيارة وتقييم حالتها",
      icon: Car,
      details: [
        "معاينة مجانية في مكانك",
        "تقييم شامل للسيارة",
        "فحص المحرك والهيكل",
        "تحديد السعر العادل"
      ]
    },
    {
      number: 3,
      title: "عرض السعر والاتفاق",
      description: "نقدم لك أفضل سعر للسيارة ونتفق على تفاصيل البيع",
      icon: CreditCard,
      details: [
        "أسعار تنافسية وعادلة",
        "شفافية كاملة في التقييم",
        "إمكانية التفاوض",
        "اتفاقية واضحة ومكتوبة"
      ]
    },
    {
      number: 4,
      title: "إتمام الصفقة وإسقاط اللوحات",
      description: "دفع المبلغ فوراً وإسقاط لوحات السيارة وترحيلها بالسطحة",
      icon: Truck,
      details: [
        "دفع فوري نقداً أو تحويل",
        "إسقاط اللوحات فورياً",
        "خدمة سطحة مجانية",
        "إنهاء جميع الإجراءات"
      ]
    }
  ];

  const whyChooseUs = [
    { title: "سرعة في الخدمة", desc: "إنجاز كامل خلال 24 ساعة" },
    { title: "أسعار تنافسية", desc: "أفضل الأسعار في السوق" },
    { title: "شفافية كاملة", desc: "وضوح في جميع التعاملات" },
    { title: "خدمة متكاملة", desc: "من المعاينة إلى إسقاط اللوحات" },
    { title: "فريق محترف", desc: "خبرة أكثر من 20 سنة" },
    { title: "تغطية شاملة", desc: "نخدم جميع مناطق السعودية" }
  ];

  return (
    <Layout>
      <PageSEO
        title="خطوات الخدمة - شراء سيارات تشليح | كيفية بيع سيارتك بسهولة"
        description="تعرف على خطوات بيع سيارتك التالفة أو المصدومة بسهولة: اتصل بنا، معاينة مجانية، عرض السعر، إتمام الصفقة وإسقاط اللوحات الفوري."
        keywords="بيع سيارات تشليح, بيع سيارات تشليح الرياض, شراء سيارات مصدومة, بيع سيارة مصدومة, نشتري سيارات تشليح الرياض, شراء سيارات مصدومة الرياض, ارقام شراء سيارات سكراب, أسعار بيع السيارات تشليح, شراء سيارات تشليح, تشليح شراء سيارات, رقم شراء سيارات تشليح, طريقة بيع سيارة تشليح, بيع سيارات معطلة, بيع السيارات المصدومة, سيارات تشليح للبيع, سيارات للبيع تشليح, سيارات للبيع مصدومه, سكراب شراء سيارات, بيع السيارة تشليح والاستمارة منتهية, شراء سيارات تشليح الرياض"
        url="https://shiracartashlih.com/service-steps/"
      />
      
      {/* Hero Section - Redesigned */}
      <section className="relative text-white overflow-hidden pt-20 pb-24 md:pt-24 md:pb-28">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${serviceStepsHeroImage})` }} aria-hidden="true"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[hsl(var(--primary)_/_0.75)] to-black/70"></div>
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FileText className="h-8 w-8 text-secondary" />
              <span className="text-secondary font-semibold">خطوات الخدمة</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">كيف نشتري سيارتك بخطوات بسيطة</h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">من الاتصال حتى إسقاط اللوحات — كل شيء واضح وسريع.</p>
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

      {/* Steps Section - Redesigned */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="text-secondary font-semibold">الخطوات</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">عملية سهلة في 4 خطوات</h2>
            <p className="text-muted-foreground mt-3">بأقل مجهود منك — نحن نتولى كل التفاصيل.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4 space-x-reverse">
                      <div className="bg-primary text-primary-foreground p-4 rounded-xl flex items-center justify-center shrink-0">
                        <Icon className="h-8 w-8" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-3">
                          <span className="bg-secondary text-white text-sm font-bold px-3 py-1 rounded-full ml-3">
                            خطوة {step.number}
                          </span>
                          <h3 className="text-xl font-semibold">{step.title}</h3>
                        </div>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {step.description}
                        </p>
                        <div className="space-y-2">
                          {step.details.map((detail, idx) => (
                            <div key={idx} className="flex items-center space-x-2 space-x-reverse">
                              <CheckCircle className="h-4 w-4 text-success shrink-0" />
                              <span className="text-sm text-muted-foreground">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mb-8">
            <img 
              src={lotCrowdImage} 
              alt="فريق عمل شراء سيارات تشليح أثناء معاينة وشراء السيارات التالفة والمصدومة"
              className="w-full max-w-2xl mx-auto rounded-xl shadow-lg hover-lift"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us - Redesigned */}
      <section className="bg-muted/50 section-spacing">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">لماذا تختارنا؟</h2>
            <p className="text-lg text-muted-foreground">
              مميزات تجعلنا الخيار الأفضل لبيع سيارتك
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="text-center hover-lift stagger-animation">
                <CardContent className="p-6">
                  <div className="bg-primary text-primary-foreground p-3 rounded-lg w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Redesigned */}
      <section className="bg-primary text-primary-foreground section-spacing">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">هل أنت مستعد لبيع سيارتك؟</h2>
            <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed">ابدأ الآن واحصل على أفضل سعر لسيارتك — الإجراءات علينا بالكامل.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:0534425343"><Phone className="h-5 w-5 ml-2" />اتصال فوري</a>
              </Button>
              <Button size="lg" className="bg-[#25D366] hover:bg-[#20BA5A] text-white" asChild>
                <a href="https://wa.me/966534425343" target="_blank" rel="noopener noreferrer">واتساب الآن</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links Section - Consistent */}
      <section className="py-12 bg-muted/50">
        <div className="container-custom">
          <InternalLinks currentPage="/service-steps/" />
        </div>
      </section>
    </Layout>
  );
};

export default ServiceSteps;