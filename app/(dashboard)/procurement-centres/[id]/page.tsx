/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Page() {
  return (
    <main className="flex-1 overflow-y-auto bg-gray-50"><div className="flex flex-col w-full">
<div className="flex flex-col gap-xl max-w-container-max mx-auto w-full">
<div className="flex flex-col gap-sm">
<Link href="#" className="inline-flex items-center gap-xs font-label-lg text-label-lg text-secondary hover:text-primary transition-colors group w-fit" data-path="procurement" >
<span className="material-symbols-outlined text-[20px] transition-transform group-hover:-translate-x-1">arrow_back</span>
<span>Back to Centres (केन्द्र सूची)</span>
</Link>
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-md mt-xs">
<div className="flex flex-col gap-xs">
<div className="flex flex-wrap items-center gap-sm">
<h1 className="font-headline-lg text-headline-lg text-forest-deep tracking-tight">XYZ Procurement Centre</h1>
<span className="font-title-md text-title-md text-text-muted font-normal">XYZ खरीद केंद्र — Gate 2</span>
<span className="inline-flex items-center gap-xs px-sm py-base rounded-full bg-status-serving-bg text-status-serving font-label-md text-label-md shadow-sm">
<span className="w-2 h-2 rounded-full bg-status-serving"></span>
              OPEN (खुला है)
            </span>
</div>
<div className="flex flex-wrap items-center gap-x-md gap-y-xs font-body-md text-body-md text-text-secondary">
<span className="flex items-center gap-xs">
<span className="material-symbols-outlined text-[18px] text-text-muted">location_on</span>
              Nilokheri Sector 4, Karnal District, Haryana
            </span>
<span className="text-outline-variant">•</span>
<span className="font-label-lg text-label-lg text-primary">4.2 km from your farm</span>
<span className="text-outline-variant">•</span>
<span className="flex items-center gap-xs text-text-muted">
<span className="material-symbols-outlined text-[18px]">schedule</span>
              Operational 08:00 AM – 06:00 PM
            </span>
</div>
</div>
<div className="flex items-center gap-xs self-start lg:self-center">
<button className="h-11 px-md rounded-xl bg-surface-card text-text-secondary shadow-sm hover:bg-surface-subtle transition-colors flex items-center gap-xs font-label-md text-label-md" type="button">
<span className="material-symbols-outlined text-[18px]">call</span>
            Helpdesk: 1800-180-1551
          </button>
<button className="h-11 px-md rounded-xl bg-surface-card text-text-secondary shadow-sm hover:bg-surface-subtle transition-colors flex items-center gap-xs font-label-md text-label-md" type="button">
<span className="material-symbols-outlined text-[18px]">directions</span>
            Mandi Route
          </button>
</div>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
<div className="bg-surface-card rounded-xl p-lg shadow-sm flex flex-col justify-between gap-md relative overflow-hidden">
<div className="flex items-center justify-between">
<span className="font-label-stamp text-label-stamp uppercase tracking-wider text-text-muted">Live Approaching Traffic</span>
<span className="p-xs rounded-lg bg-surface-container text-secondary">
<span className="material-symbols-outlined text-[20px]">groups</span>
</span>
</div>
<div>
<div className="font-metric-large text-metric-large text-forest-deep">18 farmers</div>
<p className="font-body-sm text-body-sm text-text-muted mt-base">In approach &amp; weighbridge lanes</p>
</div>
<div className="flex items-center gap-xs">
<div className="h-1.5 flex-1 rounded-full bg-status-serving"></div>
<div className="h-1.5 flex-1 rounded-full bg-status-serving"></div>
<div className="h-1.5 flex-1 rounded-full bg-surface-subtle"></div>
<span className="font-label-stamp text-label-stamp text-text-muted ml-xs">Moderate</span>
</div>
</div>
<div className="bg-surface-card rounded-xl p-lg shadow-sm flex flex-col justify-between gap-md">
<div className="flex items-center justify-between">
<span className="font-label-stamp text-label-stamp uppercase tracking-wider text-text-muted">Kisan Counters</span>
<span className="p-xs rounded-lg bg-surface-container text-secondary">
<span className="material-symbols-outlined text-[20px]">point_of_sale</span>
</span>
</div>
<div>
<div className="font-metric-large text-metric-large text-status-serving">3 counters online</div>
<p className="font-body-sm text-body-sm text-text-muted mt-base">Counter 1, 2, 3 fully active</p>
</div>
<div className="flex items-center gap-xs font-label-stamp text-label-stamp text-status-serving">
<span className="w-2 h-2 rounded-full bg-status-serving"></span>
          Gate 2 Weighbridge Synced
        </div>
</div>
<div className="bg-surface-card rounded-xl p-lg shadow-sm flex flex-col justify-between gap-md">
<div className="flex items-center justify-between">
<span className="font-label-stamp text-label-stamp uppercase tracking-wider text-text-muted">Average Speed</span>
<span className="p-xs rounded-lg bg-surface-container text-secondary">
<span className="material-symbols-outlined text-[20px]">speed</span>
</span>
</div>
<div>
<div className="font-metric-large text-metric-large text-forest-deep">8 min <span className="font-title-md text-title-md text-text-muted font-normal">/ trolley</span></div>
<p className="font-body-sm text-body-sm text-text-muted mt-base">Automated weighbridge + moisture probe</p>
</div>
<div className="font-label-stamp text-label-stamp text-status-completed font-semibold">
          98.4% On-time compliance
        </div>
</div>
<div className="bg-surface-card rounded-xl p-lg shadow-sm flex flex-col justify-between gap-md">
<div className="flex items-center justify-between">
<span className="font-label-stamp text-label-stamp uppercase tracking-wider text-text-muted">Estimated Wait</span>
<span className="p-xs rounded-lg bg-status-waiting-bg text-status-waiting">
<span className="material-symbols-outlined text-[20px]">timelapse</span>
</span>
</div>
<div>
<div className="font-metric-large text-metric-large text-status-waiting">1 hr 15 min</div>
<p className="font-body-sm text-body-sm text-text-muted mt-base">Current turn turnaround estimate</p>
</div>
<div className="font-label-stamp text-label-stamp text-text-secondary flex items-center gap-base">
<span className="material-symbols-outlined text-[14px] text-metric-positive">trending_down</span>
          Decreasing by 12 mins/hr
        </div>
</div>
</div>
<div className="bg-surface-subtle rounded-xl p-md shadow-sm">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-md">
<span className="font-label-stamp text-label-stamp uppercase tracking-wider text-text-muted">Key Mandi Infrastructure &amp; Facility Assurances</span>
<div className="flex flex-wrap items-center gap-md">
<div className="flex items-center gap-xs text-forest-deep font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[18px] text-primary">scale</span>
<span>Digital Weighbridge (Up to 60 MT)</span>
</div>
<div className="flex items-center gap-xs text-forest-deep font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[18px] text-primary">science</span>
<span>Electronic Moisture Testing (10 mins)</span>
</div>
<div className="flex items-center gap-xs text-forest-deep font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[18px] text-primary">roofing</span>
<span>Covered Staging Shed (80 Trolleys)</span>
</div>
<div className="flex items-center gap-xs text-forest-deep font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[18px] text-primary">soup_kitchen</span>
<span>Kisan Rest Room &amp; Canteen</span>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-xl items-start">
<div className="lg:col-span-7 flex flex-col gap-lg">
<div className="flex flex-col gap-xs">
<div className="flex items-center justify-between">
<h2 className="font-title-md text-title-md text-forest-deep">AVAILABLE SLOTS (उपलब्ध समय स्लॉट)</h2>
<span className="font-label-stamp text-label-stamp text-text-muted">Select an entry slot for weighbridge priority</span>
</div>
<p className="font-body-sm text-body-sm text-text-muted">Choose your preferred entry slot. Pre-booked tokens bypass physical roadside registration queues.</p>
</div>
<div className="flex items-center gap-xs p-base bg-surface-subtle rounded-xl max-w-md">
<button className="flex-1 py-sm px-md rounded-lg font-label-md text-label-md bg-surface-card text-forest-deep shadow-sm text-center flex flex-col items-center" type="button">
<span>Today, 08 Sep</span>
<span className="font-label-stamp text-label-stamp text-status-serving font-normal">22 Slots Left</span>
</button>
<button className="flex-1 py-sm px-md rounded-lg font-label-md text-label-md text-text-secondary hover:bg-surface-card/60 transition-colors text-center flex flex-col items-center" type="button">
<span>Tomorrow, 09 Sep</span>
<span className="font-label-stamp text-label-stamp text-text-muted font-normal">45 Slots Left</span>
</button>
<button className="flex-1 py-sm px-md rounded-lg font-label-md text-label-md text-text-muted hover:bg-surface-card/60 transition-colors text-center flex flex-col items-center" type="button">
<span>Wed, 10 Sep</span>
<span className="font-label-stamp text-label-stamp text-text-muted font-normal">Opens at 6 PM</span>
</button>
</div>
<div className="flex flex-col gap-md">
<div className="bg-surface-card rounded-xl p-lg shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-md group">
<div className="flex items-start gap-md">
<div className="w-10 h-10 rounded-xl bg-surface-subtle flex items-center justify-center text-forest-deep group-hover:bg-primary-fixed transition-colors">
<span className="material-symbols-outlined text-[22px]">wb_sunny</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-sm">
<span className="font-title-md text-title-md text-forest-deep">09:00 AM – 10:00 AM</span>
<span className="px-xs py-base rounded-full bg-status-serving-bg text-status-serving font-label-stamp text-label-stamp font-bold">
                    Available
                  </span>
</div>
<span className="font-body-sm text-body-sm text-text-muted mt-base">Morning clearance window • 12 slots available</span>
</div>
</div>
<div className="flex items-center justify-between sm:justify-end gap-md">
<div className="text-right hidden sm:block">
<span className="font-label-stamp text-label-stamp text-text-muted block">Avg Wait</span>
<span className="font-label-md text-label-md text-forest-deep">~25 mins</span>
</div>
<button className="h-10 px-md rounded-lg bg-surface-subtle text-forest-deep font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" type="button">
                Select
              </button>
</div>
</div>
<div className="bg-surface-card rounded-xl p-lg shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-md group">
<div className="flex items-start gap-md">
<div className="w-10 h-10 rounded-xl bg-surface-subtle flex items-center justify-center text-forest-deep group-hover:bg-status-waiting-bg transition-colors">
<span className="material-symbols-outlined text-[22px]">wb_cloudy</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-sm">
<span className="font-title-md text-title-md text-forest-deep">11:00 AM – 12:00 PM</span>
<span className="px-xs py-base rounded-full bg-status-waiting-bg text-status-waiting font-label-stamp text-label-stamp font-bold">
                    Filling Fast
                  </span>
</div>
<span className="font-body-sm text-body-sm text-text-muted mt-base">High arrival volume • 7 slots available</span>
</div>
</div>
<div className="flex items-center justify-between sm:justify-end gap-md">
<div className="text-right hidden sm:block">
<span className="font-label-stamp text-label-stamp text-text-muted block">Avg Wait</span>
<span className="font-label-md text-label-md text-status-waiting">~40 mins</span>
</div>
<button className="h-10 px-md rounded-lg bg-surface-subtle text-forest-deep font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" type="button">
                Select
              </button>
</div>
</div>
<div className="bg-surface-card rounded-xl p-lg shadow-md flex flex-col gap-md relative overflow-hidden bg-gradient-to-r from-surface-card via-surface-card to-surface-container-low">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-md">
<div className="flex items-start gap-md">
<div className="w-10 h-10 rounded-xl bg-primary-container text-on-primary flex items-center justify-center shadow-sm">
<span className="material-symbols-outlined text-[22px]">check_circle</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-sm">
<span className="font-title-md text-title-md text-forest-deep">02:00 PM – 03:00 PM</span>
<span className="px-xs py-base rounded-full bg-primary-container text-on-primary font-label-stamp text-label-stamp font-bold flex items-center gap-base">
<span className="material-symbols-outlined text-[12px]">done</span> SELECTED
                    </span>
</div>
<span className="font-body-sm text-body-sm text-text-secondary mt-base">Post-lunch express intake • 3 slots available</span>
</div>
</div>
<div className="flex items-center justify-between sm:justify-end gap-md">
<div className="text-right">
<span className="font-label-stamp text-label-stamp text-text-muted block">Estimated Turnaround</span>
<span className="font-label-md text-label-md text-status-serving font-bold">~18 mins</span>
</div>
<span className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center">
<span className="material-symbols-outlined text-[18px]">done</span>
</span>
</div>
</div>
<div className="bg-surface-subtle rounded-lg p-sm flex items-center justify-between">
<div className="flex items-center gap-xs text-status-serving font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[18px]">verified</span>
<span>CropBazaar AI Recommendation: Lowest queue density today</span>
</div>
<span className="font-label-stamp text-label-stamp text-text-muted">Gate 2 Direct Access</span>
</div>
</div>
<div className="bg-surface-subtle/60 rounded-xl p-lg opacity-70 flex flex-col sm:flex-row sm:items-center justify-between gap-md cursor-not-allowed">
<div className="flex items-start gap-md">
<div className="w-10 h-10 rounded-xl bg-canvas-warm flex items-center justify-center text-text-muted">
<span className="material-symbols-outlined text-[22px]">nights_stay</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-sm">
<span className="font-title-md text-title-md text-text-muted">04:00 PM – 05:00 PM</span>
<span className="px-xs py-base rounded-full bg-status-no-show-bg text-status-no-show font-label-stamp text-label-stamp font-bold">
                    Sold Out
                  </span>
</div>
<span className="font-body-sm text-body-sm text-text-muted mt-base">FULL (भरी हुई है) • Shift capacity reached</span>
</div>
</div>
<div className="flex items-center justify-between sm:justify-end gap-md">
<button className="h-10 px-md rounded-lg bg-surface-subtle text-text-muted font-label-md text-label-md cursor-not-allowed" disabled={true} type="button">
                Full
              </button>
</div>
</div>
</div>
<div className="bg-surface-card rounded-xl p-lg shadow-sm flex flex-col gap-md">
<div className="flex items-center justify-between">
<span className="font-title-md text-title-md text-forest-deep">Centre Location &amp; Approach Preview</span>
<span className="font-label-stamp text-label-stamp text-status-serving font-bold flex items-center gap-base">
<span className="w-1.5 h-1.5 rounded-full bg-status-serving animate-ping"></span>
              Live GPS Sync
            </span>
</div>
<div className="w-full h-44 bg-cover bg-center rounded-xl overflow-hidden shadow-inner flex flex-col justify-end p-md" data-alt="Satellite map perspective of Nilokheri grain procurement terminal in Haryana with organized vehicle weighbridge lanes, green agricultural surroundings, clear approach highway road, soft ambient morning lighting." data-location="Nilokheri, Karnal, Haryana" style={{  }}>
<div className="bg-forest-deep/80 backdrop-blur-md rounded-lg p-sm flex items-center justify-between text-on-primary">
<div className="flex items-center gap-xs font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[18px] text-tertiary-fixed">navigation</span>
<span>Approach via NH44 Service Road -&gt; Gate 2 Entry Ramp</span>
</div>
<span className="font-label-stamp text-label-stamp px-xs py-base rounded bg-surface-card/20">Speed limit: 20 km/h</span>
</div>
</div>
</div>
</div>
<div className="lg:col-span-5 flex flex-col gap-md sticky top-20">
<div className="bg-surface-card rounded-xl p-xl shadow-md flex flex-col gap-lg">
<div className="flex items-center justify-between pb-md">
<div>
<span className="font-label-stamp text-label-stamp uppercase tracking-wider text-text-muted">Procurement Summary</span>
<h3 className="font-headline-sm text-headline-sm text-forest-deep">Booking Verification</h3>
</div>
<span className="p-xs rounded-lg bg-surface-container text-secondary">
<span className="material-symbols-outlined text-[24px]">receipt_long</span>
</span>
</div>
<div className="bg-surface-subtle rounded-xl p-md flex items-center justify-between">
<div className="flex items-center gap-md">
<div className="w-12 h-12 rounded-xl bg-surface-card flex items-center justify-center text-primary shadow-sm">
<span className="material-symbols-outlined text-[28px]">grain</span>
</div>
<div className="flex flex-col">
<span className="font-title-md text-title-md text-forest-deep">Wheat (गेहूँ Grade A)</span>
<span className="font-body-sm text-body-sm text-text-muted">Sharbati Premium • Moisture ≤ 12%</span>
</div>
</div>
<div className="text-right">
<span className="font-metric-medium text-metric-medium text-forest-deep">50 Qtl</span>
<span className="font-label-stamp text-label-stamp text-text-muted block">1 Trolley Load</span>
</div>
</div>
<div className="flex flex-col gap-sm">
<div className="flex items-center justify-between font-body-md text-body-md py-xs">
<span className="text-text-muted">Selected Centre:</span>
<span className="font-label-lg text-label-lg text-forest-deep text-right">XYZ Procurement Centre (Gate 2)</span>
</div>
<div className="flex items-center justify-between font-body-md text-body-md py-xs">
<span className="text-text-muted">Selected Slot:</span>
<span className="font-label-lg text-label-lg text-status-serving text-right">Today, 08 Sep • 02:00 – 03:00 PM</span>
</div>
<div className="flex items-center justify-between font-body-md text-body-md py-xs">
<span className="text-text-muted">Government MSP Benchmark:</span>
<span className="font-label-lg text-label-lg text-forest-deep">₹2,425 / Quintal</span>
</div>
<div className="flex items-center justify-between font-body-md text-body-md py-xs">
<span className="text-text-muted">Mandi Cess / User Fee:</span>
<span className="font-label-lg text-label-lg text-status-serving">₹0.00 (Waived for Farmer)</span>
</div>
</div>
<div className="bg-forest-deep text-on-primary rounded-xl p-lg flex flex-col gap-xs shadow-md">
<div className="flex items-center justify-between">
<span className="font-label-stamp text-label-stamp uppercase tracking-widest text-secondary-fixed">Estimated Direct DBT Payout</span>
<span className="px-xs py-base rounded bg-primary-container text-on-primary font-label-stamp text-label-stamp">Guaranteed MSP</span>
</div>
<div className="font-metric-large text-metric-large text-tertiary-fixed tracking-tight">₹1,21,250</div>
<p className="font-body-sm text-body-sm text-on-secondary-fixed-variant mt-xs">
              Direct transfer to Aadhaar-linked Bank of India account (A/C ...4829) within 48 hours of weighment.
            </p>
</div>
<div className="flex items-start gap-sm p-sm rounded-lg bg-surface-container-low text-forest-deep">
<span className="material-symbols-outlined text-[20px] text-primary shrink-0 mt-base">confirmation_number</span>
<p className="font-body-sm text-body-sm">
<strong className="font-label-lg text-label-lg">Guaranteed Priority Token:</strong> Your QR entry pass will be generated immediately for the express Gate 2 weighbridge lane.
            </p>
</div>
<div className="flex flex-col gap-sm">
<Link href="/procurement/book" className="w-full h-touch-min bg-primary-container text-on-primary rounded-xl font-label-lg text-label-lg shadow-sm hover:bg-forest-deep transition-colors flex items-center justify-center gap-xs">
<span>Continue to Book Slot (आगे बढ़ें और स्लॉट बुक करें)</span>
<span className="material-symbols-outlined text-[20px]">arrow_forward</span>
</Link>
<p className="font-label-stamp text-label-stamp text-text-muted text-center leading-relaxed">
              Free cancellation up to 2 hours before slot. SMS &amp; WhatsApp confirmation will be sent to registered mobile +91 98*** **412.
            </p>
</div>
</div>
<div className="bg-surface-card rounded-xl p-md shadow-sm flex items-center justify-between">
<div className="flex items-center gap-sm">
<img className="w-10 h-10 rounded-full object-cover" data-alt="Headshot of a friendly Indian female agriculture helpline customer support representative wearing a headset, studio lighting, warm professional expression with green accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDykBgQ9Nvv0v_SFXrdfKd-ZDIQlkjGfA2OT8WV311_7ynp3Y1f9GJLN3iwtGIqolq0slHxvJKqcxpBXXf8-c_CzhGyd_fiK9voDfDUu2KHVsplICw-U3e5bZp-WHIQMwtCIrsi3UQRjtwHiF1dvTrgwy0XuvBY_BTbAUajELgp_6a9FtJq_jkWxKyUiL0t3FHTByD8bGGexj0tKuUq-A0wQIXs5gIvH3t07yJhlLZQqATffR__9FY"/>
<div className="flex flex-col leading-tight">
<span className="font-label-md text-label-md text-forest-deep">Need help booking this slot?</span>
<span className="font-label-stamp text-label-stamp text-text-muted">Kisan Mitra call back available in Hindi &amp; Haryanvi</span>
</div>
</div>
<button className="px-sm py-xs rounded-lg bg-surface-subtle text-forest-deep font-label-md text-label-md hover:bg-surface-container transition-colors" type="button">
            Request Call
          </button>
</div>
</div>
</div>
</div>
</div></main>
  );
}
