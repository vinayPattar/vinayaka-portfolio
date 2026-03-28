import React from 'react';
import { GlassCard } from './GlassCard';
import { BlogPost } from '../types';
import { ArrowRight, BookOpen, Hash } from 'lucide-react';

const blogs: BlogPost[] = [
  {
    title: "Deploying a Dockerized Application to AWS Using ECR, EC2, and Load Balancer (Beginner-Friendly Guide)",
    excerpt: "How to deploy  Dockerized Application to AWS Using ECR, EC2, and Load Balancer.",
    date: "Jan 4, 2026",
    readTime: "3 min read",
    category: "Deployment",
    imageUrl: "public/image.png",
    link: "https://medium.com/@vinaypattar383/deploying-a-dockerized-application-to-aws-using-ecr-ec2-and-load-balancer-beginner-friendly-dab8d7e4fc0c"
  },
  // {
  //   title: "Secure Your Spring Boot APIs with OAuth2",
  //   excerpt: "A step-by-step guide to implementing robust security in microservices using Spring Security, JWT, and OAuth2 standards.",
  //   date: "Oct 28, 2024",
  //   readTime: "8 min read",
  //   category: "Security",
  //   imageUrl: "https://images.unsplash.com/photo-1614064641938-3e82161932cd?auto=format&fit=crop&q=80&w=1000",
  //   link: "#"
  // },
  // {
  //   title: "Optimizing React Native Performance",
  //   excerpt: "Common pitfalls in React Native development and how to avoid frame drops using Hermes, Memoization, and better list handling.",
  //   date: "Sep 15, 2024",
  //   readTime: "5 min read",
  //   category: "Mobile",
  //   imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1000",
  //   link: "#"
  // }
];

export const Blogs: React.FC = () => {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto relative">
      {/* Decorative background blur for this section */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-neutral-400/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Technical Insights</h2>
          <p className="text-neutral-400 text-lg">Thoughts on architecture, security, and code.</p>
        </div>
        <a href="#" className="flex items-center space-x-2 text-neutral-300 hover:text-white transition-colors group">
          <span className="font-mono">View All Articles</span>
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <GlassCard key={index} hoverEffect={true} noPadding={true} className="flex flex-col h-full group cursor-pointer">
            {/* Image Header */}
            <div className="h-48 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 z-10"></div>
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 z-20">
                <span className="px-3 py-1 rounded-md text-xs font-bold bg-white/10 backdrop-blur-md text-white border border-white/20 shadow-lg">
                  {blog.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center text-xs text-neutral-400 font-mono mb-3 space-x-3">
                <span>{blog.date}</span>
                <span className="w-1 h-1 rounded-full bg-neutral-600"></span>
                <span className="flex items-center"><BookOpen size={10} className="mr-1" /> {blog.readTime}</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 leading-tight transition-colors">
                {blog.title}
              </h3>

              <p className="text-neutral-400 text-sm leading-relaxed mb-6 line-clamp-3">
                {blog.excerpt}
              </p>

              <div className="mt-auto pt-4 border-t border-white/5 flex items-center text-sm font-semibold text-neutral-300 group-hover:text-white transition-colors">
                Read Article <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};