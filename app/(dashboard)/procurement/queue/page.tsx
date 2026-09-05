/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import Link from 'next/link';

export default function LiveQueue() {
  return (
    <main className="flex-1 overflow-y-auto bg-gray-50">
      <div className="max-w-4xl mx-auto p-4 md:p-6 lg:p-8">
        
        <div className="flex items-center gap-4 mb-8">
          <Link href="/dashboard" className="p-2 hover:bg-surface-subtle rounded-full transition-colors">
            <span className="material-symbols-outlined text-text-secondary">arrow_back</span>
          </Link>
          <h1 className="font-headline-md text-headline-md text-forest-deep tracking-tight">Live Queue Status</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-primary text-white rounded-3xl p-8 relative overflow-hidden shadow-md">
            <div className="absolute -right-10 -bottom-10 opacity-10">
              <span className="material-symbols-outlined text-[200px]">group</span>
            </div>
            <p className="text-primary-container font-label-lg mb-2 uppercase tracking-wide">Your Token</p>
            <h2 className="font-headline-lg text-[48px] tracking-widest mb-6">WB-1042</h2>
            
            <div className="bg-black/20 rounded-xl p-4 inline-block">
              <p className="text-sm text-primary-container mb-1">Currently Serving</p>
              <p className="font-headline-sm text-2xl">WB-1025</p>
            </div>
          </div>

          <div className="bg-surface-card rounded-3xl p-8 shadow-sm border border-canvas-outline/10 flex flex-col justify-center">
            <h3 className="font-headline-sm text-forest-deep mb-6">Queue Details</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-status-warning/10 flex items-center justify-center text-status-warning">
                  <span className="material-symbols-outlined">person_search</span>
                </div>
                <div>
                  <p className="text-text-secondary text-sm">Farmers Ahead</p>
                  <p className="font-bold text-xl text-text-primary">17</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-status-serving/10 flex items-center justify-center text-status-serving">
                  <span className="material-symbols-outlined">schedule</span>
                </div>
                <div>
                  <p className="text-text-secondary text-sm">Estimated Wait</p>
                  <p className="font-bold text-xl text-text-primary">45 mins</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">directions_car</span>
                </div>
                <div>
                  <p className="text-text-secondary text-sm">Recommended Departure</p>
                  <p className="font-bold text-xl text-text-primary">09:15 AM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-surface-card rounded-2xl p-6 shadow-sm border border-canvas-outline/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-surface-subtle rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">location_on</span>
            </div>
            <div>
              <h4 className="font-bold text-text-primary">Sonipat Procurement Centre</h4>
              <p className="text-sm text-text-secondary">15 May 2024 • 10:00 AM Slot</p>
            </div>
          </div>
          <Link href="/procurement/status" className="w-full md:w-auto px-8 h-12 flex items-center justify-center bg-primary hover:bg-primary-hover text-white rounded-xl font-label-lg transition-colors shadow-sm">
            Check-In at Centre
          </Link>
        </div>

      </div>
    </main>
  );
}