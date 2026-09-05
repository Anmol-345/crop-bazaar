/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Page() {
  return (
    <main className="flex-1 overflow-y-auto bg-gray-50"><div className="flex flex-col w-full">

<div className="flex flex-wrap items-center justify-between gap-md mb-md">
<Link href="#" className="inline-flex items-center gap-xs text-text-secondary hover:text-primary transition-colors group" >
<span className="material-symbols-outlined text-[18px] group-hover:-translate-x-0.5 transition-transform">arrow_back</span>
<span className="font-label-lg text-label-lg font-semibold">Back to Dashboard</span>
<span className="text-text-muted font-label-stamp text-label-stamp ml-xs">(डैशबोर्ड पर वापस)</span>
</Link>
<div className="inline-flex items-center gap-xs px-md py-base rounded-full bg-surface-container text-forest-deep shadow-sm">
<span className="material-symbols-outlined text-[16px] text-primary">my_location</span>
<span className="font-label-stamp text-label-stamp font-bold">Your Location:</span>
<span className="font-body-sm text-body-sm text-text-secondary">Nilokheri, Karnal (HR)</span>
</div>
</div>

<div className="flex flex-col mb-lg">
<div className="flex items-center gap-sm flex-wrap">
<h1 className="font-headline-lg text-headline-lg text-forest-deep font-extrabold tracking-tight">Find a Procurement Centre</h1>
<span className="font-title-md text-title-md text-primary font-bold">(खरीद केंद्र खोजें)</span>
</div>
<p className="font-body-md text-body-md text-text-muted mt-base max-w-3xl">
      Browse nearby verified APMC mandis and state grain procurement centres with live weighbridge queue status, slot availability, and MSP rates.
    </p>
</div>

<div className="bg-surface-card rounded-xl p-md shadow-sm mb-xl flex flex-col gap-md">

<div className="relative w-full">
<span className="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-text-muted text-[22px]">search</span>
<input className="w-full h-touch-min pl-12 pr-12 bg-canvas-warm rounded-lg font-body-lg text-body-lg text-text-primary outline-none focus:bg-surface-card transition-all" placeholder="Search centre, mandi, or location... (e.g. Nilokheri, Karnal)" type="search" value="Nilokheri, Karnal"/>
<button aria-label="Clear or voice search" className="absolute right-md top-1/2 -translate-y-1/2 text-primary hover:text-forest-deep" type="button">
<span className="material-symbols-outlined text-[20px]">mic</span>
</button>
</div>

<div className="flex items-center gap-xs flex-wrap overflow-x-auto pb-base">
<div className="flex items-center gap-base px-sm py-xs bg-canvas-warm rounded-lg text-text-secondary font-label-md text-label-md">
<span className="material-symbols-outlined text-[16px] text-text-muted">tune</span>
<span>Filters:</span>
</div>

<button className="inline-flex items-center gap-xs px-md py-xs rounded-full bg-primary text-on-primary font-label-md text-label-md shadow-sm transition-all hover:bg-forest-deep" type="button">
<span className="material-symbols-outlined text-[16px]">near_me</span>
<span>Within 20 km</span>
<span className="material-symbols-outlined text-[14px]">close</span>
</button>

<button className="inline-flex items-center gap-xs px-md py-xs rounded-full bg-primary text-on-primary font-label-md text-label-md shadow-sm transition-all hover:bg-forest-deep" type="button">
<span className="material-symbols-outlined text-[16px]">grain</span>
<span>Wheat (गेहूँ)</span>
<span className="material-symbols-outlined text-[14px]">close</span>
</button>

<button className="inline-flex items-center gap-xs px-md py-xs rounded-full bg-primary text-on-primary font-label-md text-label-md shadow-sm transition-all hover:bg-forest-deep" type="button">
<span className="material-symbols-outlined text-[16px]">schedule</span>
<span>Open Today</span>
<span className="material-symbols-outlined text-[14px]">close</span>
</button>

<button className="inline-flex items-center gap-xs px-md py-xs rounded-full bg-surface-subtle text-text-secondary font-label-md text-label-md hover:bg-surface-container transition-colors" type="button">
<span>Status: All Statuses</span>
<span className="material-symbols-outlined text-[16px]">expand_more</span>
</button>

<button className="ml-auto text-primary font-label-md text-label-md hover:underline px-xs" type="button">
        Clear All (साफ़ करें)
      </button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-xl items-start">

<div className="lg:col-span-8 flex flex-col gap-lg min-w-0">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-headline-sm text-forest-deep font-bold">
          4 Centres Found <span className="font-body-sm text-body-sm text-text-muted font-normal">(नजदीकी खरीद केंद्र)</span>
</span>
<span className="font-label-stamp text-label-stamp text-text-muted flex items-center gap-base">
<span className="w-2 h-2 rounded-full bg-status-serving"></span> Live telemetry active
        </span>
</div>

<div className="bg-surface-card rounded-xl p-lg shadow-sm hover:shadow-md transition-shadow relative flex flex-col gap-md group">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-xs">
<div className="flex flex-col">
<div className="flex items-center gap-xs">
<h2 className="font-title-md text-title-md text-forest-deep font-bold">XYZ Grain Procurement Centre</h2>
<span className="px-xs py-base rounded bg-surface-container font-label-stamp text-label-stamp text-forest-deep font-bold">Gate 2</span>
</div>
<div className="flex items-center gap-xs mt-base text-text-muted font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[16px] text-primary">navigation</span>
<span className="font-semibold text-text-primary">4.2 km away</span>
<span className="text-text-muted">•</span>
<span>Nilokheri-Karnal Highway (NH-44)</span>
</div>
</div>

<div className="inline-flex items-center gap-xs px-sm py-base rounded-full bg-status-serving-bg text-status-serving">
<span className="w-2 h-2 rounded-full bg-status-serving animate-ping"></span>
<span className="font-label-stamp text-label-stamp font-extrabold uppercase tracking-wide">OPEN (खुला है)</span>
</div>
</div>

<div className="grid grid-cols-2 sm:grid-cols-4 gap-sm bg-surface-subtle rounded-xl p-md">
<div className="flex flex-col">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase">Current Queue</span>
<span className="font-metric-large text-metric-large text-forest-deep font-bold">18</span>
<span className="font-body-sm text-body-sm text-text-secondary">Farmers in line</span>
</div>
<div className="flex flex-col">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase">Est. Wait Time</span>
<span className="font-metric-large text-metric-large text-status-waiting font-bold">1h 15m</span>
<span className="font-body-sm text-body-sm text-text-secondary">Steady throughput</span>
</div>
<div className="flex flex-col">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase">Weighbridges</span>
<span className="font-metric-large text-metric-large text-status-serving font-bold">3 Active</span>
<span className="font-body-sm text-body-sm text-text-secondary">WB-1, WB-2, WB-3</span>
</div>
<div className="flex flex-col">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase">Booking Slots</span>
<span className="font-metric-large text-metric-large text-primary font-bold">12 Open</span>
<span className="font-body-sm text-body-sm text-text-secondary">Morning &amp; Afternoon</span>
</div>
</div>

<div className="flex flex-wrap items-center justify-between gap-sm pt-xs">
<div className="flex items-center gap-md flex-wrap">
<div className="inline-flex items-center gap-xs bg-canvas-warm px-sm py-base rounded-lg text-text-secondary">
<span className="material-symbols-outlined text-[16px] text-primary">verified</span>
<span className="font-label-md text-label-md">Wheat MSP: <strong className="text-forest-deep">₹2,425/Qtl</strong></span>
</div>
<div className="inline-flex items-center gap-xs bg-canvas-warm px-sm py-base rounded-lg text-text-secondary">
<span className="material-symbols-outlined text-[16px] text-secondary">verified</span>
<span className="font-label-md text-label-md">Mustard MSP: <strong className="text-forest-deep">₹5,620/Qtl</strong></span>
</div>
</div>
<Link href="/procurement-centres/1" className="h-touch-min px-lg bg-primary-container hover:bg-forest-deep text-on-primary rounded-xl font-label-lg text-label-lg font-bold flex items-center justify-center gap-xs shadow-sm transition-all w-full sm:w-auto">
<span>View Centre</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</Link>
</div>
</div>

<div className="bg-surface-card rounded-xl p-lg shadow-sm hover:shadow-md transition-shadow relative flex flex-col gap-md group">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-xs">
<div className="flex flex-col">
<div className="flex items-center gap-xs">
<h2 className="font-title-md text-title-md text-forest-deep font-bold">Karnal Main Grain Mandi</h2>
<span className="px-xs py-base rounded bg-surface-container font-label-stamp text-label-stamp text-forest-deep font-bold">Gates 1 &amp; 4</span>
</div>
<div className="flex items-center gap-xs mt-base text-text-muted font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[16px] text-primary">navigation</span>
<span className="font-semibold text-text-primary">11.5 km away</span>
<span className="text-text-muted">•</span>
<span>GT Road Bypass, Sector 3, Karnal</span>
</div>
</div>

<div className="inline-flex items-center gap-xs px-sm py-base rounded-full bg-status-waiting-bg text-status-waiting">
<span className="w-2 h-2 rounded-full bg-status-waiting"></span>
<span className="font-label-stamp text-label-stamp font-extrabold uppercase tracking-wide">MODERATELY BUSY (मध्यम भीड़)</span>
</div>
</div>

<div className="grid grid-cols-2 sm:grid-cols-4 gap-sm bg-surface-subtle rounded-xl p-md">
<div className="flex flex-col">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase">Current Queue</span>
<span className="font-metric-large text-metric-large text-forest-deep font-bold">24</span>
<span className="font-body-sm text-body-sm text-text-secondary">Tractor trollies</span>
</div>
<div className="flex flex-col">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase">Est. Wait Time</span>
<span className="font-metric-large text-metric-large text-status-waiting font-bold">1h 45m</span>
<span className="font-body-sm text-body-sm text-text-secondary">High inflow</span>
</div>
<div className="flex flex-col">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase">Weighbridges</span>
<span className="font-metric-large text-metric-large text-forest-deep font-bold">4 Active</span>
<span className="font-body-sm text-body-sm text-text-secondary">Commercial grade</span>
</div>
<div className="flex flex-col">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase">Booking Slots</span>
<span className="font-metric-large text-metric-large text-status-waiting font-bold">4 Left</span>
<span className="font-body-sm text-body-sm text-text-secondary">Evening slot only</span>
</div>
</div>

<div className="flex flex-wrap items-center justify-between gap-sm pt-xs">
<div className="flex items-center gap-md flex-wrap">
<div className="inline-flex items-center gap-xs bg-canvas-warm px-sm py-base rounded-lg text-text-secondary">
<span className="material-symbols-outlined text-[16px] text-primary">verified</span>
<span className="font-label-md text-label-md">Wheat MSP: <strong className="text-forest-deep">₹2,425/Qtl</strong></span>
</div>
<div className="inline-flex items-center gap-xs bg-canvas-warm px-sm py-base rounded-lg text-text-secondary">
<span className="material-symbols-outlined text-[16px] text-text-muted">local_shipping</span>
<span className="font-label-md text-label-md">Direct Tarp Shed Available</span>
</div>
</div>
<Link href="/procurement-centres/1" className="h-touch-min px-lg bg-primary-container hover:bg-forest-deep text-on-primary rounded-xl font-label-lg text-label-lg font-bold flex items-center justify-center gap-xs shadow-sm transition-all w-full sm:w-auto">
<span>View Centre</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</Link>
</div>
</div>

<div className="bg-surface-card rounded-xl p-lg shadow-sm hover:shadow-md transition-shadow relative flex flex-col gap-md group">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-xs">
<div className="flex flex-col">
<div className="flex items-center gap-xs">
<h2 className="font-title-md text-title-md text-forest-deep font-bold">Taraori Food Corporation Yard</h2>
<span className="px-xs py-base rounded bg-surface-container font-label-stamp text-label-stamp text-forest-deep font-bold">Terminal A</span>
</div>
<div className="flex items-center gap-xs mt-base text-text-muted font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[16px] text-primary">navigation</span>
<span className="font-semibold text-text-primary">8.8 km away</span>
<span className="text-text-muted">•</span>
<span>Taraori Industrial Complex</span>
</div>
</div>

<div className="inline-flex items-center gap-xs px-sm py-base rounded-full bg-status-serving-bg text-status-serving">
<span className="w-2 h-2 rounded-full bg-status-serving"></span>
<span className="font-label-stamp text-label-stamp font-extrabold uppercase tracking-wide">OPEN (खुला है)</span>
</div>
</div>

<div className="grid grid-cols-2 sm:grid-cols-4 gap-sm bg-surface-subtle rounded-xl p-md">
<div className="flex flex-col">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase">Current Queue</span>
<span className="font-metric-large text-metric-large text-status-serving font-bold">7</span>
<span className="font-body-sm text-body-sm text-text-secondary">Minimal queue</span>
</div>
<div className="flex flex-col">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase">Est. Wait Time</span>
<span className="font-metric-large text-metric-large text-status-serving font-bold">35m</span>
<span className="font-body-sm text-body-sm text-text-secondary">Fast check-in</span>
</div>
<div className="flex flex-col">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase">Weighbridges</span>
<span className="font-metric-large text-metric-large text-forest-deep font-bold">2 Active</span>
<span className="font-body-sm text-body-sm text-text-secondary">Calibrated daily</span>
</div>
<div className="flex flex-col">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase">Booking Slots</span>
<span className="font-metric-large text-metric-large text-status-serving font-bold">18 Open</span>
<span className="font-body-sm text-body-sm text-text-secondary">High availability</span>
</div>
</div>

<div className="flex flex-wrap items-center justify-between gap-sm pt-xs">
<div className="flex items-center gap-md flex-wrap">
<div className="inline-flex items-center gap-xs bg-canvas-warm px-sm py-base rounded-lg text-text-secondary">
<span className="material-symbols-outlined text-[16px] text-primary">verified</span>
<span className="font-label-md text-label-md">Wheat MSP: <strong className="text-forest-deep">₹2,425/Qtl</strong></span>
</div>
<div className="inline-flex items-center gap-xs bg-canvas-warm px-sm py-base rounded-lg text-text-secondary">
<span className="material-symbols-outlined text-[16px] text-secondary">speed</span>
<span className="font-label-md text-label-md">Average unload: 22 mins</span>
</div>
</div>
<button className="h-touch-min px-lg bg-primary-container hover:bg-forest-deep text-on-primary rounded-xl font-label-lg text-label-lg font-bold flex items-center justify-center gap-xs shadow-sm transition-all w-full sm:w-auto" type="button">
<span>View Centre</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</div>
</div>

<div className="bg-surface-card rounded-xl p-lg shadow-sm hover:shadow-md transition-shadow relative flex flex-col gap-md opacity-95">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-xs">
<div className="flex flex-col">
<div className="flex items-center gap-xs">
<h2 className="font-title-md text-title-md text-forest-deep font-bold">Gharaunda Sub-Yard</h2>
<span className="px-xs py-base rounded bg-surface-container font-label-stamp text-label-stamp text-text-muted">Grain Terminal 3</span>
</div>
<div className="flex items-center gap-xs mt-base text-text-muted font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[16px] text-text-muted">navigation</span>
<span className="font-semibold text-text-secondary">16.2 km away</span>
<span className="text-text-muted">•</span>
<span>Gharaunda Mandi Link Road</span>
</div>
</div>

<div className="inline-flex items-center gap-xs px-sm py-base rounded-full bg-status-weather-hold-bg text-status-weather-hold">
<span className="w-2 h-2 rounded-full bg-status-weather-hold"></span>
<span className="font-label-stamp text-label-stamp font-extrabold uppercase tracking-wide">WEATHER HOLD (मौसम रोक)</span>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-sm bg-status-weather-hold-bg/40 rounded-xl p-md">
<div className="flex flex-col sm:col-span-2">
<span className="font-label-stamp text-label-stamp text-status-weather-hold uppercase font-bold flex items-center gap-base">
<span className="material-symbols-outlined text-[16px]">cloud_sync</span> Intake Suspended
            </span>
<p className="font-body-md text-body-md text-text-secondary mt-base font-medium">
              Heavy unseasonal showers. Outdoor yard rain tarps deployed to protect grain bags. Gate intake paused.
            </p>
</div>
<div className="flex flex-col">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase">Next Available Slot</span>
<span className="font-metric-medium text-metric-medium text-forest-deep font-bold">Tomorrow 08:00 AM</span>
<span className="font-body-sm text-body-sm text-text-muted">Subject to moisture test</span>
</div>
</div>

<div className="flex flex-wrap items-center justify-between gap-sm pt-xs">
<div className="inline-flex items-center gap-xs text-text-muted font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[16px] text-status-weather-hold">info</span>
<span>Do not dispatch vehicles until notification alert clears.</span>
</div>
<button className="h-touch-min px-lg bg-surface-subtle hover:bg-surface-container text-text-primary rounded-xl font-label-lg text-label-lg font-bold flex items-center justify-center gap-xs shadow-sm transition-colors w-full sm:w-auto" type="button">
<span className="material-symbols-outlined text-[18px]">announcement</span>
<span>View Notice (नोटिस देखें)</span>
</button>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col gap-lg lg:sticky lg:top-20">

<div className="bg-surface-card rounded-xl shadow-sm p-md flex flex-col gap-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-xs">
<span className="material-symbols-outlined text-primary text-[20px]">map</span>
<h3 className="font-headline-sm text-headline-sm text-forest-deep font-bold">Mandi Live Map</h3>
</div>
<span className="font-label-stamp text-label-stamp px-xs py-base bg-surface-subtle text-text-secondary rounded">Karnal District</span>
</div>

<div className="relative w-full h-80 rounded-xl overflow-hidden bg-surface-container flex items-center justify-center shadow-inner">

<svg className="absolute inset-0 w-full h-full text-outline-variant/30" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="36" id="grid-pattern" patternUnits="userSpaceOnUse" width="36">
<path d="M 36 0 L 0 0 0 36" fill="none" stroke="currentColor" strokeWidth="0.75"></path>
</pattern>
</defs>
<rect fill="url(#grid-pattern)" height="100%" width="100%"></rect>

<path d="M 40 320 Q 140 180 280 40" fill="none" stroke="#D1DCD0" strokeLinecap="round" strokeWidth="12"></path>
<path d="M 40 320 Q 140 180 280 40" fill="none" stroke="#2b6954" strokeDasharray="8 6" strokeWidth="4"></path>

<path d="M 180 140 Q 240 160 310 200" fill="none" stroke="#D1DCD0" strokeWidth="6"></path>
<path d="M 120 220 Q 70 140 60 70" fill="none" stroke="#D1DCD0" strokeWidth="6"></path>
</svg>

<div className="absolute left-16 bottom-16 flex flex-col items-center group cursor-pointer">
<div className="w-7 h-7 rounded-full bg-forest-deep text-on-primary flex items-center justify-center shadow-md animate-bounce">
<span className="material-symbols-outlined text-[16px]">person_pin_circle</span>
</div>
<span className="mt-base px-xs py-base bg-forest-deep text-on-primary font-label-stamp text-label-stamp rounded font-bold shadow-sm whitespace-nowrap">
              You (Nilokheri)
            </span>
</div>

<div className="absolute left-32 top-36 flex flex-col items-center group cursor-pointer">
<div className="w-8 h-8 rounded-full bg-status-serving text-on-primary flex items-center justify-center shadow-lg ring-4 ring-status-serving-bg">
<span className="material-symbols-outlined text-[18px]">warehouse</span>
</div>
<div className="mt-base px-xs py-base bg-surface-card text-forest-deep font-label-stamp text-label-stamp rounded font-bold shadow-sm whitespace-nowrap flex items-center gap-base">
<span className="w-1.5 h-1.5 rounded-full bg-status-serving"></span> XYZ Hub (4.2 km)
            </div>
</div>

<div className="absolute right-8 top-12 flex flex-col items-center group cursor-pointer">
<div className="w-7 h-7 rounded-full bg-status-waiting text-on-primary flex items-center justify-center shadow-md">
<span className="material-symbols-outlined text-[15px]">domain</span>
</div>
<div className="mt-base px-xs py-base bg-surface-card text-text-secondary font-label-stamp text-label-stamp rounded shadow-sm whitespace-nowrap">
              Karnal (11.5 km)
            </div>
</div>

<div className="absolute left-10 top-14 flex flex-col items-center group cursor-pointer">
<div className="w-7 h-7 rounded-full bg-status-serving text-on-primary flex items-center justify-center shadow-md">
<span className="material-symbols-outlined text-[15px]">inventory_2</span>
</div>
<div className="mt-base px-xs py-base bg-surface-card text-text-secondary font-label-stamp text-label-stamp rounded shadow-sm whitespace-nowrap">
              Taraori (8.8 km)
            </div>
</div>

<div className="absolute right-12 bottom-12 flex flex-col items-center group cursor-pointer">
<div className="w-7 h-7 rounded-full bg-status-weather-hold text-on-primary flex items-center justify-center shadow-md">
<span className="material-symbols-outlined text-[15px]">block</span>
</div>
<div className="mt-base px-xs py-base bg-surface-card text-status-weather-hold font-label-stamp text-label-stamp rounded shadow-sm whitespace-nowrap">
              Gharaunda (Hold)
            </div>
</div>

<div className="absolute bottom-2 left-2 bg-surface-card/90 backdrop-blur-sm px-xs py-base rounded flex items-center gap-xs font-label-stamp text-label-stamp text-text-muted shadow-sm">
<span className="inline-block w-2 h-2 rounded-full bg-status-serving"></span> Open
            <span className="inline-block w-2 h-2 rounded-full bg-status-waiting ml-base"></span> Busy
            <span className="inline-block w-2 h-2 rounded-full bg-status-weather-hold ml-base"></span> Hold
          </div>
</div>

<div className="bg-surface-subtle rounded-xl p-md flex flex-col gap-xs">
<div className="flex items-center justify-between">
<span className="font-label-stamp text-label-stamp uppercase text-status-serving font-bold flex items-center gap-base">
<span className="material-symbols-outlined text-[15px]">recommend</span> Nearest Best Route
            </span>
<span className="font-label-stamp text-label-stamp text-text-muted">12 mins via NH-44</span>
</div>
<h4 className="font-title-md text-title-md text-forest-deep font-bold">XYZ Hub (Gate 2)</h4>
<p className="font-body-sm text-body-sm text-text-secondary">
            Shortest queue clearance for Wheat. Weighbridges 1 &amp; 3 operating with dedicated unloader teams.
          </p>
<Link className="mt-xs inline-flex items-center gap-xs font-label-md text-label-md text-primary font-bold hover:underline" href="https://maps.google.com" rel="noopener noreferrer" target="_blank">
<span className="material-symbols-outlined text-[16px]">directions</span>
<span>Get Turn-by-Turn GPS Directions</span>
</Link>
</div>
</div>

<div className="bg-forest-deep text-on-primary rounded-xl p-lg shadow-sm flex flex-col gap-md relative overflow-hidden">

<span className="material-symbols-outlined absolute -right-4 -bottom-4 text-secondary/30 text-[110px] select-none pointer-events-none">support_agent</span>
<div className="flex items-start gap-sm">
<div className="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-[22px]">call</span>
</div>
<div className="flex flex-col">
<span className="font-label-stamp text-label-stamp uppercase text-tertiary-fixed tracking-wider font-bold">Kisan Sahayata Desk</span>
<h4 className="font-title-md text-title-md font-bold text-on-primary mt-base">Need Yard or Token Help?</h4>
</div>
</div>
<p className="font-body-sm text-body-sm text-surface-container-high">
          Free government toll-free support for weighbridge disputes, moisture check appeals, and instant slot reservation.
        </p>
<div className="bg-surface-card/10 backdrop-blur rounded-lg p-sm flex items-center justify-between">
<div className="flex flex-col">
<span className="font-label-stamp text-label-stamp text-surface-container">Toll-Free Helpline (24x7)</span>
<span className="font-metric-medium text-metric-medium text-tertiary-fixed font-mono font-bold tracking-wider">1800-180-1551</span>
</div>
<Link className="h-10 px-md rounded-lg bg-tertiary-fixed text-forest-deep font-label-md text-label-md font-bold flex items-center gap-base hover:bg-on-primary transition-colors" href="tel:18001801551">
<span className="material-symbols-outlined text-[16px]">call</span> Call Now
          </Link>
</div>
<div className="flex items-center gap-xs text-surface-container-highest font-label-stamp text-label-stamp">
<span className="material-symbols-outlined text-[14px]">info</span>
<span>Languages: Hindi, Punjabi, Haryanvi, English</span>
</div>
</div>
</div>
</div>
</div></main>
  );
}
