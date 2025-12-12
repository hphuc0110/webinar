"use client"

import { Card } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const reviews = [
  {
    text: "Chương trình giúp tôi hiểu rõ nền tảng AI thay vì chỉ học theo trend. Lộ trình rất bài bản và dễ áp dụng.",
    name: "Thu Thủy",
    role: "Phụ huynh học sinh lớp 10",
  },
  {
    text: "Chỉ sau vài buổi đã có thể tự làm chatbot, phân loại ảnh, và hiểu cách hoạt động của mô hình AI hiện đại.",
    name: "Bích Hà",
    role: "Phụ huynh học sinh Chuyên Sư Phạm",
  },
  {
    text: "Học xong tự tin hơn rất nhiều khi nói chuyện về AI, làm thuyết trình, và áp dụng vào công việc thật.",
    name: "Trung Dũng",
    role: "Phụ huynh học sinh Chu Văn An",
  },
]

export function ReviewsSection() {
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
    <section ref={sectionRef} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl font-bold text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          PHỤ HUYNH VÀ HỌC SINH ĐÃ NÓI GÌ VỀ AI57
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className={`p-6 bg-gray-50 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Quote className="w-10 h-10 text-blue-600 mb-4" />
              <p className="text-gray-700 mb-6 text-sm leading-relaxed">{review.text}</p>
              <div className="flex items-center gap-3">
                <div>
                  <h4 className="font-bold text-sm">{review.name}</h4>
                  <p className="text-xs text-gray-600">{review.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
