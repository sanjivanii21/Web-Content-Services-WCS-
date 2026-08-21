document.getElementById('year').textContent = new Date().getFullYear();

/* Nav scroll state */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 30);
});

/* Mobile menu */
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
document.querySelectorAll('.mobile-link').forEach(l => l.addEventListener('click', () => mobileMenu.classList.add('hidden')));

/* Scroll reveal */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
document.querySelectorAll('.reveal, .reveal-l, .reveal-r, .reveal-scale').forEach(el => io.observe(el));

/* Portfolio data + render */
const projects = [
  { name:'Retail Growth Audit', industry:'Retail', cat:'business', services:'Business Consulting & Analysis', grad:'linear-gradient(135deg,#8b5cf6,#3b82f6)' },
  { name:'Fintech Corporate Site', industry:'Financial Services', cat:'websites', services:'Technology Solutions', grad:'linear-gradient(135deg,#3b82f6,#22d3ee)' },
  { name:'HealthOps Field App', industry:'Healthcare', cat:'applications', services:'Technology Solutions', grad:'linear-gradient(135deg,#22d3ee,#8b5cf6)' },
  { name:'D2C Brand Refresh', industry:'Consumer Goods', cat:'branding', services:'Branding & Social Media', grad:'linear-gradient(135deg,#f97316,#8b5cf6)' },
  { name:'EdTech Social Campaign', industry:'Education', cat:'social', services:'Branding & Social Media', grad:'linear-gradient(135deg,#8b5cf6,#f472b6)' },
  { name:'Logistics Process Redesign', industry:'Logistics', cat:'business', services:'Business Consulting & Analysis', grad:'linear-gradient(135deg,#3b82f6,#8b5cf6)' },
];
const grid = document.getElementById('portfolioGrid');
function renderProjects(filter){
  grid.innerHTML = '';
  projects.filter(p => filter==='all' || p.cat===filter).forEach((p,i) => {
    const card = document.createElement('div');
    card.className = 'reveal glass rounded-3xl overflow-hidden card-hover';
    card.style.setProperty('--i', i);
    card.innerHTML = `
      <div class="art h-52" style="--art-grad:${p.grad}"><div class="art-lines"></div></div>
      <div class="p-7">
        <p class="text-xs uppercase tracking-widest text-[var(--cyan)] mb-2">${p.industry}</p>
        <h3 class="font-display font-semibold text-xl mb-2">${p.name}</h3>
        <p class="text-sm text-[var(--muted)] mb-5">${p.services}</p>
        <span class="inline-flex items-center gap-2 text-sm font-medium border-b border-white/20 pb-1 cursor-pointer hover:border-[var(--purple)] hover:text-[var(--purple)] transition-colors">
          View Case Study
          <svg width="14" height="10" viewBox="0 0 16 10" fill="none"><path d="M1 5h14M10 1l4 4-4 4" stroke="currentColor" stroke-width="1.5"/></svg>
        </span>
      </div>`;
    grid.appendChild(card);
    io.observe(card);
  });
}
renderProjects('all');
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProjects(btn.dataset.filter);
  });
});

/* Case study tabs */
const caseData = [
  'Who was the client? Every case study opens by framing the business, its industry and its scale — the context every recommendation is built on.',
  'What problem existed? We document the exact operational, technical or brand issue the client came to us with.',
  'What did we identify? Our consulting and analysis team maps the root cause, not just the symptom.',
  'What solution was proposed? A strategy built specifically around the diagnosis — never a template pulled off the shelf.',
  'What did we implement? The build phase, covering technology, branding or process work delivered against the strategy.',
  'What changed? The measurable outcome — efficiency gained, revenue impact, brand visibility, or system stability.',
  'Which WCS solutions were involved? A summary of which of our four core domains contributed to the result.'
];
document.querySelectorAll('.case-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.case-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const content = document.getElementById('caseContent');
    content.style.opacity = 0;
    setTimeout(() => {
      content.textContent = caseData[tab.dataset.case];
      content.style.opacity = 1;
    }, 200);
  });
});
document.getElementById('caseContent').style.transition = 'opacity .3s ease';

/* Contact form */
const form = document.getElementById('contactForm');
const toast = document.getElementById('toast');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  toast.style.transform = 'translateY(0)';
  toast.style.opacity = '1';
  form.reset();
  setTimeout(() => {
    toast.style.transform = 'translateY(6rem)';
    toast.style.opacity = '0';
  }, 3500);
});

/* Hero parallax on blobs */
const blobs = document.querySelectorAll('#home .blob');
document.getElementById('home').addEventListener('mousemove', (e) => {
  const { innerWidth: w, innerHeight: h } = window;
  const x = (e.clientX / w - 0.5) * 30;
  const y = (e.clientY / h - 0.5) * 30;
  blobs.forEach((b, i) => {
    b.style.transform = `translate(${x * (i+1) * 0.4}px, ${y * (i+1) * 0.4}px)`;
  });
});
