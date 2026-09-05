"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

export default function onboardingPage() {
  return (
    <>
      <aside className="fixed left-0 top-0 h-full w-64 bg-surface-card shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between select-none"><div className="flex flex-col"><div className="p-lg pb-sm"><Link href="/" className="flex items-center gap-sm cursor-pointer hover:opacity-90 transition-opacity"><div className="w-8 h-8 rounded-lg bg-[#b5e55a] flex items-center justify-center shadow-sm shrink-0"><svg className="w-5 h-5 text-[#1a2e0f]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.25 3.75a13.5 13.5 0 0 0-9.75 3.99A13.5 13.5 0 0 0 .75 17.49a.75.75 0 0 0 .75.76h9a13.46 13.46 0 0 0 9.75-4.25 13.46 13.46 0 0 0 0-10.25zM10.5 16.74H2.3c.7-3.7 3.32-6.72 6.84-8.03.35 1.54.88 3.01 1.57 4.38-.14 1.22-.21 2.45-.21 3.65zm8.44-3.55a12.02 12.02 0 0 1-7.85 3.51c.07-1.12.16-2.25.31-3.37.58-.09 1.17-.15 1.77-.15 2.05 0 3.96.65 5.77 1.01z" /></svg></div><span className="font-headline-sm text-headline-sm text-primary leading-none tracking-tight">CropBazaar</span></Link></div><div className="px-lg py-xs"><div className="flex items-center justify-between px-sm py-xs bg-status-serving-bg rounded-lg"><div className="flex items-center gap-xs"><span className="w-2 h-2 rounded-full bg-status-serving animate-pulse"></span><span className="font-label-stamp text-label-stamp text-status-serving uppercase font-bold tracking-wide">MANDI LIVE GATE 3</span></div><span className="px-xs py-base bg-surface-card rounded-full font-label-stamp text-label-stamp text-status-serving font-bold uppercase shadow-sm">Active</span></div></div><nav className="flex flex-col gap-base px-md mt-sm" data-active-classes="bg-primary-container text-on-primary rounded-xl shadow-[0_2px_4px_rgba(21,128,61,0.2)] font-semibold"><a className="flex items-center px-md py-sm rounded-xl font-label-lg text-label-lg text-text-secondary hover:bg-surface-subtle hover:text-on-surface transition-colors" data-path="dashboard" href="#"><span>Dashboard</span></a><a className="flex items-center px-md py-sm rounded-xl font-label-lg text-label-lg text-text-secondary hover:bg-surface-subtle hover:text-on-surface transition-colors" data-path="my-crops" href="#"><span>My Crops</span></a><a className="flex items-center px-md py-sm rounded-xl font-label-lg text-label-lg text-text-secondary hover:bg-surface-subtle hover:text-on-surface transition-colors" data-path="procurement" href="#"><span>Procurement</span></a><a className="flex items-center justify-between px-md py-sm rounded-xl font-label-lg text-label-lg text-text-secondary hover:bg-surface-subtle hover:text-on-surface transition-colors" data-path="live-queue" href="#"><span>Live Queue</span><span className="px-xs py-base bg-status-waiting-bg text-status-waiting font-label-stamp text-label-stamp font-bold rounded-full">Q-14</span></a><a className="flex items-center px-md py-sm rounded-xl font-label-lg text-label-lg text-text-secondary hover:bg-surface-subtle hover:text-on-surface transition-colors" data-path="markets" href="#"><span>Markets</span></a><a className="flex items-center px-md py-sm rounded-xl font-label-lg text-label-lg text-text-secondary hover:bg-surface-subtle hover:text-on-surface transition-colors" data-path="payments" href="#"><span>Payments</span></a><a className="flex items-center px-md py-sm rounded-xl font-label-lg text-label-lg text-text-secondary hover:bg-surface-subtle hover:text-on-surface transition-colors" data-path="weather" href="#"><span>Weather</span></a><a aria-current="page" className="flex items-center px-md py-sm transition-colors bg-primary-container text-on-primary rounded-xl shadow-[0_2px_4px_rgba(21,128,61,0.2)] font-semibold" data-path="rent-equipment" href="#"><span>Rent Equipment</span></a><a className="flex items-center px-md py-sm rounded-xl font-label-lg text-label-lg text-text-secondary hover:bg-surface-subtle hover:text-on-surface transition-colors" data-path="farmer-profile" href="#"><span>Farmer Profile</span></a></nav></div><div className="p-md flex flex-col gap-base"><a className="flex items-center px-md py-sm rounded-xl font-label-lg text-label-lg text-text-secondary hover:bg-surface-subtle hover:text-on-surface transition-colors" data-path="help-and-support" href="#"><span>Help &amp; Support</span></a><a className="flex items-center px-md py-sm rounded-xl font-label-lg text-label-lg text-text-secondary hover:bg-surface-subtle hover:text-on-surface transition-colors" data-path="logout" href="#"><span>Logout</span></a></div></aside><div className="pl-64"><header className="fixed top-0 left-64 right-0 h-16 bg-surface-card/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 px-lg"><div className="h-16 w-full flex items-center justify-between gap-md"><div className="relative flex-1 max-w-xl"><div className="absolute inset-y-0 left-0 pl-md flex items-center pointer-events-none text-text-muted"><span className="material-symbols-outlined text-[20px]">search</span></div><input className="w-full pl-touch-min pr-md py-xs bg-surface-subtle rounded-xl font-body-sm text-body-sm text-text-primary placeholder:text-text-muted outline-none focus:bg-surface-card transition-all" placeholder="Mandi dar, token no. ya fasal search karein..." type="text"/></div><div className="flex items-center gap-md"><button className="flex items-center gap-base px-sm py-xs bg-surface-subtle hover:bg-surface-container rounded-lg font-label-md text-label-md text-text-primary transition-colors" type="button"><span className="material-symbols-outlined text-[16px]">translate</span><span>अ / EN</span></button><button className="relative p-xs rounded-lg hover:bg-surface-subtle text-text-secondary hover:text-on-surface transition-colors" type="button"><span className="material-symbols-outlined text-[22px]">notifications</span><span className="absolute top-1.5 right-1.5 w-2 h-2 bg-metric-negative rounded-full ring-2 ring-surface-card"></span></button><a className="flex items-center gap-sm pl-xs hover:opacity-90 transition-opacity" data-path="farmer-profile" href="#"><div className="flex flex-col text-right hidden sm:flex"><span className="font-label-lg text-label-lg text-text-primary leading-tight">Ramesh Singh</span><span className="font-label-stamp text-label-stamp text-status-serving font-bold tracking-wide">Verified Kisan</span></div><img alt="Ramesh Singh Profile Avatar" className="w-8 h-8 rounded-full object-cover shadow-sm" src="https://lh3.googleusercontent.com/aida/AEtjO1WuI5rPJQnQaN7EvOVoNw1reMp_dEmKgJa4bzSlxhexf6EQvVndqTJfSU9WLIyBFQd72-9TrY9m_n7BZi1RlgGh0sJDBi3oUzPsNeVBKEoZU6TBO-GdNkgFA5cIkh-xA3FF7EUpRmAkLmsWUd5xfh9TBXiDx7HJcU03t_XP3WNOeYAUx2_bh5c8ak3epSx8Npd9KscRGw9lYBbdaYhjl7UZtmjL4O2HIXYdUXlcsz-RwYYWD5pFK3W8VVc"/></a></div></div></header><main className="w-full pt-16 bg-canvas-warm min-h-screen"><div className="flex flex-col w-full">
<div className="w-full max-w-[75rem] mx-auto px-4 md:px-8 py-6 md:py-10">
<div className="relative overflow-hidden rounded-2xl bg-forest-deep text-surface-container-lowest p-6 md:p-10 mb-8 shadow-sm">
<div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-primary/20 blur-3xl pointer-events-none"></div>
<div className="absolute -left-12 -bottom-12 w-64 h-64 rounded-full bg-secondary/30 blur-2xl pointer-events-none"></div>
<div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
<div className="space-y-2 max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-lowest/15 backdrop-blur-md text-surface-container-lowest text-xs font-semibold uppercase tracking-wider">
<span className="inline-block w-2 h-2 rounded-full bg-primary-fixed animate-pulse"></span>
            Govt. Authorized Mandi Gateway • e-NAM
          </div>
<h1 className="font-headline-lg text-2xl md:text-headline-lg font-bold text-surface-container-lowest tracking-tight">
            Welcome to CropBazaar <span className="font-normal opacity-90 block md:inline text-lg md:text-2xl text-primary-fixed">(किसान पंजीकरण व स्वागत)</span>
</h1>
<p className="font-body-md text-surface-container text-sm md:text-body-md leading-relaxed">
            Set up your profile in 3 simple steps to start booking mandi procurement slots and fair equipment rentals.
          </p>
</div>
<div className="bg-surface-card/10 backdrop-blur-md p-4 rounded-xl flex items-center gap-4 self-start md:self-auto min-w-[240px]">
<div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center text-forest-deep font-bold">
<span className="material-symbols-outlined text-2xl">verified_user</span>
</div>
<div>
<div className="text-xs uppercase tracking-wider text-surface-container-low font-semibold">Verification Status</div>
<div className="text-sm font-bold text-surface-container-lowest flex items-center gap-1.5">
<span>Aadhaar Kisan ID</span>
<span className="material-symbols-outlined text-primary-fixed text-base">check_circle</span>
</div>
<div className="text-xs text-primary-fixed-dim">Linked: XXXX-XXXX-7842</div>
</div>
</div>
</div>
<div className="relative z-10 mt-8 pt-6 border-t border-surface-container-lowest/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div className="flex items-center gap-3 w-full sm:w-auto">
<span className="px-3 py-1 rounded-full bg-primary text-on-primary font-label-md text-label-md font-semibold">
            Step 1 of 3
          </span>
<span className="font-title-md text-title-md text-surface-container-lowest font-medium">
            Farmer &amp; Farm Profile <span className="text-surface-container text-sm font-normal">(किसान और खेती का विवरण)</span>
</span>
</div>
<div className="w-full sm:w-56 h-2 rounded-full bg-surface-container-lowest/20 overflow-hidden">
<div className="h-full bg-primary-fixed w-1/3 rounded-full transition-all duration-500"></div>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
<div className="lg:col-span-8 space-y-8">
<div className="bg-surface-card rounded-2xl p-6 md:p-8 shadow-sm space-y-6">
<div className="flex items-center justify-between pb-4 border-b border-border-sage">
<div className="flex items-center gap-3">
<span className="w-8 h-8 rounded-lg bg-surface-subtle text-primary flex items-center justify-center font-bold">1</span>
<div>
<h2 className="font-title-md text-title-md font-bold text-text-primary">Personal Details <span className="text-text-muted font-normal text-sm">(व्यक्तिगत जानकारी)</span></h2>
<p className="font-body-sm text-body-sm text-text-muted">Information as registered under PM-KISAN database</p>
</div>
</div>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-status-serving-bg text-status-serving font-label-stamp text-label-stamp font-bold">
<span className="material-symbols-outlined text-sm">lock</span> E-KYC SYNCED
            </span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-2">
<label className="block font-label-md text-label-md font-semibold text-text-secondary">
                Full Name (पूरा नाम)
              </label>
<div className="relative">
<input className="w-full h-12 px-4 rounded-xl bg-surface-subtle text-text-primary font-body-md text-body-md cursor-default focus:outline-none focus:ring-0" readOnly type="text" value="Ramesh Singh (रमेश सिंह)"/>
<span className="material-symbols-outlined absolute right-3 top-3 text-status-serving text-xl">verified</span>
</div>
<p className="text-xs text-text-muted">Matched with Aadhaar Record</p>
</div>
<div className="space-y-2">
<label className="block font-label-md text-label-md font-semibold text-text-secondary">
                Mobile Number (मोबाइल नंबर)
              </label>
<div className="relative">
<input className="w-full h-12 px-4 rounded-xl bg-surface-subtle text-text-primary font-body-md text-body-md cursor-default focus:outline-none focus:ring-0" readOnly type="text" value="+91 98120 45678"/>
<span className="absolute right-3 top-2.5 inline-flex items-center gap-1 px-2 py-1 rounded-full bg-status-serving-bg text-status-serving text-xs font-semibold">
<span className="material-symbols-outlined text-sm">check_circle</span> OTP Verified
                </span>
</div>
<p className="text-xs text-text-muted">SMS alerts and Mandi tokens will arrive here</p>
</div>
</div>
<div className="space-y-3 pt-2">
<label className="block font-label-md text-label-md font-semibold text-text-secondary">
              Preferred Language for Mandi Voice &amp; SMS (पसंदीदा भाषा)
            </label>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3" id="lang-selector">
<button className="lang-pill h-12 px-4 rounded-xl flex items-center justify-center gap-2 font-label-lg text-label-lg transition-all bg-forest-deep text-surface-container-lowest font-bold shadow-sm" onClick={() => {}} type="button">
<span className="material-symbols-outlined text-lg">check</span>
<span>English &amp; हिन्दी</span>
</button>
<button className="lang-pill h-12 px-4 rounded-xl flex items-center justify-center gap-2 font-label-lg text-label-lg transition-all bg-surface-subtle hover:bg-surface-container text-text-secondary font-medium" onClick={() => {}} type="button">
<span>हिन्दी (Hindi)</span>
</button>
<button className="lang-pill h-12 px-4 rounded-xl flex items-center justify-center gap-2 font-label-lg text-label-lg transition-all bg-surface-subtle hover:bg-surface-container text-text-secondary font-medium" onClick={() => {}} type="button">
<span>English</span>
</button>
</div>
</div>
</div>
<div className="bg-surface-card rounded-2xl p-6 md:p-8 shadow-sm space-y-6">
<div className="flex items-center justify-between pb-4 border-b border-border-sage">
<div className="flex items-center gap-3">
<span className="w-8 h-8 rounded-lg bg-surface-subtle text-primary flex items-center justify-center font-bold">2</span>
<div>
<h2 className="font-title-md text-title-md font-bold text-text-primary">Farm &amp; Location Details <span className="text-text-muted font-normal text-sm">(खेत का पता व स्थान)</span></h2>
<p className="font-body-sm text-body-sm text-text-muted">Enables geofenced mandi queues and localized MSP procurement rates</p>
</div>
</div>
<span className="inline-flex items-center gap-1 text-xs text-metric-positive font-semibold">
<span className="material-symbols-outlined text-sm">my_location</span> GPS Geo-Tagged
            </span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-2">
<label className="block font-label-md text-label-md font-semibold text-text-secondary">
                Village / Tehsil (गाँव / तहसील)
              </label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-3 text-text-muted text-xl">location_city</span>
<input className="w-full h-12 pl-10 pr-4 rounded-xl bg-surface-subtle focus:bg-surface-card text-text-primary font-body-md text-body-md transition-all focus:outline-none" type="text" value="Village Rai, Tehsil Sonipat"/>
</div>
</div>
<div className="space-y-2">
<label className="block font-label-md text-label-md font-semibold text-text-secondary">
                District &amp; State (ज़िला एवं राज्य)
              </label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-3 text-text-muted text-xl">map</span>
<input className="w-full h-12 pl-10 pr-4 rounded-xl bg-surface-subtle focus:bg-surface-card text-text-primary font-body-md text-body-md transition-all focus:outline-none" type="text" value="Sonipat, Haryana"/>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-5 pt-1">
<div className="md:col-span-6 space-y-2">
<label className="block font-label-md text-label-md font-semibold text-text-secondary">
                Total Cultivated Land (कुल कृषि भूमि)
              </label>
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-3 text-text-muted text-xl">straighten</span>
<input className="w-full h-12 pl-10 pr-20 rounded-xl bg-surface-subtle focus:bg-surface-card text-text-primary font-metric-medium text-metric-medium font-bold transition-all focus:outline-none" type="text" value="12.5"/>
<span className="absolute right-3 font-label-md text-text-muted uppercase font-bold bg-surface-container px-2 py-1 rounded">Acres</span>
</div>
<p className="text-xs text-text-muted">Approx. 5.05 Hectares</p>
</div>
<div className="md:col-span-6 space-y-2">
<label className="block font-label-md text-label-md font-semibold text-text-secondary">
                Land Ownership Type (स्वामित्व का प्रकार)
              </label>
<div className="grid grid-cols-2 gap-2 h-12 p-1 bg-surface-subtle rounded-xl">
<button className="land-btn h-full rounded-lg text-sm font-semibold transition-all bg-surface-card text-primary shadow-sm flex items-center justify-center gap-1.5" onClick={() => {}} type="button">
<span className="material-symbols-outlined text-base">domain_verification</span>
<span>Owned (स्वयं)</span>
</button>
<button className="land-btn h-full rounded-lg text-sm font-semibold transition-all text-text-muted hover:text-text-primary flex items-center justify-center gap-1.5" onClick={() => {}} type="button">
<span className="material-symbols-outlined text-base">handshake</span>
<span>Leased (बटाई)</span>
</button>
</div>
<p className="text-xs text-text-muted">Khasra/Khatauni No. 44//12/2 Verified</p>
</div>
</div>
</div>
<div className="bg-surface-card rounded-2xl p-6 md:p-8 shadow-sm space-y-6">
<div className="flex items-center justify-between pb-4 border-b border-border-sage">
<div className="flex items-center gap-3">
<span className="w-8 h-8 rounded-lg bg-surface-subtle text-primary flex items-center justify-center font-bold">3</span>
<div>
<h2 className="font-title-md text-title-md font-bold text-text-primary">Primary Crops for Procurement <span className="text-text-muted font-normal text-sm">(मुख्य फसलें)</span></h2>
<p className="font-body-sm text-body-sm text-text-muted">Select commodities you harvest for automated MSP rate tracking and mandi arrival passes</p>
</div>
</div>
<span className="font-label-stamp text-label-stamp bg-surface-subtle text-text-secondary px-3 py-1 rounded-full font-bold">
              Multi-Select Available
            </span>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3" id="crop-chips">
<div className="crop-chip group cursor-pointer select-none p-3.5 rounded-xl bg-status-serving-bg text-forest-deep transition-all relative flex flex-col items-center justify-center text-center gap-2" data-selected="true" onClick={() => {}}>
<div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-xs">
<span className="material-symbols-outlined text-xl">grain</span>
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg font-bold">Wheat</span>
<span className="text-xs text-status-serving font-medium">गेहूँ</span>
</div>
<span className="check-icon absolute top-2 right-2 w-5 h-5 rounded-full bg-primary text-on-primary flex items-center justify-center text-xs">
<span className="material-symbols-outlined text-sm">check</span>
</span>
</div>
<div className="crop-chip group cursor-pointer select-none p-3.5 rounded-xl bg-status-serving-bg text-forest-deep transition-all relative flex flex-col items-center justify-center text-center gap-2" data-selected="true" onClick={() => {}}>
<div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-xs">
<span className="material-symbols-outlined text-xl">spa</span>
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg font-bold">Mustard</span>
<span className="text-xs text-status-serving font-medium">सरसों</span>
</div>
<span className="check-icon absolute top-2 right-2 w-5 h-5 rounded-full bg-primary text-on-primary flex items-center justify-center text-xs">
<span className="material-symbols-outlined text-sm">check</span>
</span>
</div>
<div className="crop-chip group cursor-pointer select-none p-3.5 rounded-xl bg-surface-subtle text-text-secondary hover:bg-surface-container transition-all relative flex flex-col items-center justify-center text-center gap-2" data-selected="false" onClick={() => {}}>
<div className="w-10 h-10 rounded-full bg-surface-card text-text-muted flex items-center justify-center shadow-xs">
<span className="material-symbols-outlined text-xl">grass</span>
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg font-semibold">Paddy</span>
<span className="text-xs text-text-muted font-medium">धान</span>
</div>
<span className="check-icon hidden absolute top-2 right-2 w-5 h-5 rounded-full bg-primary text-on-primary flex items-center justify-center text-xs">
<span className="material-symbols-outlined text-sm">check</span>
</span>
</div>
<div className="crop-chip group cursor-pointer select-none p-3.5 rounded-xl bg-surface-subtle text-text-secondary hover:bg-surface-container transition-all relative flex flex-col items-center justify-center text-center gap-2" data-selected="false" onClick={() => {}}>
<div className="w-10 h-10 rounded-full bg-surface-card text-text-muted flex items-center justify-center shadow-xs">
<span className="material-symbols-outlined text-xl">eco</span>
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg font-semibold">Cotton</span>
<span className="text-xs text-text-muted font-medium">कपास</span>
</div>
<span className="check-icon hidden absolute top-2 right-2 w-5 h-5 rounded-full bg-primary text-on-primary flex items-center justify-center text-xs">
<span className="material-symbols-outlined text-sm">check</span>
</span>
</div>
<div className="crop-chip group cursor-pointer select-none p-3.5 rounded-xl bg-surface-subtle text-text-secondary hover:bg-surface-container transition-all relative flex flex-col items-center justify-center text-center gap-2" data-selected="false" onClick={() => {}}>
<div className="w-10 h-10 rounded-full bg-surface-card text-text-muted flex items-center justify-center shadow-xs">
<span className="material-symbols-outlined text-xl">nutrition</span>
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg font-semibold">Gram</span>
<span className="text-xs text-text-muted font-medium">चना</span>
</div>
<span className="check-icon hidden absolute top-2 right-2 w-5 h-5 rounded-full bg-primary text-on-primary flex items-center justify-center text-xs">
<span className="material-symbols-outlined text-sm">check</span>
</span>
</div>
</div>
</div>
<div className="bg-surface-card rounded-2xl p-6 md:p-8 shadow-sm space-y-6">
<div className="flex items-center justify-between pb-4 border-b border-border-sage">
<div className="flex items-center gap-3">
<span className="w-8 h-8 rounded-lg bg-surface-subtle text-primary flex items-center justify-center font-bold">4</span>
<div>
<h2 className="font-title-md text-title-md font-bold text-text-primary">Preferred Procurement Centre <span className="text-text-muted font-normal text-sm">(पसंदीदा खरीद केंद्र)</span></h2>
<p className="font-body-sm text-body-sm text-text-muted">Nearest automated weighbridges with live digital token facility</p>
</div>
</div>
<span className="inline-flex items-center gap-1 text-xs bg-status-confirmed-bg text-status-confirmed font-bold px-2.5 py-1 rounded-full">
<span className="material-symbols-outlined text-sm">traffic</span> LOW CONGESTION
            </span>
</div>
<div className="space-y-3" id="mandi-options">
<div className="mandi-card cursor-pointer p-4 rounded-xl bg-surface-subtle hover:bg-surface-container transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 relative" data-active="true" onClick={() => {}}>
<div className="flex items-start gap-3.5">
<div className="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined">warehouse</span>
</div>
<div>
<div className="flex items-center gap-2">
<span className="font-title-md text-base md:text-title-md font-bold text-text-primary">Karnal Central Yard — Gate 2</span>
<span className="px-2 py-0.5 rounded-full bg-status-serving-bg text-status-serving font-label-stamp text-xs font-bold">Primary Hub</span>
</div>
<p className="font-body-sm text-body-sm text-text-muted mt-0.5">APMC Mandi Road, Sonipat Sector 38 • 4.2 km from your farm</p>
<div className="flex items-center gap-4 mt-2 text-xs font-semibold">
<span className="text-status-serving flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-status-serving"></span> Queue time: ~35 mins
                    </span>
<span className="text-text-muted">•</span>
<span className="text-text-secondary">Weighbridge 03 active</span>
</div>
</div>
</div>
<div className="flex items-center gap-3 self-end md:self-center">
<span className="mandi-radio w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center">
<span className="material-symbols-outlined text-sm">check</span>
</span>
</div>
</div>
<div className="mandi-card cursor-pointer p-4 rounded-xl bg-surface-card hover:bg-surface-subtle transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 relative" data-active="false" onClick={() => {}}>
<div className="flex items-start gap-3.5">
<div className="w-10 h-10 rounded-xl bg-surface-subtle text-text-muted flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined">storefront</span>
</div>
<div>
<div className="flex items-center gap-2">
<span className="font-title-md text-base md:text-title-md font-semibold text-text-primary">Taraori Food Corp Silo</span>
<span className="px-2 py-0.5 rounded-full bg-surface-subtle text-text-muted font-label-stamp text-xs font-medium">Backup Depot</span>
</div>
<p className="font-body-sm text-body-sm text-text-muted mt-0.5">GT Karnal Highway KM-114 • 8.8 km from your farm</p>
<div className="flex items-center gap-4 mt-2 text-xs font-semibold">
<span className="text-status-waiting flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-status-waiting"></span> Queue time: ~1 hr 15 mins
                    </span>
<span className="text-text-muted">•</span>
<span className="text-text-secondary">Bulk Wheat Silo Capacity 90k MT</span>
</div>
</div>
</div>
<div className="flex items-center gap-3 self-end md:self-center">
<span className="mandi-radio w-6 h-6 rounded-full bg-surface-subtle text-text-muted flex items-center justify-center">
<span className="w-2 h-2 rounded-full bg-transparent"></span>
</span>
</div>
</div>
</div>
</div>
<div className="p-6 rounded-2xl bg-surface-card shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-surface-subtle flex items-center justify-center text-text-muted">
<span className="material-symbols-outlined">support_agent</span>
</div>
<div>
<div className="text-xs uppercase font-bold text-text-muted">Assistance Desk</div>
<a className="font-label-lg text-label-lg font-bold text-primary hover:underline flex items-center gap-1" href="tel:18001801551">
                Kisan Sahayata: 1800-180-1551
                <span className="material-symbols-outlined text-sm">call</span>
</a>
</div>
</div>
<div className="w-full sm:w-auto">
<button className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 rounded-xl bg-primary hover:bg-forest-deep text-on-primary font-label-lg text-label-lg font-bold flex items-center justify-center gap-3 shadow-md hover:shadow-lg transition-all" onClick={() => {}} type="button">
<span>Continue to Dashboard (आगे बढ़ें और डैशबोर्ड देखें)</span>
<span className="material-symbols-outlined text-lg">arrow_forward</span>
</button>
</div>
</div>
</div>
<div className="lg:col-span-4 space-y-6">
<div className="bg-surface-card rounded-2xl p-6 shadow-sm space-y-5">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-status-serving-bg text-status-serving flex items-center justify-center font-bold">
<span className="material-symbols-outlined">shield</span>
</div>
<div>
<h3 className="font-headline-sm text-base md:text-headline-sm font-bold text-text-primary">Govt. MSP Assurance</h3>
<p className="font-body-sm text-body-sm text-text-muted">National Procurement Trust Standard</p>
</div>
</div>
<div className="p-4 rounded-xl bg-surface-subtle space-y-3">
<div className="flex items-start gap-2.5">
<span className="material-symbols-outlined text-status-serving text-xl shrink-0 mt-0.5">check_circle</span>
<div className="text-xs leading-relaxed text-text-secondary font-medium">
<strong className="text-text-primary">100% Aadhaar-linked MSP Guarantee:</strong> Direct DBTL (Direct Benefit Transfer) straight into your verified bank account within 48 hours of mandi scale dispatch.
              </div>
</div>
<div className="flex items-start gap-2.5">
<span className="material-symbols-outlined text-status-serving text-xl shrink-0 mt-0.5">security</span>
<div className="text-xs leading-relaxed text-text-secondary font-medium">
<strong className="text-text-primary">e-NAM Integrated:</strong> Verified physical quality assaying at gate entrance prevents arbitrary grain deductions.
              </div>
</div>
<div className="flex items-start gap-2.5">
<span className="material-symbols-outlined text-status-serving text-xl shrink-0 mt-0.5">schedule</span>
<div className="text-xs leading-relaxed text-text-secondary font-medium">
<strong className="text-text-primary">Zero Tractor Wait Time:</strong> Digital QR token gates keep line-time under 45 minutes on assigned calendar day.
              </div>
</div>
</div>
<div className="space-y-2 pt-1">
<div className="flex justify-between text-xs font-semibold text-text-secondary">
<span>Onboarding Checklist</span>
<span className="text-status-serving">65% Complete</span>
</div>
<div className="w-full h-2 rounded-full bg-surface-subtle overflow-hidden">
<div className="h-full bg-status-serving w-[65%] rounded-full"></div>
</div>
<ul className="text-xs text-text-muted space-y-1.5 pt-2">
<li className="flex items-center gap-2 text-text-primary">
<span className="material-symbols-outlined text-status-serving text-sm">check</span> Profile &amp; Land Authentication
              </li>
<li className="flex items-center gap-2 text-text-muted">
<span className="material-symbols-outlined text-sm">radio_button_unchecked</span> Bank Account &amp; IFSC Confirmation
              </li>
<li className="flex items-center gap-2 text-text-muted">
<span className="material-symbols-outlined text-sm">radio_button_unchecked</span> Tractor / Trolley Registration (Optional)
              </li>
</ul>
</div>
</div>
<div className="bg-surface-card rounded-2xl p-6 shadow-sm space-y-4">
<h3 className="font-headline-sm text-base md:text-headline-sm font-bold text-text-primary flex items-center justify-between">
<span>Current Mandi Benchmarks</span>
<span className="font-label-stamp text-label-stamp text-status-serving font-bold bg-status-serving-bg px-2 py-0.5 rounded-full">TODAY</span>
</h3>
<div className="space-y-3">
<div className="p-3 rounded-xl bg-surface-subtle flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-surface-card flex items-center justify-center text-primary font-bold text-sm">
                  गेहूँ
                </div>
<div>
<div className="text-sm font-bold text-text-primary">Wheat (Grade A)</div>
<div className="text-xs text-text-muted">Karnal APMC Yard</div>
</div>
</div>
<div className="text-right">
<div className="font-metric-medium text-base font-bold text-text-primary">₹2,275</div>
<div className="text-[11px] text-metric-positive font-semibold flex items-center justify-end">
<span className="material-symbols-outlined text-xs">arrow_upward</span> +₹125 MSP
                </div>
</div>
</div>
<div className="p-3 rounded-xl bg-surface-subtle flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-surface-card flex items-center justify-center text-primary font-bold text-sm">
                  सरसों
                </div>
<div>
<div className="text-sm font-bold text-text-primary">Mustard Seed</div>
<div className="text-xs text-text-muted">Taraori Mandi</div>
</div>
</div>
<div className="text-right">
<div className="font-metric-medium text-base font-bold text-text-primary">₹5,650</div>
<div className="text-[11px] text-metric-positive font-semibold flex items-center justify-end">
<span className="material-symbols-outlined text-xs">arrow_upward</span> Steady
                </div>
</div>
</div>
</div>
</div>
<div className="rounded-2xl bg-surface-subtle p-5 flex items-start gap-3.5">
<span className="material-symbols-outlined text-status-waiting text-2xl shrink-0">info</span>
<div className="text-xs text-text-secondary leading-relaxed">
            Need to change Aadhaar phone number or update Khasra registry document? You can update all legal records anytime from the <strong className="text-text-primary">Farmer Profile</strong> tab after onboarding.
          </div>
</div>
</div>
</div>
</div>
<div className="fixed bottom-6 right-6 z-50">
<button aria-label="Voice Kisan Assistant" className="w-14 h-14 rounded-full bg-forest-deep text-primary-fixed shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center relative group" onClick={() => {}} type="button">
<span className="material-symbols-outlined text-2xl">mic</span>
<span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-status-serving rounded-full ring-2 ring-surface-card animate-pulse"></span>
<span className="absolute right-16 px-3 py-1.5 rounded-xl bg-forest-deep text-surface-container-lowest font-label-md text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
        बोलकर सवाल पूछें (Voice Help)
      </span>
</button>
</div>
</div>
</main></div>
    </>
  );
}
