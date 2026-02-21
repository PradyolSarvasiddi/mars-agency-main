import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone } from 'lucide-react';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

    // Auto-dismiss toast after 4 seconds
    useEffect(() => {
        if (toast) {
            const timer = setTimeout(() => setToast(null), 4000);
            return () => clearTimeout(timer);
        }
    }, [toast]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Phone validation: at least 8 digits
        const digitsOnly = phone.replace(/\D/g, '');
        if (digitsOnly.length < 8) {
            setToast({ message: 'Phone number must be at least 8 digits.', type: 'error' });
            return;
        }

        setIsSubmitting(true);

        try {
            const res = await fetch('/api/call', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, phone }),
            });

            if (!res.ok) throw new Error('API error');

            setToast({ message: '🎉 You will receive a call shortly!', type: 'success' });
            setName('');
            setPhone('');
            // Close modal after a brief pause so user sees the toast
            setTimeout(() => onClose(), 1500);
        } catch {
            setToast({ message: 'Something went wrong. Try again.', type: 'error' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.25, ease: 'easeOut' }}
                            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Top accent bar */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-purple to-accent-blue"></div>

                            {/* Close button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors duration-150"
                                aria-label="Close modal"
                            >
                                <X className="w-5 h-5 text-gray-500" />
                            </button>

                            {/* Content */}
                            <div className="mb-6 text-center">
                                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-accent-purple to-accent-blue rounded-full flex items-center justify-center shadow-glow">
                                    <Phone className="w-7 h-7 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-primary mb-2">Experience Live AI Call Demo</h2>
                                <p className="text-secondary text-sm">Enter your details and our AI agent will call you instantly.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="modal-name" className="block text-sm font-semibold text-primary mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="modal-name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-purple focus:border-transparent transition-all duration-200 bg-gray-50/50 hover:bg-white"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="modal-phone" className="block text-sm font-semibold text-primary mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="modal-phone"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        required
                                        className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-purple focus:border-transparent transition-all duration-200 bg-gray-50/50 hover:bg-white"
                                        placeholder="+91 9876543210"
                                    />
                                    <p className="mt-1 text-xs text-gray-500">Must be at least 8 digits</p>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-accent-purple to-accent-blue text-white py-3.5 rounded-xl font-semibold transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed mt-4 hover:shadow-glow hover:scale-[1.02] active:scale-[0.98]"
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Calling…
                                        </span>
                                    ) : 'Try Live Demo'}
                                </button>
                            </form>

                            {/* Toast notification */}
                            <AnimatePresence>
                                {toast && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.3 }}
                                        className={`mt-4 px-4 py-3 rounded-xl text-sm font-medium text-center ${toast.type === 'success'
                                            ? 'bg-green-50 text-green-700 border border-green-200'
                                            : 'bg-red-50 text-red-700 border border-red-200'
                                            }`}
                                    >
                                        {toast.message}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};
