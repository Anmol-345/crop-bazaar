"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

export default function historyPage() {
  return (
    <>
      
<div className="max-w-container-max mx-auto w-full px-gutter-mobile md:px-gutter-desktop py-lg flex flex-col gap-xl">

<div className="flex flex-col md:flex-row md:items-center justify-between gap-md">
<nav className="flex items-center gap-xs text-text-muted font-label-md text-label-md">
<a className="hover:text-primary transition-colors" href="#">Home</a>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<a className="hover:text-primary transition-colors" href="#">Rent Equipment</a>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="text-text-primary font-semibold">Rental History</span>
</nav>

<div className="flex items-center gap-xs bg-surface-subtle p-base rounded-full shadow-sm">
<button className="px-md py-xs rounded-full font-label-md text-label-md bg-primary-container text-on-primary font-semibold shadow-sm transition-all" type="button">
          All Rentals (4)
        </button>
<button className="px-md py-xs rounded-full font-label-md text-label-md text-text-secondary hover:text-text-primary hover:bg-surface-card transition-all" type="button">
          Upcoming (1)
        </button>
<button className="px-md py-xs rounded-full font-label-md text-label-md text-text-secondary hover:text-text-primary hover:bg-surface-card transition-all" type="button">
          Completed (3)
        </button>
</div>
</div>

<div className="flex flex-col gap-xs">
<div className="flex items-center gap-sm">
<h1 className="font-headline-lg text-headline-lg text-text-primary tracking-tight">Rental History <span className="font-headline-md text-headline-md text-text-muted font-normal">(किराया इतिहास)</span></h1>
</div>
<p className="font-body-md text-body-md text-text-muted max-w-3xl">
        Track your upcoming equipment deliveries, active schedules, and past field operations with verified custom hiring centers across Haryana.
      </p>
</div>

<div className="bg-surface-card rounded-xl p-lg shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-md relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary"></div>
<div className="flex items-start md:items-center gap-md pl-xs">
<div className="w-10 h-10 rounded-xl bg-status-serving-bg flex items-center justify-center shrink-0 text-status-serving">
<span className="material-symbols-outlined text-[22px]">verified_user</span>
</div>
<div className="flex flex-col gap-base">
<div className="flex flex-wrap items-center gap-xs">
<span className="font-label-stamp text-label-stamp bg-status-serving-bg text-status-serving font-bold px-xs py-base rounded uppercase tracking-wider">
              Active Dispatch Pipeline
            </span>
<span className="text-text-muted font-label-stamp text-label-stamp">•</span>
<span className="font-label-md text-label-md text-text-primary font-semibold">Sonipat Hub Active</span>
</div>
<p className="font-body-sm text-body-sm text-text-secondary">
            All rentals are covered under Kisan Suraksha Insurance. 100% pre-inspected machinery with verified fuel and implement health certificates.
          </p>
</div>
</div>
<button className="shrink-0 h-touch-min px-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg rounded-xl shadow-sm transition-colors flex items-center gap-xs w-full md:w-auto justify-center" type="button">
<span className="material-symbols-outlined text-[18px]">add_circle</span>
<span>Book Equipment (नया उपकरण बुक करें)</span>
</button>
</div>

<div className="flex flex-col gap-md">
<div className="flex flex-wrap items-center justify-between gap-sm">
<div className="flex items-center gap-sm">
<div className="w-2.5 h-2.5 rounded-full bg-status-confirmed animate-pulse"></div>
<h2 className="font-headline-sm text-headline-sm text-text-primary">
            Upcoming Rental <span className="font-normal text-text-muted text-body-lg">(आगामी किराया)</span>
</h2>
</div>
<div className="flex flex-wrap items-center gap-xs">
<span className="inline-flex items-center gap-xs px-sm py-xs bg-status-confirmed-bg text-status-confirmed rounded-full font-label-md text-label-md font-semibold">
<span className="w-2 h-2 rounded-full bg-status-confirmed"></span>
            Confirmed • Dispatch On Schedule
          </span>
<span className="inline-flex items-center gap-xs px-sm py-xs bg-status-waiting-bg text-status-waiting rounded-full font-label-md text-label-md font-bold">
<span className="material-symbols-outlined text-[14px]">schedule</span>
            Delivery in 18 Hours
          </span>
</div>
</div>

<div className="bg-surface-card rounded-xl shadow-md overflow-hidden flex flex-col lg:flex-row transition-all hover:shadow-lg">

<div className="relative lg:w-5/12 h-64 lg:h-auto min-h-[260px] shrink-0 bg-surface-subtle">
<img alt="Mahindra 575 DI Tractor parked near farm" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/AEtjO1VrfvHdPKhYmR94U5ZHY1yDjGtlXCGKDOq8f2KV3MxNxGo2AP_WV8rAQ6FVNCmFbPDd29BLMEfL9Vhim-KzEhYAQSANxTY5YTTD9NLTsSy5LbBX1ah7ilPERzT_kLlYr65uWCkzYGdt4eFh2byWJEJobaZ9yrDr59icL1d6HPMMebu735kSMAT4Lin3a-sIfsosNkECgZSnflny_E77SzVKgDzqt5J3pA8FkvMuhMmCbTAEH7Buz8SwjA"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
<div className="absolute top-md left-md flex flex-wrap gap-xs">
<span className="px-sm py-base bg-surface-card/90 backdrop-blur-md rounded-md font-label-stamp text-label-stamp font-bold text-text-primary uppercase tracking-wide">
              Ref ID: #EQ-9482
            </span>
</div>
<div className="absolute bottom-md left-md right-md flex items-center justify-between text-on-primary">
<div className="flex items-center gap-xs bg-black/40 backdrop-blur-md px-sm py-xs rounded-lg text-body-sm font-medium">
<span className="material-symbols-outlined text-[16px] text-primary-fixed">sync</span>
<span>Synced with Mandi Token: <strong className="text-white font-semibold">#CB-8842 (Karnal Gate 3)</strong></span>
</div>
</div>
</div>

<div className="p-lg lg:p-xl flex flex-col justify-between gap-lg flex-1">
<div className="flex flex-col gap-sm">
<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-xs">
<div>
<h3 className="font-headline-md text-headline-md text-text-primary">Mahindra 575 DI Tractor (45 HP)</h3>
<p className="font-body-sm text-body-sm text-text-muted mt-base">
                  Heavy rotavator &amp; trolley ready • High fuel efficiency MKM series engine
                </p>
</div>
<div className="text-left sm:text-right bg-surface-container-low px-md py-xs rounded-lg shrink-0">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase tracking-wider block">Total Payable</span>
<span className="font-metric-large text-metric-large text-primary tracking-tight">₹2,475</span>
<span className="font-label-stamp text-label-stamp text-text-secondary block font-semibold">/ 3 Days • Pay on Delivery</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-md pt-sm">
<div className="flex flex-col gap-base bg-surface-subtle p-sm rounded-lg">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase tracking-wide flex items-center gap-xs">
<span className="material-symbols-outlined text-[14px]">storefront</span> Provider
                </span>
<span className="font-body-md text-body-md font-semibold text-text-primary">Gurpreet Singh</span>
<span className="font-body-sm text-body-sm text-status-serving font-medium flex items-center gap-base">
                  Sonipat Samiti <span className="material-symbols-outlined text-[13px] fill-current">star</span> 4.9
                </span>
</div>
<div className="flex flex-col gap-base bg-surface-subtle p-sm rounded-lg">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase tracking-wide flex items-center gap-xs">
<span className="material-symbols-outlined text-[14px]">calendar_today</span> Rental Window
                </span>
<span className="font-body-md text-body-md font-semibold text-text-primary">25 Oct – 27 Oct 2024</span>
<span className="font-body-sm text-body-sm text-text-muted">08:00 AM – 06:00 PM</span>
</div>
<div className="flex flex-col gap-base bg-surface-subtle p-sm rounded-lg">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase tracking-wide flex items-center gap-xs">
<span className="material-symbols-outlined text-[14px]">pin_drop</span> Handover Destination
                </span>
<span className="font-body-md text-body-md font-semibold text-text-primary truncate">Village Rai, Plot #14</span>
<span className="font-body-sm text-body-sm text-text-muted">Direct Farm Gate Handover</span>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row items-center justify-between gap-md pt-sm">
<div className="flex items-center gap-sm w-full sm:w-auto">
<div className="w-8 h-8 rounded-full bg-status-serving-bg flex items-center justify-center text-status-serving shrink-0">
<span className="material-symbols-outlined text-[18px]">person</span>
</div>
<div className="flex flex-col">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase tracking-wider">Driver Status</span>
<span className="font-label-lg text-label-lg text-text-primary font-bold">Driver allotted: Jasbir</span>
</div>
</div>
<div className="flex items-center gap-sm w-full sm:w-auto justify-end">
<button className="h-touch-min px-md bg-surface-subtle hover:bg-surface-container text-text-primary font-label-lg text-label-lg rounded-xl transition-colors flex items-center gap-xs w-full sm:w-auto justify-center" type="button">
<span className="material-symbols-outlined text-[18px]">call</span>
<span>Contact Provider</span>
</button>
<button className="h-touch-min px-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg rounded-xl shadow-sm transition-colors flex items-center gap-xs w-full sm:w-auto justify-center" type="button">
<span>View Rental Details (विवरण देखें)</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-md">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-xs">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-primary text-[22px]">history</span>
<h2 className="font-headline-sm text-headline-sm text-text-primary">
            Completed Rentals <span className="font-normal text-text-muted text-body-lg">(पिछले किराए)</span>
</h2>
</div>
<div className="flex items-center gap-xs text-status-completed font-label-md text-label-md bg-status-completed-bg px-sm py-xs rounded-full">
<span className="material-symbols-outlined text-[16px]">receipt_long</span>
<span>Archived invoices available for subsidy claims</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">

<div className="bg-surface-card rounded-xl shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow">
<div className="flex flex-col">
<div className="relative h-44 w-full bg-surface-subtle">
<img alt="Heavy duty agricultural rotavator implement" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/AEtjO1Vzpm6nsi8UoZOJvQiXOim2AcBzvqbZX-vZYXsJi_9ztbc935DxCq7POsKbMlUeRImzadaTDBwd0OlV-G_ktsQaROp0mBif08Xo2V8aqHvrTmdmETDzu2CnSeXaQW1ChS2VR30HOgDtls2iEBeR2jjVgEjl-Jy-BHAPPYPkXvc1fKwvPc6A8FosANKv7sF9Kdg54Kaf18kmxMWpRLXutQSbJQBhJ5yzNSbCukz2kSK7EUisGmhS5Yqaew"/>
<span className="absolute top-sm left-sm px-xs py-base bg-surface-card/90 backdrop-blur-sm rounded font-label-stamp text-label-stamp font-bold text-text-primary">
                #EQ-8812
              </span>
<span className="absolute top-sm right-sm px-xs py-base bg-status-completed-bg text-status-completed rounded-full font-label-stamp text-label-stamp font-bold uppercase tracking-wider">
                Completed
              </span>
</div>
<div className="p-md flex flex-col gap-sm">
<div className="flex flex-col">
<span className="font-label-stamp text-label-stamp text-primary uppercase font-bold tracking-wider">Soil Preparation &amp; Tillage</span>
<h3 className="font-title-md text-title-md text-text-primary mt-base">Rotavator 6 ft (Heavy Duty 42 Blades)</h3>
</div>
<div className="flex flex-col gap-xs py-xs bg-surface-subtle px-sm rounded-lg text-body-sm">
<div className="flex justify-between items-center text-text-muted">
<span>Provider</span>
<span className="font-semibold text-text-primary">Baldev Agro (Rai Block)</span>
</div>
<div className="flex justify-between items-center text-text-muted">
<span>Duration</span>
<span className="font-semibold text-text-primary">12 Oct 2024 (1 Day Full)</span>
</div>
<div className="flex justify-between items-center text-text-muted">
<span>Usage Tag</span>
<span className="px-xs py-base bg-surface-container rounded font-label-stamp text-label-stamp text-text-secondary font-medium">Wheat Seedbed Preparation</span>
</div>
</div>
<div className="flex items-center justify-between pt-base">
<div className="flex flex-col">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase">Paid Amount</span>
<span className="font-metric-medium text-metric-medium text-text-primary">₹600</span>
</div>
<span className="px-xs py-base bg-status-serving-bg text-status-serving font-label-stamp text-label-stamp font-bold rounded">
                  Paid via UPI
                </span>
</div>
</div>
</div>
<div className="p-md pt-0">
<button className="w-full h-touch-min bg-surface-subtle hover:bg-surface-container text-text-primary font-label-md text-label-md rounded-xl transition-colors flex items-center justify-center gap-xs" type="button">
<span className="material-symbols-outlined text-[16px]">description</span>
<span>View Invoice &amp; Details</span>
</button>
</div>
</div>

<div className="bg-surface-card rounded-xl shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow">
<div className="flex flex-col">
<div className="relative h-44 w-full bg-surface-subtle">
<img alt="Green John Deere tractor in agricultural field" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/AEtjO1XLsD6r9rGDXvPMGmWgKE4gT8Rl2k83VBXwAoLMTm30CxoycYCt6Ch3Iq2cjf1C-ZDwZnjyFtYDugBdLiVsqpJfrmzWhUOzBOz0xrUa8tx0O5kOnhA2_eC3a1ra7wlhPI2n_2R1wimXH2flc8toJt_jhdpiLMemMTMIADat2jRXAs9ll_EpE3mjHMY0yTZQKMPuwzydh_FR5l3_Wc2VPr4zqZWMMQjN_P8t7KMAr4Ib3gfoI0B5Jv7SWaM"/>
<span className="absolute top-sm left-sm px-xs py-base bg-surface-card/90 backdrop-blur-sm rounded font-label-stamp text-label-stamp font-bold text-text-primary">
                #EQ-7940
              </span>
<span className="absolute top-sm right-sm px-xs py-base bg-status-completed-bg text-status-completed rounded-full font-label-stamp text-label-stamp font-bold uppercase tracking-wider">
                Completed
              </span>
</div>
<div className="p-md flex flex-col gap-sm">
<div className="flex flex-col">
<span className="font-label-stamp text-label-stamp text-primary uppercase font-bold tracking-wider">Heavy Tillage &amp; Laser Levelling</span>
<h3 className="font-title-md text-title-md text-text-primary mt-base">John Deere 5310 Tractor (55 HP 4WD)</h3>
</div>
<div className="flex flex-col gap-xs py-xs bg-surface-subtle px-sm rounded-lg text-body-sm">
<div className="flex justify-between items-center text-text-muted">
<span>Provider</span>
<span className="font-semibold text-text-primary truncate ml-xs">Kisan Sahkari Hub (Panipat)</span>
</div>
<div className="flex justify-between items-center text-text-muted">
<span>Duration</span>
<span className="font-semibold text-text-primary">28 Sep – 30 Sep (2 Days)</span>
</div>
<div className="flex justify-between items-center text-text-muted">
<span>Usage Tag</span>
<span className="px-xs py-base bg-surface-container rounded font-label-stamp text-label-stamp text-text-secondary font-medium">Laser Levelling Operations</span>
</div>
</div>
<div className="flex items-center justify-between pt-base">
<div className="flex flex-col">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase">Paid Amount</span>
<span className="font-metric-medium text-metric-medium text-text-primary">₹2,400</span>
</div>
<span className="px-xs py-base bg-status-serving-bg text-status-serving font-label-stamp text-label-stamp font-bold rounded">
                  Paid via DBT Wallet
                </span>
</div>
</div>
</div>
<div className="p-md pt-0">
<button className="w-full h-touch-min bg-surface-subtle hover:bg-surface-container text-text-primary font-label-md text-label-md rounded-xl transition-colors flex items-center justify-center gap-xs" type="button">
<span className="material-symbols-outlined text-[16px]">description</span>
<span>View Invoice &amp; Details</span>
</button>
</div>
</div>

<div className="bg-surface-card rounded-xl shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow">
<div className="flex flex-col">
<div className="relative h-44 w-full bg-surface-subtle">
<img alt="Combine paddy harvester working in crop field" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/AEtjO1XYL3dPWvECqC4h7Wvu44wf_O532P0ZU-dg7F5boDzbCCSBS0eSVEv7SmHZmyjvv3NZSpS-IX-erHvmRSAZ1czQdrVG-jqXwGV6LhnJRq2Z5zM0QlTQK-aPFmzBwTCD1p1DlJpwIxTk-9M9YSaNH8fzkd9X5uoABrYqbWDTevgP6S5HoegYfU0f3yb0pSqNzxcKPH2XlnhTV0E3QwKN8UzXbMvNl8cbjJuDVfzUe2kOBAcan3uSHPdfxDU"/>
<span className="absolute top-sm left-sm px-xs py-base bg-surface-card/90 backdrop-blur-sm rounded font-label-stamp text-label-stamp font-bold text-text-primary">
                #EQ-6421
              </span>
<span className="absolute top-sm right-sm px-xs py-base bg-status-completed-bg text-status-completed rounded-full font-label-stamp text-label-stamp font-bold uppercase tracking-wider">
                Completed
              </span>
</div>
<div className="p-md flex flex-col gap-sm">
<div className="flex flex-col">
<span className="font-label-stamp text-label-stamp text-primary uppercase font-bold tracking-wider">Grain Harvesting &amp; Threshing</span>
<h3 className="font-title-md text-title-md text-text-primary mt-base">Claas Dominator Paddy Harvester</h3>
</div>
<div className="flex flex-col gap-xs py-xs bg-surface-subtle px-sm rounded-lg text-body-sm">
<div className="flex justify-between items-center text-text-muted">
<span>Provider</span>
<span className="font-semibold text-text-primary truncate ml-xs">Haryana CHC Center</span>
</div>
<div className="flex justify-between items-center text-text-muted">
<span>Duration</span>
<span className="font-semibold text-text-primary">15 Sep 2024 (1 Day Shift)</span>
</div>
<div className="flex justify-between items-center text-text-muted">
<span>Usage Tag</span>
<span className="px-xs py-base bg-surface-container rounded font-label-stamp text-label-stamp text-text-secondary font-medium">Basmati 1121 Harvest</span>
</div>
</div>
<div className="flex items-center justify-between pt-base">
<div className="flex flex-col">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase">Paid Amount</span>
<span className="font-metric-medium text-metric-medium text-text-primary">₹2,400</span>
</div>
<span className="px-xs py-base bg-status-completed-bg text-status-completed font-label-stamp text-label-stamp font-bold rounded">
                  Subsidy Adjusted
                </span>
</div>
</div>
</div>
<div className="p-md pt-0">
<button className="w-full h-touch-min bg-surface-subtle hover:bg-surface-container text-text-primary font-label-md text-label-md rounded-xl transition-colors flex items-center justify-center gap-xs" type="button">
<span className="material-symbols-outlined text-[16px]">description</span>
<span>View Invoice &amp; Details</span>
</button>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-md">
<div className="flex items-start gap-md">
<div className="w-12 h-12 rounded-full bg-surface-card flex items-center justify-center shrink-0 text-primary shadow-sm">
<span className="material-symbols-outlined text-[24px]">account_balance</span>
</div>
<div className="flex flex-col gap-base">
<span className="font-label-lg text-label-lg text-text-primary font-bold">
            Sub-Mission on Agricultural Mechanization (SMAM) Direct Credit
          </span>
<p className="font-body-sm text-body-sm text-text-secondary max-w-3xl">
            CropBazaar equipment invoices are authenticated with digital QR verification and recognized by the Department of Agriculture &amp; Farmers Welfare. Submit verified receipts at your local block Krishi Vigyan Kendra or Krishi Bhavan for direct benefit subsidy reimbursement.
          </p>
</div>
</div>
<a className="shrink-0 font-label-lg text-label-lg text-primary hover:text-primary-container font-semibold flex items-center gap-xs whitespace-nowrap pl-md md:pl-0" href="#">
<span>Download Annual GST Statement</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
</div>
</div>

<aside aria-label="Voice Assistant" className="fixed bottom-6 right-6 z-50">
<button className="w-14 h-14 rounded-full bg-forest-deep text-on-primary flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all relative group" title="Bolein aur khojein (Speak to search)" type="button">
<span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-status-serving rounded-full ring-2 ring-surface-card"></span>
<span className="material-symbols-outlined text-[28px] group-hover:scale-110 transition-transform">mic</span>
<span className="sr-only">Awaaz Assistant (Speak to Rent or Track)</span>

<span className="absolute inset-0 rounded-full bg-status-serving/20 animate-ping pointer-events-none"></span>
</button>
</aside>

    </>
  );
}
