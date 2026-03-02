'use client';

export default function AnimatedBackground() {
  return (
    // 🌟 Base Color: ছবির মতো Deep Slate/Navy Blue টোন (#0f172a)
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-50 bg-[#0f172a]">
      
      {/* 🌟 1. Subtle Flat Grid (প্রথম ছবির রেফারেন্স অনুযায়ী) */}
      <div 
        className="absolute inset-0 opacity-[0.07]"
        style={{ 
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem' // গ্রিডের সাইজ
        }}
      />

      {/* 🌟 2. Soft Ambient Glows (ছবির Cyan ও Purple ভাইব ধরে রাখার জন্য) */}
      {/* Top Left Cyan Glow */}
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] min-w-[500px] min-h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />
      
      {/* Bottom Right Purple Glow */}
      <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] min-w-[500px] min-h-[500px] bg-purple-500/10 rounded-full blur-[120px]" />

      {/* 🌟 3. Vignette Effect (চারপাশটা একটু ডার্ক করে মাঝখানে ফোকাস রাখার জন্য) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0f172a_100%)] opacity-80" />

      {/* 🌟 4. Premium Grain Texture (খুবই হালকা নয়েজ যা স্ক্রিনকে গ্লাসি লুক দেয়) */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}