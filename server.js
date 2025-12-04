const express = require("express");
const path = require("path");
const prerender = require("prerender-node");

const app = express();

// إعداد Prerender.io
app.use(
  prerender
    .set("prerenderToken", "YOUR_TOKEN_HERE") // استبدل بـ token الخاص بك من Prerender.io
    .whitelisted([".html", ".js", ".css"])
    .blacklisted(["/api/*", "/admin/*"]) // استثناء صفحات API
    .set("protocol", "https") // استخدام HTTPS
    .set("host", "shiracartashlih.com") // الدومين الخاص بك
);

// Middleware للأمان والأداء
app.use((req, res, next) => {
  // Security headers
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // Cache headers للملفات الثابتة
  if (req.url.match(/\.(css|js|png|jpg|jpeg|gif|ico|svg)$/)) {
    res.setHeader('Cache-Control', 'public, max-age=31536000'); // سنة واحدة
  }
  
  next();
});

// خدمة الملفات الثابتة من مجلد dist (Vite build output)
app.use(express.static(path.join(__dirname, "dist"), {
  maxAge: '1y', // Cache للملفات الثابتة
  etag: true,
  lastModified: true
}));

// إعادة توجيه للصفحات الثابتة المولدة
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "about.html"));
});

app.get('/services', (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "services.html"));
});

app.get('/service-steps', (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "service-steps.html"));
});

app.get('/faq', (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "faq.html"));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "contact.html"));
});

app.get('/privacy', (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "privacy.html"));
});

app.get('/terms', (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "terms.html"));
});

// خدمة sitemap.xml و robots.txt
app.get('/sitemap.xml', (req, res) => {
  res.type('application/xml');
  res.sendFile(path.join(__dirname, "dist", "sitemap.xml"));
});

app.get('/robots.txt', (req, res) => {
  res.type('text/plain');
  res.sendFile(path.join(__dirname, "dist", "robots.txt"));
});

app.get('/ads.txt', (req, res) => {
  res.type('text/plain');
  res.sendFile(path.join(__dirname, "dist", "ads.txt"));
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    prerender: 'enabled'
  });
});

// أي صفحة غير موجودة يرد بالـ index.html (SPA fallback)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server Error:', err);
  res.status(500).sendFile(path.join(__dirname, "dist", "index.html"));
});

// تشغيل السيرفر
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📱 Website: http://localhost:${PORT}`);
  console.log(`🔍 Prerender.io: ${prerender.get('prerenderToken') ? 'Enabled' : 'Disabled'}`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
});

module.exports = app;
