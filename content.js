const CONTENT = {
  site: {
    logo: "Sudheesh",
    footer: "© 2026 Sudheesh. Built from scratch and still evolving."
  },

  nav: [
    { label: "Home", href: "#hero" },
    { label: "Reveal", href: "#reveal" },
    { label: "Projects", href: "#projects" },
    { label: "Process", href: "#process" },
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
    photoDelayAfterLastLine: 1.0,
    controlsDelayAfterPhoto: 0.4,
    button: {
      label: "Step into my world",
      href: "#reveal"
    },
    replayLabel: "↻ Replay Intro",
    scrollCue: "Scroll to continue",
    photo: {
      src: "profile-photo.jpg",
      alt: "Sudheesh portrait"
    }
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
      href: "Sudheesh_Resume.docx"
    },
    cardLabel: "WHAT THIS SITE IS",
    cardTitle: "A story of how raw information becomes clear thinking.",
    cardText:
      "This portfolio is designed to unfold the way I like working with data: starting with uncertainty, building structure, and ending with clarity."
  },

  projects: {
    label: "PROJECTS",
    title: "What Emerges From the Data",
    description:
      "A growing body of work built around real data, real systems, and clearer outcomes.",
    items: [
      {
        tag: "DATA / ANALYTICS",
        title: "Project One",
        description:
          "A portfolio project focused on transforming raw data into insight through structured analysis, visualisation, and decision-oriented reporting.",
        github: "https://github.com/gsudheesh",
        details: "#"
      },
      {
        tag: "AUTOMATION / SYSTEMS",
        title: "Project Two",
        description:
          "A workflow-oriented project designed to handle messy input, automate repetitive steps, and move toward cleaner, analysis-ready data.",
        github: "https://github.com/gsudheesh",
        details: "#"
      },
      {
        tag: "VISUALS / STORYTELLING",
        title: "Project Three",
        description:
          "A presentation-focused build that turns structured output into a clearer visual story through dashboards, charts, and communication.",
        github: "https://github.com/gsudheesh",
        details: "#"
      }
    ]
  },

  process: {
    label: "PROCESS",
    title: "From Chaos to Clarity",
    description: "The work matters, but the process behind it matters just as much.",
    steps: [
      {
        number: "01",
        title: "Noise first",
        description: "Every useful project begins with something incomplete, unclear, or messy."
      },
      {
        number: "02",
        title: "Structure next",
        description: "I focus on shaping the data into something consistent, readable, and workable."
      },
      {
        number: "03",
        title: "Insight after",
        description: "Once the structure is there, patterns begin to emerge and the analysis gets sharper."
      },
      {
        number: "04",
        title: "Clarity at the end",
        description: "The goal is always the same: make complexity easier to understand and act on."
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
        title: "Portfolio Development",
        description:
          "Refining this portfolio into a stronger, more intentional story that shows not just what I’ve built, but how I think."
      },
      {
        title: "Project Completion",
        description:
          "Finishing and strengthening in-progress projects so they move from promising ideas into recruiter-ready proof of work."
      },
      {
        title: "Analytical Growth",
        description:
          "Building stronger foundations in end-to-end analytics through real workflows involving messy data, structure, interpretation, and presentation."
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