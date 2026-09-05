"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

export default function helpandsupportPage() {
  return (
    <>
      <div className="flex flex-col w-full">

<div className="relative w-full bg-forest-deep text-on-primary px-gutter-desktop py-xl overflow-hidden">

<div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-primary/20 blur-3xl pointer-events-none"></div>
<div className="absolute left-1/3 -bottom-24 w-80 h-80 rounded-full bg-primary-fixed-dim/10 blur-2xl pointer-events-none"></div>
<div className="relative max-w-container-max mx-auto flex flex-col gap-lg z-10">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-md">
<div className="flex flex-col gap-xs max-w-2xl">
<div className="flex items-center gap-xs">
<span className="px-sm py-base rounded-full bg-status-serving-bg text-status-serving font-label-stamp text-label-stamp font-bold tracking-wide uppercase">24x7 Sahayata Kendra</span>
<span className="text-text-muted font-label-stamp text-label-stamp">• करनाल एवं उत्तर भारत प्रभाग</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-white tracking-tight">Help &amp; Support <span className="font-normal text-primary-fixed-dim">(सहायता केंद्र)</span></h1>
<p className="font-body-lg text-body-lg text-surface-container-high leading-relaxed">
            Get quick answers to procurement, payment, and rental queries, or reach our 24x7 Kisan Desk directly.
          </p>
</div>

<div className="flex items-center gap-sm bg-surface-card/10 backdrop-blur-md px-md py-sm rounded-xl self-start md:self-auto">
<span className="relative flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-metric-positive opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-metric-positive"></span>
</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-white">Helpline Lines Active</span>
<span className="font-label-stamp text-label-stamp text-surface-container">Avg. wait time: &lt; 45 secs</span>
</div>
</div>
</div>

<div className="w-full max-w-3xl bg-surface-card rounded-xl p-xs shadow-xl flex items-center gap-sm focus-within:ring-2 focus-within:ring-primary-container transition-all">
<div className="pl-sm text-primary flex items-center pointer-events-none">
<span className="material-symbols-outlined text-[26px]">search</span>
</div>
<input className="w-full py-sm px-xs bg-transparent font-body-lg text-body-lg text-text-primary placeholder:text-text-muted outline-none" id="help-search-input" placeholder="सवाल या समस्या खोजें (e.g. टोकन कैसे रद्द करें, DBT भुगतान में देरी, ट्रैक्टर किराया)..." type="text"/>
<button className="hidden sm:inline-flex items-center gap-xs px-lg py-sm bg-primary text-on-primary font-label-lg text-label-lg rounded-lg hover:bg-forest-deep transition-colors shrink-0 shadow-sm" id="help-search-btn" type="button">
<span>सर्च करें</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</div>

<div className="flex flex-wrap items-center gap-xs text-surface-container font-label-stamp text-label-stamp">
<span className="text-surface-container-high font-medium">अक्सर पूछे जाने वाले:</span>
<button className="faq-tag-btn px-sm py-base rounded-full bg-surface-card/15 hover:bg-surface-card/25 text-white transition-colors" type="button">DBT समय सीमा</button>
<button className="faq-tag-btn px-sm py-base rounded-full bg-surface-card/15 hover:bg-surface-card/25 text-white transition-colors" type="button">नमी जांच (12% Limit)</button>
<button className="faq-tag-btn px-sm py-base rounded-full bg-surface-card/15 hover:bg-surface-card/25 text-white transition-colors" type="button">गेट पास रद्दीकरण</button>
<button className="faq-tag-btn px-sm py-base rounded-full bg-surface-card/15 hover:bg-surface-card/25 text-white transition-colors" type="button">CHC कंबाइन बुकिंग</button>
</div>
</div>
</div>

<div className="max-w-container-max mx-auto w-full px-gutter-desktop py-xl flex flex-col gap-2xl">

<div className="flex flex-col gap-md">
<div className="flex items-center justify-between">
<div>
<span className="font-label-stamp text-label-stamp uppercase tracking-widest text-primary font-bold">सहायता विषय</span>
<h2 className="font-headline-md text-headline-md text-text-primary">Quick Help Categories</h2>
</div>
<span className="text-text-muted font-body-sm text-body-sm hidden md:inline">Select a topic to view step-by-step guides</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">

<div className="group relative bg-surface-card rounded-xl p-lg shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between">
<div className="flex flex-col gap-sm">
<div className="w-12 h-12 rounded-xl bg-status-serving-bg text-primary flex items-center justify-center transition-transform group-hover:scale-105">
<span className="material-symbols-outlined text-[28px]" >warehouse</span>
</div>
<div className="flex flex-col">
<h3 className="font-title-md text-title-md text-text-primary group-hover:text-primary transition-colors">Procurement &amp; Slots</h3>
<span className="font-label-stamp text-label-stamp text-text-muted">फसल खरीद व स्लॉट</span>
</div>
<p className="font-body-sm text-body-sm text-text-secondary line-clamp-2">
              Token generation, moisture standards, weighbridge entry rules &amp; mandi schedule.
            </p>
</div>
<div className="mt-md pt-sm flex items-center justify-between text-primary font-label-md text-label-md">
<span>6 मार्गदर्शिकाएँ</span>
<span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</div>
</div>

<div className="group relative bg-surface-card rounded-xl p-lg shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between">
<div className="flex flex-col gap-sm">
<div className="w-12 h-12 rounded-xl bg-status-confirmed-bg text-status-confirmed flex items-center justify-center transition-transform group-hover:scale-105">
<span className="material-symbols-outlined text-[28px]" >payments</span>
</div>
<div className="flex flex-col">
<h3 className="font-title-md text-title-md text-text-primary group-hover:text-primary transition-colors">Payments &amp; DBT</h3>
<span className="font-label-stamp text-label-stamp text-text-muted">भुगतान व डीबीटी</span>
</div>
<p className="font-body-sm text-body-sm text-text-secondary line-clamp-2">
              PFMS status tracking, J-Form settlement, UTR verification &amp; Aadhaar-linked bank issues.
            </p>
</div>
<div className="mt-md pt-sm flex items-center justify-between text-primary font-label-md text-label-md">
<span>8 मार्गदर्शिकाएँ</span>
<span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</div>
</div>

<div className="group relative bg-surface-card rounded-xl p-lg shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between">
<div className="flex flex-col gap-sm">
<div className="w-12 h-12 rounded-xl bg-status-waiting-bg text-status-waiting flex items-center justify-center transition-transform group-hover:scale-105">
<span className="material-symbols-outlined text-[28px]" >agriculture</span>
</div>
<div className="flex flex-col">
<h3 className="font-title-md text-title-md text-text-primary group-hover:text-primary transition-colors">Equipment Rental</h3>
<span className="font-label-stamp text-label-stamp text-text-muted">उपकरण व मशीनरी</span>
</div>
<p className="font-body-sm text-body-sm text-text-secondary line-clamp-2">
              Tractor delivery dispatch, implement pre-inspection, hourly rate charts &amp; CHC subsidies.
            </p>
</div>
<div className="mt-md pt-sm flex items-center justify-between text-primary font-label-md text-label-md">
<span>5 मार्गदर्शिकाएँ</span>
<span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</div>
</div>

<div className="group relative bg-surface-card rounded-xl p-lg shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between">
<div className="flex flex-col gap-sm">
<div className="w-12 h-12 rounded-xl bg-status-called-bg text-status-called flex items-center justify-center transition-transform group-hover:scale-105">
<span className="material-symbols-outlined text-[28px]" >badge</span>
</div>
<div className="flex flex-col">
<h3 className="font-title-md text-title-md text-text-primary group-hover:text-primary transition-colors">Account &amp; e-KYC</h3>
<span className="font-label-stamp text-label-stamp text-text-muted">खाता व सत्यापन</span>
</div>
<p className="font-body-sm text-body-sm text-text-secondary line-clamp-2">
              Land record parwana (जमाबंदी), Khasra Girdawari corrections &amp; mobile link update.
            </p>
</div>
<div className="mt-md pt-sm flex items-center justify-between text-primary font-label-md text-label-md">
<span>4 मार्गदर्शिकाएँ</span>
<span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-lg items-start">

<div className="lg:col-span-8 flex flex-col gap-md">
<div className="flex items-center justify-between">
<div>
<span className="font-label-stamp text-label-stamp uppercase tracking-widest text-primary font-bold">समाधान निर्देशिका</span>
<h2 className="font-headline-md text-headline-md text-text-primary">Frequently Asked Questions</h2>
</div>
<span className="px-sm py-base rounded-full bg-surface-subtle font-label-stamp text-label-stamp text-text-muted">Updated today 09:30 AM</span>
</div>

<div className="flex flex-col gap-sm" id="faq-container">

<div className="faq-item bg-surface-card rounded-xl shadow-sm overflow-hidden transition-all">
<button className="faq-trigger w-full px-lg py-md flex items-center justify-between gap-md text-left select-none" type="button">
<div className="flex items-center gap-sm">
<span className="w-8 h-8 rounded-full bg-status-serving-bg text-primary flex items-center justify-center font-label-lg text-label-lg font-bold shrink-0">1</span>
<span className="font-title-md text-title-md text-text-primary">How long does DBT transfer take after crop weighment?</span>
</div>
<span className="faq-chevron material-symbols-outlined text-text-muted transition-transform duration-200">expand_less</span>
</button>
<div className="faq-content px-lg pb-lg flex flex-col gap-sm">
<div className="p-md rounded-xl bg-status-serving-bg/40 flex flex-col sm:flex-row gap-md items-start">
<span className="material-symbols-outlined text-status-serving text-[24px] shrink-0 mt-0.5" >verified</span>
<div className="flex flex-col gap-xs">
<p className="font-body-md text-body-md text-text-primary">
                    DBT payment is processed directly via the Public Financial Management System (PFMS) into your Aadhaar-seeded primary bank account within <strong>24 to 48 hours</strong> following weighbridge confirmation and automated J-Form issuance.
                  </p>
<p className="font-body-sm text-body-sm text-text-secondary">
                    तौल पर्ची (Weighment slip) कटने के 24-48 घंटों के अंदर राशि सीधे बैंक खाते में प्रेषित हो जाती है। आप अपने SMS में दिए गए 16-अंकों के UTR नंबर द्वारा 'Payments' टैब में रीयल-टाइम स्थिति देख सकते हैं।
                  </p>
</div>
</div>
</div>
</div>

<div className="faq-item bg-surface-card rounded-xl shadow-sm overflow-hidden transition-all">
<button className="faq-trigger w-full px-lg py-md flex items-center justify-between gap-md text-left select-none" type="button">
<div className="flex items-center gap-sm">
<span className="w-8 h-8 rounded-full bg-surface-subtle text-text-muted flex items-center justify-center font-label-lg text-label-lg font-bold shrink-0">2</span>
<span className="font-title-md text-title-md text-text-primary">What if moisture level exceeds 12% at the procurement centre?</span>
</div>
<span className="faq-chevron material-symbols-outlined text-text-muted transition-transform duration-200">expand_more</span>
</button>
<div className="faq-content hidden px-lg pb-lg flex flex-col gap-sm">
<div className="p-md rounded-xl bg-status-waiting-bg/40 flex flex-col sm:flex-row gap-md items-start">
<span className="material-symbols-outlined text-status-waiting text-[24px] shrink-0 mt-0.5" >info</span>
<div className="flex flex-col gap-xs">
<p className="font-body-md text-body-md text-text-primary">
                    Official procurement norms mandate maximum 12.0% moisture content for wheat and paddy. If initial moisture meter reads higher, your vehicle is directed to Mandi Deck Sheds B &amp; C for complimentary mechanized or sun aeration.
                  </p>
<p className="font-body-sm text-body-sm text-text-secondary">
                    यदि नमी 12% से अधिक है, तो मंडी परिसर में सुखाने के लिए 4 घंटे का निःशुल्क शेड स्पेस दिया जाता है। सुखाने के पश्चात उसी टोकन पर पुनः परीक्षण निःशुल्क किया जाएगा।
                  </p>
</div>
</div>
</div>
</div>

<div className="faq-item bg-surface-card rounded-xl shadow-sm overflow-hidden transition-all">
<button className="faq-trigger w-full px-lg py-md flex items-center justify-between gap-md text-left select-none" type="button">
<div className="flex items-center gap-sm">
<span className="w-8 h-8 rounded-full bg-surface-subtle text-text-muted flex items-center justify-center font-label-lg text-label-lg font-bold shrink-0">3</span>
<span className="font-title-md text-title-md text-text-primary">Can I reschedule my procurement slot if weather turns bad?</span>
</div>
<span className="faq-chevron material-symbols-outlined text-text-muted transition-transform duration-200">expand_more</span>
</button>
<div className="faq-content hidden px-lg pb-lg flex flex-col gap-sm">
<div className="p-md rounded-xl bg-status-confirmed-bg/40 flex flex-col sm:flex-row gap-md items-start">
<span className="material-symbols-outlined text-status-confirmed text-[24px] shrink-0 mt-0.5" >event_repeat</span>
<div className="flex flex-col gap-xs">
<p className="font-body-md text-body-md text-text-primary">
                    Yes. Under CropBazaar’s Fair Weather Assurance, you can cancel or reschedule your gate pass slot up to <strong>2 hours before</strong> your allocated window without losing priority or incurring penalties.
                  </p>
<p className="font-body-sm text-body-sm text-text-secondary">
                    मौसम खराब होने या बारिश की चेतावनी पर 'Live Queue' सेक्शन में जाकर 'Reschedule Slot' चुनें। अगली उपलब्ध तारीख आपकी प्राथमिकता के आधार पर तुरंत आरक्षित हो जाएगी।
                  </p>
</div>
</div>
</div>
</div>

<div className="faq-item bg-surface-card rounded-xl shadow-sm overflow-hidden transition-all">
<button className="faq-trigger w-full px-lg py-md flex items-center justify-between gap-md text-left select-none" type="button">
<div className="flex items-center gap-sm">
<span className="w-8 h-8 rounded-full bg-surface-subtle text-text-muted flex items-center justify-center font-label-lg text-label-lg font-bold shrink-0">4</span>
<span className="font-title-md text-title-md text-text-primary">How is tractor delivery synchronized with my mandi token?</span>
</div>
<span className="faq-chevron material-symbols-outlined text-text-muted transition-transform duration-200">expand_more</span>
</button>
<div className="faq-content hidden px-lg pb-lg flex flex-col gap-sm">
<div className="p-md rounded-xl bg-status-serving-bg/40 flex flex-col sm:flex-row gap-md items-start">
<span className="material-symbols-outlined text-primary text-[24px] shrink-0 mt-0.5" >sync</span>
<div className="flex flex-col gap-xs">
<p className="font-body-md text-body-md text-text-primary">
                    When booking rental equipment with Mandi Delivery option checked, Custom Hiring Centers (CHC) automatically receive your token schedule, dispatching haulage trailers to your geo-tagged farm coordinates 90 minutes before gate departure.
                  </p>
<p className="font-body-sm text-body-sm text-text-secondary">
                    टोकन समय के साथ ट्रैक्टर/ट्रॉली की स्वचालित मैपिंग होती है ताकि मंडी गेट पर वाहन विलंब शुल्क न लगे।
                  </p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col gap-md">

<div className="bg-surface-card rounded-xl p-lg shadow-sm flex flex-col gap-md">
<div className="flex items-center justify-between">
<span className="font-label-stamp text-label-stamp uppercase font-bold text-status-serving bg-status-serving-bg px-sm py-base rounded-full">On-Ground Officer</span>
<span className="material-symbols-outlined text-text-muted text-[18px]">verified_user</span>
</div>
<div className="flex items-center gap-md">
<img className="w-16 h-16 rounded-full object-cover shrink-0 shadow-sm" data-alt="Close up warm documentary portrait of Sh. Virendra Sharma, a dedicated senior agricultural procurement yard superintendent in a clean olive green safari uniform standing at Karnal Mandi grain station in bright morning daylight, respectful, professional, trusted." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhiDfIw84-6Vx9reclaR0nf143CtynNXMefgPNispE_4PFheLjEqvm52UH1u0M7mxmH6kGQpuHWpzlSIR49u9wuIil1NRAAqrWSxdrspuJHQYeq1KqSaQav851Lqp5ylwZrTjY_C_dNwvc2H13aoDmwVcQbSE_zLKdes76aq4PG7ino7j4SrvIvhYTmSlT5CoBm4LQt_j1GJEWr0S4PzFyeWAV66uc7hb7_YZQVvZ8UGJDUXodOubc"/>
<div className="flex flex-col">
<h4 className="font-title-md text-title-md text-text-primary">Sh. Virendra Sharma</h4>
<span className="font-body-sm text-body-sm text-text-muted">Center Procurement Lead</span>
<span className="font-label-stamp text-label-stamp text-primary font-semibold mt-base">Karnal Central Yard 3</span>
</div>
</div>
<div className="p-sm rounded-lg bg-surface-subtle flex flex-col gap-xs">
<div className="flex items-center justify-between text-text-secondary font-body-sm text-body-sm">
<span className="flex items-center gap-xs"><span className="material-symbols-outlined text-[16px] text-text-muted">call</span> Direct Yard Desk</span>
<a className="font-semibold text-text-primary hover:text-primary transition-colors" href="tel:+911842298801">+91 184-229-8801</a>
</div>
<div className="flex items-center justify-between text-text-secondary font-body-sm text-body-sm">
<span className="flex items-center gap-xs"><span className="material-symbols-outlined text-[16px] text-text-muted">schedule</span> Operating Hours</span>
<span className="font-medium text-text-primary">06:00 AM – 09:00 PM</span>
</div>
</div>
<p className="font-body-sm text-body-sm text-text-secondary">
            For moisture disputes, weight calibration verification, or physical token overrides at Gate 3.
          </p>
<a className="w-full flex items-center justify-center gap-xs py-sm bg-surface-subtle hover:bg-surface-container rounded-lg font-label-lg text-label-lg text-text-primary transition-colors" href="tel:+911842298801">
<span className="material-symbols-outlined text-[18px]">call</span>
<span>Call Yard Office</span>
</a>
</div>

<div className="relative rounded-xl overflow-hidden shadow-sm aspect-4/3 flex flex-col justify-end p-md text-white group">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Wide vibrant photograph of an active Indian wheat procurement mandi with organized golden grain stacks, certified electronic weighbridge terminal with digital display, farmers interacting peacefully with government procurement officials under shaded pavilions, sunny clear day." ></div>
<div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/60 to-transparent"></div>
<div className="relative z-10 flex flex-col gap-xs">
<span className="font-label-stamp text-label-stamp uppercase font-bold text-primary-fixed tracking-wider">Video Guide • वीडियो सहायता</span>
<h4 className="font-title-md text-title-md text-white font-semibold">How to weigh &amp; get instant digital J-Form in 7 mins</h4>
<div className="flex items-center gap-xs text-surface-container-high font-body-sm text-body-sm mt-xs">
<span className="material-symbols-outlined text-[18px] text-status-serving-bg" >play_circle</span>
<span>Watch Hindi Tutorial (3:45 mins)</span>
</div>
</div>
</div>
</div>
</div>

<div className="bg-surface-card rounded-xl shadow-md p-lg lg:p-xl flex flex-col gap-xl relative overflow-hidden">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-sm">
<div className="flex flex-col gap-xs">
<div className="flex items-center gap-xs text-status-serving">
<span className="material-symbols-outlined text-[20px]" >support_agent</span>
<span className="font-label-stamp text-label-stamp uppercase font-bold tracking-widest">Kisan Sahayata Desk</span>
</div>
<h2 className="font-headline-md text-headline-md text-text-primary">Direct Assistance &amp; Escalations</h2>
</div>
<div className="flex items-center gap-xs">
<span className="px-sm py-base rounded-full bg-status-serving-bg text-status-serving font-label-stamp text-label-stamp font-bold">24x7 Toll Free</span>
<span className="px-sm py-base rounded-full bg-surface-subtle text-text-secondary font-label-stamp text-label-stamp">3 Regional Dialects</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-md">

<div className="flex flex-col justify-between p-lg rounded-xl bg-status-serving-bg/30 hover:bg-status-serving-bg/50 transition-colors gap-md">
<div className="flex flex-col gap-xs">
<div className="w-10 h-10 rounded-lg bg-status-serving text-white flex items-center justify-center mb-xs shadow-sm">
<span className="material-symbols-outlined text-[22px]">phone_in_talk</span>
</div>
<span className="font-label-md text-label-md text-text-secondary uppercase">Toll-free Kisan Helpline</span>
<a className="font-metric-large text-metric-large text-primary tracking-tight hover:underline" href="tel:18001801551">1800-180-1551</a>
<p className="font-body-sm text-body-sm text-text-muted mt-base">
              Available 24x7 in Hindi, Punjabi &amp; English. Direct connection to verified mandi agrarians.
            </p>
</div>
<a className="flex items-center justify-center gap-xs py-sm bg-primary text-on-primary rounded-lg font-label-lg text-label-lg hover:bg-forest-deep transition-colors shadow-sm" href="tel:18001801551">
<span className="material-symbols-outlined text-[18px]">call</span>
<span>Call Toll Free Now</span>
</a>
</div>

<div className="flex flex-col justify-between p-lg rounded-xl bg-surface-subtle hover:bg-surface-container transition-colors gap-md">
<div className="flex flex-col gap-xs">
<div className="w-10 h-10 rounded-lg bg-secondary text-white flex items-center justify-center mb-xs shadow-sm">
<span className="material-symbols-outlined text-[22px]">chat</span>
</div>
<span className="font-label-md text-label-md text-text-secondary uppercase">WhatsApp Assistant</span>
<a className="font-metric-large text-metric-large text-text-primary tracking-tight hover:text-primary transition-colors" href="https://wa.me/919812045678" rel="noopener noreferrer" target="_blank">+91 98120 45678</a>
<p className="font-body-sm text-body-sm text-text-muted mt-base">
              Send your Token Slip photo or J-Form receipt for automated resolution in 2 minutes.
            </p>
</div>
<a className="flex items-center justify-center gap-xs py-sm bg-surface-card text-text-primary hover:bg-white rounded-lg font-label-lg text-label-lg shadow-sm transition-colors" href="https://wa.me/919812045678" rel="noopener noreferrer" target="_blank">
<span className="material-symbols-outlined text-[18px] text-metric-positive">forum</span>
<span>WhatsApp Chat</span>
</a>
</div>

<div className="flex flex-col justify-between p-lg rounded-xl bg-surface-subtle hover:bg-surface-container transition-colors gap-md">
<div className="flex flex-col gap-xs">
<div className="w-10 h-10 rounded-lg bg-forest-deep text-white flex items-center justify-center mb-xs shadow-sm">
<span className="material-symbols-outlined text-[22px]">assignment_turned_in</span>
</div>
<span className="font-label-md text-label-md text-text-secondary uppercase">Formal Complaint / Grievance</span>
<span className="font-metric-medium text-metric-medium text-text-primary">शिकायत या अपील दर्ज करें</span>
<p className="font-body-sm text-body-sm text-text-muted mt-base">
              Guaranteed escalation to District Agricultural Marketing Board Officer within 12 hours.
            </p>
</div>
<button className="flex items-center justify-center gap-xs py-sm bg-forest-deep text-on-primary rounded-lg font-label-lg text-label-lg hover:bg-black transition-colors shadow-sm" id="open-ticket-modal-btn" type="button">
<span className="material-symbols-outlined text-[18px]">report_problem</span>
<span>Raise Support Ticket</span>
</button>
</div>
</div>

<div className="p-md rounded-xl bg-status-confirmed-bg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-sm">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-status-confirmed text-[22px] shrink-0">campaign</span>
<p className="font-body-sm text-body-sm text-status-confirmed">
<strong>Mandi Notice:</strong> Karnal Gate 3 weighing scales undergo daily calibration audit from 01:30 PM to 02:00 PM. Gate 1 &amp; 2 remain operational.
          </p>
</div>
<span className="font-label-stamp text-label-stamp text-status-confirmed font-bold shrink-0 uppercase tracking-wide">Valid for Today</span>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 flex items-center justify-center bg-forest-deep/60 backdrop-blur-sm hidden p-md" id="ticket-modal">
<div className="bg-surface-card rounded-xl shadow-2xl max-w-lg w-full p-lg sm:p-xl flex flex-col gap-md relative animate-in fade-in zoom-in-95 duration-200">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-stamp text-label-stamp uppercase font-bold text-primary">New Grievance Case</span>
<h3 className="font-headline-sm text-headline-sm text-text-primary">शिकायत दर्ज करें (Raise Ticket)</h3>
</div>
<button className="p-xs text-text-muted hover:text-text-primary rounded-lg hover:bg-surface-subtle transition-colors" id="close-ticket-modal-btn" type="button">
<span className="material-symbols-outlined text-[20px]">close</span>
</button>
</div>
<form className="flex flex-col gap-md" id="ticket-form">
<div className="flex flex-col gap-xs">
<label className="font-label-md text-label-md text-text-primary">समस्या की श्रेणी (Issue Category)</label>
<select className="w-full h-touch-min px-md bg-surface-subtle rounded-xl font-body-sm text-body-sm text-text-primary outline-none focus:bg-surface-card transition-all">
<option value="dbt">DBT Payment Delayed / J-Form Miscalculation</option>
<option value="weighment">Moisture Test / Weighbridge Discrepancy</option>
<option value="token">Token Slot Rescheduling Issue</option>
<option value="equipment">Tractor Rental / Implement Non-arrival</option>
<option value="ekyc">Land Record (Parwana) Verification Delay</option>
</select>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
<div className="flex flex-col gap-xs">
<label className="font-label-md text-label-md text-text-primary">Token / UTR No. (वैकल्पिक)</label>
<input className="w-full h-touch-min px-md bg-surface-subtle rounded-xl font-body-sm text-body-sm text-text-primary outline-none focus:bg-surface-card transition-all" placeholder="e.g. TKN-KR-9482" type="text"/>
</div>
<div className="flex flex-col gap-xs">
<label className="font-label-md text-label-md text-text-primary">Mobile Number</label>
<input className="w-full h-touch-min px-md bg-surface-subtle rounded-xl font-body-sm text-body-sm text-text-primary outline-none focus:bg-surface-card transition-all" type="tel" value="+91 98765 43210"/>
</div>
</div>
<div className="flex flex-col gap-xs">
<label className="font-label-md text-label-md text-text-primary">समस्या का विवरण (Brief Description)</label>
<textarea className="w-full p-md bg-surface-subtle rounded-xl font-body-sm text-body-sm text-text-primary outline-none focus:bg-surface-card transition-all resize-none" placeholder="कृपा करके अपनी समस्या या मंडी गेट पर आई असुविधा का विवरण लिखें..." rows={3}></textarea>
</div>
<div className="p-sm bg-status-serving-bg/50 rounded-lg flex items-center gap-sm">
<span className="material-symbols-outlined text-status-serving text-[20px]">check_circle</span>
<span className="font-body-sm text-body-sm text-text-primary">Ticket acknowledgment will be sent via SMS immediately.</span>
</div>
<div className="flex items-center justify-end gap-sm pt-xs">
<button className="px-lg py-sm bg-surface-subtle hover:bg-surface-container rounded-lg font-label-lg text-label-lg text-text-secondary transition-colors" id="cancel-ticket-modal-btn" type="button">
            Cancel
          </button>
<button className="px-lg py-sm bg-primary hover:bg-forest-deep text-on-primary rounded-lg font-label-lg text-label-lg shadow-sm transition-colors" type="submit">
            Submit Ticket / शिकायत भेजें
          </button>
</div>
</form>
</div>
</div>

<div className="fixed bottom-6 right-6 z-40 flex items-center gap-xs">
<div className="hidden md:flex items-center bg-forest-deep text-white px-md py-xs rounded-xl shadow-lg text-label-stamp font-label-stamp animate-bounce" id="fab-tooltip">
<span>बोलकर सहायता प्राप्त करें (Voice Help)</span>
</div>
<button aria-label="Activate Kisan Voice Assistant" className="w-14 h-14 rounded-full bg-forest-deep text-white shadow-[0_12px_24px_-4px_rgba(6,78,59,0.38)] flex items-center justify-center hover:scale-105 active:scale-95 transition-all group" id="voice-assistant-fab" type="button">
<span className="material-symbols-outlined text-[28px] text-primary-fixed group-hover:text-white transition-colors" >mic</span>
</button>
</div>
</div>

    </>
  );
}
