import PageSEO from '@/components/PageSEO';
import Layout from '@/components/Layout/Layout';
import InternalLinks from '@/components/InternalLinks';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, MessageCircle, MapPin, Clock, Mail, Star, CheckCircle, Car } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "رقم الهاتف",
      content: "0553668948",
      link: "tel:0553668948",
      description: "متاح 24 ساعة لخدمتكم"
    },
    {
      icon: MessageCircle,
      title: "واتساب",
      content: "+966553668948",
      url: "https://shiracartashlih.com/contact/",
      link: "https://wa.me/966553668948",
      description: "للتواصل السريع والفوري"
    },
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      url: "https://shiracartashlih.com/",
      link: "mailto:info@shiracartashlih.com",
      description: "للاستفسارات والمراسلات"
    },
    {
      icon: MapPin,
      title: "العنوان",
      content: "الرياض - السعودية",
      link: "#",
      description: "نخدم جميع مناطق المملكة"
    }
  ];

  const workingHours = [
    { day: "السبت - الخميس", hours: "24 ساعة" },
    { day: "الجمعة", hours: "24 ساعة" },
    { day: "العطل الرسمية", hours: "متاح للطوارئ" }
  ];

  const services = [
    "شراء السيارات المصدومة",
    "شراء السيارات المعطلة", 
    "شراء السيارات المستعملة",
    "إسقاط اللوحات الفوري",
    "خدمة سطحة مجانية",
    "تقييم فوري ومجاني"
  ];

  return (
    <Layout>
      <PageSEO
        title="تواصل معنا - شراء سيارات تشليح | خدمة عملاء 24 ساعة"
        description="تواصل معنا لشراء سيارات تشليح على مدار 24 ساعة. نشتري جميع السيارات التالفة والمصدومة والمعطلة بأفضل الأسعار في السعودية."
        keywords="بيع سيارات تشليح, بيع سيارات تشليح الرياض, شراء سيارات مصدومة, بيع سيارة مصدومة, نشتري سيارات تشليح الرياض, شراء سيارات مصدومة الرياض, ارقام شراء سيارات سكراب, أسعار بيع السيارات تشليح, شراء سيارات تشليح, تشليح شراء سيارات, رقم شراء سيارات تشليح, طريقة بيع سيارة تشليح, بيع سيارات معطلة, بيع السيارات المصدومة, سيارات تشليح للبيع, سيارات للبيع تشليح, سيارات للبيع مصدومه, سكراب شراء سيارات, بيع السيارة تشليح والاستمارة منتهية, شراء سيارات تشليح الرياض"
        url="https://shiracartashlih.com/contact/"
      />
      
      {/* Hero Section - Redesigned */}
      <section className="bg-primary text-primary-foreground section-spacing">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Phone className="h-6 w-6" />
              <span className="font-semibold">تواصل معنا</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3">خدمتك تهمنا 24 ساعة</h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 opacity-90 leading-relaxed">نرد فورًا عبر الهاتف أو الواتساب، ونبدأ الإجراءات مباشرة.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:0553668948"><Phone className="h-5 w-5 ml-2" />اتصال مباشر</a>
              </Button>
              <Button size="lg" className="bg-[#25D366] hover:bg-[#20BA5A] text-white" asChild>
                <a href="https://wa.me/966553668948" target="_blank" rel="noopener noreferrer">واتساب الآن</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">معلومات التواصل</h2>
            <p className="text-lg text-muted-foreground">
              تواصل معنا بالطريقة التي تناسبك
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="hover-lift">
                  <CardContent className="p-6 text-center">
                    <div className="bg-primary text-primary-foreground p-4 rounded-xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                    <a 
                      href={info.link}
                      className="text-primary font-medium text-lg hover:text-primary-dark transition-colors block mb-2"
                      {...(info.link.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {info.content}
                    </a>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Quick Action Buttons */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" asChild>
                <a href="tel:0553668948">
                  <Phone className="h-5 w-5 ml-2" />
                  اتصل بنا الآن
                </a>
              </Button>
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white" asChild>
                <a href="https://wa.me/966553668948" target="_blank" rel="noopener noreferrer">
                  <div className="w-5 h-5 ml-2 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
                    </svg>
                  </div>
                  واتساب
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Working Hours & Services - Redesigned */}
      <section className="bg-muted/50 section-spacing">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Working Hours */}
            <Card>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="bg-primary text-primary-foreground p-4 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Clock className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold">ساعات العمل</h3>
                </div>
                <div className="space-y-4">
                  {workingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-border/50 last:border-b-0">
                      <span className="font-medium">{schedule.day}</span>
                      <span className="text-primary font-semibold">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <div className="bg-success/10 text-success p-3 rounded-lg">
                    <CheckCircle className="h-5 w-5 inline ml-2" />
                    <span className="font-medium">خدمة 24 ساعة - 7 أيام في الأسبوع</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Services */}
            <Card>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="bg-primary text-primary-foreground p-4 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Car className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold">خدماتنا</h3>
                </div>
                <div className="space-y-3">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center space-x-3 space-x-reverse">
                      <CheckCircle className="h-5 w-5 text-success shrink-0" />
                      <span className="text-muted-foreground">{service}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Button variant="outline" asChild>
                    <a href="/services/">تفاصيل جميع خدماتنا</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Redesigned */}
      <section className="bg-muted/50 section-spacing">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">لماذا تختارنا؟</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "سرعة الاستجابة", desc: "نرد على جميع الاستفسارات فوراً", icon: Clock },
              { title: "خبرة 20+ سنة", desc: "ثقة وخبرة طويلة في السوق", icon: Star },
              { title: "أفضل الأسعار", desc: "نقدم أعلى الأسعار في السوق", icon: CheckCircle }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="text-center hover-lift">
                  <CardContent className="p-6">
                    <div className="bg-primary text-primary-foreground p-4 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA - Redesigned */}
      <section className="bg-primary text-primary-foreground section-spacing">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">جاهز لبيع سيارتك؟</h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">تواصل معنا الآن واحصل على تقييم مجاني وعرض سعر فوري.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:0553668948">
                  <Phone className="h-5 w-5 ml-2" />
                  اتصال فوري
                </a>
              </Button>
              <Button size="lg" className="bg-[#25D366] hover:bg-[#20BA5A] text-white" asChild>
                <a href="https://wa.me/+966553668948" target="_blank" rel="noopener noreferrer">
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
          <InternalLinks currentPage="/contact/" />
        </div>
      </section>
    </Layout>
  );
};

export default Contact;