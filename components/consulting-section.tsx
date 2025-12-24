"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const benefits = [
  "Mỗi giai đoạn phát triển của xã hội kéo theo sự thay đổi trong cách tạo ra giá trị, từ đó làm dịch chuyển cơ hội nghề nghiệp; AI đang trở thành một nền tảng cốt lõi tiếp theo, có vai trò hỗ trợ và khuếch đại năng lực của thế hệ trẻ.",

  "Cung cấp khung năng lực nền tảng: phụ huynh được giới thiệu khung năng lực SCORE 25 kết hợp với 4 nhóm archetype, ở mức độ nhận thức và định hướng, không yêu cầu đánh giá hay chấm điểm trực tiếp tại thời điểm chia sẻ.",
  
  "Hé lộ roadmap phát triển 12–24 tháng theo đầu ra: từ khung năng lực đến project, portfolio, capstone và tín hiệu năng lực → dẫn dắt sang buổi chia sẻ chuyên sâu.",
  
  "Nhu cầu ứng dụng AI thực tiễn: định hướng Level A của AI57, với lộ trình tiếp tục cho nhóm quan tâm sâu hơn ở Level B, C.",
]

export function ConsultingSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const scrollToForm = () => {
    const formElement = document.getElementById("registration-form")
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }

  return (
    <section ref={sectionRef} className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          <div
            className={`space-y-4 md:space-y-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <h2 className="text-2xl md:text-3xl font-bold">
              KỸ NĂNG THEN CHỐT CHO CON BẠN TRONG 5-10 NĂM TỚI
            </h2>

            <div className="space-y-3 md:space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-3 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <Check className="w-5 h-5 md:w-6 md:h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-sm md:text-base text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>

            <Button
              onClick={scrollToForm}
              className="bg-[#1e3a5f] hover:bg-[#2d5a8c] text-white px-6 md:px-8 py-5 md:py-6 rounded-full font-semibold transition-all hover:scale-105 text-sm md:text-base w-full sm:w-auto"
            >
              ĐĂNG KÝ THAM DỰ MIỄN PHÍ
            </Button>
          </div>

          <div
            className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <img
              src="/images/hoi-thao.png"
              alt="Online Webinar - Giải Mã Lộ Trình Kỹ Sư AI Toàn Năng"
              className="rounded-lg shadow-xl w-full hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
