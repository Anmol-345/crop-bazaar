"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

export default function farmerprofilePage() {
  return (
    <>
      <div className="flex flex-col w-full">
<div className="max-w-[75rem] mx-auto w-full px-gutter-mobile md:px-gutter-desktop py-lg flex flex-col gap-lg">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-md">
<div className="flex flex-col gap-base">
<nav className="flex items-center gap-xs font-label-stamp text-label-stamp text-text-muted">
<a className="hover:text-primary transition-colors" data-path="dashboard" href="#">Home</a>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="text-text-primary font-semibold">My Profile</span>
</nav>
<div className="flex flex-col">
<h1 className="font-headline-lg text-headline-lg text-forest-deep tracking-tight">My Profile</h1>
<p className="font-body-md text-body-md text-text-muted">Manage your personal and farming information.</p>
</div>
</div>
<div className="flex items-center gap-sm">
<button className="flex items-center justify-center gap-xs px-lg py-xs bg-surface-card hover:bg-surface-subtle text-forest-deep font-label-lg text-label-lg rounded-lg shadow-sm transition-all min-h-[48px] active:scale-[0.98]" id="editProfileBtn" type="button">
<span className="material-symbols-outlined text-[18px] text-primary">edit</span>
<span>Edit Profile</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-lg items-start">

<div className="lg:col-span-8 flex flex-col gap-lg">

<div className="bg-surface-card rounded-xl p-md md:p-lg shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-lg relative overflow-hidden">
<div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-status-serving-bg/40 blur-2xl pointer-events-none"></div>

<div className="relative shrink-0">
<img className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl object-cover shadow-sm bg-surface-subtle" data-alt="Warm portrait of smiling senior Indian farmer Ramesh Singh wearing traditional saffron and white pagri turban standing in vibrant green sunlit agricultural fields during morning harvest" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsCCxYv6bEI-7WhMPS1dNIAHb9w878XeS8SR4l4juqq0nYQfVzsiRBOLb6HjR3YVMtX4ldDX6eTJ4pf2w6n7IpkugKeFM9J0-CgUoTa_EhVvkyj3wIMzjPrSCAN6vvzqQhQt1t30C3o54FHKVNfQ3ykr3WzS1YjbT2u2wvGrOwjGk0p67zKEbphKqwTPSzMxkhzZpJs-i1qv-LwCVtoYFeWewNzbiObASfI4iL9jxGXe0uRlhKr45W"/>
<span className="absolute -bottom-1.5 -right-1.5 bg-status-serving text-on-primary rounded-full p-0.5 flex items-center justify-center shadow-sm" title="e-KYC Verified">
<span className="material-symbols-outlined text-[18px]" >verified</span>
</span>
</div>

<div className="flex flex-col gap-xs flex-1 min-w-0">
<div className="flex flex-wrap items-center gap-xs">
<span className="px-xs py-base bg-status-serving-bg text-status-serving font-label-stamp text-label-stamp font-bold rounded-full uppercase tracking-wider flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-status-serving"></span>
                Verified Kisan
              </span>
<span className="px-xs py-base bg-surface-subtle text-text-muted font-label-stamp text-label-stamp rounded-full">
                e-KYC Completed
              </span>
</div>
<div className="flex flex-wrap items-baseline gap-xs">
<h2 className="font-headline-md text-headline-md text-forest-deep">Ramesh Singh</h2>
<span className="font-title-md text-title-md text-text-muted">(रमेश सिंह)</span>
</div>
<div className="flex flex-wrap items-center gap-x-md gap-y-1 font-body-sm text-body-sm text-text-secondary">
<span className="flex items-center gap-1 font-semibold text-primary">
<span className="material-symbols-outlined text-[16px]">tag</span>
                #KISAN-HR-984210
              </span>
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-metric-positive" >check_circle</span>
                +91 98120 45678
              </span>
</div>
<div className="flex flex-wrap items-center gap-x-md gap-y-1 font-label-stamp text-label-stamp text-text-muted pt-base">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[15px]">location_on</span>
                Village Rai, Sonipat, Haryana (PIN: 131029)
              </span>
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[15px]">calendar_month</span>
                Member since Kharif 2022
              </span>
</div>
</div>
</div>

<div className="bg-surface-card rounded-xl p-md md:p-lg shadow-sm flex flex-col gap-md">
<div className="flex items-center justify-between pb-xs">
<div className="flex items-center gap-xs">
<span className="w-2 h-4 rounded-full bg-primary"></span>
<h3 className="font-title-md text-title-md text-forest-deep">Personal Information</h3>
</div>
<span className="font-label-stamp text-label-stamp text-status-serving bg-status-serving-bg px-xs py-base rounded-full font-bold">
              UIDAI Linked
            </span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
<div className="bg-surface-subtle/70 p-sm rounded-lg flex flex-col gap-base">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase">Full Name</span>
<span className="font-label-lg text-label-lg text-text-primary">Ramesh Singh</span>
</div>
<div className="bg-surface-subtle/70 p-sm rounded-lg flex flex-col gap-base">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase">Mobile Number</span>
<div className="flex items-center gap-xs">
<span className="font-label-lg text-label-lg text-text-primary">+91 98120 45678</span>
<span className="material-symbols-outlined text-[16px] text-metric-positive" >check_circle</span>
</div>
</div>
<div className="bg-surface-subtle/70 p-sm rounded-lg flex flex-col gap-base">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase">Aadhaar / e-KYC</span>
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg text-text-primary font-mono tracking-wider">•••• •••• 4912</span>
<span className="font-label-stamp text-label-stamp text-status-serving font-bold">Verified</span>
</div>
</div>
<div className="bg-surface-subtle/70 p-sm rounded-lg flex flex-col gap-base">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase">State &amp; District</span>
<span className="font-label-lg text-label-lg text-text-primary">Haryana, Sonipat</span>
</div>
<div className="bg-surface-subtle/70 p-sm rounded-lg flex flex-col gap-base">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase">Tehsil &amp; Village</span>
<span className="font-label-lg text-label-lg text-text-primary">Rai, Village Rai</span>
</div>
<div className="bg-surface-subtle/70 p-sm rounded-lg flex flex-col gap-base">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase">Bank Account (DBT Linked)</span>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-text-primary">State Bank of India</span>
<span className="font-body-sm text-body-sm text-text-muted font-mono">A/C •••• 4902 • IFSC: SBIN0001234</span>
</div>
</div>
</div>
</div>

<div className="bg-surface-card rounded-xl p-md md:p-lg shadow-sm flex flex-col gap-md">
<div className="flex items-center justify-between pb-xs">
<div className="flex items-center gap-xs">
<span className="w-2 h-4 rounded-full bg-primary"></span>
<div className="flex items-center gap-xs">
<h3 className="font-title-md text-title-md text-forest-deep">Farming Information</h3>
<span className="font-body-sm text-body-sm text-text-muted">(कृषि विवरण)</span>
</div>
</div>
<span className="font-label-stamp text-label-stamp text-text-muted">Season 2024–25</span>
</div>

<div className="flex flex-col gap-xs">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase tracking-wider">Registered Crops (पंजीकृत फसलें)</span>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-xs">

<div className="bg-surface-container-low p-sm rounded-lg flex flex-col justify-between gap-sm transition-transform hover:-translate-y-0.5">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-title-md text-title-md text-forest-deep">Wheat</span>
<span className="font-body-sm text-body-sm text-text-muted">गेहूँ • Sharbati</span>
</div>
<span className="px-xs py-base bg-status-serving-bg text-status-serving font-label-stamp text-label-stamp font-bold rounded-full">
                    Active
                  </span>
</div>
<div className="flex items-center justify-between font-label-stamp text-label-stamp text-text-secondary">
<span>Rabi Season</span>
<span className="font-semibold text-primary">7.5 Acres</span>
</div>
</div>

<div className="bg-surface-container-low p-sm rounded-lg flex flex-col justify-between gap-sm transition-transform hover:-translate-y-0.5">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-title-md text-title-md text-forest-deep">Mustard</span>
<span className="font-body-sm text-body-sm text-text-muted">सरसों • Pusa Bold</span>
</div>
<span className="px-xs py-base bg-status-serving-bg text-status-serving font-label-stamp text-label-stamp font-bold rounded-full">
                    Active
                  </span>
</div>
<div className="flex items-center justify-between font-label-stamp text-label-stamp text-text-secondary">
<span>Rabi Season</span>
<span className="font-semibold text-primary">5.0 Acres</span>
</div>
</div>

<div className="bg-surface-subtle p-sm rounded-lg flex flex-col justify-between gap-sm opacity-80">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-title-md text-title-md text-text-primary">Paddy</span>
<span className="font-body-sm text-body-sm text-text-muted">धान • Basmati 1121</span>
</div>
<span className="px-xs py-base bg-status-no-show-bg text-status-no-show font-label-stamp text-label-stamp font-bold rounded-full">
                    Harvested
                  </span>
</div>
<div className="flex items-center justify-between font-label-stamp text-label-stamp text-text-muted">
<span>Kharif Season</span>
<span className="font-semibold">Cycle Closed</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-sm pt-xs">
<div className="bg-surface-subtle/70 p-sm rounded-lg flex flex-col gap-base">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase">Total Cultivated Area</span>
<div className="flex items-baseline gap-xs">
<span className="font-metric-large text-metric-large text-forest-deep">12.5</span>
<span className="font-title-md text-title-md text-text-secondary">Acres</span>
</div>
<div className="flex items-center gap-sm font-body-sm text-body-sm text-text-muted pt-base">
<span>Own: <strong className="text-text-primary">8.5 Acres</strong></span>
<span>•</span>
<span>Leased: <strong className="text-text-primary">4.0 Acres</strong></span>
</div>
</div>
<div className="bg-surface-subtle/70 p-sm rounded-lg flex flex-col gap-base">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase">Primary Soil Type</span>
<div className="flex items-baseline gap-xs">
<span className="font-title-md text-title-md text-forest-deep">Alluvial Loam</span>
<span className="font-body-sm text-body-sm text-text-muted">(उपजाऊ दोमट)</span>
</div>
<div className="flex items-center gap-xs text-metric-positive font-label-stamp text-label-stamp pt-base">
<span className="material-symbols-outlined text-[16px]">eco</span>
<span>High Organic Carbon • Soil Health Card Valid</span>
</div>
</div>
</div>

<div className="flex flex-col gap-xs pt-xs">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase tracking-wider">Associated Procurement Centres (मंडी केंद्र)</span>
<div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-sm p-sm bg-surface-subtle rounded-lg">
<div className="flex items-center gap-sm">
<div className="w-10 h-10 rounded-lg bg-status-serving-bg flex items-center justify-center text-status-serving shrink-0">
<span className="material-symbols-outlined text-[20px]">storefront</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-xs">
<span className="font-label-lg text-label-lg text-forest-deep">Karnal Central Yard</span>
<span className="px-xs py-base bg-status-serving-bg text-status-serving font-label-stamp text-label-stamp font-bold rounded">Primary</span>
</div>
<span className="font-body-sm text-body-sm text-text-muted">Gate No. 2 • Dedicated Wheat &amp; Oilseeds Wing</span>
</div>
</div>
<div className="flex items-center sm:justify-end gap-xs font-label-md text-label-md text-primary font-bold">
<span className="material-symbols-outlined text-[18px]">near_me</span>
<span>4.2 km distance</span>
</div>
</div>
<div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-sm p-sm bg-surface-subtle rounded-lg">
<div className="flex items-center gap-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-text-secondary shrink-0">
<span className="material-symbols-outlined text-[20px]">warehouse</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-xs">
<span className="font-label-lg text-label-lg text-forest-deep">Taraori Food Corp Silo</span>
<span className="px-xs py-base bg-surface-subtle text-text-muted font-label-stamp text-label-stamp font-semibold rounded">Secondary</span>
</div>
<span className="font-body-sm text-body-sm text-text-muted">Buffer Storage &amp; Automated Moisture Lab</span>
</div>
</div>
<div className="flex items-center sm:justify-end gap-xs font-label-md text-label-md text-text-secondary">
<span className="material-symbols-outlined text-[18px]">near_me</span>
<span>8.8 km distance</span>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col gap-lg">

<div className="bg-surface-card rounded-xl p-md md:p-lg shadow-sm flex flex-col gap-md">
<div className="flex items-center justify-between pb-xs">
<div className="flex items-center gap-xs">
<span className="w-2 h-4 rounded-full bg-secondary"></span>
<h3 className="font-title-md text-title-md text-forest-deep">Account Preferences</h3>
</div>
<span className="material-symbols-outlined text-[20px] text-text-muted">tune</span>
</div>
<div className="flex flex-col gap-sm">

<div className="p-sm bg-surface-subtle rounded-lg flex flex-col gap-base">
<div className="flex items-center justify-between">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase">Preferred Language</span>
<span className="font-label-stamp text-label-stamp text-primary font-bold">Active</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-xs">
<span className="material-symbols-outlined text-[18px] text-primary">translate</span>
<span className="font-label-lg text-label-lg text-text-primary">English &amp; हिन्दी</span>
</div>
<span className="font-body-sm text-body-sm text-text-muted">Hinglish Mode</span>
</div>
</div>

<div className="p-sm bg-surface-subtle rounded-lg flex flex-col gap-base">
<div className="flex items-center justify-between">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase">SMS &amp; WhatsApp Alerts</span>
<span className="px-xs py-base bg-status-serving-bg text-status-serving font-label-stamp text-label-stamp font-bold rounded-full">Enabled</span>
</div>
<p className="font-body-sm text-body-sm text-text-secondary leading-snug">
                Receives automated Mandi slot reminders, live queue tokens, and daily minimum support price changes.
              </p>
</div>

<div className="p-sm bg-surface-subtle rounded-lg flex flex-col gap-base">
<div className="flex items-center justify-between">
<div className="flex items-center gap-xs">
<span className="material-symbols-outlined text-[18px] text-primary">mic</span>
<span className="font-label-stamp text-label-stamp text-text-muted uppercase">Awaaz Assistant</span>
</div>
<span className="px-xs py-base bg-status-serving-bg text-status-serving font-label-stamp text-label-stamp font-bold rounded-full">Enabled</span>
</div>
<p className="font-body-sm text-body-sm text-text-secondary leading-snug">
                Bilingual voice query listening active for live market prices and slot status.
              </p>
</div>

<div className="p-sm bg-surface-subtle rounded-lg flex flex-col gap-base">
<div className="flex items-center justify-between">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase">Display Mode</span>
<span className="font-label-stamp text-label-stamp text-text-muted font-semibold">Sunlight Optimized</span>
</div>
<div className="flex items-center gap-xs text-text-primary font-label-lg text-label-lg">
<span className="material-symbols-outlined text-[18px] text-status-waiting">light_mode</span>
<span>Standard Light (Day Mode)</span>
</div>
</div>
</div>
</div>

<div className="bg-surface-card rounded-xl p-md md:p-lg shadow-sm flex flex-col gap-md">
<div className="flex items-center justify-between pb-xs">
<div className="flex items-center gap-xs">
<span className="w-2 h-4 rounded-full bg-status-completed"></span>
<h3 className="font-title-md text-title-md text-forest-deep">Recent Activity</h3>
</div>
<span className="px-xs py-base bg-status-completed-bg text-status-completed font-label-stamp text-label-stamp font-bold rounded-full">Verified</span>
</div>
<div className="flex flex-col gap-sm">

<div className="p-sm bg-surface-container-low rounded-lg flex flex-col gap-xs">
<div className="flex items-center justify-between">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase">Last Procurement</span>
<span className="px-xs py-base bg-status-completed-bg text-status-completed font-label-stamp text-label-stamp font-bold rounded-full">Completed</span>
</div>
<span className="font-label-lg text-label-lg text-forest-deep">45 Qtl Sharbati Wheat</span>
<span className="font-body-sm text-body-sm text-text-muted">Oct 14, 2024 • Karnal Yard Gate 2</span>
</div>

<div className="p-sm bg-surface-subtle rounded-lg flex flex-col gap-base">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase">Total Disbursed via DBT</span>
<div className="flex items-baseline gap-xs">
<span className="font-metric-large text-metric-large text-metric-positive">₹1,20,765</span>
<span className="font-label-stamp text-label-stamp text-text-muted">INR</span>
</div>
<span className="font-body-sm text-body-sm text-text-secondary flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-metric-positive">check_circle</span>
                Directly Credited to SBI (•••• 4902)
              </span>
</div>

<div className="p-sm bg-surface-subtle rounded-lg flex flex-col gap-base">
<div className="flex items-center justify-between">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase">Active Queue Token</span>
<span className="px-xs py-base bg-status-waiting-bg text-status-waiting font-label-stamp text-label-stamp font-bold rounded-full">Slots Open</span>
</div>
<p className="font-body-sm text-body-sm text-text-secondary">
                No active token for today. Next procurement slot is open for booking at Karnal Yard.
              </p>
</div>
</div>

<a className="w-full flex items-center justify-center gap-xs py-sm px-md bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg rounded-lg shadow-sm transition-all min-h-[48px] active:scale-[0.98]" data-path="payments" href="#">
<span>View All Transactions &amp; Receipts</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
</div>

<div className="bg-forest-deep text-on-primary p-md rounded-xl shadow-sm flex items-center justify-between gap-sm">
<div className="flex items-center gap-sm">
<div className="w-10 h-10 rounded-full bg-surface-card/10 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[20px]">support_agent</span>
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg">Kisan Helpline 24x7</span>
<span className="font-body-sm text-body-sm text-inverse-on-surface/80">Toll Free: 1800-180-1551</span>
</div>
</div>
<a className="p-xs bg-surface-card/10 hover:bg-surface-card/20 rounded-lg text-on-primary transition-colors" data-path="help-and-support" href="#">
<span className="material-symbols-outlined text-[20px]">call</span>
</a>
</div>
</div>
</div>
</div>

<button aria-label="Awaaz Voice Assistant" className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-[#064E3B] text-on-primary flex items-center justify-center shadow-[0_12px_24px_-4px_rgba(6,78,59,0.28)] hover:scale-105 active:scale-95 transition-transform z-40 group" id="voiceAssistantFab" type="button">
<span className="material-symbols-outlined text-[26px] group-hover:scale-110 transition-transform">mic</span>
<span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-status-serving animate-ping"></span>
<span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-status-serving"></span>
</button>
</div>

    </>
  );
}
