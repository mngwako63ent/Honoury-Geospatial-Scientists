/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, animate, useInView } from 'motion/react';
import { 
  Map, 
  Layers, 
  Activity, 
  Droplets, 
  Cpu, 
  Globe, 
  Shield, 
  Database, 
  Award, 
  Sparkles, 
  ChevronRight,
  TrendingUp,
  Workflow
} from 'lucide-react';
import InteractiveSatelliteVane from './InteractiveSatelliteVane';
import { PageId } from '../types';

interface HomeViewProps {
  setCurrentPage: (page: PageId) => void;
  onOpenConsultation: () => void;
}

// Interactive premium counter that animates once when scrolling into view
function CountingLabel({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(countRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, target, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1], // smooth custom typographic easeOut
      onUpdate: (latest) => {
        setVal(Math.floor(latest));
      },
    });

    return () => controls.stop();
  }, [target, isInView]);

  return (
    <span ref={countRef} className="font-sans font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
      {val}{suffix}
    </span>
  );
}

export default function HomeView({ setCurrentPage, onOpenConsultation }: HomeViewProps) {
  return (
    <div className="space-y-16 animate-fade-in">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Decorative ambient ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-white/5 filter blur-3xl pointer-events-none z-0" />
        
        <div className="relative z-10 max-w-5xl mx-auto space-y-8">
          
          {/* SANS compliance badge */}
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full liquid-glass border border-white/10 mx-auto">
            <Globe className="h-3.5 w-3.5 text-white/95 animate-pulse" />
            <span className="text-[10px] font-mono tracking-widest text-white/80 uppercase">
              Honoury Geospatial Scientists
            </span>
          </div>

          {/* Epic Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-medium tracking-tight text-white leading-[1.06] max-w-4xl mx-auto">
            Transforming Satellite Data Into <em className="font-serif italic font-normal text-white/90">Actionable Intelligence</em>
          </h1>

          {/* Supporting Statement */}
          <p className="text-sm sm:text-base lg:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed font-sans">
            Leveraging Big Geospatial Data, Cloud Computing, GIS Analytics, and Machine Learning to deliver high-impact environmental and water resource solutions across Africa.
          </p>

          {/* Call to actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white text-neutral-950 font-bold text-xs tracking-wider uppercase hover:scale-105 active:scale-95 transition-all shadow-xl cursor-pointer"
            >
              Request Consultation
            </button>
            
            <button
              onClick={() => setCurrentPage('services')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full liquid-glass border border-white/20 hover:border-white/50 text-white font-mono text-xs tracking-wider uppercase hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              Explore Services
            </button>
          </div>

        </div>

      </section>

      {/* 2. TRUSTED EXPERTISE SECTION (with animated counters) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          className="liquid-glass border border-white/10 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Subtle decoration background */}
          <div className="absolute top-0 right-0 w-44 h-44 bg-white/2 rounded-full blur-2xl pointer-events-none" />

          <div className="max-w-3xl mx-auto space-y-4 mb-10">
            <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase block">MEASURED METRICS</span>
            <h2 className="text-xl sm:text-3xl font-bold text-white tracking-tight">Consistently Delivering High-Impact Research</h2>
            <p className="text-xs text-white/50 leading-relaxed">
              
            </p>
          </div>

          {/* Grid of counter statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/5">
            
            <motion.div 
              className="pt-4 md:pt-0 flex flex-col items-center justify-center space-y-2"
              initial={{ opacity: 0, scale: 0.93 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <CountingLabel target={5} suffix="+" />
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-white/60">
                Years of Experience
              </span>
            </motion.div>

            <motion.div 
              className="pt-4 md:pt-0 flex flex-col items-center justify-center space-y-2"
              initial={{ opacity: 0, scale: 0.93 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <CountingLabel target={50} suffix="+" />
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-white/60">
                Research Projects Completed
              </span>
            </motion.div>

            <motion.div 
              className="pt-4 md:pt-0 flex flex-col items-center justify-center space-y-2"
              initial={{ opacity: 0, scale: 0.93 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <CountingLabel target={50} suffix="+" />
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-white/60">
                Environmental Studies Supported
              </span>
            </motion.div>

            <motion.div 
              className="pt-4 md:pt-0 flex flex-col items-center justify-center space-y-2"
              initial={{ opacity: 0, scale: 0.93 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <CountingLabel target={15} suffix="+" />
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-white/60">
                Academic Collaborations
              </span>
            </motion.div>

          </div>

        </motion.div>

      </section>

      {/* 3. RADAR SCANNER DECK (Interactive visual tool) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-white/10 pb-3 mb-6">
          <h2 className="text-xl font-bold tracking-tight text-white uppercase text-left font-sans">
            Active Satellite Radar Trackers
          </h2>
          <p className="text-xxs text-white/50 tracking-wider">
            VANE LEVEL APERTURE FEEDBACK SIGNAL COMPILATION ACROSS EARTH CORRIDORS
          </p>
        </div>

        <div className="liquid-glass-strong rounded-3xl p-4 sm:p-6 lg:p-8">
          <InteractiveSatelliteVane />
        </div>
      </section>

      {/* 4. WHAT WE DO (Feature Cards with premium hover animations) */}
      <section id="what-we-do-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="text-left space-y-2 max-w-xl">
          <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase block">CAPABILITY MATRIX</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight uppercase">What We Do</h2>
          <p className="text-xs text-white/60 leading-relaxed">
            HGS provides custom geospatial products, professional flowcharts, and high-quality cartographic maps for research and institutional use.
          </p>
        </div>

        {/* Feature grid with custom iconography & hover animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* GIS Mapping */}
          <div className="group liquid-glass border border-white/5 rounded-3xl p-6 sm:p-8 space-y-5 hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
            <div className="h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center text-white border border-white/10 group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all">
              <Map className="h-5 w-5" />
            </div>
            <div className="space-y-2 text-left">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">GIS Mapping</h3>
              <p className="text-xs text-white/60 leading-relaxed">
                Producing high-quality accurate maps tailored to support research and industrial decision-making.
              </p>
            </div>
          </div>

          {/* Satellite Image Analysis */}
          <div className="group liquid-glass border border-white/5 rounded-3xl p-6 sm:p-8 space-y-5 hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
            <div className="h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center text-white border border-white/10 group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all">
              <Layers className="h-5 w-5" />
            </div>
            <div className="space-y-2 text-left">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">Satellite Image Analysis</h3>
              <p className="text-xs text-white/60 leading-relaxed">
                Interpreting raw multispectral and radar series datasets to analyze critical environmental, climatic, and land-use trends.
              </p>
            </div>
          </div>

          {/* Environmental Monitoring */}
          <div className="group liquid-glass border border-white/5 rounded-3xl p-6 sm:p-8 space-y-5 hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
            <div className="h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center text-white border border-white/10 group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all">
              <Activity className="h-5 w-5" />
            </div>
            <div className="space-y-2 text-left">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">Environmental Monitoring</h3>
              <p className="text-xs text-white/60 leading-relaxed">
                Continuous real-time tracking of land transformations.
              </p>
            </div>
          </div>

          {/* Water Resource Assessments */}
          <div className="group liquid-glass border border-white/5 rounded-3xl p-6 sm:p-8 space-y-5 hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
            <div className="h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center text-white border border-white/10 group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all">
              <Droplets className="h-5 w-5" />
            </div>
            <div className="space-y-2 text-left">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">Water Resource Assessments</h3>
              <p className="text-xs text-white/60 leading-relaxed">
                Hydrological computations and modelling of flooding, runoff, surface water, groundwater, and evapotranspiration.
              </p>
            </div>
          </div>

          {/* Machine Learning Classification */}
          <div className="group liquid-glass border border-white/5 rounded-3xl p-6 sm:p-8 space-y-5 hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
            <div className="h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center text-white border border-white/10 group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all">
              <Cpu className="h-5 w-5" />
            </div>
            <div className="space-y-2 text-left">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">Machine Learning Classification</h3>
              <p className="text-xs text-white/60 leading-relaxed">
                Supervised classifications using machine learning algorithms such as RF, GBT, XGBT, SVM, MaxExt, CART, ANN, CNN, KNN, etc, and emerging technology usage such as explainable AI. 
              </p>
            </div>
          </div>

        </div>

      </section>

      {/* 5. WHY CHOOSE HGS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="text-left space-y-2 max-w-xl">
          <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase block">CORE DISTINCTIVENESS</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight uppercase">Why Choose HGS</h2>
          <p className="text-xs text-white/60 leading-relaxed">
            Our distinctive integration of scientific expertise and regional knowledge enables us to provide advanced geospatial analysis that addresses complex environmental challenges
          </p>
        </div>

        {/* Highlight points */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="p-6 rounded-2xl bg-white/1 border border-white/5 text-left space-y-3">
            <div className="text-white bg-white/5 p-2 rounded-lg w-fit">
              <Database className="h-4 w-4" />
            </div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white font-mono">Big Geospatial Data Expertise</h4>
            <p className="text-[11px] text-white/60 leading-relaxed">
              We process multi-petabyte geospatial data from freely available and commercial satellites.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/1 border border-white/5 text-left space-y-3">
            <div className="text-white bg-white/5 p-2 rounded-lg w-fit">
              <Cpu className="h-4 w-4" />
            </div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white font-mono">Cloud Computing Solutions</h4>
            <p className="text-[11px] text-white/60 leading-relaxed">
              Scaling big data computations across cloud computing platforms such as GEE (Cloud computing solutions)
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/1 border border-white/5 text-left space-y-3">
            <div className="text-white bg-white/5 p-2 rounded-lg w-fit">
              <Award className="h-4 w-4" />
            </div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white font-mono">Research Excellence</h4>
            <p className="text-[11px] text-white/60 leading-relaxed">
              Led by geospatial scientists with peer-reviewed publications from high-impact-factor remote sensing journals
            </p>
          </div>

        </div>

      </section>

      {/* 6. CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        
        <div className="rounded-3xl bg-white text-[#030303] p-10 sm:p-14 text-center space-y-6 shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neutral-900/5 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-3 relative z-10">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Turn Complex Geospatial Data Into Clear Decisions
            </h2>
            <p className="text-xs sm:text-sm text-neutral-800 max-w-xl mx-auto leading-relaxed">
              Experience the clarity that comes from scientifically backed remote sensing projections and compliant map deliveries.
            </p>
          </div>

          <div className="relative z-10">
            <button
              onClick={() => setCurrentPage('contact')}
              className="px-8 py-3.5 bg-neutral-950 hover:bg-neutral-900 transition-all text-white font-bold text-xs tracking-wider uppercase rounded-full hover:scale-105 active:scale-95 cursor-pointer"
            >
              Get Started
            </button>
          </div>

        </div>

      </section>

    </div>
  );
}
