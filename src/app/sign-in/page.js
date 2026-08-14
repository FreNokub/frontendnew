'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function SignInPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleLogin = (e) => {
    e.preventDefault()
    
    // จำลองชื่อผู้ใช้จากอีเมลที่พิมพ์เข้ามา (เช่น ggggzz@fsaf.com จะได้ชื่อ ggggzz)
    const username = email.split('@')[0] || 'ผู้ใช้งาน'

    // บันทึกสถานะลงในเครื่อง
    localStorage.setItem('isLoggedIn', 'true')
    localStorage.setItem('userName', username)

    // บังคับรีเฟรชหน้าเว็บเล็กน้อยเพื่อให้ Navbar อัปเดตสถานะทันที แล้วพาไปหน้า Home
    window.location.href = '/'
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-950 px-6">
      <div className="w-full max-w-md rounded-2xl bg-gray-900 p-8 shadow-xl border border-gray-800">
        <h2 className="mb-6 text-center text-2xl font-bold text-white">เข้าสู่ระบบ</h2>
        
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">อีเมล</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl bg-gray-800 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="name@example.com"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">รหัสผ่าน</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl bg-gray-800 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="••••••••"
            />
          </div>

          <button 
            type="submit"
            className="mt-2 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-95"
          >
            เข้าสู่ระบบ
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-400">
          ยังไม่มีบัญชี? <Link href="/sign-up" className="text-blue-500 hover:underline">สมัครสมาชิก</Link>
        </p>
      </div>
    </main>
  )
}