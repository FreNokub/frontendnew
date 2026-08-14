import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="relative flex min-h-screen flex-col bg-zinc-950 overflow-hidden font-sans">
      
      {/* เอฟเฟกต์แสงเรืองแสงพื้นหลัง (Ambient Glow) */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-900/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px] pointer-events-none" />

      {/* ส่วนหัวข้อหลัก */}
      <section className="relative z-10 px-6 py-24 text-center border-b border-cyan-900/30 bg-zinc-950/50 backdrop-blur-sm shadow-[0_10px_40px_-10px_rgba(34,211,238,0.05)]">
        <h1 className="mb-6 text-4xl font-extrabold text-white sm:text-5xl md:text-6xl tracking-tight">
          เกี่ยวกับเรา{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]">
            Book Haven
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-zinc-400 leading-relaxed">
          พื้นที่สำหรับคนรักการอ่าน เพราะเราเชื่อว่าหนังสือทุกเล่มสามารถเปลี่ยนชีวิต 
          และพาคุณเดินทางไปได้ทั่วโลกโดยไม่ต้องก้าวขาออกจากบ้าน
        </p>
      </section>

      {/* ส่วนรายละเอียด */}
      <section className="relative z-10 mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 px-6 py-20 md:grid-cols-2">
        
        {/* กล่องรูปภาพพร้อมเอฟเฟกต์ลอยตัวเมื่อชี้ (Hover Float & Glow) */}
        <div className="group relative flex h-80 w-full items-center justify-center rounded-2xl bg-zinc-900 border border-cyan-500/20 text-cyan-600/50 shadow-[0_0_20px_rgba(34,211,238,0.05)] hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)] hover:-translate-y-2 transition-all duration-500 overflow-hidden cursor-crosshair">
          {/* แสงพาดผ่านตอน Hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <span className="relative z-10 font-bold tracking-widest uppercase text-sm group-hover:text-cyan-400 transition-colors duration-300 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">
            [ รูปภาพเกี่ยวกับร้าน ]
          </span>
        </div>

        {/* เนื้อหา */}
        <div className="flex flex-col justify-center">
          <h2 className="mb-6 text-3xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
            จุดเริ่มต้นจากความ<span className="text-cyan-400">หลงใหล</span>ในตัวอักษร
          </h2>
          <p className="mb-5 text-zinc-400 leading-relaxed text-lg">
            Book Haven ก่อตั้งขึ้นด้วยความตั้งใจที่จะรวบรวมหนังสือคุณภาพดี ทั้งวรรณกรรมคลาสสิก 
            หนังสือพัฒนาตนเอง และนิยายแปลน่าอ่าน มาไว้ในที่เดียว
          </p>
          <p className="text-zinc-400 leading-relaxed text-lg border-l-2 border-cyan-500/50 pl-4 py-1 bg-gradient-to-r from-cyan-900/10 to-transparent">
            เราคัดเลือกหนังสือทุกเล่มด้วยความใส่ใจ เพื่อให้มั่นใจว่าทุกหน้าที่คุณเปิดอ่านจะเต็มไปด้วยคุณค่าและความเพลิดเพลิน
          </p>
        </div>
      </section>

      {/* ปุ่มกลับหน้าแรก */}
      <section className="relative z-10 px-6 pb-24 pt-10 text-center">
        <Link 
          href="/" 
          className="relative inline-flex items-center justify-center rounded-full bg-cyan-600 px-8 py-3.5 font-bold text-white shadow-[0_0_15px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] hover:bg-cyan-500 transition-all duration-300 active:scale-95 group overflow-hidden"
        >
          {/* เอฟเฟกต์แสงสะท้อนในปุ่ม */}
          <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] skew-x-12" />
          
          <span className="relative z-10 flex items-center gap-2">
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            กลับสู่หน้าแรก
          </span>
        </Link>
      </section>

      {/* ใส่ Style สำหรับ Animation แสงวิ่งในปุ่ม */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shimmer {
          100% { transform: translateX(100%) skewX(12deg); }
        }
      `}} />

    </main>
  );
}