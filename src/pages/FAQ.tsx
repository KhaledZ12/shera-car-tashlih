import PageSEO from '@/components/PageSEO';
import Layout from '@/components/Layout/Layout';
import InternalLinks from '@/components/InternalLinks';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, Phone, MessageCircle, HelpCircle, Star, Clock, Car, Shield, CreditCard } from 'lucide-react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Images now imported from assets
import faqHeroImage from '@/assets/download3.jpg';

const FAQ = () => {
  const faqCategories = [
    {
      title: "أسئلة عامة",
      icon: HelpCircle,
      questions: [
        {
          question: "ما هي الخدمات التي تقدمونها؟",
          answer: "نقدم خدمات شاملة لشراء جميع أنواع السيارات: المصدومة، المتعطلة، المستعملة، وسيارات السكراب. كما نوفر خدمة إسقاط اللوحات الفوري وخدمة سطحة مجانية لنقل السيارة."
        },
        {
          question: "هل تشترون جميع أنواع السيارات؟",
          answer: "نعم، نشتري جميع ماركات وأنواع السيارات بغض النظر عن حالتها: تويوتا، هيونداي، نيسان، فورد، مرسيدس، BMW، كيا، شيفروليه، وجميع الماركات الأخرى."
        },
        {
          question: "ما هي المناطق التي تخدمونها؟",
          answer: "نخدم جميع مناطق المملكة العربية السعودية مع التركيز على الرياض، جدة، الدمام، مكة، المدينة، الطائف، وجميع المدن والمحافظات."
        },
        {
          question: "كم تستغرق عملية الشراء؟",
          answer: "عادة ما تتم العملية خلال 24 ساعة من الاتصال. نأتي للمعاينة، نقدم السعر، وإذا تم الاتفاق نتم الصفقة وإسقاط اللوحات في نفس اليوم."
        }
      ]
    },
    {
      title: "التقييم والأسعار",
      icon: CreditCard,
      questions: [
        {
          question: "كيف تحددون سعر السيارة؟",
          answer: "نعتمد على معاينة شاملة تشمل: حالة المحرك، الهيكل، نوع الأضرار، عمر السيارة، الماركة والموديل، وأسعار السوق الحالية. نضمن تقييماً عادلاً وشفافاً."
        },
        {
          question: "هل المعاينة مجانية؟",
          answer: "نعم، المعاينة مجانية تماماً. فريقنا يأتي إليك في أي مكان داخل المملكة لمعاينة السيارة وتقديم عرض السعر دون أي رسوم."
        },
        {
          question: "هل يمكنني التفاوض على السعر؟",
          answer: "بالطبع، نحن منفتحون للنقاش والتفاوض. هدفنا هو الوصول لسعر عادل يرضي الطرفين مع الحفاظ على جودة الخدمة."
        },
        {
          question: "متى أحصل على المبلغ؟",
          answer: "الدفع فوري عند إتمام الاتفاق. نوفر الدفع نقداً أو عن طريق التحويل البنكي حسب تفضيلك."
        }
      ]
    },
    {
      title: "الإجراءات القانونية",
      icon: Shield,
      questions: [
        {
          question: "كيف تتم عملية إسقاط اللوحات؟",
          answer: "نتولى جميع إجراءات إسقاط اللوحات بشكل رسمي وقانوني. نحضر الأوراق المطلوبة ونتم الإجراءات في المرور فوراً بعد الشراء."
        },
        {
          question: "ما هي الأوراق المطلوبة؟",
          answer: "تحتاج إلى: الاستمارة الأصلية، رخصة القيادة، الهوية الوطنية، وأي أوراق أخرى متعلقة بالسيارة. نساعدك في إعداد جميع الأوراق."
        },
        {
          question: "هل الإجراءات قانونية ومضمونة؟",
          answer: "نعم، جميع إجراءاتنا قانونية ومعتمدة. نعمل وفقاً لأنظمة المرور السعودية ونضمن براءة ذمتك من السيارة بعد البيع."
        },
        {
          question: "ماذا لو كانت السيارة مرهونة؟",
          answer: "نتعامل مع السيارات المرهونة أيضاً. نساعدك في إجراءات فك الرهن وإتمام عملية البيع بشكل قانوني وآمن."
        }
      ]
    },
    {
      title: "الخدمات الإضافية",
      icon: Car,
      questions: [
        {
          question: "هل توفرون خدمة سطحة؟",
          answer: "نعم، نوفر خدمة سطحة مجانية لنقل السيارة من أي مكان داخل المملكة. لا تحتاج للقلق بشأن نقل السيارة المتعطلة."
        },
        {
          question: "ماذا لو كانت السيارة لا تعمل نهائياً؟",
          answer: "لا مشكلة، نشتري السيارات في أي حالة حتى لو كانت لا تعمل أو محطمة بالكامل. السطحة ستأتي لنقلها."
        },
        {
          question: "هل تقدمون خدمات أخرى؟",
          answer: "بالإضافة لشراء السيارات، نقدم استشارات مجانية حول قيمة السيارة، وخدمات إسقاط اللوحات، وبيع قطع الغيار المستعملة."
        },
        {
          question: "كيف يمكنني التواصل معكم؟",
          answer: "يمكنك التواصل معنا عبر الهاتف +966553668948 أو الواتساب. نحن متاحون 24 ساعة لخدمتك والرد على جميع استفساراتك."
        }
      ]
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqCategories.flatMap(category => 
      category.questions.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    )
  };

  return (
    <Layout>
      <PageSEO
        title="الأسئلة الشائعة - شراء سيارات تشليح | أجوبة لجميع استفساراتك"
        description="اكتشف إجابات لجميع الأسئلة الشائعة حول شراء السيارات التالفة والمصدومة، إسقاط اللوحات، التقييم، والإجراءات القانونية."
        keywords="بيع سيارات تشليح, بيع سيارات تشليح الرياض, شراء سيارات مصدومة, بيع سيارة مصدومة, نشتري سيارات تشليح الرياض, شراء سيارات مصدومة الرياض, ارقام شراء سيارات سكراب, أسعار بيع السيارات تشليح, شراء سيارات تشليح, تشليح شراء سيارات, رقم شراء سيارات تشليح, طريقة بيع سيارة تشليح, بيع سيارات معطلة, بيع السيارات المصدومة, سيارات تشليح للبيع, سيارات للبيع تشليح, سيارات للبيع مصدومه, سكراب شراء سيارات, بيع السيارة تشليح والاستمارة منتهية, شراء سيارات تشليح الرياض"
        url="https://shiracartashlih.com/faq/"
      />
      
      {/* Hero Section - Redesigned */}
      <section className="relative text-white overflow-hidden pt-20 pb-24 md:pt-24 md:pb-28">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${faqHeroImage})` }} aria-hidden="true"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[hsl(var(--primary)_/_0.75)] to-black/70"></div>
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <HelpCircle className="h-8 w-8 text-secondary" />
              <span className="text-secondary font-semibold">الأسئلة الشائعة</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">إجابات سريعة وواضحة لكل استفساراتك</h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">كل ما تحتاج معرفته عن الشراء، التقييم، والإجراءات النظامية.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" variant="whatsapp" asChild className="w-full sm:w-auto">
                <a href="https://wa.me/966553668948" target="_blank" rel="noopener noreferrer">واتساب الآن</a>
              </Button>
              <Button size="lg" variant="secondary" asChild className="w-full sm:w-auto">
                <a href="tel:0553668948"><Phone className="h-5 w-5 ml-2" />اتصال مباشر</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories - Redesigned */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="text-secondary font-semibold">الأسئلة حسب الفئة</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">أجوبة لجميع أسئلتك</h2>
            <p className="text-muted-foreground mt-3">ستجد هنا إجابات شاملة لأكثر الأسئلة تكراراً.</p>
          </div>

          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <div key={categoryIndex} className="stagger-animation">
                  <Card className="hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-6">
                        <div className="bg-primary text-primary-foreground p-3 rounded-lg ml-4">
                          <Icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-2xl font-bold">{category.title}</h3>
                      </div>
                      
                      <Accordion type="single" collapsible className="w-full">
                        {category.questions.map((faq, index) => (
                          <AccordionItem 
                            key={index} 
                            value={`${categoryIndex}-${index}`}
                            className="border-b border-border/50"
                          >
                            <AccordionTrigger className="text-right hover:no-underline py-4">
                              <span className="text-lg font-medium text-right">
                                {faq.question}
                              </span>
                            </AccordionTrigger>
                            <AccordionContent className="text-right pb-4">
                              <p className="text-muted-foreground leading-relaxed">
                                {faq.answer}
                              </p>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Stats - Redesigned */}
      <section className="bg-muted/50 section-spacing">
        <div className="container-custom">
          <div className="text-center mb-8">
            <span className="text-secondary font-semibold">حقائق سريعة</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">إحصائيات سريعة</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "20+", label: "سنة خبرة", icon: Clock },
              { number: "20,000+", label: "عميل راضي", icon: Star },
              { number: "1,658+", label: "مركبة تم إسقاطها", icon: Car },
              { number: "24/7", label: "خدمة عملاء", icon: Phone }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="text-center hover-lift">
                  <CardContent className="p-6">
                    <div className="mx-auto mb-3 flex items-center justify-center w-12 h-12 rounded-lg bg-primary text-primary-foreground">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="text-2xl font-extrabold text-foreground mb-1">{stat.number}</div>
                    <div className="text-muted-foreground font-medium text-sm">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA - Redesigned */}
      <section className="bg-primary text-primary-foreground section-spacing">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">لم تجد إجابة لسؤالك؟</h2>
            <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed">تواصل معنا مباشرة وسيقوم فريقنا المختص بالإجابة على جميع استفساراتك.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:0553668948"><Phone className="h-5 w-5 ml-2" />اتصل الآن</a>
              </Button>
              <Button size="lg" className="bg-[#25D366] hover:bg-[#20BA5A] text-white" asChild>
                <a href="https://wa.me/966553668948" target="_blank" rel="noopener noreferrer">واتساب الآن</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links Section - Consistent */}
      <section className="py-12 bg-muted/50">
        <div className="container-custom">
          <InternalLinks currentPage="/faq/" />
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;