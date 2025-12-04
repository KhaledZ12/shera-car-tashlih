import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  path: string;
}

const Breadcrumbs = () => {
  const location = useLocation();
  // Normalize path for label lookup: remove trailing slash except for root
  const normalizedPath = location.pathname !== '/' && location.pathname.endsWith('/')
    ? location.pathname.slice(0, -1)
    : location.pathname;
  
  // تعريف أسماء الصفحات
  const pageNames: Record<string, string> = {
    '/': 'الرئيسية',
    '/about': 'من نحن',
    '/services': 'خدماتنا',
    '/service-steps': 'خطوات الخدمة',
    '/faq': 'أسئلة شائعة',
    '/contact': 'تواصل معنا',
    '/privacy': 'سياسة الخصوصية',
    '/terms': 'الشروط والأحكام'
  };

  // إنشاء مسار التنقل
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = location.pathname.split('/').filter(segment => segment);
    const breadcrumbs: BreadcrumbItem[] = [
      { name: 'الرئيسية', path: '/' }
    ];

    if (location.pathname !== '/') {
      const currentPageName = pageNames[normalizedPath] || 'صفحة غير معروفة';
      breadcrumbs.push({
        name: currentPageName,
        path: location.pathname
      });
    }

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  // إذا كنا في الصفحة الرئيسية، لا نعرض breadcrumbs
  if (location.pathname === '/') {
    return null;
  }

  return (
    <nav className="bg-muted/30 border-b border-border/40" aria-label="مسار التنقل">
      <div className="container-custom">
        <div className="flex items-center py-3 text-sm">
          <ol className="flex items-center space-x-2 space-x-reverse" itemScope itemType="https://schema.org/BreadcrumbList">
            {breadcrumbs.map((item, index) => (
              <li key={item.path} className="flex items-center" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                {index > 0 && (
                  <ChevronRight className="h-4 w-4 text-muted-foreground mx-2 rotate-180" />
                )}
                
                {index === breadcrumbs.length - 1 ? (
                  // الصفحة الحالية - غير قابلة للنقر
                  <span 
                    className="text-foreground font-medium flex items-center"
                    itemProp="name"
                    aria-current="page"
                  >
                    {index === 0 && <Home className="h-4 w-4 ml-1" />}
                    {item.name}
                  </span>
                ) : (
                  // رابط للصفحات السابقة
                  <Link
                    to={item.path}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                    itemProp="item"
                  >
                    {index === 0 && <Home className="h-4 w-4 ml-1" />}
                    <span itemProp="name">{item.name}</span>
                  </Link>
                )}
                
                <meta itemProp="position" content={String(index + 1)} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
