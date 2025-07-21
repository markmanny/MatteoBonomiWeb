// Navbar active link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function() {
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

// Evidenzia la sezione attiva nella navbar durante lo scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

function activateNavLink() {
  let index = sections.length;
  while (--index >= 0) {
    const sectionTop = sections[index].getBoundingClientRect().top;
    if (sectionTop <= 80) {
      navLinks.forEach(link => link.classList.remove('active'));
      navLinks[index].classList.add('active');
      break;
    }
  }
}
window.addEventListener('scroll', activateNavLink);
window.addEventListener('DOMContentLoaded', activateNavLink);

// Animazione cards About quando appaiono
function showCardsOnScroll() {
  const cards = document.querySelectorAll('.card');
  const trigger = window.innerHeight * 0.85;
  cards.forEach((card, i) => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < trigger) {
      setTimeout(() => card.classList.add('visible'), i * 180);
    }
  });
}
window.addEventListener('scroll', showCardsOnScroll);
window.addEventListener('DOMContentLoaded', showCardsOnScroll);

document.addEventListener('DOMContentLoaded', function() {
  const profileImg = document.querySelector('.profile-img');
  if (profileImg) {
    profileImg.addEventListener('click', function() {
      this.classList.toggle('active');
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const bioCard = document.querySelector('.bio-card');
  if (bioCard) {
    setTimeout(() => bioCard.classList.add('animate'), 300);
  }
});

// Hamburger menu logic migliorato
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navUl = document.querySelector('nav ul');

  function closeMenu() {
    hamburger.classList.remove('active');
    navUl.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  }

  if (hamburger && navUl) {
    hamburger.addEventListener('click', function(e) {
      e.stopPropagation();
      const isOpen = hamburger.classList.toggle('active');
      navUl.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    navUl.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', function(e) {
      if (
        navUl.classList.contains('open') &&
        !navUl.contains(e.target) &&
        !hamburger.contains(e.target)
      ) {
        closeMenu();
      }
    });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        closeMenu();
      }
    });
  }
});

// Traduzione con interruttore
document.addEventListener('DOMContentLoaded', function() {
  const translations = {
    it: {
      home: "Home",
      about: "About",
      contact: "Contact",
      benvenuto: "Benvenuto!",
      subtitle: "Sviluppatore web & appassionato di tecnologia",
      competenze: "Le mie competenze",
      cyber: "Conoscenze nella protezione dei sistemi informatici e analisi delle vulnerabilità.",
      ranking: "Ranking Lingue",
      madrelingua: "Madrelingua",
      professionale: "Professionale",
      base: "Base",
      contattami: "Contattami",
      seguimi: "Seguimi su LinkedIn:",
      copyright: "Tutti i diritti riservati."
    },
    en: {
      home: "Home",
      about: "About",
      contact: "Contact",
      benvenuto: "Welcome!",
      subtitle: "Web developer & technology enthusiast",
      competenze: "My skills",
      cyber: "Knowledge in IT systems protection and vulnerability analysis.",
      ranking: "Language Ranking",
      madrelingua: "Native",
      professionale: "Professional",
      base: "Basic",
      contattami: "Contact me",
      seguimi: "Follow me on LinkedIn:",
      copyright: "All rights reserved."
    }
  };

  let currentLang = "it";
  const langToggle = document.getElementById('lang-toggle');

  function switchLang(to) {
    currentLang = to;
    // Navbar
    document.querySelectorAll('.nav-link')[0].textContent = translations[currentLang].home;
    document.querySelectorAll('.nav-link')[1].textContent = translations[currentLang].about;
    document.querySelectorAll('.nav-link')[2].textContent = translations[currentLang].contact;
    // Titolo e sottotitolo
    document.querySelector('.fade-in-title').textContent = translations[currentLang].benvenuto;
    document.querySelector('.fade-in-subtitle').textContent = translations[currentLang].subtitle;
    // Sezione competenze
    document.querySelector('.about-section h2').textContent = translations[currentLang].competenze;
    document.querySelector('.icon.cyber').parentElement.querySelector('p').textContent = translations[currentLang].cyber;
    // Ranking lingue
    document.querySelector('.languages h3').textContent = translations[currentLang].ranking;
    document.querySelectorAll('.level').forEach((el, i) => {
      if(i === 0) el.textContent = translations[currentLang].madrelingua;
      if(i === 1) el.textContent = "C2";
      if(i === 2) el.textContent = translations[currentLang].professionale;
      if(i === 3) el.textContent = translations[currentLang].base;
    });
    // Contattami
    document.querySelector('.contact-section h2').textContent = translations[currentLang].contattami;
    document.querySelector('.contact-box p').textContent = translations[currentLang].seguimi;
    // Footer
    document.querySelector('footer p').innerHTML = `&copy; 2025 Matteo Bonomi. ${translations[currentLang].copyright}`;
    // Bio card
    document.querySelector('.bio-text p').innerHTML = currentLang === "it"
      ? `Ciao! Sono Matteo, <strong>Sviluppatore Web</strong> e appassionato di tecnologia.<br>
        Ho un background linguistico maturato tra l’Italia e l’estero, come potrai vedere sul mio profilo LinkedIn, che mi ha permesso di sviluppare una forte apertura internazionale e ottime capacità comunicative.<br>
        Parallelamente, ho coltivato la mia passione per la programmazione, specializzandomi in <strong>HTML</strong>, <strong>CSS</strong> e <strong>Python</strong>, con un interesse crescente per la <strong>cybersecurity</strong>.`
      : `Hi! I'm Matteo, a <strong>Web Developer</strong> and technology enthusiast.<br>
        I have a linguistic background developed between Italy and abroad, as you can see on my LinkedIn profile, which has allowed me to develop a strong international openness and excellent communication skills.<br>
        At the same time, I cultivated my passion for programming, specializing in <strong>HTML</strong>, <strong>CSS</strong> and <strong>Python</strong>, with a growing interest in <strong>cybersecurity</strong>.`;
  }

  if(langToggle) {
    langToggle.addEventListener('change', function() {
      switchLang(this.checked ? "en" : "it");
    });
  }
});

// Animazione barre lingue
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.language-bar .progress-fill').forEach(function(bar) {
    const targetWidth = bar.getAttribute('data-width') || bar.style.width;
    bar.style.width = '0';
    setTimeout(() => {
      bar.style.width = targetWidth;
    }, 400); // ritardo per effetto animato
  });
});

//# sourceMappingURL=script.js.map