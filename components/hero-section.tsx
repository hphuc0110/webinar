"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Radio } from "lucide-react"

export function HeroSection() {
  const [formData, setFormData] = useState({
    phone: "",
    email: "",
    name: "",
    parentName: "",
    school: "",
    question: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    try {
      const APPS_SCRIPT_URL =
      "https://script.google.com/macros/s/AKfycbw9ge7FuFlYfb5dDN4Ck-Z0E1mwCOdRbCmOixhc3EQeWTm9WMeNQPdXCBqj6epF1UJV/exec"
      // Sắp xếp dữ liệu theo thứ tự cột trong Google Sheets
      // Thứ tự cột trong Google Sheets cần là:
      // 1. name (Họ và tên)
      // 2. phone (Số điện thoại)
      // 3. email (Email)
      // 4. parentName (Họ tên phụ huynh)
      // 5. school (Trường THPT đang theo học)
      // 6. question (Câu hỏi)
      // 7. timestamp (Thời gian đăng ký)
      const submissionData = {
        name: formData.name || "",
        phone: formData.phone || "",
        email: formData.email || "",
        parentName: formData.parentName || "",
        school: formData.school || "",
        question: formData.question || "",
        timestamp: new Date().toLocaleString("vi-VN", {
          timeZone: "Asia/Ho_Chi_Minh",
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      }

      const response = await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(submissionData),
        headers: {
          "Content-Type": "text/plain",
        },
        redirect: "follow",
      })

      const result = await response.json()

      if (result.status === "success") {
        setSubmitMessage("✅ Đăng ký thành công! Chúng tôi sẽ gửi link tham dự qua email của bạn.")
        setFormData({
          phone: "",
          email: "",
          name: "",
          parentName: "",
          school: "",
          question: "",
        })
      } else {
        setSubmitMessage("❌ Có lỗi xảy ra: " + result.message)
      }
    } catch (error) {
      console.error("[v0] Error submitting form:", error)
      setSubmitMessage("❌ Có lỗi xảy ra. Vui lòng kiểm tra kết nối internet và thử lại.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const scrollToForm = () => {
    const form = document.getElementById("registration-form")
    if (form) {
      form.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }

  if (typeof window !== "undefined") {
    ;(window as any).scrollToRegistrationForm = scrollToForm
  }

  return (
    <section className="relative min-h-screen bg-[#0f1f3d] text-white overflow-hidden flex items-center">
      <div
        className="absolute inset-0 opacity-80 bg-cover bg-center animate-fade-in"
        style={{
          backgroundImage: "url('/images/ai-background.jpeg')",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#1a3a5c]/80 via-[#1a3a5c]/70 to-[#1a3a5c]/90" />

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 relative z-10 w-full">
        <div className="text-center mb-8 md:mb-12 animate-[slideDown_0.8s_ease-out]">
          <h2 className="text-xs md:text-base font-bold tracking-wider px-4">SỰ KIỆN GẶP GỠ PHỤ HUYNH HỌC SINH</h2>
          <p className="text-xs md:text-base font-medium tracking-wider px-4">
            được tổ chức bởi Hồng Lĩnh Education và Đại học Bách Khoa Hà Nội{" "}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start max-w-7xl mx-auto">
          <div className="space-y-10 md:space-y-8">
            <div className="p-6 md:p-10 lg:p-12 rounded-none animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
              <h1
                className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-balance animate-[textReveal_1s_ease-out_0.4s_both]
  bg-gradient-to-r from-[#6AECE1] to-[#FFF57E] bg-clip-text text-transparent"
              >
                ĐỊNH HƯỚNG & TUYỂN CHỌN TÀI NĂNG TRẺ CÔNG NGHỆ AI
              </h1>

              <p className="text-xs md:text-sm lg:text-md xl:text-lg font-medium leading-tight text-balance animate-[textReveal_1s_ease-out_0.4s_both]">
                Giúp phụ huynh hiểu đúng ngành Trí tuệ nhân tạo và lộ trình để con trở thành Kỹ sư AI toàn năng
                từ THPT
              </p>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-8 text-sm md:text-base justify-start lg:justify-start">
              <div className="flex items-center gap-3 animate-[slideInLeft_0.6s_ease-out_0.6s_both] hover:scale-110 transition-transform duration-300">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center animate-[pulse_2s_ease-in-out_infinite]">
                  <Calendar className="w-5 h-5 md:w-6 md:h-6 text-[#1a3a5c]" />
                </div>
                <span className="font-medium">20H00 | 13.12.2025</span>
              </div>
              <div className="flex items-center gap-3 animate-[slideInLeft_0.6s_ease-out_0.8s_both] hover:scale-110 transition-transform duration-300">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center animate-[pulse_2s_ease-in-out_0.5s_infinite]">
                  <Radio className="w-5 h-5 md:w-6 md:h-6 text-[#1a3a5c]" />
                </div>
                <span className="font-medium">Zoom Online</span>
              </div>
            </div>
          </div>

          <div className="lg:ml-auto animate-[slideInRight_0.8s_ease-out_0.4s_both] w-full" id="registration-form">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-md w-full mx-auto hover:shadow-3xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-[#4f46e5] to-[#3b82f6] p-5 md:p-6 text-center animate-[gradientShift_3s_ease-in-out_infinite]">
                <h3 className="text-lg md:text-xl font-bold text-white animate-[bounce_1s_ease-in-out_1s]">
                  ĐĂNG KÝ THAM DỰ ONLINE
                </h3>
                <p className="text-xs text-white/90 mt-2">CHỈ CÒN 99 SUẤT CUỐI CÙNG</p>
              </div>

              <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-4">
                <div className="space-y-3">

                <div className="grid grid-cols-1  gap-4">
                  <Input
                    placeholder="Họ và tên *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    disabled={isSubmitting}
                    className="bg-gray-100 border-0 h-12 text-gray-900 placeholder:text-gray-500"
                  />
                </div>

                <Input
                  placeholder="Số điện thoại *"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  disabled={isSubmitting}
                  className="bg-gray-100 border-0 h-12 text-gray-900 placeholder:text-gray-500"
                />

                <Input
                  placeholder="Email *"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  disabled={isSubmitting}
                  className="bg-gray-100 border-0 h-12 text-gray-900 placeholder:text-gray-500"
                />

                <Input
                  placeholder="Họ tên học sinh *"
                  value={formData.parentName}
                  onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                  required
                  disabled={isSubmitting}
                  className="bg-gray-100 border-0 h-12 text-gray-900 placeholder:text-gray-500"
                />
                </div>
                
                
                <div className="grid grid-cols-1 gap-4">

                  <Input
                    placeholder="Trường THPT đang theo học *"
                    value={formData.school}
                    onChange={(e) => setFormData({ ...formData, school: e.target.value })}
                    required
                    disabled={isSubmitting}
                    className="bg-gray-100 border-0 h-12 text-gray-900 placeholder:text-gray-500"
                  />
                </div>

                <Input
                  placeholder="Câu hỏi dành cho Webinar *"
                  value={formData.question}
                  onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                  required
                  disabled={isSubmitting}
                  className="bg-gray-100 border-0 h-12 text-gray-900 placeholder:text-gray-500"
                />

                {submitMessage && (
                  <div
                    className={`text-center text-sm p-3 rounded-lg ${
                      submitMessage.includes("✅") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                    }`}
                  >
                    {submitMessage}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 md:py-6 rounded-lg h-12 md:h-14 text-sm md:text-base
                    transition-all duration-300 ease-in-out
                    hover:scale-105 hover:shadow-2xl
                    active:scale-95
                    animate-[buttonPulse_2s_ease-in-out_2s_infinite]
                    relative overflow-hidden
                    disabled:opacity-50 disabled:cursor-not-allowed
                    before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
                    before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700"
                >
                  {isSubmitting ? "ĐANG GỬI..." : "GỬI THÔNG TIN"}
                </Button>

                <p className="text-xs text-gray-500 text-center italic">
                  Link zoom sẽ được gửi qua email sau khi đăng ký
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
