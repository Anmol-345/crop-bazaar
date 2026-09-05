/* eslint-disable @next/next/no-img-element */
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  const getLinkClasses = (path: string) => {
    // Special exact match for root dashboard to avoid matching everything
    const isActive = path === '/dashboard' 
      ? pathname === '/dashboard' 
      : pathname.startsWith(path);

    const baseClasses = "flex items-center justify-between px-md py-sm transition-colors rounded-xl font-label-lg text-label-lg";
    
    if (isActive) {
      return `${baseClasses} bg-primary-container text-on-primary shadow-[0_2px_4px_rgba(21,128,61,0.2)] font-semibold`;
    }
    
    return `${baseClasses} text-text-secondary hover:bg-surface-subtle hover:text-on-surface`;
  };

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-surface-card shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between select-none">
      <div className="flex flex-col">
        <div className="p-lg pb-sm">
          <Link href="/" className="flex items-center gap-sm cursor-pointer hover:opacity-90 transition-opacity">
            <div className="w-8 h-8 rounded-lg bg-[#b5e55a] flex items-center justify-center shadow-sm shrink-0">
              <svg className="w-5 h-5 text-[#1a2e0f]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.25 3.75a13.5 13.5 0 0 0-9.75 3.99A13.5 13.5 0 0 0 .75 17.49a.75.75 0 0 0 .75.76h9a13.46 13.46 0 0 0 9.75-4.25 13.46 13.46 0 0 0 0-10.25zM10.5 16.74H2.3c.7-3.7 3.32-6.72 6.84-8.03.35 1.54.88 3.01 1.57 4.38-.14 1.22-.21 2.45-.21 3.65zm8.44-3.55a12.02 12.02 0 0 1-7.85 3.51c.07-1.12.16-2.25.31-3.37.58-.09 1.17-.15 1.77-.15 2.05 0 3.96.65 5.77 1.01z" />
              </svg>
            </div>
            <span className="font-headline-sm text-headline-sm text-primary leading-none tracking-tight">CropBazaar</span>
          </Link>
        </div>
        
        <div className="px-lg py-xs">
          <div className="flex items-center justify-between px-sm py-xs bg-status-serving-bg rounded-lg">
            <div className="flex items-center gap-xs">
              <span className="w-2 h-2 rounded-full bg-status-serving animate-pulse"></span>
              <span className="font-label-stamp text-label-stamp text-status-serving uppercase font-bold tracking-wide">MANDI LIVE GATE 3</span>
            </div>
            <span className="px-xs py-base bg-surface-card rounded-full font-label-stamp text-label-stamp text-status-serving font-bold uppercase shadow-sm">Active</span>
          </div>
        </div>
        
        <nav className="flex flex-col gap-base px-md mt-sm">
          <Link href="/dashboard" className={getLinkClasses('/dashboard')}>
            <span>Dashboard</span>
          </Link>
          <Link href="/crops" className={getLinkClasses('/crops')}>
            <span>My Crops</span>
          </Link>
          <Link href="/procurement/book" className={getLinkClasses('/procurement/book')}>
            <span>Procurement</span>
          </Link>
          <Link href="/procurement/queue" className={getLinkClasses('/procurement/queue')}>
            <span>Live Queue</span>
            <span className="px-xs py-base bg-status-waiting-bg text-status-waiting font-label-stamp text-label-stamp font-bold rounded-full">Q-14</span>
          </Link>
          <Link href="/markets" className={getLinkClasses('/markets')}>
            <span>Markets</span>
          </Link>
          <Link href="/payments/history" className={getLinkClasses('/payments')}>
            <span>Payments</span>
          </Link>
          <Link href="/weather" className={getLinkClasses('/weather')}>
            <span>Weather</span>
          </Link>
          <Link href="/rent-equipment" className={getLinkClasses('/rent-equipment')}>
            <span>Rent Equipment</span>
          </Link>
          <Link href="/farmer-profile" className={getLinkClasses('/farmer-profile')}>
            <span>Farmer Profile</span>
          </Link>
        </nav>
      </div>
      
      <div className="p-md flex flex-col gap-base">
        <Link href="/help-and-support" className={getLinkClasses('/help-and-support')}>
          <span>Help &amp; Support</span>
        </Link>
        <Link href="/" className={getLinkClasses('/')}>
          <span>Logout</span>
        </Link>
      </div>
    </aside>
  );
}
