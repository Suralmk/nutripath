"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Services = () => (
  <section id="services" className="py-24 px-6 bg-white rounded-[3rem] mx-4 overflow-hidden">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex gap-2 mb-6">
          {['Precision', 'Science', 'Care'].map(t => (
            <span key={t} className="px-3 py-1 bg-accent rounded-full text-[10px] font-bold uppercase tracking-wider">{t}</span>
          ))}
        </div>
        <h2 className="text-4xl md:text-6xl font-semibold mb-8 leading-tight">
          Comprehensive <br /> Health Diagnostics
        </h2>
        <p className="text-gray-500 mb-10 max-w-md">
          Our diagnostic tools go beyond standard blood work to provide a complete picture of your metabolic and nutritional health.
        </p>
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-primary" />
          <div className="w-2 h-2 rounded-full bg-accent" />
          <div className="w-2 h-2 rounded-full bg-accent" />
          <div className="w-2 h-2 rounded-full bg-accent" />
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="aspect-square rounded-[2rem] overflow-hidden">
          <img 
            src="/hero-bg.jpg" 
            alt="Lab Testing" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute -right-8 -bottom-8 w-48 h-48 rounded-3xl overflow-hidden border-8 border-white hidden md:block">
          <img 
            src="/cta-bg.jpg" 
            alt="Consultation" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute top-1/2 -right-4 -translate-y-1/2 flex flex-col gap-2">
          <button className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

