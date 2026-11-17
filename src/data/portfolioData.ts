import { Project, LiveWebApp, JournalEntry, ExplorationItem, ExperienceItem, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: 'Moncef Boucheloukh',
  title: 'Software Engineer',
  degree: "Master's in Legal Multimedia Informatics",
  location: 'Taher, Jijel, Algeria',
  email: 'monsafmooo@gmail.com',
  phone: '0666387871',
  phoneIntl: '+213666387871',
  github: 'https://github.com/Moncefnl',
  githubUsername: 'Moncefnl',
  linkedin: 'https://www.linkedin.com/in/moncef-boucheloukh-25901819b/',
  linkedinUsername: 'moncef-boucheloukh-25901819b',
  roles: [
    'Software Engineer',
    'Fullstack Developer',
    'Legal Multimedia Specialist',
    'Computer Vision Builder',
    'CS Instructor',
  ],
  bio: "Discipline-driven Computer Science Master's graduate specializing in Legal Multimedia Informatics. Combines strong multi-language programming skills with diverse practical experience spanning academic instruction and technical support. Adept at analytical problem-solving and eager to contribute to complex IT and software development projects.",
  shortBio: 'Designing high-performance systems, robust cloud architectures, and computer vision pipelines with mathematical precision.',
};

export const PROJECTS: Project[] = [
  {
    id: 'traffic-violation-detection',
    title: 'Traffic Violation Detection System',
    category: 'Computer Vision & AI',
    tagline: 'Real-time intelligent highway video surveillance and rule violation analytics.',
    description:
      'Real-time video analysis system detecting road traffic violations using YOLO object detection and OpenCV frame processing.',
    fullDetails:
      'A high-throughput computer vision engine capable of streaming live CCTV feeds, isolating bounding boxes for vehicles, pedestrians, and lane lines. Utilizes custom YOLO weights trained on dynamic highway conditions, coupled with OpenCV contour extraction for red light infractions, illegal turns, speed telemetry, and improper lane switching.',
    stack: ['Python', 'OpenCV', 'YOLO', 'NumPy', 'Deep Learning', 'PyTorch'],
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
    span: 'col-span-1 md:col-span-7',
    aspectRatio: 'aspect-[16/10]',
    githubUrl: 'https://github.com/Moncefnl',
    metrics: ['Real-time 60 FPS processing', '98.2% Detection Accuracy', 'Sub-20ms inference latency'],
    keyFeatures: [
      'Multi-vehicle tracking with DeepSORT algorithm integration',
      'Automated license plate identification and OCR extraction pipeline',
      'Configurable bounding virtual polygon triggers for speed traps & red lights',
      'Event snapshot logging with tamper-proof timestamping',
    ],
  },
  {
    id: 'legal-multimedia-informatics',
    title: 'Legal Multimedia Forensic Engine',
    category: 'Informatics & Forensics',
    tagline: 'Authenticating digital video, audio, and metadata for legal judicial standards.',
    description:
      "Advanced research platform engineered during Master's thesis focusing on digital evidence verification, EXIF anomaly detection, and deepfake analysis.",
    fullDetails:
      'Engineered an automated digital forensic toolset designed to parse raw video bitstreams, analyze frame rate cadence, detect localized resampling or pixel cloning, and verify cryptographic hashes of multimedia artifacts for court compliance.',
    stack: ['Python', 'C++', 'Metadata Forensics', 'FFmpeg', 'Signal Processing'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    span: 'col-span-1 md:col-span-5',
    aspectRatio: 'aspect-[4/3] md:aspect-[16/10]',
    githubUrl: 'https://github.com/Moncefnl',
    metrics: ['Bitstream level verification', 'Cryptographic SHA-256 chain', 'Court-admissible reports'],
    keyFeatures: [
      'Error Level Analysis (ELA) and double-compression artifacts detection',
      'Container level metadata integrity audit against sensor profiles',
      'Automated audit report generation in structured JSON / PDF formats',
    ],
  },
  {
    id: 'freelance-web-ecosystem',
    title: 'High-Performance Web Suite',
    category: 'Fullstack & Systems',
    tagline: '5 scalable dynamic web apps with query optimization and sub-second load times.',
    description:
      'Engineered and deployed 5 comprehensive commercial dynamic web applications. Optimized database schemas and indexes, reducing average query execution times by 25%.',
    fullDetails:
      'End-to-end fullstack engineering for commercial clients. Implemented dynamic PHP, React, and JavaScript user interfaces, customized secure WordPress/WooCommerce architectures, and refactored relational database queries to handle high concurrency with zero bottleneck.',
    stack: ['PHP', 'React', 'JavaScript', 'MySQL', 'WordPress/WooCommerce', 'CSS3/Tailwind'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    span: 'col-span-1 md:col-span-5',
    aspectRatio: 'aspect-[4/3] md:aspect-[16/10]',
    githubUrl: 'https://github.com/Moncefnl',
    metrics: ['25% Query Latency Drop', '5 Production Systems Shipped', '99.9% Up-time'],
    keyFeatures: [
      'Custom database indexing and relational caching layer',
      'Responsive component-driven UI with cross-browser compatibility',
      'Stripe & local payment gateway webhook synchronization',
      'Automated backup and database migration pipelines',
    ],
  },
  {
    id: 'cloud-microservices-infrastructure',
    title: 'Cloud Microservices & CI/CD Pipeline',
    category: 'Cloud & DevOps',
    tagline: 'Containerized microservices orchestration, automated testing, and zero-downtime deployment.',
    description:
      'Modular microservices architecture built with Docker, Kubernetes, AWS cloud components, and automated Git CI/CD pipelines with TDD test suites.',
    fullDetails:
      'Architected distributed RESTful services communicating through asynchronous message brokers and API gateways. Established complete containerization with Docker multi-stage builds, Kubernetes pod autoscaling, and automated test runners enforcing high code coverage.',
    stack: ['Docker', 'Kubernetes', 'AWS', 'RESTful APIs', 'CI/CD', 'Git', 'TDD'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    span: 'col-span-1 md:col-span-7',
    aspectRatio: 'aspect-[16/10]',
    githubUrl: 'https://github.com/Moncefnl',
    metrics: ['Zero-downtime deployments', '100% Containerized', 'Automated TDD Test Suite'],
    keyFeatures: [
      'Kubernetes ingress controllers and load-balancing strategy',
      'GitHub Actions pipeline with security scanning and automated linting',
      'Health check probes and distributed observability logging',
      'System design adhering strictly to 12-factor application methodology',
    ],
  },
  {
    id: 'technova-smart-store',
    title: 'Technova — متجري الذكي (منصة التجارة الإلكترونية)',
    category: 'SaaS & E-Commerce',
    tagline: 'منصة تجارة إلكترونية ذكية متكاملة (SaaS) مصممة خصيصاً للسوق الجزائري',
    description:
      'منصة تجارة إلكترونية ذكية متكاملة (SaaS) تتيح للتجار إنشاء وتخصيص وإدارة متاجرهم الإلكترونية بسهولة، مع بوابة دخول مخصصة للتجار وواجهة تسوق عصرية سريعة الاستجابة مصممة خصيصاً للسوق الجزائري.',
    fullDetails:
      'منصة تجارة إلكترونية ذكية متكاملة (SaaS) تتيح للتجار إنشاء وتخصيص وإدارة متاجرهم الإلكترونية بسهولة، مع بوابة دخول مخصصة للتجار ولوحة تحكم لإدارة المنتجات والطلبات، بالإضافة إلى واجهة تسوق عصرية سريعة الاستجابة مصممة خصيصاً لتلبية احتياجات التجار والمتسوقين في السوق الجزائري.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'E-Commerce UI/UX', 'Vercel'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80',
    span: 'col-span-1 md:col-span-12',
    aspectRatio: 'aspect-[16/9] md:aspect-[21/9]',
    demoUrl: 'https://store-technova.vercel.app',
    metrics: ['منصة SaaS متكاملة للتجار', 'بوابة دخول مخصصة للتجار', 'مصممة خصيصاً للسوق الجزائري'],
    keyFeatures: [
      'إنشاء وتخصيص وإدارة المتاجر الإلكترونية بمرونة وسرعة فائقة',
      'بوابة دخول مخصصة للتجار لإدارة المنتجات، الطلبات، وإعدادات المتجر',
      'واجهة تسوق عصرية سريعة الاستجابة متوافقة مع مختلف الأجهزة والشاشات',
      'تجربة مستخدم مصممة خصيصاً لمتطلبات التجارة الإلكترونية في السوق الجزائري',
    ],
    isRtl: true,
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
    category: 'languages',
    skills: [
      { name: 'Python', level: 'Advanced / ML & Vision' },
      { name: 'Java', level: 'Enterprise & OOP' },
      { name: 'C', level: 'Low-level & Memory' },
      { name: 'C++', level: 'High Performance & Systems' },
      { name: 'PHP', level: 'Fullstack & Backend' },
      { name: 'CSS3', level: 'Modern Layouts & Tailwind' },
    ],
  },
  {
    title: 'Web & Frameworks',
    category: 'web',
    skills: [
      { name: 'React', level: 'SPA & State Management' },
      { name: 'NumPy', level: 'Numerical Computing' },
      { name: 'WordPress / WooCommerce', level: 'Custom Architectures' },
      { name: 'HTML5 & Modern JS/TS', level: 'Responsive Ecosystem' },
      { name: 'OpenCV', level: 'Computer Vision' },
    ],
  },
  {
    title: 'DevOps & Cloud Computing',
    category: 'devops',
    skills: [
      { name: 'Git / GitHub', level: 'Version Control & Workflows' },
      { name: 'Docker', level: 'Containerization' },
      { name: 'Kubernetes', level: 'Cluster Orchestration' },
      { name: 'AWS Cloud', level: 'EC2, S3, IAM, CloudFront' },
      { name: 'CI/CD Pipelines', level: 'Automated Build & Deploy' },
    ],
  },
  {
    title: 'Architecture & Systems Design',
    category: 'architecture',
    skills: [
      { name: 'RESTful APIs', level: 'Contract-first API Design' },
      { name: 'System Design', level: 'Distributed Architecture' },
      { name: 'Microservices', level: 'Decoupled Services' },
      { name: 'Networking Basics', level: 'TCP/IP, HTTP/3, Sockets' },
      { name: 'OOP & SOLID', level: 'Clean Maintainable Code' },
    ],
  },
  {
    title: 'Databases & Engineering Practices',
    category: 'databases',
    skills: [
      { name: 'Relational Databases (SQL)', level: 'Query Optimization & Indexing' },
      { name: 'NoSQL Databases', level: 'Document & Key-Value Stores' },
      { name: 'Data Structures & Algorithms', level: 'Complexity Optimization' },
      { name: 'Unit Testing & TDD', level: 'Test-Driven Engineering' },
    ],
  },
  {
    title: 'Spoken Languages',
    category: 'spoken',
    skills: [
      { name: 'Arabic', level: 'Native / Bilingual' },
      { name: 'English', level: 'Full Professional Working' },
      { name: 'French', level: 'Professional Working' },
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'freelance-engineer',
    role: 'Freelance Software Engineer',
    organization: 'Independent Technology Consultant',
    period: '2022 — Present',
    location: 'Algeria / Remote',
    description:
      'Architected, programmed, and delivered 5 dynamic commercial web applications spanning e-commerce, content management, and custom database backends.',
    highlights: [
      'Designed and deployed 5 dynamic web apps utilizing PHP, HTML, CSS, JavaScript, and custom database schemas.',
      'Audited relational database queries, query execution plans, and indexes, slashing server page load times by 25%.',
      'Implemented secure authentication, role-based permissions, and payment gateway webhooks.',
    ],
    badge: 'Production Systems',
  },
  {
    id: 'cs-teacher',
    role: 'Temporary Computer Science Teacher',
    organization: 'University Academic Instruction',
    period: '2023 — 2024',
    location: 'Algeria',
    description:
      'Delivered university-level CS lectures, supervised laboratory technical sessions, and authored coursework on core computer science foundations.',
    highlights: [
      'Taught algorithms, data structures, object-oriented programming (Java/C++), and relational database modeling.',
      'Designed practical laboratory assignments challenging students to construct robust algorithms and debug complex runtime memory issues.',
      'Mentored over 100+ undergraduate students in software engineering best practices, Git collaboration, and clean architecture.',
    ],
    badge: 'Academic Instruction',
  },
  {
    id: 'masters-degree',
    role: "Master's Degree: Legal Multimedia Informatics",
    organization: 'University of Jijel / Algeria',
    period: 'Academic Distinction',
    location: 'Jijel, Algeria',
    description:
      'Rigorous graduate research program fusing advanced computer science, computer vision, signal processing, and legal evidentiary standards.',
    highlights: [
      'Authored thesis on computer vision models for automated surveillance, digital forensics, and media authenticity verification.',
      'Mastered legal multimedia informatics frameworks, digital watermarking, error level analysis, and forensic metadata integrity.',
    ],
    badge: "Master's Graduate",
  },
];

export const EXPLORATIONS: ExplorationItem[] = [
  {
    id: 'yolo-traffic-lab',
    title: 'YOLOv8 Edge Inference Matrix',
    subtitle: 'High-speed object bounding box tracking',
    category: 'Computer Vision',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
    rotation: -3,
    tags: ['YOLOv8', 'Python', 'OpenCV'],
    description:
      'Real-time multi-threaded frame processing pipeline with custom confidence thresholds and spatial zone intersection calculation.',
  },
  {
    id: 'forensic-spectrogram',
    title: 'Audio-Visual Forensic Spectrogram',
    subtitle: 'Tamper anomaly detection',
    category: 'Legal Informatics',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    rotation: 4,
    tags: ['Forensics', 'NumPy', 'Signal Processing'],
    description:
      'Visualizing high-frequency audio spectral drops and frame interpolation anomalies to determine if a video was digitally spliced.',
  },
  {
    id: 'k8s-mesh-visualizer',
    title: 'Kubernetes Pod Topology',
    subtitle: 'Zero-downtime rolling deployment',
    category: 'Cloud Architecture',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    rotation: -2,
    tags: ['Docker', 'K8s', 'AWS'],
    description:
      'Declarative manifest configurations for automated ingress routing, horizontal pod autoscaling, and persistent volume claims.',
  },
  {
    id: 'sql-query-profiler',
    title: 'SQL B-Tree Index Profiler',
    subtitle: 'Slashing query times by 25%',
    category: 'Database Engineering',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    rotation: 3,
    tags: ['MySQL', 'PostgreSQL', 'Indexes'],
    description:
      'Deep dive into EXPLAIN ANALYZE execution trees, covering composite indexes, covering queries, and buffer pool optimization.',
  },
  {
    id: 'hardware-oscilloscope-lab',
    title: 'Logic Analyzer & Firmware Flasher',
    subtitle: 'Low-level hardware diagnostics',
    category: 'Embedded & Hardware',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    rotation: -4,
    tags: ['C/C++', 'Diagnostics', 'Hardware'],
    description:
      'Oscilloscope waveform analysis on I2C/SPI bus communication, memory EEPROM flashing, and power rail diagnostics.',
  },
  {
    id: 'cs-lecture-visualizer',
    title: 'Interactive Algorithm Visualizer',
    subtitle: 'University teaching laboratory tool',
    category: 'Academic Pedagogy',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    rotation: 2,
    tags: ['Data Structures', 'Java', 'Algorithms'],
    description:
      'Step-by-step memory pointer animation explaining AVL tree rotations, Dijkstra shortest path, and dynamic programming memoization.',
  },
];

export const JOURNAL_POSTS: JournalEntry[] = [
  {
    id: 'legal-multimedia-standards',
    title: 'Ensuring Video Evidence Admissibility in the Age of Generative AI',
    category: 'Legal Multimedia Informatics',
    date: 'August 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80',
    summary:
      'Exploring cryptographic sensor watermarking, bitstream container validation, and deepfake verification protocols for courtroom readiness.',
    content:
      'In digital forensics, establishing a clear chain of custody requires more than basic file hashes. As synthetic media becomes imperceptibly realistic, forensic analysts must inspect quantisation matrices, double-compression artifacts, and sensor noise pattern fingerprints (PRNU). This paper outlines practical pipelines combining OpenCV and signal processing to mathematically prove video integrity.',
  },
  {
    id: 'yolo-realtime-optimization',
    title: 'Engineering Sub-20ms Traffic Violation Detection with YOLO and OpenCV',
    category: 'Computer Vision & Systems',
    date: 'July 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80',
    summary:
      'How to eliminate video stream pipeline stalls through multi-threaded frame buffers and spatial boundary triggers.',
    content:
      'Processing multiple CCTV video streams at 60 FPS in real time introduces substantial memory and threading bottlenecks. By separating frame ingest, YOLO inference, and telemetry analytics into asynchronous worker pools with shared memory buffers, we achieve smooth 60 FPS analysis with sub-20ms latency.',
  },
  {
    id: 'sql-latency-reduction',
    title: 'How We Slashed Database Query Times by 25% in High-Traffic Web Apps',
    category: 'Database Engineering',
    date: 'May 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
    summary:
      'Actionable lessons from profiling slow queries, building covering indexes, and eliminating N+1 query patterns in production PHP systems.',
    content:
      'When scaling web platforms, slow SQL queries frequently consume 80% of server execution time. By analyzing MySQL slow-query logs, rebuilding clustered and composite B-tree indexes, and replacing repeated subqueries with efficient joins, we reduced median query execution times by 25%.',
  },
  {
    id: 'teaching-cs-foundations',
    title: 'Demystifying Memory Pointers and Tree Rotations for University Students',
    category: 'Computer Science Education',
    date: 'March 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80',
    summary:
      'Pedagogical insights from leading university computer science lab sessions on low-level memory allocation and algorithmic thinking.',
    content:
      'Teaching complex algorithmic concepts like AVL tree balancing and C pointer arithmetic requires bridging abstract mathematical equations with visual execution diagrams. Creating hands-on debug sessions allowed students to develop strong mental models for runtime complexity.',
  },
];

export const STATS = [
  { value: '11+', label: 'Live Web Apps Shipped', sub: 'Production Deployed Platforms' },
  { value: '25%', label: 'SQL Latency Reduction', sub: 'Optimized Query Performance' },
  { value: '100+', label: 'Students Mentored', sub: 'University CS Instruction' },
  { value: '3', label: 'Spoken Languages', sub: 'Arabic, English, French' },
];

export const LIVE_WEB_APPS: LiveWebApp[] = [
  {
    id: 'technova-smart-store',
    title: 'Technova — متجري الذكي (منصة التجارة الإلكترونية)',
    arabicTitle: 'منصة تجارة إلكترونية ذكية متكاملة (SaaS)',
    category: 'Fullstack E-Commerce',
    tagline: 'بوابة دخول مخصصة للتجار وواجهة تسوق عصرية مصممة خصيصاً للسوق الجزائري.',
    description:
      'منصة تجارة إلكترونية ذكية متكاملة (SaaS) تتيح للتجار إنشاء وتخصيص وإدارة متاجرهم الإلكترونية بسهولة، مع بوابة دخول مخصصة للتجار وواجهة تسوق عصرية سريعة الاستجابة مصممة خصيصاً للسوق الجزائري.',
    arabicDescription:
      'منصة تجارة إلكترونية ذكية متكاملة (SaaS) تتيح للتجار إنشاء وتخصيص وإدارة متاجرهم الإلكترونية بسهولة، مع بوابة دخول مخصصة للتجار وواجهة تسوق عصرية سريعة الاستجابة مصممة خصيصاً للسوق الجزائري.',
    url: 'https://store-technova.vercel.app',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'E-Commerce UI/UX', 'Vercel'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80',
    badge: 'SaaS E-Commerce',
    highlights: [
      'إنشاء وتخصيص وإدارة المتاجر الإلكترونية بسهولة',
      'بوابة دخول مخصصة للتجار لإدارة المنتجات والطلبات',
      'واجهة تسوق عصرية سريعة الاستجابة للسوق الجزائري',
    ],
  },
  {
    id: 'apexdrive-app',
    title: 'Apex Drive (Car Rental Platform)',
    arabicTitle: 'منصة حجز وتأجير السيارات (Apex Drive)',
    category: 'Automotive & Enterprise',
    tagline: 'Modern interactive car rental platform with online booking, fleet showcase, and live price calculation tailored for Algeria.',
    description:
      'A modern, interactive car rental platform featuring direct online booking, a curated vehicle fleet showcase with detailed specifications, localized rental agreements, and live dynamic price calculation tailored for Algeria.',
    arabicDescription: 'منصة عصرية وتفاعلية لحجز وتأجير السيارات مع حجز فوري عبر الإنترنت، استعراض أسطول السيارات، وحساب الأسعار التفاعلي المخصص للجزائر.',
    url: 'https://apexdrive-hr2e.vercel.app/',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Fleet Booking Engine', 'Price Calculator', 'Vercel Deployment'],
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    badge: 'Car Rental Platform',
    highlights: ['Instant online vehicle booking & reservation system', 'Comprehensive fleet showcase with live price estimators', 'Optimized localized rental experience for Algeria'],
  },
  {
    id: 'portfolio-ecru',
    title: 'Interactive Developer Portfolio',
    arabicTitle: 'منصة المحفظة الشخصية (Portfolio)',
    category: 'Developer Portfolio',
    tagline: 'Personal digital developer portfolio showcasing professional engineering skills and projects.',
    description:
      'A sleek, responsive digital portfolio platform featuring high-contrast dark aesthetics, smooth page routing, and interactive project modules designed to exhibit professional software engineering capabilities.',
    arabicDescription: 'محفظة رقمية شخصية تعرض المهارات والمشاريع الاحترافية بتصميم تفاعلي وعصري.',
    url: 'https://portfolio-ecru-eight-yp7x5o1x7r.vercel.app/',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel Deployment'],
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    badge: 'Live Portfolio',
    highlights: ['Micro-interactions & fluid transitions', 'Responsive dark mode layout', 'Direct contact & project showcases'],
  },
  {
    id: 'store-moncef6',
    title: 'E-Commerce Store Platform',
    arabicTitle: 'متجر إلكتروني للتجارة (E-Commerce Store)',
    category: 'Fullstack E-Commerce',
    tagline: 'Modern digital retail ecosystem with dynamic product discovery and cart workflows.',
    description:
      'High-performance fullstack online retail store featuring real-time product filtering, interactive cart state persistence, sleek product detail views, and responsive checkout flows.',
    arabicDescription: 'متجر إلكتروني متكامل مع سلة تسوق ذكية، تصفية المنتجات، ونظام إدارة الطلبات.',
    url: 'https://store-moncef6.vercel.app/',
    stack: ['React', 'Next.js / Vite', 'Tailwind CSS', 'Cart State', 'REST APIs', 'Vercel'],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1200&q=80',
    badge: 'Live Production',
    highlights: ['Instant catalog search & category filtering', 'Smooth local-storage persistent shopping cart', 'Mobile-first checkout UX'],
  },
  {
    id: 'peugeot-jijel',
    title: 'Peugeot Jijel Dealership Web App',
    arabicTitle: 'تطبيق وكالة سيارات بيجو جيجل (Peugeot Jijel)',
    category: 'Automotive & Enterprise',
    tagline: 'Official digital showroom and vehicle inventory experience for dealership clientele.',
    description:
      'Commercial web application engineered for the Peugeot dealership in Jijel. Features vehicle model highlights, technical specifications, dynamic quotation request forms, and after-sales service appointment scheduling.',
    arabicDescription: 'صالة عرض رقمية وإدارة مخزون السيارات للوكالة مع نماذج طلب عروض الأسعار وحجز المواعيد.',
    url: 'https://peugeut-jijel-xe9a.vercel.app/',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Interactive Showcase', 'Booking Forms'],
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
    badge: 'Client Web App',
    highlights: ['Interactive 360° vehicle specification viewers', 'Lead capture & service booking integration', 'Optimized multi-device performance'],
  },
  {
    id: 'heart-diagnosis',
    title: 'Heart Disease Diagnosis / Health App',
    arabicTitle: 'موقع تخصصي / طبي أو صحي (Heart App)',
    category: 'HealthTech & Diagnostics',
    tagline: 'Clinical metric assessment web tool for cardiovascular risk estimation.',
    description:
      'Specialized healthcare web application allowing users and clinicians to input key biometric markers (blood pressure, cholesterol, resting ECG, max heart rate) to compute risk analysis scoring with clear visual feedback.',
    arabicDescription: 'تطبيق ويب تفاعلي للخدمات الصحية والقلبية وحساب المؤشرات التشخيصية الحيوية.',
    url: 'https://heart-moncef6.vercel.app/',
    stack: ['React', 'Health Analytics', 'Clinical Algorithms', 'Data Visualization', 'Form Validation'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    badge: 'Health Analytics',
    highlights: ['Multi-parameter cardiovascular risk assessment', 'Instant visual risk score indicators', 'Biometric validation & user guidance'],
  },
  {
    id: 'moii-app',
    title: 'Moii Personal Profile & Identity App',
    arabicTitle: 'منصة شخصية / تعريفية (Moii App)',
    category: 'Personal Branding & UI',
    tagline: 'Responsive modern digital identity and dynamic personal profile presentation.',
    description:
      'An aesthetic personal landing interface featuring refined typographic rhythm, modular links presentation, and responsive layouts tailored for digital identity and portfolio networking.',
    arabicDescription: 'صفحة تعريفية رقمية متجاوبة وعصرية لعرض الهوية الشخصية والروابط الأساسية.',
    url: 'https://moii-gamma.vercel.app/',
    stack: ['React', 'Tailwind CSS', 'Responsive UI', 'Motion Design', 'Vercel'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
    badge: 'Digital Identity',
    highlights: ['Ultra-responsive mobile-first design', 'Quick bio & social links integration', 'Fast loading & minimalist styling'],
  },
  {
    id: 'restaurant-fresco',
    title: 'Restaurant Fresco Web Platform',
    arabicTitle: 'موقع مطعم فريسكو (Restaurant Fresco)',
    category: 'Food & Hospitality',
    tagline: 'Interactive culinary showcase with dynamic food menu, specials & order requests.',
    description:
      'Modern culinary and dining web platform offering a vibrant digital menu catalog, appetizing imagery grids, table reservations, and seamless meal ordering interfaces.',
    arabicDescription: 'موقع تعريفي لعرض قائمة الطعام المميزة، وجبات اليوم، وطلب الوجبات والحجوزات.',
    url: 'https://restaurant-fresco.vercel.app/',
    stack: ['React', 'Tailwind CSS', 'Menu Catalog', 'Order Forms', 'Vercel Deployment'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    badge: 'Hospitality Web App',
    highlights: ['Categorized culinary menu & price list', 'Interactive food card modals', 'Online table reservation system'],
  },
  {
    id: 'cafe-website',
    title: 'Artisan Cafe & Lounge Website',
    arabicTitle: 'موقع مقهى (Cafe Website)',
    category: 'Hospitality & Cafe',
    tagline: 'Refined beverage menu showcase, aesthetic ambiance presentation & reservation system.',
    description:
      'Warm and inviting website engineered for a specialty coffee shop and lounge, featuring hot/cold beverage catalogs, coffee origin stories, and customer lounge inquiries.',
    arabicDescription: 'واجهة أنيقة لعرض المشروبات الساخنة والباردة والخدمات الخاصة بالمقهى.',
    url: 'https://cafee-woad.vercel.app/',
    stack: ['React', 'Tailwind CSS', 'Aesthetic UI', 'Beverage Catalog', 'Vercel'],
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80',
    badge: 'Artisan Lounge',
    highlights: ['Artisanal coffee menu presentation', 'Cozy aesthetic visual themes', 'Responsive contact & location locator'],
  },
  {
    id: 'saasify-platform',
    title: 'SaaSify Cloud Services & Platform',
    arabicTitle: 'منصة SaaSify السحابية',
    category: 'Cloud & SaaS Solutions',
    tagline: 'Cloud software services showcase with pricing tiers, digital subscriptions & feature matrices.',
    description:
      'Comprehensive landing page and portal for cloud SaaS offerings, displaying subscription tier comparisons, automated service metrics, client testimonials, and onboarding funnels.',
    arabicDescription: 'موقع لخدمات البرمجيات السحابية والاشتراكات الرقمية (SaaS) ونماذج التسعير.',
    url: 'https://saasify-roan.vercel.app/',
    stack: ['React', 'TypeScript', 'SaaS Architecture', 'Pricing Engines', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    badge: 'SaaS Platform',
    highlights: ['Interactive subscription pricing switcher', 'Feature matrix comparison charts', 'Customer onboarding call-to-actions'],
  },
  {
    id: 'my-portfolio-ten',
    title: 'Personal Portfolio (Ten Pi)',
    arabicTitle: 'منصة المحفظة الشخصية (Portfolio - Ten Pi)',
    category: 'Developer Portfolio',
    tagline: 'Sleek minimalist developer portfolio highlighting core engineering competencies and project delivery.',
    description:
      'Clean and modern personal portfolio application focusing on clear content hierarchy, fast navigation, project galleries, and direct communication channels.',
    arabicDescription: 'محفظة رقمية شخصية تعرض المهارات والمشاريع الاحترافية بنسق منظم وسريع.',
    url: 'https://my-portfolio-ten-pi-58.vercel.app/',
    stack: ['React', 'Tailwind CSS', 'Smooth Transitions', 'Vercel Deployment'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    badge: 'Live Portfolio',
    highlights: ['Minimalist typography and clean grid', 'Curated project case studies', 'Instant social & email outreach'],
  },
];

