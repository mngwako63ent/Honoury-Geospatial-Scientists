/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  FileCode, 
  MapPin, 
  Layers, 
  FileText, 
  Compass, 
  Tag, 
  GitBranch, 
  ArrowUpRight,
  Sparkles,
  Droplets,
  Activity
} from 'lucide-react';

interface ProjectItem {
  id: string;
  title: string;
  category: 'Environmental Projects' | 'Water Projects' | 'Research Projects' | 'GIS Products';
  deliverableType: string;
  description: string;
  formatSpecs: string;
  impactScore?: number;
}

export default function ProjectsView() {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const filters = [
    'All',
    'Environmental Projects',
    'Water Projects',
    'Research Projects',
    'GIS Products'
  ];

  const projects: ProjectItem[] = [
    {
      id: 'proj-01',
      title: 'Limpopo Hydrographic Basin Delineation Model',
      category: 'Water Projects',
      deliverableType: 'Watershed analysis outputs & Publication-ready maps',
      description: 'Highly detailed boundary mapping and gradient vector runoff calculations prepared for regional transboundary water preservation bureaus.',
      formatSpecs: 'OGC Compliant Shapefiles / EPSG:9400'
    },
    {
      id: 'proj-02',
      title: 'Sentinel-1 SAR Terrestrial Strain Monitoring',
      category: 'Environmental Projects',
      deliverableType: 'Spatial visualizations & Environmental reports',
      description: 'Synthetic Aperture Radar interferometry tracking sub-centimeter land strain, soil compaction, and coastal sub-surface moisture trends across critical mineral corridors.',
      formatSpecs: 'Orthorectified Cloud-Optimized GeoTIFF (COG)'
    },
    {
      id: 'proj-03',
      title: 'Planetary Google Earth Engine Classification App',
      category: 'GIS Products',
      deliverableType: 'Interactive GIS products & Spatial visualizations',
      description: 'Autonomous cloud pipeline that processes multi-decade spectral signals to dynamically index dry-season water loss across the SADC region.',
      formatSpecs: 'GEE Cloud Web Application & Python Jupyter API'
    },
    {
      id: 'proj-04',
      title: 'SANS Statutory Mapping & Compliance Review',
      category: 'Research Projects',
      deliverableType: 'Custom flowcharts & Publication-ready maps',
      description: 'Standardized regulatory flow charts and publication-grade thematic maps compiled in high resolution to validate compliance with ISO TC 211 structures.',
      formatSpecs: 'High-Resolution PDF Map Attachments / Core Flowcharts'
    },
    {
      id: 'proj-05',
      title: 'Arid Zone Desertification & Lulc Classifier',
      category: 'Environmental Projects',
      deliverableType: 'Environmental reports & Spatial visualizations',
      description: 'Supervised machine learning classification models leveraging Landsat-9 band telemetry to flag and predict boundary shifts of arid degradation.',
      formatSpecs: 'Land Use Land Cover Rasters / Categorized Shapefiles'
    },
    {
      id: 'proj-06',
      title: 'Subsurface Structural Catchment Water Accounting',
      category: 'Water Projects',
      deliverableType: 'Watershed analysis outputs',
      description: 'High-gradient terrain flow simulations executing logarithmic precipitation equations to track aquifers under intensive crop usage.',
      formatSpecs: 'Hydrological Flow Networks / GeoPackage'
    }
  ];

  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedFilter);

  return (
    <div className="space-y-16 animate-fade-in px-4 max-w-7xl mx-auto text-left">
      
      {/* Editorial Header Section */}
      <section className="space-y-4 max-w-4xl">
        <div className="inline-flex items-center space-x-2 text-[10px] bg-white/10 text-white/90 px-3 py-1.5 rounded-full font-mono tracking-widest uppercase">
          <Sparkles className="h-3 w-3 text-white/90" />
          <span>PORTFOLIO & DELIVERABLES CATALOGUE</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-sans font-medium tracking-tight text-white leading-tight">
          Visualizing terrain via <em className="font-serif italic font-normal text-white/85">high-impact products</em>
        </h1>
        <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-sans max-w-2xl">
          Review our standard list of deliverables, including publication-ready maps, interactive geoportals, custom flowcharts, and watershed models built alongside international research groups.
        </p>
      </section>

      {/* Interactive horizontal filter row */}
      <section className="space-y-6">
        <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-white/5">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-full text-xxs font-mono uppercase tracking-wider transition-all cursor-pointer border ${
                selectedFilter === filter
                  ? 'bg-white text-neutral-950 border-white font-bold'
                  : 'bg-transparent text-white/75 border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              {filter === 'All' ? 'All Deliverables' : filter}
            </button>
          ))}
        </div>

        {/* Dynamic transition layout mapping */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((p) => (
            <div 
              key={p.id}
              className="group liquid-glass rounded-3xl p-6 flex flex-col justify-between border border-white/5 hover:border-white/15 transition-all duration-300 h-full hover:scale-[1.01]"
            >
              <div className="space-y-4">
                {/* Category tag */}
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-mono tracking-widest bg-white/10 text-white/95 px-2.5 py-0.5 rounded uppercase">
                    {p.category}
                  </span>
                  
                  <span className="text-[9px] font-mono text-white/30">
                    {p.id.toUpperCase()}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-sm font-bold text-white group-hover:text-white/90 transition-colors tracking-tight leading-snug">
                  {p.title}
                </h3>

                {/* Deliverable Sub-indicator */}
                <div className="text-xxs font-mono text-white/55 bg-black/35 p-2 rounded-xl flex items-start space-x-1.5">
                  <GitBranch className="h-3 w-3 text-white/40 shrink-0 mt-0.5" />
                  <span className="leading-tight">
                    <strong>Deliverable:</strong> {p.deliverableType}
                  </span>
                </div>

                <p className="text-xxs text-white/60 leading-relaxed font-sans">
                  {p.description}
                </p>
              </div>

              {/* Format details footer */}
              <div className="pt-4 border-t border-white/5 mt-5 flex items-center justify-between text-[9px] font-mono text-white/40 uppercase">
                <span>FORMAT: {p.formatSpecs}</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-white/20 group-hover:text-white/80 transition-colors shrink-0 ml-1" />
              </div>

            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 text-white/50 text-xs font-mono">
            No active deliverables registered under this category tab.
          </div>
        )}

      </section>

    </div>
  );
}
