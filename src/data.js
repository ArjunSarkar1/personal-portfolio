// Structured data for the portfolio React app

export const navLinks = [
  { label: 'About Me', icon: 'profile.svg', href: '#hero' },
  { label: 'Skills', icon: 'skills.svg', href: '#skills' },
  { label: 'Portfolio', icon: 'portfolio.svg', href: '#portfolio' },
  { label: 'Blog', icon: 'blog.svg', href: '#blog' },
  { label: 'Connect', icon: 'connect.svg', href: '#contact' },
];

export const hero = {
  name: 'Arjun Sarkar',
  bio: 'Computer Science student building innovative solutions that solve real-world problems. I transform complex challenges into elegant, scalable applications through AI, data science, and entrepreneurial thinking.',
  tagline: 'Turning ideas into impactful technology',
  interests: ['AI & Machine Learning', 'Entrepreneurship', 'Data Science'],
  backgroundImage: 'background/background0.jpg',
  photoCredits: [
    { name: 'Pexels', url: 'https://www.pexels.com' },
    { name: 'Unsplash', url: 'https://unsplash.com' },
  ],
};

export const coreSkills = [
  {
    icon: 'system.svg',
    title: 'Software Development',
    description: 'I write maintainable, scalable code and design systems that are built to last. Comfortable with both object-oriented and functional paradigms, and experienced in full software lifecycles.'
  },
  {
    icon: 'data-analysis.svg',
    title: 'Data Analysis & Visualization',
    description: 'Strong at breaking down complex datasets to extract insights. I use tools like Python (pandas, matplotlib, seaborn) and SQL to clean, analyze, and visualize data in meaningful ways.'
  },
  {
    icon: 'web-ux.svg',
    title: 'Web Development & UX',
    description: 'Solid understanding in building responsive, accessible web apps with modern stacks like React and Tailwind. I care about performance and intuitive design.'
  },
  {
    icon: 'machine-learning.svg',
    title: 'Machine Learning & AI',
    description: 'Hands-on experience with training models, working with embeddings, and integrating ML into real-world applications. Familiar with tools like scikit-learn, Hugging Face, and OpenAI APIs.'
  },
];

export const detailedSkills = [
  { category: 'Frontend Development', skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Bootstrap', 'Vite'] },
  { category: 'Backend & Systems', skills: ['Python', 'Java', 'C', 'C++', 'Swift', 'R', 'NodeJS', 'Unix', 'Git', 'GitHub', 'LaTeX'] },
  { category: 'Data Science & ML', skills: ['NumPy', 'Pandas', 'PyTorch', 'TensorFlow', 'scikit-learn', 'Keras', 'Matplotlib', 'Plotly', 'Scipy', 'OpenCV'] },
  { category: 'Databases & Cloud', skills: ['SQLite', 'Neo4J', 'Supabase', 'Vercel'] },
  { category: 'Soft Skills', skills: ['Communication', 'Problem-Solving', 'Adaptability', 'Learning Agility', 'Teamwork', 'Creativity', 'Focus'] },
  { category: 'Design & Creative Tools', skills: ['Figma', 'Canva'] },
  { category: 'Technical Tools', skills: ['VS Code', 'Docker', 'R-Studio'] },
];

export const projects = [
  {
    title: 'PhysicianConnect',
    image: 'portfolio/p1/login.png',
    date: 'May - June 2025',
    status: 'Completed',
    description: 'Simplifying healthcare communication platform that reduces appointment scheduling time by 60% and improves patient-provider coordination.',
    impact: 'Enhanced healthcare workflow efficiency',
    tags: ['desktop-application', 'healthcare', 'communication', 'Java, SQLite JDBC, Gradle'],
    link: 'https://github.com/ArjunSarkar1/PhysiciansConnect',
  },
  {
    title: 'MyToDo',
    image: 'portfolio/p2/productImg.png',
    date: 'June 2025',
    status: 'Completed',
    description: 'Intuitive productivity app featuring Pomodoro technique integration, helping users increase focus time by 40% and complete tasks more efficiently.',
    impact: 'Boosted user productivity and time management',
    tags: ['web-development', 'pomodoro', 'productivity', 'HTML, CSS, JS'],
    link: 'https://arjunsarkar1.github.io/MyToDo/',
  },
  {
    title: 'ExeraHiresAI',
    image: 'portfolio/p3/candidates.png',
    date: 'December 2024',
    status: 'Completed',
    description: 'A prototype of AI-powered hiring platform that eliminates unconscious bias in recruitment, promoting diversity and fair candidate evaluation in organizations.',
    impact: 'Promoted inclusive and unbiased hiring practices',
    tags: ['talent-acquisition', 'hr-platform', 'people-analytics', 'dei', 'Swift'],
    link: 'https://github.com/ArjunSarkar1/ExeraHiresAI/',
  },
  {
    title: 'Space Wars',
    image: 'portfolio/p4/space.png',
    date: 'January 2025',
    status: 'Completed',
    description: 'Engaging space shooter game demonstrating advanced graphics programming concepts and real-time collision detection systems.',
    impact: 'Showcased game development and graphics engineering skills',
    tags: ['game-development', 'space-shooter', 'graphics-pipeline', 'Processing'],
    link: 'https://github.com/ArjunSarkar1/SpaceWar',
  },
  {
    title: 'Sentiment Multimodal AI',
    image: 'svg/loading.svg',
    date: 'July - Present',
    status: 'In Progress',
    description: '(Coming Soon...)Advanced sentiment analysis system that processes text, audio, and visual data to provide comprehensive emotional intelligence insights.'
  },
  {
    title: 'ClipsMaker',
    image: 'svg/loading.svg',
    date: 'TBD',
    status: 'Planning',
    description: '(Coming Soon...)Automated video editing platform that automatically creates engaging content clips from longer videos, saving creators hours of manual editing.'
  },
];

export const blogs = [
  {
    image: 'blog1.png',
    tag: 'AI & ML',
    readTime: '4 min read',
    title: 'Building Bias-Free AI: Lessons from ExeraHiresAI',
    description: 'How I developed a prototype of an AI system that promotes diversity in hiring while eliminating unconscious bias in recruitment processes.',
    link: 'https://medium.com/@arjunsarkar82/building-bias-free-hr-ai-platform-239b26f3fe56'
  },
  {
    image: 'blog2.jpg',
    tag: 'Development',
    readTime: '8 min read',
    title: 'From Concept to Deployment: The PhysicianConnect Journey',
    description: 'A technical deep-dive into building a healthcare communication platform that actually improves patient care workflows.',
    link: '#'
  },
  {
    image: 'blog3.jpg',
    tag: 'Productivity',
    readTime: '5 min read',
    title: 'Why the Pomodoro Technique Transformed My Productivity',
    description: 'How integrating time management principles into MyToDo app helped users increase their focus time by 40%.',
    link: '#'
  },
];

export const contact = {
  email: 'arjuncodes111@gmail.com',
  location: 'Manitoba, Canada',
  linkedin: 'https://www.linkedin.com/in/arjunsarkar101/',
  github: 'https://github.com/ArjunSarkar1',
  image: 'background/background3.jpg',
};

export const footerLinks = {
  quick: ['About Me', 'Blog', 'Contact'],
  extracurricular: ['Hackathons', 'Hobbies', 'Research Papers', 'Volunteering'],
  follow: [
    { label: 'Github', icon: 'github.svg', url: 'https://github.com/ArjunSarkar1' },
    { label: 'LinkedIn', icon: 'linkedin.svg', url: 'https://www.linkedin.com/in/arjunsarkar101/' },
    { label: 'Medium', icon: 'medium.svg', url: 'https://medium.com/@arjunsarkar82' },
  ],
}; 