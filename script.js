const portfolioData = {
  personal: {
    name: "Om Prakash Borse",
    roles: [
      "Computer Engineering Student",
      "MERN Stack Developer",
      "Java Developer",
      "Machine Learning Enthusiast"
    ],
    kicker: "Welcome to my portfolio",
    tagline:
      "B.Tech Computer Engineering student building practical web applications, full-stack platforms, and AI-driven solutions with a focus on real-world impact.",
    about:
      "I am Om Prakash Borse, a B.Tech Computer Engineering student at MPSTME, NMIMS University. I enjoy building software that solves practical problems, from machine learning based security solutions to Java desktop systems and full-stack MERN applications. I am continuously strengthening my development skills through projects, internships, workshops, and technical events.",
    highlights: [
      "Built projects across machine learning, desktop development, and full-stack web development.",
      "Completed web development internship and strengthened responsive frontend development skills.",
      "Currently gaining industry exposure as an Industrial Trainee while contributing to live projects.",
      "Interested in internships, placements, and collaborative software development opportunities."
    ],
    profileImage: "assets/Gemini_Generated_Image_l21nsbl21nsbl21n.png",
    resume: "assets/Om_Borse_CV_7.pdf",
    email: "omborse771924@gmail.com",
    phone: "9404190904",
    location: "Shirpur, Maharashtra, India"
  },

  socialLinks: [
    { name: "LinkedIn", icon: "fab fa-linkedin-in", url: "https://www.linkedin.com/in/om-borse-21066928b/" },
  { name: "GitHub", icon: "fab fa-github", url: "https://github.com/omborse771924" },
  { name: "Phishing Project", icon: "fa-solid fa-shield-halved", url: "https://github.com/omborse771924/FishingGuard_Neo_UI" },
  { name: "Resume", icon: "fa-solid fa-file-lines", url: "assets/Om_Borse_CV_7.pdf" }
  ],

  education: [
    {
      title: "B.Tech in Computer Engineering",
      organization: "MPSTME, NMIMS University",
      date: "2023 - 2027",
      description: "CGPA: 2.96 / 4"
    },
    {
      title: "Higher Secondary Certificate (HSC)",
      organization: "S.P.D.M. Arts & Science College, Shirpur",
      date: "2021 - 2023",
      description: "Score: 81.17%"
    },
    {
      title: "Secondary School Certificate (SSC)",
      organization: "R.C. Patel English Medium School, Shirpur",
      date: "2020 - 2021",
      description: "Score: 91.60%"
    }
  ],

  skills: {
    bars: [
      { name: "HTML & CSS", level: 92 },
      { name: "JavaScript", level: 88 },
      { name: "Java", level: 85 },
      { name: "Python", level: 82 },
      { name: "MERN Stack", level: 84 },
      { name: "Problem Solving", level: 87 }
    ],
    chips: [
      "C",
      "C++",
      "Java",
      "Python",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Design",
      "Android Development",
      "XML",
      "MySQL",
      "Firebase",
      "MongoDB (Basic)",
      "VS Code",
      "Git",
      "GitHub",
      "Android Studio",
      "Eclipse",
      "Team Collaboration",
      "Time Management",
      "Adaptability",
      "Analytical Thinking"
    ]
  },

  experience: [
    {
      title: "Web Development Intern",
      organization: "Coding Raja",
      date: "4 May - 4 June",
      points: [
        "Completed a one month internship in web development.",
        "Developed responsive web pages using HTML, CSS, and JavaScript.",
        "Strengthened frontend development skills through hands-on implementation."
      ]
    },
    {
  title: "App Development Intern",
  organization: "CodSoft",
  date: "20 Aug 2025 - 20 Sep 2025",
  points: [
    "Completed a 1-month internship focused on application development.",
    "Worked on real-world app-based projects using modern technologies.",
    "Improved problem-solving and development skills through hands-on tasks."
    ]
   },
    {
      title: "Industrial Trainee",
      organization: "Being Ambitious",
      date: "1 Nov 2025 - Present",
      points: [
        "Contributing to live projects while collaborating with the development team.",
        "Participating in structured training to enhance technical and professional skills.",
        "Gaining practical exposure to industry workflows and project execution."
      ]
    }
  ],

  projects: [
    {
      title: "AI Powered Phishing Website Detection System",
      description:
        "Built a machine learning based system to detect phishing websites through URL feature analysis and classification using Python.",
      techStack: ["Python", "Machine Learning", "URL Feature Analysis"],
      image: "assets/project-1.svg",
      liveLink: "",
      githubLink: "https://github.com/omborse771924/FishingGuard_Neo_UI"
    },
    {
      title: "Electricity Billing System",
      description:
        "Developed a desktop based electricity billing system using Core Java (Swing & AWT) with MySQL in IntelliJ IDEA to manage consumer records and generate electricity bills.",
      techStack: ["Java", "Swing", "AWT", "MySQL"],
      image: "assets/project-2.svg",
      liveLink: "",
      githubLink: ""
    },
    {
      title: "MERN Social Media App",
      description:
        "Developed a full-stack social media platform using the MERN stack with user authentication, post creation, likes, comments, and real-time interactions.",
      techStack: ["MongoDB", "Express", "React", "Node.js"],
      image: "assets/project-3.svg",
      liveLink: "",
      githubLink: ""
    }
  ],

  certifications: [
    {
      title: "C Programming Certification",
      organization: "MKCL",
      file: ""
    },
    {
      title: "C++ Programming Certification",
      organization: "MKCL",
      file: "assets/mkcl_certificate.jpeg"
    }
  ],

  achievements: [
    "Secured 1st Prize in Abacus competitions at District and State levels.",
    "Earned an Abacus degree, demonstrating strong mental calculation and analytical ability.",
    "Successfully completed multiple industry internships in web development, app development, and e-commerce platforms.",
    "Actively participated in college level hackathons, workshops, and technical events."
  ],

  activities: [
    "Active participant in college level hackathons.",
    "Regularly attends workshops and technical events.",
    "Continuously explores new technologies through project-based learning."
  ],

  languages: [
    { name: "English", level: "Professional" },
    { name: "Hindi", level: "Fluent" },
    { name: "German", level: "Basic" }
  ]
};

function createDisabledButton(label, iconClass) {
  return `
    <a class="btn btn-secondary disabled-link" aria-disabled="true">
      <i class="${iconClass}"></i> ${label}
    </a>
  `;
}

function safeLinkButton(label, iconClass, url, extraClass = "btn btn-secondary") {
  if (!url || url.trim() === "") return createDisabledButton(label, iconClass);
  return `
    <a href="${url}" class="${extraClass}" target="_blank" rel="noopener noreferrer">
      <i class="${iconClass}"></i> ${label}
    </a>
  `;
}

window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  setTimeout(() => preloader.classList.add("hide"), 700);
});

function renderPortfolio() {
  const { personal, socialLinks, education, skills, experience, projects, certifications, achievements, activities, languages } = portfolioData;

  document.title = `${personal.name} | Portfolio`;
  document.getElementById("navLogoText").textContent = personal.name;
  document.getElementById("heroKicker").textContent = personal.kicker;
  document.getElementById("heroName").textContent = personal.name;
  document.getElementById("heroDescription").textContent = personal.tagline;
  document.getElementById("profileImage").src = personal.profileImage;
  document.getElementById("profileImage").alt = `${personal.name} profile photo`;
  document.getElementById("resumeBtn").href = personal.resume;
  document.getElementById("aboutText").textContent = personal.about;
  document.getElementById("footerName").textContent = personal.name;
  document.getElementById("footerTagline").textContent = personal.tagline;

  document.querySelectorAll(".counter")[0].dataset.target = projects.length;
  document.querySelectorAll(".counter")[1].dataset.target = certifications.length;
  document.querySelectorAll(".counter")[2].dataset.target = achievements.length;

  const socialHTML = socialLinks.map((item) => {
    if (!item.url) {
      return `<span class="social-icon disabled-link" title="Link not available yet" aria-label="${item.name}"><i class="${item.icon}"></i></span>`;
    }
    return `<a class="social-icon" href="${item.url}" target="_blank" rel="noopener noreferrer" aria-label="${item.name}"><i class="${item.icon}"></i></a>`;
  }).join("");

  document.getElementById("heroSocials").innerHTML = socialHTML;
  document.getElementById("footerSocials").innerHTML = socialHTML;

  document.getElementById("aboutHighlights").innerHTML = personal.highlights.map((point) => `<li>${point}</li>`).join("");

  document.getElementById("educationTimeline").innerHTML = education.map((item) => `
    <div class="timeline-item reveal">
      <span class="timeline-date">${item.date}</span>
      <h3>${item.title}</h3>
      <h4>${item.organization}</h4>
      <p>${item.description}</p>
    </div>`).join("");

  document.getElementById("skillsBars").innerHTML = `
    <h3>Core Skills</h3>
    ${skills.bars.map((skill) => `
      <div class="skill-bar">
        <div class="skill-head"><span>${skill.name}</span><span>${skill.level}%</span></div>
        <div class="skill-progress"><span data-width="${skill.level}%"></span></div>
      </div>`).join("")}`;

  document.getElementById("skillsChips").innerHTML = `
    <h3>Tools & Technologies</h3>
    <div class="skills-chips-list">
      ${skills.chips.map((chip) => `<span class="skill-chip">${chip}</span>`).join("")}
    </div>`;

  document.getElementById("experienceTimeline").innerHTML = experience.map((item) => `
    <div class="timeline-item reveal">
      <span class="timeline-date">${item.date}</span>
      <h3>${item.title}</h3>
      <h4>${item.organization}</h4>
      <ul>${item.points.map((point) => `<li>${point}</li>`).join("")}</ul>
    </div>`).join("");

  document.getElementById("projectsGrid").innerHTML = projects.map((project) => `
    <article class="card reveal">
      <div class="card-image"><img src="${project.image}" alt="${project.title}"></div>
      <div class="card-body">
        <h3 class="card-title">${project.title}</h3>
        <p class="card-text">${project.description}</p>
        <div class="tech-stack">${project.techStack.map((tech) => `<span>${tech}</span>`).join("")}</div>
        <div class="card-actions">
          ${safeLinkButton("View Project", "fa-solid fa-arrow-up-right-from-square", project.liveLink, "btn btn-primary")}
          ${safeLinkButton("GitHub", "fab fa-github", project.githubLink, "btn btn-secondary")}
        </div>
      </div>
    </article>`).join("");

  document.getElementById("certificationsGrid").innerHTML = certifications.map((cert) => `
    <article class="card reveal">
      <div class="card-body">
        <p class="card-subtitle">${cert.organization}</p>
        <h3 class="card-title">${cert.title}</h3>
        <p class="card-text">Certification listed in resume. Add the certificate file or URL to activate the button.</p>
        <div class="card-actions">
          ${safeLinkButton("View Certificate", "fa-solid fa-certificate", cert.file, "btn btn-primary")}
        </div>
      </div>
    </article>`).join("");

  document.getElementById("achievementsGrid").innerHTML = achievements.map((item) => `
    <div class="mini-card reveal"><h3>Achievement</h3><p>${item}</p></div>`).join("");

  document.getElementById("activitiesGrid").innerHTML = activities.map((item) => `
    <div class="mini-card reveal"><h3>Activity</h3><p>${item}</p></div>`).join("");

  document.getElementById("languagesGrid").innerHTML = languages.map((lang) => `
    <div class="language-card reveal"><h3>${lang.name}</h3><p>${lang.level}</p></div>`).join("");

  document.getElementById("contactInfo").innerHTML = `
    <div class="contact-item">
      <i class="fa-solid fa-location-dot"></i>
      <div>
        <h4>Location</h4>
        <p>${personal.location}</p>
      </div>
    </div>
    <div class="contact-item">
      <i class="fa-solid fa-user"></i>
      <div>
        <h4>Availability</h4>
        <p>Open to internships, collaborations, and software development opportunities.</p>
      </div>
    </div>
    <div class="contact-item">
      <i class="fa-solid fa-file-lines"></i>
      <div>
        <h4>Resume</h4>
        <a href="${personal.resume}" target="_blank" rel="noopener noreferrer">Open resume document</a>
      </div>
    </div>`;
}

renderPortfolio();

function typingEffect(words, elementId, speed = 90, eraseSpeed = 50, pause = 1300) {
  const element = document.getElementById(elementId);
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentWord = words[wordIndex];
    if (!isDeleting) {
      element.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(type, pause);
        return;
      }
      setTimeout(type, speed);
    } else {
      element.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
      setTimeout(type, eraseSpeed);
    }
  }
  type();
}

typingEffect(portfolioData.personal.roles, "typingText");

const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");
navToggle.addEventListener("click", () => navMenu.classList.toggle("show"));
navLinks.forEach((link) => link.addEventListener("click", () => navMenu.classList.remove("show")));

const sections = document.querySelectorAll("section[id]");
function updateActiveNav() {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 140;
    const sectionHeight = section.offsetHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) current = section.getAttribute("id");
  });
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) link.classList.add("active");
  });
}


function updateScrollProgress() {
  const scrollProgress = document.getElementById("scroll-progress");
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = (scrollTop / scrollHeight) * 100;
  scrollProgress.style.width = `${progress}%`;
}

document.getElementById("resumeBtn").addEventListener("click", function () {
  setTimeout(() => {
    window.open("assets/mkcl_certificate.jpeg", "_blank");
  }, 2000);
});

const backToTop = document.getElementById("backToTop");
function handleBackToTop() {
  if (window.scrollY > 500) backToTop.classList.add("show");
  else backToTop.classList.remove("show");
}
backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

const revealElements = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.16 });
revealElements.forEach((el) => revealObserver.observe(el));

const counters = document.querySelectorAll(".counter");
let counterStarted = false;
function runCounters() {
  if (counterStarted) return;
  const statsSection = document.querySelector(".hero-stats");
  const rect = statsSection.getBoundingClientRect();
  if (rect.top < window.innerHeight - 60) {
    counters.forEach((counter) => {
      const target = +counter.getAttribute("data-target");
      let current = 0;
      const increment = Math.max(1, Math.ceil(target / 40));
      const update = () => {
        current += increment;
        if (current >= target) counter.textContent = target;
        else { counter.textContent = current; requestAnimationFrame(update); }
      };
      update();
    });
    counterStarted = true;
  }
}

let skillAnimated = false;
function animateSkillBars() {
  if (skillAnimated) return;
  const skillsSection = document.getElementById("skills");
  const rect = skillsSection.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    document.querySelectorAll(".skill-progress span").forEach((bar) => bar.style.width = bar.dataset.width);
    skillAnimated = true;
  }
}

const contactForm = document.getElementById("contactForm");
const formSuccess = document.getElementById("formSuccess");
function setError(input, message) {
  const errorElement = input.parentElement.querySelector(".error");
  errorElement.textContent = message;
}
function clearError(input) {
  const errorElement = input.parentElement.querySelector(".error");
  errorElement.textContent = "";
}
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  let isValid = true;
  formSuccess.textContent = "";

  if (name.value.trim() === "") { setError(name, "Please enter your name."); isValid = false; } else clearError(name);
  if (email.value.trim() === "") { setError(email, "Please enter your email."); isValid = false; }
  else if (!validateEmail(email.value.trim())) { setError(email, "Please enter a valid email address."); isValid = false; }
  else clearError(email);
  if (message.value.trim().length < 10) { setError(message, "Message must be at least 10 characters long."); isValid = false; }
  else clearError(message);

  if (isValid) {
    formSuccess.textContent = "Message validated successfully. Connect this form to Formspree or EmailJS for real submissions.";
    contactForm.reset();
  }
});

window.addEventListener("scroll", () => {
  updateActiveNav();
  updateScrollProgress();
  handleBackToTop();
  runCounters();
  animateSkillBars();
});
window.addEventListener("DOMContentLoaded", () => {
  updateActiveNav();
  updateScrollProgress();
  handleBackToTop();
  runCounters();
  animateSkillBars();
});
