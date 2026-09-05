"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

export default function rentequipmentPage() {
  return (
    <>
      <div className="flex flex-col w-full">
<div className="max-w-[75rem] mx-auto w-full px-gutter-mobile md:px-gutter-desktop py-lg flex flex-col gap-lg">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-md">
<div className="flex flex-col">

<nav aria-label="Breadcrumb" className="flex items-center gap-xs font-label-md text-label-md text-text-muted mb-xs">
<a className="hover:text-primary transition-colors" href="#">Home</a>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="text-text-primary font-semibold">Equipment Rental</span>
</nav>
<h1 className="font-headline-lg text-headline-lg text-forest-deep tracking-tight">Equipment Rental</h1>
<p className="font-body-md text-body-md text-text-muted mt-base">Find verified tractors, implements, and harvesters available near you.</p>
</div>

<div className="flex items-center gap-sm self-start md:self-auto bg-surface-card px-md py-xs rounded-xl shadow-sm">
<div className="flex items-center gap-xs text-metric-positive">
<span className="material-symbols-outlined text-[18px]">verified</span>
<span className="font-label-stamp text-label-stamp font-bold tracking-wide uppercase">CHC Certified Machinery</span>
</div>
<span className="w-1 h-1 rounded-full bg-border-muted"></span>
<span className="font-label-stamp text-label-stamp text-text-muted">Doorstep Delivery Active</span>
</div>
</div>

<div className="bg-surface-card rounded-xl p-md md:p-lg shadow-sm flex flex-col gap-md">

<div className="grid grid-cols-1 md:grid-cols-12 gap-sm">

<div className="md:col-span-8 relative">
<div className="absolute inset-y-0 left-0 pl-md flex items-center pointer-events-none text-text-muted">
<span className="material-symbols-outlined text-[20px]">search</span>
</div>
<input className="w-full h-touch-min pl-touch-min pr-md bg-surface-subtle focus:bg-surface-card rounded-xl font-body-md text-body-md text-text-primary placeholder:text-text-muted outline-none transition-all" placeholder="Search by equipment model, brand (e.g. Mahindra, John Deere)..." type="text"/>
</div>

<div className="md:col-span-4 relative">
<div className="absolute inset-y-0 left-0 pl-md flex items-center pointer-events-none text-primary">
<span className="material-symbols-outlined text-[20px]">location_on</span>
</div>
<select className="w-full h-touch-min pl-touch-min pr-lg bg-surface-subtle focus:bg-surface-card rounded-xl font-label-lg text-label-lg text-text-primary outline-none transition-all cursor-pointer appearance-none">
<option value="sonipat">Sonipat, Haryana (Within 25 km)</option>
<option value="panipat">Panipat, Haryana (Within 35 km)</option>
<option value="karnal">Karnal, Haryana (Within 50 km)</option>
<option value="rohtak">Rohtak, Haryana (Within 30 km)</option>
</select>
<div className="absolute inset-y-0 right-0 pr-md flex items-center pointer-events-none text-text-muted">
<span className="material-symbols-outlined text-[18px]">expand_more</span>
</div>
</div>
</div>

<div className="flex items-center justify-between flex-wrap gap-xs pt-xs">
<div className="flex items-center gap-xs overflow-x-auto pb-base scrollbar-none w-full md:w-auto">

<button className="flex items-center gap-xs px-md py-xs rounded-full bg-primary text-on-primary font-label-md text-label-md font-semibold transition-transform active:scale-95 shadow-sm" type="button">
<span>All Equipment</span>
<span className="px-xs py-0.5 rounded-full bg-surface-card/20 font-label-stamp text-label-stamp font-bold">18</span>
</button>

<button className="flex items-center gap-xs px-md py-xs rounded-full bg-surface-subtle hover:bg-surface-container text-text-secondary font-label-md text-label-md transition-colors" type="button">
<span>Tractors</span>
<span className="px-xs py-0.5 rounded-full bg-surface-card font-label-stamp text-label-stamp font-semibold text-text-muted">8</span>
</button>

<button className="flex items-center gap-xs px-md py-xs rounded-full bg-surface-subtle hover:bg-surface-container text-text-secondary font-label-md text-label-md transition-colors" type="button">
<span>Harvesters</span>
<span className="px-xs py-0.5 rounded-full bg-surface-card font-label-stamp text-label-stamp font-semibold text-text-muted">4</span>
</button>

<button className="flex items-center gap-xs px-md py-xs rounded-full bg-surface-subtle hover:bg-surface-container text-text-secondary font-label-md text-label-md transition-colors" type="button">
<span>Rotavators</span>
<span className="px-xs py-0.5 rounded-full bg-surface-card font-label-stamp text-label-stamp font-semibold text-text-muted">3</span>
</button>

<button className="flex items-center gap-xs px-md py-xs rounded-full bg-surface-subtle hover:bg-surface-container text-text-secondary font-label-md text-label-md transition-colors" type="button">
<span>Sprayers</span>
<span className="px-xs py-0.5 rounded-full bg-surface-card font-label-stamp text-label-stamp font-semibold text-text-muted">3</span>
</button>
</div>

<div className="hidden lg:flex items-center gap-base font-body-sm text-body-sm text-text-muted">
<span>Sort by:</span>
<button className="flex items-center gap-0.5 font-label-md text-label-md text-text-primary hover:text-primary font-semibold">
            Distance (Nearest first)
            <span className="material-symbols-outlined text-[16px]">tune</span>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-lg">

<div className="bg-surface-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group">

<div className="relative h-60 w-full overflow-hidden bg-surface-subtle">
<img alt="Mahindra 575 DI Tractor in farmland" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCi84m-EiCBs82hw3WK0y2GPwF2CwVj-KNMt1c4_9YWiVrkNrmoOfONYsSiuWZPhvX1TZvOMaLcnmnR5NjEf25YOacav6lDYss7yHi6HTBql1y78jJKRs0DSqb_h6Pewl3zf73I1hbNyv4KpHap8unBevnXJX_V9ml5fkQCDghsDQDPuupYEHDcBFGAdJyh4-Dx1Rs-ME6dIBb_fYLNPAy9eBQlFYrnyDuWHz57y5J24QSBV9WZQxh"/>
<div className="absolute top-md left-md">
<span className="px-sm py-xs bg-forest-deep/85 backdrop-blur-md text-on-primary rounded-full font-label-stamp text-label-stamp uppercase tracking-wider font-bold">
              Tractors
            </span>
</div>
<div className="absolute top-md right-md">

<div className="flex items-center gap-xs px-sm py-xs bg-status-serving-bg/95 backdrop-blur-md rounded-full shadow-sm">
<span className="w-2 h-2 rounded-full bg-status-serving"></span>
<span className="font-label-stamp text-label-stamp text-status-serving font-bold uppercase">Available Now</span>
</div>
</div>
</div>

<div className="p-md md:p-lg flex flex-col flex-1 justify-between gap-md">
<div className="flex flex-col gap-xs">
<div className="flex items-baseline justify-between gap-sm">
<h2 className="font-headline-sm text-headline-sm text-text-primary group-hover:text-primary transition-colors">
                Mahindra 575 DI Tractor (45 HP)
              </h2>
</div>
<div className="flex items-center gap-xs font-body-sm text-body-sm text-text-muted">
<span className="material-symbols-outlined text-[16px] text-metric-positive">near_me</span>
<span>Sonipat (4.8 km away)</span>
<span className="text-border-muted">•</span>
<span className="text-text-secondary font-medium">Provider: Gurpreet Singh</span>
</div>
</div>

<div className="bg-surface-subtle rounded-xl p-sm flex items-center justify-between">
<div className="flex flex-col">
<div className="flex items-baseline gap-base">
<span className="font-metric-large text-metric-large text-forest-deep leading-none">₹850</span>
<span className="font-body-sm text-body-sm text-text-muted">/ day</span>
</div>
<span className="font-label-stamp text-label-stamp text-text-muted mt-0.5">या ₹350 / घंटा (Hourly rental available)</span>
</div>
<div className="flex items-center gap-1 text-metric-positive bg-status-serving-bg px-xs py-0.5 rounded">
<span className="material-symbols-outlined text-[14px]">bolt</span>
<span className="font-label-stamp text-label-stamp font-bold">Instant Lock</span>
</div>
</div>

<div className="flex items-center justify-between pt-xs">
<div className="flex items-center gap-1 text-text-muted font-label-stamp text-label-stamp">
<span className="material-symbols-outlined text-[16px]">local_shipping</span>
<span>Drop to farm included</span>
</div>
<button className="h-touch-min px-lg bg-surface-card hover:bg-surface-subtle text-forest-deep hover:text-primary rounded-xl font-label-lg text-label-lg font-semibold transition-all flex items-center gap-xs shadow-sm active:scale-98" type="button">
<span>View Details</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</div>
</div>
</div>

<div className="bg-surface-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group">

<div className="relative h-60 w-full overflow-hidden bg-surface-subtle">
<img alt="John Deere 5310 Tractor in field" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCF80gPo0bk5IhZWo0fOoM_kOIYflqSIy75WgI8OA7kaKLWNm-8Yx_3XT5SWrvQakAXAS5yXkwrKROQw9iJj8kW8027JGUt83koq8uLqUQBh7Iop5pWpMUcthG-grpxL2KOmFw6WUa2vzkRt27I98EgLHEs3QSd1HgOmdSWA-_62X56rYIG5-HoyDJYHWmKoRrc0tVHZc3XijoDWm308ThMIOyxYzvEZod1F-pzTK_YENnMiPQNjlo7"/>
<div className="absolute top-md left-md">
<span className="px-sm py-xs bg-forest-deep/85 backdrop-blur-md text-on-primary rounded-full font-label-stamp text-label-stamp uppercase tracking-wider font-bold">
              Tractors
            </span>
</div>
<div className="absolute top-md right-md">

<div className="flex items-center gap-xs px-sm py-xs bg-status-confirmed-bg/95 backdrop-blur-md rounded-full shadow-sm">
<span className="w-2 h-2 rounded-full bg-status-confirmed"></span>
<span className="font-label-stamp text-label-stamp text-status-confirmed font-bold uppercase">Available Tomorrow</span>
</div>
</div>
</div>

<div className="p-md md:p-lg flex flex-col flex-1 justify-between gap-md">
<div className="flex flex-col gap-xs">
<div className="flex items-baseline justify-between gap-sm">
<h2 className="font-headline-sm text-headline-sm text-text-primary group-hover:text-primary transition-colors">
                John Deere 5310 Tractor (55 HP 4WD)
              </h2>
</div>
<div className="flex items-center gap-xs font-body-sm text-body-sm text-text-muted">
<span className="material-symbols-outlined text-[16px] text-metric-positive">near_me</span>
<span>Panipat Rural (12 km away)</span>
<span className="text-border-muted">•</span>
<span className="text-text-secondary font-medium">Provider: Kisan Sahkari Hub</span>
</div>
</div>

<div className="bg-surface-subtle rounded-xl p-sm flex items-center justify-between">
<div className="flex flex-col">
<div className="flex items-baseline gap-base">
<span className="font-metric-large text-metric-large text-forest-deep leading-none">₹1,200</span>
<span className="font-body-sm text-body-sm text-text-muted">/ day</span>
</div>
<span className="font-label-stamp text-label-stamp text-text-muted mt-0.5">Heavy payload hauling &amp; tilling capable</span>
</div>
<div className="flex items-center gap-1 text-text-secondary bg-surface-container px-xs py-0.5 rounded">
<span className="material-symbols-outlined text-[14px]">event_available</span>
<span className="font-label-stamp text-label-stamp font-bold">Slot Ready</span>
</div>
</div>

<div className="flex items-center justify-between pt-xs">
<div className="flex items-center gap-1 text-text-muted font-label-stamp text-label-stamp">
<span className="material-symbols-outlined text-[16px]">eco</span>
<span>Fuel efficient Tier-4</span>
</div>
<button className="h-touch-min px-lg bg-surface-card hover:bg-surface-subtle text-forest-deep hover:text-primary rounded-xl font-label-lg text-label-lg font-semibold transition-all flex items-center gap-xs shadow-sm active:scale-98" type="button">
<span>View Details</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</div>
</div>
</div>

<div className="bg-surface-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group">

<div className="relative h-60 w-full overflow-hidden bg-surface-subtle">
<img alt="Heavy duty rotary tiller rotavator implement" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5FCEx3mQx8qNapceaCnsF3IBdaVN7dUQrY83245woC6pm14uj0XX92NM0FhhWfFUErcsmBdLQr3FtcXxIJJPOCDCNge6QtCql_pUHR4rFHdxQgJSWrJfmrzLw3f3cBDxRzQsxr_a_ZVabBqpyiG4EMVzzj6nG3RNMORfe_vz7AVa7yOS1EsT9HCDiDuLbacy3g5iqNt1DRZdC39o774Zvym4ov9AyyUL_fQUZyl5YUwMeJ_NXxQnh"/>
<div className="absolute top-md left-md">
<span className="px-sm py-xs bg-forest-deep/85 backdrop-blur-md text-on-primary rounded-full font-label-stamp text-label-stamp uppercase tracking-wider font-bold">
              Rotavators
            </span>
</div>
<div className="absolute top-md right-md">

<div className="flex items-center gap-xs px-sm py-xs bg-status-serving-bg/95 backdrop-blur-md rounded-full shadow-sm">
<span className="w-2 h-2 rounded-full bg-status-serving"></span>
<span className="font-label-stamp text-label-stamp text-status-serving font-bold uppercase">Available Now</span>
</div>
</div>
</div>

<div className="p-md md:p-lg flex flex-col flex-1 justify-between gap-md">
<div className="flex flex-col gap-xs">
<div className="flex items-baseline justify-between gap-sm">
<h2 className="font-headline-sm text-headline-sm text-text-primary group-hover:text-primary transition-colors">
                Rotavator 6 ft (Heavy Duty 42 Blades)
              </h2>
</div>
<div className="flex items-center gap-xs font-body-sm text-body-sm text-text-muted">
<span className="material-symbols-outlined text-[16px] text-metric-positive">near_me</span>
<span>Rai Block (6.2 km away)</span>
<span className="text-border-muted">•</span>
<span className="text-text-secondary font-medium">Provider: Baldev Agro</span>
</div>
</div>

<div className="bg-surface-subtle rounded-xl p-sm flex items-center justify-between">
<div className="flex flex-col">
<div className="flex items-baseline gap-base">
<span className="font-metric-large text-metric-large text-forest-deep leading-none">₹600</span>
<span className="font-body-sm text-body-sm text-text-muted">/ day</span>
</div>
<span className="font-label-stamp text-label-stamp text-text-muted mt-0.5">Compatible with 40-50 HP 3-point hitch</span>
</div>
<div className="flex items-center gap-1 text-metric-positive bg-status-serving-bg px-xs py-0.5 rounded">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
<span className="font-label-stamp text-label-stamp font-bold">PTO Shaft In</span>
</div>
</div>

<div className="flex items-center justify-between pt-xs">
<div className="flex items-center gap-1 text-text-muted font-label-stamp text-label-stamp">
<span className="material-symbols-outlined text-[16px]">build</span>
<span>Pre-greased &amp; sharpened</span>
</div>
<button className="h-touch-min px-lg bg-surface-card hover:bg-surface-subtle text-forest-deep hover:text-primary rounded-xl font-label-lg text-label-lg font-semibold transition-all flex items-center gap-xs shadow-sm active:scale-98" type="button">
<span>View Details</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</div>
</div>
</div>

<div className="bg-surface-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group">

<div className="relative h-60 w-full overflow-hidden bg-surface-subtle">
<img alt="Claas Dominator Paddy combine harvester active in yellow crop fields" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5jwoDpIfOTXUEdhzZH1zpGDPXJO_bHXi7beTr5mEkygTU13jMagRj3cWaCPCgi25e2y15_QiCfccV4LqE2ykbm7Qdlu2zi3xRQkadPOIvtiBdpkMFBRKgAH_EUIgDlJ6NQMdcFNEAODpHKSyyq8oJFOxNwIsC5NIs0F_5KwYYV2NSyLVf7JzzChoTd0QTE_ZS80mUsa_M8cBzQRWCY9KW45Y1AMh1psWmLVhn7vk6EqiLwMtzSNUA"/>
<div className="absolute top-md left-md">
<span className="px-sm py-xs bg-forest-deep/85 backdrop-blur-md text-on-primary rounded-full font-label-stamp text-label-stamp uppercase tracking-wider font-bold">
              Harvesters
            </span>
</div>
<div className="absolute top-md right-md">

<div className="flex items-center gap-xs px-sm py-xs bg-status-waiting-bg/95 backdrop-blur-md rounded-full shadow-sm">
<span className="w-2 h-2 rounded-full bg-status-waiting"></span>
<span className="font-label-stamp text-label-stamp text-status-waiting font-bold uppercase">Booked Today • From Friday</span>
</div>
</div>
</div>

<div className="p-md md:p-lg flex flex-col flex-1 justify-between gap-md">
<div className="flex flex-col gap-xs">
<div className="flex items-baseline justify-between gap-sm">
<h2 className="font-headline-sm text-headline-sm text-text-primary group-hover:text-primary transition-colors">
                Claas Dominator Paddy Harvester
              </h2>
</div>
<div className="flex items-center gap-xs font-body-sm text-body-sm text-text-muted">
<span className="material-symbols-outlined text-[16px] text-metric-positive">near_me</span>
<span>Karnal South (18 km away)</span>
<span className="text-border-muted">•</span>
<span className="text-text-secondary font-medium">Provider: Haryana Custom Hiring</span>
</div>
</div>

<div className="bg-surface-subtle rounded-xl p-sm flex items-center justify-between">
<div className="flex flex-col">
<div className="flex items-baseline gap-base">
<span className="font-metric-large text-metric-large text-forest-deep leading-none">₹2,400</span>
<span className="font-body-sm text-body-sm text-text-muted">/ day</span>
</div>
<span className="font-label-stamp text-label-stamp text-metric-positive font-semibold mt-0.5">Including trained operator &amp; straw chopper</span>
</div>
<div className="flex items-center gap-1 text-text-muted bg-surface-container px-xs py-0.5 rounded">
<span className="material-symbols-outlined text-[14px]">schedule</span>
<span className="font-label-stamp text-label-stamp font-bold">Advance Book</span>
</div>
</div>

<div className="flex items-center justify-between pt-xs">
<div className="flex items-center gap-1 text-text-muted font-label-stamp text-label-stamp">
<span className="material-symbols-outlined text-[16px]">person_check</span>
<span>Operator provided</span>
</div>
<button className="h-touch-min px-lg bg-surface-card hover:bg-surface-subtle text-forest-deep hover:text-primary rounded-xl font-label-lg text-label-lg font-semibold transition-all flex items-center gap-xs shadow-sm active:scale-98" type="button">
<span>View Details</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</div>
</div>
</div>
</div>

<div className="relative overflow-hidden bg-forest-deep text-on-primary rounded-xl p-lg md:p-xl shadow-md flex flex-col md:flex-row md:items-center justify-between gap-lg">

<div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-metric-positive/10 pointer-events-none blur-2xl"></div>
<div className="absolute -left-12 -bottom-12 w-48 h-48 rounded-full bg-secondary/15 pointer-events-none blur-xl"></div>
<div className="relative z-10 flex items-start gap-md max-w-[42rem]">
<div className="w-12 h-12 rounded-xl bg-surface-card/10 backdrop-blur flex items-center justify-center shrink-0 text-primary-fixed">
<span className="material-symbols-outlined text-[28px]">sync_alt</span>
</div>
<div className="flex flex-col gap-xs">
<span className="font-label-stamp text-label-stamp text-primary-fixed font-bold tracking-wider uppercase">
            Mandi Slot Alignment • मंडी तालमेल
          </span>
<h3 className="font-headline-sm text-headline-sm text-on-primary leading-snug">
            Need transport synchronized with your Mandi procurement slot?
          </h3>
<p className="font-body-md text-body-md text-on-primary/80">
            All registered rental partners support direct trailer delivery to your farm and scheduled unloading at Gate 3.
          </p>
</div>
</div>

<div className="relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-sm shrink-0">
<a className="h-touch-min px-lg rounded-xl bg-primary-container hover:bg-tertiary text-on-primary font-label-lg text-label-lg font-semibold transition-colors flex items-center justify-center gap-xs shadow-sm" href="tel:18001801551">
<span className="material-symbols-outlined text-[20px]">call</span>
<span>1800-180-1551 (Toll Free)</span>
</a>
<button className="h-touch-min px-md rounded-xl bg-surface-card/10 hover:bg-surface-card/20 backdrop-blur text-on-primary font-label-lg text-label-lg transition-colors flex items-center justify-center gap-base" type="button">
<span className="material-symbols-outlined text-[18px]">chat</span>
<span>Kisan Sahayata</span>
</button>
</div>
</div>
</div>

<aside aria-label="Voice Assistant" className="fixed bottom-6 right-5 z-50">
<button aria-label="Speak to find equipment" className="w-14 h-14 rounded-full bg-forest-deep text-on-primary flex items-center justify-center shadow-[0_12px_24px_-4px_rgba(6,78,59,0.28)] hover:scale-105 active:scale-95 transition-all group relative" type="button">
<span className="material-symbols-outlined text-[26px] group-hover:text-primary-fixed transition-colors">mic</span>
<span className="absolute -top-1 -right-1 flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-metric-positive opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-metric-positive"></span>
</span>
</button>
</aside>
</div>

    </>
  );
}
