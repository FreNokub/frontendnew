import Link from 'next/link'

export default function Service() {
  const services = [
    {
      title: 'Web Development',
      description: 'Build fast, responsive, and modern websites tailored to your business needs.',
      icon: '💻'
    },
    {
      title: 'UI/UX Design',
      description: 'Craft beautiful, intuitive, and user-centered interfaces for web and mobile.',
      icon: '🎨'
    },
    {
      title: 'SEO Optimization',
      description: 'Improve your search engine rankings and drive organic traffic to your platform.',
      icon: '📈'
    },
    {
      title: 'Cloud Solutions',
      description: 'Deploy and scale your applications safely with modern cloud infrastructure.',
      icon: '☁️'
    }
  ]

  return (
    <div className="relative min-h-[80vh] bg-zinc-950 text-white overflow-hidden font-sans">
      
      {/* เอฟเฟกต์แสงเรืองแสงพื้นหลัง (Ambient Glow) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-900/15 blur-[130px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 text-center">
        
        {/* หัวข้อหน้าแสดงบริการ */}
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-white">
          Our{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]">
            Services
          </span>
        </h1>
        
        {/* เส้นคั่นเรืองแสง */}
        <div className="mx-auto my-6 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_10px_rgba(34,211,238,0.6)]" />
        
        {/* คำโปรยแนะนำบริการ */}
        <p className="mx-auto max-w-2xl text-lg text-zinc-400 leading-relaxed">
          We provide high-quality digital solutions to help your business grow in the digital era. Explore what we can do for you.
        </p>

        {/* การ์ดแสดงบริการแยกเป็น 4 กล่อง (Responsive Grid) */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 text-left">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative rounded-2xl border border-cyan-500/20 bg-zinc-900/80 backdrop-blur-md p-6 shadow-[0_0_15px_rgba(34,211,238,0.03)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] hover:border-cyan-400 hover:-translate-y-1.5 overflow-hidden"
            >
              {/* แสงพาดผ่านเบาๆ ตอน Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon ประจำบริการ พร้อมเอฟเฟกต์เรืองแสงและขยายตัว */}
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-950 border border-cyan-500/30 text-2xl shadow-[0_0_10px_rgba(34,211,238,0.2)] transition-transform duration-300 group-hover:scale-110 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]">
                {service.icon}
              </div>
              
              <h3 className="relative z-10 mt-5 text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-200">
                {service.title}
              </h3>
              
              <p className="relative z-10 mt-2 text-sm text-zinc-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* ปุ่มด้านล่างสำหรับนำทางไปยังหน้าติดต่อสอบถาม */}
        <div className="mt-16 flex justify-center gap-4">
          <Link 
            href="/contact" 
            className="relative rounded-full bg-cyan-600 px-8 py-3.5 text-sm font-bold text-white shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] hover:bg-cyan-500 hover:-translate-y-0.5 active:scale-95"
          >
            Get a Quote
          </Link>
          <Link 
            href="/" 
            className="rounded-full border border-zinc-800 bg-zinc-900 px-6 py-3.5 text-sm font-semibold text-zinc-300 transition-all duration-300 hover:bg-zinc-800 hover:text-white hover:border-zinc-700"
          >
            Back to Home
          </Link>
        </div>

      </div>
    </div>
  )
}