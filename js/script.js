// ========== BACK TO TOP BUTTON ==========
const backToTopButton = document.getElementById('backToTop');
window.addEventListener('scroll', () => { if (window.scrollY > 300) backToTopButton.classList.add('show'); else backToTopButton.classList.remove('show'); });
backToTopButton.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); });

// ========== TYPEWRITER EFFECT ==========
const typewriterText = "Fatma Sorour...";
const typewriterElement = document.getElementById('typewriter-text');
let index = 0;
function typeWriter() { if (index < typewriterText.length) { typewriterElement.innerHTML = typewriterText.substring(0, index + 1) + '<span class="typewriter-cursor"></span>'; index++; setTimeout(typeWriter, 150); } else { typewriterElement.innerHTML = typewriterText + '<span class="typewriter-cursor"></span>'; setTimeout(() => { index = 0; typeWriter(); }, 2500); } }
typeWriter();

// ========== SKILLS DATA ==========
const frontend = ['Angular', 'Responsive Design', 'HTML5', 'CSS3', 'Bootstrap5', 'JavaScript', 'TypeScript', 'React.js', 'jQuery', 'Shopify', 'Liquid', 'Shopify CLI', 'Theme Customization'];
const backend = ['ASP.NET Core MVC', 'ASP.NET Core Web API', 'WebForms', 'Entity Framework Core', 'LINQ', 'C#', 'JWT Authentication', 'REST APIs', 'Blazor'];
const database = ['MSSQL Server', 'NHibernate', 'MongoDB', 'SQL'];
const SourceControls = ['Git & GitHub', 'Docker', 'SOLID Principles', 'Design Patterns', 'Agile'];
document.getElementById('frontendSkills').innerHTML = frontend.map(s => `<span class="skill-badge px-4 py-2 rounded-full text-sm font-medium inline-block transition">${s}</span>`).join('');
document.getElementById('backendSkills').innerHTML = backend.map(s => `<span class="skill-badge px-4 py-2 rounded-full text-sm inline-block transition">${s}</span>`).join('');
document.getElementById('database').innerHTML = database.map(s => `<span class="skill-badge px-4 py-2 rounded-full text-sm inline-block transition">${s}</span>`).join('');
document.getElementById('SourceControls').innerHTML = SourceControls.map(s => `<span class="skill-badge px-4 py-2 rounded-full text-sm inline-block transition">${s}</span>`).join('');

// ========== EDUCATION DATA ==========
const educationArr = [
  { period: "2019 – 2023", title: "Bachelor of Computer Science | BFCAI", desc: "Graduated with a strong foundation in software engineering, databases, algorithms, and system design." },
  { period: "Oct, 2023 – Jul, 2024", title: "Professional Training Program(9-Month) | ITI", desc: ".NET Full-Stack Web Development Scholarship." },
  { period: "Jul, 2023 – Oct, 2023", title: "Full-Stack MEARN Track | ITI", desc: "MongoDB, Express, Angular/React, Node.js. Full-stack apps & integration." }
];
document.getElementById('educationList').innerHTML = educationArr.map((edu, idx) => `<div class="p-6 rounded-2xl border-l-2 border-blue-500 transition transform hover:translate-x-1 stagger-item delay-${(idx+1)*100}" style="background: var(--bg-primary);"><p class="text-blue-300 text-sm">${edu.period}</p><h3 class="text-xl font-bold mt-1">${edu.title}</h3><p class="text-gray-400 mt-2">${edu.desc}</p></div>`).join('');

// ========== PROJECTS DATA ==========
const projectsList = [
  { title: "PMOS Enterprise System", category: "fullstack", desc: "Enterprise PMO management system following PMI standards with dashboards, reports, and workflow management.", tags: ["WebForms","NHibernate","SQL Server"] },
  { title: "Masarat Workflow System", category: "fullstack", desc: "Workflow automation platform for managing repetitive business processes and approvals.", tags: ["ASP.NET Core API","Angular","SQL Server"] },
  { title: "Swift Shipping System", category: "fullstack", desc: "Shipping management platform for order processing, delivery tracking, and administration.", tags: ["ASP.NET Core","Angular","EF Core","MSSQL"] },
  { title: "E-Commerce Platform", category: "fullstack", desc: "Secure e-commerce backend with Swagger API documentation and Angular frontend.", tags: ["ASP.NET Core API","Angular","Swagger","Entity Framework"] },
  { title: "Hotelier Booking System", category: "fullstack", desc: "Hotel booking platform with secure authentication and streamlined reservation management.", tags: ["ASP.NET Core MVC","SQL Server","LINQ"] },
  { title: "Online Examination System", category: "fullstack", desc: "Automated examination generation system with reporting and question bank management.", tags: ["C#","EF","SQL Server","Windows Forms"] },
  { title: "MedRecChain - Graduation project", category: "fullstack", desc: "Blockchain-based decentralized electronic medical records sharing platform.", tags: ["Ethereum","Solidity","React","IPFS"] }
];

function renderProjects() {
  const container = document.getElementById("projects-container");
  container.innerHTML = projectsList.map((proj, idx) => `<div class="glass-card p-5 h-full transition-all duration-300 project-card stagger-item delay-${(idx%5+1)*100}"><h3 class="text-xl font-bold text-blue-300">${proj.title}</h3><p class="text-sm mt-2" style="color:var(--text-secondary)">${proj.desc}</p><div class="flex flex-wrap gap-2 mt-4">${proj.tags.map(t => `<span class="project-tag text-xs inline-block transition">${t}</span>`).join('')}</div></div>`).join('');
}
renderProjects();

// ========== CONTACT FORM HANDLER - Using FormSubmit.co ==========
const contactForm = document.getElementById('contactForm');
const successDiv = document.getElementById('form-success');
const errorDiv = document.getElementById('form-error');
const sendButton = document.getElementById('sendBtn');

if (contactForm) {
  contactForm.addEventListener('submit', async function(event) {
    event.preventDefault();
    event.stopPropagation();
    
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (!firstName || !lastName || !email || !message) {
      errorDiv.classList.remove('hidden');
      successDiv.classList.add('hidden');
      setTimeout(() => errorDiv.classList.add('hidden'), 3000);
      return;
    }
    
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      errorDiv.classList.remove('hidden');
      successDiv.classList.add('hidden');
      setTimeout(() => errorDiv.classList.add('hidden'), 3000);
      return;
    }
    
    const originalText = sendButton.innerHTML;
    sendButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Sending...';
    sendButton.disabled = true;
    
    const formData = new FormData();
    formData.append('name', `${firstName} ${lastName}`);
    formData.append('email', email);
    formData.append('message', message);
    formData.append('_subject', `Portfolio Message from ${firstName} ${lastName}`);
    formData.append('_captcha', 'false');
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/fatmaa.sorour86@gmail.com', {
        method: 'POST',
        body: formData
      });
      
      const data = await response.json();
      
      if (data.success === true || response.ok) {
        successDiv.classList.remove('hidden');
        errorDiv.classList.add('hidden');
        contactForm.reset();
        setTimeout(() => successDiv.classList.add('hidden'), 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      errorDiv.classList.remove('hidden');
      successDiv.classList.add('hidden');
      setTimeout(() => errorDiv.classList.add('hidden'), 5000);
    } finally {
      sendButton.innerHTML = originalText;
      sendButton.disabled = false;
    }
  });
}

// ========== DARK / LIGHT MODE ==========
function setTheme(theme) { if(theme === 'light') document.body.classList.add('light'); else document.body.classList.remove('light'); localStorage.setItem('portfolio-theme', theme); updateToggleIcons(theme); }
function updateToggleIcons(theme) { const isLight = theme === 'light'; const icons = document.querySelectorAll('#desktopThemeToggle i, #sideThemeToggle i'); if(icons.length) icons.forEach(icon => { if(icon.classList) icon.className = isLight ? 'fas fa-sun' : 'fas fa-moon'; }); }
const storedTheme = localStorage.getItem('portfolio-theme') || 'dark';
if(storedTheme === 'light') document.body.classList.add('light'); else document.body.classList.remove('light');
updateToggleIcons(storedTheme);
document.getElementById('desktopThemeToggle')?.addEventListener('click', () => { const newTheme = document.body.classList.contains('light') ? 'dark' : 'light'; setTheme(newTheme); });
document.getElementById('sideThemeToggle')?.addEventListener('click', () => { const newTheme = document.body.classList.contains('light') ? 'dark' : 'light'; setTheme(newTheme); });

// ========== SIDE MENU FUNCTIONALITY ==========
const sideMenu = document.getElementById('sideMenu'); const overlay = document.getElementById('menuOverlay'); const openIcon = document.getElementById('mobileMenuIcon'); const closeSide = document.getElementById('closeSideMenu');
function openMenu(){ sideMenu.classList.add('open'); overlay.classList.add('active'); document.body.style.overflow='hidden'; }
function closeMenu(){ sideMenu.classList.remove('open'); overlay.classList.remove('active'); document.body.style.overflow=''; }
openIcon?.addEventListener('click', openMenu); closeSide?.addEventListener('click', closeMenu); overlay?.addEventListener('click', closeMenu);
document.querySelectorAll('.side-menu a').forEach(link => link.addEventListener('click', closeMenu));
document.getElementById("currentYear").textContent = new Date().getFullYear();

// ========== SCROLL REVEAL OBSERVER ==========
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-fade-up');
      const staggerChildren = entry.target.querySelectorAll('.stagger-item');
      staggerChildren.forEach((child, idx) => {
        setTimeout(() => child.classList.add('revealed'), idx * 50);
      });
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

document.querySelectorAll('section, .timeline-item, .glass-card:not(.stagger-item)').forEach(el => {
  if (!el.classList.contains('reveal-section')) el.classList.add('reveal-section');
  revealObserver.observe(el);
});
document.querySelectorAll('.stagger-item').forEach(el => revealObserver.observe(el));
window.dispatchEvent(new Event('scroll'));

// ========== CANVAS NETWORK ANIMATION ==========
const canvas = document.getElementById('tech-canvas'); const ctx = canvas.getContext('2d'); let particlesArray = []; let isLightMode = document.body.classList.contains('light');
canvas.width = window.innerWidth; canvas.height = window.innerHeight;
window.addEventListener('resize', () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; initParticles(); });
const observerTheme = new MutationObserver(() => { isLightMode = document.body.classList.contains('light'); });
observerTheme.observe(document.body, { attributes: true, attributeFilter: ['class'] });
class Particle { constructor(x, y, directionX, directionY, size) { this.x = x; this.y = y; this.directionX = directionX; this.directionY = directionY; this.size = size; } draw() { ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false); ctx.fillStyle = isLightMode ? 'rgba(37, 99, 235, 0.5)' : 'rgba(96, 165, 250, 0.6)'; ctx.fill(); } update() { if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX; if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY; this.x += this.directionX; this.y += this.directionY; this.draw(); } }
function initParticles() { particlesArray = []; let numberOfParticles = (canvas.height * canvas.width) / 12000; for (let i = 0; i < numberOfParticles; i++) { let size = (Math.random() * 3) + 1; let x = Math.random() * canvas.width; let y = Math.random() * canvas.height; let directionX = (Math.random() * 1) - 0.5; let directionY = (Math.random() * 1) - 0.5; particlesArray.push(new Particle(x, y, directionX, directionY, size)); } }
function animateParticles() { requestAnimationFrame(animateParticles); ctx.clearRect(0, 0, innerWidth, innerHeight); for (let i = 0; i < particlesArray.length; i++) particlesArray[i].update(); connectParticles(); }
function connectParticles() { let maxDistance = 140; for (let a = 0; a < particlesArray.length; a++) { for (let b = a; b < particlesArray.length; b++) { let distance = ((particlesArray[a].x - particlesArray[b].x) ** 2) + ((particlesArray[a].y - particlesArray[b].y) ** 2); if (distance < (maxDistance * maxDistance)) { let opacityValue = 1 - (distance / (maxDistance * maxDistance)); let lineColor = isLightMode ? `rgba(37, 99, 235, ${opacityValue * 0.5})` : `rgba(167, 139, 250, ${opacityValue * 0.2})`; ctx.strokeStyle = lineColor; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(particlesArray[a].x, particlesArray[a].y); ctx.lineTo(particlesArray[b].x, particlesArray[b].y); ctx.stroke(); } } } }
initParticles(); animateParticles();