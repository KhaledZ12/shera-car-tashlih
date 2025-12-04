import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// قائمة الصفحات المطلوب توليدها
const routes = [
  { path: '/', name: 'index' },
  { path: '/about/', name: 'about' },
  { path: '/services/', name: 'services' },
  { path: '/service-steps/', name: 'service-steps' },
  { path: '/faq/', name: 'faq' },
  { path: '/contact/', name: 'contact' },
  { path: '/privacy/', name: 'privacy' },
  { path: '/terms/', name: 'terms' }
];

// قراءة ملف index.html الأساسي
const distPath = path.resolve(__dirname, '../dist');
const indexPath = path.join(distPath, 'index.html');
const baseHtml = fs.readFileSync(indexPath, 'utf-8');

// بيانات SEO لكل صفحة
const pageData = {
  '/': {
    title: 'شراء سيارات تشليح | نشتري السيارات التالفة بالسعودية',
    description: 'نشتري جميع أنواع السيارات التالفة والمصدومة في السعودية مع إسقاط اللوحات الفوري وخدمة 24 ساعة بأفضل الأسعار.',
    keywords: 'بيع سيارات تشليح, بيع سيارات تشليح الرياض, شراء سيارات مصدومة, بيع سيارة مصدومة, نشتري سيارات تشليح الرياض',
    canonical: 'https://shiracartashlih.com/',
    ogImage: '/og-index.jpg'
  },
  '/about/': {
    title: 'من نحن | شراء سيارات تشليح بالسعودية',
    description: 'تعرف على شركة شراء سيارات تشليح الرائدة في السعودية بخبرة أكثر من 10 سنوات في شراء السيارات التالفة والمصدومة.',
    keywords: 'من نحن, شراء سيارات تشليح, شركة شراء سيارات تالفة, خبرة شراء سيارات',
    canonical: 'https://shiracartashlih.com/about/',
    ogImage: '/og-about.jpg'
  },
  '/services/': {
    title: 'خدماتنا | شراء سيارات تالفة ومصدومة',
    description: 'نقدم خدمة شراء السيارات التالفة والمصدومة مع إسقاط اللوحات الفوري وتوفير أفضل الأسعار في جميع مدن السعودية.',
    keywords: 'خدمات شراء سيارات, إسقاط لوحات, خدمة السطحة, تقييم السيارات, شراء سيارات تالفة',
    canonical: 'https://shiracartashlih.com/services/',
    ogImage: '/og-services.jpg'
  },
  '/service-steps/': {
    title: 'خطوات الخدمة | طريقة بيع سيارتك للتشليح بسهولة',
    description: 'اعرف خطوات بيع سيارتك التالفة أو المصدومة لدينا: تواصل معنا، تقييم السيارة، استلام فوري ودفع نقدي.',
    keywords: 'خطوات بيع السيارة, كيفية بيع سيارة تالفة, خطوات شراء سيارات تشليح, عملية البيع',
    canonical: 'https://shiracartashlih.com/service-steps/',
    ogImage: '/og-service-steps.jpg'
  },
  '/faq/': {
    title: 'الأسئلة الشائعة | شراء سيارات تشليح',
    description: 'إجابات عن أكثر الأسئلة شيوعًا حول شراء السيارات التالفة والمصدومة وإسقاط اللوحات وخدماتنا في السعودية.',
    keywords: 'أسئلة شائعة, استفسارات شراء سيارات, أسعار السيارات التالفة, إسقاط اللوحات',
    canonical: 'https://shiracartashlih.com/faq/',
    ogImage: '/og-faq.jpg'
  },
  '/contact/': {
    title: 'اتصل بنا | شراء سيارات تشليح',
    description: 'تواصل معنا لبيع سيارتك التالفة أو المصدومة بسهولة في أي مدينة بالسعودية، خدمة عملاء 24 ساعة.',
    keywords: 'تواصل معنا, رقم شراء سيارات تشليح, اتصال, واتساب, عرض سعر',
    canonical: 'https://shiracartashlih.com/contact/',
    ogImage: '/og-contact.jpg'
  },
  '/privacy/': {
    title: 'سياسة الخصوصية | شراء سيارات تشليح',
    description: 'تعرف على سياسة الخصوصية الخاصة بموقعنا وكيف نحافظ على بيانات عملائنا بسرية تامة.',
    keywords: 'سياسة الخصوصية, حماية البيانات, خصوصية العملاء',
    canonical: 'https://shiracartashlih.com/privacy/',
    ogImage: '/og-privacy.jpg'
  },
  '/terms/': {
    title: 'الشروط والأحكام | شراء سيارات تشليح',
    description: 'اقرأ الشروط والأحكام الخاصة باستخدام موقع شراء سيارات تشليح وخدماتنا داخل المملكة.',
    keywords: 'الشروط والأحكام, شروط الخدمة, أحكام الاستخدام',
    canonical: 'https://shiracartashlih.com/terms/',
    ogImage: '/og-terms.jpg'
  }
};

// دالة لتوليد HTML مخصص لكل صفحة
function generatePageHtml(route, data) {
  let html = baseHtml;
  
  // استبدال meta tags
  html = html.replace(/<title>.*?<\/title>/i, `<title>${data.title}</title>`);
  html = html.replace(/<meta name="description" content=".*?">/i, `<meta name="description" content="${data.description}">`);
  html = html.replace(/<meta name="keywords" content=".*?">/i, `<meta name="keywords" content="${data.keywords}">`);
  
  // إضافة canonical URL
  if (!html.includes('<link rel="canonical"')) {
    html = html.replace('</head>', `  <link rel="canonical" href="${data.canonical}">\n</head>`);
  } else {
    html = html.replace(/<link\s+rel=["']canonical["']\s+href=["'][^"']*["']\s*\/?>(?![^<]*<\/head>)/i, `<link rel="canonical" href="${data.canonical}">`);
  }
  
  // إضافة Open Graph tags
  const ogTags = `
  <meta property="og:title" content="${data.title}">
  <meta property="og:description" content="${data.description}">
  <meta property="og:url" content="${data.canonical}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="شراء سيارات تشليح">
  <meta property="og:locale" content="ar_SA">
  <meta property="og:image" content="https://shiracartashlih.com${data.ogImage}">
  
  <!-- Twitter Card tags -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${data.title}">
  <meta name="twitter:description" content="${data.description}">
  <meta name="twitter:image" content="https://shiracartashlih.com${data.ogImage}">`;

  // Replace existing OG/Twitter tags if present; otherwise insert block
  const replacements = [
    { pattern: /<meta\s+property=["']og:title["']\s+content=["'][^"']*["']\s*\/>/i, value: `<meta property="og:title" content="${data.title}" />` },
    { pattern: /<meta\s+property=["']og:description["']\s+content=["'][^"']*["']\s*\/>/i, value: `<meta property="og:description" content="${data.description}" />` },
    { pattern: /<meta\s+property=["']og:url["']\s+content=["'][^"']*["']\s*\/>/i, value: `<meta property="og:url" content="${data.canonical}" />` },
    { pattern: /<meta\s+property=["']og:image["']\s+content=["'][^"']*["']\s*\/>/i, value: `<meta property="og:image" content="https://shiracartashlih.com${data.ogImage}" />` },
    { pattern: /<meta\s+name=["']twitter:title["']\s+content=["'][^"']*["']\s*\/>/i, value: `<meta name="twitter:title" content="${data.title}" />` },
    { pattern: /<meta\s+name=["']twitter:description["']\s+content=["'][^"']*["']\s*\/>/i, value: `<meta name="twitter:description" content="${data.description}" />` },
    { pattern: /<meta\s+name=["']twitter:image["']\s+content=["'][^"']*["']\s*\/>/i, value: `<meta name="twitter:image" content="https://shiracartashlih.com${data.ogImage}" />` },
  ];

  let replacedAny = false;
  for (const { pattern, value } of replacements) {
    if (pattern.test(html)) {
      html = html.replace(pattern, value);
      replacedAny = true;
    }
  }
  // If none existed (first-time injection), add full block
  if (!replacedAny) {
    html = html.replace('</head>', `${ogTags}\n</head>`);
  }
  
  // إضافة Structured Data
  const structuredData = generateStructuredData(route.path, data);
  html = html.replace('</head>', `${structuredData}\n</head>`);

  return html;
}

// دالة لتوليد Structured Data
function generateStructuredData(path, data) {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "شراء سيارات تشليح",
    "url": "https://shiracartashlih.com/",
    "logo": "https://shiracartashlih.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+966556232134",
      "contactType": "customer service",
      "availableLanguage": "Arabic"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "SA",
      "addressLocality": "الرياض"
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "sameAs": [
      "https://wa.me/966556232134"
    ]
  };

  if (path === '/') {
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "شراء سيارات تشليح",
      "description": data.description,
      "url": data.canonical,
      "telephone": "+966556232134",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "SA",
        "addressLocality": "الرياض"
      },
      "openingHours": "Mo-Su 00:00-23:59",
      "priceRange": "$$",
      "serviceArea": {
        "@type": "Country",
        "name": "السعودية"
      }
    };

    return `    <script type="application/ld+json">
${JSON.stringify(baseSchema, null, 2)}
    </script>
    <script type="application/ld+json">
${JSON.stringify(localBusinessSchema, null, 2)}
    </script>`;
  }

  // تخصيص WebPage Schema حسب نوع الصفحة
  let webPageName = data.title;
  let webPageDescription = data.description;
  
  // تخصيص أكثر للصفحات المختلفة
  if (path === '/about/') {
    webPageName = "من نحن - شراء سيارات تشليح";
    webPageDescription = "معلومات عن شركة شراء سيارات تشليح وخبرتنا في مجال شراء السيارات التالفة والمصدومة";
  } else if (path === '/services/') {
    webPageName = "خدماتنا - شراء السيارات التالفة";
    webPageDescription = "تعرف على خدماتنا في شراء السيارات التالفة والمصدومة وإسقاط اللوحات";
  } else if (path === '/service-steps/') {
    webPageName = "خطوات الخدمة - كيفية بيع سيارتك";
    webPageDescription = "دليل شامل لخطوات بيع سيارتك التالفة أو المصدومة لشركة شراء سيارات تشليح";
  } else if (path === '/faq/') {
    webPageName = "الأسئلة الشائعة - شراء سيارات تشليح";
    webPageDescription = "أسئلة وأجوبة حول خدمات شراء السيارات التالفة وإسقاط اللوحات";
  } else if (path === '/contact/') {
    webPageName = "تواصل معنا - شراء سيارات تشليح";
    webPageDescription = "معلومات الاتصال وطرق التواصل مع فريق شراء سيارات تشليح";
  } else if (path === '/privacy/') {
    webPageName = "سياسة الخصوصية";
    webPageDescription = "سياسة حماية البيانات والخصوصية لموقع شراء سيارات تشليح";
  } else if (path === '/terms/') {
    webPageName = "الشروط والأحكام";
    webPageDescription = "شروط وأحكام استخدام موقع وخدمات شراء سيارات تشليح";
  }

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": webPageName,
    "description": webPageDescription,
    "url": data.canonical,
    "isPartOf": {
      "@type": "WebSite",
      "name": "شراء سيارات تشليح",
      "url": "https://shiracartashlih.com/"
    }
  };

  return `    <script type="application/ld+json">
${JSON.stringify(baseSchema, null, 2)}
    </script>
    <script type="application/ld+json">
${JSON.stringify(webPageSchema, null, 2)}
    </script>`;
}

// توليد الصفحات
console.log('🚀 بدء توليد الصفحات الثابتة...');

const distDir = distPath;

// إنشاء الصفحات الثابتة
for (const route of routes) {
  try {
    const data = pageData[route.path];
    
    if (route.path === '/') {
      // تحديث الصفحة الرئيسية
      const updatedIndexContent = generatePageHtml(route, data);
      fs.writeFileSync(path.join(distDir, 'index.html'), updatedIndexContent);
      console.log('✅ تم تحديث: index.html');
    } else {
      // إنشاء مجلد لكل صفحة مع index.html
      const folderName = route.path.slice(1); // إزالة الـ /
      const folderPath = path.join(distDir, folderName);
      
      // إنشاء المجلد إذا لم يكن موجوداً
      if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
      }
      
      // إنشاء index.html داخل المجلد
      const filePath = path.join(folderPath, 'index.html');
      const pageContent = generatePageHtml(route, data);
      fs.writeFileSync(filePath, pageContent);
      console.log(`✅ تم إنشاء: ${folderName}/index.html`);
    }
  } catch (error) {
    console.error(`❌ خطأ في توليد ${route.name}:`, error.message);
  }
}

// إنشاء ملف .htaccess مبسط للمجلدات
const htaccessContent = `# شراء سيارات تشليح - ملف .htaccess مبسط
# shiracartashlih.com

# إعدادات MIME الأساسية فقط
AddType application/javascript .js
AddType text/css .css
AddType application/json .json
AddType application/manifest+json .webmanifest
AddType image/svg+xml .svg

# منع عرض قائمة الملفات
Options -Indexes

# حماية الملفات الحساسة
<Files ".htaccess">
    Order Allow,Deny
    Deny from all
</Files>

<Files "*.env">
    Order Allow,Deny
    Deny from all
</Files>`;

fs.writeFileSync(path.join(distPath, '.htaccess'), htaccessContent);
console.log('✅ تم تحديث ملف .htaccess');

// إنشاء ملف sitemap.xml
const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${routes.map(route => {
  const data = pageData[route.path];
  const lastmod = new Date().toISOString().split('T')[0];
  const priority = route.path === '/' ? '1.0' : '0.8';
  const changefreq = route.path === '/' ? 'weekly' : 'monthly';
  
  return `  <url>
    <loc>${data.canonical}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}).join('\n')}
</urlset>`;

fs.writeFileSync(path.join(distPath, 'sitemap.xml'), sitemapContent);
console.log('✅ تم إنشاء ملف sitemap.xml');

// إنشاء ملف robots.txt
const robotsContent = `# Robots.txt for shiracartashlih.com
User-agent: *
Allow: /

# Allow all major search engines
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

User-agent: DuckDuckBot
Allow: /

User-agent: Baiduspider
Allow: /

User-agent: YandexBot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: Twitterbot
Allow: /

# Disallow build files and unnecessary directories
Disallow: /assets/
Disallow: /src/
Disallow: /node_modules/
Disallow: /dist/
Disallow: /*.js$
Disallow: /*.css$
Disallow: /*.json$
Disallow: /*.ts$
Disallow: /*.tsx$
Disallow: /vite.config.*
Disallow: /package*.json
Disallow: /tsconfig*.json
Disallow: /.env*
Disallow: /.git*

# Allow important files
Allow: /logo.png
Allow: /og-*.jpg
Allow: /robots.txt
Allow: /sitemap.xml
Allow: /ads.txt
Allow: /site.webmanifest

# Crawl delay (optional)
Crawl-delay: 1

# Sitemap location
Sitemap: http://shiracartashlih.com/sitemap.xml`;

fs.writeFileSync(path.join(distPath, 'robots.txt'), robotsContent);
console.log('✅ تم إنشاء ملف robots.txt');

console.log('🎉 تم الانتهاء من توليد جميع الصفحات الثابتة بنجاح!');
console.log('📋 الصفحات المُولدة:');
routes.forEach(route => {
  const fileName = route.name === 'index' ? 'index.html' : `${route.name}.html`;
  console.log(`   - ${fileName} (${route.path})`);
});
console.log('\n📁 الملفات الإضافية:');
console.log('   - sitemap.xml (خريطة الموقع)');
console.log('   - robots.txt (توجيهات محركات البحث)');
console.log('   - .htaccess (إعدادات الخادم)');
