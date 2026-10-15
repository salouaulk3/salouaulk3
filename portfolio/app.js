/**
 * Vintage VHS Spine 3D Interactive Portfolio
 * Minimalist Archive Component for Saloua Ulk
 * Clean visual isolation on solid #0a0a0a, borderless cutout design
 */

const PROJECTS = [
  {
    id: 'hanot-plus',
    title: 'HANOT+ (Hanout-Plus)',
    kanjiSubtitle: 'ハノートプラス / COMMERCIAL CREDIT APP',
    year: '2024',
    category: 'mobile',
    techStack: 'React Native • Expo Router • TypeScript • Express • MySQL',
    githubUrl: 'https://github.com/salouaulk3/Hanout-Plus',
    artImg: 'assets/art_hanot.jpg',
    studio: 'RETRO VIDEO',
    catalogCode: 'HP-8012',
    rating: 'G',
    spineBg: 'linear-gradient(180deg, #091e42 0%, #153b75 35%, #0e274f 70%, #051021 100%)'
  },
  {
    id: 'moroccopay-enterprise',
    title: 'MoroccoPay Enterprise',
    kanjiSubtitle: 'モロッコ給与企業 / FISCAL & PAYMENT GATEWAY',
    year: '2024',
    category: 'fintech',
    techStack: 'Python • FastAPI • SQLAlchemy • Fiscal Invoicing • Security',
    githubUrl: 'https://github.com/salouaulk3/moroccopay-enterprise',
    artImg: 'assets/art_moroccopay.jpg',
    studio: 'CRITERION',
    catalogCode: 'MP-7011',
    rating: 'R',
    spineBg: 'linear-gradient(180deg, #420b0b 0%, #781414 35%, #3f0909 70%, #1d0404 100%)'
  },
  {
    id: 'gestion-de-stock',
    title: 'Gestion de Stock',
    kanjiSubtitle: '在庫管理システム / INVENTORY CONTROL',
    year: '2023',
    category: 'systems',
    techStack: 'JavaScript (ES6+) • Architecture Modulaire • SQL Database',
    githubUrl: 'https://github.com/salouaulk3/gestion-de-stock',
    artImg: 'assets/art_stock.jpg',
    studio: 'WARNER VIDEO',
    catalogCode: 'GS-1419',
    rating: 'PG',
    spineBg: 'linear-gradient(180deg, #1d2516 0%, #364627 35%, #212c18 70%, #0f140a 100%)'
  },
  {
    id: 'grilli-restaurant',
    title: 'Grilli Restaurant',
    kanjiSubtitle: '料理店グリル / GOURMET SHOWCASE',
    year: '2023',
    category: 'web',
    techStack: 'HTML5 Semantic • Modern Vanilla CSS • UI/UX Design',
    githubUrl: 'https://github.com/salouaulk3/grilli',
    artImg: 'assets/art_grilli.jpg',
    studio: 'SONY VIDEO',
    catalogCode: 'GR-1234',
    rating: 'G',
    spineBg: 'linear-gradient(180deg, #1b1613 0%, #3a2e23 35%, #201913 70%, #0e0a07 100%)'
  },
  {
    id: 'cyber-core',
    title: 'Cyber Core Terminal',
    kanjiSubtitle: '電脳電卓 / DEVELOPER CLI TOOLKIT',
    year: '2024',
    category: 'systems',
    techStack: 'Python • Node.js • WebSockets • Docker • Linux APIs',
    githubUrl: 'https://github.com/salouaulk3',
    artImg: 'assets/art_cybercore.jpg',
    studio: 'CBS FOX',
    catalogCode: 'CC-1883',
    rating: 'PG-13',
    spineBg: 'linear-gradient(180deg, #071f1a 0%, #0e3b32 35%, #071f19 70%, #020c0a 100%)'
  },
  {
    id: 'throne-of-blood',
    title: 'Throne of Blood (Tribute)',
    kanjiSubtitle: '蜘蛛巣城 / KUROSAWA CINEMA ARCHIVE',
    year: '1957',
    category: 'cinema',
    techStack: 'Akira Kurosawa • Criterion Collection • Toshirō Mifune',
    githubUrl: 'https://github.com/salouaulk3',
    artImg: 'assets/cover_throne_of_blood.jpg',
    studio: 'CRITERION',
    catalogCode: 'CC-1957',
    rating: 'R',
    spineBg: 'linear-gradient(180deg, #ded7c3 0%, #cfc5ac 35%, #bcaf91 70%, #a89a7a 100%)',
    isLightSpine: true
  }
];

class VhsAppController {
  constructor() {
    this.currentIndex = 0;
    this.activeFilter = 'all';

    // Elements
    this.shelfTrack = document.getElementById('shelfTrack');
    this.projectTitle = document.getElementById('projectTitle');
    this.projectSubtitle = document.getElementById('projectSubtitle');
    this.projectMetaLine = document.getElementById('projectMetaLine');
    this.showcaseInfo = document.getElementById('showcaseInfo');
    this.btnPrev = document.getElementById('btnPrev');
    this.btnNext = document.getElementById('btnNext');
    this.filterButtons = document.querySelectorAll('.pill-btn');

    this.init();
  }

  init() {
    this.renderTrack();
    this.bindEvents();
    this.setActiveTape(0);
  }

  renderTrack() {
    this.shelfTrack.innerHTML = '';

    PROJECTS.forEach((p, idx) => {
      const item = document.createElement('div');
      item.className = `vhs-item ${idx === 0 ? 'active' : ''}`;
      item.dataset.index = idx;
      item.dataset.category = p.category;
      item.dataset.url = p.githubUrl;
      item.setAttribute('role', 'button');
      item.setAttribute('tabindex', '0');
      item.setAttribute('title', `${p.title} — Click to visit GitHub repository`);

      const textColor = p.isLightSpine ? '#111' : '#fff';
      const subColor = p.isLightSpine ? '#444' : 'rgba(255,255,255,0.7)';

      item.innerHTML = `
        <div class="vhs-card">
          <!-- 1. VERTICAL SPINE VIEW -->
          <div class="vhs-spine-view" style="background: ${p.spineBg};">
            <div class="spine-badge" style="${p.isLightSpine ? 'background:#111; color:#fff;' : ''}">${p.studio}</div>
            
            <div class="spine-title-container">
              <span class="spine-title-text" style="color:${textColor};">${p.title}</span>
              <span class="spine-kanji-text" style="color:${subColor};">${p.kanjiSubtitle.split('/')[0]}</span>
            </div>

            <div class="spine-bottom-info">
              <span class="vhs-tag">VHS</span>
              <span class="vhs-code" style="color:${subColor};">${p.catalogCode}</span>
            </div>
          </div>

          <!-- 2. EXPANDED 3D COVER & CASSETTE (Borderless Cutout) -->
          <div class="vhs-expand-view">
            <!-- Full bleed slipcase cover -->
            <div class="front-slipcase" style="background-image: url('${p.artImg}');"></div>

            <!-- Black VHS Cassette Cutout -->
            <div class="cassette-cutout">
              <div class="cassette-reels">
                <div class="spool-circle"><div class="spool-teeth"></div></div>
                <div class="spool-circle"><div class="spool-teeth"></div></div>
              </div>
              <div class="cassette-label">
                <div class="label-title">${p.title}</div>
                <div class="label-meta">${p.year} • ${p.category.toUpperCase()}</div>
                <div class="label-meta">REPO: ${p.githubUrl.replace('https://github.com/', '')}</div>
                <div class="label-barcode"></div>
              </div>
            </div>
          </div>
        </div>
      `;

      this.shelfTrack.appendChild(item);
    });
  }

  bindEvents() {
    const items = this.shelfTrack.querySelectorAll('.vhs-item');

    items.forEach((item) => {
      const idx = parseInt(item.dataset.index, 10);

      // Hover to expand
      item.addEventListener('mouseenter', () => {
        if (this.currentIndex !== idx) {
          this.setActiveTape(idx);
        }
      });

      // Direct GitHub Redirection on Click
      item.addEventListener('click', (e) => {
        const url = item.dataset.url;
        window.open(url, '_blank', 'noopener,noreferrer');
      });

      // Keyboard Accessibility
      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          window.open(item.dataset.url, '_blank', 'noopener,noreferrer');
        }
      });
    });

    // Info area click also opens GitHub repo
    this.showcaseInfo.addEventListener('click', () => {
      const current = PROJECTS[this.currentIndex];
      if (current && current.githubUrl) {
        window.open(current.githubUrl, '_blank', 'noopener,noreferrer');
      }
    });

    // Navigation arrows
    this.btnPrev.addEventListener('click', () => this.navigate(-1));
    this.btnNext.addEventListener('click', () => this.navigate(1));

    // Keyboard arrow keys
    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        this.navigate(-1);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        this.navigate(1);
      } else if (e.key === 'Enter') {
        const current = PROJECTS[this.currentIndex];
        if (current && current.githubUrl) {
          window.open(current.githubUrl, '_blank', 'noopener,noreferrer');
        }
      }
    });

    // Filter pills
    this.filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        this.filterButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        this.applyFilter(btn.dataset.filter);
      });
    });
  }

  setActiveTape(index) {
    if (index < 0 || index >= PROJECTS.length) return;
    this.currentIndex = index;
    const project = PROJECTS[index];

    const items = this.shelfTrack.querySelectorAll('.vhs-item');
    items.forEach((item, idx) => {
      if (idx === index) {
        item.classList.add('active');
        item.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      } else {
        item.classList.remove('active');
      }
    });

    // Update Project Info with smooth text fade
    this.projectTitle.style.opacity = '0';
    this.projectSubtitle.style.opacity = '0';
    this.projectMetaLine.style.opacity = '0';

    setTimeout(() => {
      this.projectTitle.textContent = project.title;
      this.projectSubtitle.textContent = project.kanjiSubtitle;
      this.projectMetaLine.textContent = `${project.year} • ${project.techStack}`;

      this.projectTitle.style.opacity = '1';
      this.projectSubtitle.style.opacity = '1';
      this.projectMetaLine.style.opacity = '1';
    }, 120);
  }

  navigate(direction) {
    const items = Array.from(this.shelfTrack.querySelectorAll('.vhs-item'));
    const visible = items
      .map((item, idx) => (!item.classList.contains('dimmed') ? idx : null))
      .filter((idx) => idx !== null);

    if (visible.length === 0) return;

    let currentPos = visible.indexOf(this.currentIndex);
    let nextPos = currentPos + direction;

    if (nextPos < 0) nextPos = visible.length - 1;
    if (nextPos >= visible.length) nextPos = 0;

    this.setActiveTape(visible[nextPos]);
  }

  applyFilter(category) {
    this.activeFilter = category;
    const items = this.shelfTrack.querySelectorAll('.vhs-item');
    let firstIdx = -1;

    items.forEach((item, idx) => {
      const match = category === 'all' || item.dataset.category === category;
      if (match) {
        item.classList.remove('dimmed');
        if (firstIdx === -1) firstIdx = idx;
      } else {
        item.classList.add('dimmed');
        item.classList.remove('active');
      }
    });

    if (firstIdx !== -1 && items[this.currentIndex].classList.contains('dimmed')) {
      this.setActiveTape(firstIdx);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new VhsAppController();
});
