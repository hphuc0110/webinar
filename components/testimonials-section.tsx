"use client"

import { Card } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"
import { Award, Star, User } from "lucide-react"

const testimonials = [
  {
    name: "Nguyễn Quốc Cường",
    title: "Chuyên gia LLM Agents & tự động hóa doanh nghiệp",
    description: "Cựu Engineering Manager Samsung SDS \nTechnical Leader FPT Software \n Tiên phong đưa Deep Learning vào sản xuất từ 2017 \nFounder đơn vị nghiên cứu LLM Agents & tự động hóa doanh nghiệp",
    image: "/images/cuong.png",
    achievements: ["Engineering Manager Samsung SDS", "Technical Leader FPT Software"],
  },
  {
    name: "Khách mời đặc biệt",
    title: "",
    school: "",
    description: "",
    achievements: [],
    image: "/images/bimat.jpg",
  },
  {
    name: "Nguyễn Việt Hưng",
    title: "Sinh viên xuất sắc",
    school: "",
    description: 'Ngành Khoa học dữ liệu - Trí tuệ nhân tạo HUST, Giải Nhì Thành phố tiếng Anh, Thủ khoa 5 khối THPTQG',
    achievements: ["IELTS 8.0", "SAT 1560", "Thủ khoa 5 khối"],
    image: "/images/viet-hung.jpg",
  },
]

export function TestimonialsSection() {
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
      className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-indigo-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className={`text-3xl md:text-5xl font-bold text-gray-900 mb-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: "100ms" }}
          >
            DIỄN GIẢ 
          </h2>
          <p
            className={`text-gray-600 text-base md:text-lg max-w-2xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: "200ms" }}
          >
            Gặp gỡ chuyên gia hàng đầu sẽ chia sẻ kinh nghiệm và định hướng cho bạn
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {testimonials.slice(0, 2).map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${300 + index * 150}ms` }}
              >
                <Card className="relative h-full p-2 bg-white border-2 border-gray-100 hover:border-blue-500 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-xl overflow-hidden group">
                  {/* Top accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600"></div>

                  {/* Profile section */}
                  <div className="flex flex-col items-center text-center mb-1">
                    <div className="relative w-32 h-32 mb-4">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
                      <div className="absolute inset-2 rounded-full overflow-hidden bg-gray-100 border-4 border-white shadow-xl">
                        {testimonial.image ? (
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-blue-100">
                            <User className="w-12 h-12 text-blue-600" />
                          </div>
                        )}
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-gradient-to-br from-yellow-400 to-orange-500 text-white p-2 rounded-full shadow-lg">
                        <Award className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="font-bold text-xl text-gray-900 mb-1 w-full text-center">{testimonial.name}</h3>
                    <p className="text-sm font-semibold text-blue-600 mb-0.5">{testimonial.title}</p>
                    <p className="text-sm text-gray-600 mb-1 mt-3">{testimonial.school}</p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-700 leading-tight mb-2 text-center px-2">
                    {testimonial.description}
                  </p>

                  {/* Achievement tags */}
                  <div className="flex flex-wrap gap-2 justify-center pt-2 border-t border-gray-100">
                    {testimonial.achievements.map((achievement, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full border border-blue-200"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>

                  {/* Hover gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </Card>
              </div>
            ))}
          </div>

          {testimonials[2] && (
            <div className="mt-6 md:mt-8 flex justify-center">
              <div
                className={`w-full md:w-1/2 md:max-w-md transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                <Card className="relative h-full p-2 bg-white border-2 border-gray-100 hover:border-blue-500 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-xl overflow-hidden group">
                  {/* Top accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600"></div>

                  {/* Profile section */}
                  <div className="flex flex-col items-center text-center">
                    <div className="relative w-32 h-32 mb-2">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
                      <div className="absolute inset-2 rounded-full overflow-hidden bg-gray-100 border-4 border-white shadow-xl">
                        {testimonials[2].image ? (
                          <img
                            src={testimonials[2].image || "/placeholder.svg"}
                            alt={testimonials[2].name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-blue-100">
                            <User className="w-12 h-12 text-blue-600" />
                          </div>
                        )}
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-gradient-to-br from-yellow-400 to-orange-500 text-white p-2 rounded-full shadow-lg">
                        <Award className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="font-bold text-xl text-gray-900 mb-1">{testimonials[2].name}</h3>
                    <p className="text-sm font-semibold text-blue-600 mb-0.5">{testimonials[2].title}</p>
                    <p className="text-sm text-gray-600 mb-0.5">{testimonials[2].school}</p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-700 leading-tight mb-0.5 text-center px-2">
                    {testimonials[2].description}
                  </p>

                  {/* Achievement tags */}
                  <div className="flex flex-wrap gap-2 justify-center pt-0.5 border-t border-gray-100">
                    {testimonials[2].achievements.map((achievement, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full border border-blue-200"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>

                  {/* Hover gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </Card>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
