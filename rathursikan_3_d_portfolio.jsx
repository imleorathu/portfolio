import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "QR Attendance System",
    category: "Java Application",
    tech: "Java - MySQL",
    image: "/projects/View QR.png",
    number: "01",
    desc: "Smart ATI attendance management system using QR-based workflows and database-driven attendance records.",
    role: "Java desktop app, database design, QR workflow",
    outcome: "Reduced manual attendance work with faster student check-ins and organized attendance records.",
    highlights: ["QR code scanning flow", "MySQL attendance records", "Admin-friendly student management"],
    repo: "https://github.com/imleorathu/QR-Based-Students-Attendance-Management-System",
  },
  {
    title: "LearnSpire Platform",
    category: "E-Learning Web App",
    tech: "React - Node.js - MongoDB",
    image: "/projects/Learnspire.png",
    number: "02",
    desc: "A modern course platform for instructors to upload lessons and learners to track progress with ease.",
    role: "React frontend, backend APIs, MongoDB data model",
    outcome: "Created a smoother learning flow for uploading lessons, browsing content, and tracking course progress.",
    highlights: ["Course upload workflow", "Learner progress tracking", "Responsive React interface"],
    repo: "https://github.com/imleorathu/learnSpire",
  },
  {
    title: "Way2Go Booking",
    category: "Tourism Web App",
    tech: "PHP - CSS - JavaScript - MySQL",
    image: "/projects/way2go.png",
    number: "03",
    desc: "Trip package booking system where tourists can browse destinations, check package details, and reserve online.",
    role: "PHP pages, booking logic, MySQL integration",
    outcome: "Helped users explore trip packages and submit reservations through a clear web booking experience.",
    highlights: ["Destination package browsing", "Online reservation flow", "MySQL booking records"],
    repo: "https://github.com/imleorathu/way2go",
  },
];

const contactEmail = "leorathu@gmail.com";
const whatsappLink = "https://wa.me/94778164677";
const githubLink = "https://github.com/imleorathu";

const socialLinks = [
  {
    name: "Instagram",
    handle: "@imleorathu",
    href: "https://www.instagram.com/imleorathu",
    icon: "instagram",
  },
  {
    name: "GitHub",
    handle: "@imleorathu",
    href: githubLink,
    icon: "github",
  },
  {
    name: "LinkedIn",
    handle: "imleorathu",
    href: "https://www.linkedin.com/in/anantharajah-rathursikan-178591392/",
    icon: "linkedin",
  },
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "PHP",
  "Java",
  "SQL",
  "MySQL",
  "MongoDB",
  ".NET",
  "GitHub",
  "Selenium",
  "JMeter",
];

const services = [
  {
    title: "Frontend Development",
    text: "Responsive, clean, animated interfaces using React, HTML, CSS, and JavaScript.",
  },
  {
    title: "Backend Development",
    text: "Database-connected applications using PHP, Node.js, Java, MySQL, SQL Server, and MongoDB.",
  },
  {
    title: "Testing & Quality",
    text: "Basic software testing, performance testing, and automation support using Selenium and Apache JMeter.",
  },
  {
    title: "UI/UX Implementation",
    text: "Modern layouts, smooth interactions, minimal design systems, and user-friendly web experiences.",
  },
];

const experience = [
  ["HNDIT Student", "SLIATE, Jaffna", "2022 - Present"],
  ["Development Boot-camp", "SLASSCOM", "2024"],
  ["STEM Coordinator", "Generation Alpha", "2024"],
  ["Volunteer Media", "Digizen", "2024"],
];

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0 },
};

function Icon({ type, className = "", size = 28 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    "aria-hidden": true,
  };

  const icons = {
    arrow: (
      <svg {...common}>
        <path d="M7 17L17 7" />
        <path d="M8 7h9v9" />
      </svg>
    ),
    star: (
      <svg {...common}>
        <path d="M12 2l2.9 6 6.6.9-4.8 4.7 1.2 6.5L12 17l-5.9 3.1 1.2-6.5-4.8-4.7 6.6-.9L12 2z" />
      </svg>
    ),
    mail: (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    ),
    phone: (
      <svg {...common}>
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6.4 6.4l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6A2 2 0 0 1 22 16.9z" />
      </svg>
    ),
    close: (
      <svg {...common}>
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    ),
    instagram: (
      <svg {...common}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <path d="M17.5 6.5h.01" />
      </svg>
    ),
    github: (
      <svg {...common}>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5a4.3 4.3 0 0 0-1.2-3A4 4 0 0 0 18.7 3s-1 0-3 1.5a10.3 10.3 0 0 0-5.4 0C8.3 3 7.3 3 7.3 3a4 4 0 0 0-.1 3A4.3 4.3 0 0 0 6 9c0 3.5 3 5.5 6 5.5a4.8 4.8 0 0 0-1 3.5v4" />
        <path d="M9 18c-4.5 2-5-2-7-2" />
      </svg>
    ),
    linkedin: (
      <svg {...common}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  };

  return icons[type] || null;
}

function SectionLabel({ eyebrow, title, text }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.38em] text-white/70">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-black tracking-[-0.06em] text-white md:text-6xl">{title}</h2>
      {text && <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-zinc-300">{text}</p>}
    </motion.div>
  );
}

function GlassCard({ children, className = "" }) {
  return (
    <motion.div
      whileHover={{ y: -10, rotateX: 6, rotateY: -6, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(255,255,255,0.04)] backdrop-blur-xl ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-24 bg-[radial-gradient(circle,rgba(255,255,255,0.16),transparent_45%)] opacity-0 blur-2xl transition duration-500 group-hover:opacity-100"
        animate={{ x: [0, 80, -80, 0], y: [0, -60, 60, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target;
      const clickable = target.closest("a, button, .group");
      setIsPointer(!!clickable);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden rounded-full border border-white/50 bg-white/10 backdrop-blur-xl md:block"
        animate={{
          x: position.x - (isPointer ? 28 : 16),
          y: position.y - (isPointer ? 28 : 16),
          width: isPointer ? 56 : 32,
          height: isPointer ? 56 : 32,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 32 }}
      />

      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden rounded-full bg-white md:block"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
        }}
        transition={{ type: "spring", stiffness: 900, damping: 45 }}
        style={{ width: 8, height: 8 }}
      />
    </>
  );
}

function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-black">
      <motion.div
        className="absolute h-[520px] w-[520px] rounded-full bg-white/20 blur-[120px]"
        animate={{ x: mousePosition.x - 210, y: mousePosition.y - 210 }}
        transition={{ type: "spring", damping: 28, stiffness: 120, mass: 0.6 }}
      />

      <motion.div
        className="absolute left-[-12rem] top-[-10rem] h-[34rem] w-[34rem] rounded-full bg-white/10 blur-3xl"
        animate={{ x: [0, 120, 40, 0], y: [0, 70, 160, 0], scale: [1, 1.2, 0.9, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-[-14rem] right-[-12rem] h-[38rem] w-[38rem] rounded-full bg-white/5 blur-3xl"
        animate={{ x: [0, -140, -60, 0], y: [0, -90, -180, 0], scale: [1, 0.85, 1.15, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute left-1/2 top-1/3 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full border border-white/10"
        animate={{ rotate: 360, scale: [1, 1.08, 1] }}
        transition={{
          rotate: { duration: 30, repeat: Infinity, ease: "linear" },
          scale: { duration: 7, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      <motion.div
        className="absolute right-[12%] top-[18%] h-28 w-28 rounded-[2rem] border border-white/20 bg-white/5 backdrop-blur-sm"
        animate={{ y: [0, -35, 0], rotate: [0, 14, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-[22%] left-[10%] h-24 w-24 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm"
        animate={{ y: [0, 35, 0], x: [0, 18, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute inset-0 opacity-[0.16] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:42px_42px]"
        animate={{ backgroundPosition: ["0px 0px", "42px 42px"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute inset-0 opacity-[0.1] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:24px_24px]"
        animate={{ opacity: [0.08, 0.18, 0.08] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.55)_70%,rgba(0,0,0,0.96)_100%)]" />
    </div>
  );
}

function runBasicTests() {
  console.assert(projects.length === 3, "Expected 3 project cards.");
  console.assert(projects.every((project) => typeof project.number === "string"), "Project numbers must be strings.");
  console.assert(projects.every((project) => /^0[1-9]$/.test(project.number)), "Project numbers must use 01, 02, 03 style formatting.");
  console.assert(projects.every((project) => project.highlights.length === 3), "Each project needs three highlights.");
  console.assert(projects.every((project) => project.repo.startsWith("https://github.com/")), "Each project needs a GitHub repo link.");
  console.assert(services.length === 4, "Expected 4 service cards.");
  console.assert(skills.includes("React"), "React skill should be present.");
  console.assert(skills.includes("PHP"), "PHP skill should be present.");
  console.assert(experience.length >= 4, "Expected education/certificate timeline items.");
  console.assert(Array.isArray(projects), "Projects should be an array.");
  console.assert(projects.every((project) => project.title.length > 0), "Each project needs a title.");
  console.assert(skills.length > 5, "Skills list should not be empty.");
  console.assert(typeof CustomCursor === "function", "CustomCursor component should exist.");
}

runBasicTests();

export default function Portfolio3D() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    if (!selectedProject) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedProject]);

  const handleContactChange = (event) => {
    const { name, value } = event.target;
    setContactForm((current) => ({ ...current, [name]: value }));
  };

  return (
    <div className="min-h-screen cursor-auto overflow-hidden bg-black text-white selection:bg-white selection:text-black md:cursor-none">
      <AnimatedBackground />
      <CustomCursor />

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">
        <motion.a
          href="#home"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-black text-white shadow-sm backdrop-blur-xl"
        >
          RATHU<span className="text-white">.</span>
        </motion.a>

        <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 p-2 text-sm font-semibold shadow-sm backdrop-blur-xl md:flex">
          {["Services", "Projects", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="rounded-full px-4 py-2 text-zinc-300 transition hover:bg-white hover:text-black"
            >
              {item}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-full border border-white/10 bg-white px-5 py-3 text-sm font-bold text-black shadow-xl transition hover:scale-105 hover:bg-black hover:text-white"
        >
          Hire Me
        </a>
      </header>

      <nav className="relative z-10 mx-5 grid grid-cols-4 gap-2 rounded-full border border-white/10 bg-white/5 p-2 text-center text-xs font-semibold shadow-sm backdrop-blur-xl md:hidden">
        {["Services", "Projects", "About", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="rounded-full px-2 py-3 text-zinc-300 transition hover:bg-white hover:text-black"
          >
            {item}
          </a>
        ))}
      </nav>

      <main id="home" className="relative z-10">
        <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-20 pt-10 md:px-8 lg:min-h-[86vh] lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7 }}>
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white shadow-sm backdrop-blur-xl">
              <span className="h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.9)]" />
              Available for Internship / Fullstack Developer Role
            </div>

            <h1 className="max-w-5xl text-[4rem] font-black leading-[0.88] tracking-[-0.09em] text-white md:text-[6.8rem] lg:text-[8rem]">
              Building clean digital products with code.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-300">
              I'm Anantharasa Rathursikan, an HNDIT student and intern software engineer focused on full-stack web applications,
              modern UI, databases, and software testing.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-bold text-black shadow-2xl transition hover:scale-105 hover:bg-black hover:text-white"
              >
                See Projects <Icon type="arrow" size={18} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/10 bg-white/5 px-6 py-4 text-sm font-bold text-white shadow-sm backdrop-blur-xl transition hover:scale-105 hover:bg-white hover:text-black"
              >
                Contact Now
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.88, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative mx-auto h-[560px] w-full max-w-[520px]"
          >
            <motion.div
              animate={{ y: [0, -18, 0], rotate: [0, 3, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-10 top-4 h-32 w-32 rounded-[2rem] border border-white/20 bg-white/10 shadow-2xl backdrop-blur-xl"
            />
            <motion.div
              animate={{ y: [0, 16, 0], rotate: [0, -4, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-8 right-6 h-40 w-40 rounded-full border border-white/20 bg-white/10 shadow-2xl backdrop-blur-xl"
            />
            <motion.div
              whileHover={{ rotateX: 9, rotateY: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="group absolute inset-8 overflow-hidden rounded-[3rem] border border-white/10 bg-white/5 p-6 text-white shadow-[0_40px_120px_rgba(255,255,255,0.08)] backdrop-blur-2xl"
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div
                animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_40%)]"
              />
              <div className="relative flex h-full flex-col justify-between text-white">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white">Portfolio</span>
                  <Icon type="star" className="text-white" />
                </div>
                <div>
                  <div className="mb-7 h-36 w-36 overflow-hidden rounded-[2.5rem] border border-white/20 bg-white/10 shadow-2xl">
                    <img
                      src="/projects/Rathursikan.jpg"
                      alt="Anantharasa Rathursikan"
                      className="h-full w-full object-cover object-[50%_35%]"
                    />
                  </div>
                  <h2 className="text-4xl font-black leading-none tracking-[-0.06em] text-white">Full-Stack Developer</h2>
                  <p className="mt-4 text-sm leading-7 text-white/60">React - PHP - Java - MySQL - MongoDB - Testing</p>
                </div>
                <div className="grid grid-cols-3 gap-3 text-center text-xs font-bold text-white">
                  <div className="rounded-2xl bg-white/10 p-4">3 Projects</div>
                  <div className="rounded-2xl bg-white/10 p-4">14 Skills</div>
                  <div className="rounded-2xl bg-white/10 p-4">HNDIT</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        <section className="relative border-y border-white/10 bg-black py-5 text-white">
          <motion.div
            animate={{ x: [0, -900] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="flex w-max gap-8 whitespace-nowrap text-2xl font-black uppercase tracking-[-0.04em]"
          >
            {[...skills, ...skills].map((skill, index) => (
              <span key={`${skill}-${index}`} className="flex items-center gap-8 text-white">
                {skill} <span className="text-white">*</span>
              </span>
            ))}
          </motion.div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
          <SectionLabel
            eyebrow="Services"
            title="What I can build"
            text="A developer-focused version of the Portfolite layout with clean cards, premium spacing, and strong visual hierarchy."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service, index) => (
              <GlassCard key={service.title}>
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-5xl font-black tracking-[-0.08em] text-white/25">0{index + 1}</span>
                  <a
                    href={`mailto:${contactEmail}?subject=${encodeURIComponent(service.title)}`}
                    aria-label={`Contact about ${service.title}`}
                    className="rounded-full bg-white p-3 text-black transition group-hover:bg-black group-hover:text-white"
                  >
                    <Icon type="arrow" size={18} />
                  </a>
                </div>
                <h3 className="text-3xl font-black tracking-[-0.05em] text-white">{service.title}</h3>
                <p className="mt-4 max-w-xl leading-8 text-zinc-300">{service.text}</p>
              </GlassCard>
            ))}
          </div>
        </section>

        <section id="projects" className="bg-black px-5 py-24 text-white md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.38em] text-white/70">Recent Works</p>
                <h2 className="mt-4 text-5xl font-black tracking-[-0.07em] text-white md:text-7xl">Selected projects</h2>
              </div>
              <a
                href={`mailto:${contactEmail}?subject=New%20Portfolio%20Project`}
                className="w-fit rounded-full bg-white px-6 py-4 text-sm font-bold text-black transition hover:scale-105 hover:bg-black hover:text-white"
              >
                Start a project
              </a>
            </div>

            <div className="grid gap-6">
              {projects.map((project) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  whileHover={{ scale: 0.99 }}
                  className="group grid overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-5 md:grid-cols-[0.9fr_1.1fr] md:p-7"
                >
                  <div className="relative min-h-[280px] overflow-hidden rounded-[2rem] bg-zinc-900 p-6 text-white">
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/40 to-black/80" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22),transparent_38%)]" />
                    <motion.div
                      whileHover={{ rotate: -4, scale: 1.05 }}
                      className="relative flex h-full flex-col justify-between rounded-[1.5rem] border border-white/10 bg-black/45 p-6 text-white shadow-2xl backdrop-blur-sm"
                    >
                      <span className="text-sm font-bold text-white">{project.number}</span>
                      <div>
                        <p className="text-sm text-white/50">{project.category}</p>
                        <h3 className="mt-2 text-4xl font-black tracking-[-0.06em] text-white">{project.title}</h3>
                      </div>
                    </motion.div>
                  </div>

                  <div className="flex flex-col justify-between p-3 md:p-8">
                    <div>
                      <p className="w-fit rounded-full border border-white/10 px-4 py-2 text-sm font-bold text-white">{project.tech}</p>
                      <h3 className="mt-8 text-4xl font-black tracking-[-0.06em] text-white md:text-5xl">{project.title}</h3>
                      <p className="mt-5 max-w-2xl text-lg leading-8 text-white/60">{project.desc}</p>
                    </div>
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-bold text-black transition group-hover:bg-black group-hover:text-white"
                    >
                      View Case Study <Icon type="arrow" size={18} />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto grid max-w-7xl gap-8 px-5 py-24 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="rounded-[3rem] border border-white/10 bg-white/5 p-8 text-white shadow-2xl backdrop-blur-xl md:p-10"
          >
            <div className="mb-8 h-36 w-36 overflow-hidden rounded-[2.5rem] border border-white/20 bg-white/10 shadow-2xl">
              <img
                src="/projects/Rathursikan.jpg"
                alt="Anantharasa Rathursikan"
                className="h-full w-full object-cover object-[50%_35%]"
              />
            </div>
            <h2 className="text-5xl font-black tracking-[-0.07em] text-white">Hi I am Rathursikan</h2>
            <p className="mt-6 text-lg leading-9 text-white/60">
              I'm a current Higher National Diploma in Information Technology student at SLIATE, Jaffna. I enjoy building web
              applications with clean interfaces, useful features, and strong database support.
            </p>
          </motion.div>

          <div className="space-y-4">
            {experience.map(([role, place, year], index) => (
              <motion.div
                key={role}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ x: 8 }}
                className="grid gap-2 rounded-[2rem] border border-white/10 bg-white/5 p-6 text-white shadow-sm backdrop-blur-xl md:grid-cols-[1fr_1fr_auto] md:items-center"
              >
                <h3 className="text-xl font-black tracking-[-0.04em] text-white">{role}</h3>
                <p className="text-zinc-300">{place}</p>
                <p className="font-bold text-white">{year}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[3rem] border border-white/10 bg-white/5 p-8 text-white shadow-[0_40px_120px_rgba(255,255,255,0.05)] backdrop-blur-xl md:p-14"
          >
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.38em] text-white/70">Contact</p>
                <h2 className="mt-5 max-w-4xl text-5xl font-black leading-[0.92] tracking-[-0.08em] text-white md:text-7xl">
                  Let's build a modern web experience.
                </h2>
                <div className="mt-8 space-y-3">
                  <a
                    href={`mailto:${contactEmail}?subject=Portfolio%20Contact`}
                    className="flex items-center justify-between rounded-full bg-white px-5 py-4 font-bold text-black transition hover:scale-105 hover:bg-black hover:text-white"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Icon type="mail" size={18} /> {contactEmail}
                    </span>
                    <Icon type="arrow" size={18} />
                  </a>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-full border border-white/10 px-5 py-4 font-bold text-white transition hover:scale-105 hover:bg-white hover:text-black"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Icon type="phone" size={18} /> Chat on WhatsApp
                    </span>
                    <Icon type="arrow" size={18} />
                  </a>
                </div>
              </div>

              <form
                action={`https://formsubmit.co/${contactEmail}`}
                method="POST"
                className="grid gap-4 rounded-[2rem] border border-white/10 bg-black/30 p-5 md:p-6"
              >
                <input type="hidden" name="_subject" value="New portfolio contact message" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value={window.location.href} />
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-bold text-white/70">
                    Name
                    <input
                      type="text"
                      name="name"
                      value={contactForm.name}
                      onChange={handleContactChange}
                      required
                      placeholder="Your name"
                      className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-white/50"
                    />
                  </label>
                  <label className="grid gap-2 text-sm font-bold text-white/70">
                    Email
                    <input
                      type="email"
                      name="email"
                      value={contactForm.email}
                      onChange={handleContactChange}
                      required
                      placeholder="you@example.com"
                      className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-white/50"
                    />
                  </label>
                </div>

                <label className="grid gap-2 text-sm font-bold text-white/70">
                  Subject
                  <input
                    type="text"
                    name="subject"
                    value={contactForm.subject}
                    onChange={handleContactChange}
                    placeholder="Project, internship, or collaboration"
                    className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-white/50"
                  />
                </label>

                <label className="grid gap-2 text-sm font-bold text-white/70">
                  Message
                  <textarea
                    name="message"
                    value={contactForm.message}
                    onChange={handleContactChange}
                    required
                    rows="5"
                    placeholder="Write your message"
                    className="resize-none rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-white/50"
                  />
                </label>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-bold text-black transition hover:scale-105 hover:bg-black hover:text-white"
                >
                  Send Email <Icon type="arrow" size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            className="text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-white/70">Social Media</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.06em] text-white md:text-6xl">Find me online</h2>
          </motion.div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group flex items-center justify-between rounded-[2rem] border border-white/10 bg-white/5 p-6 text-white shadow-[0_24px_80px_rgba(255,255,255,0.04)] backdrop-blur-xl transition hover:bg-white hover:text-black"
              >
                <span className="flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-white text-black transition group-hover:bg-black group-hover:text-white">
                    <Icon type={social.icon} size={21} />
                  </span>
                  <span className="text-left">
                    <span className="block text-xl font-black tracking-[-0.04em]">{social.name}</span>
                    <span className="mt-1 block text-sm font-semibold text-white/50 transition group-hover:text-black/60">{social.handle}</span>
                  </span>
                </span>
                <Icon type="arrow" size={20} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </motion.a>
            ))}
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-black/60 px-5 py-8 text-center text-sm font-semibold text-white/60 backdrop-blur-xl md:px-8">
        <p>Copyright (c) 2026 @imleorathu. All rights reserved.</p>
      </footer>

      {selectedProject && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] grid place-items-center bg-black/80 px-5 py-8 backdrop-blur-xl"
          onClick={() => setSelectedProject(null)}
        >
          <motion.article
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 240, damping: 24 }}
            className="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[2rem] border border-white/10 bg-zinc-950 text-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="relative min-h-[320px] overflow-hidden bg-zinc-900">
                <img
                  src={selectedProject.image}
                  alt={`${selectedProject.title} preview`}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-sm font-bold text-white/70">{selectedProject.category}</p>
                  <h2 id="case-study-title" className="mt-2 text-4xl font-black tracking-[-0.06em] text-white">
                    {selectedProject.title}
                  </h2>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="mb-8 flex items-start justify-between gap-5">
                  <div>
                    <p className="w-fit rounded-full border border-white/10 px-4 py-2 text-sm font-bold text-white">{selectedProject.tech}</p>
                    <p className="mt-5 leading-8 text-white/60">{selectedProject.desc}</p>
                  </div>
                  <button
                    type="button"
                    aria-label="Close case study"
                    onClick={() => setSelectedProject(null)}
                    className="shrink-0 rounded-full border border-white/10 bg-white/5 p-3 text-white transition hover:bg-white hover:text-black"
                  >
                    <Icon type="close" size={18} />
                  </button>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/50">Role</p>
                    <p className="mt-3 leading-7 text-white">{selectedProject.role}</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/50">Outcome</p>
                    <p className="mt-3 leading-7 text-white">{selectedProject.outcome}</p>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/50">Highlights</p>
                  <div className="mt-4 grid gap-3">
                    {selectedProject.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center justify-between rounded-full bg-white/10 px-4 py-3 text-sm font-bold text-white">
                        <span>{highlight}</span>
                        <Icon type="arrow" size={16} />
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={`mailto:${contactEmail}?subject=Question%20about%20${encodeURIComponent(selectedProject.title)}`}
                  className="mt-6 inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-bold text-black transition hover:scale-105 hover:bg-black hover:text-white"
                >
                  Discuss This Project <Icon type="arrow" size={18} />
                </a>
              </div>
            </div>
          </motion.article>
        </motion.div>
      )}
    </div>
  );
}
