/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Page() {
  return (
    <main className="flex-1 overflow-y-auto bg-gray-50"><div className="flex flex-col w-full">
<div className="flex flex-col gap-xl max-w-[75rem] mx-auto w-full pb-xl">

<div className="flex flex-col md:flex-row md:items-center justify-between gap-md">
<div className="flex flex-col">
<div className="flex items-center gap-xs">
<span className="font-headline-lg text-headline-lg text-forest-deep tracking-tight">Namaste, Kisan Bhai!</span>
<span className="inline-flex items-center justify-center p-base text-status-serving">
<span className="material-symbols-outlined text-[26px]" style={{ fontVariationSettings: "'FILL' 1" }}>spa</span>
</span>
</div>
<p className="font-body-md text-body-md text-text-muted mt-1">Here's what's happening with your crops and procurement today.</p>
</div>
<div className="inline-flex items-center gap-xs px-md py-sm rounded-full bg-surface-card shadow-sm self-start md:self-auto">
<span className="w-2.5 h-2.5 rounded-full bg-status-serving"></span>
<span className="font-label-md text-label-md text-forest-deep">APMC Nilokheri / Karnal Hub</span>
<span className="text-text-muted font-label-stamp text-label-stamp">•</span>
<span className="font-label-stamp text-label-stamp text-text-secondary font-medium">08 Sep 2026</span>
</div>
</div>

<div className="relative overflow-hidden rounded-xl bg-surface-card shadow-sm p-md md:p-xl flex flex-col justify-between">

<div className="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-primary-fixed-dim/20 blur-3xl pointer-events-none"></div>
<div className="flex flex-col gap-lg">

<div className="flex flex-wrap items-center justify-between gap-md">
<div className="flex items-center gap-sm">
<span className="font-label-stamp text-label-stamp uppercase tracking-widest text-text-muted">NEXT PROCUREMENT</span>
<span className="inline-flex items-center gap-xs px-sm py-base rounded-full bg-status-confirmed-bg text-status-confirmed font-label-stamp text-label-stamp">
<span className="w-1.5 h-1.5 rounded-full bg-status-confirmed"></span>
              CONFIRMED • पुष्टि
            </span>
</div>

<div className="flex items-center gap-xs px-md py-xs rounded-xl bg-forest-deep text-on-primary shadow-sm">
<span className="font-label-stamp text-label-stamp tracking-wider uppercase text-tertiary-fixed">TOKEN</span>
<span className="font-metric-large text-metric-large text-on-primary">A-24</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-lg items-center">

<div className="md:col-span-4 flex items-center gap-md">
<div className="relative w-20 h-20 rounded-xl overflow-hidden shadow-sm shrink-0 bg-surface-subtle">
<img className="w-full h-full object-cover" data-alt="Golden ripe wheat grain sheaves harvested in rural Punjab India under clear midday sun macro detailed photography" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjptT6JhWCczRISK_ibTisYlrx7_NOluNI9t7bZqNKUypGc9X-3m40YqUCAgN7ultVs4hiTeTZ_55LZctvv8RJt3_wo66dlznaKanKaQvgobaqYjNuInDonn2r0PMEgxD3mJPjXU9sbGUa4dExIGBWaMLuwm9xp78m04v8eBAXOBNhlS4w36wy4I2VR0nCEGF-8iQGV377lVuVzaxrunfbOyFMpXLjrukkmTbDsbrUvegcvNhntEPy"/>
</div>
<div className="flex flex-col min-w-0">
<span className="font-headline-sm text-headline-sm text-forest-deep font-bold truncate">Wheat (गेहूँ)</span>
<span className="font-label-md text-label-md text-text-secondary">Sharbati Grade A</span>
<span className="font-label-stamp text-label-stamp text-status-serving font-medium mt-base">Moisture: 11.2% (Pass)</span>
</div>
</div>

<div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-md">
<div className="flex flex-col">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase">Quantity</span>
<span className="font-headline-sm text-headline-sm text-forest-deep font-bold mt-base">50 Quintal</span>
<span className="font-label-stamp text-label-stamp text-text-secondary">5,000 kg approx</span>
</div>
<div className="flex flex-col">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase">Centre</span>
<span className="font-body-md text-body-md text-forest-deep font-bold mt-base truncate">XYZ Proc. Centre</span>
<span className="font-label-stamp text-label-stamp text-text-secondary">Gate 2 Weighbridge</span>
</div>
<div className="flex flex-col">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase">Date &amp; Day</span>
<span className="font-body-md text-body-md text-forest-deep font-bold mt-base">08 September</span>
<span className="font-label-stamp text-label-stamp text-text-secondary">Tuesday Schedule</span>
</div>
<div className="flex flex-col">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase">Reporting Slot</span>
<span className="font-headline-sm text-headline-sm text-forest-deep font-bold mt-base">2:00 PM</span>
<span className="font-label-stamp text-label-stamp text-status-waiting font-semibold">Arrive by 1:45 PM</span>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-md pt-sm">
<div className="flex items-center gap-xs text-text-muted">
<span className="material-symbols-outlined text-[18px]">verified_user</span>
<span className="font-body-sm text-body-sm">Weighbridge scale automated calibration certified. Valid vehicle slip: HR-05-AB-7492</span>
</div>
<div className="flex items-center gap-sm shrink-0">
<button className="h-[48px] px-lg rounded-xl bg-surface-subtle text-forest-deep hover:bg-surface-container-high transition-colors font-label-lg text-label-lg inline-flex items-center justify-center gap-xs" type="button">
<span className="material-symbols-outlined text-[20px]">download</span>
              Download Gate Pass
            </button>
<Link href="/procurement/queue" className="h-[48px] px-lg rounded-xl bg-primary-container text-on-primary hover:bg-forest-deep transition-all shadow-sm font-label-lg text-label-lg inline-flex items-center justify-center gap-xs">
<span>Track Queue</span>
<span className="material-symbols-outlined text-[20px]">arrow_forward</span>
</Link>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">

<div className="rounded-xl bg-surface-card shadow-sm p-md flex flex-col justify-between hover:shadow-md transition-shadow">
<div className="flex flex-col gap-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-xs">
<span className="p-xs rounded-lg bg-surface-subtle text-forest-deep">
<span className="material-symbols-outlined text-[20px]">hourglass_top</span>
</span>
<span className="font-label-lg text-label-lg text-forest-deep font-bold">Live Queue</span>
</div>
<span className="inline-flex items-center gap-base px-xs py-base rounded-full bg-status-waiting-bg text-status-waiting font-label-stamp text-label-stamp">
<span className="w-1.5 h-1.5 rounded-full bg-status-waiting"></span>
              Moderately Busy
            </span>
</div>
<div className="mt-xs">
<span className="font-metric-large text-metric-large text-forest-deep">6 Farmers</span>
<span className="font-body-sm text-body-sm text-text-muted block">Ahead of your load</span>
</div>

<div className="flex flex-col gap-base mt-xs">
<div className="flex justify-between font-label-stamp text-label-stamp text-text-muted">
<span>Now Serving: <strong className="text-forest-deep">A-18</strong></span>
<span>Wait: <strong className="text-forest-deep">~42 min</strong></span>
</div>
<div className="h-2 w-full bg-surface-subtle rounded-full overflow-hidden flex">
<div className="h-full bg-status-serving w-3/4 rounded-full"></div>
</div>
</div>
</div>
<div className="pt-md mt-xs flex items-center justify-between">
<span className="font-label-stamp text-label-stamp text-text-muted">Gate 2 Unloading bay</span>
<Link href="#" className="font-label-md text-label-md text-primary-container hover:underline inline-flex items-center gap-base" >
            View Live Line →
          </Link>
</div>
</div>

<div className="rounded-xl bg-surface-card shadow-sm p-md flex flex-col justify-between hover:shadow-md transition-shadow">
<div className="flex flex-col gap-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-xs">
<span className="p-xs rounded-lg bg-surface-subtle text-forest-deep">
<span className="material-symbols-outlined text-[20px]">trending_up</span>
</span>
<span className="font-label-lg text-label-lg text-forest-deep font-bold">Market Price</span>
</div>
<span className="inline-flex items-center gap-base px-xs py-base rounded-full bg-status-serving-bg text-status-serving font-label-stamp text-label-stamp">
              +1.25% (₹30) Today
            </span>
</div>
<div className="mt-xs">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase">Wheat (गेहूँ)</span>
<div className="flex items-baseline gap-base">
<span className="font-metric-large text-metric-large text-forest-deep">₹2,425</span>
<span className="font-body-sm text-body-sm text-text-muted">/ Quintal</span>
</div>
</div>

<div className="p-xs rounded-lg bg-surface-subtle flex items-center justify-between mt-xs">
<span className="font-label-stamp text-label-stamp text-text-muted">Govt MSP: ₹2,275</span>
<span className="font-label-stamp text-label-stamp text-status-serving font-bold">+₹150 above MSP</span>
</div>
</div>
<div className="pt-md mt-xs flex items-center justify-between">
<span className="font-label-stamp text-label-stamp text-text-muted">Karnal Mandi Mandate</span>
<Link href="#" className="font-label-md text-label-md text-primary-container hover:underline inline-flex items-center gap-base" >
            Mandi Trends →
          </Link>
</div>
</div>

<div className="rounded-xl bg-surface-card shadow-sm p-md flex flex-col justify-between hover:shadow-md transition-shadow">
<div className="flex flex-col gap-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-xs">
<span className="p-xs rounded-lg bg-surface-subtle text-forest-deep">
<span className="material-symbols-outlined text-[20px]">cloud</span>
</span>
<span className="font-label-lg text-label-lg text-forest-deep font-bold">Weather</span>
</div>
<span className="inline-flex items-center gap-base px-xs py-base rounded-full bg-status-confirmed-bg text-status-confirmed font-label-stamp text-label-stamp">
              Nilokheri Live
            </span>
</div>
<div className="flex items-center justify-between mt-xs">
<div>
<span className="font-metric-large text-metric-large text-forest-deep">29°C</span>
<span className="font-body-sm text-body-sm text-text-muted block">Partly Cloudy</span>
</div>
<div className="text-right">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase block">Rain Probability</span>
<span className="font-metric-medium text-metric-medium text-forest-deep">20%</span>
</div>
</div>
<div className="flex items-center gap-sm py-xs px-sm rounded-lg bg-surface-subtle font-label-stamp text-label-stamp text-text-secondary">
<span className="material-symbols-outlined text-[16px] text-text-muted">air</span>
<span>Wind 12 km/h North-West</span>
</div>
</div>
<div className="pt-xs mt-xs">
<p className="font-body-sm text-body-sm text-status-serving font-medium">
            Optimal conditions for open trolley transport.
          </p>
</div>
</div>

<div className="rounded-xl bg-surface-card shadow-sm p-md flex flex-col justify-between hover:shadow-md transition-shadow">
<div className="flex flex-col gap-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-xs">
<span className="p-xs rounded-lg bg-surface-subtle text-forest-deep">
<span className="material-symbols-outlined text-[20px]">account_balance</span>
</span>
<span className="font-label-lg text-label-lg text-forest-deep font-bold">Payment</span>
</div>
<span className="inline-flex items-center gap-base px-xs py-base rounded-full bg-status-completed-bg text-status-completed font-label-stamp text-label-stamp">
              Settled Yesterday
            </span>
</div>
<div className="mt-xs">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase">Last Payout</span>
<div className="flex items-baseline gap-base">
<span className="font-metric-large text-metric-large text-forest-deep">₹1,21,250</span>
</div>
</div>
<div className="p-xs rounded-lg bg-surface-subtle flex items-center gap-xs">
<span className="material-symbols-outlined text-[16px] text-status-serving">check_circle</span>
<span className="font-label-stamp text-label-stamp text-text-secondary truncate">DBT direct to SBI •••• 4921</span>
</div>
</div>
<div className="pt-md mt-xs flex items-center justify-between">
<span className="font-label-stamp text-label-stamp text-text-muted">UTR: CB-8839210</span>
<Link href="#" className="font-label-md text-label-md text-primary-container hover:underline inline-flex items-center gap-base" >
            View Receipt →
          </Link>
</div>
</div>
</div>

<div className="flex flex-col gap-sm">
<div className="flex items-center justify-between">
<span className="font-label-stamp text-label-stamp uppercase tracking-widest text-text-muted">QUICK ACTIONS &amp; SERVICES</span>
<span className="font-label-stamp text-label-stamp text-text-muted">Direct Farmer Self-Service</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">

<Link href="/crops/add" className="group py-3 px-4 min-h-[72px] rounded-xl bg-forest-deep text-on-primary hover:bg-primary-container transition-all shadow-sm flex items-center justify-between text-left">
<div className="flex items-center gap-sm">
<div className="w-8 h-8 rounded-lg bg-surface-card/10 flex items-center justify-center text-tertiary-fixed group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-[20px]">add_circle</span>
</div>
<div className="flex flex-col leading-none">
<span className="font-label-lg text-label-lg text-on-primary font-bold">+ Add Crop</span>
<span className="font-label-stamp text-label-stamp text-tertiary-fixed mt-1">नयी फसल दर्ज करें</span>
</div>
</div>
<span className="material-symbols-outlined text-[18px] text-on-primary/60 group-hover:translate-x-0.5 transition-transform">chevron_right</span>
</Link>

<Link href="/procurement-centres" className="group py-3 px-4 min-h-[72px] rounded-xl bg-surface-card text-forest-deep hover:bg-surface-subtle transition-colors shadow-sm flex items-center justify-between text-left">
<div className="flex items-center gap-sm">
<div className="w-8 h-8 rounded-lg bg-surface-subtle flex items-center justify-center text-forest-deep group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-[20px]">calendar_month</span>
</div>
<div className="flex flex-col leading-none">
<span className="font-label-lg text-label-lg text-forest-deep font-bold">Book Slot</span>
<span className="font-label-stamp text-label-stamp text-text-muted mt-1">मंडी स्लॉट चुनें</span>
</div>
</div>
<span className="material-symbols-outlined text-[18px] text-text-muted group-hover:translate-x-0.5 transition-transform">chevron_right</span>
</Link>

<button className="group py-3 px-4 min-h-[72px] rounded-xl bg-surface-card text-forest-deep hover:bg-surface-subtle transition-colors shadow-sm flex items-center justify-between text-left" type="button">
<div className="flex items-center gap-sm">
<div className="w-8 h-8 rounded-lg bg-surface-subtle flex items-center justify-center text-forest-deep group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-[20px]">query_stats</span>
</div>
<div className="flex flex-col leading-none">
<span className="font-label-lg text-label-lg text-forest-deep font-bold">Check Prices</span>
<span className="font-label-stamp text-label-stamp text-text-muted mt-1">लाइव भाव जानें</span>
</div>
</div>
<span className="material-symbols-outlined text-[18px] text-text-muted group-hover:translate-x-0.5 transition-transform">chevron_right</span>
</button>

<button className="group py-3 px-4 min-h-[72px] rounded-xl bg-surface-card text-forest-deep hover:bg-surface-subtle transition-colors shadow-sm flex items-center justify-between text-left" type="button">
<div className="flex items-center gap-sm">
<div className="w-8 h-8 rounded-lg bg-surface-subtle flex items-center justify-center text-forest-deep group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-[20px]">agriculture</span>
</div>
<div className="flex flex-col leading-none">
<span className="font-label-lg text-label-lg text-forest-deep font-bold">Rent Equipment</span>
<span className="font-label-stamp text-label-stamp text-text-muted mt-1">ट्रैक्टर व कंबाइन</span>
</div>
</div>
<span className="material-symbols-outlined text-[18px] text-text-muted group-hover:translate-x-0.5 transition-transform">chevron_right</span>
</button>
</div>
</div>

<div className="rounded-xl bg-surface-card shadow-sm p-md md:p-lg flex flex-col gap-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-xs">
<span className="material-symbols-outlined text-[22px] text-forest-deep">inventory</span>
<span className="font-title-md text-title-md text-forest-deep font-bold">Your Registered Batches (सक्रिय फसलें)</span>
</div>
<Link href="/crops" className="font-label-md text-label-md text-primary-container hover:underline" >View All 4 Batches →</Link>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-md">

<div className="p-md rounded-xl bg-surface-subtle flex items-center justify-between gap-md">
<div className="flex items-center gap-md">
<div className="w-14 h-14 rounded-lg overflow-hidden shrink-0 bg-surface-card shadow-sm">
<img className="w-full h-full object-cover" data-alt="Close up photograph of organic yellow mustard mustard seed crop in sunny Indian farmland" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGHYY_TXGOxoNlyGN8uukvP8S65I98TDZszj75iDJ9TU0mTW-cWGnodNGHmdrKKL6hLCfRLFeEnlpnfhbZPtsv0Av6TTcf2QxmAkelMjhU74D0ZkEVg6hPW6H8CBl4niamXk1SMq7ELnEwPgOz1TKEnmsa1OxDhORHWAcXCSENfEltIn_X0giR3rA3Rny1qTbpQPurFVLN-FrimWKZbOelyeOVU1Bx1xCYRxzigJXk-rmYwONYc_FO"/>
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-forest-deep font-bold">Mustard (सरसों)</span>
<span className="font-body-sm text-body-sm text-text-secondary">22 Quintal • Ready for Dispatch</span>
<span className="font-label-stamp text-label-stamp text-text-muted mt-1">Estimated Value: ₹1,18,800</span>
</div>
</div>
<button className="h-10 px-md rounded-lg bg-surface-card text-forest-deep hover:bg-forest-deep hover:text-on-primary transition-colors font-label-md text-label-md shrink-0 shadow-sm" type="button">
            Book Mandi
          </button>
</div>

<div className="p-md rounded-xl bg-surface-subtle flex items-center justify-between gap-md">
<div className="flex items-center gap-md">
<div className="w-14 h-14 rounded-lg overflow-hidden shrink-0 bg-surface-card shadow-sm">
<img className="w-full h-full object-cover" data-alt="Lush green basmati paddy crop in farm field under morning sunlight rural Haryana India" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWOj9aXg5osLAZzICgwsMyR9QJ5a9kNHfBmfHrbB3mBGbGtT_d1apDEoGFXB9JTr_UXcJWiuK4vPy9Q5HiP9_U2pZUHmeirvUHuTggXnFdsbYOC-bIcXf7tRLNVzaSNwP2a-YtOOHdvjfQW2UxiLNlnfoFevshooA3KLG2G6vsT_c0eY5tPOC9wt3BQUWu9hx0KUUYdCsJZtiYJW2JVGVMB0x78POALVE_3L1mj5xHKfdhp9R9_k3p"/>
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-forest-deep font-bold">Basmati Paddy (धान 1121)</span>
<span className="font-body-sm text-body-sm text-text-secondary">80 Quintal • Maturing (Harvest in 18 days)</span>
<span className="font-label-stamp text-label-stamp text-text-muted mt-1">Karnal Zone 4 Farm</span>
</div>
</div>
<button className="h-10 px-md rounded-lg bg-surface-card text-forest-deep hover:bg-forest-deep hover:text-on-primary transition-colors font-label-md text-label-md shrink-0 shadow-sm" type="button">
            Update Status
          </button>
</div>
</div>
</div>
</div>
</div></main>
  );
}
