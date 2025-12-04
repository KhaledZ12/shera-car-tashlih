import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

interface PageSEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const PageSEO = ({ 
  title, 
  description, 
  keywords, 
  image = "https://shiracartashlih.com/og-image.jpg",
  url,
  type = "website"
}: PageSEOProps) => {
  const location = useLocation();
  // Build absolute URL and enforce trailing slash for non-file paths
  const base = "https://shiracartashlih.com";
  const path = url ? new URL(url).pathname : location.pathname;
  const normalizedPath = /\.[a-zA-Z0-9]+$/.test(path)
    ? path // keep file paths as-is
    : path.endsWith("/")
      ? path
      : `${path}/`;
  const currentUrl = url || `${base}${normalizedPath}`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="شراء سيارات تشليح" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Arabic" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="شراء سيارات تشليح - نشتري السيارات التالفة والمصدومة" />
      <meta property="og:locale" content="ar_SA" />
      <meta property="og:site_name" content="شراء سيارات تشليح" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content="شراء سيارات تشليح - نشتري السيارات التالفة والمصدومة" />
      
      {/* Additional SEO */}
      <meta name="geo.region" content="SA" />
      <meta name="geo.placename" content="الرياض" />
      <meta name="geo.position" content="24.7136;46.6753" />
      <meta name="ICBM" content="24.7136, 46.6753" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
      
      {/* Preconnect */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Helmet>
  );
};

export default PageSEO;
