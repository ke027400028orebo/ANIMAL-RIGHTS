// =========================================
// MOBILE NAVIGATION
// =========================================
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

if (burger && nav) {
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });
}

// =========================================
// DYNAMIC YEAR IN FOOTER
// =========================================
const yearSpan = document.getElementById('year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// =========================================
// REPORT FORM SUBMISSION
// =========================================
const reportForm = document.getElementById('reportForm');
if (reportForm) {
    reportForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const location = document.getElementById('location').value;
        const abuseType = document.getElementById('abuse-type').value;
        
        if (name && email && location && abuseType) {
            alert(`✅ Thank you ${name}!\n\nYour report has been submitted successfully.\nWe will contact you at ${email} soon.\n\nTogether we can protect animals! 🐾`);
            reportForm.reset();
        } else {
            alert('❌ Please fill in all required fields.');
        }
    });
}

// =========================================
// EFFECTS PAGE FUNCTIONS
// =========================================
function showPawPrints() {
    const content = document.getElementById('effect-content');
    if (!content) return;
    
    content.innerHTML = '<h3>🐾 Move your mouse around the page!</h3><p>Paw prints will follow your cursor.</p>';
    
    const handleMouseMove = (e) => {
        const paw = document.createElement('div');
        paw.classList.add('paw-print');
        paw.innerHTML = '<i class="fas fa-paw"></i>';
        paw.style.left = e.pageX + 'px';
        paw.style.top = e.pageY + 'px';
        document.body.appendChild(paw);
        
        setTimeout(() => paw.remove(), 2000);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    setTimeout(() => {
        document.removeEventListener('mousemove', handleMouseMove);
    }, 10000);
}

function showFacts() {
    const facts = [
        "🐘 Elephants are the only mammals that can't jump!",
        "🐙 Octopuses have three hearts!",
        "🐝 Honeybees can recognize human faces!",
        "🐬 Dolphins sleep with one eye open!",
        "🐄 Cows have best friends and get stressed when separated!"
    ];
    
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    
    const content = document.getElementById('effect-content');
    if (!content) return;
    
    content.innerHTML = `
        <div class="fun-fact">
            <h3>💡 Fun Animal Fact</h3>
            <p style="font-size: 1.3rem; margin-top: 1rem;">${randomFact}</p>
            <button class="btn btn-secondary" onclick="showFacts()" style="margin-top: 1rem;">Get Another Fact</button>
        </div>
    `;
}

function showPledge() {
    const content = document.getElementById('effect-content');
    if (!content) return;
    
    content.innerHTML = `
        <div style="text-align: center;">
            <h3>🤝 Animal Rights Pledge</h3>
            <p style="margin: 1rem 0; color: #666;">I promise to:</p>
            <ul style="text-align: left; max-width: 400px; margin: 1rem auto; color: #555;">
                <li>✓ Treat all animals with kindness</li>
                <li>✓ Never support animal cruelty</li>
                <li>✓ Spread awareness about animal rights</li>
                <li>✓ Report abuse when I see it</li>
            </ul>
            <button class="btn btn-primary" onclick="alert('Thank you for taking the pledge! 🐾')">I Pledge!</button>
        </div>
    `;
}

// =========================================
// SMOOTH SCROLL FOR NAVIGATION
// =========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                if (nav && nav.classList.contains('nav-active')) {
                    nav.classList.remove('nav-active');
                }
            }
        }
    });
});

// =========================================
// CONSOLE MESSAGE
// =========================================
console.log('%c🐾 Welcome to Animal Rights Organization! 🐾', 'color: #2ecc71; font-size: 20px; font-weight: bold;');
console.log('%cJoin us in making a difference for animals worldwide.', 'color: #666; font-size: 14px;');