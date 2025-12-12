"use client"

import { useState } from "react"
import Image from "next/image"

export function NvidiaCertificationSection() {
  const [activeTab, setActiveTab] = useState<"infrastructure" | "developer">("infrastructure")

  const infrastructureCerts = [
    {
      name: "AI Infrastructure and Operations",
      level: "Associate",
      image: "/images/2.webp",
    },
    {
      name: "AI Infrastructure",
      level: "Professional",
      image: "/images/3.webp",
    },
    {
      name: "AI Operations",
      level: "Professional",
      image: "/images/4.webp",
    },
    {
      name: "AI Networking",
      level: "Professional",
      image: "/images/5.webp",
    },
  ]

  const developerCerts = [
    {
      name: "Gen AI LLMs",
      level: "Associate",
      image: "/images/6.webp",
    },
    {
      name: "Gen AI Multimodal",
      level: "Associate",
      image: "/images/7.webp",
    },  
    {
      name: "Gen AI LLMs",
      level: "Associate",
      image: "/images/8.webp",
    },
    {
      name: "Agentic AI",
      level: "Professional",
      image: "/images/9.webp",
    },
    {
      name: "Accelerated Data Science",
      level: "Professional",
      image: "/images/10.webp",
    },
    {
      name: "OpenUSD Development",
      level: "Professional",
      image: "/images/11.webp",
    },
  ]

  const currentCerts = activeTab === "infrastructure" ? infrastructureCerts : developerCerts

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br center from-blue-50 via-white to-blue-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-gray-800">CHỨNG CHỈ </span>
            <span className="text-emerald-600">NVIDIA</span>
          </h2>

          <p className="text-gray-600 text-base md:text-lg max-w-4xl mx-auto mb-4 leading-relaxed">
            <span className="font-semibold">Chứng chỉ</span> là bằng chứng cụ thể về chuyên môn, năng lực và cam kết học
            hỏi không ngừng của bạn. Hãy chứng minh kỹ năng của bạn và nâng tầm sự nghiệp bằng cách nhận{" "}
            <span className="font-semibold text-emerald-600">chứng chỉ từ NVIDIA</span>.
          </p>

          <p className="text-gray-700 text-sm md:text-base max-w-3xl mx-auto font-medium">
            Là sự cam kết của <span className="font-semibold">chương trình AI57</span> dành cho bạn, một chứng chỉ có
            tầm ảnh hưởng và đảm bảo vững chắc cho tương lai.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 max-w-4xl mx-auto mb-12">
          <button
            onClick={() => setActiveTab("infrastructure")}
            className={`flex-1 py-4 px-6 font-semibold text-sm md:text-base rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none transition-all duration-300 ${
              activeTab === "infrastructure"
                ? "bg-white text-gray-800 shadow-lg"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            Chứng chỉ dành cho Chuyên gia Hạ tầng
          </button>
          <button
            onClick={() => setActiveTab("developer")}
            className={`flex-1 py-4 px-6 font-semibold text-sm md:text-base rounded-b-xl sm:rounded-r-xl sm:rounded-bl-none transition-all duration-300 ${
              activeTab === "developer"
                ? "bg-white text-gray-800 shadow-lg"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            Chứng chỉ dành cho Nhà phát triển
          </button>
        </div>

        {/* Certifications Display */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 gap-6 md:gap-8 justify-items-center">
            {currentCerts.map((cert, index) => (
              <div
                key={index}
                className="flex flex-col items-center group animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative w-full aspect-square mb-3 transform transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  <Image
                    src={cert.image}
                    alt={`${cert.name} ${cert.level}`}
                    width={200}
                    height={200}
                    className="w-full h-full object-contain mx-auto"
                  />
                </div>
                <div className="text-center">
                  <p className="text-xs md:text-sm font-semibold text-gray-700 mb-1">{cert.level}</p>
                  <p className="text-xs text-gray-600">{cert.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-600">
            Được thiết kế và biên soạn bởi <span className="font-semibold text-blue-600">Hồng Lĩnh Education</span> và{" "}
            <span className="font-semibold text-blue-600">Đại học Bách Khoa Hà Nội</span>
          </p>
        </div>
      </div>
    </section>
  )
}
