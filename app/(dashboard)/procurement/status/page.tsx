/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import Link from 'next/link';

export default function ProcurementStatus() {
  const steps = [
    { title: 'Check-In', time: '09:45 AM', completed: true, active: false, icon: 'where_to_vote' },
    { title: 'Weighing', time: '10:10 AM', completed: true, active: false, icon: 'scale' },
    { title: 'Quality Check', time: '10:35 AM', completed: true, active: false, icon: 'verified' },
    { title: 'Procurement Done', time: '11:00 AM', completed: true, active: false, icon: 'task_alt' },
    { title: 'Payment Processing', time: 'In Progress', completed: false, active: true, icon: 'payments' },
  ];

  return (
    <main className="flex-1 overflow-y-auto bg-gray-50">
      <div className="max-w-4xl mx-auto p-4 md:p-6 lg:p-8">
        
        <div className="flex items-center gap-4 mb-8">
          <Link href="/dashboard" className="p-2 hover:bg-surface-subtle rounded-full transition-colors">
            <span className="material-symbols-outlined text-text-secondary">arrow_back</span>
          </Link>
          <h1 className="font-headline-md text-headline-md text-forest-deep tracking-tight">Procurement Status</h1>
        </div>

        <div className="bg-surface-card rounded-3xl p-6 md:p-8 shadow-sm border border-canvas-outline/10 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <p className="text-sm text-text-secondary uppercase tracking-wider mb-1">Token WB-1042</p>
              <h2 className="font-headline-lg text-forest-deep">Rajesh Kumar</h2>
              <p className="text-text-muted">Wheat • 50 Quintals</p>
            </div>
            <div className="px-4 py-2 bg-status-success/10 text-status-success rounded-lg font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px]">check_circle</span>
              Procurement Successful
            </div>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-[23px] top-4 bottom-8 w-0.5 bg-canvas-outline"></div>

            {/* Steps */}
            <div className="space-y-8 relative">
              {steps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-6">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 z-10 ${step.completed ? 'bg-status-success text-white' : step.active ? 'bg-primary text-white ring-4 ring-primary/20' : 'bg-surface-subtle text-text-muted border border-canvas-outline'}`}>
                    <span className="material-symbols-outlined">{step.icon}</span>
                  </div>
                  <div className="pt-2">
                    <h3 className={`font-bold text-lg ${step.completed || step.active ? 'text-forest-deep' : 'text-text-muted'}`}>{step.title}</h3>
                    <p className="text-text-secondary">{step.time}</p>
                    
                    {step.title === 'Payment Processing' && (
                      <div className="mt-4 bg-surface-subtle rounded-xl p-4 border border-canvas-outline/50">
                        <p className="text-sm text-text-secondary mb-2">Amount to be credited:</p>
                        <p className="font-headline-sm text-forest-deep">₹ 1,13,750</p>
                        <p className="text-xs text-text-muted mt-2">Expected within 48 hours to registered HDFC Bank account ending in 4521.</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <Link href="/dashboard" className="px-8 h-12 flex items-center justify-center bg-primary hover:bg-primary-hover text-white rounded-xl font-label-lg transition-colors shadow-sm">
            Back to Dashboard
          </Link>
        </div>

      </div>
    </main>
  );
}