const express = require("express");
const path = require("path");
const prerender = require("prerender-node");

const app = express();

// إزالة هيدرز إعادة التحقق لمنع 304 نهائياً (يجب أن تأتي أول Middleware)
app.use((req, _res, next) => {
  if (req.headers) {
    delete req.headers['if-none-match'];
    delete req.headers['if-modified-since'];
  }
  next();
});

// عطل توليد ETag على مستوى التطبيق (يؤثر على sendFile فقط)
// سنبقي ETag للأصول الثابتة عبر express.static حيث نحدد etag: true هناك
app.set('etag', false);

// إعداد Prerender.io
app.use(
  prerender
    .set("prerenderToken", "YOUR_TOKEN_HERE") // استبدل بـ token الخاص بك من Prerender.io
    .whitelisted([".html", ".js", ".css"])
    .blacklisted(["/api/*", "/admin/*"]) // استثناء صفحات API
    .set("protocol", "https") // استخدام HTTPS
    .set("host", "shiracartashlih.com") // الدومين الخاص بك
);

// Middleware للأمان + تعطيل الكاش نهائياً
app.use((req, res, next) => {
  // Security headers
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');

  // Global no-cache لكل الردود
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');

  next();
});

// Helper: send HTML without revalidation (always 200)
function sendHtml(res, filePath) {
  res.status(200);
  res.set({
    'Cache-Control': 'no-store, no-cache, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0'
  });
  return res.sendFile(filePath, {
    lastModified: false,
    cacheControl: false
  });
}

// تأمين أن أي طلب لملفات HTML مباشرة يتم بخاصية no-store دائماً
app.get(/.*\.html$/, (req, res) => {
  const sanitizedPath = req.path.replace(/^\/+/, '');
  const file = path.join(__dirname, 'dist', sanitizedPath);
  sendHtml(res, file);
});

// خدمة الملفات الثابتة من مجلد dist (مع تعطيل الكاش نهائياً)
app.use(express.static(path.join(__dirname, "dist"), {
  etag: false,
  lastModified: false,
  cacheControl: false,
  setHeaders: (res) => {
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
  }
}));

// إعادة توجيه للصفحات الثابتة المولدة
app.get('/about', (req, res) => {
  sendHtml(res, path.join(__dirname, "dist", "about.html"));
});

app.get('/services', (req, res) => {
  sendHtml(res, path.join(__dirname, "dist", "services.html"));
});

app.get('/service-steps', (req, res) => {
  sendHtml(res, path.join(__dirname, "dist", "service-steps.html"));
});

app.get('/faq', (req, res) => {
  sendHtml(res, path.join(__dirname, "dist", "faq.html"));
});

app.get('/contact', (req, res) => {
  sendHtml(res, path.join(__dirname, "dist", "contact.html"));
});

app.get('/privacy', (req, res) => {
  sendHtml(res, path.join(__dirname, "dist", "privacy.html"));
});

app.get('/terms', (req, res) => {
  sendHtml(res, path.join(__dirname, "dist", "terms.html"));
});

// خدمة sitemap.xml و robots.txt
app.get('/sitemap.xml', (req, res) => {
  res.type('application/xml');
  res.set({
    'Cache-Control': 'no-store, no-cache, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0'
  });
  res.sendFile(path.join(__dirname, "dist", "sitemap.xml"));
});

app.get('/robots.txt', (req, res) => {
  res.type('text/plain');
  res.set({
    'Cache-Control': 'no-store, no-cache, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0'
  });
  res.sendFile(path.join(__dirname, "dist", "robots.txt"));
});

app.get('/ads.txt', (req, res) => {
  res.type('text/plain');
  res.set({
    'Cache-Control': 'no-store, no-cache, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0'
  });
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
  sendHtml(res, path.join(__dirname, "dist", "index.html"));
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
  console.log(`🔍 Prerender.io: ${process.env.PRERENDER_TOKEN ? 'Enabled' : 'Disabled'}`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
});

module.exports = app;
