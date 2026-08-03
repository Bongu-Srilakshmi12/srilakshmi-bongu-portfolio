'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, X } from 'lucide-react';

const GithubIcon = ({ size = 16, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ size = 16, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const socialLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'srilakshmigoud0412@gmail.com',
    href: 'mailto:srilakshmigoud0412@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 8106436485',
    href: 'tel:+918106436485',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Hyderabad, India',
    href: 'https://maps.google.com/?q=Hyderabad,India',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'linkedin.com/in/sri-lakshmi-bongu-981962291',
    href: 'https://www.linkedin.com/in/sri-lakshmi-bongu-981962291/',
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'github.com/Bongu-Srilakshmi12',
    href: 'https://github.com/Bongu-Srilakshmi12',
  },
];

type FormStatus = 'idle' | 'sending' | 'success' | 'error';
type Toast = { id: string; message: string; type: 'error' | 'success' | 'info' };

const Toast = ({ toast, onClose }: { toast: Toast; onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: 20, scale: 0.95 }}
    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    className={`flex items-center gap-3 px-5 py-4 rounded-xl text-sm font-semibold backdrop-blur-md ${
      toast.type === 'error'
        ? 'bg-red-500/30 border border-red-400/50 text-red-100 shadow-lg shadow-red-500/20'
        : toast.type === 'success'
          ? 'bg-green-500/30 border border-green-400/50 text-green-100 shadow-lg shadow-green-500/20'
          : 'bg-blue-500/30 border border-blue-400/50 text-blue-100 shadow-lg shadow-blue-500/20'
    }`}
  >
    {toast.type === 'error' && <AlertCircle size={18} className="flex-shrink-0" />}
    {toast.type === 'success' && <CheckCircle size={18} className="flex-shrink-0" />}
    <span className="flex-1">{toast.message}</span>
    <button
      onClick={onClose}
      className="flex-shrink-0 hover:opacity-70 transition-opacity"
    >
      <X size={16} />
    </button>
  </motion.div>
);

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const [status, setStatus] = useState<FormStatus>('idle');
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formDisabled, setFormDisabled] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  const showToast = (message: string, type: 'error' | 'success' | 'info' = 'info') => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const validateField = (name: string, value: string): string => {
    if (!value.trim()) {
      return `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    }

    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return 'Enter a valid email address';
      }
    }

    if (name === 'name' && value.trim().length < 2) {
      return 'Name must be at least 2 characters';
    }

    return '';
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));

    // if (error) {
    //   showToast(error, 'error');
    // }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof typeof errors]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && e.ctrlKey === false && (e.target as HTMLElement).tagName !== 'TEXTAREA') {
      e.preventDefault();
      const currentField = e.currentTarget.name;
      const currentValue = formData[currentField as keyof typeof formData];

      // Only move to next field if current field is valid
      const error = validateField(currentField, currentValue);
      if (error) {
        setErrors((prev) => ({ ...prev, [currentField]: error }));
        // showToast(error, 'error');
        return;
      }

      if (currentField === 'name') {
        emailRef.current?.focus();
      } else if (currentField === 'email') {
        messageRef.current?.focus();
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate fields one by one - stop at first error
    const nameError = validateField('name', formData.name);
    if (nameError) {
      setErrors({ name: nameError, email: '', message: '' });
      nameRef.current?.focus();
      return;
    }

    const emailError = validateField('email', formData.email);
    if (emailError) {
      setErrors({ name: '', email: emailError, message: '' });
      emailRef.current?.focus();
      return;
    }

    const messageError = validateField('message', formData.message);
    if (messageError) {
      setErrors({ name: '', email: '', message: messageError });
      messageRef.current?.focus();
      return;
    }

    // All fields valid, proceed with submission
    setErrors({ name: '', email: '', message: '' });

    setStatus('sending');
    setFormDisabled(true);

    try {
      // Trim all fields before sending
      const trimmedData = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
      };

      const response = await fetch('/api/telegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(trimmedData),
      });

      if (!response.ok) throw new Error('Failed to send message');

      setStatus('success');
      // showToast('Message sent successfully!','success');
      setShowSuccessModal(true);

      setFormData({ name: '', email: '', message: '' });
      setErrors({ name: '', email: '', message: '' });
      setFormDisabled(false);
    } catch (error) {
      setStatus('error');
      setFormDisabled(false);
      // showToast(
      //   'Failed to send message. Please try again or email me directly.',
      //   'error'
      // );
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="relative z-10 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Toast Notifications - Bottom Right for better visibility */}
        <div className="fixed bottom-6 right-6 z-[9999] space-y-3 pointer-events-none max-w-sm">
          <AnimatePresence>
            {toasts.map((toast) => (
              <div key={toast.id} className="pointer-events-auto">
                <Toast
                  toast={toast}
                  onClose={() => setToasts((prev) => prev.filter((t) => t.id !== toast.id))}
                />
              </div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <span className="section-label block mb-3">06 / Contact</span>
          <h2 className="text-section-title text-foreground">
            Let&apos;s build something{' '}
            <span className="gradient-text">together.</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg">
            Open to full-time, contract, and freelance opportunities. Drop me a message and I&apos;ll respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-4"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                title={`Contact via ${link.label}: ${link.value}`}
                className="flex items-center gap-4 glass-card rounded-xl p-4 hover:border-primary/30 transition-all duration-300 group"
                style={{ borderColor: 'rgba(0, 212, 255, 0.08)' }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <link.icon size={16} className="text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-xs font-mono uppercase tracking-wider">{link.label}</p>
                  <p className="text-foreground text-sm font-medium group-hover:text-primary transition-colors">{link.value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <form ref={formRef} onSubmit={handleSubmit} noValidate className="glass-card rounded-2xl p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                {/* Name Field */}
                <div>
                  <label className="block text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">
                    Name {errors.name && <span className="text-red-400">*</span>}
                  </label>
                  <input
                    ref={nameRef}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onKeyDown={handleKeyDown}
                    disabled={formDisabled}
                    placeholder="John Doe"
                    className={`input-field w-full px-4 py-3 rounded-xl text-sm transition-all ${
                      errors.name ? 'border-red-500/50 focus:border-red-500' : ''
                    } disabled:opacity-50 disabled:cursor-not-allowed`}
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">
                    Email {errors.email && <span className="text-red-400">*</span>}
                  </label>
                  <input
                    ref={emailRef}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onKeyDown={handleKeyDown}
                    disabled={formDisabled}
                    placeholder="john@company.com"
                    className={`input-field w-full px-4 py-3 rounded-xl text-sm transition-all ${
                      errors.email ? 'border-red-500/50 focus:border-red-500' : ''
                    } disabled:opacity-50 disabled:cursor-not-allowed`}
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">
                  Message {errors.message && <span className="text-red-400">*</span>}
                </label>
                <textarea
                  ref={messageRef}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={formDisabled}
                  rows={5}
                  placeholder="Hi! I'd love to discuss a potential collaboration or project opportunity..."
                  className={`input-field w-full px-4 py-3 rounded-xl text-sm resize-none transition-all ${
                    errors.message ? 'border-red-500/50 focus:border-red-500' : ''
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
                />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'sending' || formDisabled}
                className="btn-primary w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm uppercase tracking-wider font-bold disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {status === 'sending' ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Success Modal - Only closes on button click */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-[9998] flex items-center justify-center p-4"
            onClick={() => setShowSuccessModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 max-w-md w-full border border-cyan-500/20 backdrop-blur-xl text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
                className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/40"
              >
                <CheckCircle size={32} className="text-green-400" />
              </motion.div>

              <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
              <p className="text-slate-300 mb-6">
                Thank you for reaching out! I&apos;ve received your message and will get back to you within 24 hours.
              </p>

              <button
                onClick={() => {
                  setShowSuccessModal(false);
                  setStatus('idle');
                }}
                className="btn-primary w-full px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-wider"
              >
                Okay, Got it!
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}