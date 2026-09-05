"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

export default function bookingsPage() {
  return (
    <>
      <div className="flex flex-col w-full px-lg py-xl max-w-[75rem] mx-auto">

<div className="flex flex-col gap-xs mb-lg">
<nav aria-label="Breadcrumb" className="flex items-center gap-xs font-label-md text-label-md text-text-muted">
<a className="hover:text-primary transition-colors flex items-center gap-base" href="#">
<span className="material-symbols-outlined text-[16px]">home</span>
<span>Home</span>
</a>
<span className="text-outline-variant">/</span>
<a className="hover:text-primary transition-colors" href="#">Procurement</a>
<span className="text-outline-variant">/</span>
<span className="text-text-primary font-semibold">My Bookings</span>
</nav>
<div className="flex flex-col md:flex-row md:items-end justify-between gap-md mt-xs">
<div className="flex flex-col gap-base">
<div className="flex items-center gap-sm flex-wrap">
<span className="px-sm py-base bg-secondary-container text-on-secondary-fixed-variant rounded-full font-label-stamp text-label-stamp tracking-wider uppercase font-bold">
            KISAN PORTAL
          </span>
<span className="flex items-center gap-base font-label-stamp text-label-stamp text-text-muted">
<span className="w-1.5 h-1.5 rounded-full bg-metric-positive"></span>
            Live APMC Sync
          </span>
</div>
<h1 className="font-headline-lg text-headline-lg text-text-primary tracking-tight">
          मेरी बुकिंग्स <span className="text-primary font-bold">•</span> My Bookings
        </h1>
<p className="font-body-md text-body-md text-text-muted max-w-2xl">
          Manage your scheduled mandi delivery slots, live weighbridge tokens, and past procurement settlements.
        </p>
</div>
<div className="flex items-center gap-sm self-start md:self-auto">
<button className="flex items-center gap-xs px-md py-sm bg-surface-card hover:bg-surface-subtle shadow-sm rounded-xl font-label-lg text-label-lg text-text-primary transition-all active:scale-95" type="button">
<span className="material-symbols-outlined text-[20px] text-primary">download</span>
<span>Download Statement (विवरण)</span>
</button>
</div>
</div>
</div>

<div className="flex items-center justify-between overflow-x-auto pb-base mb-xl no-scrollbar">
<div className="flex items-center gap-xs p-base bg-surface-subtle rounded-xl shadow-inner">
<button className="px-md py-xs rounded-lg font-label-md text-label-md bg-surface-card text-text-primary shadow-sm font-bold transition-all" type="button">
        All Bookings (5)
      </button>
<button className="px-md py-xs rounded-lg font-label-md text-label-md text-text-secondary hover:text-text-primary hover:bg-surface-card/60 transition-all flex items-center gap-xs" type="button">
<span>Upcoming &amp; Active</span>
<span className="w-2 h-2 rounded-full bg-status-serving"></span>
<span className="font-bold">(1)</span>
</button>
<button className="px-md py-xs rounded-lg font-label-md text-label-md text-text-secondary hover:text-text-primary hover:bg-surface-card/60 transition-all" type="button">
        Completed (4)
      </button>
<button className="px-md py-xs rounded-lg font-label-md text-label-md text-text-muted hover:text-text-primary hover:bg-surface-card/60 transition-all" type="button">
        Drafts / Unassigned (0)
      </button>
</div>
<div className="hidden lg:flex items-center gap-xs font-label-stamp text-label-stamp text-text-muted pl-md">
<span className="material-symbols-outlined text-[16px] text-status-serving">verified</span>
<span>AADHAAR &amp; KISAN PASSBOOK SYNCED</span>
</div>
</div>

<section className="mb-2xl">
<div className="flex items-center justify-between mb-sm">
<div className="flex items-center gap-xs">
<span className="w-2.5 h-2.5 rounded-full bg-status-serving animate-ping"></span>
<h2 className="font-headline-sm text-headline-sm text-text-primary">
          Active Procurement Slot (सक्रिय स्लॉट)
        </h2>
</div>
<div className="flex items-center gap-xs text-text-muted font-label-stamp text-label-stamp">
<span className="material-symbols-outlined text-[14px]">history</span>
<span>Updated 2m ago</span>
</div>
</div>

<div className="relative bg-surface-card rounded-2xl shadow-md overflow-hidden">

<div className="absolute top-0 bottom-0 left-0 w-2 bg-primary"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-0 pl-2">

<div className="lg:col-span-8 p-lg md:p-xl flex flex-col justify-between">

<div>
<div className="flex flex-wrap items-start justify-between gap-md mb-md">
<div className="flex items-start gap-md">
<div className="w-14 h-14 rounded-2xl bg-secondary-container/40 flex items-center justify-center shrink-0 shadow-sm">
<span className="material-symbols-outlined text-primary text-[32px]">grain</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-xs flex-wrap mb-base">
<h3 className="font-headline-md text-headline-md text-text-primary">
                      Sharbati Wheat (शरबती गेहूँ)
                    </h3>
<span className="px-xs py-0.5 bg-surface-subtle text-text-secondary rounded font-label-stamp text-label-stamp font-bold">
                      Grade A
                    </span>
</div>
<div className="flex items-center gap-xs text-text-muted font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[16px] text-primary">storefront</span>
<span className="font-medium text-text-secondary">Karnal Central Yard</span>
<span>• Gate No. 2 (Wheat &amp; Oilseeds Wing)</span>
<span className="px-xs py-0.5 bg-surface-subtle rounded text-text-muted font-label-stamp text-label-stamp">4.2 km</span>
</div>
</div>
</div>
<div className="flex flex-col items-end gap-xs">
<span className="inline-flex items-center gap-xs px-sm py-xs bg-status-confirmed-bg text-status-confirmed font-label-stamp text-label-stamp uppercase font-bold rounded-full shadow-sm">
<span className="w-2 h-2 rounded-full bg-status-confirmed animate-pulse"></span>
                  CONFIRMED &amp; READY
                </span>
<span className="font-label-stamp text-label-stamp text-text-muted font-mono tracking-tight">Ref: #BK-9104</span>
</div>
</div>

<div className="grid grid-cols-2 sm:grid-cols-4 gap-md p-md bg-canvas-warm rounded-xl mb-lg">
<div className="flex flex-col gap-base">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase">Total Quantity (मात्रा)</span>
<span className="font-metric-medium text-metric-medium text-text-primary">45 Qtl</span>
<span className="font-body-sm text-[11px] leading-tight text-status-serving flex items-center gap-base">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
                  Trolley Verified
                </span>
</div>
<div className="flex flex-col gap-base">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase">Scheduled Slot (तय समय)</span>
<span className="font-metric-medium text-metric-medium text-text-primary">Tomorrow</span>
<span className="font-body-sm text-[11px] leading-tight text-text-secondary">
                  25 Oct • 10:30 AM
                </span>
</div>
<div className="flex flex-col gap-base">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase">Live Queue Token</span>
<div className="flex items-baseline gap-xs">
<span className="font-metric-large text-metric-large text-primary font-black">#CB-8842</span>
</div>
<span className="font-body-sm text-[11px] leading-tight text-status-waiting font-semibold">
                  7 Vehicles ahead
                </span>
</div>
<div className="flex flex-col gap-base">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase">Yard Live Serving</span>
<span className="font-metric-medium text-metric-medium text-text-secondary font-mono">CB-8835</span>
<span className="font-body-sm text-[11px] leading-tight text-text-muted">
                  Est. Wait: ~35 mins
                </span>
</div>
</div>

<div className="flex items-center gap-sm px-md py-sm bg-status-serving-bg rounded-xl mb-lg">
<span className="material-symbols-outlined text-status-serving text-[20px] shrink-0">wb_sunny</span>
<p className="font-body-sm text-body-sm text-status-serving leading-tight">
<strong>Transit Permitted:</strong> Sky clear, transport road unblocked. Moisture tested safe at <strong>11.4%</strong> (Govt. Threshold: &lt;12.0%).
              </p>
</div>
</div>

<div className="flex flex-wrap items-center gap-sm pt-md">
<button className="flex-1 sm:flex-none flex items-center justify-center gap-xs px-lg py-sm bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg rounded-xl shadow-md transition-all active:scale-95" type="button">
<span>Track Live Queue (लाइव कतार देखें)</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
<button className="flex items-center justify-center gap-xs px-md py-sm bg-surface-subtle hover:bg-surface-container text-text-primary font-label-lg text-label-lg rounded-xl transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">qr_code_2</span>
<span>View E-Gate Pass</span>
</button>
<button className="flex items-center justify-center gap-xs px-md py-sm hover:bg-surface-subtle text-text-muted hover:text-text-primary font-label-lg text-label-lg rounded-xl transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">calendar_month</span>
<span>Reschedule</span>
</button>
</div>
</div>

<div className="lg:col-span-4 bg-surface-subtle/70 p-lg md:p-xl flex flex-col justify-between gap-lg">

<div className="flex flex-col gap-sm">
<div className="flex items-center justify-between">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase font-bold tracking-wide">
                WEIGHBRIDGE ROUTE
              </span>
<span className="px-xs py-0.5 bg-surface-card rounded text-status-serving font-label-stamp text-label-stamp font-bold">
                DIRECT LANE OPEN
              </span>
</div>

<div className="w-full h-32 bg-surface-container rounded-xl relative overflow-hidden shadow-inner flex flex-col justify-end p-sm" data-location="Karnal APMC Yard, Haryana, India" >
<div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-forest-deep/30 to-transparent"></div>
<div className="relative z-10 text-on-primary flex flex-col">
<span className="font-label-stamp text-label-stamp text-primary-fixed uppercase font-bold">Bay 4 • Scale 2</span>
<span className="font-body-sm text-body-sm font-semibold truncate">Entry directly from NH44 Bypass Gate 2</span>
</div>
</div>
</div>

<div className="bg-surface-card p-md rounded-xl shadow-sm flex flex-col gap-xs">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase">Officer on Duty</span>
<div className="flex items-center gap-sm">
<div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary shrink-0">
<span className="material-symbols-outlined text-[20px]">badge</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg text-text-primary truncate">Virendra Sharma</span>
<span className="font-body-sm text-body-sm text-text-muted truncate">Procurement Lead, Gate 2</span>
</div>
</div>
<a className="mt-xs flex items-center gap-xs font-label-md text-label-md text-primary font-bold hover:underline" href="tel:+911842298801">
<span className="material-symbols-outlined text-[16px]">call</span>
<span>+91 184-229-8801 (Helpdesk)</span>
</a>
</div>

<div className="flex flex-col gap-xs">
<div className="flex items-center justify-between font-label-stamp text-label-stamp">
<span className="text-text-muted uppercase">Yard Congestion Level</span>
<span className="text-metric-positive font-bold">OPTIMAL (18% Busy)</span>
</div>
<div className="flex items-center gap-1 w-full">
<div className="h-2 flex-1 rounded-full bg-status-serving"></div>
<div className="h-2 flex-1 rounded-full bg-surface-container"></div>
<div className="h-2 flex-1 rounded-full bg-surface-container"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mb-2xl">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-md mb-lg">
<div className="flex flex-col">
<h2 className="font-headline-sm text-headline-sm text-text-primary">
          Completed Procurements (सफल खरीद इतिहास)
        </h2>
<p className="font-body-sm text-body-sm text-text-muted">
          All records verified against PFMS and State Mandi Board electronic slips.
        </p>
</div>
<div className="flex items-center gap-sm">
<div className="relative">
<select className="appearance-none bg-surface-card pl-md pr-xl py-xs rounded-xl font-label-md text-label-md text-text-primary shadow-sm outline-none cursor-pointer focus:bg-surface-subtle transition-colors">
<option>Filter Season: Rabi 2024</option>
<option>Kharif 2024</option>
<option>Rabi 2023</option>
<option>All Past Seasons</option>
</select>
<span className="material-symbols-outlined text-[18px] text-text-muted absolute right-2.5 top-2.5 pointer-events-none">expand_more</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-lg">

<div className="bg-surface-card rounded-2xl p-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
<div>

<div className="flex items-start justify-between gap-xs mb-sm">
<div className="flex items-center gap-xs">
<div className="w-10 h-10 rounded-xl bg-status-completed-bg flex items-center justify-center text-status-completed">
<span className="material-symbols-outlined text-[22px]">agriculture</span>
</div>
<div className="flex flex-col">
<h3 className="font-title-md text-title-md text-text-primary leading-tight">Sharbati Wheat</h3>
<span className="font-body-sm text-body-sm text-text-muted">शरबती गेहूँ</span>
</div>
</div>
<span className="px-xs py-0.5 bg-status-completed-bg text-status-completed font-label-stamp text-label-stamp rounded-full font-bold uppercase">
              COMPLETED &amp; PAID
            </span>
</div>

<div className="space-y-xs py-sm">
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-text-muted">Procured Date:</span>
<span className="font-medium text-text-primary">14 Oct 2024</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-text-muted">Mandi Location:</span>
<span className="font-medium text-text-primary truncate max-w-[150px]">Karnal Gate 2</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-text-muted">Quantity Delivered:</span>
<span className="font-bold text-text-primary">45 Quintals</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-text-muted">Token / Booking:</span>
<span className="font-mono text-text-muted">#CB-7102 • #BK-7741</span>
</div>
</div>

<div className="p-sm bg-surface-subtle rounded-xl my-sm flex items-center justify-between">
<div className="flex flex-col">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase">Disbursed Amount</span>
<span className="font-metric-large text-metric-large text-primary">₹1,20,765</span>
</div>
<div className="text-right flex flex-col items-end">
<span className="font-label-stamp text-label-stamp text-metric-positive font-bold">DBT SETTLED</span>
<span className="font-body-sm text-[11px] text-text-muted">@ ₹2,425/Qtl + Bonus</span>
</div>
</div>
</div>

<div className="flex items-center gap-xs pt-sm">
<button className="flex-1 py-xs px-sm bg-surface-subtle hover:bg-surface-container rounded-lg font-label-md text-label-md text-text-primary text-center transition-colors" type="button">
            View Record
          </button>
<button className="py-xs px-sm bg-surface-subtle hover:bg-surface-container rounded-lg text-text-muted hover:text-text-primary transition-colors flex items-center justify-center" type="button">
<span className="material-symbols-outlined text-[18px]">receipt_long</span>
</button>
</div>
</div>

<div className="bg-surface-card rounded-2xl p-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
<div>

<div className="flex items-start justify-between gap-xs mb-sm">
<div className="flex items-center gap-xs">
<div className="w-10 h-10 rounded-xl bg-status-completed-bg flex items-center justify-center text-status-completed">
<span className="material-symbols-outlined text-[22px]">energy_savings_leaf</span>
</div>
<div className="flex flex-col">
<h3 className="font-title-md text-title-md text-text-primary leading-tight">Mustard / Sarson</h3>
<span className="font-body-sm text-body-sm text-text-muted">सरसों (Pusa Bold)</span>
</div>
</div>
<span className="px-xs py-0.5 bg-status-completed-bg text-status-completed font-label-stamp text-label-stamp rounded-full font-bold uppercase">
              COMPLETED &amp; PAID
            </span>
</div>

<div className="space-y-xs py-sm">
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-text-muted">Procured Date:</span>
<span className="font-medium text-text-primary">22 Sep 2024</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-text-muted">Mandi Location:</span>
<span className="font-medium text-text-primary truncate max-w-[150px]">Taraori Silo</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-text-muted">Quantity Delivered:</span>
<span className="font-bold text-text-primary">30 Quintals</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-text-muted">Token / Booking:</span>
<span className="font-mono text-text-muted">#CB-5541 • #BK-6210</span>
</div>
</div>

<div className="p-sm bg-surface-subtle rounded-xl my-sm flex items-center justify-between">
<div className="flex flex-col">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase">Disbursed Amount</span>
<span className="font-metric-large text-metric-large text-primary">₹1,68,600</span>
</div>
<div className="text-right flex flex-col items-end">
<span className="font-label-stamp text-label-stamp text-metric-positive font-bold">DBT SETTLED</span>
<span className="font-body-sm text-[11px] text-text-muted">@ ₹5,620/Qtl Direct</span>
</div>
</div>
</div>

<div className="flex items-center gap-xs pt-sm">
<button className="flex-1 py-xs px-sm bg-surface-subtle hover:bg-surface-container rounded-lg font-label-md text-label-md text-text-primary text-center transition-colors" type="button">
            View Record
          </button>
<button className="py-xs px-sm bg-surface-subtle hover:bg-surface-container rounded-lg text-text-muted hover:text-text-primary transition-colors flex items-center justify-center" type="button">
<span className="material-symbols-outlined text-[18px]">receipt_long</span>
</button>
</div>
</div>

<div className="bg-surface-card rounded-2xl p-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
<div>

<div className="flex items-start justify-between gap-xs mb-sm">
<div className="flex items-center gap-xs">
<div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-text-secondary">
<span className="material-symbols-outlined text-[22px]">eco</span>
</div>
<div className="flex flex-col">
<h3 className="font-title-md text-title-md text-text-primary leading-tight">Basmati Paddy</h3>
<span className="font-body-sm text-body-sm text-text-muted">धान (1121 Sugandh)</span>
</div>
</div>
<span className="px-xs py-0.5 bg-surface-container text-text-secondary font-label-stamp text-label-stamp rounded-full font-bold uppercase">
              COMPLETED
            </span>
</div>

<div className="space-y-xs py-sm">
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-text-muted">Procured Date:</span>
<span className="font-medium text-text-primary">05 Jun 2024</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-text-muted">Mandi Location:</span>
<span className="font-medium text-text-primary truncate max-w-[150px]">Sonipat Main</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-text-muted">Quantity Delivered:</span>
<span className="font-bold text-text-primary">60 Quintals</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-text-muted">Token / Booking:</span>
<span className="font-mono text-text-muted">#CB-3890 • #BK-4982</span>
</div>
</div>

<div className="p-sm bg-surface-subtle rounded-xl my-sm flex items-center justify-between">
<div className="flex flex-col">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase">Disbursed Amount</span>
<span className="font-metric-large text-metric-large text-text-primary">₹1,16,400</span>
</div>
<div className="text-right flex flex-col items-end">
<span className="font-label-stamp text-label-stamp text-text-muted font-bold">BANK CLEARED</span>
<span className="font-body-sm text-[11px] text-text-muted">Ref: UTBI029419</span>
</div>
</div>
</div>

<div className="flex items-center gap-xs pt-sm">
<button className="flex-1 py-xs px-sm bg-surface-subtle hover:bg-surface-container rounded-lg font-label-md text-label-md text-text-primary text-center transition-colors" type="button">
            View Record
          </button>
<button className="py-xs px-sm bg-surface-subtle hover:bg-surface-container rounded-lg text-text-muted hover:text-text-primary transition-colors flex items-center justify-center" type="button">
<span className="material-symbols-outlined text-[18px]">receipt_long</span>
</button>
</div>
</div>
</div>
</section>

<div className="p-lg md:p-xl bg-surface-card rounded-2xl shadow-sm flex flex-col md:flex-row items-center justify-between gap-md mb-2xl">
<div className="flex items-center gap-md">
<div className="w-12 h-12 rounded-xl bg-status-waiting-bg flex items-center justify-center text-status-waiting shrink-0">
<span className="material-symbols-outlined text-[28px]">support_agent</span>
</div>
<div className="flex flex-col">
<h4 className="font-title-md text-title-md text-text-primary font-bold">
          Need assistance with your booking? (मंडी सहायता केंद्र)
        </h4>
<p className="font-body-md text-body-md text-text-muted">
          Carry your Kisan Credit Card &amp; Land Record Parwana to bypass physical verification desk at Gate 2.
        </p>
</div>
</div>
<div className="flex items-center gap-sm shrink-0 w-full md:w-auto">
<a className="w-full md:w-auto flex items-center justify-center gap-xs px-lg py-sm bg-surface-subtle hover:bg-surface-container text-text-primary rounded-xl font-label-lg text-label-lg transition-colors" href="tel:18001801551">
<span className="material-symbols-outlined text-[18px] text-primary">call</span>
<span>Call Mandi Helpline (1800-180-1551)</span>
</a>
</div>
</div>

<div className="fixed bottom-6 right-6 z-50 flex items-center gap-xs">
<button className="flex items-center gap-xs pl-md pr-lg py-sm bg-forest-deep text-on-primary rounded-full shadow-[0_12px_24px_-4px_rgba(6,78,59,0.36)] hover:bg-primary transition-all active:scale-95 group" id="voice-fab" type="button">
<span className="w-7 h-7 rounded-full bg-status-serving flex items-center justify-center group-hover:animate-pulse">
<span className="material-symbols-outlined text-[18px]">mic</span>
</span>
<span className="font-label-lg text-label-lg font-bold">बोलकर टोकन जांचें (Ask Awaaz)</span>
</button>
</div>
</div>

    </>
  );
}
