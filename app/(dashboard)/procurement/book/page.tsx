/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function BookProcurement() {
  const [date, setDate] = useState('2024-05-15');
  const [slot, setSlot] = useState('10:00 AM');
  
  return (
    <main className="flex-1 overflow-y-auto bg-gray-50">
      <div className="max-w-4xl mx-auto p-4 md:p-6 lg:p-8">
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/procurement-centres/1" className="p-2 hover:bg-surface-subtle rounded-full transition-colors">
            <span className="material-symbols-outlined text-text-secondary">arrow_back</span>
          </Link>
          <h1 className="font-headline-md text-headline-md text-forest-deep tracking-tight">Book Procurement Slot</h1>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Main Form Area */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-surface-card rounded-2xl p-6 shadow-sm border border-canvas-outline/10">
              <h2 className="font-headline-sm text-headline-sm text-forest-deep mb-4">Crop Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="font-label-md text-text-secondary">Select Crop</label>
                  <select className="h-12 px-4 rounded-xl border border-canvas-outline bg-surface-subtle focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all">
                    <option>Wheat (Rajesh Kumar)</option>
                    <option>Paddy</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-md text-text-secondary">Quantity (Quintals)</label>
                  <input type="number" defaultValue="50" className="h-12 px-4 rounded-xl border border-canvas-outline bg-surface-subtle focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                </div>
              </div>
            </div>

            <div className="bg-surface-card rounded-2xl p-6 shadow-sm border border-canvas-outline/10">
              <h2 className="font-headline-sm text-headline-sm text-forest-deep mb-4">Select Date & Time</h2>
              <div className="flex flex-col gap-6">
                <div>
                  <label className="font-label-md text-text-secondary block mb-2">Date</label>
                  <input type="date" value={date} onChange={e => setDate(e.target.value)} className="h-12 px-4 w-full md:w-1/2 rounded-xl border border-canvas-outline bg-surface-subtle focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                </div>
                <div>
                  <label className="font-label-md text-text-secondary block mb-3">Available Slots</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM'].map((t) => (
                      <button 
                        key={t}
                        onClick={() => setSlot(t)}
                        className={`py-3 px-4 rounded-xl font-label-md border transition-all ${slot === t ? 'bg-primary-container border-primary text-primary-dark shadow-sm' : 'border-canvas-outline text-text-secondary hover:bg-surface-subtle'}`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Summary */}
          <div className="space-y-6">
            <div className="bg-surface-card rounded-2xl p-6 shadow-sm border border-canvas-outline/10">
              <h3 className="font-headline-sm text-headline-sm text-forest-deep mb-4">Booking Summary</h3>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-canvas-outline/30 pb-3">
                  <span className="text-text-secondary">Centre</span>
                  <span className="font-bold text-text-primary text-right">Sonipat Procurement Centre</span>
                </div>
                <div className="flex justify-between border-b border-canvas-outline/30 pb-3">
                  <span className="text-text-secondary">Crop</span>
                  <span className="font-bold text-text-primary">Wheat (50 qtl)</span>
                </div>
                <div className="flex justify-between border-b border-canvas-outline/30 pb-3">
                  <span className="text-text-secondary">Date</span>
                  <span className="font-bold text-text-primary">15 May 2024</span>
                </div>
                <div className="flex justify-between border-b border-canvas-outline/30 pb-3">
                  <span className="text-text-secondary">Slot</span>
                  <span className="font-bold text-text-primary">{slot}</span>
                </div>
              </div>
              <Link href="/procurement/bookings/1/confirmation" className="mt-6 w-full h-12 flex items-center justify-center bg-primary hover:bg-primary-hover text-white rounded-xl font-label-lg transition-colors shadow-sm">
                Confirm Booking
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}