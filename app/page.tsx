/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full bg-[#f9f8f4] text-neutral-900 overflow-x-hidden">

      {/* ===================== HERO ===================== */}
      <div className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-neutral-900 selection:bg-[#b5e55a] selection:text-black">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center z-0 select-none"
        >
          <source src="/herobg-video.mp4" type="video/mp4" />
        </video>

        {/* Vignette Overlay */}
        <div className="absolute inset-0 hero-vignette z-[1] pointer-events-none"></div>

        {/* Navbar */}
        <header className="relative z-20 w-full px-6 md:px-12 pt-7 pb-4 flex items-center justify-between max-w-[80rem] mx-auto">
          {/* Brand */}
          <div className="flex items-center gap-2.5 cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-[#b5e55a] flex items-center justify-center shadow-md">
              <svg className="w-5 h-5 text-[#1a2e0f]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.25 3.75a13.5 13.5 0 0 0-9.75 3.99A13.5 13.5 0 0 0 .75 17.49a.75.75 0 0 0 .75.76h9a13.46 13.46 0 0 0 9.75-4.25 13.46 13.46 0 0 0 0-10.25zM10.5 16.74H2.3c.7-3.7 3.32-6.72 6.84-8.03.35 1.54.88 3.01 1.57 4.38-.14 1.22-.21 2.45-.21 3.65zm8.44-3.55a12.02 12.02 0 0 1-7.85 3.51c.07-1.12.16-2.25.31-3.37.58-.09 1.17-.15 1.77-.15 2.05 0 3.96.65 5.77 1.01z" />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight text-white drop-shadow-sm">CropBazaar</span>
          </div>

          {/* Center Pill Nav */}
          <nav className="hidden md:flex items-center p-1.5 rounded-full glass-nav shadow-lg">
            <a className="px-5 py-1.5 rounded-full bg-white text-neutral-900 font-semibold text-sm transition-all shadow-sm" href="#home">Home</a>
            <a className="px-5 py-1.5 rounded-full text-white/90 hover:text-white text-sm font-medium transition-colors" href="#how-it-works">How It Works</a>
            <a className="px-5 py-1.5 rounded-full text-white/90 hover:text-white text-sm font-medium transition-colors" href="#features">Features</a>
            <a className="px-5 py-1.5 rounded-full text-white/90 hover:text-white text-sm font-medium transition-colors" href="#about">About</a>
          </nav>

          {/* Right CTA */}
          <div className="flex items-center">
            <Link href="/dashboard" className="px-6 py-2 rounded-full bg-white text-neutral-900 font-semibold text-sm hover:bg-neutral-100 transition-all shadow-md">
              Farmer Login
            </Link>
          </div>
        </header>

        {/* Hero Body */}
        <main id="home" className="relative z-10 w-full max-w-[80rem] mx-auto px-6 md:px-12 my-auto pt-8 pb-16 flex flex-col justify-center">
          <div className="max-w-[42rem] w-full text-left">
            <div className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#b5e55a] animate-pulse"></span>
              Mandi Procurement Platform
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white leading-[1.08] drop-shadow-md">
              Smart Procurement for<br />
              <span className="hero-title-serif font-normal italic font-serif">Future-Ready Farmers</span>
            </h1>
            <p className="mt-6 text-sm sm:text-base text-white/80 leading-relaxed max-w-[32rem] drop-shadow">
              Book procurement slots, track live queues, and monitor your crop from registration to payment — all in one place.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#b5e55a] text-[#1a2e0f] font-semibold text-sm hover:bg-[#a3d44d] transition-all transform active:scale-95 shadow-md"
              >
                <span>Open Farmer Dashboard</span>
                <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/60 hover:border-white bg-white/10 hover:bg-white/20 text-white font-medium text-sm backdrop-blur-sm transition-all transform active:scale-95"
              >
                Explore CropBazaar
              </a>
            </div>
          </div>
        </main>

        {/* Hero Footer Bar */}
        <div className="relative z-10 w-full max-w-[80rem] mx-auto px-6 md:px-12 pb-6 flex items-center justify-between border-b border-white/15">
          <a className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/85 hover:text-white font-semibold transition-colors" href="#how-it-works">
            <span>SCROLL</span>
            <svg className="w-3.5 h-3.5 animate-bounce mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </a>
        </div>
      </div>

      {/* ===================== HOW IT WORKS ===================== */}
      <section id="how-it-works" className="w-full bg-white py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-[72rem] mx-auto w-full">
          <div className="text-center mb-16 w-full">
            <span className="inline-block mb-3 text-xs font-bold uppercase tracking-widest text-[#2d5a27] bg-[#f0fae8] px-3 py-1 rounded-full">How It Works</span>
            <br className="hidden" />
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 tracking-tight leading-tight">
              From Crop to Payment,<br className="hidden md:block" /> Without the Waiting
            </h2>
            <p className="mt-4 text-base text-neutral-500 w-full max-w-[36rem] mx-auto leading-relaxed">
              CropBazaar connects farmers with procurement centres and gives them visibility throughout the entire procurement journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                icon: "inventory",
                title: "Register Your Crop",
                desc: "Add your crop, quantity and procurement requirements.",
                color: "bg-[#f0fae8] text-[#2d5a27]",
              },
              {
                step: "02",
                icon: "calendar_month",
                title: "Book Your Slot",
                desc: "Choose a nearby procurement centre and available time slot.",
                color: "bg-[#e8f4fd] text-[#1a5f8a]",
              },
              {
                step: "03",
                icon: "queue",
                title: "Track Your Queue",
                desc: "See your live queue position and estimated waiting time.",
                color: "bg-[#fff8e8] text-[#a36b00]",
              },
              {
                step: "04",
                icon: "payments",
                title: "Get Paid",
                desc: "Track procurement progress and payment status from one place.",
                color: "bg-[#f5f0ff] text-[#5b21b6]",
              },
            ].map((item) => (
              <div key={item.step} className="bg-[#f9f8f4] rounded-2xl p-6 border border-neutral-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <div className={`w-11 h-11 rounded-xl ${item.color} flex items-center justify-center`}>
                    <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
                  </div>
                  <span className="text-3xl font-black text-neutral-100 select-none">{item.step}</span>
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900 text-lg mb-1">{item.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CORE BENEFIT ===================== */}
      <section id="about" className="w-full bg-[#f9f8f4] py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-[72rem] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left */}
            <div>
              <span className="inline-block mb-4 text-xs font-bold uppercase tracking-widest text-[#2d5a27] bg-[#f0fae8] px-3 py-1 rounded-full">The Problem We Solve</span>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight leading-tight mb-2">
                Know Before<br />You Go
              </h2>
              <h3 className="text-xl font-semibold text-[#2d5a27] mb-5">Stop Waiting Blind.</h3>
              <p className="text-neutral-600 text-base leading-relaxed">
                Farmers often travel to procurement centres without knowing the queue, available capacity or expected waiting time. CropBazaar gives them that information before they leave.
              </p>
              <div className="mt-8 flex flex-col gap-4">
                {[
                  "Real-time queue visibility before you travel",
                  "Slot booking so your time is never wasted",
                  "Full procurement tracking from arrival to payment",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#b5e55a] flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-[#1a2e0f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M4.5 12.75l6 6 9-13.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                      </svg>
                    </div>
                    <span className="text-neutral-700 text-sm leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Mock Dashboard Card */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-[24rem] bg-white rounded-3xl shadow-2xl border border-neutral-100 overflow-hidden">
                {/* Card Header */}
                <div className="bg-[#1a2e0f] px-6 py-4 flex items-center justify-between">
                  <div>
                    <p className="text-[#b5e55a] text-xs font-bold uppercase tracking-wider">Procurement Centre</p>
                    <h4 className="text-white font-bold text-base mt-0.5 leading-tight">XYZ Grain Procurement<br />Centre</h4>
                  </div>
                  <span className="px-2.5 py-1 bg-[#b5e55a] text-[#1a2e0f] rounded-full text-xs font-black uppercase tracking-wide">OPEN</span>
                </div>
                {/* Stats Grid */}
                <div className="grid grid-cols-3 divide-x divide-neutral-100">
                  <div className="px-4 py-5 text-center">
                    <p className="text-2xl font-black text-[#2d5a27]">18</p>
                    <p className="text-neutral-500 text-xs mt-1 leading-tight">Farmers<br />in Queue</p>
                  </div>
                  <div className="px-4 py-5 text-center">
                    <p className="text-2xl font-black text-[#a36b00]">1h 15m</p>
                    <p className="text-neutral-500 text-xs mt-1 leading-tight">Est. Wait<br />Time</p>
                  </div>
                  <div className="px-4 py-5 text-center">
                    <p className="text-2xl font-black text-[#1a5f8a]">12</p>
                    <p className="text-neutral-500 text-xs mt-1 leading-tight">Slots<br />Available</p>
                  </div>
                </div>
                {/* Bottom */}
                <div className="px-6 py-4 bg-[#f9f8f4] border-t border-neutral-100">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-neutral-400">Live as of 10:22 AM</span>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                      <span className="text-xs font-semibold text-green-700">Live Data</span>
                    </div>
                  </div>
                  <Link
                    href="/procurement-centres"
                    className="mt-3 w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#1a2e0f] text-white text-sm font-semibold hover:bg-[#2d5a27] transition-colors"
                  >
                    <span>Find Nearby Centres</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FEATURES ===================== */}
      <section id="features" className="w-full bg-white py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-[72rem] mx-auto w-full">
          <div className="text-center mb-14">
            <span className="inline-block mb-3 text-xs font-bold uppercase tracking-widest text-[#2d5a27] bg-[#f0fae8] px-3 py-1 rounded-full">Platform Features</span>
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 tracking-tight">
              Everything a Farmer Needs
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "calendar_month", title: "Smart Slot Booking", desc: "Choose from available time slots at procurement centres near you.", href: "/procurement/book" },
              { icon: "queue", title: "Live Queue Tracking", desc: "See your real-time queue position and expected wait time.", href: "/procurement/queue" },
              { icon: "local_shipping", title: "Procurement Tracking", desc: "Track your crop from arrival at the centre to weighing and acceptance.", href: "/procurement/status" },
              { icon: "payments", title: "Payment Visibility", desc: "Monitor your DBT payment status and settlement history.", href: "/payments/history" },
              { icon: "trending_up", title: "Market Intelligence", desc: "View MSP and live mandi prices for your crop varieties.", href: "/dashboard" },
              { icon: "agriculture", title: "Equipment Access", desc: "Browse and rent farm equipment from verified suppliers.", href: "/rent-equipment" },
            ].map((feature) => (
              <Link
                key={feature.title}
                href={feature.href}
                className="group bg-[#f9f8f4] rounded-2xl p-6 border border-neutral-100 hover:border-[#b5e55a] hover:shadow-md transition-all duration-200 flex flex-col gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#f0fae8] text-[#2d5a27] flex items-center justify-center group-hover:bg-[#1a2e0f] group-hover:text-[#b5e55a] transition-colors">
                  <span className="material-symbols-outlined text-[24px]">{feature.icon}</span>
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900 text-base mb-1.5 group-hover:text-[#2d5a27] transition-colors">{feature.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{feature.desc}</p>
                </div>
                <div className="flex items-center gap-1 text-xs font-semibold text-[#2d5a27] opacity-0 group-hover:opacity-100 transition-opacity mt-auto">
                  <span>Explore</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== FINAL CTA ===================== */}
      <section className="w-full bg-[#1a2e0f] py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-[56rem] mx-auto w-full text-center">
          <span className="inline-block mb-4 text-xs font-bold uppercase tracking-widest text-[#b5e55a] bg-white/10 px-3 py-1 rounded-full">Get Started Today</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-5">
            Ready to Make Procurement Smarter?
          </h2>
          <p className="text-white/70 text-base max-w-[36rem] mx-auto leading-relaxed mb-10">
            Plan your visit, avoid unnecessary waiting, and stay informed from procurement to payment.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#b5e55a] text-[#1a2e0f] font-bold text-sm hover:bg-[#a3d44d] transition-all shadow-lg active:scale-95"
            >
              <span>Open Farmer Dashboard</span>
              <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/30 text-white font-medium text-sm hover:bg-white/10 transition-all"
            >
              Learn How It Works
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111a0a] text-white/40 text-center py-6 text-xs">
        © {new Date().getFullYear()} CropBazaar. Empowering farmers across India.
      </footer>

    </div>
  );
}
