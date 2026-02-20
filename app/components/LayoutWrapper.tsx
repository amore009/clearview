'use client';

import React from 'react';
import { MenuProvider } from '@/app/context/MenuContext';
import { Navbar } from '@/app/components/Navbar';
import { MobileMenu } from '@/app/components/MobileMenu';

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <MenuProvider>
      <div className="min-h-screen bg-bg-white font-sans relative overflow-x-hidden">
        <MobileMenu />

        <div className="relative z-10 flex flex-col">
          {children}
        </div>
      </div>
    </MenuProvider>
  );
}
