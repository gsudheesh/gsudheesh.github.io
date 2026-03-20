const CONTENT = {
  site: {
    logo: "Sudheesh Gangishetty",
    footer: "© 2026 Sudheesh. Built from scratch and still evolving."
  },

  nav: [
    { label: "Home", href: "#hero" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Current", href: "#current" },
    { label: "Contact", href: "#contact" }
  ],

  hero: {
    eyebrow: "PORTFOLIO / DATA / SYSTEMS / ANALYSIS",
    lines: [
      { text: "Raw data is messy.", emphasis: false, delay: 0.4 },
      { text: "Incomplete.", emphasis: false, delay: 2.0 },
      { text: "Unstructured.", emphasis: false, delay: 3.6 },
      { text: "Noisy.", emphasis: false, delay: 5.2 },
      { text: "But inside it... there’s always clarity.", emphasis: true, delay: 7.2 },
      { text: "If you know how to find it.", emphasis: true, delay: 9.2 }
    ],
    lineDuration: 0.9,
    dimFirstLinesAt: 7.2,
    controlsDelayAfterLastLine: 0.6,
    button: {
      label: "Step into my world",
      href: "#reveal"
    },
    replayLabel: "Replay intro",
    scrollCue: "Scroll to continue"
  },

  reveal: {
    label: "REVEAL",
    name: "Sudheesh Gangishetty",
    role: "Data | Systems | Analysis",
    description: "From messy data to insight, structure, and decision-ready thinking.",
    primaryButton: {
      label: "See the Work",
      href: "#projects"
    },
    resumeButton: {
      label: "Download Resume",
      href: "Sudheesh_Resume.pdf"
    },
    cardTitle: "Transforming raw information into fine insights with clear thinking.",
    cardText:
      "I build practical analysis around structure, clarity, and decisions that people can actually act on."
  },

  projects: {
    label: "PROJECTS",
    title: "What Emerges From the Data",
    description:
      "A growing body of work built around real data, real systems, and clearer outcomes.",
    items: [
      {
        tag: "DATA PIPELINE / TABLEAU",
        title: "Cricket Analytics Pipeline & Performance Insight System",
        description:
          "Built an end-to-end cricket analytics workflow that scrapes ball-by-ball data from ESPN Cricinfo, transforms nested JSON into structured datasets, and visualizes performance trends through Tableau dashboards. Processed 50,000+ records to uncover player patterns, scoring phases, and matchup insights for decision-driven analysis.",
        github: "https://github.com/gsudheesh/cricket-analytics-project",
        details: "project-cricket.html"
      },
      {
        tag: "EXCEL / MARKET ANALYSIS",
        title: "Amazon Car Electronics Market Analysis",
        description:
          "Analyzed Amazon car electronics product data using Excel to evaluate pricing, customer ratings, and review volume. Applied quartile-based segmentation and value score analysis to identify high-performing products, revealing that premium products consistently drive stronger engagement and satisfaction despite lower reliance on discounts.",
        github: "https://github.com/gsudheesh/amazon-car-electronics-analysis",
        details: "project-amazon.html"
      }
    ]
  },

  about: {
    label: "ABOUT",
    title: "Who’s Building This",
    paragraphs: [
      "My interest in data comes from a deeper curiosity about how patterns emerge, how systems behave, and how clarity can be created from messy inputs.",
      "I’m developing my skills through projects that reflect real workflows, from data collection and cleaning to analysis and presentation."
    ],
    photo: {
      src: "profile-photo.jpg",
      alt: "About Sudheesh"
    }
  },

  current: {
    label: "CURRENT",
    title: "Still in Motion",
    description: "This is the part of the story that is still being written.",
    items: [
      {
        title: "Progressing in My Data Analyst Career",
        description:
          "Actively strengthening the mix of technical analysis, business thinking, and communication needed to move into a full-time data analyst role."
      },
      {
        title: "Professional Year at Performance Education",
        description:
          "Currently completing my Professional Year to deepen workplace readiness, business communication, and practical understanding of professional environments in Australia."
      },
      {
        title: "Working Toward Azure Certification",
        description:
          "Building toward an Azure certification to strengthen my foundations in cloud platforms, modern data workflows, and analytics infrastructure."
      },
      {
        title: "Finding New Datasets to Analyze",
        description:
          "Continuously looking for new datasets and business questions that let me explore patterns, test ideas, and turn raw information into clear insights."
      }
    ]
  },

  contact: {
    label: "CONTACT",
    title: "This is only the beginning.",
    description: "If you see potential in it, let’s connect.",
    links: [
      { label: "GitHub", href: "https://github.com/gsudheesh" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/sudheesh-g-452a74220/" },
      { label: "Email Me", href: "mailto:sudheeshgangishetty@gmail.com" }
    ]
  }
};