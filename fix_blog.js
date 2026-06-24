const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, 'blog');
const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.html'));

const headerHTML = `
    <!-- Decorative Background Blobs -->
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>
    <div class="blob blob-3"></div>

    <div class="page-wrapper">
        <!-- ===== HEADER ===== -->
        <header class="site-header" id="top">
            <nav class="top-nav">
                <a href="../index.html">홈</a>
                <a href="../philosophy.html">음양오행 철학</a>
                <a href="index.html" style="color: var(--pink); font-weight: 700;">사주 블로그</a>
                <a href="../index.html#info-section">이용안내</a>
            </nav>
            <div class="logo">
                <a href="../index.html" style="text-decoration:none; color:inherit;">
                    <span class="logo-icon">🔮</span>
                    <span class="logo-text">Saju Day by Day</span>
                </a>
            </div>
            <p class="site-tagline">오늘의 우주가 당신에게 전하는 메시지</p>
        </header>
`;

const footerHTML = `
        <!-- ===== FOOTER ===== -->
        <footer class="site-footer">
            <div class="footer-nav">
                <a href="../philosophy.html">음양오행 철학</a>
                <span class="divider">|</span>
                <a href="../terms.html">이용약관</a>
                <span class="divider">|</span>
                <a href="../privacy.html">개인정보처리방침</a>
            </div>
            <p>© 2026 Saju Day by Day. 오늘도 좋은 하루 보내세요! 🌈</p>
            <p class="footer-disclaimer">본 블로그 칼럼은 명리학 정보 제공 목적으로 작성되었습니다.</p>
        </footer>
    </div>
`;

for (const file of files) {
  const filePath = path.join(blogDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Extract meta tags (title, description, og)
  const titleMatch = content.match(/<title>(.*?)<\/title>/is);
  const descMatch = content.match(/<meta\s+name="description"\s+content="(.*?)"\s*\/?>/is);
  const ogTitleMatch = content.match(/<meta\s+property="og:title"\s+content="(.*?)"\s*\/?>/is);
  const ogDescMatch = content.match(/<meta\s+property="og:description"\s+content="(.*?)"\s*\/?>/is);
  const ldJsonMatch = content.match(/<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/is);
  
  // Extract custom style
  const styleMatch = content.match(/<style>([\s\S]*?)<\/style>/is);
  
  // Extract main
  const mainMatch = content.match(/<main>([\s\S]*?)<\/main>/is);
  
  if (!mainMatch) {
    console.log(`Skipping ${file} - no <main> found`);
    continue;
  }

  let styleStr = styleMatch ? styleMatch[1] : '';
  let mainStr = mainMatch[1];

  // Adjust inline CSS mapping to the new theme
  styleStr = styleStr.replace(/var\(--font-sans\)/g, "var(--font-ko)");
  styleStr = styleStr.replace(/var\(--color-gold\)/g, "var(--pink)");
  styleStr = styleStr.replace(/var\(--color-text-primary\)/g, "var(--text-main)");
  styleStr = styleStr.replace(/var\(--color-text-secondary\)/g, "var(--text-muted)");
  styleStr = styleStr.replace(/var\(--color-text-muted\)/g, "var(--text-dim)");
  
  // Replace old gold rgb 226,201,116 with pink 255,20,147
  styleStr = styleStr.replace(/226,\s*201,\s*116/g, "255,20,147");
  // Replace old dark card rgb 20,16,26 with var(--bg-card)
  styleStr = styleStr.replace(/rgba\(20,\s*16,\s*26,\s*0\.[78]\)/g, "var(--bg-card)");
  
  // Also fix some specific gradient thumbs in blog grid
  mainStr = mainStr.replace(/background:\s*linear-gradient\([^)]+\);/g, "background: rgba(255,20,147,0.1); border: 1px solid rgba(255,20,147,0.2);");

  // Fix internal paths if any
  mainStr = mainStr.replace(/href="\.\.\/index\.html"/g, 'href="../index.html"');

  const newHTML = `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${titleMatch ? titleMatch[1] : '사주 블로그 | Saju Day by Day'}</title>
    ${descMatch ? '<meta name="description" content="' + descMatch[1] + '">' : ''}
    ${ogTitleMatch ? '<meta property="og:title" content="' + ogTitleMatch[1] + '">' : ''}
    ${ogDescMatch ? '<meta property="og:description" content="' + ogDescMatch[1] + '">' : ''}
    
    <!-- Google AdSense -->
    <meta name="google-adsense-account" content="ca-pub-3114463937796990">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3114463937796990" crossorigin="anonymous"></script>
    
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&family=Outfit:wght@300;500;700;900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@400;700&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="../styles.css">
    
    ${ldJsonMatch ? '<script type="application/ld+json">' + ldJsonMatch[1] + '</script>' : ''}

    <style>
      ${styleStr}
      /* Additional blog container fixes */
      main { padding: 2rem 1rem 4rem; max-width: 1000px; margin: 0 auto; }
      .blog-hero { padding: 2rem 1rem; }
      .blog-hero h1 { font-size: 2.2rem; background: linear-gradient(135deg, var(--pink), var(--purple)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
      .category-tabs { margin-bottom: 2rem; }
      
      .post-wrap { background: var(--bg-card); padding: 3rem 2.5rem; border-radius: var(--radius-md); border: 1px solid var(--border); box-shadow: 0 10px 30px rgba(0,0,0,0.3); }
      @media(max-width: 600px) { .post-wrap { padding: 2rem 1.5rem; } }
      .post-header h1 { font-size: 1.8rem; background: linear-gradient(135deg, var(--pink), var(--yellow)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
      .post-body h2 { color: var(--pink); border-bottom-color: rgba(255,20,147,0.3); }
      .post-body h3 { color: var(--yellow); }
      
      blockquote { border-left-color: var(--pink); background: rgba(255,20,147,0.05); }
      .info-box { background: rgba(15,15,25,0.6); border-color: rgba(255,20,147,0.2); }
      .info-box h4 { color: var(--pink); }
      .table-wrap { border-color: rgba(255,20,147,0.2); }
      th { background: rgba(255,20,147,0.1); color: var(--pink); }
      .tag { background: rgba(255,20,147,0.1); border-color: rgba(255,20,147,0.2); color: var(--pink); }
      .nav-post:hover { border-color: var(--pink); }
      .author-avatar { border-color: var(--pink); background: rgba(255,20,147,0.1); color: var(--pink); }
      .page-btn.active, .page-btn:hover { background: rgba(255,20,147,0.1); border-color: var(--pink); color: var(--pink); }
      .cat-tab.active, .cat-tab:hover { background: rgba(255,20,147,0.1); border-color: var(--pink); color: var(--pink); }
    </style>
</head>
<body>
${headerHTML}
    <main id="main-content">
        ${mainStr}
    </main>
${footerHTML}
</body>
</html>`;

  fs.writeFileSync(filePath, newHTML, 'utf8');
  console.log("Updated " + file);
}
