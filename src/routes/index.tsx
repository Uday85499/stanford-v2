import { createFileRoute } from "@tanstack/react-router";
import {
  GraduationCap, Trophy, Globe2, Users, BookOpen, Sparkles,
  ChevronRight, Phone, Mail, MapPin, ArrowRight, Award,
  Microscope, Music2, Dumbbell, Brain, Menu, X, Star, Quote,
} from "lucide-react";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion, type Variants } from "framer-motion";

import logo from "@/assets/school/new-logo1.webp";
import heroBanner from "@/assets/school/new-banner.webp";
import banner1 from "@/assets/school/banner1.webp";

// High-quality premium stock images matching the elite school aesthetic
const stock = {
  aboutStudents: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=80",
  smartClassroom: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1400&q=80",
  stemLab: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1400&q=80",
  sportsComplex: "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?auto=format&fit=crop&w=1400&q=80",
  robotics: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
  performingArts: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
  leadership: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=1200&q=80",
  sportsExcellence: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80",
  yoga: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
  creativeArts: "https://images.unsplash.com/photo-1607453998774-d533f65dac99?auto=format&fit=crop&w=1200&q=80",
  globalExchange: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
  awards: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=1200&q=80",
};

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Stanford International School | Bangalore" },
      { name: "description", content: "Stanford International School Bangalore — 30+ years of academic excellence with international curriculum, smart classrooms and holistic development." },
    ],
  }),
});

const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Academics", href: "#academics" },
  { label: "Activities", href: "#activities" },
  { label: "Admissions", href: "#admissions" },
  { label: "Contact", href: "#contact" },
];

// Motion presets

const fadeUp: Variants = {
  hidden: { opacity: 1, y: 0 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};
const scaleIn: Variants = {
  hidden: { opacity: 1, scale: 1 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

function Index() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const heroParallax = useTransform(scrollY, [0, 600], [0, -80]);
  const heroFade = useTransform(scrollY, [0, 400], [1, 0.6]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-canvas min-h-screen overflow-x-hidden">
      {/* Floating decorative blobs */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <motion.div
          className="absolute top-20 -left-32 h-96 w-96 rounded-full bg-[oklch(0.86_0.17_92/0.35)] blur-3xl"
          animate={reduce ? undefined : { y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 -right-32 h-[28rem] w-[28rem] rounded-full bg-[oklch(0.32_0.08_155/0.25)] blur-3xl"
          animate={reduce ? undefined : { y: [0, 40, 0], x: [0, -20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-[oklch(0.78_0.18_85/0.25)] blur-3xl"
          animate={reduce ? undefined : { y: [0, -25, 0], x: [0, -30, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Header */}
      <motion.header
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className={`glass rounded-2xl flex items-center justify-between px-4 py-3 transition-all ${scrolled ? "shadow-lg" : ""}`}>
            <a href="#home" className="flex items-center gap-3 group">
              <motion.img
                src={logo} alt="Stanford International School" className="h-10 w-auto"
                whileHover={{ rotate: [0, -6, 6, 0], scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
              <div className="hidden sm:block leading-tight">
                <div className="font-display text-[15px] font-bold text-[var(--dark-green-deep)]">Stanford</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--dark-green-soft)]">International School</div>
              </div>
            </a>

            <nav className="hidden lg:flex items-center gap-1">
              {nav.map((n) => (
                <a key={n.href} href={n.href}
                   className="relative px-3 py-2 text-sm font-medium text-[var(--dark-green-deep)] rounded-lg hover:bg-[oklch(0.86_0.17_92/0.4)] transition story-link">
                  {n.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <motion.a
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                href="#admissions"
                className="hidden sm:inline-flex btn-shine items-center gap-2 rounded-xl bg-[var(--dark-green)] text-[var(--cream)] px-4 py-2.5 text-sm font-semibold hover:bg-[var(--dark-green-deep)] transition shadow-md"
              >
                Apply Now <ArrowRight className="h-4 w-4" />
              </motion.a>
              <button onClick={() => setOpen(!open)} className="lg:hidden p-2 rounded-lg glass-yellow" aria-label="Menu">
                {open ? <X className="h-5 w-5 text-[var(--dark-green-deep)]" /> : <Menu className="h-5 w-5 text-[var(--dark-green-deep)]" />}
              </button>
            </div>
          </div>

          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
              className="lg:hidden mt-2 glass rounded-2xl p-3 flex flex-col"
            >
              {nav.map((n) => (
                <a key={n.href} href={n.href} onClick={() => setOpen(false)}
                   className="px-3 py-3 text-sm font-medium text-[var(--dark-green-deep)] rounded-lg hover:bg-[oklch(0.86_0.17_92/0.4)]">
                  {n.label}
                </a>
              ))}
            </motion.div>
          )}
        </div>
      </motion.header>

      {/* Hero */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.div variants={fadeUp} className="glass-yellow inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold text-[var(--dark-green-deep)] uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5" /> A Legacy of Excellence — Est. 1995
            </motion.div>
            <motion.h1 variants={fadeUp} className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--dark-green-deep)] leading-[1.05] text-balance">
              Shaping Future Leaders with{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-[var(--dark-green)]">30 Years</span>
                <motion.span
                  initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.7, ease: "easeOut" }}
                  style={{ originX: 0 }}
                  className="absolute inset-x-0 bottom-1 h-3 bg-[var(--yellow)] -z-0 rounded"
                />
              </span>{" "}
              of Educational Excellence
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 text-lg text-[var(--muted-foreground)] max-w-xl">
              Empowering young minds for a global future. Where academic rigour meets character development in a world-class environment.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} href="#admissions" className="btn-shine inline-flex items-center gap-2 rounded-xl bg-[var(--dark-green)] text-[var(--cream)] px-6 py-3.5 font-semibold hover:bg-[var(--dark-green-deep)] transition shadow-lg">
                Begin Your Journey <ArrowRight className="h-4 w-4" />
              </motion.a>
              <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} href="#about" className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3.5 font-semibold text-[var(--dark-green-deep)] hover:bg-white/80 transition">
                Discover Our Legacy
              </motion.a>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 grid grid-cols-3 gap-3">
              {[
                { icon: Award, label: "30+ Years" },
                { icon: Globe2, label: "Intl. Curriculum" },
                { icon: GraduationCap, label: "5000+ Alumni" },
              ].map(({ icon: Icon, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  whileHover={{ y: -3 }}
                  className="glass rounded-xl px-3 py-3 flex items-center gap-2"
                >
                  <div className="grid place-items-center h-9 w-9 rounded-lg bg-[var(--yellow)] text-[var(--dark-green-deep)]">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-semibold text-[var(--dark-green-deep)]">{label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero visual collage */}
          <motion.div style={{ y: heroParallax, opacity: heroFade }} className="relative h-[480px] lg:h-[560px]">
            <motion.div
              initial={{ opacity: 1, x: 0, rotate: 2 }}
              animate={{ opacity: 1, x: 0, rotate: 2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ rotate: 0, scale: 1.02 }}
              className="absolute top-0 right-0 w-[70%] h-[65%] rounded-3xl overflow-hidden glass p-2"
            >
              <img src={heroBanner} alt="Campus" loading="eager" className="w-full h-full object-cover rounded-2xl" />
            </motion.div>
            <motion.div
              initial={{ opacity: 1, x: 0, rotate: -3 }}
              animate={{ opacity: 1, x: 0, rotate: -3 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              whileHover={{ rotate: 0, scale: 1.02 }}
              className="absolute bottom-0 left-0 w-[55%] h-[55%] rounded-3xl overflow-hidden glass p-2"
            >
              <img src={banner1} alt="Students" className="w-full h-full object-cover rounded-2xl" />
            </motion.div>
            <motion.div
              initial={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              
              className="absolute bottom-8 right-4 glass-dark rounded-2xl p-5 w-56"
            >
              <div className="flex items-center gap-1 text-[var(--yellow)]">
                {[0,1,2,3,4].map(i => (
                  <motion.div key={i} initial={{ opacity: 1, scale: 1 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8 + i * 0.08 }}>
                    <Star className="h-4 w-4 fill-[var(--yellow)]" />
                  </motion.div>
                ))}
              </div>
              <div className="mt-2 font-display text-2xl font-bold">Top Rated</div>
              <div className="text-xs opacity-80">International School in Bangalore</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 1, scale: 1 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.06, rotate: -2 }}
              className="absolute -top-4 -left-4 glass-yellow rounded-2xl p-4 w-44 hidden md:block"
            >
              <div className="text-3xl font-bold text-[var(--dark-green-deep)] font-display">100%</div>
              <div className="text-xs font-semibold text-[var(--dark-green-deep)]">Board Results</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Programs / Academics */}
      <section id="academics" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader badge="Academics" title="A Programme For Every Stage" subtitle="From the first steps of curiosity to confident young scholars — a curriculum crafted to inspire." />

          <motion.div
            variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
            className="mt-12 grid md:grid-cols-3 gap-6"
          >
            {[
              { icon: Sparkles, title: "Kindergarten", desc: "Joyful discovery and foundational skills in a nurturing, safe environment.", tone: "yellow" },
              { icon: BookOpen, title: "Pre-Primary", desc: "Building cognitive and social skills through engaging play-based methodologies.", tone: "green" },
              { icon: Brain, title: "Primary", desc: "Fostering critical thinking and global awareness for tomorrow's leaders.", tone: "yellow" },
            ].map((p, i) => (
              <motion.div
                key={i} variants={fadeUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="glass rounded-3xl p-7 group transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className={`h-14 w-14 rounded-2xl grid place-items-center mb-5 ${p.tone === "yellow" ? "bg-[var(--yellow)] text-[var(--dark-green-deep)]" : "bg-[var(--dark-green)] text-[var(--cream)]"}`}
                >
                  <p.icon className="h-6 w-6" />
                </motion.div>
                <h3 className="font-display text-2xl font-bold text-[var(--dark-green-deep)]">{p.title}</h3>
                <p className="mt-3 text-[var(--muted-foreground)] leading-relaxed">{p.desc}</p>
                <a href="#admissions" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[var(--dark-green)] group-hover:gap-2 transition-all">
                  Explore Programme <ChevronRight className="h-4 w-4" />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 1, x: 0 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }}
            className="relative h-[480px]"
          >
            <div className="absolute inset-0 rounded-3xl overflow-hidden glass p-2">
              <img src={stock.aboutStudents} alt="Stanford students studying" className="w-full h-full object-cover rounded-2xl" />
            </div>
            <motion.div
              initial={{ opacity: 1, scale: 1 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ delay: 0.4, type: "spring" }}
              className="absolute -bottom-6 -right-6 glass-dark rounded-2xl p-6 w-52"
            >
              <div className="text-5xl font-bold font-display text-[var(--yellow)]">30+</div>
              <div className="text-sm mt-1 opacity-90">Years of educational excellence</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 1, y: 0 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="absolute -top-6 -left-6 glass-yellow rounded-2xl px-5 py-4 flex items-center gap-3"
            >
              <Trophy className="h-6 w-6 text-[var(--dark-green-deep)]" />
              <div>
                <div className="text-xs uppercase tracking-wider text-[var(--dark-green-soft)]">Recognised by</div>
                <div className="font-semibold text-[var(--dark-green-deep)] text-sm">Govt. of Karnataka</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 1, x: 0 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }}
          >
            <div className="glass-yellow inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold text-[var(--dark-green-deep)] uppercase tracking-wider">Our Legacy</div>
            <h2 className="mt-4 font-display text-4xl lg:text-5xl font-bold text-[var(--dark-green-deep)] text-balance">
              A Tradition of Academic Prestige
            </h2>
            <p className="mt-5 text-lg text-[var(--muted-foreground)] leading-relaxed">
              For over three decades, Stanford International School has stood as a beacon of educational excellence. We seamlessly blend international academic standards with strong foundational values.
            </p>
            <p className="mt-4 text-lg text-[var(--muted-foreground)] leading-relaxed">
              Our mission is not just to educate, but to inspire — fostering an elite, future-ready environment where students innovate, lead, and excel on the global stage.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {[
                "International curriculum",
                "Smart digital classrooms",
                "Holistic development",
                "Experienced faculty",
              ].map((f, i) => (
                <motion.div
                  key={f}
                  initial={{ opacity: 1, y: 0 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-2 glass rounded-xl px-4 py-3"
                >
                  <div className="h-2 w-2 rounded-full bg-[var(--yellow)]" />
                  <span className="text-sm font-medium text-[var(--dark-green-deep)]">{f}</span>
                </motion.div>
              ))}
            </div>

            <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} href="#contact" className="mt-8 btn-shine inline-flex items-center gap-2 rounded-xl bg-[var(--dark-green)] text-[var(--cream)] px-6 py-3.5 font-semibold hover:bg-[var(--dark-green-deep)] transition shadow-lg">
              Discover Our Philosophy <ArrowRight className="h-4 w-4" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Campus experience */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader badge="Campus" title="World-Class Campus Experience" subtitle="State-of-the-art infrastructure designed for modern learning, innovation and holistic development." />
          <motion.div
            variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
            className="mt-12 grid md:grid-cols-3 gap-6"
          >
            {[
              { img: stock.smartClassroom, title: "Smart Classrooms", desc: "Interactive digital learning environments." },
              { img: stock.stemLab, title: "Advanced STEM Labs", desc: "Hands-on scientific exploration and robotics." },
              { img: stock.sportsComplex, title: "Premium Sports Complex", desc: "Olympic-standard courts and coaching." },
            ].map((c, i) => (
              <motion.div
                key={i} variants={scaleIn}
                whileHover={{ y: -6 }}
                className="relative h-80 rounded-3xl overflow-hidden group"
              >
                <img src={c.img} alt={c.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark-green-deep)] via-[var(--dark-green-deep)]/30 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-5">
                  <div className="glass-dark rounded-2xl p-4">
                    <h3 className="font-display text-xl font-bold">{c.title}</h3>
                    <p className="text-xs opacity-85 mt-1">{c.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Activities */}
      <section id="activities" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader badge="Beyond the Classroom" title="Cultivating Curious, Creative Leaders" subtitle="Elite extracurricular programmes that build character, confidence, and global awareness." />

          <motion.div
            variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }}
            className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {[
              { img: stock.robotics, title: "Robotics & Innovation", icon: Microscope },
              { img: stock.performingArts, title: "Performing Arts", icon: Music2 },
              { img: stock.leadership, title: "Leadership & Strategy", icon: Brain },
              { img: stock.sportsExcellence, title: "Sports Excellence", icon: Dumbbell },
              { img: stock.yoga, title: "Yoga & Mindfulness", icon: Sparkles },
              { img: stock.creativeArts, title: "Creative Arts", icon: Users },
              { img: stock.globalExchange, title: "Global Exchange", icon: Globe2 },
              { img: stock.awards, title: "Awards & Olympiads", icon: Trophy },
            ].map((a, i) => (
              <motion.div
                key={i} variants={scaleIn}
                whileHover={{ y: -6, scale: 1.02 }}
                className="relative h-64 rounded-2xl overflow-hidden group glass p-1.5"
              >
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <img src={a.img} alt={a.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark-green-deep)]/90 via-transparent to-transparent" />
                  <motion.div
                    whileHover={{ rotate: 360 }} transition={{ duration: 0.7 }}
                    className="absolute top-3 right-3 grid place-items-center h-9 w-9 rounded-xl glass-yellow"
                  >
                    <a.icon className="h-4 w-4 text-[var(--dark-green-deep)]" />
                  </motion.div>
                  <div className="absolute bottom-3 inset-x-3">
                    <h3 className="font-display text-lg font-bold text-white">{a.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 1, y: 0 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }}
            className="glass-dark rounded-3xl p-10 lg:p-14"
          >
            <motion.div
              variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
            >
              {[
                { v: "100%", l: "Board Result Success" },
                { v: "5000+", l: "Global Alumni" },
                { v: "50+", l: "University Placements" },
                { v: "30+", l: "Years of Legacy" },
              ].map((s) => (
                <motion.div key={s.l} variants={fadeUp}>
                  <div className="font-display text-5xl lg:text-6xl font-bold text-[var(--yellow)]">{s.v}</div>
                  <div className="mt-2 text-sm uppercase tracking-wider opacity-90">{s.l}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader badge="Testimonials" title="A Legacy of Trust" subtitle="Voices of parents who have chosen Stanford to shape their children's futures." />

          <motion.div
            variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
            className="mt-12 grid md:grid-cols-3 gap-6"
          >
            {[
              { name: "Mr. Ram Kumar", role: "Parent of Grade 8 Student", quote: "Stanford provides an unparalleled academic environment. Infrastructure and faculty are world-class — preparing my child for global challenges." },
              { name: "Mr. Dhanraj", role: "Parent of Grade 10 Student", quote: "The meticulous attention to both academic rigour and holistic development is outstanding. The leadership programmes have truly transformed my daughter's confidence." },
              { name: "Mrs. Anitha", role: "Parent of Grade 5 Student", quote: "An institution of true prestige. The dedication of the faculty and exposure to international methodologies makes Stanford the best choice in Bangalore." },
            ].map((t, i) => (
              <motion.div
                key={i} variants={fadeUp}
                whileHover={{ y: -6 }}
                className="glass rounded-3xl p-7 relative"
              >
                <Quote className="absolute top-5 right-5 h-10 w-10 text-[var(--yellow)] opacity-70" />
                <div className="flex items-center gap-1 text-[var(--yellow-deep)]">
                  {[0,1,2,3,4].map(j => <Star key={j} className="h-4 w-4 fill-[var(--yellow-deep)]" />)}
                </div>
                <p className="mt-4 text-[var(--dark-green-deep)] leading-relaxed">"{t.quote}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-11 w-11 rounded-full bg-[var(--dark-green)] text-[var(--yellow)] grid place-items-center font-bold font-display">
                    {t.name.split(" ").slice(-1)[0][0]}
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--dark-green-deep)]">{t.name}</div>
                    <div className="text-xs text-[var(--muted-foreground)]">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Admissions CTA */}
      <section id="admissions" className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 1, scale: 1 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden glass-dark p-10 lg:p-16 text-center"
          >
            <motion.div
              animate={reduce ? undefined : { scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-[var(--yellow)] blur-3xl"
            />
            <motion.div
              animate={reduce ? undefined : { scale: [1, 1.25, 1], opacity: [0.3, 0.45, 0.3] }}
              transition={{ duration: 9, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-[var(--dark-green-soft)] blur-3xl"
            />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full glass-yellow px-4 py-1.5 text-xs font-semibold text-[var(--dark-green-deep)] uppercase tracking-wider">
                <Sparkles className="h-3.5 w-3.5" /> Admissions 2026 – 27
              </div>
              <h2 className="mt-5 font-display text-4xl lg:text-5xl font-bold text-balance max-w-3xl mx-auto">
                Begin Your Child's Journey Toward <span className="text-[var(--yellow)]">Excellence</span>
              </h2>
              <p className="mt-4 max-w-2xl mx-auto opacity-90 text-lg">
                Join a prestigious community dedicated to nurturing the innovators, leaders, and thinkers of tomorrow.
              </p>
              <motion.a
                whileHover={{ y: -3, scale: 1.03 }} whileTap={{ scale: 0.97 }}
                href="#contact"
                className="mt-8 btn-shine inline-flex items-center gap-2 rounded-xl bg-[var(--yellow)] text-[var(--dark-green-deep)] px-8 py-4 font-bold hover:bg-[var(--yellow-deep)] transition shadow-xl"
              >
                Apply for Admission <ArrowRight className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer id="contact" className="pt-20 pb-10">
        <div className="mx-auto max-w-7xl px-4">
          <div className="glass rounded-3xl p-10 lg:p-14">
            <div className="grid lg:grid-cols-4 gap-10">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3">
                  <img src={logo} alt="Stanford" className="h-12 w-auto" />
                  <div>
                    <div className="font-display font-bold text-lg text-[var(--dark-green-deep)]">Stanford International School</div>
                    <div className="text-xs uppercase tracking-[0.18em] text-[var(--dark-green-soft)]">Bangalore</div>
                  </div>
                </div>
                <p className="mt-4 text-[var(--muted-foreground)] max-w-md leading-relaxed">
                  A world-class education blending international standards with strong foundational values — for over 30 years.
                </p>
                <div className="mt-6 flex gap-3">
                  {["f","in","ig","yt"].map((s) => (
                    <motion.a key={s} whileHover={{ y: -3, scale: 1.1 }} href="#" aria-label={s} className="h-10 w-10 grid place-items-center rounded-xl glass-yellow text-[var(--dark-green-deep)] font-bold text-xs uppercase hover:bg-[var(--yellow)] transition">{s}</motion.a>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-display font-bold text-[var(--dark-green-deep)] mb-4">Explore</h4>
                <ul className="space-y-2">
                  {nav.map(n => (
                    <li key={n.href}><a href={n.href} className="text-sm text-[var(--muted-foreground)] hover:text-[var(--dark-green)] transition story-link">{n.label}</a></li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-display font-bold text-[var(--dark-green-deep)] mb-4">Reach Us</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3"><MapPin className="h-4 w-4 mt-0.5 text-[var(--dark-green)]" /><span className="text-[var(--muted-foreground)]">Stanford International School, Bangalore, Karnataka</span></li>
                  <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-[var(--dark-green)]" /><a href="tel:+910000000000" className="text-[var(--muted-foreground)] hover:text-[var(--dark-green)]">+91 00000 00000</a></li>
                  <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-[var(--dark-green)]" /><a href="mailto:info@stanfordtechnoschool.com" className="text-[var(--muted-foreground)] hover:text-[var(--dark-green)]">info@stanfordtechnoschool.com</a></li>
                </ul>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-3 text-xs text-[var(--muted-foreground)]">
              <div>© {new Date().getFullYear()} Stanford International School. All rights reserved.</div>
              <div>Recognised by Government of Karnataka</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionHeader({ badge, title, subtitle }: { badge: string; title: string; subtitle: string }) {
  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6 }}
      className="text-center max-w-3xl mx-auto"
    >
      <div className="glass-yellow inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold text-[var(--dark-green-deep)] uppercase tracking-wider">{badge}</div>
      <h2 className="mt-4 font-display text-4xl lg:text-5xl font-bold text-[var(--dark-green-deep)] text-balance">{title}</h2>
      <p className="mt-4 text-lg text-[var(--muted-foreground)]">{subtitle}</p>
    </motion.div>
  );
}
