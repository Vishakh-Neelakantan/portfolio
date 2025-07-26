import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Vishakh",
  lastName: "Neelakantan",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Development Engineer",
  avatar: "/images/avatar.jpg",
  // location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  timeZone: "Asia/Kolkata", // ✅ Keep timezone for time display
  headerLocation: "", // ✅ Empty to hide location in header
  aboutLocation: "Noida, India", // ✅ New location for About page
  languages: ["English", "Hindi", "Tamil"], // optional: Leave the array empty if you don't want to display languages
};



const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Vishakh-Neelakantan",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/vishakh-neelakantan/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Software Development Engineer</>,
  subline: (
    <>
      I am Vishakh Neelakantan, an aspiring <InlineCode>software development engineer</InlineCode>. I turn concepts into <InlineCode>code</InlineCode>.
      {/* upcoming GET at <InlineCode>HCL</InlineCode>. */}
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
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
    description: (
      <>
      {/* I am Vishakh Neelakantan, an aspiring software development engineer.
      upcoming GET at <InlineCode>HCL</InlineCode>. */}
    </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experience",
    experiences: [
      {
        company: "HCLTech",
        timeframe: "March 2025 – Present",
        role: "GET",
        achievements: [
          <>
            Completed <strong>350+ hours</strong> of hands-on training across <strong>IT Hardware, Networking, Linux, Cloud, Agile, Cybersecurity, AI, and DevOps</strong>.
          </>,
          <>
            Built foundational skills in <strong>Database management</strong>, <strong>Linux systems</strong>, and <strong>cloud-based deployments</strong> through virtual labs and assessments.
          </>,
        ],
      },
      {
        company: "Ministry of Electronics and Information Technology (MeitY)",
        timeframe: "June 2024 - August 2024",
        role: "Intern",
        achievements: [
          <>
            Worked on developing an <strong>AI-driven tool</strong> to enhance user interaction and response accuracy under the <strong>STPI Emerging Tech</strong> initiatives.
          </>,
          <>
            Authored a <strong>100-point technical report</strong> on <strong>cloud sovereignty</strong> and India-centric infrastructure strategies, used for internal reference.
          </>,
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Bennett University",
        timeframe: "2021 - 2025",
        description: <>BTech Computer Science Engineering with specialization in Cyber Security.</>,
      },
      {
        name: "DPSGV",
        timeframe: "2021",
        description: 
        <>PCM with Geospatial Technology</>
      },
    ],
  },

  technicalSkills: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      "C++", "JavaScript", "React.js", "Next.js", "Node.js",
      "SQL", "Python", "AWS", "Firebase", "GitHub",
      "Git", "HTML", "CSS", "VS Code", "Notion", "Colab", "Figma", "Canva", "EC - Council CND",
    ],
  },

  

  
};



const resume = {
  label: "Resume",  // New tab in navigation
  title: "My Resume",
  description: `View and download ${person.name}'s resume.`,
  link: "https://drive.google.com/drive/folders/1vNzdpZThnSMBqjWKHqgNwHzDMDNy8ZHl?usp=sharing",  // Replace with your actual Google Drive link
};


const work = {
  label: "Projects",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};



const contact = {
  label: "Contact",
  title: "Get in Touch",
  description: `Connect with ${person.name} on different platforms.`,
  links: [
    { name: "GitHub", icon: "", link: "https://github.com/Vishakh-Neelakantan" },
    { name: "LinkedIn", icon: "", link: "https://www.linkedin.com/in/vishakh-neelakantan/" },
    // { name: "Gmail", icon: "email", link: "mailto:vishakhneelakantan@gmail.com" },
    // { name: "Outlook", icon: "outlook", link: "mailto:e21cseu0035@bennett.edu.in" },
    { name: "Linktree", icon: "link", link: "https://linktr.ee/nvishakh" }, // Replace with actual Linktree link
  ],
};


export { person, social, home, about, resume, work, contact };
