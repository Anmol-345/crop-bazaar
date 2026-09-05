"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

export default function confirmationPage() {
  return (
    <>
      



<div className="w-full max-w-7xl mx-auto px-md sm:px-lg py-md flex flex-col gap-lg pb-24">

<div className="flex flex-wrap items-center justify-between gap-sm">
<nav className="flex items-center gap-xs font-label-md text-label-md text-text-muted">
<a className="hover:text-primary transition-colors" data-path="dashboard" href="#">Home</a>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<a className="hover:text-primary transition-colors" data-path="rent-equipment" href="#">Equipment Rental</a>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="text-text-primary font-semibold">Booking Confirmed (#EQ-9482)</span>
</nav>
<div className="inline-flex items-center gap-xs px-sm py-1 rounded-full bg-surface-container-low text-secondary font-label-stamp text-label-stamp font-bold shadow-sm">
<span className="w-2 h-2 rounded-full bg-metric-positive"></span>
<span className="tracking-wide uppercase">Mandi Synced Haulage Unit</span>
</div>
</div>

<div className="relative overflow-hidden rounded-xl bg-surface-card p-md sm:p-xl shadow-sm">
<div className="absolute -right-12 -top-12 w-64 h-64 rounded-full bg-status-serving-bg/60 blur-2xl pointer-events-none"></div>
<div className="relative flex flex-col md:flex-row md:items-center justify-between gap-lg">
<div className="flex items-start gap-md">
<div className="relative shrink-0 w-14 h-14 rounded-full bg-status-serving text-on-primary flex items-center justify-center shadow-md">
<span className="material-symbols-outlined text-[32px]">check_circle</span>
<div className="absolute inset-0 rounded-full bg-status-serving animate-ping opacity-25"></div>
</div>
<div className="flex flex-col gap-xs">
<div className="flex flex-wrap items-center gap-xs">
<span className="inline-flex items-center gap-1 px-sm py-0.5 rounded-full bg-status-serving-bg text-status-serving font-label-stamp text-label-stamp font-bold uppercase tracking-wider">
<span className="w-1.5 h-1.5 rounded-full bg-status-serving"></span>
                CONFIRMED &amp; SCHEDULED (स्वीकृत)
              </span>
<span className="px-sm py-0.5 rounded-full bg-surface-subtle text-text-muted font-label-stamp text-label-stamp font-semibold">
                Ref ID: #EQ-9482
              </span>
</div>
<h1 className="font-headline-lg text-headline-lg text-text-primary tracking-tight">
              Equipment Rental Confirmed! <span className="font-headline-md text-headline-md text-primary block sm:inline">(उपकरण बुकिंग सफल)</span>
</h1>
<p className="font-body-md text-body-md text-text-secondary max-w-[42rem]">
              Your tractor rental has been scheduled. Provider Gurpreet Singh has been notified and vehicle readiness has begun.
            </p>
</div>
</div>

<div className="flex flex-col sm:items-end justify-center shrink-0">
<div className="p-sm sm:px-md sm:py-sm rounded-xl bg-surface-subtle flex items-center justify-between sm:justify-end gap-md">
<div className="flex flex-col text-left">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase tracking-wider">Booking Number</span>
<span className="font-metric-medium text-metric-medium text-text-primary tracking-tight" id="bookingIdText">#EQ-9482</span>
</div>
<button className="h-10 px-sm rounded-lg bg-surface-card hover:bg-surface-container text-text-secondary hover:text-primary transition-all flex items-center gap-xs text-label-md font-label-md shadow-sm" id="copyBtn" onClick={() => {}} type="button">
<span className="material-symbols-outlined text-[18px]">content_copy</span>
<span id="copyLabel">Copy</span>
</button>
</div>
</div>
</div>

<div className="mt-lg pt-lg rounded-xl bg-canvas-warm p-md sm:p-lg">
<div className="flex flex-col gap-md">
<div className="flex flex-wrap items-center justify-between gap-xs">
<span className="font-label-lg text-label-lg text-text-primary flex items-center gap-xs">
<span className="material-symbols-outlined text-primary text-[20px]">local_shipping</span>
              Dispatch Pipeline
            </span>
<span className="font-label-stamp text-label-stamp px-sm py-1 rounded-full bg-status-serving-bg text-status-serving font-bold uppercase">
              On Schedule for Delivery at Farm Plot #14
            </span>
</div>

<div className="relative grid grid-cols-1 sm:grid-cols-4 gap-sm sm:gap-xs">

<div className="flex items-center sm:flex-col sm:items-start gap-sm bg-surface-card sm:bg-transparent p-xs sm:p-0 rounded-lg">
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-status-serving text-on-primary font-label-stamp text-label-stamp font-bold shrink-0">
<span className="material-symbols-outlined text-[18px]">check</span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-text-primary font-bold">1. Booked</span>
<span className="font-body-sm text-body-sm text-text-muted">Today, 04:15 PM</span>
</div>
</div>

<div className="flex items-center sm:flex-col sm:items-start gap-sm bg-surface-card sm:bg-transparent p-xs sm:p-0 rounded-lg">
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-container text-on-primary font-label-stamp text-label-stamp font-bold shrink-0 ring-4 ring-status-serving-bg">
<span className="material-symbols-outlined text-[18px]">sync</span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-primary font-bold">2. Confirmed</span>
<span className="font-body-sm text-body-sm text-text-secondary font-medium">Readiness Initiated</span>
</div>
</div>

<div className="flex items-center sm:flex-col sm:items-start gap-sm bg-surface-subtle sm:bg-transparent p-xs sm:p-0 rounded-lg opacity-75">
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-surface-dim text-text-muted font-label-stamp text-label-stamp font-bold shrink-0">
                3
              </div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-text-secondary font-bold">3. Dispatched</span>
<span className="font-body-sm text-body-sm text-text-muted">Est. 25 Oct, 06:45 AM</span>
</div>
</div>

<div className="flex items-center sm:flex-col sm:items-start gap-sm bg-surface-subtle sm:bg-transparent p-xs sm:p-0 rounded-lg opacity-75">
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-surface-dim text-text-muted font-label-stamp text-label-stamp font-bold shrink-0">
                4
              </div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-text-secondary font-bold">4. Delivered</span>
<span className="font-body-sm text-body-sm text-text-muted">Plot #14 Arrival</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-md lg:gap-lg">

<div className="bg-surface-card rounded-xl shadow-sm p-md sm:p-lg flex flex-col justify-between gap-lg">
<div className="flex flex-col gap-md">

<div className="relative w-full h-44 rounded-lg overflow-hidden bg-surface-container">
<img alt="Mahindra 575 DI Tractor with rotavator attachment parked on lush field" className="w-full h-full object-cover object-center" src="https://lh3.googleusercontent.com/aida/AEtjO1VrfvHdPKhYmR94U5ZHY1yDjGtlXCGKDOq8f2KV3MxNxGo2AP_WV8rAQ6FVNCmFbPDd29BLMEfL9Vhim-KzEhYAQSANxTY5YTTD9NLTsSy5LbBX1ah7ilPERzT_kLlYr65uWCkzYGdt4eFh2byWJEJobaZ9yrDr59icL1d6HPMMebu735kSMAT4Lin3a-sIfsosNkECgZSnflny_E77SzVKgDzqt5J3pA8FkvMuhMmCbTAEH7Buz8SwjA"/>
<div className="absolute bottom-2 left-2 px-sm py-0.5 rounded-full bg-surface-card/90 backdrop-blur-sm font-label-stamp text-label-stamp text-status-serving font-bold uppercase tracking-wider shadow-sm">
              Field Inspected
            </div>
</div>

<div className="flex flex-col gap-xs">
<div className="flex items-center justify-between">
<h2 className="font-headline-sm text-headline-sm text-text-primary">Mahindra 575 DI Tractor</h2>
<span className="font-label-stamp text-label-stamp px-xs py-0.5 bg-status-confirmed-bg text-status-confirmed rounded-full font-bold uppercase">4WD Model</span>
</div>
<p className="font-body-sm text-body-sm text-text-muted">
              45 HP • Rotavator Attached • High-Torque Diesel • Heavy Duty
            </p>
</div>

<div className="p-sm rounded-xl bg-surface-subtle flex flex-col gap-xs">
<div className="flex items-center justify-between font-label-stamp text-label-stamp text-text-muted uppercase">
<span>Rental Tenure</span>
<span className="font-bold text-primary">3 DAYS TOTAL</span>
</div>
<div className="flex items-center justify-between gap-xs pt-xs">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-text-primary font-bold">25 Oct 2024</span>
<span className="font-body-sm text-body-sm text-text-muted">08:00 AM Morning</span>
</div>
<span className="material-symbols-outlined text-text-muted text-[18px]">trending_flat</span>
<div className="flex flex-col text-right">
<span className="font-label-md text-label-md text-text-primary font-bold">27 Oct 2024</span>
<span className="font-body-sm text-body-sm text-text-muted">06:00 PM Evening</span>
</div>
</div>
</div>

<div className="flex flex-col gap-xs pt-xs">
<div className="flex justify-between font-body-sm text-body-sm text-text-secondary">
<span>Daily Base Rate (₹750 × 3 Days)</span>
<span className="font-semibold text-text-primary">₹2,250</span>
</div>
<div className="flex justify-between font-body-sm text-body-sm text-text-secondary">
<span>Transit &amp; Protection Cover</span>
<span className="font-semibold text-text-primary">₹125</span>
</div>
<div className="flex justify-between font-body-sm text-body-sm text-text-secondary">
<span>Mandi Haulage Platform Fee</span>
<span className="font-semibold text-text-primary">₹100</span>
</div>
<div className="my-xs h-px bg-surface-container"></div>
<div className="flex items-baseline justify-between">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-text-primary font-bold">Total Amount Payable</span>
<span className="font-label-stamp text-label-stamp text-status-waiting font-bold">Pay on Delivery / नकद / UPI</span>
</div>
<span className="font-metric-large text-metric-large text-primary">₹2,475</span>
</div>
</div>
</div>
<div className="flex items-center gap-xs px-sm py-xs rounded-lg bg-surface-container-low text-text-muted font-body-sm text-body-sm">
<span className="material-symbols-outlined text-primary text-[16px]">verified_user</span>
<span className="text-[12px] leading-tight">Tariff guaranteed under CropBazaar Fair Agritech Charter 2024.</span>
</div>
</div>

<div className="bg-surface-card rounded-xl shadow-sm p-md sm:p-lg flex flex-col justify-between gap-lg">
<div className="flex flex-col gap-md">

<div className="flex items-center justify-between pb-xs">
<div className="flex items-center gap-xs">
<span className="material-symbols-outlined text-primary text-[20px]">person_pin_circle</span>
<h2 className="font-title-md text-title-md text-text-primary">Provider &amp; Delivery</h2>
</div>
<span className="px-sm py-0.5 rounded-full bg-status-serving-bg text-status-serving font-label-stamp text-label-stamp font-bold tracking-wide">
              Kisan Samiti Verified
            </span>
</div>

<div className="flex items-center gap-md p-sm rounded-xl bg-surface-subtle">
<div className="w-12 h-12 rounded-full bg-forest-deep text-on-primary font-title-md text-title-md flex items-center justify-center font-bold shadow-sm">
              GS
            </div>
<div className="flex flex-col flex-1 min-w-0">
<span className="font-label-lg text-label-lg text-text-primary font-bold truncate">Gurpreet Singh</span>
<span className="font-body-sm text-body-sm text-text-muted truncate">Sonipat Kisan Samiti Pool</span>
<div className="flex items-center gap-1 text-metric-positive font-label-stamp text-label-stamp mt-0.5">
<span className="material-symbols-outlined text-[14px]" >star</span>
<span className="font-bold">4.9</span>
<span className="text-text-muted">(88 completed rentals)</span>
</div>
</div>
</div>

<a className="flex items-center justify-center gap-xs w-full py-sm rounded-xl bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-label-md font-bold transition-colors" href="tel:9812045678">
<span className="material-symbols-outlined text-[18px]">phone_in_talk</span>
<span>+91 98120 45678 (Toll-free Masked)</span>
</a>

<div className="flex flex-col gap-sm pt-xs">
<div className="flex flex-col gap-0.5">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase">Delivery Mode</span>
<span className="font-label-md text-label-md text-text-primary font-bold">Doorstep Farm Delivery (ट्रैक्टर डिलीवरी)</span>
</div>
<div className="flex flex-col gap-0.5">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase">Destination Farm Site</span>
<span className="font-body-sm text-body-sm text-text-secondary leading-snug">
                Ramesh Singh, Farm Plot #14, Village Rai, Sonipat, Haryana
              </span>
<span className="font-body-sm text-body-sm text-primary font-medium">Landmark: Near Gate 3 Canal Crossing</span>
</div>
<div className="flex flex-col gap-0.5">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase">Estimated Field Arrival</span>
<span className="font-body-sm text-body-sm text-text-primary font-bold">
                25 Oct 2024 by 07:30 AM
              </span>
<span className="font-label-stamp text-label-stamp text-text-muted">30 min buffer prior to operating start</span>
</div>
</div>
</div>

<div className="p-md rounded-xl bg-status-waiting-bg text-on-surface flex items-center justify-between">
<div className="flex flex-col">
<span className="font-label-stamp text-label-stamp text-status-waiting font-bold uppercase tracking-wider">Secure Delivery PIN</span>
<span className="font-body-sm text-body-sm text-text-secondary">Share with driver upon arrival</span>
</div>
<span className="font-metric-large text-metric-large font-bold tracking-widest text-text-primary bg-surface-card px-md py-1 rounded-lg shadow-sm">
            5821
          </span>
</div>
</div>

<div className="bg-surface-card rounded-xl shadow-sm p-md sm:p-lg flex flex-col justify-between gap-lg">
<div className="flex flex-col gap-md">

<div className="flex items-center justify-between pb-xs">
<div className="flex items-center gap-xs">
<span className="material-symbols-outlined text-primary text-[20px]">hub</span>
<h2 className="font-title-md text-title-md text-text-primary">Mandi Synchronization</h2>
</div>
<span className="px-sm py-0.5 rounded-full bg-status-confirmed-bg text-status-confirmed font-label-stamp text-label-stamp font-bold">
              Gate 3 Hook
            </span>
</div>

<div className="p-sm rounded-xl bg-surface-subtle flex items-start gap-sm">
<span className="material-symbols-outlined text-status-confirmed text-[24px] shrink-0 mt-0.5">link</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-text-primary font-bold">Linked to Token #CB-8842</span>
<p className="font-body-sm text-body-sm text-text-secondary mt-0.5">
                Configured with your active Wheat harvest haulage at Gate 3. Guaranteed priority unloading lane upon arrival.
              </p>
</div>
</div>

<div className="flex flex-col gap-sm">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase tracking-wider">Required Steps for Kisan (आवश्यक कदम)</span>
<div className="flex items-start gap-sm">
<div className="w-6 h-6 rounded-full bg-surface-container text-primary font-label-stamp text-label-stamp font-bold flex items-center justify-center shrink-0 mt-0.5">
                1
              </div>
<p className="font-body-sm text-body-sm text-text-secondary">
                Ensure farm gate approach lane is clear of obstacles for trailer tractor unloading.
              </p>
</div>
<div className="flex items-start gap-sm">
<div className="w-6 h-6 rounded-full bg-surface-container text-primary font-label-stamp text-label-stamp font-bold flex items-center justify-center shrink-0 mt-0.5">
                2
              </div>
<p className="font-body-sm text-body-sm text-text-secondary">
                Keep OTP <span className="font-semibold text-text-primary">#5821</span> handy on your phone to hand over to driver Gurpreet.
              </p>
</div>
<div className="flex items-start gap-sm">
<div className="w-6 h-6 rounded-full bg-surface-container text-primary font-label-stamp text-label-stamp font-bold flex items-center justify-center shrink-0 mt-0.5">
                3
              </div>
<p className="font-body-sm text-body-sm text-text-secondary">
                Inspect diesel fuel gauge level at intake and sign the physical delivery pass.
              </p>
</div>
</div>
</div>

<div className="p-sm rounded-lg bg-surface-container-low flex items-center gap-sm">
<span className="material-symbols-outlined text-primary text-[20px]">sms</span>
<span className="font-body-sm text-body-sm text-text-secondary">
            SMS &amp; WhatsApp receipt dispatched to <strong className="text-text-primary">+91 98120 45678</strong>
</span>
</div>
</div>
</div>

<div className="rounded-xl bg-surface-card shadow-sm p-md sm:p-lg flex flex-col md:flex-row items-center justify-between gap-md">

<div className="flex items-center gap-md w-full md:w-auto">
<div className="w-10 h-10 rounded-xl bg-surface-subtle text-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[24px]">support_agent</span>
</div>
<div className="flex flex-col">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase tracking-wider">Kisan Sahayata Desk (24x7)</span>
<a className="font-title-md text-title-md text-text-primary hover:text-primary font-bold transition-colors" href="tel:18001801551">
            1800-180-1551 <span className="font-body-sm text-body-sm text-status-serving font-medium">(निःशुल्क कॉल)</span>
</a>
</div>
</div>

<div className="flex flex-wrap items-center gap-sm w-full md:w-auto justify-end">
<a className="flex-1 sm:flex-none h-12 px-md rounded-xl bg-surface-card hover:bg-surface-subtle text-text-primary font-label-lg text-label-lg font-semibold flex items-center justify-center gap-xs transition-colors shadow-sm" data-path="rent-equipment" href="#">
<span className="material-symbols-outlined text-[18px]">arrow_back</span>
<span>Back to Equipment (अन्य उपकरण)</span>
</a>
<button className="flex-1 sm:flex-none h-12 px-md rounded-xl bg-surface-subtle hover:bg-surface-container text-text-primary font-label-lg text-label-lg font-semibold flex items-center justify-center gap-xs transition-colors" onClick={() => {}} type="button">
<span className="material-symbols-outlined text-[18px]">download_for_offline</span>
<span>Download Gate Pass (रसीद)</span>
</button>
<a className="w-full sm:w-auto h-12 px-lg rounded-xl bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg font-semibold flex items-center justify-center gap-xs transition-all shadow-md" data-path="procurement" href="#">
<span>View Rental Details (विवरण देखें)</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
</div>
</div>
</div>



    </>
  );
}
