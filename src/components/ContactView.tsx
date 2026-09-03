/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { 
  Send, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Linkedin, 
  FileCheck, 
  Check, 
  Compass, 
  AlertCircle 
} from 'lucide-react';

export default function ContactView() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    projectType: 'Environmental Projects',
    message: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [ticketLogged, setTicketLogged] = useState(false);
  const [recentTicketId, setRecentTicketId] = useState<string>('');

  const contactDetails = {
    email: 'honourygeospatialscientists@gmail.com',
    phone: '+27 (0) 67 964 6656',
    website: 'www.hgs-geospatial.com',
    linkedin: 'Honoury Geospatial Scientists'
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert('Kindly fill in all required fields (Name, Email, and Message) to transmit your consultation form.');
      return;
    }

    setSubmitting(true);
    
    const templateParams = {
      title: 'Consultation Request',
      name: form.name || 'Unknown Name',
      company: form.company || 'N/A',
      email: form.email || 'no-email@example.com',
      project_type: form.projectType || 'N/A',
      message: (form.message || 'No message provided'),
    };

    console.log('EmailJS Payload:', templateParams);

    emailjs.send(
      'service_zl7p5mq', 
      'template_1x3yn8p', 
      templateParams, 
      'jgBRP_Zwj1h0DDsDq'
    )
    .then((result) => {
      setSubmitting(false);
      setTicketLogged(true);
      setRecentTicketId(`HGS-INTAKE-${Math.floor(1000 + Math.random() * 9000)}`);
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      setSubmitting(false);
      alert('A transmission error occurred. Please try again or contact us directly via email.');
    });
  };

  return (
    <div className="space-y-12 animate-fade-in px-4 max-w-7xl mx-auto text-left">
      
      {/* Editorial Header Section */}
      <section className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center space-x-2 text-[10px] bg-white/10 text-white/90 px-3 py-1.5 rounded-full font-mono tracking-widest uppercase">
          <Compass className="h-3.5 w-3.5" />
          <span>Coordinate Intake Registry Desk</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-sans font-medium tracking-tight text-white leading-tight">
          Initiate regional scoping & <em className="font-serif italic font-normal text-white/85">project consultation</em>
        </h1>
        <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-sans">
          Transmit your exact water-catchment parameters, requested shapefile grids, or peer-review publication requirements. Lead geospatial analysts evaluate incoming inquiries daily.
        </p>
      </section>

      {/* Grid: Form and Contact Cards */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left column: Intake form */}
        <div className="lg:col-span-7">
          
          {ticketLogged ? (
            <div className="liquid-glass rounded-3xl p-8 text-center space-y-6 animate-fade-in border border-white/15 shadow-2xl">
              <div className="w-12 h-12 rounded-full bg-white/10 mx-auto flex items-center justify-center text-white">
                <FileCheck className="h-6 w-6 animate-pulse" />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white tracking-tight">Consultation Logged</h3>
                <span className="inline-block text-[10.5px] font-mono bg-white text-neutral-950 px-3 py-1 rounded font-black tracking-widest">
                  {recentTicketId}
                </span>
                <p className="text-xs text-white/60 max-w-md mx-auto leading-relaxed pt-2">
                  Form transmitted securely. Our team of African and US-aligned geospatial scientists will review your data requirements at <code className="bg-white/10 px-1 py-0.5 rounded text-white font-mono">{form.email}</code>.
                </p>
              </div>

              <div className="bg-black/35 p-4 rounded-xl font-mono text-[9.5px] text-white/40 leading-relaxed space-y-1 text-left inline-block">
                <div>METADATA TRACK: {recentTicketId}</div>
                <div>PROJECT CLASSIFICATION: {form.projectType.toUpperCase()}</div>
                <div>SECURE TRANSMISSION TYPE: CLIENT DIRECT INTAKE</div>
                <div>REGIONAL PORTAL: SOUTH AFRICAN HQ</div>
              </div>

              <div>
                <button
                  onClick={() => {
                    setTicketLogged(false);
                    setForm({
                      name: '',
                      company: '',
                      email: '',
                      projectType: 'Environmental Projects',
                      message: ''
                    });
                  }}
                  className="py-2.5 px-6 rounded-full bg-white text-neutral-950 font-semibold text-xxs tracking-widest uppercase hover:scale-105 active:scale-95 transition-transform cursor-pointer"
                >
                  Log Another System Coordinate
                </button>
              </div>

            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="liquid-glass rounded-3xl p-6 sm:p-8 space-y-5 border border-white/5 shadow-2xl">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono tracking-widest text-white/40 uppercase" htmlFor="name">
                    Full Name <span className="text-white/60">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm(p => ({ ...p, name: e.target.value }))}
                    placeholder="e.g. Dr. Emily Ngwako"
                    className="w-full bg-black/40 hover:bg-black/55 focus:bg-black/55 rounded-xl px-4 py-3 text-xs text-white focus:outline-none placeholder-white/25 border border-white/5 focus:border-white/20 transition-all font-sans"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono tracking-widest text-white/40 uppercase" htmlFor="company">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={form.company}
                    onChange={(e) => setForm(p => ({ ...p, company: e.target.value }))}
                    placeholder="e.g. Environmental Agency"
                    className="w-full bg-black/40 hover:bg-black/55 focus:bg-black/55 rounded-xl px-4 py-3 text-xs text-white focus:outline-none placeholder-white/25 border border-white/5 focus:border-white/20 transition-all font-sans"
                  />
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono tracking-widest text-white/40 uppercase" htmlFor="email">
                    Liaison Email <span className="text-white/60">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm(p => ({ ...p, email: e.target.value }))}
                    placeholder="e.g. contact@agency.com"
                    className="w-full bg-black/40 hover:bg-black/55 focus:bg-black/55 rounded-xl px-4 py-3 text-xs text-white focus:outline-none placeholder-white/25 border border-white/5 focus:border-white/20 transition-all font-sans"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono tracking-widest text-white/40 uppercase" htmlFor="projectType">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    value={form.projectType}
                    onChange={(e) => setForm(p => ({ ...p, projectType: e.target.value }))}
                    className="w-full bg-black/50 rounded-xl px-4 py-3 text-xs text-white border border-white/5 focus:outline-none focus:border-white/20 font-sans cursor-pointer"
                  >
                    <option value="Environmental Projects">Environmental Projects</option>
                    <option value="Water Projects">Water Projects</option>
                    <option value="Research Projects">Research Projects</option>
                    <option value="GIS Products">GIS Products</option>
                  </select>
                </div>

              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-mono tracking-widest text-white/40 uppercase" htmlFor="message">
                  Message <span className="text-white/60">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm(p => ({ ...p, message: e.target.value }))}
                  placeholder="Insert spatial metadata coordinates, required map bands, or high-end project specifications here..."
                  className="w-full bg-black/40 hover:bg-black/55 focus:bg-black/55 rounded-xl px-4 py-3 text-xs text-white focus:outline-none placeholder-white/25 border border-white/5 focus:border-white/20 transition-all font-sans"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 px-6 rounded-full liquid-glass border border-white/25 text-xxs font-mono tracking-widest uppercase font-bold text-white hover:scale-[1.01] active:scale-[0.99] transition-transform disabled:opacity-50 cursor-pointer flex items-center justify-center space-x-2"
                id="submit-intake-btn"
              >
                <Send className="h-3.5 w-3.5 text-white/80" />
                <span>{submitting ? 'VALIDATING ENTRIES...' : 'Request Consultation'}</span>
              </button>

            </form>
          )}

        </div>

        {/* Right column: Physical contact cards & handle info */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="border-b border-white/10 pb-2">
            <h2 className="text-sm font-mono tracking-widest text-white/40 uppercase font-bold">Contact Information</h2>
          </div>

          <div className="space-y-4 font-sans text-xs">
            
            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/5 text-left flex items-start space-x-3.5 hover:border-white/15 transition-all">
              <div className="bg-white/10 p-2 rounded-xl text-white">
                <Mail className="h-4.5 w-4.5" />
              </div>
              <div>
                <span className="text-[9px] font-mono tracking-widest text-white/40 uppercase block">Global E-Mail</span>
                <a 
                  href={`mailto:${contactDetails.email}`} 
                  className="text-white select-all break-all hover:underline leading-relaxed font-bold font-mono"
                >
                  {contactDetails.email}
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/5 text-left flex items-start space-x-3.5 hover:border-white/15 transition-all">
              <div className="bg-white/10 p-2 rounded-xl text-white">
                <Phone className="h-4.5 w-4.5" />
              </div>
              <div>
                <span className="text-[9px] font-mono tracking-widest text-white/40 uppercase block">Direct Dial Corridor</span>
                <span className="text-white select-all font-bold font-mono leading-relaxed">{contactDetails.phone}</span>
              </div>
            </div>

            {/* Website Card */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/5 text-left flex items-start space-x-3.5 hover:border-white/15 transition-all">
              <div className="bg-white/10 p-2 rounded-xl text-white">
                <Globe className="h-4.5 w-4.5" />
              </div>
              <div>
                <span className="text-[9px] font-mono tracking-widest text-white/40 uppercase block">Official Web Domain</span>
                <span className="text-white select-all font-bold font-mono leading-relaxed">{contactDetails.website}</span>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/5 text-left flex items-start space-x-3.5 hover:border-white/15 transition-all">
              <div className="bg-white/10 p-2 rounded-xl text-white">
                <Linkedin className="h-4.5 w-4.5" />
              </div>
              <div>
                <span className="text-[9px] font-mono tracking-widest text-white/40 uppercase block">Liaison Network</span>
                <span className="text-white select-all font-bold leading-relaxed">{contactDetails.linkedin}</span>
              </div>
            </div>

          </div>

          <div className="p-5 rounded-2xl bg-black/25 text-left border border-white/5 text-xxs font-mono text-white/40 space-y-1">
            <span className="text-white leading-none block font-bold mb-2 uppercase text-[9px] tracking-wider">AFRICA SHIFT AXIS COORDS:</span>
            <div>PRETORIA SECRETARIAT: 25.7479° S, 28.2293° E</div>
            <div>CAPE TOWN DESIGN HUB: 33.9249° S, 18.4241° E</div>
          </div>

        </div>

      </section>

    </div>
  );
}
