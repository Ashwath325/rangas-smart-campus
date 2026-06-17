import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ScanFace, MapPin, CheckCircle2, MessageCircle, LayoutDashboard, ShieldCheck,
  Sparkles, Zap, TrendingUp, Bell, Bus, IdCard, Users, BarChart3,
  ArrowRight, Menu, X, Mail, Phone, MapPinned, Twitter, Linkedin, Github,
} from "lucide-react";
import heroImg from "@/assets/hero-dashboard.jpg";
import dashImg from "@/assets/dashboard-showcase.jpg";
import logo from "@/assets/ranga-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RanGa Software Solutions — AI Student Tracking & Smart School Monitoring" },
      { name: "description", content: "Automate attendance, track student movement in real time, enhance campus security, and keep parents informed with AI-powered monitoring." },
      { property: "og:title", content: "RanGa Software Solutions" },
      { property: "og:description", content: "AI-Powered Student Tracking & Smart School Monitoring System." },
    ],
  }),
  component: Page,
});

/* ---------- Reusable bits ---------- */

const Section = ({ id, eyebrow, title, sub, children, dark = false }: any) => (
  <section id={id} className={`relative py-24 sm:py-32 ${dark ? "text-white" : ""}`}>
    <div className="mx-auto max-w-7xl px-6">
      {(eyebrow || title) && (
        <div className="mx-auto max-w-3xl text-center mb-14 animate-fade-up">
          {eyebrow && (
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-brand-blue">
              <Sparkles className="size-3.5" /> {eyebrow}
            </span>
          )}
          {title && (
            <h2 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight">
              {title}
            </h2>
          )}
          {sub && <p className={`mt-4 text-base sm:text-lg ${dark ? "text-white/70" : "text-muted-foreground"}`}>{sub}</p>}
        </div>
      )}
      {children}
    </div>
  </section>
);

const GradientButton = ({ children, href = "#contact", variant = "primary" }: any) => {
  const base = "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300";
  const styles =
    variant === "primary"
      ? "bg-gradient-cta text-white shadow-glow hover:scale-[1.03] hover:shadow-[0_25px_70px_-15px_rgba(106,13,173,0.5)]"
      : "border border-border bg-white/80 backdrop-blur text-foreground hover:border-brand-cyan hover:text-brand-blue";
  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
    </a>
  );
};

/* ---------- Page ---------- */

function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <FeatureCards />
      <About />
      <FeaturedProduct />
      <HowItWorks />
      <Benefits />
      <DashboardShowcase />
      <Roadmap />
      <Stats />
      <Contact />
      <Footer />
    </div>
  );
}

/* ---------- Nav ---------- */

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#features", label: "Features" },
    { href: "#about", label: "About" },
    { href: "#product", label: "Product" },
    { href: "#how", label: "How it works" },
    { href: "#roadmap", label: "Roadmap" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-3">
        <div className="glass shadow-card rounded-2xl flex items-center justify-between px-4 sm:px-5 py-2.5">
          <a href="#" className="flex items-center gap-2.5">
            <img src={logo} alt="RanGa Software Solutions" className="h-9 w-9 object-contain" />
            <div className="leading-tight hidden sm:block">
              <div className="text-sm font-semibold">RanGa</div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Software Solutions</div>
            </div>
          </a>
          <nav className="hidden lg:flex items-center gap-7">
            {links.map(l => (
              <a key={l.href} href={l.href} className="text-sm text-foreground/70 hover:text-brand-blue transition">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <a href="#contact" className="text-sm font-medium text-foreground/70 hover:text-brand-blue">Contact Sales</a>
            <GradientButton href="#contact">Book a Demo <ArrowRight className="size-4" /></GradientButton>
          </div>
          <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
        {open && (
          <div className="lg:hidden mt-2 glass rounded-2xl p-4 shadow-card animate-fade-up">
            <div className="flex flex-col gap-3">
              {links.map(l => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm py-1.5">{l.label}</a>
              ))}
              <GradientButton href="#contact">Book a Demo</GradientButton>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */

function Hero() {
  return (
    <section className="relative pt-28 sm:pt-36 pb-24 overflow-hidden bg-[#020617] text-white">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute top-0 left-1/4 size-[500px] bg-indigo-600/15 blur-[120px] rounded-full" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 size-[600px] bg-cyan-500/15 blur-[150px] rounded-full" />
      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8 lg:space-y-10 animate-fade-up">
            <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
              <span className="size-2 rounded-full bg-indigo-400 animate-pulse" />
              <span
                className="text-[11px] font-medium tracking-[0.18em] uppercase text-indigo-300"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                AI-Powered Student Tracking System
              </span>
            </div>

            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-white"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Transforming Schools with{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400">
                AI-Powered
              </span>{" "}
              Student Safety & Automation
            </h1>

            <p className="text-lg text-slate-400 max-w-xl leading-relaxed font-light">
              Automate attendance, track student movement in real time, enhance campus security,
              and keep parents informed through intelligent AI-powered monitoring.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2 px-7 py-3.5 bg-indigo-600 text-white font-semibold rounded-xl transition-all hover:bg-indigo-500 hover:shadow-[0_0_40px_-10px_rgba(79,70,229,0.7)]"
              >
                Book a Demo
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-7 py-3.5 bg-white/5 border border-white/10 text-white font-semibold rounded-xl backdrop-blur-sm transition-all hover:bg-white/10"
              >
                Contact Sales
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-6 border-t border-white/5">
              {[
                { v: "99%", l: "Accuracy" },
                { v: "Real-Time", l: "Monitoring" },
                { v: "24/7", l: "Availability" },
                { v: "Enterprise", l: "Grade" },
              ].map((s, i, arr) => (
                <div key={s.l} className="flex items-center gap-6 sm:gap-8">
                  <div className="flex flex-col">
                    <span
                      className="text-xl sm:text-2xl font-bold text-white tracking-tighter"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      {s.v}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.18em] text-slate-500 font-bold">
                      {s.l}
                    </span>
                  </div>
                  {i < arr.length - 1 && <div className="hidden sm:block w-px h-8 bg-white/10" />}
                </div>
              ))}
            </div>
          </div>

          {/* Right mockup */}
          <div className="relative animate-fade-up" style={{ animationDelay: "120ms" }}>
            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-950 p-4 shadow-2xl backdrop-blur-xl">
              {/* Mockup header */}
              <div className="flex items-center justify-between mb-6 px-2">
                <div className="flex gap-1.5">
                  <div className="size-3 rounded-full bg-red-500/20 border border-red-500/40" />
                  <div className="size-3 rounded-full bg-amber-500/20 border border-amber-500/40" />
                  <div className="size-3 rounded-full bg-emerald-500/20 border border-emerald-500/40" />
                </div>
                <div
                  className="text-[10px] font-medium text-slate-500 tracking-[0.2em] uppercase"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Live Monitoring · Node-04
                </div>
              </div>

              {/* Dashboard grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  {/* Student card */}
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="size-10 rounded-full bg-indigo-500/20 border border-indigo-400/30 grid place-items-center">
                        <ScanFace className="size-5 text-indigo-300" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white">Aarav Sharma</p>
                        <p
                          className="text-[10px] text-emerald-400"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          ID: #88241
                        </p>
                      </div>
                    </div>
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-indigo-500" />
                    </div>
                  </div>
                  {/* Bar graph */}
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-transparent border border-indigo-500/20">
                    <p className="text-[10px] text-indigo-300 font-bold mb-2 uppercase tracking-wider">
                      Real-time Flow
                    </p>
                    <div className="flex items-end gap-1 h-12">
                      {[50, 75, 100, 66, 80].map((h, i) => (
                        <div
                          key={i}
                          className="w-full bg-indigo-400/60 rounded-t-sm"
                          style={{ height: `${h}%`, opacity: 0.3 + (h / 100) * 0.7 }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Security alert */}
                  <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20">
                    <div className="flex justify-between items-start mb-2">
                      <span className="px-2 py-0.5 rounded text-[9px] bg-cyan-500/20 text-cyan-300 font-bold uppercase tracking-wider">
                        Verified
                      </span>
                      <span className="text-[9px] text-slate-500">09:41 AM</span>
                    </div>
                    <p className="text-xs text-white leading-snug">
                      Perimeter Gate 4 · Access Granted
                    </p>
                  </div>
                  {/* Log */}
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 h-[100px] overflow-hidden">
                    <div className="space-y-2 opacity-60">
                      <div className="h-1.5 w-full bg-white/10 rounded" />
                      <div className="h-1.5 w-3/4 bg-white/10 rounded" />
                      <div className="h-1.5 w-1/2 bg-white/10 rounded" />
                      <div className="h-1.5 w-5/6 bg-white/10 rounded" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating parent alert */}
              <div className="absolute -bottom-6 -left-6 sm:-left-10 p-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-2xl shadow-2xl flex items-center gap-3 animate-float">
                <div className="size-10 bg-indigo-500 rounded-full grid place-items-center shadow-lg shadow-indigo-500/40">
                  <Bell className="size-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Parent Alert Sent</p>
                  <p className="text-[10px] text-slate-400 font-medium">WhatsApp · just now</p>
                </div>
              </div>
            </div>

            {/* Decorative */}
            <div className="pointer-events-none absolute -top-10 -right-10 size-40 bg-indigo-500/20 rounded-full blur-3xl" />
            <div className="pointer-events-none absolute top-1/2 -right-4 w-px h-32 bg-gradient-to-b from-transparent via-cyan-400 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Feature Cards ---------- */

const FEATURES = [
  { icon: ScanFace, title: "AI Face Recognition", desc: "Automatically identify students and record attendance." },
  { icon: MapPin, title: "Real-Time Tracking", desc: "Monitor student movement across campus." },
  { icon: CheckCircle2, title: "Smart Attendance", desc: "Eliminate manual attendance processes." },
  { icon: MessageCircle, title: "Parent Notifications", desc: "Instant WhatsApp alerts for parents." },
  { icon: LayoutDashboard, title: "Live Dashboards", desc: "Monitor attendance, locations, and activity." },
  { icon: ShieldCheck, title: "Campus Security", desc: "Improve safety with AI monitoring." },
];

function FeatureCards() {
  return (
    <Section id="features" eyebrow="Trusted Technology" title="Everything a smart campus needs" sub="A unified AI platform built for modern schools — secure, automated, intelligent.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURES.map((f, i) => (
          <div key={i} className="group relative rounded-2xl border border-border bg-card p-7 shadow-card hover:shadow-glow hover:-translate-y-1 transition-all duration-300">
            <div className="absolute inset-0 rounded-2xl bg-gradient-brand opacity-0 group-hover:opacity-[0.04] transition-opacity" />
            <div className="size-12 rounded-xl bg-gradient-brand grid place-items-center mb-5 shadow-[0_8px_20px_-6px_rgba(15,82,186,0.45)]">
              <f.icon className="size-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- About ---------- */

const VALUES = ["Reliable", "Adaptive", "Non-Stopping Innovation", "Genius Engineering", "Aspirational Growth"];

function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1 text-xs font-medium text-brand-purple">
            About RanGa
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight">
            Building <span className="text-gradient">Intelligent</span> Software Solutions
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            RanGa Software Solutions specializes in Artificial Intelligence, Computer Vision,
            Automation, and Enterprise Software Development. We create innovative technology
            solutions that help organizations operate smarter, safer, and more efficiently.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {VALUES.map(v => (
              <span key={v} className="rounded-full border border-border bg-white px-3.5 py-1.5 text-sm font-medium hover:border-brand-cyan hover:text-brand-blue transition">
                {v}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { k: "10+", v: "Schools Onboarding" },
            { k: "99%", v: "Recognition Accuracy" },
            { k: "24/7", v: "Real-Time Monitoring" },
            { k: "50k+", v: "Events Processed Daily" },
          ].map((s, i) => (
            <div key={i} className="rounded-2xl bg-white border border-border p-6 shadow-card">
              <div className="text-3xl sm:text-4xl font-semibold text-gradient">{s.k}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Featured Product ---------- */

const PRODUCT_FEATURES = [
  "Face Recognition Attendance",
  "Entry and Exit Monitoring",
  "Classroom Attendance Automation",
  "Student Movement Tracking",
  "Unauthorized Zone Alerts",
  "Parent WhatsApp Notifications",
  "Emergency Alerts",
  "Real-Time Reporting",
  "School Analytics Dashboard",
];

function FeaturedProduct() {
  return (
    <Section id="product" eyebrow="Flagship Product" title="AI-Powered Student Tracking System" sub="One platform to unify attendance, security, location, and parent communication.">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -inset-6 bg-gradient-brand opacity-15 blur-3xl rounded-[2.5rem]" />
          <div className="relative rounded-3xl overflow-hidden ring-1 ring-black/5 shadow-glow">
            <img src={dashImg} alt="Dashboard mockup" width={1600} height={1000} loading="lazy" className="w-full h-auto" />
          </div>
        </div>
        <div className="order-1 lg:order-2 grid sm:grid-cols-2 gap-3">
          {PRODUCT_FEATURES.map((f, i) => (
            <div key={i} className="flex items-start gap-3 rounded-xl border border-border bg-white p-4 hover:border-brand-cyan/60 transition">
              <div className="size-8 rounded-lg bg-gradient-brand grid place-items-center shrink-0">
                <CheckCircle2 className="size-4 text-white" />
              </div>
              <span className="text-sm font-medium">{f}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------- How It Works ---------- */

const STEPS = [
  { t: "Student enters school", d: "Arrival captured at entry gate cameras." },
  { t: "AI camera recognizes student", d: "Computer vision identifies the student in milliseconds." },
  { t: "Attendance recorded automatically", d: "No manual roll calls — data hits the cloud instantly." },
  { t: "Location tracking begins", d: "Movement monitored across authorized zones." },
  { t: "Parents receive notifications", d: "Instant WhatsApp updates on arrival and alerts." },
  { t: "Administrators monitor dashboard", d: "Live insights for staff, security, and leadership." },
];

function HowItWorks() {
  return (
    <section id="how" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-soft" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="inline-flex rounded-full bg-white border border-border px-3 py-1 text-xs font-medium text-brand-blue">How it works</span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight">A seamless six-step flow</h2>
          <p className="mt-4 text-muted-foreground">From arrival to administrator dashboard — fully automated.</p>
        </div>
        <div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STEPS.map((s, i) => (
            <div key={i} className="relative rounded-2xl bg-white border border-border p-7 shadow-card hover:shadow-glow transition-all">
              <div className="absolute -top-4 left-7 px-3 py-1 rounded-full bg-gradient-cta text-white text-xs font-semibold shadow-glow">
                Step {i + 1}
              </div>
              <h3 className="mt-3 text-lg font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 size-6 rounded-full bg-gradient-brand grid place-items-center">
                  <ArrowRight className="size-3 text-white" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Benefits ---------- */

const BENEFITS = [
  { icon: ShieldCheck, t: "Student Safety", d: "Continuous monitoring and security." },
  { icon: Zap, t: "Administrative Efficiency", d: "Automate attendance and reporting." },
  { icon: MessageCircle, t: "Parent Trust", d: "Real-time communication." },
  { icon: TrendingUp, t: "Data-Driven Decisions", d: "Actionable insights and analytics." },
];

function Benefits() {
  return (
    <Section eyebrow="Why it matters" title="Benefits across your entire school">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {BENEFITS.map((b, i) => (
          <div key={i} className="rounded-2xl p-7 bg-gradient-soft border border-border hover:-translate-y-1 transition-all duration-300 shadow-card">
            <div className="size-12 rounded-2xl bg-white grid place-items-center shadow-card">
              <b.icon className="size-6 text-brand-blue" />
            </div>
            <h3 className="mt-5 text-lg font-semibold">{b.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Dashboard Showcase ---------- */

function DashboardShowcase() {
  const kpis = [
    { label: "Total Students", value: "1,284", trend: "+3.2%" },
    { label: "Present Today", value: "1,219", trend: "94.9%" },
    { label: "Absent", value: "65", trend: "5.1%" },
    { label: "Alerts", value: "3", trend: "live" },
  ];
  return (
    <section className="relative py-24 sm:py-32 bg-[#0a1330] text-white overflow-hidden">
      <div className="absolute inset-0 -z-0 opacity-40"
        style={{ background: "radial-gradient(60% 60% at 20% 20%, rgba(0,184,217,0.25), transparent 60%), radial-gradient(50% 50% at 80% 80%, rgba(106,13,173,0.35), transparent 60%)" }} />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center mb-14">
          <span className="inline-flex rounded-full glass-dark px-3 py-1 text-xs font-medium text-brand-cyan">Live Dashboard</span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight">Insights leadership can act on</h2>
          <p className="mt-4 text-white/70">Track attendance, locations, parent notifications and security alerts in real time.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-5">
          {kpis.map((k, i) => (
            <div key={i} className="lg:col-span-3 glass-dark rounded-2xl p-5">
              <div className="text-xs uppercase tracking-wider text-white/60">{k.label}</div>
              <div className="mt-2 text-3xl font-semibold">{k.value}</div>
              <div className="mt-1 text-xs text-brand-cyan">{k.trend}</div>
            </div>
          ))}

          <div className="lg:col-span-8 glass-dark rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="font-semibold">Attendance Trend</div>
              <div className="text-xs text-white/60">Last 7 days</div>
            </div>
            <MiniChart />
          </div>

          <div className="lg:col-span-4 glass-dark rounded-2xl p-6">
            <div className="font-semibold mb-4">Parent Notifications</div>
            <ul className="space-y-3 text-sm">
              {[
                { n: "Aarav S.", m: "Arrived at school", t: "08:12" },
                { n: "Diya R.", m: "Class 6B attendance marked", t: "09:01" },
                { n: "Kabir M.", m: "Left campus", t: "15:24" },
                { n: "Meera L.", m: "Bus boarded", t: "15:31" },
              ].map((x, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="size-8 rounded-full bg-gradient-brand grid place-items-center text-xs font-semibold">{x.n[0]}</div>
                  <div className="flex-1">
                    <div className="font-medium">{x.n}</div>
                    <div className="text-white/60 text-xs">{x.m}</div>
                  </div>
                  <span className="text-xs text-white/50">{x.t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-12 glass-dark rounded-2xl p-2 ring-1 ring-white/10">
            <img src={dashImg} alt="Dashboard" loading="lazy" width={1600} height={1000} className="w-full rounded-xl opacity-90" />
          </div>
        </div>
      </div>
    </section>
  );
}

function MiniChart() {
  const points = [22, 35, 28, 48, 40, 62, 70];
  const max = Math.max(...points);
  const w = 600, h = 160, pad = 10;
  const step = (w - pad * 2) / (points.length - 1);
  const path = points.map((p, i) => `${i === 0 ? "M" : "L"} ${pad + i * step} ${h - pad - (p / max) * (h - pad * 2)}`).join(" ");
  const area = `${path} L ${w - pad} ${h - pad} L ${pad} ${h - pad} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-40">
      <defs>
        <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#00B8D9" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#6A0DAD" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="l" x1="0" x2="1">
          <stop offset="0%" stopColor="#00B8D9" />
          <stop offset="100%" stopColor="#6A0DAD" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#g)" />
      <path d={path} stroke="url(#l)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {points.map((p, i) => (
        <circle key={i} cx={pad + i * step} cy={h - pad - (p / max) * (h - pad * 2)} r="3" fill="#00B8D9" />
      ))}
    </svg>
  );
}

/* ---------- Roadmap ---------- */

const PHASES = [
  { p: "Phase 1", t: "Pilot Classroom Deployment", d: "Validate AI accuracy with a single classroom rollout." },
  { p: "Phase 2", t: "School-Wide Deployment", d: "Extend coverage to all classrooms, gates, and zones." },
  { p: "Phase 3", t: "Smart Campus Ecosystem", d: "Bus tracking, visitor management, ERP, and parent app." },
];
const FUTURE = [
  { icon: Bus, t: "School Bus Tracking" },
  { icon: Users, t: "Visitor Management" },
  { icon: MessageCircle, t: "Parent Mobile App" },
  { icon: IdCard, t: "Digital Student ID" },
  { icon: LayoutDashboard, t: "ERP Integration" },
  { icon: BarChart3, t: "AI Analytics" },
];

function Roadmap() {
  return (
    <Section id="roadmap" eyebrow="Roadmap" title="Built today. Engineered for tomorrow.">
      <div className="relative">
        <div className="hidden md:block absolute left-0 right-0 top-12 h-px bg-gradient-to-r from-transparent via-brand-cyan/60 to-transparent" />
        <div className="grid md:grid-cols-3 gap-6">
          {PHASES.map((p, i) => (
            <div key={i} className="relative rounded-2xl bg-white border border-border p-7 shadow-card">
              <div className="size-10 rounded-full bg-gradient-cta text-white grid place-items-center font-semibold shadow-glow">{i + 1}</div>
              <div className="mt-4 text-xs uppercase tracking-wider text-brand-purple font-semibold">{p.p}</div>
              <h3 className="mt-1 text-lg font-semibold">{p.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14">
        <div className="text-center text-sm font-medium text-muted-foreground mb-6">Future Features</div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {FUTURE.map((f, i) => (
            <div key={i} className="rounded-2xl bg-gradient-soft border border-border p-5 text-center hover:shadow-glow hover:-translate-y-0.5 transition">
              <div className="mx-auto size-10 rounded-xl bg-white grid place-items-center shadow-card">
                <f.icon className="size-5 text-brand-blue" />
              </div>
              <div className="mt-3 text-xs font-semibold">{f.t}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------- Stats ---------- */

const STATS = [
  { v: "99%", l: "Attendance Accuracy" },
  { v: "Real-Time", l: "Monitoring" },
  { v: "24/7", l: "System Availability" },
  { v: "AI", l: "Powered Automation" },
];

function Stats() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl bg-gradient-brand text-white p-10 sm:p-14 shadow-glow relative overflow-hidden">
          <div className="absolute inset-0 opacity-20"
            style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
          <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {STATS.map((s, i) => (
              <div key={i}>
                <div className="text-4xl sm:text-5xl font-semibold tracking-tight">{s.v}</div>
                <div className="mt-2 text-sm text-white/80">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-surface">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-12">
          <span className="inline-flex rounded-full border border-border bg-white px-3 py-1 text-xs font-medium text-brand-blue">Contact</span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight">
            Ready to Build a <span className="text-gradient">Smarter School?</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Tell us about your school — we'll set up a personalized demo.</p>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="grid sm:grid-cols-2 gap-4 bg-white rounded-3xl p-8 border border-border shadow-card"
        >
          {[
            { n: "name", p: "Name", t: "text" },
            { n: "school", p: "School Name", t: "text" },
            { n: "phone", p: "Phone", t: "tel" },
            { n: "email", p: "Email", t: "email" },
            { n: "students", p: "Number of Students", t: "number" },
          ].map(f => (
            <input
              key={f.n} required type={f.t} placeholder={f.p}
              className={`${f.n === "students" ? "" : ""} rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 transition`}
            />
          ))}
          <textarea
            placeholder="Message" rows={4}
            className="sm:col-span-2 rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 transition"
          />
          <div className="sm:col-span-2 flex items-center justify-between gap-4 flex-wrap">
            <p className="text-xs text-muted-foreground">By submitting you agree to our terms. We'll never share your data.</p>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white bg-gradient-cta shadow-glow hover:scale-[1.03] transition"
            >
              {sent ? "Request Sent ✓" : "Request Demo"} <ArrowRight className="size-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */

function Footer() {
  return (
    <footer className="bg-[#0a1330] text-white/80 pt-16 pb-10">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="RanGa" className="h-10 w-10 object-contain bg-white rounded-xl p-1" />
            <div>
              <div className="font-semibold text-white">RanGa</div>
              <div className="text-[10px] uppercase tracking-wider text-white/50">Software Solutions</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-white/60">Coded for Today. Solutions for Tomorrow.</p>
          <div className="mt-5 flex gap-3">
            {[Twitter, Linkedin, Github].map((I, i) => (
              <a key={i} href="#" className="size-9 grid place-items-center rounded-full glass-dark hover:bg-gradient-cta transition">
                <I className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold text-white mb-4">Quick Links</div>
          <ul className="space-y-2 text-sm">
            {["Features", "About", "Product", "Roadmap", "Contact"].map(x => (
              <li key={x}><a href={`#${x.toLowerCase()}`} className="hover:text-brand-cyan transition">{x}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold text-white mb-4">Services</div>
          <ul className="space-y-2 text-sm">
            {["AI & Computer Vision", "Enterprise Software", "Automation", "Smart Campus", "Custom Development"].map(x => (
              <li key={x} className="hover:text-brand-cyan transition cursor-pointer">{x}</li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold text-white mb-4">Contact</div>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><Mail className="size-4 text-brand-cyan" /> hello@rangasoftware.com</li>
            <li className="flex items-center gap-2"><Phone className="size-4 text-brand-cyan" /> +91 00000 00000</li>
            <li className="flex items-center gap-2"><MapPinned className="size-4 text-brand-cyan" /> India</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t border-white/10 pt-6 mx-auto max-w-7xl px-6 flex flex-wrap items-center justify-between gap-3 text-xs text-white/50">
        <div>© {new Date().getFullYear()} RanGa Software Solutions. All rights reserved.</div>
        <div className="italic">"Coded for Today. Solutions for Tomorrow."</div>
      </div>
    </footer>
  );
}
