import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { getSEOData, generateStructuredData } from "@/utils/seo";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  schema?: object;
}

const SEOHead = ({ 
  title, 
  description, 
  keywords, 
  canonicalUrl, 
  ogImage,
  schema 
}: SEOHeadProps) => {
  const location = useLocation();
  const seoData = getSEOData(location.pathname);
  
  // استخدام البيانات المرسلة أو البيانات الافتراضية
  const finalTitle = title || seoData.title;
  const finalDescription = description || seoData.description;
  const finalKeywords = keywords || seoData.keywords;
  const finalCanonical = canonicalUrl || seoData.canonical;
  const finalOgImage = ogImage || seoData.ogImage || 'https://shiracartashlih.com/logo.png';
  
  // توليد structured data
  const structuredData = schema || generateStructuredData(location.pathname, seoData);
  
  return (
    <Helmet>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="author" content="شراء سيارات تشليح" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Arabic" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Open Graph */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ar_SA" />
      <meta property="og:site_name" content="شراء سيارات تشليح" />
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="شراء سيارات تشليح - نشتري السيارات التالفة والمصدومة" />
      <meta property="og:url" content={finalCanonical} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalOgImage} />
      <meta name="twitter:image:alt" content="شراء سيارات تشليح - نشتري السيارات التالفة والمصدومة" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="geo.region" content="SA" />
      <meta name="geo.placename" content="الرياض" />
      <meta name="geo.position" content="24.7136;46.6753" />
      <meta name="ICBM" content="24.7136, 46.6753" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={finalCanonical} />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      
      {/* Schema.org JSON-LD */}
      {Array.isArray(structuredData) ? (
        structuredData.map((schema, index) => (
          <script key={index} type="application/ld+json">
            {JSON.stringify(schema, null, 2)}
          </script>
        ))
      ) : (
        <script type="application/ld+json">
          {JSON.stringify(structuredData, null, 2)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;