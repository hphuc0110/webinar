"use client"

import { Card } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"
import { Calendar, Video, User } from "lucide-react"

const agendaItems = [
  {
    date: "Phần 1",
    title: "Kỷ nguyên AI và Vị thế mới của người Việt trẻ",
    isHighlighted: false,
    detailInfo: {
      datetime: "20h00 | 13.12.2025",
      format: "Zoom Online",
      content: [
        "Giao lưu chuyên gia: Hiểu rõ thực tế ứng dụng AI tại doanh nghiệp và định hướng phát triển kỹ năng đón đầu xu hướng 5-10 năm tới.",
        "Giải mã nghề nghiệp: Cập nhật lộ trình Career Path ngành AI, mức lương và phương pháp nhập môn cho học sinh chưa biết lập trình.",
        "Lộ trình AI57 & Đại học Bách Khoa Hà Nội: Chương trình chuyên sâu giúp học sinh sở hữu Portfolio dự án thực tế - điểm cộng tuyệt đối cho hồ sơ năng lực.",
        "Lợi thế du học & sự nghiệp: Chia sẻ từ sinh viên trường Top về cách dùng dự án AI cá nhân để tạo sự khác biệt khi apply học bổng và việc làm.",
      ],
    },
  },
  {
    date: "Phần 2",
    title: "Chân dung Kỹ sư AI 2030: Họ là ai, Lương bao nhiêu? Cơ hội nghề nghiệp ở đâu?",
    isHighlighted: true,
    detailInfo: {
      datetime: "20h00 | 13.12.2025",
      format: "Zoom Online",
      content: [
        "Giao lưu chuyên gia: Hiểu rõ thực tế ứng dụng AI tại doanh nghiệp và định hướng phát triển kỹ năng đón đầu xu hướng 5-10 năm tới.",
        "Giải mã nghề nghiệp: Cập nhật lộ trình Career Path ngành AI, mức lương và phương pháp nhập môn cho học sinh chưa biết lập trình.",
        "Lộ trình AI57 & Đại học Bách Khoa Hà Nội: Chương trình chuyên sâu giúp học sinh sở hữu Portfolio dự án thực tế - điểm cộng tuyệt đối cho hồ sơ năng lực.",
        "Lợi thế du học & sự nghiệp: Chia sẻ từ sinh viên trường Top về cách dùng dự án AI cá nhân để tạo sự khác biệt khi apply học bổng và việc làm.",
      ],
    },
  },
  {
    date: "Phần 3",
    title: "Lộ trình 360 giờ, giúp học sinh có nền tảng tốt chuẩn quốc tế, dựa theo chương trình của NVIDIA",
    isHighlighted: false,
    detailInfo: {
      datetime: "20h00 | 13.12.2025",
      format: "Zoom Online",
      content: [
        "Giao lưu chuyên gia: Hiểu rõ thực tế ứng dụng AI tại doanh nghiệp và định hướng phát triển kỹ năng đón đầu xu hướng 5-10 năm tới.",
        "Giải mã nghề nghiệp: Cập nhật lộ trình Career Path ngành AI, mức lương và phương pháp nhập môn cho học sinh chưa biết lập trình.",
        "Lộ trình AI57 & Đại học Bách Khoa Hà Nội: Chương trình chuyên sâu giúp học sinh sở hữu Portfolio dự án thực tế - điểm cộng tuyệt đối cho hồ sơ năng lực.",
        "Lợi thế du học & sự nghiệp: Chia sẻ từ sinh viên trường Top về cách dùng dự án AI cá nhân để tạo sự khác biệt khi apply học bổng và việc làm.",
      ],
    },
  },
  {
    date: "Phần 4",
    title: "Người đi trước 2-3 năm, cũng là học sinh, cảm thấy rất đáng để bắt đầu từ cấp 3",
    isHighlighted: false,
    detailInfo: {
      datetime: "20h00 | 13.12.2025",
      format: "Zoom Online",
      content: [
        "Giao lưu chuyên gia: Hiểu rõ thực tế ứng dụng AI tại doanh nghiệp và định hướng phát triển kỹ năng đón đầu xu hướng 5-10 năm tới.",
        "Giải mã nghề nghiệp: Cập nhật lộ trình Career Path ngành AI, mức lương và phương pháp nhập môn cho học sinh chưa biết lập trình.",
        "Lộ trình AI57 & Đại học Bách Khoa Hà Nội: Chương trình chuyên sâu giúp học sinh sở hữu Portfolio dự án thực tế - điểm cộng tuyệt đối cho hồ sơ năng lực.",
        "Lợi thế du học & sự nghiệp: Chia sẻ từ sinh viên trường Top về cách dùng dự án AI cá nhân để tạo sự khác biệt khi apply học bổng và việc làm.",
      ],
    },
  },
]

export function AgendaSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(1)
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

  const currentDetail = agendaItems[selectedIndex].detailInfo

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-br from-blue-200 to-blue-300 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <h2
          className={`text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-[#1e3a5f] transition-all duration-700 tracking-wide ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          AGENDA
        </h2>
        <p className="text-center text-gray-600 mb-12 md:mb-16 text-sm md:text-base">
          Chương trình hội thảo được thiết kế chi tiết
        </p>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto">
          <div className="relative">
            {/* Vertical dotted line */}
            <div className="absolute left-[88px] top-8 bottom-8 w-0.5 border-l-2 border-dashed border-gray-300"></div>

            <div className="space-y-6">
              {agendaItems.map((item, index) => (
                <div
                  key={index}
                  className={`flex gap-4 items-start transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Date with calendar icon */}
                  <div className="flex items-center gap-2 min-w-[80px] bg-white px-3 py-2 rounded-lg border border-gray-200 shadow-sm">
                    <Calendar className="w-4 h-4 text-[#2563eb]" />
                    <span className="text-xs font-medium text-gray-700 whitespace-nowrap">{item.date}</span>
                  </div>

                  {/* Event card */}
                  <Card
                    className={`flex-1 p-4 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                      item.isHighlighted
                        ? "bg-white text-gray-800 border-blue-500"
                        : "bg-white text-gray-800 border-gray-200 hover:border-[#2563eb]"
                    } ${selectedIndex === index ? "ring-2 ring-[#2563eb] ring-offset-2 scale-105" : ""}`}
                    onClick={() => setSelectedIndex(index)}
                  >
                    <p
                      className={`text-sm md:text-base font-medium ${item.isHighlighted ? "text-black" : "text-gray-800"}`}
                    >
                      {item.title}
                    </p>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <Card
            key={selectedIndex}
            className={`border-2 border-blue-500 bg-white p-6 md:p-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {/* Date & Time */}
            <div className="flex items-start gap-3 mb-2 pb-6 border-b border-gray-200">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Calendar className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-600 mb-1">Ngày & giờ:</p>
                <p className="text-base font-bold text-gray-900">{currentDetail.datetime}</p>
              </div>
            </div>

            {/* Format */}
            <div className="flex items-start gap-3 mb-4 pb-4 border-b border-gray-200">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Video className="w-5 h-5 text-[#2563eb]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-600 mb-1">Hình thức:</p>
                <p className="text-base font-bold text-gray-900">{currentDetail.format}</p>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="w-5 h-5 rounded-full border-2 border-orange-600 flex items-center justify-center">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  </div>
                </div>
                <p className="font-bold text-gray-900 text-sm md:text-base">Nội dung chính</p>
              </div>
              <ol className="space-y-3 ml-13">
                {currentDetail.content.map((item, index) => (
                  <li key={index} className="text-sm text-gray-700 leading-relaxed">
                    <span className="font-semibold text-gray-900">{index + 1}.</span> {item}
                  </li>
                ))}
              </ol>
            </div>

            {/* Speakers */}
            <div className="mb-4 pb-4 border-b border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5 text-purple-600" />
                </div>
                <p className="font-bold text-gray-900 text-sm md:text-base">Đối tượng tham gia</p>
              </div>
              <div className="space-y-4 ml-13">
                <p className="text-xs md:text-sm text-gray-600 whitespace-pre-line">Phụ huynh quan tâm giáo dục chất lượng</p>
                <p className="text-xs md:text-sm text-gray-600 whitespace-pre-line">Phụ huynh có kế hoạch du học</p>
                <p className="text-xs md:text-sm text-gray-600 whitespace-pre-line">Con yêu thích công nghệ/AI</p>
              </div>
            </div>

          </Card>
        </div>
      </div>
    </section>
  )
}
