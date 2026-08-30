/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PageId = 'home' | 'about' | 'services' | 'projects' | 'contact';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  credentials: string; // e.g., PhD, MSc
  bio: string;
  avatar: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi?: string;
  tags: string[];
}

export interface GlobalHub {
  id: string;
  city: string;
  country: string;
  coordinate: string;
  focus: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  icon: string; // Lucide icon identifier
  description: string;
  methodology: string; // mathematical/computational method
  applications: string[];
}

export interface DeliverableItem {
  id: string;
  title: string;
  format: string; // e.g., GeoTIFF, Hydrological Shapefile, GEE App, API Endpoint
  utility: string;
}

export interface InquiryFormState {
  name: string;
  email: string;
  org: string;
  projectType: string; // "water" | "gis-custom" | "data-science" | "consulting"
  message: string;
}

export interface SatelliteTrack {
  id: string;
  name: string;
  orbitType: string; // LEO, MEO, GEO
  sensor: string; // SAR, Multispectral, Hyperspectral
  efficiency: number; // 0 to 100
  altitudeKm: number;
}
