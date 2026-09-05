/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Page() {
  return (
    <div className="w-full px-6 py-6 md:px-10 md:py-8">

<section className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-md mb-xl">
<div className="flex-1 min-w-0 space-y-xs">
<div className="flex items-center gap-xs flex-wrap">
<span className="px-xs py-base rounded-full bg-surface-container-high text-forest-deep font-label-stamp text-label-stamp uppercase tracking-wider font-semibold">Kisan Portfolio</span>
<span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
<span className="font-label-stamp text-label-stamp text-text-muted">Kharif &amp; Rabi Cycle 2024</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-forest-deep tracking-tight flex items-baseline gap-sm">
        My Crops <span className="font-headline-md text-headline-md text-text-muted font-normal">मेरी फसलें</span>
</h1>
<p className="font-body-md text-body-md text-text-secondary leading-relaxed">
        Manage your registered crop listings, harvest readiness, and scheduled procurement slots.
      </p>
</div>

<div className="flex items-center gap-sm self-start lg:self-center shrink-0 mt-4 lg:mt-0">
<div className="hidden sm:flex items-center bg-surface-card rounded-xl shadow-sm p-base">
<button className="px-md py-xs rounded-lg bg-surface-subtle font-label-md text-label-md text-forest-deep" type="button">Active Season</button>
<button className="px-md py-xs rounded-lg font-label-md text-label-md text-text-muted hover:text-text-primary transition-colors" type="button">Archived</button>
</div>
<Link href="/crops/add" className="h-12 px-lg rounded-xl bg-primary-container text-on-primary font-label-lg text-label-lg flex items-center justify-center gap-xs shadow-sm hover:bg-forest-deep transition-all active:scale-[0.98]">
<span className="material-symbols-outlined text-[20px]">add</span>
<span>Add Crop (नई फसल जोड़ें)</span>
</Link>
</div>
</section>

<section className="grid grid-cols-2 lg:grid-cols-4 gap-md mb-xl">

<div className="bg-surface-card rounded-xl p-md shadow-sm relative overflow-hidden flex flex-col justify-between">
<div className="flex items-center justify-between text-text-muted mb-xs">
<span className="font-label-stamp text-label-stamp uppercase tracking-wider">Total Registered</span>
<span className="material-symbols-outlined text-[18px] text-primary">inventory</span>
</div>
<div className="flex items-baseline gap-xs">
<span className="font-metric-large text-metric-large text-forest-deep font-extrabold">3</span>
<span className="font-label-md text-label-md text-text-secondary">Crops</span>
</div>
<div className="flex items-center gap-base mt-xs pt-xs text-text-muted font-body-sm text-body-sm">
<span className="w-2 h-2 rounded-full bg-primary"></span>
<span>180 Qtl total volume</span>
</div>
</div>

<div className="bg-surface-card rounded-xl p-md shadow-sm relative overflow-hidden flex flex-col justify-between">
<div className="flex items-center justify-between text-text-muted mb-xs">
<span className="font-label-stamp text-label-stamp uppercase tracking-wider">Procurement Ready</span>
<span className="material-symbols-outlined text-[18px] text-status-serving">check_circle</span>
</div>
<div className="flex items-baseline gap-xs">
<span className="font-metric-large text-metric-large text-forest-deep font-extrabold">1</span>
<span className="font-label-md text-label-md text-text-secondary">Crop</span>
</div>
<div className="flex items-center gap-base mt-xs pt-xs text-status-serving font-label-stamp text-label-stamp font-semibold">
<span className="w-2 h-2 rounded-full bg-status-serving"></span>
<span>Wheat • 50 Qtl slots open</span>
</div>
</div>

<div className="bg-surface-card rounded-xl p-md shadow-sm relative overflow-hidden flex flex-col justify-between">
<div className="flex items-center justify-between text-text-muted mb-xs">
<span className="font-label-stamp text-label-stamp uppercase tracking-wider">In Field / Growing</span>
<span className="material-symbols-outlined text-[18px] text-status-waiting">spa</span>
</div>
<div className="flex items-baseline gap-xs">
<span className="font-metric-large text-metric-large text-forest-deep font-extrabold">1</span>
<span className="font-label-md text-label-md text-text-secondary">Crop</span>
</div>
<div className="flex items-center gap-base mt-xs pt-xs text-status-waiting font-label-stamp text-label-stamp font-semibold">
<span className="w-2 h-2 rounded-full bg-status-waiting"></span>
<span>Basmati PB 1509 • 18d left</span>
</div>
</div>

<div className="bg-surface-card rounded-xl p-md shadow-sm relative overflow-hidden flex flex-col justify-between">
<div className="flex items-center justify-between text-text-muted mb-xs">
<span className="font-label-stamp text-label-stamp uppercase tracking-wider">Procured &amp; Settled</span>
<span className="material-symbols-outlined text-[18px] text-secondary">payments</span>
</div>
<div className="flex items-baseline gap-xs">
<span className="font-metric-large text-metric-large text-forest-deep font-extrabold">1</span>
<span className="font-label-md text-label-md text-text-secondary">Crop</span>
</div>
<div className="flex items-center gap-base mt-xs pt-xs text-secondary font-label-stamp text-label-stamp font-semibold">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span>Mustard • ₹2.81L est.</span>
</div>
</div>
</section>

<div className="flex items-center justify-between pb-sm mb-lg">
<div className="flex items-center gap-xs overflow-x-auto pb-base">
<button className="px-md py-xs rounded-full bg-forest-deep text-on-primary font-label-md text-label-md shadow-sm" type="button">All Crops (3)</button>
<button className="px-md py-xs rounded-full bg-surface-card text-text-secondary hover:bg-surface-container-high font-label-md text-label-md transition-colors" type="button">Ready to Sell (1)</button>
<button className="px-md py-xs rounded-full bg-surface-card text-text-secondary hover:bg-surface-container-high font-label-md text-label-md transition-colors" type="button">Growing (1)</button>
<button className="px-md py-xs rounded-full bg-surface-card text-text-secondary hover:bg-surface-container-high font-label-md text-label-md transition-colors" type="button">Post-Harvest (1)</button>
</div>
<div className="hidden md:flex items-center gap-xs text-text-muted font-label-stamp text-label-stamp">
<span>Auto-synced with e-NAM Mandi Gate</span>
<span className="material-symbols-outlined text-[14px] text-metric-positive">sync</span>
</div>
</div>

<section className="grid grid-cols-1 lg:grid-cols-3 gap-lg mb-2xl">

<article className="bg-surface-card rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden relative group">
<div className="relative h-44 w-full bg-surface-subtle overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Golden ripe wheat grain ears ready for harvest under clear afternoon sunlight on a lush green Indian farm in Haryana, extreme close up with soft bokeh depth of field and warm golden tones" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKgsex1gFP4sUbSaet6-lrOdBBW5MWe8y4om1uueVA5ASt1p28KTnaemlsNa5om9eon0b5mMRfYsTxxfbtDG4KB4zzexG5ShrDMu8813pU8l5x9WhlJw2KZcNYR0kZ9NOk2MC26E3j3eSk9BV8nLwHd3-Mr_61HNDkQXTen6TkFDgS9PC7P8caqLjBLYCLH-DPCS2FPx1Pki8wwuyk4jQc-3-gRH6iaF3pGmuROU9CPraPoUaftR8z"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
<div className="absolute top-sm left-sm right-sm flex items-center justify-between">
<span className="inline-flex items-center gap-xs px-sm py-base rounded-full bg-status-serving-bg text-status-serving font-label-stamp text-label-stamp font-bold shadow-sm backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-status-serving animate-pulse"></span>
            Ready for Procurement
          </span>
<button aria-label="Crop Options" className="w-8 h-8 rounded-full bg-surface-card/80 backdrop-blur-sm text-text-primary flex items-center justify-center hover:bg-surface-card shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
<div className="absolute bottom-sm left-md right-md flex items-end justify-between text-on-primary">
<div>
<span className="font-label-stamp text-label-stamp tracking-wider uppercase text-on-primary/80">Cereal • Grade A</span>
<h2 className="font-headline-sm text-headline-sm font-bold leading-snug">Wheat (गेहूँ)</h2>
<p className="font-body-sm text-body-sm text-on-primary/90">Sharbati Grade A</p>
</div>
<span className="px-xs py-base bg-surface-card/90 text-forest-deep rounded-md font-label-stamp text-label-stamp font-bold">Lot #KB-8902</span>
</div>
</div>

<div className="p-lg flex-1 flex flex-col justify-between space-y-md">

<div className="grid grid-cols-2 gap-sm p-sm rounded-xl bg-canvas-warm">
<div>
<span className="font-label-stamp text-label-stamp text-text-muted uppercase">Quantity Registered</span>
<p className="font-metric-medium text-metric-medium text-forest-deep font-bold mt-base">50 <span className="font-body-sm text-body-sm font-normal text-text-secondary">Quintal</span></p>
</div>
<div>
<span className="font-label-stamp text-label-stamp text-text-muted uppercase">Market Price</span>
<div className="flex items-baseline gap-base mt-base">
<span className="font-metric-medium text-metric-medium text-text-primary font-bold">₹2,425</span>
<span className="font-label-stamp text-label-stamp text-metric-positive font-bold flex items-center">
<span className="material-symbols-outlined text-[12px]">trending_up</span>+1.25%
              </span>
</div>
</div>
</div>

<div className="space-y-xs">
<div className="flex items-center justify-between p-xs rounded-lg hover:bg-surface-subtle transition-colors">
<div className="flex items-center gap-xs text-text-secondary font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[18px] text-metric-positive">water_drop</span>
<span>Moisture Test</span>
</div>
<span className="font-label-stamp text-label-stamp px-xs py-base rounded-md bg-status-serving-bg text-status-serving font-bold">
              11.2% (Passed &lt;12%)
            </span>
</div>
<div className="flex items-center justify-between p-xs rounded-lg hover:bg-surface-subtle transition-colors">
<div className="flex items-center gap-xs text-text-secondary font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[18px] text-text-muted">location_on</span>
<span>Farm Origin</span>
</div>
<span className="font-body-sm text-body-sm text-text-primary font-medium truncate max-w-[160px] text-right">
              Plot 1, Nilokheri (4.5 Ac)
            </span>
</div>
<div className="flex items-center justify-between p-xs rounded-lg hover:bg-surface-subtle transition-colors">
<div className="flex items-center gap-xs text-text-secondary font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[18px] text-secondary">monetization_on</span>
<span>Estimated Value</span>
</div>
<span className="font-metric-medium text-metric-medium text-forest-deep font-bold">
              ₹1,21,250
            </span>
</div>
</div>

<div className="p-xs bg-surface-subtle rounded-lg flex items-center justify-between">
<div className="flex items-center gap-xs">
<span className="font-label-stamp text-label-stamp text-text-muted">Govt MSP ₹2,275</span>
<span className="text-label-stamp font-label-stamp font-bold text-status-serving">+₹150 Prem.</span>
</div>
<svg className="w-20 h-5 text-status-serving" fill="none" viewBox="0 0 100 24">
<path d="M0 20 L25 15 L50 18 L75 8 L100 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
</svg>
</div>

<div className="pt-sm space-y-xs">
<button className="w-full h-11 px-md rounded-xl bg-primary-container text-on-primary font-label-lg text-label-lg flex items-center justify-center gap-xs shadow-sm hover:bg-forest-deep transition-all" type="button">
<span className="material-symbols-outlined text-[18px]">calendar_month</span>
<span>Book Slot (स्लॉट बुक करें)</span>
</button>
<div className="grid grid-cols-2 gap-xs">
<button className="h-10 px-sm rounded-xl bg-canvas-warm hover:bg-surface-container-high text-forest-deep font-label-md text-label-md transition-colors flex items-center justify-center gap-base" type="button">
<span className="material-symbols-outlined text-[16px]">visibility</span>
<span>View Details</span>
</button>
<button className="h-10 px-sm rounded-xl bg-canvas-warm hover:bg-surface-container-high text-text-secondary font-label-md text-label-md transition-colors flex items-center justify-center gap-base" type="button">
<span className="material-symbols-outlined text-[16px]">edit</span>
<span>Edit Crop</span>
</button>
</div>
</div>
</div>
</article>

<article className="bg-surface-card rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden relative group">
<div className="relative h-44 w-full bg-surface-subtle overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Vibrant green irrigated paddy rice crop field in Karnal India during late monsoon season, lush stalks swaying in the breeze with agricultural canal in the background under soft daylight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXflJ9Ii5NmWFfmxOb7SmCLFk0M6WkR-GtRaIdIGXuLteOmEFjStndA32MPtK53Nu3p1UGN5x1imwpeeRYJiBKq9LX4e8IltJltu63SfOXfasPcDjwK6tiOQiSMfa9_ZVHUB46Gtt2IYzZ8BWJmhNbDVFZW7cPnH-ii0XaJelgxS16eFmLUzOuzADPpp7DU0fLhWhG2TqT-PGYZm9G2Z9XE23P196pz-FXYqlrgRj1r2BtOk4pVL4S"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
<div className="absolute top-sm left-sm right-sm flex items-center justify-between">
<span className="inline-flex items-center gap-xs px-sm py-base rounded-full bg-status-waiting-bg text-status-waiting font-label-stamp text-label-stamp font-bold shadow-sm backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-status-waiting animate-pulse"></span>
            Growing (18 Days Left)
          </span>
<button aria-label="Crop Options" className="w-8 h-8 rounded-full bg-surface-card/80 backdrop-blur-sm text-text-primary flex items-center justify-center hover:bg-surface-card shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
<div className="absolute bottom-sm left-md right-md flex items-end justify-between text-on-primary">
<div>
<span className="font-label-stamp text-label-stamp tracking-wider uppercase text-on-primary/80">Kharif • Export Grade</span>
<h2 className="font-headline-sm text-headline-sm font-bold leading-snug">Paddy (धान)</h2>
<p className="font-body-sm text-body-sm text-on-primary/90">Basmati PB 1509</p>
</div>
<span className="px-xs py-base bg-surface-card/90 text-forest-deep rounded-md font-label-stamp text-label-stamp font-bold">Lot #KB-9041</span>
</div>
</div>

<div className="p-lg flex-1 flex flex-col justify-between space-y-md">

<div className="grid grid-cols-2 gap-sm p-sm rounded-xl bg-canvas-warm">
<div>
<span className="font-label-stamp text-label-stamp text-text-muted uppercase">Quantity Estimated</span>
<p className="font-metric-medium text-metric-medium text-forest-deep font-bold mt-base">80 <span className="font-body-sm text-body-sm font-normal text-text-secondary">Quintal</span></p>
</div>
<div>
<span className="font-label-stamp text-label-stamp text-text-muted uppercase">Current Mandi Price</span>
<div className="flex items-baseline gap-base mt-base">
<span className="font-metric-medium text-metric-medium text-text-primary font-bold">₹1,940</span>
<span className="font-label-stamp text-label-stamp text-text-muted font-medium">/ Qtl</span>
</div>
</div>
</div>

<div className="space-y-xs">
<div className="flex items-center justify-between p-xs rounded-lg hover:bg-surface-subtle transition-colors">
<div className="flex items-center gap-xs text-text-secondary font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[18px] text-status-waiting">timer</span>
<span>Readiness Stage</span>
</div>
<span className="font-body-sm text-body-sm text-text-primary font-semibold text-right">
              Harvest: 26 Sep (18d)
            </span>
</div>
<div className="flex items-center justify-between p-xs rounded-lg hover:bg-surface-subtle transition-colors">
<div className="flex items-center gap-xs text-text-secondary font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[18px] text-text-muted">location_on</span>
<span>Farm Origin</span>
</div>
<span className="font-body-sm text-body-sm text-text-primary font-medium truncate max-w-[160px] text-right">
              Plot 2, Canal Rd (3 Ac)
            </span>
</div>
<div className="flex items-center justify-between p-xs rounded-lg hover:bg-surface-subtle transition-colors">
<div className="flex items-center gap-xs text-text-secondary font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[18px] text-secondary">monetization_on</span>
<span>Estimated Value</span>
</div>
<span className="font-metric-medium text-metric-medium text-forest-deep font-bold">
              ₹1,55,200
            </span>
</div>
</div>

<div className="p-xs bg-surface-subtle rounded-lg space-y-base">
<div className="flex items-center justify-between font-label-stamp text-label-stamp">
<span className="text-text-muted">Ripening Maturity Stage</span>
<span className="text-forest-deep font-bold">78%</span>
</div>
<div className="w-full bg-surface-card rounded-full h-2 overflow-hidden flex">
<div className="bg-status-waiting h-2 rounded-full" style={{ width: '78%' }}></div>
</div>
</div>

<div className="pt-sm space-y-xs">
<button className="w-full h-11 px-md rounded-xl bg-canvas-warm hover:bg-surface-container-high text-forest-deep font-label-lg text-label-lg flex items-center justify-center gap-xs transition-colors" type="button">
<span className="material-symbols-outlined text-[18px] text-status-waiting">notifications_active</span>
<span>Set Harvest Alert (अलर्ट सेट करें)</span>
</button>
<div className="grid grid-cols-2 gap-xs">
<button className="h-10 px-sm rounded-xl bg-canvas-warm hover:bg-surface-container-high text-forest-deep font-label-md text-label-md transition-colors flex items-center justify-center gap-base" type="button">
<span className="material-symbols-outlined text-[16px]">visibility</span>
<span>View Details</span>
</button>
<button className="h-10 px-sm rounded-xl bg-canvas-warm hover:bg-surface-container-high text-text-secondary font-label-md text-label-md transition-colors flex items-center justify-center gap-base" type="button">
<span className="material-symbols-outlined text-[16px]">edit</span>
<span>Edit Crop</span>
</button>
</div>
</div>
</div>
</article>

<article className="bg-surface-card rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden relative group">
<div className="relative h-44 w-full bg-surface-subtle overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Harvested golden yellow mustard seeds in a clean rural grain barn, sunbeams illuminating the clean seed pile with traditional burlap bags stacked behind in north India" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxv6a-JpXbuxrXzd8vL4yIyfvqyPptbIH9EbaTNvXYaNUvrwKccnI33g9NII5i50v55OMhUxM4OrFs35hpslKQYW-FjtD4MnXNak0jycxJqaW_px9pZWrkCNn6fTFSHqWqQr0Fy0vvdqsvBLwjHYU5LATB5zLK76sdiPlwXJX_gcTccEvx8YW9mKjedTM8fRfIiImx4bvCtu6DrqAqDqV2fbCS3DMoDfvcFuGoa-V8DyHuuFYNWIaX"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
<div className="absolute top-sm left-sm right-sm flex items-center justify-between">
<span className="inline-flex items-center gap-xs px-sm py-base rounded-full bg-status-completed-bg text-status-completed font-label-stamp text-label-stamp font-bold shadow-sm backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-status-completed"></span>
            Ready Soon (सुखाने की प्रक्रिया)
          </span>
<button aria-label="Crop Options" className="w-8 h-8 rounded-full bg-surface-card/80 backdrop-blur-sm text-text-primary flex items-center justify-center hover:bg-surface-card shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
<div className="absolute bottom-sm left-md right-md flex items-end justify-between text-on-primary">
<div>
<span className="font-label-stamp text-label-stamp tracking-wider uppercase text-on-primary/80">Oilseed • High Oil 42%</span>
<h2 className="font-headline-sm text-headline-sm font-bold leading-snug">Mustard (सरसों)</h2>
<p className="font-body-sm text-body-sm text-on-primary/90">Pusa Bold</p>
</div>
<span className="px-xs py-base bg-surface-card/90 text-forest-deep rounded-md font-label-stamp text-label-stamp font-bold">Lot #KB-7619</span>
</div>
</div>

<div className="p-lg flex-1 flex flex-col justify-between space-y-md">

<div className="grid grid-cols-2 gap-sm p-sm rounded-xl bg-canvas-warm">
<div>
<span className="font-label-stamp text-label-stamp text-text-muted uppercase">Quantity In Storage</span>
<p className="font-metric-medium text-metric-medium text-forest-deep font-bold mt-base">50 <span className="font-body-sm text-body-sm font-normal text-text-secondary">Quintal</span></p>
</div>
<div>
<span className="font-label-stamp text-label-stamp text-text-muted uppercase">MSP / Market Price</span>
<div className="flex items-baseline gap-base mt-base">
<span className="font-metric-medium text-metric-medium text-text-primary font-bold">₹5,620</span>
<span className="font-label-stamp text-label-stamp text-text-muted font-medium">/ Qtl</span>
</div>
</div>
</div>

<div className="space-y-xs">
<div className="flex items-center justify-between p-xs rounded-lg hover:bg-surface-subtle transition-colors">
<div className="flex items-center gap-xs text-text-secondary font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[18px] text-status-waiting">air</span>
<span>Readiness Status</span>
</div>
<span className="font-body-sm text-body-sm text-status-waiting font-semibold text-right truncate max-w-[170px]">
              Drying • Moisture 12.8%
            </span>
</div>
<div className="flex items-center justify-between p-xs rounded-lg hover:bg-surface-subtle transition-colors">
<div className="flex items-center gap-xs text-text-secondary font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[18px] text-text-muted">location_on</span>
<span>Farm Origin</span>
</div>
<span className="font-body-sm text-body-sm text-text-primary font-medium truncate max-w-[160px] text-right">
              Plot 3, Nilokheri East
            </span>
</div>
<div className="flex items-center justify-between p-xs rounded-lg hover:bg-surface-subtle transition-colors">
<div className="flex items-center gap-xs text-text-secondary font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[18px] text-secondary">monetization_on</span>
<span>Estimated Value</span>
</div>
<span className="font-metric-medium text-metric-medium text-forest-deep font-bold">
              ₹2,81,000
            </span>
</div>
</div>

<div className="p-xs bg-surface-subtle rounded-lg flex items-center justify-between">
<div className="flex items-center gap-xs">
<span className="material-symbols-outlined text-[16px] text-status-waiting">info</span>
<span className="font-label-stamp text-label-stamp text-text-secondary">Needs 0.8% further sun drying</span>
</div>
<span className="font-label-stamp text-label-stamp font-bold text-forest-deep">Target &lt;12%</span>
</div>

<div className="pt-sm space-y-xs">
<button className="w-full h-11 px-md rounded-xl bg-canvas-warm hover:bg-surface-container-high text-forest-deep font-label-lg text-label-lg flex items-center justify-center gap-xs transition-colors" type="button">
<span className="material-symbols-outlined text-[18px] text-secondary">biotech</span>
<span>Pre-Check Moisture (नमी जाँच)</span>
</button>
<div className="grid grid-cols-2 gap-xs">
<button className="h-10 px-sm rounded-xl bg-canvas-warm hover:bg-surface-container-high text-forest-deep font-label-md text-label-md transition-colors flex items-center justify-center gap-base" type="button">
<span className="material-symbols-outlined text-[16px]">storefront</span>
<span>Find Centre</span>
</button>
<button className="h-10 px-sm rounded-xl bg-canvas-warm hover:bg-surface-container-high text-text-secondary font-label-md text-label-md transition-colors flex items-center justify-center gap-base" type="button">
<span className="material-symbols-outlined text-[16px]">edit</span>
<span>Edit Crop</span>
</button>
</div>
</div>
</div>
</article>
</section>

<section className="bg-forest-deep rounded-xl p-lg text-on-primary shadow-sm relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-md">
<div className="flex items-start gap-md max-w-3xl">
<div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0 text-tertiary-fixed shadow-sm">
<span className="material-symbols-outlined text-[26px]">verified</span>
</div>
<div className="space-y-base">
<div className="flex items-center gap-xs">
<span className="font-label-stamp text-label-stamp uppercase tracking-wider text-tertiary-fixed font-bold">Kisan Salah &amp; Advisory</span>
<span className="w-1 h-1 rounded-full bg-tertiary-fixed"></span>
<span className="font-label-stamp text-label-stamp text-on-primary/70">Mandi Weighbridge Protocol</span>
</div>
<h3 className="font-headline-sm text-headline-sm font-bold text-on-primary">
          Looking to sell at government MSP or private mandi?
        </h3>
<p className="font-body-sm text-body-sm text-on-primary/80 leading-relaxed">
          Always test moisture level before booking your weighbridge slot to prevent automatic dock deductions at Nilokheri and Karnal mandis. Free tester kits available at local Krishi Vigyan Kendra.
        </p>
</div>
</div>
<div className="flex items-center gap-sm flex-shrink-0 w-full md:w-auto">
<Link href="/procurement-centres" className="w-full md:w-auto h-11 px-lg rounded-xl bg-surface-card text-forest-deep font-label-lg text-label-lg flex items-center justify-center gap-xs shadow-sm hover:bg-tertiary-fixed hover:text-forest-deep transition-all" >
<span>Find Procurement Centre</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</Link>
</div>
</section>
    </div>
  );
}
