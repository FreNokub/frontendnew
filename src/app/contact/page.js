import Link from 'next/link'

export default function Contact() {
  return (
    // เปลี่ยนพื้นหลังเป็นสีดำดาร์กมืด พร้อมเอฟเฟกต์เรืองแสงเบาๆ รอบหน้าจอ
    <div className="relative flex flex-col items-center justify-center min-h-[85vh] text-center px-6 bg-zinc-950 overflow-hidden font-sans">
      
      {/* เอฟเฟกต์แสงเรืองแสงพื้นหลัง (Ambient Glow) */}
      <div className="absolute w-[400px] h-[400px] bg-cyan-900/20 rounded-full blur-[140px] pointer-events-none" />

      {/* กล่องการ์ดครอบเนื้อหาหลัก พร้อมขอบเรืองแสงและเงานีออน */}
      <div className="relative max-w-xl w-full rounded-3xl border border-cyan-500/20 bg-zinc-900/80 backdrop-blur-xl p-10 shadow-[0_0_30px_rgba(34,211,238,0.05)] overflow-hidden">
        
        {/* ดีเทลลูกเล่นแสงสะท้อนทรงกลมจางๆ ด้านใน */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

        {/* หัวข้อ Contact Page พร้อมไล่สีเรืองแสง */}
        <h1 className="text-4xl font-black text-white tracking-tight sm:text-5xl">
          Contact{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]">
            Page
          </span>
        </h1>
        
        {/* ชื่อ Pannatad Mankeaw LOL พร้อมปรับให้ดูเด่นขึ้น */}
        <p className="mt-5 text-lg leading-relaxed text-zinc-300 max-w-md mx-auto font-medium">
          ชื่อ <span className="text-cyan-400 font-semibold drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">Pannatad Mankeaw LOL</span>
        </p>

        {/* ปุ่ม Action ด้านล่างสำหรับกลับหน้าหลัก */}
        <div className="mt-8 pt-6 border-t border-zinc-800/80">
          <Link 
            href="/" 
            className="relative inline-flex items-center justify-center rounded-full bg-cyan-600 px-8 py-3.5 text-sm font-bold text-white shadow-[0_0_15px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] hover:bg-cyan-500 transition-all duration-300 active:scale-95 group overflow-hidden"
          >
            {/* เอฟเฟกต์แสงสะท้อนในปุ่ม */}
            <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] skew-x-12" />
            
            <span className="relative z-10 flex items-center gap-2">
              <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              กลับสู่หน้าหลัก
            </span>
          </Link>
        </div>

      </div>

      {/* Keyframes สำหรับอนิเมชันแสงสะท้อนในปุ่ม */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shimmer {
          100% { transform: translateX(100%) skewX(12deg); }
        }
      `}} />

    </div>
  );
}