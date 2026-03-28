import React from 'react';
import { GlassCard } from './GlassCard';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Build Together</h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss modern backend architecture?
            My inbox is always open.
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
                      <a href="mailto:contact@vinayaka.dev" className="text-white hover:text-neutral-300 transition-colors text-lg font-medium">
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
                  "The best way to predict the future is to invent it."
                </p>
              </div>
            </GlassCard>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <GlassCard>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-mono text-neutral-300">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all placeholder:text-neutral-600"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-mono text-neutral-300">Email</label>
                    <input
                      type="email"
                      id="email"
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
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all placeholder:text-neutral-600"
                    placeholder="Project Opportunity"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-mono text-neutral-300">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all placeholder:text-neutral-600 resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-white rounded-lg text-black font-bold text-lg flex items-center justify-center space-x-2 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all transform hover:-translate-y-1"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </GlassCard>
          </div>

        </div>
      </div>
    </section>
  );
};