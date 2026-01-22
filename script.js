// =======================
// Portfolio Data
// =======================
const portfolioData = {
    skills: [
        'Python', 'SQL', 'Java', 'Pandas', 'NumPy',
        'Machine Learning', 'Power BI', 'Excel',
        'OpenCV', 'HTML', 'CSS', 'JavaScript'
    ],

    projects: [
        {
            name: 'Face Mask Detection System',
            description:
                'Developed a CNN-based face mask classifier for real-time detection using OpenCV and a Kaggle dataset.',
            tools: ['Python', 'OpenCV', 'Kaggle Dataset'],
            github: 'https://github.com/manikanta09-ai/face-mask-detection'
        },
        {
            name: 'Computer Vision–Based Tool Detection (YOLOv8)',
            description:
                'Built a custom YOLOv8 multi-class object detection model for identifying industrial tools using Roboflow.',
            tools: ['Python', 'YOLOv8', 'Roboflow', 'OpenCV', 'Google Colab'],
            github: 'https://github.com/manikanta09-a'
        },
        {
            name: 'EarlyGuard — Disaster Early Warning System',
            description:
                'IoT-based disaster alert system using mesh networks and FM radio for offline rural communication.',
            tools: ['ESP32', 'LoRa', 'FM Radio (Si4713)', 'IoT Sensors', 'Machine Learning'],
            github: 'https://github.com/manikanta09-a'
        },
        {
            name: 'Driver Drowsiness Detection System',
            description:
                'Real-time driver fatigue monitoring using facial landmarks and Eye Aspect Ratio (EAR) with alert generation.',
            tools: ['Python', 'OpenCV', 'MediaPipe', 'NumPy'],
            github: 'https://github.com/manikanta09-ai/Drowsiness-Detection'
        },
        {
            name: 'Customer Churn Analysis Dashboard',
            description:
                'Performed EDA and built interactive dashboards to analyze churn drivers and retention trends.',
            tools: ['Python', 'Pandas', 'SQL', 'Power BI'],
            github: 'https://github.com/manikanta09-a'
        },
        {
            name: 'Mobile Sales Trends Analysis',
            description:
                'Conducted EDA on mobile sales data to uncover demand patterns and seasonal trends.',
            tools: ['Python', 'Pandas', 'Excel'],
            github: 'https://github.com/manikanta09-ai/mobile_sales_trends'
        },
        {
            name: 'Real-Time Hand Gesture Recognition',
            description:
                'Training-free hand gesture recognition using HSV + YCrCb skin models and landmark-based geometry.',
            tools: ['Python', 'OpenCV', 'MediaPipe', 'NumPy'],
            github: 'https://github.com/manikanta09-a'
        }
    ]
};

// =======================
// Initialization
// =======================
document.addEventListener('DOMContentLoaded', () => {
    initializeNavigation();
    populateSkills();
    populateProjects();
    setupSmoothScroll();
    setupScrollAnimations();
});

// =======================
// Navigation
// =======================
function initializeNavigation() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

// =======================
// Populate Skills
// =======================
function populateSkills() {
    const skillsContainer = document.getElementById('skills-container');
    if (!skillsContainer) return;

    portfolioData.skills.forEach(skill => {
        const tag = document.createElement('div');
        tag.className = 'skill-tag';
        tag.textContent = skill;
        skillsContainer.appendChild(tag);
    });
}

// =======================
// Populate Projects
// =======================
function populateProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;

    portfolioData.projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';

        const title = document.createElement('h3');
        title.textContent = project.name;

        const desc = document.createElement('p');
        desc.textContent = project.description;

        card.appendChild(title);
        card.appendChild(desc);

        // Tools
        if (project.tools) {
            const toolsDiv = document.createElement('div');
            toolsDiv.className = 'project-tools';

            project.tools.forEach(tool => {
                const span = document.createElement('span');
                span.className = 'project-tool';
                span.textContent = tool;
                toolsDiv.appendChild(span);
            });

            card.appendChild(toolsDiv);
        }

        // GitHub Link
        if (project.github) {
            const link = document.createElement('a');
            link.href = project.github;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.className = 'project-github';
            link.textContent = 'GitHub ↗';
            card.appendChild(link);
        }

        container.appendChild(card);
    });
}

// =======================
// Smooth Scroll
// =======================
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// =======================
// Scroll Animations
// =======================
function setupScrollAnimations() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section > *').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = '0.6s ease';
        observer.observe(el);
    });
}
