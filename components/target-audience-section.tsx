"use client"

import { Card } from "@/components/ui/card"
import { Check, Users, GraduationCap, Sparkles } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const audiences = [
  {
    icon: Users,
    title: "Phụ huynh quan tâm giáo dục chất lượng",
    description: "Ưu tiên STEM/AI, muốn con định hướng nghề nghiệp sớm",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: GraduationCap,
    title: "Phụ huynh có kế hoạch du học",
    description: "Cần xây dựng hồ sơ mạnh, săn học bổng quốc tế",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    icon: Sparkles,
    title: "Con yêu thích công nghệ/AI",
    description: "Muốn tìm chương trình uy tín để đầu tư sớm",
    color: "from-purple-500 to-purple-600",
  },
]

export function TargetAudienceSection() {
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
    <section
      ref={sectionRef}
      className="py-12 md:py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-10 left-0 w-60 h-60 bg-blue-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-92 h-92 bg-indigo-200/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-[#1e3a5f] to-[#2563eb] bg-clip-text text-transparent transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            HỘI THẢO NÀY DÀNH CHO AI?
          </h2>
          <p
            className={`text-gray-600 text-lg max-w-2xl mx-auto transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Chương trình phù hợp cho những đối tượng sau
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {audiences.map((audience, index) => {
            const Icon = audience.icon
            return (
              <Card
                key={index}
                className={`group relative overflow-hidden bg-white border-2 border-transparent hover:border-blue-200 p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${audience.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                {/* Icon with gradient background */}
                <div className="relative mb-6">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${audience.color} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {audience.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{audience.description}</p>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100/50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Card>
            )
          })}
        </div>

        {/* Additional info section */}
        <div
          className={`mt-12 text-center transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg border border-gray-200">
            <Check className="w-5 h-5 text-green-500" />
            <span className="text-gray-700 font-medium">Phù hợp cho học sinh từ lớp 9 đến lớp 12</span>
          </div>
        </div>
      </div>
    </section>
  )
}
