import PageSEO from '@/components/PageSEO';
import Layout from '@/components/Layout/Layout';
import InternalLinks from '@/components/InternalLinks';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, MessageCircle, CheckCircle, Star, Trophy, Users, Car, Clock, Shield, Award } from 'lucide-react';

// Images are now imported from assets
import heroImage from '@/assets/bmw-crashed-riyadh.jpg';

const About = () => {
  const achievements = [
    { number: "20+", label: "سنة خبرة", icon: Trophy },
    { number: "20,000+", label: "عميل راضي", icon: Users },
    { number: "1,658+", label: "مركبة تم إسقاطها", icon: Car },
    { number: "15,000", label: "عميل سعيد", icon: Star }
  ];

  const features = [
    { title: "إسقاط اللوحات الفوري", desc: "نقوم بإسقاط لوحات السيارة فور الشراء", icon: Shield },
    { title: "خدمة سطحة", desc: "نوفر خدمة سطحة لنقل السيارة من مكانها", icon: Car },
    { title: "جميع الماركات", desc: "نشتري جميع أنواع وماركات السيارات", icon: Award },
    { title: "خدمة 24 ساعة", desc: "متاحون على مدار الساعة لخدمتكم", icon: Clock }
  ];

  return (
    <Layout>
      <PageSEO
        title="من نحن - شراء سيارات تشليح | خبرة أكثر من 20 سنة في السعودية"
        description="مؤسسة سعودية بخبرة أكثر من 20 سنة متخصصة في شراء سيارات التشليح، التالفة والمصدومة مع إسقاط اللوحات بشكل فوري وخدمة عملاء 24 ساعة."
        keywords="بيع سيارات تشليح, بيع سيارات تشليح الرياض, شراء سيارات مصدومة, بيع سيارة مصدومة, نشتري سيارات تشليح الرياض, شراء سيارات مصدومة الرياض, ارقام شراء سيارات سكراب, أسعار بيع السيارات تشليح, شراء سيارات تشليح, تشليح شراء سيارات, رقم شراء سيارات تشليح, طريقة بيع سيارة تشليح, بيع سيارات معطلة, بيع السيارات المصدومة, سيارات تشليح للبيع, سيارات للبيع تشليح, سيارات للبيع مصدومه, سكراب شراء سيارات, بيع السيارة تشليح والاستمارة منتهية, شراء سيارات تشليح الرياض"
        url="https://shiracartashlih.com/about/"
      />
      
      {/* Hero Section - Redesigned */}
      <section className="relative text-white overflow-hidden pt-20 pb-24 md:pt-24 md:pb-28">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} aria-hidden="true"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[hsl(var(--primary)_/_0.75)] to-black/70"></div>
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="h-8 w-8 text-secondary" />
              <span className="text-secondary font-semibold">من نحن</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">خبرة تقودك لبيع أسرع وأضمن</h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              فريق محترف، إجراءات نظامية، ونتيجة فورية — نشتري سيارتك أينما كنت.
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

      {/* About Content */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">شراء سيارات تشليح</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  مؤسسة <strong className="text-primary">شراء سيارات تشليح</strong> هي مؤسسة سعودية رائدة ومتخصصة في مجال شراء جميع أنواع السيارات التالفة والمصدومة والمستعملة في المملكة العربية السعودية. تأسست الشركة بخبرة تزيد عن <strong className="text-primary">20 سنة</strong> في هذا المجال المتخصص.
                </p>
                <p>
                  نحن نفخر بتقديم خدمات متميزة لعملائنا الكرام، حيث نشتري جميع أنواع السيارات بغض النظر عن حالتها أو ماركتها، ونقدم <strong className="text-secondary">أفضل الأسعار</strong> في السوق مع ضمان الشفافية والمصداقية في جميع تعاملاتنا.
                </p>
                <p>
                  ما يميزنا هو سرعة الاستجابة وجودة الخدمة، فنحن نقدم خدمة <strong className="text-success">إسقاط اللوحات الفوري</strong> ونوفر خدمة عملاء على مدار الساعة لضمان راحة عملائنا. كما نوفر خدمة السطحة لنقل السيارات من مكانها دون عناء على العميل.
                </p>
              </div>
            </div>

            <div className="text-center">
              <Button size="lg" asChild>
                <a href="tel:0534425343">
                  <Phone className="h-5 w-5 ml-2" />
                  اتصل بنا +966534425343
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements - Redesigned */}
      <section className="bg-muted/50 section-spacing">
        <div className="container-custom">
          <div className="text-center mb-8">
            <span className="text-secondary font-semibold">أرقام تثبت مصداقيتنا</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">إنجازاتنا وخبرتنا</h2>
            <p className="text-muted-foreground mt-3">أرقام تعكس ثقة عملائنا ونجاحنا في تقديم أفضل الخدمات</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
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

      {/* Features - Redesigned */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="text-secondary font-semibold">قيمنا وخدماتنا</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">ما الذي يميزنا؟</h2>
            <p className="text-muted-foreground mt-3">نقدم مجموعة شاملة من الخدمات المتخصصة لراحة عملائنا</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4 space-x-reverse">
                      <div className="bg-primary text-primary-foreground p-3 rounded-lg shrink-0">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision - Redesigned */}
      <section className="bg-muted/50 section-spacing">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="hover-lift">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="bg-primary text-primary-foreground p-4 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Trophy className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold">رؤيتنا</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-center">
                  أن نكون الشركة الرائدة في مجال شراء السيارات التالفة والمصدومة في المملكة العربية السعودية، وأن نحافظ على مكانتنا كأفضل خيار للعملاء الباحثين عن الجودة والمصداقية.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="bg-primary text-primary-foreground p-4 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold">مهمتنا</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-center">
                  تقديم خدمات متميزة في شراء السيارات بأفضل الأسعار وأسرع الطرق، مع ضمان الشفافية والمصداقية في جميع التعاملات، وتوفير تجربة عملاء استثنائية.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA - Redesigned */}
      <section className="bg-primary text-primary-foreground section-spacing">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">جاهز تعرف أكثر؟</h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">كلمنا الآن لنساعدك في بيع سيارتك بأسرع وقت وبأفضل سعر.</p>
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
          <InternalLinks currentPage="/about/" />
        </div>
      </section>
    </Layout>
  );
};

export default About;