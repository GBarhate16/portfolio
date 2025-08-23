import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Gaurav",
  lastName: "Barhate",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Fullstack Developer",
  avatar: "/images/avatar.jpg",
  email: "gauravbarhate274@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi","Marathi"], // optional: Leave the array empty if you don't want to display languages
};

const contact = {
  display: true,
  title: "Get in Touch",
  description: "I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and development.",
  email: person.email,
  linkedin: "https://www.linkedin.com/company/once-ui/",
  github: "https://github.com/GBarhate16?tab=repositories",
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/GBarhate16?tab=repositories",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/once-ui/",
  },
  // {
  //   name: "Threads",
  //   icon: "threads",
  //   link: "https://www.threads.com/@once_ui",
  // },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: "Crafting scalable solutions across front-end and back-end.",
  featured: {
    display: true,
    title: "Recent project: URL Shortener & QR Generator  ",
    href: "/work/url-qr",
  },
  subline: (
    <>
      I’m Gaurav, a Full-Stack Developer, shaping scalable applications from frontend to backend. Beyond the present,
      <br />I explore emerging technologies and craft innovative side projects that push boundaries.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: "I'm Gaurav, a fullstack developer with a passion for transforming ideas into seamless digital experiences. I work across intuitive frontends, scalable backends, and everything in between—bridging design and technology to build end-to-end solutions.",
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Techonsy Software Pvt Ltd",
        timeframe: "12/2024 - 06/2025",
        role: "Fullstack Developer",
        achievements: [
          "Built a batch management module enabling admins to create batches, add students, and assign materials. Improved user access control so students view only their assigned batch and resources, boosting security by 40%.",
          "Streamlined content distribution for admins, reducing manual effort by 35%. Enhanced authentication and course management, improving system efficiency by 40%.",
          "Revamped LMS UI/UX, increasing student engagement by 25% and reducing navigation time by 30%. Optimized APIs and WebSockets, cutting load times by 35% and enabling real-time updates.",
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/linkcodeImage.png",
            alt: "Techonsy Software Pvt Ltd",
            width: 16,
            height: 9,
          },
        ],
      },
      // {
      //   company: "Creativ3",
      //   timeframe: "2018 - 2022",
      //   role: "Lead Designer",
      //   achievements: [
      //     <>
      //       Developed a design system that unified the brand across multiple platforms, improving
      //       design consistency by 40%.
      //     </>,
      //     <>
      //       Led a cross-functional team to launch a new product line, contributing to a 15% increase
      //       in overall company revenue.
      //     </>,
      //   ],
      //   images: [],
      // },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "North Maharashtra University",
        description: "Studied Bachelor of Computer Application.",
        CGPA:"9.07"
      },
      {
        name: "",
        description: "Studied Master of Computer Application.",
        CGPA:"8.42"
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Python",
        description: <>Building robust backend applications and APIs with Python.</>,
        icon: "devicon-python-plain",
      },
      {
        title: "Django",
        icon: "devicon-django-plain",
      },
      {
        title: "React",
        icon: "devicon-react-plain",
      },
      {
        title: "JavaScript",
        icon: "devicon-javascript-plain",
      },
      {
        title: "Node.js",
        icon: "devicon-nodejs-plain",
      },
      {
        title: "Express.js",
        icon: "devicon-express-original",
      },
      {
        title: "MongoDB",
        icon: "devicon-mongodb-plain",
      },
      {
        title: "Next.js",
        icon: "devicon-nextjs-plain",
      },
      {
        title: "PostgreSQL",
        icon: "devicon-postgresql-plain",
      },
      {
        title: "MySQL",
        icon: "devicon-mysql-plain",
      },
      {
        title: "SQLite",
        icon: "devicon-sqlite-plain",
      },
      {
        title: "Git",
        icon: "devicon-git-plain",
      },
      
    ],
  },
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const newsletter = {
  display: false,
  title: "Newsletter",
  description: "Stay updated with my latest projects and insights.",
};

export { person, social, contact, home, about, work, newsletter };
