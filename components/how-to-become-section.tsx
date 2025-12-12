"use client";

import { useEffect, useId, useRef, useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";


interface SectionProps {
  title: string;
  subtitle?: string;
  features?: string[];
  htmlContent: string;
  imageUrl: string;
}

export const HOW_TO_BECOME_DATA: SectionProps[] = [
  {
    title: "Nền tảng Khoa học Máy tính & Toán học",
    subtitle:
      "Đây là những kỹ năng 'bắt buộc', là móng nhà để xây dựng mọi thứ khác.",
    features: [
      "Lập trình (Programming)",
      "Toán học (Math)",
      "Cấu trúc Dữ liệu & Giải thuật (Data Structures & Algorithms)",
    ],
    imageUrl: "/images/nen-tang1.jfif",   
    htmlContent: `
      <ul class="list-disc pl-6 space-y-3">
        <li>
          <strong>Lập trình (Programming):</strong> 
          Bạn không chỉ viết code "chạy được" mà phải viết code sạch, hiệu quả, và dễ bảo trì (clean code). 
          Python được yêu thích vì hệ sinh thái thư viện và cú pháp rõ ràng. 
          Biết thêm C++ hoặc Java là một lợi thế lớn để tối ưu hóa hiệu suất ở mức độ sâu.
        </li>
        <li>
          <strong>Toán học (Math):</strong><br/>
          Đây chính là "ngôn ngữ" của AI.
          <ul class="list-square pl-6 mt-2 space-y-2">
            <li>Đại số tuyến tính (Vectors, Matrices, Tensors) là cách dữ liệu được biểu diễn và tính toán trong các mạng nơ-ron.</li>
            <li>Giải tích (Đạo hàm, Gradient Descent) là cơ chế cốt lõi để mô hình "học" (tối ưu hóa hàm mất mát).</li>
            <li>Xác suất & Thống kê giúp bạn hiểu về độ không chắc chắn (uncertainty) và cách đánh giá mô hình (vd: A/B testing, p-values).</li>
          </ul>
        </li>
        <li>
          <strong>Cấu trúc Dữ liệu & Giải thuật (Data Structures & Algorithms):</strong><br/>
          Kỹ sư AI phải xử lý lượng dữ liệu khổng lồ. 
          Hiểu biết về giải thuật giúp bạn tiền xử lý dữ liệu (pre-process) và truy vấn (query) một cách hiệu quả, 
          tránh "thắt cổ chai" về hiệu năng khi hệ thống mở rộng.
        </li>
      </ul>
    `,
  },
  {
    title: "Kiến thức Cốt lõi về AI & Machine Learning",
    subtitle: "Đây là phần chuyên môn giúp bạn giải quyết các bài toán cụ thể.",
    features: [
      "Nguyên lý Machine Learning (ML Principles)",
      "Học sâu (Deep Learning)",
      "Các lĩnh vực chuyên sâu (Specializations)",
    ],
    imageUrl: "/images/nen-tang2.jfif",
    htmlContent: `
      <ul class="list-disc pl-6 space-y-3">
        <li>
          <strong>Nguyên lý Machine Learning (ML Principles):</strong>
          <ul class="list-disc pl-6 mt-2 space-y-2"> 
            <li>
              Bạn cần biết khi nào dùng mô hình nào. 
              Đừng dùng "dao mổ trâu" (Deep Learning) để "giết gà" (bài toán đơn giản). 
              Hiểu rõ về Kỹ thuật Đặc trưng (Feature Engineering) và các phương pháp Đánh giá Mô hình (Model Evaluation) 
              như Accuracy, Precision, Recall, F1-score là bắt buộc.
            </li>
          </ul>
        </li>
        <li>
          <strong>Học sâu (Deep Learning):</strong>
          <ul class="list-disc pl-6 mt-2 space-y-2">
            <li>
              <strong>Kỹ năng:</strong> Đây là trái tim của AI hiện đại. 
              Bạn cần hiểu sâu về kiến trúc Mạng Nơ-ron (Neural Networks), 
              Mạng Nơ-ron Tích chập (CNN), và Mạng Nơ-ron Hồi quy (RNN/LSTM/Transformers).
            </li>
            <li>
              <strong>Content xung quanh:</strong> Mỗi kiến trúc phục vụ một mục đích:
              <ol class="list-decimal pl-6 mt-2 space-y-1">
                <li>CNN là vua của Thị giác Máy tính (Computer Vision) — nhận diện hình ảnh, phân loại video.</li>
                <li>RNN/LSTM và đặc biệt là Transformers (kiến trúc của GPT, BERT) là nền tảng của Xử lý Ngôn ngữ Tự nhiên (NLP).</li>
              </ol>
            </li>
          </ul>
        </li>
        <li>
          <strong>Các lĩnh vực chuyên sâu (Specializations):</strong>
          <ul class="list-disc pl-6 mt-2 space-y-2">
            <li>
              <strong>Kỹ năng:</strong> Thường thì Kỹ sư AI sẽ chuyên sâu vào 1-2 mảng. Phổ biến nhất là:
              <ol class="list-decimal pl-6 mt-2 space-y-1">
                <li>Xử lý Ngôn ngữ Tự nhiên (NLP): Làm việc với văn bản (chatbots, dịch thuật, phân tích cảm xúc).</li>
                <li>Thị giác Máy tính (Computer Vision - CV): Làm việc với hình ảnh/video (xe tự lái, nhận diện khuôn mặt, y tế).</li>
                <li>Generative AI (AI Tạo sinh): Tạo ra nội dung mới (hình ảnh, văn bản, code) — đây là lĩnh vực "hot" nhất hiện nay.</li>
              </ol>
            </li>
          </ul>
        </li>
      </ul>
    `,
  },
  {
    title: "Công cụ, Framework & Kỹ thuật Triển khai (MLOps)",
    subtitle:
      "Đây là nhóm kỹ năng 'kỹ sư' thực thụ, phân biệt một Kỹ sư AI với một Nhà nghiên cứu AI.",
    features: [
      "Frameworks về Deep Learning",
      "Xử lý Dữ liệu & Phân tích",
      "MLOps (Machine Learning Operations)",
    ],
    imageUrl: "/images/nen-tang3.jfif",
    htmlContent: `
      <ul class="list-disc pl-6 space-y-3">
        <li>
          <strong>Frameworks về Deep Learning:</strong>
          <ul class="list-disc pl-6 mt-2 space-y-2">
            <li>
              Bạn không cần phải viết lại thuật toán Gradient Descent từ đầu. 
              Các framework này cung cấp các "khối xây dựng" (building blocks) đã được tối ưu hóa cao, 
              đặc biệt là khả năng tính toán song song trên GPU (NVIDIA CUDA).
            </li>
          </ul>
        </li>
        <li>
          <strong>Xử lý Dữ liệu & Phân tích:</strong>
          <ul class="list-disc pl-6 mt-2 space-y-2">
            <li>
              Có một câu nói nổi tiếng: "Rác vào, rác ra" (Garbage In, Garbage Out). 
              Mô hình AI tốt bắt nguồn từ dữ liệu sạch. 
              Kỹ sư AI dành phần lớn thời gian (có thể đến 70-80%) để thu thập, làm sạch và tiền xử lý dữ liệu. 
              SQL là kỹ năng sống còn để lấy được dữ liệu đó từ kho.
            </li>
          </ul>
        </li>
        <li>
          <strong>MLOps (Machine Learning Operations):</strong>
          <ul class="list-disc pl-6 mt-2 space-y-2">
            <li>
              Một mô hình AI trong Jupyter Notebook là vô dụng. 
              MLOps là toàn bộ quy trình đưa mô hình ra phục vụ người dùng thực tế, 
              theo dõi hiệu suất của nó, và tự động đào tạo lại (re-train) khi dữ liệu thay đổi.
            </li>
          </ul>
        </li>
      </ul>
    `,
  },
  {
    title: "Kỹ năng Mềm & Tư duy Kinh doanh",
    subtitle: "Đây là yếu tố giúp bạn thăng tiến và tạo ra giá trị thực sự.",
    features: [
      "Tư duy Giải quyết Vấn đề (Problem-Solving)",
      "Giao tiếp & Kể chuyện bằng Dữ liệu (Communication & Storytelling)",
    ],
    imageUrl: "/images/nen-tang4.jfif",
    htmlContent: `
      <ul>
        <li><strong>Tư duy Giải quyết Vấn đề (Problem-Solving):</strong>
          <ul>
            <li>Khách hàng sẽ không nói "Tôi cần mô hình CNN". Họ sẽ nói "Tôi muốn tự động phát hiện lỗi sản phẩm trên dây chuyền". Bạn phải là người xác định rằng đây là bài toán Computer Vision và CNN là giải pháp phù hợp.</li>
          </ul>
        </li>
        <li><strong>Giao tiếp & Kể chuyện bằng Dữ liệu (Communication & Storytelling):</strong>
          <ul>
            <li>Bạn cần giải thích <em>tại sao</em> mô hình của bạn có giá trị, nó hoạt động hiệu quả đến đâu, và rủi ro của nó là gì (ví dụ: mô hình có thể dự đoán sai trong trường hợp nào) một cách dễ hiểu.</li>
          </ul>
        </li>
      </ul>
    `,
  },
];

// Custom hook for outside click detection
const useOutsideClick = <T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  callback: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
};

// Helper Card component that animates in when in view
const Card = ({
  section,
  id,
  setActive,
  ...rest
}: {
  section: SectionProps;
  id: string;
  setActive: (section: SectionProps | null) => void;
  [key: string]: any;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1, rootMargin: "-100px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      onClick={() => setActive(section)}
      className={`relative z-10 flex h-48 w-full flex-col items-start justify-start overflow-hidden rounded-2xl bg-gray-100 sm:h-56 sm:w-full md:h-120 md:w-85 cursor-pointer transition-all duration-600 hover:scale-[1.02] active:scale-[0.98] ${
        isInView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-20"
      }`}
      style={{ transitionDelay: "100ms" }}
      {...rest}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/90 via-black/60 to-transparent" />
      <div className="relative z-36 p-3 sm:p-4 lg:p-7 flex flex-col justify-end h-full">
        <p className="mb-2 max-w-xs text-pretty text-left font-sans text-lg font-semibold tracking-tight text-white sm:text-xl md:text-2xl lg:text-3xl line-clamp-2">
          {section.title}
        </p>
        <p className="text-left font-sans text-xs font-medium text-white/90 sm:text-sm md:text-base line-clamp-2">
          {section.subtitle}
        </p>
      </div>
      {section.imageUrl ? (
        <Image
          src={section.imageUrl}
          alt={section.title}
          fill
          className="absolute inset-0 z-10 object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 384px"
        />
      ) : (
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-gray-400 to-gray-600" />
      )}
    </div>
  );
};

const HowToBecomeSection = () => {
  const [active, setActive] = useState<SectionProps | null>(null);
  const [showModal, setShowModal] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useOutsideClick(ref, () => {
    if (active) {
      setActive(null);
      setShowModal(false);
    }
  });

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
        setShowModal(false);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
      setShowModal(true);
    } else {
      document.body.style.overflow = "auto";
      setShowModal(false);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  return (
    <div className="container mx-auto top-2.5 space-y-6 sm:space-y-8 px-4 sm:px-6 lg:px-8">
      <div className="mb-8 sm:mb-12 text-center">
        <h2 className="mb-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight text-gray-900">
          Làm thế nào để trở thành{" "}
          <span className="text-primary">Kỹ sư AI toàn năng?</span>
        </h2>
        <p className="mx-auto max-w-3xl text-sm sm:text-base leading-relaxed text-gray-600 px-2">
          Kỹ sư AI là một vai trò "hybrid" xuất sắc giữa Lập trình viên, Nhà
          khoa học Dữ liệu và Kỹ sư DevOps.
        </p>
      </div>

      <div>
        {showModal && active && (
          <>
            <div
              className={`fixed inset-0 z-10 h-full w-full bg-black/60 sm:bg-black/20 transition-opacity duration-300 ${
                showModal ? "opacity-100" : "opacity-0"
              }`}
              onClick={() => {
                setActive(null);
                setShowModal(false);
              }}
            />
            <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4">
              <button
                className="absolute right-3 top-3 sm:right-2 sm:top-2 z-[110] flex h-8 w-8 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-white/90 sm:bg-white shadow-lg sm:shadow-none transition-opacity duration-200 hover:opacity-80"
                onClick={() => {
                  setActive(null);
                  setShowModal(false);
                }}
                aria-label="Đóng"
              >
                <X className="h-5 w-5 sm:h-4 sm:w-4 text-gray-900" />
              </button>
              <div
                ref={ref}
                className="hide-scrollbar relative flex h-[90vh] sm:h-full sm:min-h-[300px] w-full sm:max-w-[600px] flex-col overflow-auto bg-white dark:bg-neutral-900 sm:rounded-3xl sm:max-h-[90%] transition-all duration-300"
              >
                <div className="relative rounded-t-lg sm:rounded-t-3xl p-4 sm:p-6 min-h-[180px] sm:min-h-[200px]">
                  {active.imageUrl ? (
                    <Image
                      src={active.imageUrl}
                      alt={active.title}
                      fill
                      className="absolute inset-0 z-0 object-cover rounded-t-lg sm:rounded-t-3xl"
                      sizes="(max-width: 640px) 100vw, 600px"
                    />
                  ) : (
                    <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-400 to-gray-600 rounded-t-lg sm:rounded-t-3xl" />
                  )}
                  <div className="absolute inset-0 z-10 bg-black/60 sm:bg-black/50 rounded-t-lg sm:rounded-t-3xl" />
                  <div className="relative z-20">
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      {active.title}
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-white/90">
                      {active.subtitle}
                    </p>
                  </div>
                </div>
                <div
                  className="prose prose-sm sm:prose-base prose-neutral max-w-none p-4 sm:p-6 prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700 prose-li:text-gray-700"
                  dangerouslySetInnerHTML={{ __html: active.htmlContent }}
                />
              </div>
            </div>
          </>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-9xl mx-auto">
          {HOW_TO_BECOME_DATA.map((section, index) => (
            <Card
              section={section}
              id={id}
              setActive={setActive}
              key={`card-${section.title}-${id}-${index}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowToBecomeSection;
