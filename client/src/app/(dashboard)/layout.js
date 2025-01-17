'use client';

import React, { useState } from 'react';
import Header from '@/components/Header'; // Header component
import Sidebar from '@/components/Sidebar'; // Sidebar component

export default function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar toggle state

  const onToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col max-h-screen">
      {/* Header */}
      <Header onToggleSidebar={onToggleSidebar} />

      {/* Main Section with Sidebar and Dynamic Content */}
      <div className="flex flex-row flex-1 overflow-hidden pt-0">
        {/* Sidebar */}
        <Sidebar isSidebarOpen={isSidebarOpen} />

        {/* Dynamic Content */}
        <main className="flex-1 p-4 overflow-y-auto  ">
          {children}
        </main>
      </div>
    </div>
  );
}
