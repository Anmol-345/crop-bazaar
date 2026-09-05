"use client";
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-canvas-warm font-body-md text-text-primary antialiased selection:bg-primary-fixed selection:text-on-primary-fixed min-h-screen">
      <Sidebar />
      <div className="pl-64">
        <Header />
        <main className="w-full pt-16 bg-canvas-warm min-h-screen">
          <div className="flex flex-col w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
