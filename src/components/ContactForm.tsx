// ✅ Responsive ContactForm.tsx (Logic unchanged)

import React, { useState } from 'react';
import { CheckCircle, User, Mail, Phone, MessageSquare } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

interface FormData {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

const ContactForm = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const [errors, setErrors] = useState<Partial<FormData>>({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateForm = (): boolean => {
        const newErrors: Partial<FormData> = {};

        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
            newErrors.phone = 'Phone number must be 10 digits';
        }
        if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        if (errors[name as keyof FormData]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    const resetForm = () => {
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setErrors({});
        setIsSubmitted(false);
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 flex flex-col">
                <Header />
                <div className="flex-grow flex items-center justify-center px-4 py-12">
                    <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-6 sm:p-8 text-center">
                        <CheckCircle className="w-16 h-16 sm:w-20 sm:h-20 text-green-500 mx-auto mb-4" />
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Congratulations!</h2>
                        <p className="text-gray-600 text-base sm:text-lg">Your message has been sent successfully!</p>
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-6 mb-6">
                            <p className="text-green-800 text-sm">
                                Thank you for reaching out. We'll respond within 24 hours.
                            </p>
                        </div>
                        <button
                            onClick={resetForm}
                            className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                        >
                            Send Another Message
                        </button>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 flex flex-col">
            <Header />
            <div className="flex-grow py-8 sm:py-12 px-4 sm:px-6 md:px-8">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-10 sm:mb-12">
                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">Get In Touch</h1>
                        <p className="text-base sm:text-xl text-gray-600">
                            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                        </p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                    <User className="inline w-4 h-4 mr-1" />
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                                    placeholder="Enter your full name"
                                    aria-label="Full name"
                                />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                    <Mail className="inline w-4 h-4 mr-1" />
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                                    placeholder="Enter your email"
                                    aria-label="Email"
                                />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                            </div>

                            {/* Phone */}
                            <div>
                                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                                    <Phone className="inline w-4 h-4 mr-1" />
                                    Phone Number *
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 ${errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                                    placeholder="Enter your phone number"
                                    aria-label="Phone"
                                />
                                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                            </div>

                            {/* Subject */}
                            <div>
                                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Subject *
                                </label>
                                <select
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 ${errors.subject ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                                    aria-label="Subject"
                                >
                                    <option value="" disabled hidden>Select a subject</option>
                                    <option value="general">General Inquiry</option>
                                    <option value="game-guide">Game Guide Request</option>
                                    <option value="review">Game Review</option>
                                    <option value="tips">Tips & Tricks</option>
                                    <option value="technical">Technical Support</option>
                                    <option value="partnership">Partnership</option>
                                    <option value="other">Other</option>
                                </select>
                                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                    <MessageSquare className="inline w-4 h-4 mr-1" />
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className={`w-full px-4 py-3 border rounded-lg resize-none focus:ring-2 focus:ring-orange-500 ${errors.message ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                                    placeholder="Enter your message"
                                    aria-label="Message"
                                />
                                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                                <p className="text-gray-500 text-xs mt-1">Minimum 10 characters required</p>
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 ${isSubmitting
                                    ? 'bg-gray-400 cursor-not-allowed'
                                    : 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 shadow-lg hover:shadow-xl'
                                    }`}
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center justify-center">
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                        Sending Message...
                                    </div>
                                ) : (
                                    'Send Message'
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ContactForm;
