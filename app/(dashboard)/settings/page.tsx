"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

export default function settingsPage() {
  return (
    <>
      
<div className="max-w-[75rem] mx-auto w-full px-gutter-mobile md:px-gutter-desktop py-lg space-y-xl">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-md pb-xs">
<div className="space-y-base">
<div className="flex items-center gap-xs">
<span className="px-xs py-base rounded-full bg-surface-container font-label-stamp text-label-stamp text-text-secondary uppercase tracking-wider">Kisan Account ID: KB-84092</span>
<span className="w-1.5 h-1.5 rounded-full bg-status-serving"></span>
<span className="font-label-stamp text-label-stamp text-status-serving font-bold">Cloud Synced</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-forest-deep tracking-tight">Settings (सेटिंग्स)</h1>
<p className="font-body-md text-body-md text-text-muted max-w-2xl">
          Manage your procurement notifications, voice assistance dialect, regional mandi priorities, and biometric access controls.
        </p>
</div>

<div className="flex items-center gap-sm">
<div className="hidden items-center gap-xs px-sm py-xs bg-status-serving-bg text-status-serving rounded-lg shadow-sm" id="saveToast">
<span className="material-symbols-outlined text-[18px]">check_circle</span>
<span className="font-label-md text-label-md font-semibold">Saved Locally</span>
</div>
<button className="h-touch-min px-md bg-surface-card hover:bg-surface-subtle text-text-primary rounded-xl font-label-lg text-label-lg shadow-sm flex items-center gap-xs transition-all active:scale-95" onClick={() => {}} type="button">
<span className="material-symbols-outlined text-[18px] text-text-muted">sync</span>
<span>Sync Now</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-lg">

<div className="lg:col-span-7 flex flex-col gap-lg">

<section className="bg-surface-card rounded-xl p-lg shadow-sm space-y-md">
<div className="flex items-start justify-between gap-md">
<div className="flex items-center gap-sm">
<div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]">translate</span>
</div>
<div>
<h2 className="font-title-md text-title-md text-text-primary">Language Preferences (भाषा चयन)</h2>
<p className="font-body-sm text-body-sm text-text-muted">Select your default operational script for receipts, SMS, and portal display.</p>
</div>
</div>
<span className="px-xs py-base bg-surface-container rounded-full font-label-stamp text-label-stamp text-text-secondary font-semibold uppercase">Mandatory</span>
</div>

<div aria-label="Language Options" className="grid grid-cols-1 sm:grid-cols-2 gap-sm pt-xs" role="radiogroup">

<label className="relative flex items-center justify-between p-md rounded-xl bg-surface-container-low cursor-pointer shadow-sm hover:bg-surface-container transition-colors group">
<input  className="sr-only peer" name="app_language" onChange={() => {}} type="radio" value="hinglish"/>
<div className="flex items-center gap-sm">
<div className="w-5 h-5 rounded-full bg-surface-card flex items-center justify-center peer-checked:bg-primary transition-colors">
<div className="w-2.5 h-2.5 rounded-full bg-primary peer-checked:bg-on-primary"></div>
</div>
<div>
<div className="font-label-lg text-label-lg text-text-primary group-hover:text-primary transition-colors">English &amp; हिन्दी</div>
<div className="font-body-sm text-body-sm text-text-muted">Hinglish • Recommended</div>
</div>
</div>
<span className="px-xs py-base rounded-full bg-surface-card text-primary font-label-stamp text-label-stamp font-bold shadow-sm">Default</span>
</label>

<label className="relative flex items-center justify-between p-md rounded-xl bg-surface-subtle cursor-pointer shadow-sm hover:bg-surface-container-low transition-colors group">
<input className="sr-only peer" name="app_language" onChange={() => {}} type="radio" value="hindi"/>
<div className="flex items-center gap-sm">
<div className="w-5 h-5 rounded-full bg-surface-card flex items-center justify-center">
<div className="w-2.5 h-2.5 rounded-full bg-transparent"></div>
</div>
<div>
<div className="font-label-lg text-label-lg text-text-primary group-hover:text-primary transition-colors">हिन्दी</div>
<div className="font-body-sm text-body-sm text-text-muted">Hindi (शुद्ध हिन्दी)</div>
</div>
</div>
<span className="font-label-stamp text-label-stamp text-text-muted">क ख ग</span>
</label>

<label className="relative flex items-center justify-between p-md rounded-xl bg-surface-subtle cursor-pointer shadow-sm hover:bg-surface-container-low transition-colors group">
<input className="sr-only peer" name="app_language" onChange={() => {}} type="radio" value="english"/>
<div className="flex items-center gap-sm">
<div className="w-5 h-5 rounded-full bg-surface-card flex items-center justify-center">
<div className="w-2.5 h-2.5 rounded-full bg-transparent"></div>
</div>
<div>
<div className="font-label-lg text-label-lg text-text-primary group-hover:text-primary transition-colors">English</div>
<div className="font-body-sm text-body-sm text-text-muted">Official procurement format</div>
</div>
</div>
<span className="font-label-stamp text-label-stamp text-text-muted">ABC</span>
</label>

<label className="relative flex items-center justify-between p-md rounded-xl bg-surface-subtle cursor-pointer shadow-sm hover:bg-surface-container-low transition-colors group">
<input className="sr-only peer" name="app_language" onChange={() => {}} type="radio" value="punjabi"/>
<div className="flex items-center gap-sm">
<div className="w-5 h-5 rounded-full bg-surface-card flex items-center justify-center">
<div className="w-2.5 h-2.5 rounded-full bg-transparent"></div>
</div>
<div>
<div className="font-label-lg text-label-lg text-text-primary group-hover:text-primary transition-colors">ਪੰਜਾਬੀ</div>
<div className="font-body-sm text-body-sm text-text-muted">Gurmukhi (ਪੰਜਾਬੀ ਮਾਂ ਬੋਲੀ)</div>
</div>
</div>
<span className="font-label-stamp text-label-stamp text-text-muted">ੳ ਅ ੲ</span>
</label>
</div>
<div className="flex items-start gap-xs p-sm rounded-xl bg-surface-container-low text-text-secondary">
<span className="material-symbols-outlined text-[18px] text-primary shrink-0 mt-0.5">info</span>
<p className="font-body-sm text-body-sm">
              Note: Changes language across all gate passes, weighbridge dispatch slips, DBT direct bank credit SMS, and Mandi voice announcements.
            </p>
</div>
</section>

<section className="bg-surface-card rounded-xl p-lg shadow-sm space-y-md">
<div className="flex items-start justify-between gap-md">
<div className="flex items-center gap-sm">
<div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]">notifications_active</span>
</div>
<div>
<h2 className="font-title-md text-title-md text-text-primary">Notification Channels (सूचना प्राथमिकताएं)</h2>
<p className="font-body-sm text-body-sm text-text-muted">Receive verified procurement alerts directly to your mobile handset.</p>
</div>
</div>
<span className="px-xs py-base bg-status-serving-bg text-status-serving rounded-full font-label-stamp text-label-stamp font-bold">All 3 Live</span>
</div>
<div className="space-y-sm pt-xs">

<div className="flex items-center justify-between p-md rounded-xl bg-surface-subtle hover:bg-surface-container-low transition-colors">
<div className="flex items-start gap-md min-w-0 pr-sm">
<div className="w-9 h-9 rounded-lg bg-surface-card flex items-center justify-center text-text-secondary shrink-0 shadow-sm">
<span className="material-symbols-outlined text-[20px]">sms</span>
</div>
<div className="min-w-0">
<div className="flex items-center gap-xs flex-wrap">
<span className="font-label-lg text-label-lg text-text-primary">SMS Procurement Dispatches</span>
<span className="px-xs py-base rounded-full bg-status-confirmed-bg text-status-confirmed font-label-stamp text-label-stamp font-bold">+91 98122 ••••5</span>
</div>
<p className="font-body-sm text-body-sm text-text-muted truncate">Critical weighbridge tokens, gate entry approvals &amp; MSP disbursal confirmations.</p>
</div>
</div>
<button aria-checked="true" className="w-12 h-7 bg-primary rounded-full relative p-0.5 transition-colors focus:outline-none shrink-0 cursor-pointer" onClick={() => {}} role="switch" type="button">
<span className="block w-6 h-6 bg-surface-card rounded-full shadow-md transform translate-x-5 transition-transform"></span>
</button>
</div>

<div className="flex items-center justify-between p-md rounded-xl bg-surface-subtle hover:bg-surface-container-low transition-colors">
<div className="flex items-start gap-md min-w-0 pr-sm">
<div className="w-9 h-9 rounded-lg bg-surface-card flex items-center justify-center text-metric-positive shrink-0 shadow-sm">
<span className="material-symbols-outlined text-[20px]">chat</span>
</div>
<div className="min-w-0">
<div className="flex items-center gap-xs flex-wrap">
<span className="font-label-lg text-label-lg text-text-primary">WhatsApp Digital Receipts</span>
<span className="px-xs py-base rounded-full bg-status-serving-bg text-status-serving font-label-stamp text-label-stamp font-bold">Fastest</span>
</div>
<p className="font-body-sm text-body-sm text-text-muted truncate">Downloadable PDF e-gate passes, quality lab grade reports &amp; payment vouchers.</p>
</div>
</div>
<button aria-checked="true" className="w-12 h-7 bg-primary rounded-full relative p-0.5 transition-colors focus:outline-none shrink-0 cursor-pointer" onClick={() => {}} role="switch" type="button">
<span className="block w-6 h-6 bg-surface-card rounded-full shadow-md transform translate-x-5 transition-transform"></span>
</button>
</div>

<div className="flex items-center justify-between p-md rounded-xl bg-surface-subtle hover:bg-surface-container-low transition-colors">
<div className="flex items-start gap-md min-w-0 pr-sm">
<div className="w-9 h-9 rounded-lg bg-surface-card flex items-center justify-center text-status-waiting shrink-0 shadow-sm">
<span className="material-symbols-outlined text-[20px]">cloud_alert</span>
</div>
<div className="min-w-0">
<div className="flex items-center gap-xs flex-wrap">
<span className="font-label-lg text-label-lg text-text-primary">Weather &amp; Mandi Transit Holds</span>
<span className="px-xs py-base rounded-full bg-status-waiting-bg text-status-waiting font-label-stamp text-label-stamp font-bold">Field Alert</span>
</div>
<p className="font-body-sm text-body-sm text-text-muted truncate">Pre-departure alerts for rain on yard shed, weighbridge congestion &amp; road route holds.</p>
</div>
</div>
<button aria-checked="true" className="w-12 h-7 bg-primary rounded-full relative p-0.5 transition-colors focus:outline-none shrink-0 cursor-pointer" onClick={() => {}} role="switch" type="button">
<span className="block w-6 h-6 bg-surface-card rounded-full shadow-md transform translate-x-5 transition-transform"></span>
</button>
</div>
</div>
</section>

<section className="bg-surface-card rounded-xl p-lg shadow-sm space-y-md">
<div className="flex items-start justify-between gap-md">
<div className="flex items-center gap-sm">
<div className="w-10 h-10 rounded-xl bg-status-serving-bg flex items-center justify-center text-status-serving">
<span className="material-symbols-outlined text-[24px]">mic</span>
</div>
<div>
<h2 className="font-title-md text-title-md text-text-primary">Awaaz Voice Assistant (आवाज़ सहायक)</h2>
<p className="font-body-sm text-body-sm text-text-muted">High-ambient noise hands-free tractor &amp; yard navigation commands.</p>
</div>
</div>
<div className="flex items-center gap-base px-xs py-base rounded-full bg-status-serving-bg text-status-serving font-label-stamp text-label-stamp font-bold uppercase">
<span className="w-2 h-2 rounded-full bg-status-serving animate-pulse"></span>
              Ready
            </div>
</div>

<div className="space-y-md pt-xs">
<div className="flex items-center justify-between p-md rounded-xl bg-surface-subtle">
<div>
<div className="font-label-lg text-label-lg text-text-primary">Voice Assistant Listening (आवाज़ सक्रियता)</div>
<div className="font-body-sm text-body-sm text-text-muted">Allow "Kisan Bolo" trigger phrase to check live Mandi rates and queue tokens.</div>
</div>
<button aria-checked="true" className="w-12 h-7 bg-primary rounded-full relative p-0.5 transition-colors focus:outline-none shrink-0 cursor-pointer" onClick={() => {}} role="switch" type="button">
<span className="block w-6 h-6 bg-surface-card rounded-full shadow-md transform translate-x-5 transition-transform"></span>
</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-md">

<div className="space-y-xs">
<label className="font-label-md text-label-md text-text-secondary flex items-center gap-base">
<span>Preferred Voice Dialect (बोली प्राथमिकता)</span>
</label>
<div className="relative">
<select className="w-full h-touch-min px-md bg-surface-subtle rounded-xl font-body-md text-body-md text-text-primary outline-none focus:bg-surface-card cursor-pointer transition-all appearance-none pr-touch-min" onChange={() => {}}>
<option >Standard Hindi / Hinglish (हरियाणा/उत्तर प्रदेश)</option>
<option>Haryanvi Hindi (देसी हरियाणवी)</option>
<option>Malwa Punjabi (ਮਾਲਵਾ ਪੰਜਾਬੀ)</option>
<option>Bhojpuri Hindi (भोजपुरी)</option>
<option>Indian English (Clear Agri Tech)</option>
</select>
<div className="absolute inset-y-0 right-0 pr-md flex items-center pointer-events-none text-text-muted">
<span className="material-symbols-outlined text-[20px]">expand_more</span>
</div>
</div>
</div>

<div className="space-y-xs">
<label className="font-label-md text-label-md text-text-secondary flex items-center gap-base">
<span>Speech Confirmation Speed (बोलने की गति)</span>
</label>
<div className="relative">
<select className="w-full h-touch-min px-md bg-surface-subtle rounded-xl font-body-md text-body-md text-text-primary outline-none focus:bg-surface-card cursor-pointer transition-all appearance-none pr-touch-min" onChange={() => {}}>
<option>Slow - Field Loudspeaker (धीमी गति - शोर के लिए)</option>
<option >Normal (सामान्य - 1.0x Balanced)</option>
<option>Fast (तेज़ - 1.25x Quick Summaries)</option>
</select>
<div className="absolute inset-y-0 right-0 pr-md flex items-center pointer-events-none text-text-muted">
<span className="material-symbols-outlined text-[20px]">speed</span>
</div>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="lg:col-span-5 flex flex-col gap-lg">

<section className="bg-surface-card rounded-xl p-lg shadow-sm space-y-md">
<div className="flex items-start justify-between gap-md">
<div className="flex items-center gap-sm">
<div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]">location_on</span>
</div>
<div>
<h2 className="font-title-md text-title-md text-text-primary">Location &amp; Mandi Center</h2>
<p className="font-body-sm text-body-sm text-text-muted">स्थान व प्राथमिकता मंडी केंद्र</p>
</div>
</div>
<button className="text-primary font-label-md text-label-md hover:underline" type="button">Change</button>
</div>

<div className="p-md rounded-xl bg-surface-subtle space-y-sm">
<div className="flex items-center justify-between text-text-secondary">
<span className="font-label-stamp text-label-stamp uppercase tracking-wider text-text-muted">Registered Primary Village</span>
<span className="font-label-stamp text-label-stamp text-status-serving font-bold bg-status-serving-bg px-xs py-0.5 rounded-full">GPS Tagged</span>
</div>
<div className="flex items-start gap-xs">
<span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">home_pin</span>
<div>
<p className="font-label-lg text-label-lg text-text-primary leading-snug">Village Rai, Tehsil Sonipat, Haryana</p>
<p className="font-body-sm text-body-sm text-text-muted">Postal Code: 131029 • Land Parcel Khata: 412/98</p>
</div>
</div>
</div>

<div className="p-md rounded-xl bg-surface-container-low space-y-xs">
<div className="flex justify-between items-center">
<span className="font-label-md text-label-md text-text-primary">Mandi Discovery Radius</span>
<span className="font-metric-medium text-metric-medium text-primary font-bold" id="radiusVal">25 km</span>
</div>
<input className="w-full h-2 bg-border-muted rounded-lg appearance-none cursor-pointer accent-primary" max="80" min="10" onInput={() => {}} step="5" type="range" value="25"/>
<div className="flex justify-between font-label-stamp text-label-stamp text-text-muted">
<span>10 km (Local Yard)</span>
<span>80 km (Inter-District)</span>
</div>
</div>

<div className="p-md rounded-xl bg-surface-subtle flex items-start justify-between gap-sm">
<div className="flex items-start gap-sm min-w-0">
<div className="w-8 h-8 rounded-lg bg-surface-card flex items-center justify-center text-primary shrink-0 shadow-sm">
<span className="material-symbols-outlined text-[18px]">warehouse</span>
</div>
<div className="min-w-0">
<span className="font-label-stamp text-label-stamp text-status-serving font-bold">PRIMARY YARD DETECTED</span>
<h4 className="font-label-lg text-label-lg text-text-primary truncate">Karnal Central Yard (Gate 2)</h4>
<p className="font-body-sm text-body-sm text-text-muted truncate">Weighbridge slot wait time: ~18 mins</p>
</div>
</div>
<span className="px-xs py-base bg-surface-card font-label-stamp text-label-stamp text-text-primary rounded shadow-sm shrink-0">14.2 km away</span>
</div>
</section>

<section className="bg-surface-card rounded-xl p-lg shadow-sm space-y-md">
<div className="flex items-start justify-between gap-md">
<div className="flex items-center gap-sm">
<div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]">verified_user</span>
</div>
<div>
<h2 className="font-title-md text-title-md text-text-primary">Privacy &amp; Security</h2>
<p className="font-body-sm text-body-sm text-text-muted">गोपनीयता और आधार सुरक्षा</p>
</div>
</div>
<span className="material-symbols-outlined text-status-serving text-[20px]">lock</span>
</div>

<div className="p-md rounded-xl bg-surface-container-low flex items-center justify-between gap-sm">
<div className="flex items-center gap-sm">
<div className="w-10 h-10 rounded-xl bg-status-serving-bg flex items-center justify-center text-status-serving shrink-0">
<span className="material-symbols-outlined text-[20px]">fingerprint</span>
</div>
<div>
<div className="flex items-center gap-xs">
<span className="font-label-lg text-label-lg text-text-primary">Aadhaar Biometric e-KYC</span>
<span className="material-symbols-outlined text-status-serving text-[16px]">check_circle</span>
</div>
<div className="font-body-sm text-body-sm text-text-muted font-mono">UIDAI Linked: •••• •••• 4912</div>
</div>
</div>
<span className="px-xs py-base rounded-full bg-status-serving-bg text-status-serving font-label-stamp text-label-stamp font-bold">Verified</span>
</div>

<div className="space-y-xs pt-xs">
<div className="flex justify-between items-center py-xs">
<div>
<span className="font-label-md text-label-md text-text-primary block">Session Timeout</span>
<span className="font-body-sm text-body-sm text-text-muted">Auto-logout duration on this device</span>
</div>
<span className="px-sm py-xs bg-surface-subtle rounded-lg font-label-md text-label-md text-text-secondary">30 Days (Field Safe)</span>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-sm pt-xs">
<button className="h-touch-min px-sm bg-surface-subtle hover:bg-surface-container text-text-primary rounded-xl font-label-md text-label-md flex items-center justify-center gap-xs transition-colors shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px] text-text-muted">pin</span>
<span>Change MPIN (एमपिन बदलें)</span>
</button>
<button className="h-touch-min px-sm bg-surface-subtle hover:bg-surface-container text-text-primary rounded-xl font-label-md text-label-md flex items-center justify-center gap-xs transition-colors shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px] text-text-muted">download</span>
<span>Download Data (डाटा)</span>
</button>
</div>
</section>

<section className="bg-surface-card rounded-xl p-lg shadow-sm space-y-md">
<div className="flex items-center gap-sm">
<div className="w-10 h-10 rounded-xl bg-status-weather-hold-bg flex items-center justify-center text-metric-negative">
<span className="material-symbols-outlined text-[22px]">logout</span>
</div>
<div>
<h2 className="font-title-md text-title-md text-text-primary">Account Sessions (खाता सत्र)</h2>
<p className="font-body-sm text-body-sm text-text-muted">Sign out from mandi kiosks and mobile devices</p>
</div>
</div>
<div className="p-md rounded-xl bg-surface-subtle space-y-xs">
<div className="flex items-center justify-between text-text-secondary">
<span className="font-label-md text-label-md text-text-primary">Active Mandi Kiosk Sessions</span>
<span className="font-label-stamp text-label-stamp text-status-waiting font-bold">2 Devices Connected</span>
</div>
<p className="font-body-sm text-body-sm text-text-muted">
              You are signed into a Samsung Tab at Karnal Yard Gate 2 and this mobile terminal.
            </p>
</div>
<div className="flex flex-col sm:flex-row gap-sm pt-xs">
<button className="flex-1 h-touch-min px-md bg-surface-subtle hover:bg-surface-container text-text-secondary rounded-xl font-label-md text-label-md flex items-center justify-center gap-xs transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">devices</span>
<span>Log Out All Other Devices</span>
</button>
<button className="h-touch-min px-lg bg-status-weather-hold-bg hover:bg-red-200 text-metric-negative rounded-xl font-label-lg text-label-lg flex items-center justify-center gap-xs transition-colors font-semibold" type="button">
<span className="material-symbols-outlined text-[20px]">power_settings_new</span>
<span>Log Out (लॉग आउट)</span>
</button>
</div>
</section>
</div>
</div>

<div className="p-lg rounded-xl bg-surface-card shadow-sm flex flex-col md:flex-row items-center justify-between gap-md text-center md:text-left">
<div className="flex items-center gap-md">
<div className="w-12 h-12 rounded-xl bg-status-serving-bg flex items-center justify-center text-status-serving shrink-0">
<span className="material-symbols-outlined text-[26px]">support_agent</span>
</div>
<div>
<h4 className="font-label-lg text-label-lg text-text-primary">Need assistance configuring your Mandi settings?</h4>
<p className="font-body-sm text-body-sm text-text-muted">Call toll-free Kisan Call Center 1800-180-1551 (6 AM – 10 PM daily)</p>
</div>
</div>
<a className="h-touch-min px-lg bg-primary hover:bg-primary-container text-on-primary rounded-xl font-label-lg text-label-lg flex items-center justify-center gap-xs transition-all shadow-sm" href="tel:18001801551">
<span className="material-symbols-outlined text-[18px]">call</span>
<span>Call Mandi Helpdesk</span>
</a>
</div>
</div>

<aside className="fixed bottom-6 right-6 z-50">
<button aria-label="Open Voice Assistant" className="w-14 h-14 rounded-full bg-forest-deep text-on-primary flex items-center justify-center shadow-[0_12px_24px_-4px_rgba(6,78,59,0.38)] hover:scale-105 active:scale-95 transition-all group" type="button">
<span className="material-symbols-outlined text-[28px] group-hover:animate-pulse">mic</span>
</button>
</aside>



    </>
  );
}
