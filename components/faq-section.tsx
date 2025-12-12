"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    number: "1",
    question: "Hội thảo này dành cho ai?",
    answer:
    "Hội thảo AI57 dành cho phụ huynh và học sinh lớp 9–12 đang quan tâm đến định hướng học tập và nghề nghiệp trong lĩnh vực AI & Công nghệ.Phù hợp với những bạn yêu thích STEM, muốn khám phá lộ trình vào các ngành Khoa học dữ liệu, Trí tuệ nhân tạo, Khoa học máy tính và cần góc nhìn thực tế từ chuyên gia để chuẩn bị lựa chọn ngành học chính xác.Hội thảo cũng hướng tới phụ huynh mong muốn đầu tư giáo dục chất lượng, giúp con bắt kịp xu hướng công nghệ tương lai. ",
  },
  {
    number: "2",
    question: "Hội thảo này diễn ra online hay offline?",
    answer: "Hội thảo AI57 được tổ chức theo hình thức online qua nền tảng Zoom, giúp phụ huynh và học sinh dễ dàng tham gia dù ở bất kỳ đâu. Sau khi đăng ký, bạn sẽ nhận được link tham gia + hướng dẫn chi tiết qua email và tin nhắn.",
  },
  {
    number: "3",
    question: "Mọi đăng ký của tôi được bảo mật như thế nào?",
    answer:
      "Tất cả thông tin đăng ký của bạn được bảo mật tuyệt đối và chỉ sử dụng cho mục đích tổ chức hội thảo. Dữ liệu được lưu trữ trên hệ thống an toàn, không chia sẻ cho bên thứ ba, và chỉ đội ngũ phụ trách AI57 mới có quyền truy cập để hỗ trợ bạn trong quá trình tham gia.",
  },
  {
    number: "4",
    question: "Tham gia hội thảo có mất phí gì không?",
    answer: "Chúng tôi tổ chức chương trình này với mục tiêu giúp phụ huynh và học sinh tiếp cận kiến thức AI một cách dễ dàng, cập nhật xu hướng nghề nghiệp tương lai và hiểu rõ lộ trình học tập phù hợp mà không phải chịu bất kỳ chi phí nào.",
  },
  {
    number: "5",
    question: "Nếu bỏ lỡ buổi hội thảo thì tôi có thể xem lại ở đâu?",
    answer:"Nếu bạn không thể tham dự đúng giờ, đừng lo — toàn bộ nội dung hội thảo AI57 sẽ được ghi hình lại.Sau sự kiện, chúng tôi sẽ gửi video replay và tài liệu liên quan trực tiếp qua email hoặc tin nhắn mà bạn đã đăng ký.Bạn có thể xem lại bất cứ lúc nào, trên bất kỳ thiết bị nào, mà không bị giới hạn thời gian. Ngoài ra, đội ngũ hỗ trợ cũng sẵn sàng giải đáp những câu hỏi bạn chưa kịp đặt ra trong buổi live.",
  },
]

export function FaqSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [openIndex, setOpenIndex] = useState<number | null>(null)
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

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section ref={sectionRef} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2
          className={`text-3xl font-bold text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          CÂU HỎI THƯỜNG GẶP
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className={`bg-white hover:shadow-lg transition-all duration-500 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full p-6 text-left flex gap-4 items-start hover:bg-gray-50 transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-[#2563eb] text-white rounded-lg flex items-center justify-center font-bold">
                  {faq.number}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-gray-700 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
                <ChevronDown
                  className={`flex-shrink-0 w-6 h-6 text-gray-400 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 px-4">
          <Button
            onClick={scrollToForm}
            className="relative bg-gradient-to-r from-[#1e3a5f] to-[#2563eb] hover:from-[#2d5a8c] hover:to-[#3b82f6] text-white px-8 sm:px-12 py-4 sm:py-6 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95 w-full sm:w-auto max-w-md mx-auto group overflow-hidden"
          >
            <span className="relative z-10">ĐĂNG KÝ THAM DỰ MIỄN PHÍ</span>
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 blur-xl group-hover:animate-[shimmer_2s_infinite]"></span>
          </Button>
        </div>
      </div>
    </section>
  )
}
