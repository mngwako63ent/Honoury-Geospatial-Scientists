/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Phone, Compass, Send, Check } from 'lucide-react';
import { InquiryFormState } from '../types';

interface MenuFlyoutProps {
  isOpen: boolean;
  onClose: () => void;
  setCurrentPage: (page: any) => void;
}

export default function MenuFlyout({ isOpen, onClose, setCurrentPage }: MenuFlyoutProps) {
  const [form, setForm] = useState<InquiryFormState>({
    name: '',
    email: '',
    org: '',
    projectType: 'water',
    message: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const contactDetails = {
    email: 'honourygeospatialscientists@gmail.com',
    phone: '+27 (0) 67 964 6656',
    hq: 'Pretoria Secretariat, South Africa'
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert('Please fill in all requested specifications to register the coordinate query.');
      return;
    }

    setSubmitting(true);
    
    const templateParams = {
      title: 'Scoping Inquiry',
      name: form.name || 'Unknown Name',
      company: form.org || 'N/A',
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
      setSuccess(true);
      setSubmitting(false);
      setForm({
        name: '',
        email: '',
        org: '',
        projectType: 'water',
        message: ''
      });
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      setSubmitting(false);
      alert('A transmission error occurred. Please try again or contact us directly via email.');
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md select-none"
        >
          {/* Main Scoping Glass Card */}
          <motion.div
            initial={{ scale: 0.96, y: 15, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.96, y: 15, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="w-full max-w-3xl liquid-glass-strong rounded-3xl p-6 sm:p-8 relative flex flex-col justify-between overflow-y-auto max-h-[90vh] border border-white/10 shadow-2xl"
          >
            {/* Close Toggle */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all cursor-pointer"
              title="Close Panel"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Layout Content */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
              
              {/* Info Column */}
              <div className="md:col-span-5 flex flex-col justify-between text-left space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-1 text-[9px] font-mono tracking-widest text-white/50 uppercase">
                    <Compass className="h-3 w-3 text-white animate-pulse" />
                    <span>HGS SCENE REGISTRATION</span>
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight leading-tight">System Intake Panel</h3>
                  <p className="text-xxs text-white/60 leading-normal">
                    Initiate deep hydrological runoff simulation profiles or secure vector coordinates for land-use boundary classifications immediately.
                  </p>
                </div>

                {/* Direct info cards */}
                <div className="space-y-2 text-xxs font-mono text-white/60">
                  <div className="p-2.5 rounded-xl bg-white/5 space-y-0.5">
                    <span className="text-[8px] text-white/40 block uppercase font-bold">PRETORIA DIRECT LINE</span>
                    <span>{contactDetails.phone}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 space-y-0.5">
                    <span className="text-[8px] text-white/40 block uppercase font-bold">LIAISON INTAKE CORRIDOR</span>
                    <span className="break-all">{contactDetails.email}</span>
                  </div>
                </div>

                <div className="border-t border-white/5 pt-3">
                  <span className="text-[8px] font-mono tracking-widest text-white/30 uppercase block">
                    SOUTH AFRICA & COLORADO AXIS
                  </span>
                </div>
              </div>

              {/* Form Entry Column */}
              <div className="md:col-span-7 flex flex-col justify-center text-left">
                
                {success ? (
                  <div className="bg-white/5 rounded-2xl p-6 text-center space-y-4 animate-fade-in border border-white/5">
                    <div className="w-10 h-10 rounded-full bg-white/10 mx-auto flex items-center justify-center text-white">
                      <Check className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Scoping Ticket Logged</h4>
                      <p className="text-xxs text-white/50 leading-relaxed max-w-xs mx-auto mt-1">
                        Systems checked. Your custom geospatial query has been formatted on Pretoria SANS compliance servers. Lead scientists will respond shortly.
                      </p>
                    </div>
                    <button
                      onClick={() => setSuccess(false)}
                      className="py-1.5 px-4 rounded-full bg-white/10 hover:bg-white/20 text-white text-[9px] font-mono uppercase tracking-widest cursor-pointer"
                    >
                      New Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4 font-sans text-xs">
                    
                    <div className="space-y-1">
                      <label className="text-[9px] font-mono tracking-widest text-white/40 uppercase" htmlFor="modal-name">
                        Registrant Name
                      </label>
                      <input
                        type="text"
                        id="modal-name"
                        required
                        value={form.name}
                        onChange={(e) => setForm(p => ({ ...p, name: e.target.value }))}
                        placeholder="e.g. Dr. Emily Vance"
                        className="w-full bg-black/40 hover:bg-black/55 focus:bg-black/55 rounded-xl px-3.5 py-2.5 text-white focus:outline-none placeholder-white/20 border border-white/5"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[9px] font-mono tracking-widest text-white/40 uppercase" htmlFor="modal-email">
                        Official Email
                      </label>
                      <input
                        type="email"
                        id="modal-email"
                        required
                        value={form.email}
                        onChange={(e) => setForm(p => ({ ...p, email: e.target.value }))}
                        placeholder="e.g. vance@water.gov.za"
                        className="w-full bg-black/40 hover:bg-black/55 focus:bg-black/55 rounded-xl px-3.5 py-2.5 text-white focus:outline-none placeholder-white/20 border border-white/5"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[9px] font-mono tracking-widest text-white/40 uppercase" htmlFor="modal-project">
                        Modeling Field
                      </label>
                      <select
                        id="modal-project"
                        value={form.projectType}
                        onChange={(e) => setForm(p => ({ ...p, projectType: e.target.value }))}
                        className="w-full bg-black/55 rounded-xl px-3.5 py-2.5 text-white border border-white/5 focus:outline-none focus:border-white/20 font-sans cursor-pointer"
                      >
                        <option value="water">Water Catchment Hydrology (Calibrated model)</option>
                        <option value="gis-custom">Custom Scientific Web GIS Platforms</option>
                        <option value="data-science">Satellite Remote Sensing & SAR unmixing</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[9px] font-mono tracking-widest text-white/40 uppercase" htmlFor="modal-message">
                        Inquiry Specifications
                      </label>
                      <textarea
                        id="modal-message"
                        required
                        rows={2}
                        value={form.message}
                        onChange={(e) => setForm(p => ({ ...p, message: e.target.value }))}
                        placeholder="Detail desired grid coordinate system or area parameters..."
                        className="w-full bg-black/40 hover:bg-black/55 focus:bg-black/55 rounded-xl px-3.5 py-2.5 text-white focus:outline-none placeholder-white/20 border border-white/5"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-2.5 rounded-full liquid-glass border border-white/15 hover:border-white/35 text-[9px] font-mono uppercase tracking-widest font-black text-white cursor-pointer"
                    >
                      {submitting ? 'LOGGING SANS SPECS...' : 'TRANSMIT SCOPING REQUEST'}
                    </button>

                  </form>
                )}

              </div>

            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
