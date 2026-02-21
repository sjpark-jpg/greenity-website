"use client";

import React, { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
    const [formState, setFormState] = useState<FormState>("idle");

    const validate = () => {
        const newErrors: typeof errors = {};
        if (!name.trim()) newErrors.name = "이름을 입력해주세요.";
        if (!email.trim()) {
            newErrors.email = "이메일을 입력해주세요.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = "올바른 이메일 형식을 입력해주세요.";
        }
        if (!message.trim()) newErrors.message = "메시지를 입력해주세요.";
        return newErrors;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        setErrors({});
        setFormState("submitting");

        try {
            // TODO: Formspree 폼 ID를 실제 ID로 교체하세요.
            // https://formspree.io 에서 무료 계정 생성 후 폼 ID 발급
            const FORMSPREE_ID = "YOUR_FORM_ID";
            const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify({ name, email, message }),
            });

            if (res.ok) {
                setFormState("success");
                setName("");
                setEmail("");
                setMessage("");
            } else {
                setFormState("error");
            }
        } catch {
            setFormState("error");
        }
    };

    return (
        <div className="pt-32 pb-24">
            <div className="container mx-auto px-6">
                <header className="mb-24">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-greenity mb-4 block">Contact Us</span>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Get in Touch.</h1>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                    <div className="space-y-12">
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">General Inquiries</h3>
                            <p className="text-2xl font-medium tracking-tight">sales@greenitycorp.kr</p>
                        </div>
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Customer Support</h3>
                            <p className="text-2xl font-medium tracking-tight">1877-3427</p>
                        </div>
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Headquarters</h3>
                            <p className="text-xl text-gray-500 leading-relaxed font-light">
                                Rm 28, 2F, 418 Sunhwagung-ro,<br />
                                Namyangju-si, Gyeonggi-do, Republic of Korea
                            </p>
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
                        {formState === "success" ? (
                            <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
                                <div className="w-16 h-16 rounded-full bg-greenity/10 flex items-center justify-center mb-2">
                                    <svg className="w-8 h-8 text-greenity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-xl font-bold tracking-tight">메시지가 전송되었습니다.</p>
                                <p className="text-sm text-gray-400">빠른 시일 내에 답변 드리겠습니다.</p>
                                <button
                                    onClick={() => setFormState("idle")}
                                    className="mt-4 text-xs font-bold uppercase tracking-widest text-greenity hover:underline"
                                >
                                    새 메시지 보내기
                                </button>
                            </div>
                        ) : (
                            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2">Name</label>
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className={`w-full bg-white border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-greenity/20 transition-all ${errors.name ? "border-red-300" : "border-gray-100"}`}
                                            placeholder="Your Name"
                                        />
                                        {errors.name && <p className="text-red-400 text-[10px] mt-1">{errors.name}</p>}
                                    </div>
                                    <div>
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2">Email</label>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className={`w-full bg-white border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-greenity/20 transition-all ${errors.email ? "border-red-300" : "border-gray-100"}`}
                                            placeholder="email@example.com"
                                        />
                                        {errors.email && <p className="text-red-400 text-[10px] mt-1">{errors.email}</p>}
                                    </div>
                                </div>
                                <div>
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2">Message</label>
                                    <textarea
                                        rows={6}
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        className={`w-full bg-white border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-greenity/20 transition-all resize-none ${errors.message ? "border-red-300" : "border-gray-100"}`}
                                        placeholder="How can we help you?"
                                    />
                                    {errors.message && <p className="text-red-400 text-[10px] mt-1">{errors.message}</p>}
                                </div>
                                {formState === "error" && (
                                    <p className="text-red-400 text-xs text-center">
                                        전송 중 오류가 발생했습니다. 다시 시도하거나 이메일로 직접 문의해주세요.
                                    </p>
                                )}
                                <button
                                    type="submit"
                                    disabled={formState === "submitting"}
                                    className="w-full bg-foreground text-white rounded-full py-4 font-bold uppercase tracking-widest text-xs hover:bg-greenity transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {formState === "submitting" ? "Sending..." : "Send Message"}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
