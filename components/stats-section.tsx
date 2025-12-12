"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { number: "1000+", label: "Học sinh du học Mỹ thành công mỗi năm" },
  { number: "13,000+", label: "Người tham dự và học hỏi kiến thức" },
  { number: "200,000$", label: "Giá trị học bổng trung bình mỗi học sinh nhận được" },
  { number: "127 triệu đô", label: "Tổng giá trị học bổng người tham gia đã được" },
]

export function StatsSection() {
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

  return (
    <section ref={sectionRef} className="py-12 md:py-16 bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8c] text-white">
      <div className="container mx-auto px-4">
        <h2
          className={`text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 px-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          CHUỖI HỘI THẢO CỦA CHÚNG TÔI ĐÃ GIÚP:
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-700 hover:scale-110 p-4 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">{stat.number}</div>
              <p className="text-sm md:text-base text-blue-100">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
