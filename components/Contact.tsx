import React, { useState } from 'react';
import { GlassCard } from './GlassCard';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import { supabase } from '../supabase';
import toast, { Toaster } from 'react-hot-toast';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    const toastId = toast.loading('Sending your message...');

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([formData]);

      if (error) throw error;

      toast.success("Message sent successfully! I'll get back to you soon.", { id: toastId });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error: any) {
      console.error('Error sending message:', error);
      toast.error(error.message || 'Failed to send message. Please try again later.', { id: toastId });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      <Toaster position="bottom-right" toastOptions={{ style: { background: '#262626', color: '#fff', border: '1px solid #404040' } }} />
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Turning Ideas into Scalable Digital Products</h2>
          <p className="text-lg text-neutral-400 max-w-4xl mx-auto">
            I work across the entire stack — frontend, backend, cloud, and analytics — to build systems that are not just functional, but measurable and growth-ready. From development to SEO and Ad integrations, I help bring products to life with real-world impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <GlassCard className="h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-white/10 text-white">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-400 font-mono mb-1">Email Me</p>
                      <a href="mailto:vinaypattar383@gmail.com" className="text-white hover:text-neutral-300 transition-colors text-lg font-medium">
                        vinaypattar383@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-white/10 text-white">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-400 font-mono mb-1">Location</p>
                      <p className="text-white text-lg font-medium">
                        Bengaluru, India
                      </p>
                      <span className="inline-block mt-2 px-2 py-0.5 rounded text-xs bg-white/10 text-neutral-300 border border-white/20">
                        Open to Relocate
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-neutral-400 text-sm italic">
                  "Turning complex ideas into elegant, scalable software solutions."
                </p>
              </div>
            </GlassCard>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <GlassCard>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-mono text-neutral-300">Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all placeholder:text-neutral-600"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-mono text-neutral-300">Email</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all placeholder:text-neutral-600"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-mono text-neutral-300">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all placeholder:text-neutral-600"
                    placeholder="Project Opportunity"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-mono text-neutral-300">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all placeholder:text-neutral-600 resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-white rounded-lg text-black font-bold text-lg flex items-center justify-center space-x-2 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:-translate-y-0"
                >
                  <Send size={20} className={isSubmitting ? "animate-pulse" : ""} />
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                </button>
              </form>
            </GlassCard>
          </div>

        </div>
      </div>
    </section>
  );
};