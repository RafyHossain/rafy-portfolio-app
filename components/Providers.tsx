'use client';

import { ReactLenis } from 'lenis/react';
import { ThemeProvider } from 'next-themes';
import { ReactNode, useEffect } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  
  useEffect(() => {
    /**
     * পেজ রিফ্রেশ করলে ব্রাউজার যেন আগের স্ক্রল পজিশন মনে না রাখে।
     * এটি নিশ্চিত করবে যে প্রতিবার রিফ্রেশে ইউজার টপে (Hero Section) ফিরে যাবে।
     */
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  return (
   
    <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
      <ReactLenis 
        root 
        options={{ 
          lerp: 0.05,       
          duration: 1.5,     
          smoothWheel: true, 
          wheelMultiplier: 1 
        }}
      >
        {children}
      </ReactLenis>
    </ThemeProvider>
  );
}