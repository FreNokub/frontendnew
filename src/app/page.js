import Link from "next/link";

export default function HomePage() {
  // ข้อมูลจำลองสำหรับหนังสือ
  const featuredBooks = [
    { title: "The Art of Thinking", author: "นักเขียน A", price: "฿250", color: "from-cyan-900/40 to-blue-900/40", tag: "ขายดี" },
    { title: "จักรวาลในกำมือ", author: "นักเขียน B", price: "฿320", color: "from-indigo-900/40 to-blue-900/40", tag: "มาใหม่" },
    { title: "พักผ่อนให้เป็น", author: "นักเขียน C", price: "฿199", color: "from-emerald-900/40 to-cyan-900/40", tag: "" },
    { title: "จิตวิทยาการลงทุน", author: "นักเขียน D", price: "฿290", color: "from-amber-900/40 to-orange-900/40", tag: "แนะนำ" },
  ];

  // ข้อมูลจำลองสำหรับหมวดหมู่
  const categories = [
    { name: "วรรณกรรมแปล", icon: "🌍", glow: "hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:border-purple-500/50" },
    { name: "พัฒนาตนเอง", icon: "🌱", glow: "hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:border-emerald-500/50" },
    { name: "ธุรกิจและการลงทุน", icon: "📈", glow: "hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:border-cyan-500/50" },
    { name: "นิยายสืบสวน", icon: "🕵️‍♂️", glow: "hover:shadow-[0_0_20px_rgba(244,63,94,0.3)] hover:border-rose-500/50" },
  ];

  return (
    <main className="relative flex min-h-screen flex-col bg-zinc-950 text-white overflow-hidden font-sans">
      
      {/* 1. Hero Section (แบนเนอร์หลัก) */}
      <section className="relative overflow-hidden pt-20 pb-32 lg:pt-28">
        {/* แสงวงกลมพื้นหลังเรืองแสง (Ambient Glow) */}
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-cyan-900/20 blur-[120px] pointer-events-none"></div>
        <div className="absolute top-1/2 right-0 h-96 w-96 -translate-y-1/2 translate-x-1/3 rounded-full bg-blue-900/20 blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-5xl font-black tracking-tight text-white sm:text-7xl">
            ค้นพบโลกใบใหม่ <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_20px_rgba(34,211,238,0.4)]">
              ผ่านตัวอักษร
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400 leading-relaxed">
            แหล่งรวบรวมหนังสือคุณภาพที่คัดสรรมาเพื่อคุณโดยเฉพาะ ไม่ว่าจะเป็นนิยาย 
            วรรณกรรม หรือหนังสือพัฒนาตัวเอง เริ่มต้นการเดินทางไปกับเราได้เลย
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/service" 
              className="w-full sm:w-auto rounded-full bg-cyan-600 px-8 py-3.5 text-sm font-bold text-white shadow-[0_0_15px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] hover:bg-cyan-500 transition-all duration-300 active:scale-95"
            >
              เลือกชมหนังสือทั้งหมด
            </Link>
            <Link 
              href="/about" 
              className="w-full sm:w-auto rounded-full bg-zinc-900 px-8 py-3.5 text-sm font-semibold text-zinc-300 border border-zinc-800 hover:border-cyan-500/50 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.15)] transition-all duration-300 active:scale-95"
            >
              เกี่ยวกับเรา
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Categories Section (หมวดหมู่หนังสือ) */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-12 w-full">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {categories.map((cat, idx) => (
            <div 
              key={idx} 
              className={`flex cursor-pointer flex-col items-center justify-center rounded-2xl bg-zinc-900/80 border border-zinc-800/80 p-6 transition-all duration-300 hover:-translate-y-1 ${cat.glow}`}
            >
              <span className="text-3xl mb-3 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">{cat.icon}</span>
              <span className="text-sm font-bold text-zinc-200">{cat.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Featured Books Section (หนังสือแนะนำ) */}
      <section className="relative z-10 bg-zinc-900/50 backdrop-blur-md py-24 mt-12 border-t border-cyan-900/30 rounded-t-[3rem] shadow-[0_-10px_40px_-10px_rgba(34,211,238,0.05)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">หนังสือแนะนำ</h2>
              <p className="mt-2 text-zinc-400">หนังสือที่กำลังมาแรงและน่าสนใจในสัปดาห์นี้</p>
            </div>
            <Link href="/service" className="hidden sm:block text-sm font-semibold text-cyan-400 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)] transition-all">
              ดูทั้งหมด &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featuredBooks.map((book, idx) => (
              <div 
                key={idx} 
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-zinc-900 border border-cyan-500/20 shadow-[0_0_15px_rgba(34,211,238,0.03)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] hover:border-cyan-400 hover:-translate-y-1.5"
              >
                {/* ปกหนังสือจำลอง */}
                <div className={`relative h-72 w-full flex items-center justify-center bg-gradient-to-br ${book.color}`}>
                  <div className="h-48 w-32 rounded bg-zinc-950 border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.15)] flex flex-col items-center justify-center text-center p-2 transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-2 group-hover:border-cyan-400">
                    <span className="text-xs font-bold text-zinc-500">หน้าปก</span>
                    <span className="text-[10px] text-zinc-400 mt-1">{book.title}</span>
                  </div>
                  
                  {/* ป้าย Tag (ถ้ามี) */}
                  {book.tag && (
                    <span className="absolute top-4 left-4 rounded-full bg-zinc-950/80 border border-cyan-500/40 backdrop-blur-sm px-3 py-1 text-xs font-bold text-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.2)]">
                      {book.tag}
                    </span>
                  )}
                </div>
                
                {/* ข้อมูลหนังสือ */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold text-white text-lg line-clamp-1 group-hover:text-cyan-400 transition-colors">{book.title}</h3>
                  <p className="mt-1 text-sm text-zinc-400">{book.author}</p>
                  
                  <div className="mt-auto pt-4 flex items-center justify-between">
                    <span className="text-xl font-black text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.3)]">{book.price}</span>
                    <button className="rounded-full bg-zinc-800 border border-zinc-700 px-4 py-2 text-xs font-bold text-zinc-300 transition-all duration-200 hover:bg-cyan-600 hover:border-cyan-500 hover:text-white hover:shadow-[0_0_10px_rgba(34,211,238,0.4)] active:scale-95">
                      ดูรายละเอียด
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* ปุ่มดูทั้งหมดสำหรับ Mobile */}
          <div className="mt-10 text-center sm:hidden">
             <Link href="/service" className="inline-block rounded-full bg-zinc-900 border border-cyan-500/30 px-6 py-3 text-sm font-semibold text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
              ดูหนังสือทั้งหมด
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}