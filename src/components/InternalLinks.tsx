import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

interface InternalLinksProps {
  currentPage: string;
  className?: string;
}

const InternalLinks = ({ currentPage, className = "" }: InternalLinksProps) => {
  const allPages = [
    { name: 'الرئيسية', path: '/', description: 'العودة للصفحة الرئيسية' },
    { name: 'من نحن', path: '/about/', description: 'تعرف على شركتنا وخبرتنا' },
    { name: 'خدماتنا', path: '/services/', description: 'اطلع على جميع خدماتنا' },
    { name: 'خطوات الخدمة', path: '/service-steps/', description: 'كيفية بيع سيارتك بسهولة' },
    { name: 'أسئلة شائعة', path: '/faq/', description: 'إجابات على أهم الأسئلة' },
    { name: 'تواصل معنا', path: '/contact/', description: 'طرق التواصل معنا' },
    { name: 'سياسة الخصوصية', path: '/privacy/', description: 'سياسة حماية البيانات' },
    { name: 'الشروط والأحكام', path: '/terms/', description: 'شروط استخدام الموقع' }
  ];

  // فلترة الصفحات لإزالة الصفحة الحالية
  const otherPages = allPages.filter(page => page.path !== currentPage);

  // اختيار صفحات مقترحة حسب الصفحة الحالية
  const getSuggestedPages = () => {
    switch (currentPage) {
      case '/':
        return otherPages.filter(page => 
          ['/about/', '/services/', '/service-steps/', '/contact/'].includes(page.path)
        ).slice(0, 4);
      
      case '/about/':
        return otherPages.filter(page => 
          ['/services/', '/service-steps/', '/contact/', '/'].includes(page.path)
        ).slice(0, 4);
      
      case '/services/':
        return otherPages.filter(page => 
          ['/service-steps/', '/faq/', '/contact/', '/'].includes(page.path)
        ).slice(0, 4);
      
      case '/service-steps/':
        return otherPages.filter(page => 
          ['/services/', '/faq/', '/contact/', '/'].includes(page.path)
        ).slice(0, 4);
      
      case '/faq/':
        return otherPages.filter(page => 
          ['/services/', '/service-steps/', '/contact/', '/'].includes(page.path)
        ).slice(0, 4);
      
      case '/contact/':
        return otherPages.filter(page => 
          ['/services/', '/service-steps/', '/faq/', '/'].includes(page.path)
        ).slice(0, 4);
      
      case '/privacy/':
        return otherPages.filter(page => 
          ['/terms/', '/contact/', '/about/', '/'].includes(page.path)
        ).slice(0, 4);
      
      case '/terms/':
        return otherPages.filter(page => 
          ['/privacy/', '/contact/', '/about/', '/'].includes(page.path)
        ).slice(0, 4);
      
      default:
        return otherPages.slice(0, 4);
    }
  };

  const suggestedPages = getSuggestedPages();

  return (
    <div className={`bg-muted/30 border border-border/40 rounded-lg p-6 ${className}`}>
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <ExternalLink className="h-5 w-5 ml-2" />
        صفحات أخرى قد تهمك
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {suggestedPages.map((page) => (
          <Link
            key={page.path}
            to={page.path}
            className="group flex items-center justify-between p-3 bg-background hover:bg-accent rounded-md border border-border/40 hover:border-primary/20 transition-all duration-200"
          >
            <div className="flex-1">
              <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                {page.name}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {page.description}
              </div>
            </div>
            <ArrowLeft className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors rotate-180" />
          </Link>
        ))}
      </div>
      
      {/* رابط لعرض جميع الصفحات */}
      <div className="mt-4 pt-4 border-t border-border/40">
        <Link
          to="/"
          className="inline-flex items-center text-sm text-primary hover:text-primary-dark transition-colors"
        >
          <ArrowLeft className="h-4 w-4 ml-1 rotate-180" />
          عرض جميع الصفحات
        </Link>
      </div>
    </div>
  );
};

export default InternalLinks;
