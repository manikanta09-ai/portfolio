// Portfolio Data
const portfolioData = {
    skills: [
        'Python', 'SQL', 'Java', 'Pandas', 'NumPy',
        'Machine Learning', 'Power BI', 'Excel',
        'OpenCV', 'HTML', 'CSS', 'JavaScript'
    ],
    projects: [
        {
            name: 'Face Mask Detection System',
            description: 'Developed a Convolutional Neural Network (CNN) based face mask classifier to detect mask usage in real-time. Preprocessed and trained the model on a labeled dataset sourced from Kaggle to achieve high detection accuracy. Integrated OpenCV for real-time video feed processing and prediction visualization.',
            tools: ['Python', 'OpenCV', 'Kaggle Dataset']
        },
        {
            name: 'Computer Vision–Based Tool Detection Using Custom YOLOv8 Model',
            description: 'Developed a custom multi-class computer vision model using YOLOv8 to detect and classify 80+ industrial tools within workstation environments. Built a unified annotated dataset using Roboflow with preprocessing, augmentation, and class remapping, significantly improving model robustness and detection accuracy for real-world deployment.',
            tools: ['Python', 'YOLOv8', 'Roboflow', 'OpenCV', 'Google Colab']
        },
        {
            name: 'EarlyGuard — Community-Driven Disaster Early Warning System',
            description: 'Developed an IoT-based disaster alert system for rural areas using mesh networks and FM radio to ensure offline operation during network failures.',
            tools: ['ESP32', 'LoRa', 'FM Radio (Si4713)', 'IoT Sensors', 'Machine Learning']
        },
        {
            name: 'Driver Drowsiness Detection and Alert System',
            description: 'Built a real-time driver drowsiness monitoring system using facial landmark detection and Eye Aspect Ratio (EAR) to identify eye closure and fatigue. Implemented automated alert generation (audio alarm) when prolonged eye closure or yawning was detected, improving system responsiveness in low-light and dynamic conditions.',
            tools: ['Python', 'OpenCV', 'MediaPipe', 'NumPy']
        },
        {
            name: 'Customer Churn Analysis Dashboard',
            description: 'Analyzed customer behavior and historical usage data to identify key churn drivers. Performed data preprocessing and exploratory data analysis (EDA) using Python. Built interactive dashboards to visualize churn rate, CLTV, and retention trends. Provided actionable insights to support data-driven business decisions.',
            tools: ['Python', 'Pandas', 'SQL', 'Power BI']
        },
        {
            name: 'Mobile Sales Trends Analysis',
            description: 'Conducted EDA on mobile sales datasets to uncover demand and sales trends. Cleaned and transformed datasets by handling missing values and inconsistent formats. Identified seasonal and product-level trends for strategic planning.',
            tools: ['Python', 'Pandas', 'Excel']
        },
        {
            name: 'Real-Time Hand Gesture Recognition for Interactive Systems',
            description: 'Developed a real-time, training-free hand gesture recognition system using HSV + YCrCb skin color models combined with landmark-based geometric analysis for accurate gesture detection. Implemented rule-based classification using finger extension and thumb orientation to recognize gestures such as Open Palm, Fist, Two-Finger V, Pointing, Thumbs Up/Down, achieving ~92.5% accuracy on CPU-only systems.',
            tools: ['Python', 'OpenCV', 'MediaPipe', 'NumPy']
        }
    ]
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeNavigation();
    populateSkills();
    populateProjects();
    setupSmoothScroll();
});

// Navigation
function initializeNavigation() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking a link
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
    
    // Active link highlighting
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.style.color = '';
                });
                if (navLink) {
                    navLink.style.color = 'var(--accent)';
                }
            }
        });
    });
}

// Populate Skills
function populateSkills() {
    const skillsContainer = document.getElementById('skills-container');
    if (!skillsContainer) return;
    
    portfolioData.skills.forEach(skill => {
        const skillTag = document.createElement('div');
        skillTag.className = 'skill-tag';
        const skillSpan = document.createElement('span');
        skillSpan.textContent = skill;
        skillTag.appendChild(skillSpan);
        skillsContainer.appendChild(skillTag);
    });
}

// Populate Projects
function populateProjects() {
    const projectsContainer = document.getElementById('projects-container');
    if (!projectsContainer) return;
    
    portfolioData.projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        const title = document.createElement('h3');
        title.textContent = project.name;
        
        const description = document.createElement('p');
        description.textContent = project.description;
        
        projectCard.appendChild(title);
        projectCard.appendChild(description);
        
        // Add tools if available
        if (project.tools && project.tools.length > 0) {
            const toolsContainer = document.createElement('div');
            toolsContainer.className = 'project-tools';
            project.tools.forEach(tool => {
                const toolTag = document.createElement('span');
                toolTag.className = 'project-tool';
                toolTag.textContent = tool;
                toolsContainer.appendChild(toolTag);
            });
            projectCard.appendChild(toolsContainer);
        }
        
        projectsContainer.appendChild(projectCard);
    });
}

// Smooth Scroll
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section > *');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });
});
