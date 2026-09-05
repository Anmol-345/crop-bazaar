/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Page() {
  return (
    <main className="flex-1 overflow-y-auto bg-gray-50"><div className="flex flex-col w-full">

<div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="flex flex-col">
<div className="flex items-center gap-2 mb-2">
<Link href="#" className="inline-flex items-center gap-1 text-primary hover:text-forest-deep transition-colors font-label-lg text-label-lg group" data-path="my-crops" >
<span className="material-symbols-outlined text-[18px] transition-transform group-hover:-translate-x-1">arrow_back</span>
<span>Back to My Crops (वापस सूची पर जाएं)</span>
</Link>
<span className="text-outline-variant">•</span>
<span className="px-2 py-0.5 rounded-full bg-status-confirmed-bg text-status-confirmed font-label-stamp text-label-stamp font-bold">Kisan Verified Portal</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-forest-deep tracking-tight">Add Crop <span className="text-text-secondary font-headline-md text-headline-md font-normal">(नई फसल जोड़ें)</span></h1>
<p className="font-body-md text-body-md text-text-muted mt-1 max-w-[42rem]">
        Enter your harvested or standing crop details to unlock verified mandi procurement slots and fair price benchmarking under MSP guarantee.
      </p>
</div>

<div className="flex items-center gap-3 p-3 bg-surface-card rounded-xl shadow-sm self-start md:self-auto">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]">verified</span>
</div>
<div>
<span className="font-label-stamp text-label-stamp text-text-muted block uppercase tracking-wider">Govt. MSP 2025-26</span>
<div className="flex items-center gap-1.5">
<span className="font-metric-medium text-metric-medium text-forest-deep">₹2,425</span>
<span className="font-label-stamp text-label-stamp text-metric-positive bg-status-serving-bg px-1.5 py-0.5 rounded-md font-bold">+₹150 YoY</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

<div className="lg:col-span-8 flex flex-col gap-6">

<div className="bg-status-waiting-bg/70 p-4 rounded-xl flex items-start gap-3 shadow-sm">
<span className="material-symbols-outlined text-status-waiting text-[24px] mt-0.5 shrink-0">info</span>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-forest-deep font-bold">Grain Moisture Pre-check Notice (अनाज नमी चेतावनी)</span>
<p className="font-body-sm text-body-sm text-text-secondary mt-0.5">
            If harvesting recently, ensure grain moisture is strictly below <strong className="text-forest-deep">12.0%</strong> to prevent gate rejection at APMC automated weighbridges. Moisture tester meters are free at Gate 3.
          </p>
</div>
</div>

<div className="bg-surface-card rounded-xl p-6 shadow-sm flex flex-col gap-8">

<div className="flex flex-col gap-3">
<div className="flex items-center justify-between">
<label className="font-label-lg text-label-lg text-forest-deep flex items-center gap-1">
<span>Crop (फसल का चयन करें)</span>
<span className="text-metric-negative">*</span>
</label>
<span className="font-label-stamp text-label-stamp text-text-muted">Select 1 primary crop</span>
</div>

<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3" id="crop-selector-group">

<button className="crop-chip group relative flex flex-col items-center text-center p-3 rounded-xl bg-surface-container text-forest-deep shadow-sm transition-all focus:outline-none" data-crop="wheat" data-msp="2425" type="button">
<span className="absolute top-2 right-2 w-5 h-5 rounded-full bg-status-serving text-on-primary flex items-center justify-center">
<span className="material-symbols-outlined text-[14px]">check</span>
</span>
<div className="w-12 h-12 rounded-full bg-surface-card flex items-center justify-center mb-2 shadow-sm text-primary group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-[28px]">grass</span>
</div>
<span className="font-label-lg text-label-lg font-bold block">Wheat</span>
<span className="font-label-stamp text-label-stamp text-text-muted">गेहूँ</span>
</button>

<button className="crop-chip group relative flex flex-col items-center text-center p-3 rounded-xl bg-surface-subtle text-text-secondary hover:bg-surface-container-high transition-all focus:outline-none" data-crop="paddy" data-msp="2300" type="button">
<span className="check-icon hidden absolute top-2 right-2 w-5 h-5 rounded-full bg-status-serving text-on-primary items-center justify-center">
<span className="material-symbols-outlined text-[14px]">check</span>
</span>
<div className="w-12 h-12 rounded-full bg-surface-card flex items-center justify-center mb-2 shadow-sm text-text-secondary group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-[28px]">grain</span>
</div>
<span className="font-label-lg text-label-lg font-bold block">Paddy / Rice</span>
<span className="font-label-stamp text-label-stamp text-text-muted">धान</span>
</button>

<button className="crop-chip group relative flex flex-col items-center text-center p-3 rounded-xl bg-surface-subtle text-text-secondary hover:bg-surface-container-high transition-all focus:outline-none" data-crop="mustard" data-msp="5650" type="button">
<span className="check-icon hidden absolute top-2 right-2 w-5 h-5 rounded-full bg-status-serving text-on-primary items-center justify-center">
<span className="material-symbols-outlined text-[14px]">check</span>
</span>
<div className="w-12 h-12 rounded-full bg-surface-card flex items-center justify-center mb-2 shadow-sm text-text-secondary group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-[28px]">spa</span>
</div>
<span className="font-label-lg text-label-lg font-bold block">Mustard</span>
<span className="font-label-stamp text-label-stamp text-text-muted">सरसों</span>
</button>

<button className="crop-chip group relative flex flex-col items-center text-center p-3 rounded-xl bg-surface-subtle text-text-secondary hover:bg-surface-container-high transition-all focus:outline-none" data-crop="maize" data-msp="2090" type="button">
<span className="check-icon hidden absolute top-2 right-2 w-5 h-5 rounded-full bg-status-serving text-on-primary items-center justify-center">
<span className="material-symbols-outlined text-[14px]">check</span>
</span>
<div className="w-12 h-12 rounded-full bg-surface-card flex items-center justify-center mb-2 shadow-sm text-text-secondary group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-[28px]">nutrition</span>
</div>
<span className="font-label-lg text-label-lg font-bold block">Maize</span>
<span className="font-label-stamp text-label-stamp text-text-muted">मक्का</span>
</button>

<button className="crop-chip group relative flex flex-col items-center text-center p-3 rounded-xl bg-surface-subtle text-text-secondary hover:bg-surface-container-high transition-all focus:outline-none" data-crop="other" data-msp="2100" type="button">
<span className="check-icon hidden absolute top-2 right-2 w-5 h-5 rounded-full bg-status-serving text-on-primary items-center justify-center">
<span className="material-symbols-outlined text-[14px]">check</span>
</span>
<div className="w-12 h-12 rounded-full bg-surface-card flex items-center justify-center mb-2 shadow-sm text-text-secondary group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-[28px]">more_horiz</span>
</div>
<span className="font-label-lg text-label-lg font-bold block">Other</span>
<span className="font-label-stamp text-label-stamp text-text-muted">अन्य</span>
</button>
</div>
</div>

<div className="flex flex-col gap-3">
<label className="font-label-lg text-label-lg text-forest-deep flex items-center gap-1">
<span>Quantity &amp; Unit (मात्रा एवं इकाई)</span>
<span className="text-metric-negative">*</span>
</label>
<div className="grid grid-cols-1 sm:grid-cols-12 gap-3">

<div className="sm:col-span-7 relative">
<div className="relative flex items-center">
<input className="w-full h-12 px-4 bg-canvas-warm rounded-xl font-headline-sm text-headline-sm text-forest-deep font-bold placeholder:text-text-muted focus:bg-surface-card focus:shadow-[0_0_0_2px_rgba(21,128,61,0.25)] outline-none transition-all" id="qty-input" min="1" placeholder="0" step="1" type="number" value="50"/>
<span className="absolute right-4 font-label-stamp text-label-stamp text-text-muted uppercase tracking-wider">Weight</span>
</div>
</div>

<div className="sm:col-span-5 relative">
<select className="w-full h-12 px-4 bg-canvas-warm rounded-xl font-label-lg text-label-lg text-forest-deep font-bold focus:bg-surface-card focus:shadow-[0_0_0_2px_rgba(21,128,61,0.25)] outline-none transition-all appearance-none cursor-pointer" id="unit-select">
<option selected={true} value="quintal">Quintal (क्विंटल - 100 kg)</option>
<option value="kg">Kg (किलोग्राम)</option>
<option value="tonnes">Tonnes (टन - 10 Qtl)</option>
</select>
<span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-text-muted">expand_more</span>
</div>
</div>

<div className="p-3 bg-surface-bright rounded-xl flex items-center justify-between flex-wrap gap-2 shadow-sm">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-status-serving text-[20px]">payments</span>
<span className="font-body-sm text-body-sm text-forest-deep">
                Approx. Estimated Lot Value:
              </span>
<span className="font-title-md text-title-md font-bold text-forest-deep" id="calculated-lot-value">₹1,21,250</span>
</div>
<span className="font-label-stamp text-label-stamp text-text-muted">
              (Benchmark: MSP ₹2,425 / Qtl for Karnal Hub)
            </span>
</div>
</div>

<div className="flex flex-col gap-3">
<div className="flex items-center justify-between">
<label className="font-label-lg text-label-lg text-forest-deep flex items-center gap-1">
<span>Expected Procurement Date (संभावित तुलाई तिथि)</span>
<span className="text-metric-negative">*</span>
</label>
<span className="font-label-stamp text-label-stamp text-status-serving font-bold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-status-serving"></span> Slots Available
            </span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">

<div className="sm:col-span-6 relative">
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-4 text-text-muted text-[20px] pointer-events-none">calendar_month</span>
<input className="w-full h-12 pl-11 pr-4 bg-canvas-warm rounded-xl font-body-md text-body-md text-forest-deep font-semibold focus:bg-surface-card focus:shadow-[0_0_0_2px_rgba(21,128,61,0.25)] outline-none transition-all cursor-pointer" id="procurement-date" type="date" value="2026-09-08"/>
</div>
</div>

<div className="sm:col-span-6 flex items-center gap-2">
<button className="date-preset flex-1 h-12 rounded-xl bg-canvas-warm text-text-secondary font-label-md text-label-md hover:bg-surface-container-high transition-colors text-center px-2 py-1" type="button">
                Immediate<br/><span className="font-label-stamp text-label-stamp text-text-muted">आज / कल</span>
</button>
<button className="date-preset active-preset flex-1 h-12 rounded-xl bg-surface-container text-forest-deep font-label-md text-label-md font-bold shadow-sm text-center px-2 py-1" type="button">
                This Week<br/><span className="font-label-stamp text-label-stamp text-primary">इस सप्ताह</span>
</button>
<button className="date-preset flex-1 h-12 rounded-xl bg-canvas-warm text-text-secondary font-label-md text-label-md hover:bg-surface-container-high transition-colors text-center px-2 py-1" type="button">
                Next Week<br/><span className="font-label-stamp text-label-stamp text-text-muted">अगले सप्ताह</span>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

<div className="flex flex-col gap-2">
<label className="font-label-lg text-label-lg text-forest-deep flex items-center gap-1">
<span>District (जिला)</span>
<span className="text-metric-negative">*</span>
</label>
<div className="relative">
<select className="w-full h-12 px-4 bg-canvas-warm rounded-xl font-body-md text-body-md text-forest-deep font-semibold focus:bg-surface-card focus:shadow-[0_0_0_2px_rgba(21,128,61,0.25)] outline-none transition-all appearance-none cursor-pointer">
<option selected={true} value="karnal">Karnal (करनाल) - Haryana</option>
<option value="kurukshetra">Kurukshetra (कुरुक्षेत्र) - Haryana</option>
<option value="kaithal">Kaithal (कैथल) - Haryana</option>
<option value="panipat">Panipat (पानीपत) - Haryana</option>
<option value="ambala">Ambala (अम्बाला) - Haryana</option>
</select>
<span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-text-muted">expand_more</span>
</div>
</div>

<div className="flex flex-col gap-2">
<label className="font-label-lg text-label-lg text-forest-deep flex items-center gap-1">
<span>Assigned APMC Mandi (कृषि उपज मंडी)</span>
<span className="text-metric-negative">*</span>
</label>
<div className="relative">
<select className="w-full h-12 px-4 bg-canvas-warm rounded-xl font-body-md text-body-md text-forest-deep font-semibold focus:bg-surface-card focus:shadow-[0_0_0_2px_rgba(21,128,61,0.25)] outline-none transition-all appearance-none cursor-pointer">
<option selected={true} value="mandi_karnal_main">Grain Market Karnal (Gate 3 Weighbridge)</option>
<option value="mandi_taraori">Taraori Mandi Yard</option>
<option value="mandi_gharaunda">Gharaunda APMC Sub-centre</option>
</select>
<span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-text-muted">expand_more</span>
</div>
</div>
</div>

<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<label className="font-label-lg text-label-lg text-forest-deep">
              Land Area (भूमि क्षेत्रफल) <span className="text-text-muted font-normal">— Optional (ऐच्छिक)</span>
</label>
<span className="font-label-stamp text-label-stamp text-text-muted">Auto-crosschecked with Meri Fasal Mera Byora</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
<div className="sm:col-span-8 relative flex items-center">
<span className="material-symbols-outlined absolute left-4 text-text-muted text-[20px]">landscape</span>
<input className="w-full h-12 pl-11 pr-4 bg-canvas-warm rounded-xl font-body-md text-body-md text-forest-deep font-semibold focus:bg-surface-card focus:shadow-[0_0_0_2px_rgba(21,128,61,0.25)] outline-none transition-all" placeholder="0.0" type="text" value="4.5"/>
</div>
<div className="sm:col-span-4 relative">
<select className="w-full h-12 px-4 bg-canvas-warm rounded-xl font-body-md text-body-md text-forest-deep font-semibold focus:bg-surface-card focus:shadow-[0_0_0_2px_rgba(21,128,61,0.25)] outline-none transition-all appearance-none cursor-pointer">
<option selected={true}>Acres (एकड़)</option>
<option>Bigha (बीघा)</option>
<option>Hectares (हेक्टेयर)</option>
</select>
<span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-text-muted">expand_more</span>
</div>
</div>
<p className="font-body-sm text-body-sm text-text-muted flex items-center gap-1.5 mt-1">
<span className="material-symbols-outlined text-[16px] text-secondary">verified_user</span>
<span>Helps mandi officers automatically verify yield ratio (approx 22-25 Qtl/Acre) against your registered Khasra record #HR-KNL-88192.</span>
</p>
</div>

<div className="p-4 rounded-xl bg-status-confirmed-bg flex items-start gap-3 shadow-sm">
<span className="material-symbols-outlined text-status-confirmed text-[22px] shrink-0 mt-0.5">fingerprint</span>
<div className="flex flex-col flex-1">
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg text-forest-deep font-bold">Kisan Credit ID Verified</span>
<span className="font-label-stamp text-label-stamp bg-status-serving-bg text-status-serving px-2 py-0.5 rounded-full font-bold">Aadhaar Linked</span>
</div>
<p className="font-body-sm text-body-sm text-text-secondary mt-1">
              Token slot will generate for farmer: <strong className="text-forest-deep">Ramesh Singh (****-****-4912)</strong>. Make sure bank account ending in <strong className="text-forest-deep">0941</strong> is active for direct DBT subsidy transfer.
            </p>
</div>
</div>

<div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
<button className="w-full sm:flex-1 h-12 px-6 rounded-xl bg-primary-container hover:bg-forest-deep text-on-primary font-label-lg text-label-lg flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.99]" id="submit-crop-btn" type="button">
<span className="material-symbols-outlined text-[20px]">task_alt</span>
<span>Save Crop &amp; Book Slot (सुरक्षित करें और केंद्र चुनें)</span>
</button>
<button className="w-full sm:w-auto h-12 px-6 rounded-xl bg-canvas-warm hover:bg-surface-container-high text-text-secondary font-label-lg text-label-lg flex items-center justify-center gap-1.5 transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">save</span>
<span>Save as Draft</span>
</button>
<button className="w-full sm:w-auto h-12 px-4 rounded-xl text-metric-negative hover:bg-error-container/50 font-label-lg text-label-lg flex items-center justify-center transition-colors" type="button">
            Cancel (रद्द करें)
          </button>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col gap-6">

<div className="bg-surface-card rounded-xl p-5 shadow-sm flex flex-col gap-4">
<div className="flex items-center gap-2.5">
<div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[20px]">stars</span>
</div>
<div>
<h3 className="font-title-md text-title-md text-forest-deep font-bold">Why register early?</h3>
<span className="font-label-stamp text-label-stamp text-text-muted">पंजीकरण के क्या फायदे हैं?</span>
</div>
</div>
<div className="space-y-3.5">

<div className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-status-serving-bg text-status-serving flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[16px]">timer</span>
</div>
<div>
<span className="font-label-md text-label-md text-forest-deep block">Guaranteed Weighbridge Slot</span>
<p className="font-body-sm text-body-sm text-text-muted mt-0.5">
                Skip 6+ hour physical tractor queues during peak procurement days with VIP Gate 3 pass.
              </p>
</div>
</div>

<div className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-status-serving-bg text-status-serving flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[16px]">notifications_active</span>
</div>
<div>
<span className="font-label-md text-label-md text-forest-deep block">Instant Price Surge Alerts</span>
<p className="font-body-sm text-body-sm text-text-muted mt-0.5">
                Receive SMS updates the moment open auctions cross MSP minimum floor rates in nearby mandis.
              </p>
</div>
</div>

<div className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-status-serving-bg text-status-serving flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[16px]">account_balance</span>
</div>
<div>
<span className="font-label-md text-label-md text-forest-deep block">48-Hour DBT Payout Guarantee</span>
<p className="font-body-sm text-body-sm text-text-muted mt-0.5">
                Zero commission, direct government remittance into your linked Jan Dhan / SBI Kisan account.
              </p>
</div>
</div>
</div>
</div>

<div className="bg-surface-card rounded-xl p-5 shadow-sm flex flex-col gap-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-status-waiting text-[20px]">traffic</span>
<span className="font-label-lg text-label-lg text-forest-deep font-bold">Karnal Mandi Traffic</span>
</div>
<span className="px-2 py-0.5 rounded-full bg-status-waiting-bg text-status-waiting font-label-stamp text-label-stamp font-bold">Moderate (42 Tractors)</span>
</div>
<div className="flex items-center gap-1.5 pt-1">
<div className="h-2 flex-1 rounded-full bg-metric-positive"></div>
<div className="h-2 flex-1 rounded-full bg-status-waiting"></div>
<div className="h-2 flex-1 rounded-full bg-surface-container"></div>
</div>
<div className="flex items-center justify-between font-label-stamp text-label-stamp text-text-muted mt-1">
<span>Gate 1: Fast (15m)</span>
<span>Weighbridge 3: 35m avg</span>
</div>
</div>

<div className="bg-surface-card rounded-xl p-4 shadow-sm flex items-center gap-4">
<img className="w-20 h-20 rounded-xl object-cover shrink-0 shadow-sm" data-alt="Close up photograph of golden wheat field during harvest in Haryana, India with warm natural morning sunlight highlighting lush ripe ears of grain and a clear sky." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYtN8nxqregkP2xoIXAV4wJjZHvE6JDJe0jWbY-eDjscUEm19j-6mPuzDCpBMToOFSJ9SZCWF2_NHF4CZnZEIK6n1k2jL5VB1UD7qctMWW1jxb9YPRMfsfj4o5QKOU4xIETSVCwppMo3oGj81jLtKS6qRDqtnY6weCydrkJhU4s62KA9t-IejuFf-JJotkZn6m2PYRwIcGIqs0c9NKIX9v5iRgXV8lUbW-Uma3GrRYjBRcCYSTa2-b"/>
<div className="flex flex-col">
<span className="font-label-stamp text-label-stamp text-primary font-bold uppercase tracking-wider">Mandi Quality Standard</span>
<span className="font-label-lg text-label-lg text-forest-deep font-bold mt-0.5">Grade A Sharbati / DBW-303</span>
<span className="font-body-sm text-body-sm text-text-muted mt-0.5">Max acceptable foreign matter: 0.75%</span>
</div>
</div>

<div className="bg-surface-container rounded-xl p-5 shadow-sm flex flex-col gap-3">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-forest-deep text-on-primary flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">support_agent</span>
</div>
<div>
<span className="font-label-lg text-label-lg text-forest-deep font-bold block">Need Help Filling Form?</span>
<span className="font-label-stamp text-label-stamp text-text-muted">फॉर्म भरने में सहायता चाहिए?</span>
</div>
</div>
<p className="font-body-sm text-body-sm text-text-secondary leading-relaxed">
          Tap the floating <strong>Awaaz Assistant</strong> mic button at the bottom or speak directly with your local Haryana Krishi Kendra agent.
        </p>
<div className="pt-2 flex flex-col gap-2">
<Link className="h-11 px-4 rounded-xl bg-surface-card text-forest-deep font-label-lg text-label-lg flex items-center justify-center gap-2 hover:bg-canvas-warm transition-colors shadow-sm" href="tel:18001801551">
<span className="material-symbols-outlined text-[18px] text-primary">call</span>
<span className="font-bold tracking-wide">Toll Free: 1800-180-1551</span>
</Link>
<span className="text-center font-label-stamp text-label-stamp text-text-muted">Operational Monday to Saturday (7 AM - 8 PM)</span>
</div>
</div>
</div>
</div>
</div>
</main>
  );
}
