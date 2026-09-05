/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import Link from 'next/link';

export default function BookingConfirmation() {
  return (
    <main className="w-full min-h-[80vh] overflow-y-auto bg-gray-50 flex items-center justify-center p-4">
      <div className="w-[95%] sm:w-[448px] flex-shrink-0 bg-surface-card rounded-3xl p-8 shadow-sm border border-canvas-outline/10 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-status-success"></div>
        
        <div className="mx-auto w-20 h-20 bg-status-success/10 rounded-full flex items-center justify-center mb-6">
          <span className="material-symbols-outlined text-[40px] text-status-success">check_circle</span>
        </div>
        
        <h1 className="font-headline-md text-headline-md text-forest-deep mb-2">Booking Confirmed!</h1>
        <p className="font-body-md text-text-secondary mb-8">Your procurement slot has been successfully scheduled.</p>
        
        <div className="bg-surface-subtle rounded-2xl p-6 mb-8 text-left space-y-4">
          <div>
            <p className="text-xs text-text-muted uppercase tracking-wider mb-1">Token Number</p>
            <p className="font-headline-sm text-primary tracking-widest">WB-1042</p>
          </div>
          <hr className="border-canvas-outline/50" />
          <div>
            <p className="text-xs text-text-muted uppercase tracking-wider mb-1">Farmer</p>
            <p className="font-bold text-text-primary">Rajesh Kumar</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-text-muted uppercase tracking-wider mb-1">Date</p>
              <p className="font-bold text-text-primary">15 May 2024</p>
            </div>
            <div>
              <p className="text-xs text-text-muted uppercase tracking-wider mb-1">Time Slot</p>
              <p className="font-bold text-text-primary">10:00 AM</p>
            </div>
          </div>
          <hr className="border-canvas-outline/50" />
          <div>
            <p className="text-xs text-text-muted uppercase tracking-wider mb-1">Centre</p>
            <p className="font-bold text-text-primary">Sonipat Procurement Centre</p>
          </div>
        </div>
        
        <div className="flex flex-col gap-3">
          <Link href="/procurement/queue" className="w-full h-12 flex items-center justify-center bg-primary hover:bg-primary-hover text-white rounded-xl font-label-lg transition-colors shadow-sm">
            View Live Queue
          </Link>
          <Link href="/dashboard" className="w-full h-12 flex items-center justify-center bg-transparent hover:bg-surface-subtle text-primary rounded-xl font-label-lg transition-colors">
            Return to Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}