"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

export default function historyPage() {
  return (
    <div className="w-full">
      
<div className="max-w-[75rem] mx-auto w-full px-gutter-mobile md:px-gutter-desktop py-lg space-y-xl">

<div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-md md:items-end">
<div className="space-y-xs w-full min-w-0">
<nav className="flex items-center gap-xs text-text-muted font-label-md text-label-md">
<span className="hover:text-primary transition-colors cursor-pointer">Home</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="hover:text-primary transition-colors cursor-pointer">Payments</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="text-primary font-bold">Payment History</span>
</nav>
<div className="flex items-center gap-sm flex-wrap">
<h1 className="font-headline-lg text-headline-lg text-text-primary tracking-tight">
            Payment History <span className="text-primary font-headline-md text-headline-md font-medium">(भुगतान इतिहास)</span>
</h1>
<span className="inline-flex items-center gap-base px-sm py-xs bg-status-serving-bg text-status-serving rounded-full font-label-stamp text-label-stamp font-bold uppercase tracking-wider">
<span className="w-2 h-2 rounded-full bg-status-serving"></span>
            PFMS Verified
          </span>
</div>
<p className="font-body-md text-body-md text-text-muted w-full leading-relaxed">
          Direct Benefit Transfer (DBT) records and settlement statuses for your crop procurements verified through the central PFMS gateway.
        </p>
</div>

<div className="flex items-center gap-sm flex-wrap self-start md:self-end shrink-0">
<button className="flex items-center gap-xs px-md py-xs bg-surface-card hover:bg-surface-subtle text-text-primary font-label-lg text-label-lg rounded-xl shadow-sm transition-all h-touch-min" type="button">
<span className="material-symbols-outlined text-[18px] text-primary">calendar_month</span>
<span>Consolidated FY 24–25 Statement</span>
</button>
<button className="flex items-center gap-xs px-md py-xs bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg rounded-xl shadow-sm transition-all h-touch-min" type="button">
<span className="material-symbols-outlined text-[18px]">download</span>
<span>Export PDF</span>
</button>
</div>
</div>

<section className="grid grid-cols-1 md:grid-cols-3 gap-md">

<div className="relative bg-surface-card rounded-xl p-lg shadow-sm flex flex-col justify-between overflow-hidden group hover:shadow-md transition-shadow">
<div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-primary-fixed/20 blur-xl pointer-events-none"></div>
<div className="flex items-center justify-between pb-sm">
<div className="flex items-center gap-xs">
<span className="p-xs bg-status-serving-bg rounded-lg text-status-serving">
<span className="material-symbols-outlined text-[20px]">account_balance_wallet</span>
</span>
<span className="font-label-stamp text-label-stamp text-text-muted uppercase tracking-wider font-bold">TOTAL DISBURSED (कुल भुगतान)</span>
</div>
<span className="px-xs py-base bg-surface-subtle text-text-secondary font-label-stamp text-label-stamp rounded-full">FY 24–25</span>
</div>
<div className="space-y-xs pt-xs">
<div className="font-metric-large text-metric-large text-text-primary tracking-tight flex items-baseline gap-xs">
            ₹4,05,765
            <span className="font-label-md text-label-md text-text-muted font-normal">INR</span>
</div>
<div className="inline-flex items-center gap-base px-xs py-base bg-status-serving-bg text-status-serving rounded-md font-label-stamp text-label-stamp font-semibold">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
<span>100% Settled via Aadhaar-linked DBT</span>
</div>
</div>
</div>

<div className="relative bg-surface-card rounded-xl p-lg shadow-sm flex flex-col justify-between overflow-hidden group hover:shadow-md transition-shadow">
<div className="absolute -right-4 -top-4 w-20 h-20 rounded-full bg-secondary-fixed/20 blur-lg pointer-events-none"></div>
<div className="flex items-center justify-between pb-sm">
<div className="flex items-center gap-xs">
<span className="p-xs bg-status-confirmed-bg rounded-lg text-status-confirmed">
<span className="material-symbols-outlined text-[20px]">account_balance</span>
</span>
<span className="font-label-stamp text-label-stamp text-text-muted uppercase tracking-wider font-bold">DESIGNATED DBT ACCOUNT (बैंक खाता)</span>
</div>
<span className="px-xs py-base bg-status-serving-bg text-status-serving font-label-stamp text-label-stamp rounded-full font-semibold">Primary</span>
</div>
<div className="space-y-base pt-xs">
<div className="font-title-md text-title-md text-text-primary font-bold leading-snug">
            State Bank of India
          </div>
<div className="font-body-sm text-body-sm text-text-secondary flex items-center gap-xs">
<span className="font-mono font-medium">A/C •••• 4902</span>
<span className="text-text-muted">•</span>
<span className="font-mono text-text-muted">IFSC: SBIN0001234</span>
</div>
</div>
</div>

<div className="relative bg-surface-card rounded-xl p-lg shadow-sm flex flex-col justify-between overflow-hidden group hover:shadow-md transition-shadow">
<div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-status-waiting-bg blur-lg pointer-events-none"></div>
<div className="flex items-center justify-between pb-sm">
<div className="flex items-center gap-xs">
<span className="p-xs bg-surface-subtle rounded-lg text-metric-positive">
<span className="material-symbols-outlined text-[20px]">verified</span>
</span>
<span className="font-label-stamp text-label-stamp text-text-muted uppercase tracking-wider font-bold">LATEST SETTLEMENT (अंतिम किश्त)</span>
</div>
<span className="font-label-stamp text-label-stamp text-metric-positive font-bold flex items-center gap-base">
<span className="w-1.5 h-1.5 rounded-full bg-metric-positive animate-pulse"></span>
            Auto-Credited
          </span>
</div>
<div className="space-y-base pt-xs">
<div className="font-metric-medium text-metric-medium text-metric-positive flex items-center gap-xs">
<span>₹1,20,765</span>
<span className="font-label-stamp text-label-stamp bg-status-serving-bg px-xs py-base rounded uppercase font-bold text-status-serving">CREDITED</span>
</div>
<div className="font-body-sm text-body-sm text-text-muted flex items-center gap-base">
<span className="material-symbols-outlined text-[14px]">event</span>
<span>15 Oct 2024 (Wheat Procurement)</span>
</div>
</div>
</div>
</section>

<div className="bg-surface-card rounded-xl p-md shadow-sm space-y-md">
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-md">

<div className="flex items-center gap-xs overflow-x-auto pb-base lg:pb-0 scrollbar-none">
<button className="px-md py-xs bg-forest-deep text-on-primary font-label-lg text-label-lg rounded-full shrink-0 shadow-sm" type="button">
            All Payments (6)
          </button>
<button className="px-md py-xs bg-surface-subtle hover:bg-surface-container text-text-secondary font-label-lg text-label-lg rounded-full shrink-0 transition-colors" type="button">
            Wheat • गेहूँ (3)
          </button>
<button className="px-md py-xs bg-surface-subtle hover:bg-surface-container text-text-secondary font-label-lg text-label-lg rounded-full shrink-0 transition-colors" type="button">
            Mustard • सरसों (2)
          </button>
<button className="px-md py-xs bg-surface-subtle hover:bg-surface-container text-text-secondary font-label-lg text-label-lg rounded-full shrink-0 transition-colors" type="button">
            Paddy • धान (1)
          </button>
</div>

<div className="flex items-center gap-sm flex-wrap">
<div className="relative min-w-[170px]">
<select aria-label="Fiscal Period" className="w-full h-11 px-md pr-xl bg-surface-subtle text-text-primary font-label-md text-label-md rounded-xl appearance-none outline-none focus:bg-surface-card cursor-pointer">
<option >Period: FY 2024–25</option>
<option>Period: FY 2023–24</option>
<option>Period: Last 90 Days</option>
</select>
<span className="material-symbols-outlined absolute right-md top-1/2 -translate-y-1/2 pointer-events-none text-[18px] text-text-muted">expand_more</span>
</div>
<div className="relative min-w-[170px]">
<select aria-label="Procurement Mandi Location" className="w-full h-11 px-md pr-xl bg-surface-subtle text-text-primary font-label-md text-label-md rounded-xl appearance-none outline-none focus:bg-surface-card cursor-pointer">
<option >All Mandis</option>
<option>Karnal Central Yard</option>
<option>Taraori Food Corp Silo</option>
<option>Sonipat APMC Yard</option>
</select>
<span className="material-symbols-outlined absolute right-md top-1/2 -translate-y-1/2 pointer-events-none text-[18px] text-text-muted">storefront</span>
</div>
</div>
</div>
</div>

<div className="space-y-lg">

<article className="bg-surface-card rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
<div className="p-lg space-y-md">

<div className="flex flex-col md:flex-row md:items-start justify-between gap-sm">
<div className="flex items-start gap-md">
<div className="w-12 h-12 rounded-xl bg-status-waiting-bg text-status-waiting flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[26px]">grain</span>
</div>
<div className="space-y-base">
<div className="flex items-center gap-sm flex-wrap">
<h2 className="font-title-md text-title-md text-text-primary font-bold">
                    Sharbati Wheat (Grade A गेहूँ)
                  </h2>
<span className="font-mono text-label-stamp text-label-stamp bg-surface-subtle px-xs py-base rounded text-text-muted font-bold">
                    #BK-7741
                  </span>
</div>
<div className="flex items-center gap-md text-text-muted font-body-sm text-body-sm flex-wrap">
<span className="flex items-center gap-base">
<span className="material-symbols-outlined text-[16px] text-metric-positive">schedule</span>
                    Paid on 15 Oct 2024, 02:45 PM
                  </span>
<span className="flex items-center gap-base">
<span className="material-symbols-outlined text-[16px] text-text-muted">location_on</span>
                    Karnal Central Yard (Gate 2)
                  </span>
</div>
</div>
</div>
<div className="self-start md:self-auto shrink-0">
<div className="flex items-center gap-xs px-sm py-xs bg-status-completed-bg text-status-completed rounded-full">
<span className="w-2 h-2 rounded-full bg-status-completed"></span>
<span className="font-label-stamp text-label-stamp font-bold tracking-wider">COMPLETED • DBT CREDITED</span>
</div>
</div>
</div>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-md p-md bg-canvas-warm rounded-xl">
<div className="space-y-base">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase tracking-wider font-semibold">Procured Weight</span>
<div className="font-metric-medium text-metric-medium text-text-primary">45.00 Qtl</div>
<span className="font-body-sm text-body-sm text-text-muted block">4,500 kg Net Wt.</span>
</div>
<div className="space-y-base">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase tracking-wider font-semibold">Agreed Rate / MSP</span>
<div className="font-metric-medium text-metric-medium text-text-primary">₹2,425 <span className="font-label-md text-label-md font-normal text-text-muted">/ Qtl</span></div>
<span className="font-body-sm text-body-sm text-status-serving font-medium block">+ ₹11,640 Govt Incentive</span>
</div>
<div className="space-y-base">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase tracking-wider font-semibold">Beneficiary Account</span>
<div className="font-label-lg text-label-lg text-text-primary font-mono">SBI •••• 4902</div>
<span className="font-body-sm text-body-sm text-status-serving font-medium flex items-center gap-base">
<span className="material-symbols-outlined text-[14px]">shield</span> Aadhaar Seeded
              </span>
</div>
<div className="space-y-base">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase tracking-wider font-semibold">Total Net Credit</span>
<div className="font-metric-medium text-metric-medium text-metric-positive">₹1,20,765</div>
<span className="font-body-sm text-body-sm text-text-muted block">Zero deductions</span>
</div>
</div>
</div>

<div className="bg-surface-subtle/80 px-lg py-sm flex flex-col sm:flex-row items-center justify-between gap-sm">
<div className="flex items-center gap-xs text-text-secondary font-body-sm text-body-sm">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase font-bold">PFMS UTR:</span>
<span className="font-mono font-semibold text-text-primary select-all" id="utr-1">UTR-SBI-8920148921</span>
<button aria-label="Copy UTR-SBI-8920148921" className="p-base hover:bg-surface-card rounded text-text-muted hover:text-text-primary transition-colors" onClick={() => {}} type="button">
<span className="material-symbols-outlined text-[15px]">content_copy</span>
</button>
</div>
<div className="flex items-center gap-xs w-full sm:w-auto justify-end">
<button className="flex items-center gap-xs px-md py-xs bg-surface-card hover:bg-surface-container text-text-primary font-label-md text-label-md rounded-lg shadow-sm transition-colors" type="button">
<span className="material-symbols-outlined text-[16px] text-primary">description</span>
<span>View Payment Advice &amp; Receipt</span>
</button>
<button aria-label="Print receipt for Wheat" className="p-xs bg-surface-card hover:bg-surface-container text-text-secondary rounded-lg shadow-sm transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">print</span>
</button>
</div>
</div>
</article>

<article className="bg-surface-card rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
<div className="p-lg space-y-md">

<div className="flex flex-col md:flex-row md:items-start justify-between gap-sm">
<div className="flex items-start gap-md">
<div className="w-12 h-12 rounded-xl bg-status-serving-bg text-status-serving flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[26px]">spa</span>
</div>
<div className="space-y-base">
<div className="flex items-center gap-sm flex-wrap">
<h2 className="font-title-md text-title-md text-text-primary font-bold">
                    Mustard / Sarson (Pusa Bold सरसों)
                  </h2>
<span className="font-mono text-label-stamp text-label-stamp bg-surface-subtle px-xs py-base rounded text-text-muted font-bold">
                    #BK-6210
                  </span>
</div>
<div className="flex items-center gap-md text-text-muted font-body-sm text-body-sm flex-wrap">
<span className="flex items-center gap-base">
<span className="material-symbols-outlined text-[16px] text-metric-positive">schedule</span>
                    Paid on 23 Sep 2024, 11:15 AM
                  </span>
<span className="flex items-center gap-base">
<span className="material-symbols-outlined text-[16px] text-text-muted">warehouse</span>
                    Taraori Food Corp Silo
                  </span>
</div>
</div>
</div>
<div className="self-start md:self-auto shrink-0">
<div className="flex items-center gap-xs px-sm py-xs bg-status-completed-bg text-status-completed rounded-full">
<span className="w-2 h-2 rounded-full bg-status-completed"></span>
<span className="font-label-stamp text-label-stamp font-bold tracking-wider">COMPLETED • DBT CREDITED</span>
</div>
</div>
</div>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-md p-md bg-canvas-warm rounded-xl">
<div className="space-y-base">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase tracking-wider font-semibold">Procured Weight</span>
<div className="font-metric-medium text-metric-medium text-text-primary">30.00 Qtl</div>
<span className="font-body-sm text-body-sm text-text-muted block">Oil content: 41.8%</span>
</div>
<div className="space-y-base">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase tracking-wider font-semibold">Agreed Rate / MSP</span>
<div className="font-metric-medium text-metric-medium text-text-primary">₹5,620 <span className="font-label-md text-label-md font-normal text-text-muted">/ Qtl</span></div>
<span className="font-body-sm text-body-sm text-status-serving font-medium block">Grade A bonus applied</span>
</div>
<div className="space-y-base">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase tracking-wider font-semibold">Beneficiary Account</span>
<div className="font-label-lg text-label-lg text-text-primary font-mono">SBI •••• 4902</div>
<span className="font-body-sm text-body-sm text-text-muted block">Direct Transfer</span>
</div>
<div className="space-y-base">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase tracking-wider font-semibold">Total Net Credit</span>
<div className="font-metric-medium text-metric-medium text-metric-positive">₹1,68,600</div>
<span className="font-body-sm text-body-sm text-status-serving font-medium block">Transferred in 24 hrs</span>
</div>
</div>
</div>

<div className="bg-surface-subtle/80 px-lg py-sm flex flex-col sm:flex-row items-center justify-between gap-sm">
<div className="flex items-center gap-xs text-text-secondary font-body-sm text-body-sm">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase font-bold">PFMS UTR:</span>
<span className="font-mono font-semibold text-text-primary select-all">UTR-PUNB-4710928371</span>
<button aria-label="Copy UTR-PUNB-4710928371" className="p-base hover:bg-surface-card rounded text-text-muted hover:text-text-primary transition-colors" onClick={() => {}} type="button">
<span className="material-symbols-outlined text-[15px]">content_copy</span>
</button>
</div>
<div className="flex items-center gap-xs w-full sm:w-auto justify-end">
<button className="flex items-center gap-xs px-md py-xs bg-surface-card hover:bg-surface-container text-text-primary font-label-md text-label-md rounded-lg shadow-sm transition-colors" type="button">
<span className="material-symbols-outlined text-[16px] text-primary">description</span>
<span>View Payment Advice &amp; Receipt</span>
</button>
<button aria-label="Print receipt for Mustard" className="p-xs bg-surface-card hover:bg-surface-container text-text-secondary rounded-lg shadow-sm transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">print</span>
</button>
</div>
</div>
</article>

<article className="bg-surface-card rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
<div className="p-lg space-y-md">

<div className="flex flex-col md:flex-row md:items-start justify-between gap-sm">
<div className="flex items-start gap-md">
<div className="w-12 h-12 rounded-xl bg-status-confirmed-bg text-status-confirmed flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[26px]">grass</span>
</div>
<div className="space-y-base">
<div className="flex items-center gap-sm flex-wrap">
<h2 className="font-title-md text-title-md text-text-primary font-bold">
                    Basmati Paddy 1121 (Grade A Fine धान)
                  </h2>
<span className="font-mono text-label-stamp text-label-stamp bg-surface-subtle px-xs py-base rounded text-text-muted font-bold">
                    #BK-4982
                  </span>
</div>
<div className="flex items-center gap-md text-text-muted font-body-sm text-body-sm flex-wrap">
<span className="flex items-center gap-base">
<span className="material-symbols-outlined text-[16px] text-metric-positive">schedule</span>
                    Paid on 07 Jun 2024, 04:20 PM
                  </span>
<span className="flex items-center gap-base">
<span className="material-symbols-outlined text-[16px] text-text-muted">domain</span>
                    Sonipat APMC Main Yard
                  </span>
</div>
</div>
</div>
<div className="self-start md:self-auto shrink-0">
<div className="flex items-center gap-xs px-sm py-xs bg-status-completed-bg text-status-completed rounded-full">
<span className="w-2 h-2 rounded-full bg-status-completed"></span>
<span className="font-label-stamp text-label-stamp font-bold tracking-wider">COMPLETED • DBT CREDITED</span>
</div>
</div>
</div>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-md p-md bg-canvas-warm rounded-xl">
<div className="space-y-base">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase tracking-wider font-semibold">Procured Weight</span>
<div className="font-metric-medium text-metric-medium text-text-primary">60.00 Qtl</div>
<span className="font-body-sm text-body-sm text-status-serving font-medium block">Moisture: 13.2% Pass</span>
</div>
<div className="space-y-base">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase tracking-wider font-semibold">Agreed Rate / MSP</span>
<div className="font-metric-medium text-metric-medium text-text-primary">₹1,940 <span className="font-label-md text-label-md font-normal text-text-muted">/ Qtl</span></div>
<span className="font-body-sm text-body-sm text-text-muted block">Standard APMC Auction</span>
</div>
<div className="space-y-base">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase tracking-wider font-semibold">Beneficiary Account</span>
<div className="font-label-lg text-label-lg text-text-primary font-mono">SBI •••• 4902</div>
<span className="font-body-sm text-body-sm text-text-muted block">Direct Transfer</span>
</div>
<div className="space-y-base">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase tracking-wider font-semibold">Total Net Credit</span>
<div className="font-metric-medium text-metric-medium text-metric-positive">₹1,16,400</div>
<span className="font-body-sm text-body-sm text-status-serving font-medium block">DBT Settlement</span>
</div>
</div>
</div>

<div className="bg-surface-subtle/80 px-lg py-sm flex flex-col sm:flex-row items-center justify-between gap-sm">
<div className="flex items-center gap-xs text-text-secondary font-body-sm text-body-sm">
<span className="font-label-stamp text-label-stamp text-text-muted uppercase font-bold">PFMS UTR:</span>
<span className="font-mono font-semibold text-text-primary select-all">UTR-HDFC-9912048512</span>
<button aria-label="Copy UTR-HDFC-9912048512" className="p-base hover:bg-surface-card rounded text-text-muted hover:text-text-primary transition-colors" onClick={() => {}} type="button">
<span className="material-symbols-outlined text-[15px]">content_copy</span>
</button>
</div>
<div className="flex items-center gap-xs w-full sm:w-auto justify-end">
<button className="flex items-center gap-xs px-md py-xs bg-surface-card hover:bg-surface-container text-text-primary font-label-md text-label-md rounded-lg shadow-sm transition-colors" type="button">
<span className="material-symbols-outlined text-[16px] text-primary">description</span>
<span>View Payment Advice &amp; Receipt</span>
</button>
<button aria-label="Print receipt for Paddy" className="p-xs bg-surface-card hover:bg-surface-container text-text-secondary rounded-lg shadow-sm transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">print</span>
</button>
</div>
</div>
</article>
</div>

<section className="bg-forest-deep text-on-primary rounded-xl p-lg shadow-sm relative overflow-hidden">
<div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-primary-fixed/10 blur-2xl pointer-events-none"></div>
<div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-lg relative z-10">
<div className="flex items-start gap-md max-w-3xl">
<div className="w-12 h-12 rounded-xl bg-surface-card/10 backdrop-blur text-primary-fixed flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[28px]">verified_user</span>
</div>
<div className="space-y-xs">
<div className="flex items-center gap-sm flex-wrap">
<h3 className="font-title-md text-title-md font-bold text-on-primary">
                100% DBT Aadhaar-Settled Guarantee (PFMS Integrated)
              </h3>
<span className="px-xs py-base bg-surface-card/20 rounded font-label-stamp text-label-stamp tracking-wider font-semibold">
                MoAFW Compliance
              </span>
</div>
<p className="font-body-sm text-body-sm text-inverse-on-surface/90 leading-relaxed">
              All procurement transactions are directly processed via the Public Financial Management System (PFMS) and credited into your Aadhaar-linked bank account within 48 to 72 hours of weighing. In case of transfer delay, statutory APMC late interest is automatically credited.
            </p>
<div className="flex items-center gap-md pt-xs flex-wrap font-body-sm text-body-sm text-tertiary-fixed">
<span className="flex items-center gap-base">
<span className="material-symbols-outlined text-[16px]">call</span>
                Kisan Call Center: <strong className="text-on-primary">1800-180-1551</strong> (Toll Free)
              </span>
<span className="flex items-center gap-base">
<span className="material-symbols-outlined text-[16px]">verified</span>
                Certified Aadhaar DBT Node Gate 3
              </span>
</div>
</div>
</div>
<div className="shrink-0 w-full lg:w-auto">
<button className="w-full lg:w-auto flex items-center justify-center gap-xs px-lg py-sm bg-primary-fixed text-on-primary-fixed hover:bg-primary-fixed-dim font-label-lg text-label-lg rounded-xl shadow transition-all h-touch-min" type="button">
<span className="material-symbols-outlined text-[20px]">help_center</span>
<span>Payment Assistance (सहायता)</span>
</button>
</div>
</div>
</section>

<div className="fixed bottom-6 right-6 z-50">
<button aria-label="Ask DBT and Payment queries by voice" className="flex items-center gap-sm pl-md pr-lg py-sm bg-forest-deep text-on-primary hover:bg-primary rounded-full shadow-[0_12px_24px_-4px_rgba(6,78,59,0.35)] transition-all transform hover:scale-105 active:scale-95 group" type="button">
<div className="relative w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[20px] text-primary-fixed animate-pulse">mic</span>
</div>
<div className="flex flex-col text-left">
<span className="font-label-lg text-label-lg font-bold leading-none tracking-tight">बोल कर भुगतान पूछें</span>
<span className="font-label-stamp text-label-stamp text-secondary-fixed opacity-90 leading-tight">Ask by Voice</span>
</div>
</button>
</div>
</div>

    </div>
  );
}
