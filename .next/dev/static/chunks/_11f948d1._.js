(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', 'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]', 'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/hero-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroSection",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/radio.js [app-client] (ecmascript) <export default as Radio>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function HeroSection() {
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        phone: "",
        email: "",
        name: "",
        parentOrStudent: [],
        school: "",
        question: ""
    });
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitMessage, setSubmitMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const handleCheckboxChange = (value)=>{
        setFormData((prev)=>{
            const current = prev.parentOrStudent;
            if (current.includes(value)) {
                return {
                    ...prev,
                    parentOrStudent: current.filter((item)=>item !== value)
                };
            } else {
                return {
                    ...prev,
                    parentOrStudent: [
                        ...current,
                        value
                    ]
                };
            }
        });
    };
    const handleSingleChoice = (value)=>{
        setFormData((prev)=>{
            // Single choice: replace the array with just the selected value
            if (prev.parentOrStudent.includes(value)) {
                return {
                    ...prev,
                    parentOrStudent: []
                };
            } else {
                return {
                    ...prev,
                    parentOrStudent: [
                        value
                    ]
                };
            }
        });
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage("");
        try {
            const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwRvjPa1JmE-i6wgebjPGUQXQPFcrdHujrMPeZ3Rv3gFpGu0T26tiOOSKjmzBlOCDn0/exec";
            // Sắp xếp dữ liệu theo thứ tự cột trong Google Sheets
            // Thứ tự cột trong Google Sheets cần là:
            // 1. name (Họ và tên)
            // 2. phone (Số điện thoại)
            // 3. email (Email)
            // 4. parentOrStudent (Phụ Huynh / Học sinh)
            // 5. school (Trường THPT)
            // 6. question (Câu hỏi)
            // 7. timestamp (Thời gian đăng ký)
            const submissionData = {
                name: formData.name || "",
                phone: formData.phone || "",
                email: formData.email || "",
                parentOrStudent: formData.parentOrStudent.length > 0 ? formData.parentOrStudent.join(", ") : "",
                school: formData.school || "",
                question: formData.question || "",
                timestamp: new Date().toLocaleString("vi-VN", {
                    timeZone: "Asia/Ho_Chi_Minh",
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit"
                })
            };
            const response = await fetch(APPS_SCRIPT_URL, {
                method: "POST",
                body: JSON.stringify(submissionData),
                headers: {
                    "Content-Type": "text/plain"
                },
                redirect: "follow"
            });
            const result = await response.json();
            if (result.status === "success") {
                setSubmitMessage("✅ Đăng ký thành công! Chúng tôi sẽ gửi link tham dự qua email của bạn.");
                setFormData({
                    parentOrStudent: [],
                    phone: "",
                    email: "",
                    name: "",
                    school: "",
                    question: ""
                });
            } else {
                setSubmitMessage("❌ Có lỗi xảy ra: " + result.message);
            }
        } catch (error) {
            console.error("[v0] Error submitting form:", error);
            setSubmitMessage("❌ Có lỗi xảy ra. Vui lòng kiểm tra kết nối internet và thử lại.");
        } finally{
            setIsSubmitting(false);
        }
    };
    const scrollToForm = ()=>{
        const form = document.getElementById("registration-form");
        if (form) {
            form.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }
    };
    if ("TURBOPACK compile-time truthy", 1) {
        ;
        window.scrollToRegistrationForm = scrollToForm;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative min-h-screen bg-[#0f1f3d] text-white overflow-hidden flex items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-80 bg-cover bg-center animate-fade-in",
                style: {
                    backgroundImage: "url('/images/ai-background.jpeg')",
                    backgroundPosition: "center center",
                    backgroundSize: "cover"
                }
            }, void 0, false, {
                fileName: "[project]/components/hero-section.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-b from-[#1a3a5c]/80 via-[#1a3a5c]/70 to-[#1a3a5c]/90"
            }, void 0, false, {
                fileName: "[project]/components/hero-section.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 md:px-6 py-12 md:py-16 relative z-10 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-8 md:mb-12 animate-[slideDown_0.8s_ease-out]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xs md:text-base font-bold tracking-wider px-4",
                                children: "SỰ KIỆN GẶP GỠ PHỤ HUYNH HỌC SINH"
                            }, void 0, false, {
                                fileName: "[project]/components/hero-section.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs md:text-base font-medium tracking-wider px-4",
                                children: [
                                    "được tổ chức bởi Hồng Lĩnh Education và Đại học Bách Khoa Hà Nội",
                                    " "
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/hero-section.tsx",
                                lineNumber: 142,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/hero-section.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid lg:grid-cols-2 gap-8 md:gap-12 items-start max-w-7xl mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-10 md:space-y-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6 md:p-10 lg:p-12 rounded-none animate-[fadeInUp_0.8s_ease-out_0.2s_both]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-balance animate-[textReveal_1s_ease-out_0.4s_both] bg-gradient-to-r from-[#6AECE1] to-[#FFF57E] bg-clip-text text-transparent",
                                                children: "ĐỊNH HƯỚNG & TUYỂN CHỌN TÀI NĂNG TRẺ CÔNG NGHỆ AI"
                                            }, void 0, false, {
                                                fileName: "[project]/components/hero-section.tsx",
                                                lineNumber: 150,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs md:text-sm lg:text-md xl:text-lg font-medium leading-tight text-balance animate-[textReveal_1s_ease-out_0.4s_both]",
                                                children: "120 phút giúp phụ huynh hiểu đúng ngành Trí tuệ nhân tạo và lộ trình để con trở thành Kỹ sư AI toàn năng từ THPT"
                                            }, void 0, false, {
                                                fileName: "[project]/components/hero-section.tsx",
                                                lineNumber: 157,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/hero-section.tsx",
                                        lineNumber: 149,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row flex-wrap gap-4 md:gap-8 text-sm md:text-base justify-start lg:justify-start",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 animate-[slideInLeft_0.6s_ease-out_0.6s_both] hover:scale-110 transition-transform duration-300",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center animate-[pulse_2s_ease-in-out_infinite]",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                            className: "w-5 h-5 md:w-6 md:h-6 text-[#1a3a5c]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/hero-section.tsx",
                                                            lineNumber: 166,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/hero-section.tsx",
                                                        lineNumber: 165,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium",
                                                        children: "20H00 | 13.12.2025"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/hero-section.tsx",
                                                        lineNumber: 168,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/hero-section.tsx",
                                                lineNumber: 164,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 animate-[slideInLeft_0.6s_ease-out_0.8s_both] hover:scale-110 transition-transform duration-300",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center animate-[pulse_2s_ease-in-out_0.5s_infinite]",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__["Radio"], {
                                                            className: "w-5 h-5 md:w-6 md:h-6 text-[#1a3a5c]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/hero-section.tsx",
                                                            lineNumber: 172,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/hero-section.tsx",
                                                        lineNumber: 171,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium",
                                                        children: "Zoom Online"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/hero-section.tsx",
                                                        lineNumber: 174,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/hero-section.tsx",
                                                lineNumber: 170,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/hero-section.tsx",
                                        lineNumber: 163,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/hero-section.tsx",
                                lineNumber: 148,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:ml-auto animate-[slideInRight_0.8s_ease-out_0.4s_both] w-full",
                                id: "registration-form",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-2xl shadow-2xl overflow-hidden max-w-md w-full mx-auto hover:shadow-3xl transition-shadow duration-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gradient-to-r from-[#4f46e5] to-[#3b82f6] p-5 md:p-6 text-center animate-[gradientShift_3s_ease-in-out_infinite]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg md:text-xl font-bold text-white animate-[bounce_1s_ease-in-out_1s]",
                                                    children: "ĐĂNG KÝ THAM DỰ ONLINE"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/hero-section.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-white/90 mt-2",
                                                    children: "CHỈ CÒN 99 SUẤT CUỐI CÙNG"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/hero-section.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/hero-section.tsx",
                                            lineNumber: 181,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                            onSubmit: handleSubmit,
                                            className: "p-6 md:p-8 space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-1  gap-4",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                placeholder: "Họ và tên *",
                                                                value: formData.name,
                                                                onChange: (e)=>setFormData({
                                                                        ...formData,
                                                                        name: e.target.value
                                                                    }),
                                                                required: true,
                                                                disabled: isSubmitting,
                                                                className: "bg-gray-100 border-0 h-12 text-gray-900 placeholder:text-gray-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/hero-section.tsx",
                                                                lineNumber: 192,
                                                                columnNumber: 19
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/hero-section.tsx",
                                                            lineNumber: 191,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                            placeholder: "Số điện thoại *",
                                                            type: "tel",
                                                            value: formData.phone,
                                                            onChange: (e)=>setFormData({
                                                                    ...formData,
                                                                    phone: e.target.value
                                                                }),
                                                            required: true,
                                                            disabled: isSubmitting,
                                                            className: "bg-gray-100 border-0 h-12 text-gray-900 placeholder:text-gray-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/hero-section.tsx",
                                                            lineNumber: 202,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                            placeholder: "Email *",
                                                            type: "email",
                                                            value: formData.email,
                                                            onChange: (e)=>setFormData({
                                                                    ...formData,
                                                                    email: e.target.value
                                                                }),
                                                            required: true,
                                                            disabled: isSubmitting,
                                                            className: "bg-gray-100 border-0 h-12 text-gray-900 placeholder:text-gray-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/hero-section.tsx",
                                                            lineNumber: 212,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-full",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                                    children: [
                                                                        "Phụ Huynh / Học sinh ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-red-500",
                                                                            children: "*"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/hero-section.tsx",
                                                                            lineNumber: 223,
                                                                            columnNumber: 26
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/hero-section.tsx",
                                                                    lineNumber: 222,
                                                                    columnNumber: 3
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    role: "radiogroup",
                                                                    "aria-label": "Phụ Huynh hoặc Học sinh",
                                                                    className: "flex gap-3",
                                                                    children: [
                                                                        "Phụ Huynh",
                                                                        "Học sinh"
                                                                    ].map((opt)=>{
                                                                        const selected = formData.parentOrStudent.includes(opt);
                                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            role: "radio",
                                                                            "aria-checked": selected,
                                                                            onClick: ()=>handleSingleChoice(opt),
                                                                            disabled: isSubmitting,
                                                                            className: `flex items-center gap-3 px-4 py-2 rounded-lg transition-colors duration-150
            ${selected ? "bg-indigo-600 text-white shadow-md" : "bg-white text-gray-700 border border-gray-200"}
            focus:outline-none focus:ring-2 focus:ring-indigo-300`,
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: `flex h-5 w-5 shrink-0 items-center justify-center rounded-sm border transition-all
              ${selected ? "bg-white border-transparent" : "bg-white border-gray-300"}`,
                                                                                    "aria-hidden": "true",
                                                                                    children: selected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                        className: "h-4 w-4 text-indigo-600",
                                                                                        viewBox: "0 0 20 20",
                                                                                        fill: "currentColor",
                                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                            fillRule: "evenodd",
                                                                                            d: "M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 111.415-1.415L8.414 12.586l7.293-7.293a1 1 0 011.414 0z",
                                                                                            clipRule: "evenodd"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/hero-section.tsx",
                                                                                            lineNumber: 255,
                                                                                            columnNumber: 17
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/hero-section.tsx",
                                                                                        lineNumber: 254,
                                                                                        columnNumber: 15
                                                                                    }, this) : /* empty box (keeps size) */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "block h-3 w-3"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/hero-section.tsx",
                                                                                        lineNumber: 259,
                                                                                        columnNumber: 15
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/hero-section.tsx",
                                                                                    lineNumber: 247,
                                                                                    columnNumber: 11
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-sm text-center font-medium",
                                                                                    children: opt
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/hero-section.tsx",
                                                                                    lineNumber: 263,
                                                                                    columnNumber: 11
                                                                                }, this)
                                                                            ]
                                                                        }, opt, true, {
                                                                            fileName: "[project]/components/hero-section.tsx",
                                                                            lineNumber: 235,
                                                                            columnNumber: 9
                                                                        }, this);
                                                                    })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/hero-section.tsx",
                                                                    lineNumber: 226,
                                                                    columnNumber: 3
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "mt-2 text-xs text-gray-500",
                                                                    children: "Chỉ chọn một mục. Thông tin giúp chúng tôi liên hệ phù hợp."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/hero-section.tsx",
                                                                    lineNumber: 269,
                                                                    columnNumber: 3
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/hero-section.tsx",
                                                            lineNumber: 221,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/hero-section.tsx",
                                                    lineNumber: 189,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 gap-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        placeholder: "Trường THPT theo học",
                                                        value: formData.school,
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                school: e.target.value
                                                            }),
                                                        disabled: isSubmitting,
                                                        className: "bg-gray-100 border-0 h-12 text-gray-900 placeholder:text-gray-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/hero-section.tsx",
                                                        lineNumber: 278,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/hero-section.tsx",
                                                    lineNumber: 276,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                    placeholder: "Câu hỏi dành cho AI57 về Webinar",
                                                    value: formData.question,
                                                    onChange: (e)=>setFormData({
                                                            ...formData,
                                                            question: e.target.value
                                                        }),
                                                    disabled: isSubmitting,
                                                    className: "bg-gray-100 border-0 h-12 text-gray-900 placeholder:text-gray-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/hero-section.tsx",
                                                    lineNumber: 287,
                                                    columnNumber: 17
                                                }, this),
                                                submitMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `text-center text-sm p-3 rounded-lg ${submitMessage.includes("✅") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`,
                                                    children: submitMessage
                                                }, void 0, false, {
                                                    fileName: "[project]/components/hero-section.tsx",
                                                    lineNumber: 296,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    type: "submit",
                                                    disabled: isSubmitting,
                                                    className: "w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 md:py-6 rounded-lg h-12 md:h-14 text-sm md:text-base transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl active:scale-95 animate-[buttonPulse_2s_ease-in-out_2s_infinite] relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700",
                                                    children: isSubmitting ? "ĐANG GỬI..." : "GỬI THÔNG TIN"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/hero-section.tsx",
                                                    lineNumber: 305,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-500 text-center italic",
                                                    children: "Link zoom sẽ được gửi qua email sau khi đăng ký"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/hero-section.tsx",
                                                    lineNumber: 321,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/hero-section.tsx",
                                            lineNumber: 188,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/hero-section.tsx",
                                    lineNumber: 180,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/hero-section.tsx",
                                lineNumber: 179,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/hero-section.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/hero-section.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/hero-section.tsx",
        lineNumber: 127,
        columnNumber: 5
    }, this);
}
_s(HeroSection, "sM4AejieBdJsQbMr3Xllt5i2AZg=");
_c = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('px-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center px-6 [.border-t]:pt-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/testimonials-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TestimonialsSection",
    ()=>TestimonialsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trophy.js [app-client] (ecmascript) <export default as Trophy>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const testimonials = [
    {
        name: "Nguyễn Việt Hưng",
        title: "Sinh viên xuất sắc - Khoa KHMT, Đại học Bách Khoa Hà Nội",
        school: "Cựu học sinh Chu Văn An \nGiải Nhì Thành phố tiếng Anh\nThủ khoa 5 khối THPTQG\nIelts 8.0 và SAT 1560\nKhoa học dữ liệu - Trí tuệ nhân tạo HUST",
        image: "/images/viet-hung.jpg",
        achievements: [
            "IELTS 8.0",
            "SAT 1560",
            "Thủ khoa 5 khối"
        ]
    }
];
function TestimonialsSection() {
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TestimonialsSection.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "TestimonialsSection.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                }
            }["TestimonialsSection.useEffect"], {
                threshold: 0.1
            });
            if (sectionRef.current) {
                observer.observe(sectionRef.current);
            }
            return ({
                "TestimonialsSection.useEffect": ()=>observer.disconnect()
            })["TestimonialsSection.useEffect"];
        }
    }["TestimonialsSection.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        className: "py-16 md:py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 overflow-hidden pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/components/testimonials-section.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-20 right-20 w-40 h-40 bg-indigo-200 rounded-full blur-3xl opacity-30 animate-pulse",
                        style: {
                            animationDelay: "1s"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/testimonials-section.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/testimonials-section.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-12 md:mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-sm font-semibold mb-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/testimonials-section.tsx",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Diễn giả đặc biệt"
                                    }, void 0, false, {
                                        fileName: "[project]/components/testimonials-section.tsx",
                                        lineNumber: 58,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/testimonials-section.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: `text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
                                style: {
                                    transitionDelay: "100ms"
                                },
                                children: "KHÁCH MỜI"
                            }, void 0, false, {
                                fileName: "[project]/components/testimonials-section.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `text-gray-600 text-base md:text-lg transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
                                style: {
                                    transitionDelay: "200ms"
                                },
                                children: "Gặp gỡ những người truyền cảm hứng của chúng ta"
                            }, void 0, false, {
                                fileName: "[project]/components/testimonials-section.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/testimonials-section.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row flex-wrap justify-center gap-6 md:gap-8 max-w-5xl mx-auto",
                        children: testimonials.map((testimonial, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `relative group transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
                                style: {
                                    transitionDelay: `${300 + index * 100}ms`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500 animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/components/testimonials-section.tsx",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                        className: "relative p-8 md:p-10 text-center bg-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 w-full sm:w-80 md:w-96 rounded-2xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative w-44 h-44 md:w-52 md:h-52 mx-auto mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full animate-spin-slow opacity-75"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/testimonials-section.tsx",
                                                        lineNumber: 89,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-2 rounded-full overflow-hidden bg-white shadow-xl",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: testimonial.image || "/placeholder.svg",
                                                            alt: testimonial.name,
                                                            className: "w-full h-full object-cover"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/testimonials-section.tsx",
                                                            lineNumber: 91,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/testimonials-section.tsx",
                                                        lineNumber: 90,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute -top-2 -right-2 bg-gradient-to-br from-yellow-400 to-orange-500 text-white p-3 rounded-full shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-300",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                                                            className: "w-6 h-6"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/testimonials-section.tsx",
                                                            lineNumber: 99,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/testimonials-section.tsx",
                                                        lineNumber: 98,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/testimonials-section.tsx",
                                                lineNumber: 88,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-bold text-xl md:text-2xl mb-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent",
                                                children: testimonial.name
                                            }, void 0, false, {
                                                fileName: "[project]/components/testimonials-section.tsx",
                                                lineNumber: 104,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm md:text-base text-gray-600 font-medium mb-4 px-2",
                                                children: testimonial.title
                                            }, void 0, false, {
                                                fileName: "[project]/components/testimonials-section.tsx",
                                                lineNumber: 109,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2 justify-center mb-4",
                                                children: testimonial.achievements.map((achievement, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-3 py-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs font-semibold rounded-full shadow-md",
                                                        children: achievement
                                                    }, idx, false, {
                                                        fileName: "[project]/components/testimonials-section.tsx",
                                                        lineNumber: 114,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/testimonials-section.tsx",
                                                lineNumber: 112,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-4 rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/components/testimonials-section.tsx",
                                                lineNumber: 124,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start justify-center gap-2 mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                                        className: "w-5 h-5 text-blue-600 flex-shrink-0 mt-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/testimonials-section.tsx",
                                                        lineNumber: 128,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm md:text-base text-gray-700 whitespace-pre-line text-left leading-relaxed",
                                                        children: testimonial.school
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/testimonials-section.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/testimonials-section.tsx",
                                                lineNumber: 127,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-b-2xl"
                                            }, void 0, false, {
                                                fileName: "[project]/components/testimonials-section.tsx",
                                                lineNumber: 135,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/testimonials-section.tsx",
                                        lineNumber: 86,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/components/testimonials-section.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/testimonials-section.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/testimonials-section.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/testimonials-section.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_s(TestimonialsSection, "t6xTCIDW8wBKaEAVt1RBRErIU/M=");
_c = TestimonialsSection;
var _c;
__turbopack_context__.k.register(_c, "TestimonialsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/consulting-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConsultingSection",
    ()=>ConsultingSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const benefits = [
    "Học hỏi tư duy từ Chuyên gia Công nghệ",
    "Giải mã nghề Kỹ sư AI ",
    "AI là thứ mọi người đều cần phải biết .",
    " Lợi thế phát triển sự nghiệp du học"
];
function ConsultingSection() {
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConsultingSection.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "ConsultingSection.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                }
            }["ConsultingSection.useEffect"], {
                threshold: 0.1
            });
            if (sectionRef.current) {
                observer.observe(sectionRef.current);
            }
            return ({
                "ConsultingSection.useEffect": ()=>observer.disconnect()
            })["ConsultingSection.useEffect"];
        }
    }["ConsultingSection.useEffect"], []);
    const scrollToForm = ()=>{
        const formElement = document.getElementById("registration-form");
        if (formElement) {
            formElement.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        className: "py-12 md:py-16 bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `space-y-4 md:space-y-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl md:text-3xl font-bold",
                                children: "THAM GIA HỘI THẢO, QUÝ PHỤ HUYNH VÀ HỌC SINH SẼ HỌC CÁCH:"
                            }, void 0, false, {
                                fileName: "[project]/components/consulting-section.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3 md:space-y-4",
                                children: benefits.map((benefit, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-3 animate-fade-in",
                                        style: {
                                            animationDelay: `${index * 100}ms`
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                className: "w-5 h-5 md:w-6 md:h-6 text-green-600 flex-shrink-0 mt-1"
                                            }, void 0, false, {
                                                fileName: "[project]/components/consulting-section.tsx",
                                                lineNumber: 56,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm md:text-base text-gray-700",
                                                children: benefit
                                            }, void 0, false, {
                                                fileName: "[project]/components/consulting-section.tsx",
                                                lineNumber: 57,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/components/consulting-section.tsx",
                                        lineNumber: 55,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/consulting-section.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: scrollToForm,
                                className: "bg-[#1e3a5f] hover:bg-[#2d5a8c] text-white px-6 md:px-8 py-5 md:py-6 rounded-full font-semibold transition-all hover:scale-105 text-sm md:text-base w-full sm:w-auto",
                                children: "ĐĂNG KÝ THAM DỰ MIỄN PHÍ"
                            }, void 0, false, {
                                fileName: "[project]/components/consulting-section.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/consulting-section.tsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/images/tham-gia-hoi-thao.png",
                            alt: "Online Webinar - Giải Mã Lộ Trình Kỹ Sư AI Toàn Năng",
                            className: "rounded-lg shadow-xl w-full hover:scale-105 transition-transform duration-500"
                        }, void 0, false, {
                            fileName: "[project]/components/consulting-section.tsx",
                            lineNumber: 73,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/consulting-section.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/consulting-section.tsx",
                lineNumber: 45,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/consulting-section.tsx",
            lineNumber: 44,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/consulting-section.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(ConsultingSection, "t6xTCIDW8wBKaEAVt1RBRErIU/M=");
_c = ConsultingSection;
var _c;
__turbopack_context__.k.register(_c, "ConsultingSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/agenda-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AgendaSection",
    ()=>AgendaSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const agendaItems = [
    {
        phase: "THE WHY",
        title: "Kỷ nguyên AI và Vị thế mới của người Việt trẻ",
        keynotes: [
            "Phân tích Nghị quyết 57 & Bối cảnh thế giới.",
            "Khẳng định: AI là cơ hội duy nhất để Việt Nam đi tắt đón đầu, và là ngành nghề mới nỗi trong thời kỳ mới.",
            "Sứ mệnh của Bách Khoa trong việc phát triển tài năng kỹ sư AI từ cấp 3."
        ]
    },
    {
        phase: "THE REALITY",
        title: "Chân dung Kỹ sư AI 2030: Họ là ai, Lương bao nhiêu? Cơ hội nghề nghiệp ở đâu?",
        keynotes: [
            "Các cơ hội nghề nghiệp, và độ phát triển của AI trong thời đại mới.",
            "Show bảng lương thực tế & lộ trình thăng tiến.",
            "Chia sẻ thật về cơn khát và nhu cầu kỹ sư AI hiện tại và trong 5 năm nữa."
        ]
    },
    {
        phase: "LỘ TRÌNH 360 GIỜ",
        title: "Giúp học sinh có nền tảng tốt chuẩn quốc tế, dựa theo chương trình của NVIDIA",
        keynotes: [
            "Phân tích những kiến thức nền tảng & tính thực tế của khóa học mang đến."
        ]
    },
    {
        phase: "NGƯỜI ĐI TRƯỚC 2-3 năm",
        title: "Là học sinh, cảm thấy rất đáng để bắt đầu từ cấp 3",
        keynotes: [
            "Chia sẻ một bạn trẻ học chuyên ngành AI ở Việt Nam về cuộc đua về AI ở chính ngôi trường của bạn.",
            " Truyền cảm hứng: Nếu mình làm được, bạn cũng làm được.",
            "Q&A trực tiếp với các bạn học sinh tiên phong"
        ]
    }
];
function AgendaSection() {
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [expandedIndex, setExpandedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AgendaSection.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "AgendaSection.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                }
            }["AgendaSection.useEffect"], {
                threshold: 0.1
            });
            if (sectionRef.current) {
                observer.observe(sectionRef.current);
            }
            return ({
                "AgendaSection.useEffect": ()=>observer.disconnect()
            })["AgendaSection.useEffect"];
        }
    }["AgendaSection.useEffect"], []);
    const toggleExpand = (index)=>{
        setExpandedIndex(expandedIndex === index ? null : index);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        className: "py-16 md:py-24 bg-gradient-to-br from-[#1e3a5f] via-[#1a3354] to-[#0f2744] relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-20 left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/components/agenda-section.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-20 right-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/components/agenda-section.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/agenda-section.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: `text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 md:mb-20 text-white transition-all duration-700 tracking-wide ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
                        children: "AGENDA"
                    }, void 0, false, {
                        fileName: "[project]/components/agenda-section.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid lg:grid-cols-1 gap-8 md:gap-12 max-w-7xl mx-auto items-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 md:space-y-5 mt-10 lg:mt-16",
                            children: agendaItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: `group relative overflow-hidden bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-l-4 border-[#2563eb] cursor-pointer ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`,
                                    style: {
                                        transitionDelay: `${index * 150}ms`
                                    },
                                    onClick: ()=>toggleExpand(index),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        }, void 0, false, {
                                            fileName: "[project]/components/agenda-section.tsx",
                                            lineNumber: 99,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-3 md:gap-4 p-6 md:p-5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] text-white rounded-xl flex items-center justify-center font-bold text-lg md:text-xl shadow-lg group-hover:scale-110 transition-transform duration-500",
                                                            children: [
                                                                "0",
                                                                index + 1
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/agenda-section.tsx",
                                                            lineNumber: 103,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "font-bold text-base md:text-lg mb-1 md:mb-2 text-[#1e3a5f] group-hover:text-[#2563eb] transition-colors duration-300",
                                                                    children: item.phase
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/agenda-section.tsx",
                                                                    lineNumber: 107,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-700 text-sm md:text-base leading-relaxed",
                                                                    children: item.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/agenda-section.tsx",
                                                                    lineNumber: 110,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/agenda-section.tsx",
                                                            lineNumber: 106,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                            className: `flex-shrink-0 w-5 h-5 md:w-6 md:h-6 text-[#2563eb] transition-transform duration-300 ${expandedIndex === index ? "rotate-180" : ""}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/agenda-section.tsx",
                                                            lineNumber: 112,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/agenda-section.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `overflow-hidden transition-all duration-500 ease-in-out ${expandedIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "px-6 pb-6 md:px-5 md:pb-5 pt-2 border-t border-gray-200 bg-gradient-to-br from-blue-50 to-white",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "font-semibold text-[#1e3a5f] mb-3 text-sm md:text-base",
                                                                children: "Nội dung chi tiết:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/agenda-section.tsx",
                                                                lineNumber: 125,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                className: "space-y-2",
                                                                children: item.keynotes.map((keynote, kIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        className: "flex gap-2 text-gray-700 text-sm md:text-base",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-[#2563eb] font-bold",
                                                                                children: "•"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/agenda-section.tsx",
                                                                                lineNumber: 129,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: keynote
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/agenda-section.tsx",
                                                                                lineNumber: 130,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, kIndex, true, {
                                                                        fileName: "[project]/components/agenda-section.tsx",
                                                                        lineNumber: 128,
                                                                        columnNumber: 27
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/agenda-section.tsx",
                                                                lineNumber: 126,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/agenda-section.tsx",
                                                        lineNumber: 124,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/agenda-section.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/agenda-section.tsx",
                                            lineNumber: 101,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/components/agenda-section.tsx",
                                    lineNumber: 91,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/agenda-section.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/agenda-section.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/agenda-section.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/agenda-section.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_s(AgendaSection, "lV66sE1sBdm87IEu6cEDlLG657k=");
_c = AgendaSection;
var _c;
__turbopack_context__.k.register(_c, "AgendaSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/target-audience-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TargetAudienceSection",
    ()=>TargetAudienceSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const audiences = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        title: "Phụ huynh quan tâm giáo dục chất lượng",
        description: "Ưu tiên STEM/AI, muốn con định hướng nghề nghiệp sớm",
        color: "from-blue-500 to-blue-600"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"],
        title: "Phụ huynh có kế hoạch du học",
        description: "Cần xây dựng hồ sơ mạnh, săn học bổng quốc tế",
        color: "from-indigo-500 to-indigo-600"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
        title: "Con yêu thích công nghệ/AI",
        description: "Muốn tìm chương trình uy tín để đầu tư sớm",
        color: "from-purple-500 to-purple-600"
    }
];
function TargetAudienceSection() {
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TargetAudienceSection.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "TargetAudienceSection.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                }
            }["TargetAudienceSection.useEffect"], {
                threshold: 0.1
            });
            if (sectionRef.current) {
                observer.observe(sectionRef.current);
            }
            return ({
                "TargetAudienceSection.useEffect": ()=>observer.disconnect()
            })["TargetAudienceSection.useEffect"];
        }
    }["TargetAudienceSection.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        className: "py-12 md:py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-10 left-0 w-60 h-60 bg-blue-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
            }, void 0, false, {
                fileName: "[project]/components/target-audience-section.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 right-0 w-92 h-92 bg-indigo-200/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"
            }, void 0, false, {
                fileName: "[project]/components/target-audience-section.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-12 md:mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: `text-2xl md:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-[#1e3a5f] to-[#2563eb] bg-clip-text text-transparent transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
                                children: "HỘI THẢO NÀY DÀNH CHO AI?"
                            }, void 0, false, {
                                fileName: "[project]/components/target-audience-section.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `text-gray-600 text-lg max-w-2xl mx-auto transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
                                children: "Chương trình phù hợp cho những đối tượng sau"
                            }, void 0, false, {
                                fileName: "[project]/components/target-audience-section.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/target-audience-section.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto",
                        children: audiences.map((audience, index)=>{
                            const Icon = audience.icon;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: `group relative overflow-hidden bg-white border-2 border-transparent hover:border-blue-200 p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
                                style: {
                                    transitionDelay: `${index * 150}ms`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `absolute inset-0 bg-gradient-to-br ${audience.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`
                                    }, void 0, false, {
                                        fileName: "[project]/components/target-audience-section.tsx",
                                        lineNumber: 84,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative mb-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `w-16 h-16 rounded-2xl bg-gradient-to-br ${audience.color} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                className: "w-8 h-8 text-white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/target-audience-section.tsx",
                                                lineNumber: 93,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/target-audience-section.tsx",
                                            lineNumber: 90,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/target-audience-section.tsx",
                                        lineNumber: 89,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300",
                                                children: audience.title
                                            }, void 0, false, {
                                                fileName: "[project]/components/target-audience-section.tsx",
                                                lineNumber: 99,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600 text-sm leading-relaxed",
                                                children: audience.description
                                            }, void 0, false, {
                                                fileName: "[project]/components/target-audience-section.tsx",
                                                lineNumber: 102,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/target-audience-section.tsx",
                                        lineNumber: 98,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100/50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    }, void 0, false, {
                                        fileName: "[project]/components/target-audience-section.tsx",
                                        lineNumber: 106,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/components/target-audience-section.tsx",
                                lineNumber: 76,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/target-audience-section.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `mt-12 text-center transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg border border-gray-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                    className: "w-5 h-5 text-green-500"
                                }, void 0, false, {
                                    fileName: "[project]/components/target-audience-section.tsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-700 font-medium",
                                    children: "Phù hợp cho học sinh từ lớp 9 đến lớp 12"
                                }, void 0, false, {
                                    fileName: "[project]/components/target-audience-section.tsx",
                                    lineNumber: 118,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/target-audience-section.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/target-audience-section.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/target-audience-section.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/target-audience-section.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(TargetAudienceSection, "t6xTCIDW8wBKaEAVt1RBRErIU/M=");
_c = TargetAudienceSection;
var _c;
__turbopack_context__.k.register(_c, "TargetAudienceSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/reviews-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReviewsSection",
    ()=>ReviewsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/quote.js [app-client] (ecmascript) <export default as Quote>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const reviews = [
    {
        text: "Chương trình giúp tôi hiểu rõ nền tảng AI thay vì chỉ học theo trend. Lộ trình rất bài bản và dễ áp dụng.",
        name: "Thu Thủy",
        role: "Phụ huynh học sinh lớp 10"
    },
    {
        text: "Chỉ sau vài buổi đã có thể tự làm chatbot, phân loại ảnh, và hiểu cách hoạt động của mô hình AI hiện đại.",
        name: "Bích Hà",
        role: "Phụ huynh học sinh Chuyên Sư Phạm"
    },
    {
        text: "Học xong tự tin hơn rất nhiều khi nói chuyện về AI, làm thuyết trình, và áp dụng vào công việc thật.",
        name: "Trung Dũng",
        role: "Phụ huynh học sinh Chu Văn An"
    }
];
function ReviewsSection() {
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReviewsSection.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "ReviewsSection.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                }
            }["ReviewsSection.useEffect"], {
                threshold: 0.1
            });
            if (sectionRef.current) {
                observer.observe(sectionRef.current);
            }
            return ({
                "ReviewsSection.useEffect": ()=>observer.disconnect()
            })["ReviewsSection.useEffect"];
        }
    }["ReviewsSection.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        className: "py-16 bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: `text-3xl font-bold text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
                    children: "PHỤ HUYNH VÀ HỌC SINH ĐÃ NÓI GÌ VỀ AI57"
                }, void 0, false, {
                    fileName: "[project]/components/reviews-section.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-3 gap-8 max-w-6xl mx-auto",
                    children: reviews.map((review, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: `p-6 bg-gray-50 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
                            style: {
                                transitionDelay: `${index * 100}ms`
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__["Quote"], {
                                    className: "w-10 h-10 text-blue-600 mb-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/reviews-section.tsx",
                                    lineNumber: 64,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-700 mb-6 text-sm leading-relaxed",
                                    children: review.text
                                }, void 0, false, {
                                    fileName: "[project]/components/reviews-section.tsx",
                                    lineNumber: 65,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-bold text-sm",
                                                children: review.name
                                            }, void 0, false, {
                                                fileName: "[project]/components/reviews-section.tsx",
                                                lineNumber: 68,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-600",
                                                children: review.role
                                            }, void 0, false, {
                                                fileName: "[project]/components/reviews-section.tsx",
                                                lineNumber: 69,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/reviews-section.tsx",
                                        lineNumber: 67,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/reviews-section.tsx",
                                    lineNumber: 66,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/components/reviews-section.tsx",
                            lineNumber: 57,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/reviews-section.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/reviews-section.tsx",
            lineNumber: 48,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/reviews-section.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_s(ReviewsSection, "t6xTCIDW8wBKaEAVt1RBRErIU/M=");
_c = ReviewsSection;
var _c;
__turbopack_context__.k.register(_c, "ReviewsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/faq-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FaqSection",
    ()=>FaqSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const faqs = [
    {
        number: "1",
        question: "Hội thảo này dành cho ai?",
        answer: "Hội thảo dành cho học sinh lớp 9-12 có định hướng nghề nghiệp sớm, mong muốn con có lợi thế cạnh tranh so với bạn bè cùng trang lứa."
    },
    {
        number: "2",
        question: "Hội thảo này diễn ra online hay offline?",
        answer: "Hội thảo diễn ra hoàn toàn online qua nền tảng Zoom, thuận tiện cho mọi người tham gia từ bất kỳ đâu."
    },
    {
        number: "3",
        question: "Mọi đăng ký của tôi được bảo mật như thế nào?",
        answer: "Chúng tôi cam kết bảo mật tuyệt đối thông tin của bạn theo chuẩn quốc tế. Thông tin chỉ được sử dụng cho mục đích liên hệ về chương trình du học."
    },
    {
        number: "4",
        question: "Tham gia hội thảo có mất phí gì không?",
        answer: "Hoàn toàn MIỄN PHÍ! Tuy nhiên, số lượng có hạn nên bạn nên đăng ký sớm để đảm bảo suất tham dự."
    },
    {
        number: "5",
        question: "Nếu bỏ lỡ buổi hội thảo thì tôi có thể xem lại ở đâu?",
        answer: "Chúng tôi sẽ gửi link video ghi hình buổi hội thảo cho tất cả những người đã đăng ký, giúp bạn có thể xem lại bất cứ lúc nào."
    }
];
function FaqSection() {
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FaqSection.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "FaqSection.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                }
            }["FaqSection.useEffect"], {
                threshold: 0.1
            });
            if (sectionRef.current) {
                observer.observe(sectionRef.current);
            }
            return ({
                "FaqSection.useEffect": ()=>observer.disconnect()
            })["FaqSection.useEffect"];
        }
    }["FaqSection.useEffect"], []);
    const scrollToForm = ()=>{
        const formElement = document.getElementById("registration-form");
        if (formElement) {
            formElement.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }
    };
    const toggleFaq = (index)=>{
        setOpenIndex(openIndex === index ? null : index);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        className: "py-16 bg-gray-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 max-w-4xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: `text-3xl font-bold text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
                    children: "CÂU HỎI THƯỜNG GẶP"
                }, void 0, false, {
                    fileName: "[project]/components/faq-section.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: faqs.map((faq, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: `bg-white hover:shadow-lg transition-all duration-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`,
                            style: {
                                transitionDelay: `${index * 50}ms`
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>toggleFaq(index),
                                className: "w-full p-6 text-left flex gap-4 items-start hover:bg-gray-50 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-shrink-0 w-10 h-10 bg-[#2563eb] text-white rounded-lg flex items-center justify-center font-bold",
                                        children: faq.number
                                    }, void 0, false, {
                                        fileName: "[project]/components/faq-section.tsx",
                                        lineNumber: 94,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-bold text-lg mb-2",
                                                children: faq.question
                                            }, void 0, false, {
                                                fileName: "[project]/components/faq-section.tsx",
                                                lineNumber: 98,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-700 text-sm leading-relaxed",
                                                    children: faq.answer
                                                }, void 0, false, {
                                                    fileName: "[project]/components/faq-section.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/faq-section.tsx",
                                                lineNumber: 99,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/faq-section.tsx",
                                        lineNumber: 97,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                        className: `flex-shrink-0 w-6 h-6 text-gray-400 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`
                                    }, void 0, false, {
                                        fileName: "[project]/components/faq-section.tsx",
                                        lineNumber: 107,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/faq-section.tsx",
                                lineNumber: 90,
                                columnNumber: 15
                            }, this)
                        }, index, false, {
                            fileName: "[project]/components/faq-section.tsx",
                            lineNumber: 83,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/faq-section.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mt-12 px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: scrollToForm,
                        className: "relative bg-gradient-to-r from-[#1e3a5f] to-[#2563eb] hover:from-[#2d5a8c] hover:to-[#3b82f6] text-white px-8 sm:px-12 py-4 sm:py-6 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95 w-full sm:w-auto max-w-md mx-auto group overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "relative z-10",
                                children: "ĐĂNG KÝ THAM DỰ MIỄN PHÍ"
                            }, void 0, false, {
                                fileName: "[project]/components/faq-section.tsx",
                                lineNumber: 122,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                            }, void 0, false, {
                                fileName: "[project]/components/faq-section.tsx",
                                lineNumber: 123,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 blur-xl group-hover:animate-[shimmer_2s_infinite]"
                            }, void 0, false, {
                                fileName: "[project]/components/faq-section.tsx",
                                lineNumber: 124,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/faq-section.tsx",
                        lineNumber: 118,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/faq-section.tsx",
                    lineNumber: 117,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/faq-section.tsx",
            lineNumber: 74,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/faq-section.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
_s(FaqSection, "qIVaG5sD17WZD/AeLfPe6I6DTbY=");
_c = FaqSection;
var _c;
__turbopack_context__.k.register(_c, "FaqSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/images/2.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/2.747d7308.webp");}),
"[project]/public/images/2.webp.mjs { IMAGE => \"[project]/public/images/2.webp (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$2$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/images/2.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$2$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 4269,
    height: 2400,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/webp;base64,UklGRg4BAABXRUJQVlA4TAEBAAAvB8AAEM1VICICHgiwCQAAAIAhAA8AAAAgACQAAkACgEAAAEAgAAAAAjgAwAEAAcAPABCAAAUAAMADATkBAAAAOP8rChIRAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACIMET8YjwQYBMAAACA859AAAAAQAAAAABAACgAAAAAQAAEoAQAARBwAHgcCAAIAQgA9DwQkBMAAACA878+AQAAUAAAgAEABAAAAAAYAgAgCgAAAABAAAADAIABAACAIAGKQ1v2O7vOCl+g6PtLHtAPAMUbMdtzmjMZ0bi3O2vtoxQAeHzpXTJjzCb7bfH0da0AADeZVOD+UKSdo73kxUdWEQA="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/images/3.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/3.c25bfefe.webp");}),
"[project]/public/images/3.webp.mjs { IMAGE => \"[project]/public/images/3.webp (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$3$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/images/3.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$3$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 4269,
    height: 2400,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/webp;base64,UklGRhABAABXRUJQVlA4TAQBAAAvB8AAEM1VICICHgiwCQAAAICFQxQBAAAAAQIBEEAAAIAAAAAAAAAAAAABEAAAIAJKBSJCABEAAMADAUFhAAAAOP9LBQQAAAQAAAgAEAIAAAAAABCAgQAACAAIAAAABAAAREXA8HgPBNgEAAAA4PwnEABAAEEAABIAAAAIAAAAAAAAIAAACgCAiB6AOAAAEQACgHcPBOQEAAAA4PyvTwAAADAAABgAAAIAAAAABgEAiAEAAAAABABAAQAoAAAAIEiAQirNyevhv0NPRrU6adBiIh8Aqd+stblD8JSyx6/kit4A+A+t9bH6XcwzKf6o5ahREgBcY25GQ+x+zBrbOxe8tnf6Bg=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/images/4.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/4.6852da2d.webp");}),
"[project]/public/images/4.webp.mjs { IMAGE => \"[project]/public/images/4.webp (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$4$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/images/4.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$4$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 4268,
    height: 2400,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/webp;base64,UklGRsgAAABXRUJQVlA4TLwAAAAvB8AAAM1VICICHgiwCQAAAIBFAAjgAAAAABAAAACAAgAAAAAAAAAAACigAAAAABwK4BCAxw4AAPBACEwgAAAAzv/WCwkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADghwEKywMBOQEAAAA4//MwQABAIAIAAAAAAAAAAAAAAAAAAAAAAIAwAGAAAEAABEB9kQT53/PO5rtl9TxbIsD6jS/WHnvPOcLaQLivVSfzZmqVMxBCHfVf0QIJAQ=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/images/5.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/5.3e9ad3d0.webp");}),
"[project]/public/images/5.webp.mjs { IMAGE => \"[project]/public/images/5.webp (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$5$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/images/5.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$5$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 4269,
    height: 2400,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/webp;base64,UklGRhABAABXRUJQVlA4TAQBAAAvB8AAEM1VICICHgiwCQAAAIAhgAIACEACABAAAQAAAAgAAAAAIEAAAAAASHSAAAGkAiFAAB0AAMADATGBAAAAOP9bSHgBARoKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg4IMiQzQPBNgEAAAA4PwnEBBIAIAAAAAAABAACAJAAJAAAAAAAABAAi9AEAQAEAQEAMYDwTABAAAAOP/9CQAAAAUAAA4AwAEAAACAIwAAogAAAAAAAgBwAAAcAAAACBJABOz+fg92l7EDn7b5rQfhB0A6pwv63M9bLcGo1ps1jaIRAL5Tx9q6prDnoO0nKeYWUwGAJ6o6CPX3tGOmziZOdzWbBQ=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/images/6.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/6.0d1074c5.webp");}),
"[project]/public/images/6.webp.mjs { IMAGE => \"[project]/public/images/6.webp (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$6$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/images/6.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$6$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 4269,
    height: 2400,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/webp;base64,UklGRhABAABXRUJQVlA4TAQBAAAvB8AAEM1VICICHgiwCQAAAIAhAgoAAAAggAgEAgAAABAAAAAAAAAABQABCACEQAjBAQpQQAoAAMADwTABAAAAOP/1AEUAAIEAgQAAAAAAAAAAAAAAAAAAAAAAAAAAIAAgKoQU5zwQYBMAAACA858gACIAhAIAgQAACAACAAAAAAAAAAAEAAAIHQAIBAIgEhAC1D0QkBMAAACA87+eAAAAYAAAUAAABAAAAAAKAgAgAwAAAAAIAIABAGAAAABAKAEK41enZ/g/t9L9ud1z37offgAIe2ZE+gq25RR6it6D1xZFAcCDNU4TrQptot2hmqNKSQCwncgOlpwldM9hR5+nmpzNAQ=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/images/7.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/7.78592f59.webp");}),
"[project]/public/images/7.webp.mjs { IMAGE => \"[project]/public/images/7.webp (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$7$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/images/7.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$7$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 4269,
    height: 2400,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/webp;base64,UklGRhABAABXRUJQVlA4TAQBAAAvB8AAEM1VICICHgiwCQAAAIChAA4AAAARCBAAAgAAABAAAAAAAAAAAAAgCAAI4MIPIAkoQA4AAMADwTABAAAAOP8VJAEXAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABElELS6zwQEBQGAACA8z8lAQAYAgQAAEAFMAAAAAAAAAAAAAAAAAMAAgqAIABAQUAC0M8DwTABAAAAOP+9CwAAAAUAAAUAQAAAAADAIQAAUQAAAAAAAQA4AAAFAAAAhBIgDolFd6tn9rjH93eNr2cDHgCym7O38yRfeg61lXcNiYklAcD4VWYL2gs6Kry6rPDojg4Az6kzwahlT/Xz8MTMzL1fAw=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/images/8.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/8.0cb5e4f7.webp");}),
"[project]/public/images/8.webp.mjs { IMAGE => \"[project]/public/images/8.webp (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$8$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/images/8.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$8$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 4269,
    height: 2400,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/webp;base64,UklGRhABAABXRUJQVlA4TAMBAAAvB8AAEM1VICICHgiwCQAAAIDRQREEABAAQIAAggAAABAAAAAAAAAAAAAAABCIAwAgiEIE0gUAAMADATkBAAAAOP97liUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQICSF1jwQYBMAAACA899F0DlIADgoAAAAAAAAAAAAAAAAAAAAAEABQBwHAAgCAgAC4DwQkBAGAACA878QAAEAAQAAgAAIAgAAIAAJAICEAAAEAAgAACAAAEAAQAOw8AlgiLDp/VjOq150dZVOxhuQALAZPiqP3TRw09SQ9qI4FQwAP0N9+ptjafSptewXM6RsADhKp3rNd58V7p3ZW3HZP/MHAA=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/images/9.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/9.79052e30.webp");}),
"[project]/public/images/9.webp.mjs { IMAGE => \"[project]/public/images/9.webp (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$9$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/images/9.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$9$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 4269,
    height: 2400,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/webp;base64,UklGRg4BAABXRUJQVlA4TAIBAAAvB8AAEM1VICICHggGCAMAAIBFAegBBAAABIAEcAAAwAEIAAAAAAAAAAAIgAAAAASkBIQgwCkAAAAPBO0EAgAA4PzfSjgJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEWOhAke17IBgmAAAAAOe/XBAEQCAQAAAAAAAAAAAAAAAAAAAAAIAAkAMABQAAIABCwrsHAnICAAAAcP73JgAAAAoAACgAQAAAAACAgQAAhAEAAAAABAAUAAAoAAAAECQgiaf3nR7vHi6fzFemankJwgfQaTmUGKvXlkerqaaYomACwOFb+5f6UoYrdU/9MkMOwDZ5Bfzxsf3s5zvXbfi9YQA="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/images/10.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/10.3fc1ef6a.webp");}),
"[project]/public/images/10.webp.mjs { IMAGE => \"[project]/public/images/10.webp (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$10$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/images/10.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$10$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 4269,
    height: 2400,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/webp;base64,UklGRhABAABXRUJQVlA4TAQBAAAvB8AAEM1VICICHgiwCQAAAIBFAQUFAAAABAgCAgAgAAABAAAAAAAAAAABEAAAEOASQEBIFBQAAMADwTABAAAAOP+9RHIAAAAAAAAAAAAAAAAAAAAAAAAgAQAAIAAAAAABeMgh0j0QYBMAAACA858TgAAAARQQAAAAIAAAAAAAAACAAAggEAAIEB4gRAAAJICA8DwQtBMIAACA83/9CgAAIBAAgCAABAAAAABgQAAANAAAAAAgAEAgAEDAAQAAOJAAgYek8O5I90z7R9Y1L1HqZvJ+ABRSfFI+m+lFQ8s5+ghbAfiPr36maDPNOmRL21287gFgQV8VMmntuFVunMnM2O90DQ=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/images/11.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/11.51e22955.webp");}),
"[project]/public/images/11.webp.mjs { IMAGE => \"[project]/public/images/11.webp (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$11$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/images/11.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$11$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 4269,
    height: 2400,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/webp;base64,UklGRhIBAABXRUJQVlA4TAUBAAAvB8AAEM1VICICHgiwCQAAAICJAk4AAAAiAUAAEAAAAEAAAAAAAAAAABEEcIAAAQS5AHCAAAQAAMADQTuBAAAAOP+3zRAhAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACASHcBsfgeCLAJAAAAwPnvVQqoACgEAQQAAAAAAAAAAAAAAAAAAAAAgAIoIAQAgAAQBHQeCNoJBAAAwPm/fgIAAEABAEABABAAAAAA6CAAADIAAAAAgAAAGAAABgAAAIRLgGT1S6k76z07vff7Fo9Lf2HqAUBwy2FNe+k86hjpTF1XEwYAvlj3X5I9kG+yzlYX5YYAgGcyttFHq3mc3UOFdTzHVAIA"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/nvidia-certification-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NvidiaCertificationSection",
    ()=>NvidiaCertificationSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$2$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$2$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/2.webp.mjs { IMAGE => "[project]/public/images/2.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$3$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$3$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/3.webp.mjs { IMAGE => "[project]/public/images/3.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$4$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$4$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/4.webp.mjs { IMAGE => "[project]/public/images/4.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$5$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$5$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/5.webp.mjs { IMAGE => "[project]/public/images/5.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$6$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$6$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/6.webp.mjs { IMAGE => "[project]/public/images/6.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$7$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$7$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/7.webp.mjs { IMAGE => "[project]/public/images/7.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$8$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$8$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/8.webp.mjs { IMAGE => "[project]/public/images/8.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$9$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$9$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/9.webp.mjs { IMAGE => "[project]/public/images/9.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$10$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$10$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/10.webp.mjs { IMAGE => "[project]/public/images/10.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$11$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$11$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/11.webp.mjs { IMAGE => "[project]/public/images/11.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
function NvidiaCertificationSection() {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("infrastructure");
    const infrastructureCerts = [
        {
            name: "AI Infrastructure and Operations",
            level: "Associate",
            image: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$2$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$2$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
        },
        {
            name: "AI Infrastructure",
            level: "Professional",
            image: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$3$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$3$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
        },
        {
            name: "AI Operations",
            level: "Professional",
            image: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$4$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$4$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
        },
        {
            name: "AI Networking",
            level: "Professional",
            image: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$5$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$5$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
        }
    ];
    const developerCerts = [
        {
            name: "Gen AI LLMs",
            level: "Associate",
            image: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$6$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$6$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
        },
        {
            name: "Gen AI Multimodal",
            level: "Associate",
            image: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$7$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$7$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
        },
        {
            name: "Gen AI LLMs",
            level: "Associate",
            image: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$8$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$8$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
        },
        {
            name: "Agentic AI",
            level: "Professional",
            image: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$9$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$9$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
        },
        {
            name: "Accelerated Data Science",
            level: "Professional",
            image: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$10$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$10$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
        },
        {
            name: "OpenUSD Development",
            level: "Professional",
            image: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$11$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$11$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
        }
    ];
    const currentCerts = activeTab === "infrastructure" ? infrastructureCerts : developerCerts;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-16 md:py-24 bg-gradient-to-br center from-blue-50 via-white to-blue-50 relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-10 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"
            }, void 0, false, {
                fileName: "[project]/components/nvidia-certification-section.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-10 right-10 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl"
            }, void 0, false, {
                fileName: "[project]/components/nvidia-certification-section.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl md:text-5xl font-bold mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-800",
                                        children: "CHỨNG CHỈ "
                                    }, void 0, false, {
                                        fileName: "[project]/components/nvidia-certification-section.tsx",
                                        lineNumber: 87,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-emerald-600",
                                        children: "NVIDIA"
                                    }, void 0, false, {
                                        fileName: "[project]/components/nvidia-certification-section.tsx",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/nvidia-certification-section.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 text-base md:text-lg max-w-4xl mx-auto mb-4 leading-relaxed",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        children: "Chứng chỉ"
                                    }, void 0, false, {
                                        fileName: "[project]/components/nvidia-certification-section.tsx",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, this),
                                    " là bằng chứng cụ thể về chuyên môn, năng lực và cam kết học hỏi không ngừng của bạn. Hãy chứng minh kỹ năng của bạn và nâng tầm sự nghiệp bằng cách nhận",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-emerald-600",
                                        children: "chứng chỉ từ NVIDIA"
                                    }, void 0, false, {
                                        fileName: "[project]/components/nvidia-certification-section.tsx",
                                        lineNumber: 94,
                                        columnNumber: 13
                                    }, this),
                                    "."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/nvidia-certification-section.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-700 text-sm md:text-base max-w-3xl mx-auto font-medium",
                                children: [
                                    "Là sự cam kết của ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        children: "chương trình AI57"
                                    }, void 0, false, {
                                        fileName: "[project]/components/nvidia-certification-section.tsx",
                                        lineNumber: 98,
                                        columnNumber: 31
                                    }, this),
                                    " dành cho bạn, một chứng chỉ có tầm ảnh hưởng và đảm bảo vững chắc cho tương lai."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/nvidia-certification-section.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/nvidia-certification-section.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row gap-2 sm:gap-0 max-w-4xl mx-auto mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab("infrastructure"),
                                className: `flex-1 py-4 px-6 font-semibold text-sm md:text-base rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none transition-all duration-300 ${activeTab === "infrastructure" ? "bg-white text-gray-800 shadow-lg" : "bg-blue-600 text-white hover:bg-blue-700"}`,
                                children: "Chứng chỉ dành cho Chuyên gia Hạ tầng"
                            }, void 0, false, {
                                fileName: "[project]/components/nvidia-certification-section.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab("developer"),
                                className: `flex-1 py-4 px-6 font-semibold text-sm md:text-base rounded-b-xl sm:rounded-r-xl sm:rounded-bl-none transition-all duration-300 ${activeTab === "developer" ? "bg-white text-gray-800 shadow-lg" : "bg-blue-600 text-white hover:bg-blue-700"}`,
                                children: "Chứng chỉ dành cho Nhà phát triển"
                            }, void 0, false, {
                                fileName: "[project]/components/nvidia-certification-section.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/nvidia-certification-section.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-6xl mx-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 gap-6 md:gap-8",
                            children: currentCerts.map((cert, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center group animate-fadeInUp",
                                    style: {
                                        animationDelay: `${index * 100}ms`
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative w-full aspect-square mb-3 transform transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2 flex items-center justify-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/nvidia-certification-section.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: cert.image,
                                                    alt: `${cert.name} ${cert.level}`,
                                                    width: 200,
                                                    height: 200,
                                                    className: "w-full h-full object-contain mx-auto"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/nvidia-certification-section.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/nvidia-certification-section.tsx",
                                            lineNumber: 136,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs md:text-sm font-semibold text-gray-700 mb-1",
                                                    children: cert.level
                                                }, void 0, false, {
                                                    fileName: "[project]/components/nvidia-certification-section.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-600",
                                                    children: cert.name
                                                }, void 0, false, {
                                                    fileName: "[project]/components/nvidia-certification-section.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/nvidia-certification-section.tsx",
                                            lineNumber: 146,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/components/nvidia-certification-section.tsx",
                                    lineNumber: 131,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/nvidia-certification-section.tsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/nvidia-certification-section.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mt-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-600",
                            children: [
                                "Được thiết kế và biên soạn bởi ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold text-blue-600",
                                    children: "Hồng Lĩnh Education"
                                }, void 0, false, {
                                    fileName: "[project]/components/nvidia-certification-section.tsx",
                                    lineNumber: 158,
                                    columnNumber: 44
                                }, this),
                                " và",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold text-blue-600",
                                    children: "Đại học Bách Khoa Hà Nội"
                                }, void 0, false, {
                                    fileName: "[project]/components/nvidia-certification-section.tsx",
                                    lineNumber: 159,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/nvidia-certification-section.tsx",
                            lineNumber: 157,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/nvidia-certification-section.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/nvidia-certification-section.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/nvidia-certification-section.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
_s(NvidiaCertificationSection, "Oy/yCa35JnMIPHCvBn8ONW4JwdM=");
_c = NvidiaCertificationSection;
var _c;
__turbopack_context__.k.register(_c, "NvidiaCertificationSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/how-to-become-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HOW_TO_BECOME_DATA",
    ()=>HOW_TO_BECOME_DATA,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
const HOW_TO_BECOME_DATA = [
    {
        title: "Nền tảng Khoa học Máy tính & Toán học",
        subtitle: "Đây là những kỹ năng 'bắt buộc', là móng nhà để xây dựng mọi thứ khác.",
        features: [
            "Lập trình (Programming)",
            "Toán học (Math)",
            "Cấu trúc Dữ liệu & Giải thuật (Data Structures & Algorithms)"
        ],
        imageUrl: "",
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
    `
    },
    {
        title: "Kiến thức Cốt lõi về AI & Machine Learning",
        subtitle: "Đây là phần chuyên môn giúp bạn giải quyết các bài toán cụ thể.",
        features: [
            "Nguyên lý Machine Learning (ML Principles)",
            "Học sâu (Deep Learning)",
            "Các lĩnh vực chuyên sâu (Specializations)"
        ],
        imageUrl: "",
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
    `
    },
    {
        title: "Công cụ, Framework & Kỹ thuật Triển khai (MLOps)",
        subtitle: "Đây là nhóm kỹ năng 'kỹ sư' thực thụ, phân biệt một Kỹ sư AI với một Nhà nghiên cứu AI.",
        features: [
            "Frameworks về Deep Learning",
            "Xử lý Dữ liệu & Phân tích",
            "MLOps (Machine Learning Operations)"
        ],
        imageUrl: "",
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
    `
    },
    {
        title: "Kỹ năng Mềm & Tư duy Kinh doanh",
        subtitle: "Đây là yếu tố giúp bạn thăng tiến và tạo ra giá trị thực sự.",
        features: [
            "Tư duy Giải quyết Vấn đề (Problem-Solving)",
            "Giao tiếp & Kể chuyện bằng Dữ liệu (Communication & Storytelling)"
        ],
        imageUrl: "",
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
    `
    }
];
// Custom hook for outside click detection
const useOutsideClick = (ref, callback)=>{
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useOutsideClick.useEffect": ()=>{
            const handleClickOutside = {
                "useOutsideClick.useEffect.handleClickOutside": (event)=>{
                    if (ref.current && !ref.current.contains(event.target)) {
                        callback();
                    }
                }
            }["useOutsideClick.useEffect.handleClickOutside"];
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "useOutsideClick.useEffect": ()=>{
                    document.removeEventListener("mousedown", handleClickOutside);
                }
            })["useOutsideClick.useEffect"];
        }
    }["useOutsideClick.useEffect"], [
        ref,
        callback
    ]);
};
_s(useOutsideClick, "OD7bBpZva5O2jO+Puf00hKivP7c=");
// Helper Card component that animates in when in view
const Card = ({ section, id, setActive, ...rest })=>{
    _s1();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isInView, setIsInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Card.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "Card.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setIsInView(true);
                    }
                }
            }["Card.useEffect"], {
                threshold: 0.1,
                rootMargin: "-100px 0px"
            });
            if (ref.current) {
                observer.observe(ref.current);
            }
            return ({
                "Card.useEffect": ()=>{
                    if (ref.current) {
                        observer.unobserve(ref.current);
                    }
                }
            })["Card.useEffect"];
        }
    }["Card.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        onClick: ()=>setActive(section),
        className: `relative z-10 flex h-48 w-full flex-col items-start justify-start overflow-hidden rounded-2xl bg-gray-100 sm:h-56 sm:w-full md:h-120 md:w-85 cursor-pointer transition-all duration-600 hover:scale-[1.02] active:scale-[0.98] ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`,
        style: {
            transitionDelay: "100ms"
        },
        ...rest,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/90 via-black/60 to-transparent"
            }, void 0, false, {
                fileName: "[project]/components/how-to-become-section.tsx",
                lineNumber: 246,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-36 p-3 sm:p-4 lg:p-7 flex flex-col justify-end h-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-2 max-w-xs text-pretty text-left font-sans text-lg font-semibold tracking-tight text-white sm:text-xl md:text-2xl lg:text-3xl line-clamp-2",
                        children: section.title
                    }, void 0, false, {
                        fileName: "[project]/components/how-to-become-section.tsx",
                        lineNumber: 248,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-left font-sans text-xs font-medium text-white/90 sm:text-sm md:text-base line-clamp-2",
                        children: section.subtitle
                    }, void 0, false, {
                        fileName: "[project]/components/how-to-become-section.tsx",
                        lineNumber: 251,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/how-to-become-section.tsx",
                lineNumber: 247,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            section.imageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: section.imageUrl,
                alt: section.title,
                fill: true,
                className: "absolute inset-0 z-10 object-cover",
                sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 384px"
            }, void 0, false, {
                fileName: "[project]/components/how-to-become-section.tsx",
                lineNumber: 256,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-10 bg-gradient-to-br from-gray-400 to-gray-600"
            }, void 0, false, {
                fileName: "[project]/components/how-to-become-section.tsx",
                lineNumber: 264,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/how-to-become-section.tsx",
        lineNumber: 235,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(Card, "/12cXKPriHa22IO15l9SziF6xSg=");
_c = Card;
const HowToBecomeSection = ()=>{
    _s2();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showModal, setShowModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    useOutsideClick(ref, {
        "HowToBecomeSection.useOutsideClick": ()=>{
            if (active) {
                setActive(null);
                setShowModal(false);
            }
        }
    }["HowToBecomeSection.useOutsideClick"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HowToBecomeSection.useEffect": ()=>{
            function onKeyDown(event) {
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
            return ({
                "HowToBecomeSection.useEffect": ()=>window.removeEventListener("keydown", onKeyDown)
            })["HowToBecomeSection.useEffect"];
        }
    }["HowToBecomeSection.useEffect"], [
        active
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto top-2.5 space-y-6 sm:space-y-8 px-4 sm:px-6 lg:px-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8 sm:mb-12 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mb-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight text-gray-900",
                        children: [
                            "Làm thế nào để trở thành",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-primary",
                                children: "Kỹ sư AI toàn năng?"
                            }, void 0, false, {
                                fileName: "[project]/components/how-to-become-section.tsx",
                                lineNumber: 308,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/how-to-become-section.tsx",
                        lineNumber: 306,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mx-auto max-w-3xl text-sm sm:text-base leading-relaxed text-gray-600 px-2",
                        children: 'Kỹ sư AI là một vai trò "hybrid" xuất sắc giữa Lập trình viên, Nhà khoa học Dữ liệu và Kỹ sư DevOps.'
                    }, void 0, false, {
                        fileName: "[project]/components/how-to-become-section.tsx",
                        lineNumber: 310,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/how-to-become-section.tsx",
                lineNumber: 305,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    showModal && active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `fixed inset-0 z-10 h-full w-full bg-black/60 sm:bg-black/20 transition-opacity duration-300 ${showModal ? "opacity-100" : "opacity-0"}`,
                                onClick: ()=>{
                                    setActive(null);
                                    setShowModal(false);
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/how-to-become-section.tsx",
                                lineNumber: 319,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "absolute right-3 top-3 sm:right-2 sm:top-2 z-[110] flex h-8 w-8 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-white/90 sm:bg-white shadow-lg sm:shadow-none transition-opacity duration-200 hover:opacity-80",
                                        onClick: ()=>{
                                            setActive(null);
                                            setShowModal(false);
                                        },
                                        "aria-label": "Đóng",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "h-5 w-5 sm:h-4 sm:w-4 text-gray-900"
                                        }, void 0, false, {
                                            fileName: "[project]/components/how-to-become-section.tsx",
                                            lineNumber: 337,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/how-to-become-section.tsx",
                                        lineNumber: 329,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: ref,
                                        className: "hide-scrollbar relative flex h-[90vh] sm:h-full sm:min-h-[300px] w-full sm:max-w-[600px] flex-col overflow-auto bg-white dark:bg-neutral-900 sm:rounded-3xl sm:max-h-[90%] transition-all duration-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative rounded-t-lg sm:rounded-t-3xl p-4 sm:p-6 min-h-[180px] sm:min-h-[200px]",
                                                children: [
                                                    active.imageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: active.imageUrl,
                                                        alt: active.title,
                                                        fill: true,
                                                        className: "absolute inset-0 z-0 object-cover rounded-t-lg sm:rounded-t-3xl",
                                                        sizes: "(max-width: 640px) 100vw, 600px"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/how-to-become-section.tsx",
                                                        lineNumber: 345,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 z-0 bg-gradient-to-br from-gray-400 to-gray-600 rounded-t-lg sm:rounded-t-3xl"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/how-to-become-section.tsx",
                                                        lineNumber: 353,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 z-10 bg-black/60 sm:bg-black/50 rounded-t-lg sm:rounded-t-3xl"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/how-to-become-section.tsx",
                                                        lineNumber: 355,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative z-20",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "text-xl sm:text-2xl font-bold text-white mb-2",
                                                                children: active.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/how-to-become-section.tsx",
                                                                lineNumber: 357,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm sm:text-base md:text-lg text-white/90",
                                                                children: active.subtitle
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/how-to-become-section.tsx",
                                                                lineNumber: 360,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/how-to-become-section.tsx",
                                                        lineNumber: 356,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/how-to-become-section.tsx",
                                                lineNumber: 343,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "prose prose-sm sm:prose-base prose-neutral max-w-none p-4 sm:p-6 prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700 prose-li:text-gray-700",
                                                dangerouslySetInnerHTML: {
                                                    __html: active.htmlContent
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/how-to-become-section.tsx",
                                                lineNumber: 365,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/how-to-become-section.tsx",
                                        lineNumber: 339,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/how-to-become-section.tsx",
                                lineNumber: 328,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-9xl mx-auto",
                        children: HOW_TO_BECOME_DATA.map((section, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                section: section,
                                id: id,
                                setActive: setActive
                            }, `card-${section.title}-${id}-${index}`, false, {
                                fileName: "[project]/components/how-to-become-section.tsx",
                                lineNumber: 375,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/components/how-to-become-section.tsx",
                        lineNumber: 373,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/how-to-become-section.tsx",
                lineNumber: 316,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/how-to-become-section.tsx",
        lineNumber: 304,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s2(HowToBecomeSection, "bRzkSeXewb0hw8/1ZDwpF1amJQA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"],
        useOutsideClick
    ];
});
_c1 = HowToBecomeSection;
const __TURBOPACK__default__export__ = HowToBecomeSection;
var _c, _c1;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "HowToBecomeSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_11f948d1._.js.map