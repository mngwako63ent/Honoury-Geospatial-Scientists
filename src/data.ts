/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TeamMember, Publication, GlobalHub, ServiceItem, DeliverableItem, SatelliteTrack } from './types';

export const LOGO_SVG_URL = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' fill='none' stroke='white' stroke-width='2.5' stroke-linecap='round'><circle cx='50' cy='50' r='40' stroke-opacity='0.25' /><path d='M50 10 A40 40 0 0 0 50 90' /><path d='M50 10 A40 40 0 0 1 50 90' /><line x1='10' y1='50' x2='90' y2='50' /><path d='M15 30 Q50 35 85 30' /><path d='M15 70 Q50 65 85 70' /><circle cx='50' cy='50' r='4' fill='white' /><path d='M50 50 L75 25' stroke-dasharray='2,2' /><circle cx='75' cy='25' r='2' fill='white' /></svg>";

export const EARTH_TERRAIN_IMAGE_URL = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&sat=-100&contrast=115&brightness=95";

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'hgs-01',
    name: 'Dr. Mpho Ngwako',
    role: 'Lead Geospatial Scientist',
    credentials: 'PhD in Spatial Hydrology (Cape Town)',
    bio: 'Pioneered advanced water catchment run-off models across the Southern African development corridors. Specializes in SAR satellite interferometry and hydrodynamic simulations.',
    avatar: 'MN'
  },
  {
    id: 'hgs-02',
    name: 'Sarah Jenkins',
    role: 'Principal GIS Solutions Architect',
    credentials: 'MSc in Geoinformatics (Colorado)',
    bio: 'Expert in planetary-scale Earth Engine pipelines and machine learning classifications for land cover transformation. Designed multi-source risk registers for municipal catchments.',
    avatar: 'SJ'
  },
  {
    id: 'hgs-03',
    name: 'Prof. Hendrik Viljoen',
    role: 'Academic Advisory Chair',
    credentials: 'DSc in Remote Sensing',
    bio: 'Over 25 years of peer-reviewed research in spatial geostatistics, hydrological balance modeling, and ISO TC 211 geospatial compliance frameworks.',
    avatar: 'HV'
  }
];

export const PUBLICATIONS_DATA: Publication[] = [
  {
    id: 'pub-01',
    title: 'Anisotropic Spectral Mixture Analysis for Dry-Season Catchment Verification',
    authors: 'Ngwako, M. & Viljoen, H.',
    journal: 'African Journal of Geoinformatics & Hydrology',
    year: 2024,
    doi: '10.1016/j.ajgh.2024.11',
    tags: ['Spectral Mixture', 'Water Security', 'Anisotropic']
  },
  {
    id: 'pub-02',
    title: 'Planetary-Scale Cloud Processing for Land Degradation Indexing in Arid Zones',
    authors: 'Jenkins, S. & Ngwako, M.',
    journal: 'International Remote Sensing Letters',
    year: 2023,
    doi: '10.1080/irsl.2023.882',
    tags: ['Google Earth Engine', 'Land Cover', 'L-Systems']
  },
  {
    id: 'pub-03',
    title: 'Standardizing Local Hydrological Risk Matrices under South African National Standards (SANS)',
    authors: 'Viljoen, H.',
    journal: 'Geospatial Compliance Quarterly',
    year: 2022,
    tags: ['ISO TC 211', 'SANS Compliance', 'Hydrology']
  }
];

export const GLOBAL_HUBS: GlobalHub[] = [
  {
    id: 'hub-01',
    city: 'Cape Town',
    country: 'South Africa',
    coordinate: '33.9249° S, 18.4241° E',
    focus: 'Hydrological Scaffolding & SAR Remote Earth Analysis'
  },
  {
    id: 'hub-02',
    city: 'Pretoria',
    country: 'South Africa',
    coordinate: '25.7479° S, 28.2293° E',
    focus: 'National Water Catchment & ISO Standards Management'
  },
  {
    id: 'hub-03',
    city: 'Denver, CO',
    country: 'United States',
    coordinate: '39.7392° N, 104.9903° W',
    focus: 'Planetary Cloud Computing & Satellite Orbit Modeling'
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'srv-01',
    title: 'Water & Environmental Analysis',
    icon: 'Droplet',
    description: 'Highly calibrated spatial water accounting maps, catchments, and flow networks incorporating mathematical run-off algorithms.',
    methodology: 'r = Q_catchment * ln(S_gradient) + SANS_constant',
    applications: ['Water Security Buffering', 'Hydrographic Boundary Delineation', 'Flood Susceptibility Mapping']
  },
  {
    id: 'srv-02',
    title: 'Spatial Data Science',
    icon: 'Cpu',
    description: 'Anisotropic spectral unmixing, neural-network-backed terrestrial classification, and predictive remote sensing arrays.',
    methodology: 'f(z) = Classify(SAR_backscatter, multispectral_index)',
    applications: ['Agricultural Yield Indexing', 'Forest Subsurface Carbon Mapping', 'Ecosystem Degradation Monitoring']
  },
  {
    id: 'srv-03',
    title: 'Custom High-Impact GIS Solutions',
    icon: 'Map',
    description: 'Deploying high-performance custom spatial databases, interactive map servers, and cloud-native dashboard frameworks compliant with international specifications.',
    methodology: 'Geospatial Web Assembly & WebGL Vector Renderers',
    applications: ['Interactive Geoportals', 'Infrastructure Pipeline Risk Monitors', 'SANS/ISO TC 211 Validation Registers']
  }
];

export const DELIVERABLES_DATA: DeliverableItem[] = [
  {
    id: 'del-01',
    title: 'Calibrated Water-Catchment Shapefile Arrays',
    format: 'ESRI Shapefile / GeoPackage (OGC compliant)',
    utility: 'Enables direct integration into commercial modeling engines and governmental planning software.'
  },
  {
    id: 'del-02',
    title: 'High-Resolution Orthorectified Terrain Models',
    format: 'Cloud-Optimized GeoTIFF (COG)',
    utility: 'Sub-meter accurate elevation datasets ready for hydrodynamic watershed simulation.'
  },
  {
    id: 'del-03',
    title: 'Google Earth Engine Planetary Automation Modules',
    format: 'JavaScript API / Python Module',
    utility: 'Enables continuous, serverless tracking of environmental change over multi-decade intervals.'
  }
];

export const SATELLITE_TRACKS: SatelliteTrack[] = [
  {
    id: 'sat-01',
    name: 'SENTINEL-1A SAR',
    orbitType: 'LEO Sun-Synchronous',
    sensor: 'C-band Synthetic Aperture Radar',
    efficiency: 94,
    altitudeKm: 693
  },
  {
    id: 'sat-02',
    name: 'LANDSAT-9 OLI-2',
    orbitType: 'LEO Polar Orbit',
    sensor: 'Multispectral (Visible, NIR, SWIR, thermal)',
    efficiency: 89,
    altitudeKm: 705
  },
  {
    id: 'sat-03',
    name: 'ALOS-2 PALSAR',
    orbitType: 'LEO Sun-Synchronous',
    sensor: 'L-band Radar (Subsurface structural modeling)',
    efficiency: 91,
    altitudeKm: 628
  }
];
