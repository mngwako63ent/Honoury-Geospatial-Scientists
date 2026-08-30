/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Radar, Compass, Activity, ShieldCheck, Cpu } from 'lucide-react';
import { SATELLITE_TRACKS } from '../data';
import { SatelliteTrack } from '../types';

export default function InteractiveSatelliteVane() {
  const [selectedSat, setSelectedSat] = useState<SatelliteTrack>(SATELLITE_TRACKS[0]);
  const [azimuth, setAzimuth] = useState<number>(145); // 0 to 360
  const [elevation, setElevation] = useState<number>(42); // 0 to 90
  const [sweepSpeed, setSweepSpeed] = useState<number>(1.5); // rad/sec multiplier
  const [noiseFilter, setNoiseFilter] = useState<boolean>(true);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sweepAngleRef = useRef<number>(0);
  const animationFrameId = useRef<number | null>(null);

  // Animate the radar sweep on the canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const render = () => {
      // Clear
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const radius = Math.min(cx, cy) * 0.85;

      // Increment rotation sweep angle
      sweepAngleRef.current = (sweepAngleRef.current + (0.01 * sweepSpeed)) % (Math.PI * 2);

      // Draw Radar Background Rings
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
      ctx.lineWidth = 1;
      
      // Outer border circle
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.stroke();

      // Middle ring
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 0.66, 0, Math.PI * 2);
      ctx.stroke();

      // Inner ring
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 0.33, 0, Math.PI * 2);
      ctx.stroke();

      // Draw Grid Crosshairs
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.beginPath();
      ctx.moveTo(cx - radius, cy);
      ctx.lineTo(cx + radius, cy);
      ctx.moveTo(cx, cy - radius);
      ctx.lineTo(cx, cy + radius);
      ctx.stroke();

      // Draw Angle Degree Labels
      ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.font = '8px monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('0° N', cx, cy - radius - 8);
      ctx.fillText('180° S', cx, cy + radius + 8);
      ctx.fillText('90° E', cx + radius + 12, cy);
      ctx.fillText('270° W', cx - radius - 12, cy);

      // Draw Angle Tick Indicators (every 30 deg)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
      for (let angle = 0; angle < Math.PI * 2; angle += Math.PI / 6) {
        const xStart = cx + radius * Math.cos(angle);
        const yStart = cy + radius * Math.sin(angle);
        const xEnd = cx + (radius - 5) * Math.cos(angle);
        const yEnd = cy + (radius - 5) * Math.sin(angle);
        ctx.beginPath();
        ctx.moveTo(xStart, yStart);
        ctx.lineTo(xEnd, yEnd);
        ctx.stroke();
      }

      // Draw Azimuth Pointer (Selected value)
      const azRad = ((azimuth - 90) * Math.PI) / 180;
      const elPercent = elevation / 90; // 0 to 1
      const armLength = radius * elPercent;
      
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + armLength * Math.cos(azRad), cy + armLength * Math.sin(azRad));
      ctx.stroke();

      // Target Satellite Ring at Pointer End
      ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
      ctx.beginPath();
      ctx.arc(cx + armLength * Math.cos(azRad), cy + armLength * Math.sin(azRad), 4, 0, Math.PI * 2);
      ctx.fill();

      // Outer targeting circle
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(cx + armLength * Math.cos(azRad), cy + armLength * Math.sin(azRad), 9, 0, Math.PI * 2);
      ctx.stroke();

      // Draw the Radar Sweep Arc
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
      grad.addColorStop(0, 'rgba(255, 255, 255, 0.08)');
      grad.addColorStop(1, 'rgba(255, 255, 255, 0.02)');
      
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, radius, sweepAngleRef.current - 0.25, sweepAngleRef.current);
      ctx.lineTo(cx, cy);
      ctx.fill();

      // Draw bright sweep front line
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + radius * Math.cos(sweepAngleRef.current), cy + radius * Math.sin(sweepAngleRef.current));
      ctx.stroke();

      // Simulated noise blips if requested
      if (noiseFilter) {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
        // Draw static scatter points representative of radar terrestrial noise
        const noisePoints = [
          { x: 0.3, y: -0.4 },
          { x: -0.5, y: 0.2 },
          { x: 0.2, y: 0.6 },
          { x: -0.7, y: -0.5 }
        ];
        noisePoints.forEach(p => {
          const nx = cx + radius * p.x;
          const ny = cy + radius * p.y;
          ctx.beginPath();
          ctx.arc(nx, ny, 1.2, 0, Math.PI * 2);
          ctx.fill();
        });
      }

      animationFrameId.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, [azimuth, elevation, sweepSpeed, noiseFilter]);

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
      
      {/* Interactive Controls Card */}
      <div className="md:col-span-5 liquid-glass rounded-3xl p-5 flex flex-col justify-between space-y-4">
        <div className="space-y-1">
          <div className="text-[10px] font-mono tracking-widest text-white/50 uppercase flex items-center space-x-1.5">
            <Compass className="h-3 w-3 animate-spin duration-3000" />
            <span>TERRESTRIAL TELEMETRY VANE</span>
          </div>
          <h3 className="text-lg font-bold text-white tracking-tight">Vane Tracking Deck</h3>
          <p className="text-xxs text-white/60 leading-relaxed">
            Target specific space coordinates and measure environmental backscatter signatures instantly.
          </p>
        </div>

        {/* Selected Satellite Specs */}
        <div className="p-3 bg-white/5 rounded-2xl space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-white tracking-tight">{selectedSat.name}</span>
            <span className="text-[8px] font-mono bg-white text-[#030303] px-2 py-0.5 rounded font-bold">
              {selectedSat.orbitType}
            </span>
          </div>
          <p className="text-[10px] text-white/60 font-mono tracking-wider">
            SENSOR: {selectedSat.sensor}
          </p>
          <div className="flex justify-between items-center text-[9px] font-mono text-white/40 border-t border-white/10 pt-2">
            <span>ALTITUDE: {selectedSat.altitudeKm} KM</span>
            <span>CAPACITY: {selectedSat.efficiency}%</span>
          </div>
        </div>

        {/* Range Controls */}
        <div className="space-y-3 pt-2">
          
          <div className="space-y-1">
            <div className="flex justify-between text-[10px] font-mono text-white/50">
              <span>AZIMUTH (HORIZONTAL DEG)</span>
              <span className="text-white font-medium">{azimuth}°</span>
            </div>
            <input
              type="range"
              min="0"
              max="360"
              step="1"
              value={azimuth}
              onChange={(e) => setAzimuth(parseInt(e.target.value))}
              className="w-full accent-white bg-white/10 h-1.5 rounded-lg appearance-none cursor-ew-resize"
            />
          </div>

          <div className="space-y-1">
            <div className="flex justify-between text-[10px] font-mono text-white/50">
              <span>ELEVATION HEIGHT (DEGREES)</span>
              <span className="text-white font-medium">{elevation}°</span>
            </div>
            <input
              type="range"
              min="5"
              max="90"
              step="1"
              value={elevation}
              onChange={(e) => setElevation(parseInt(e.target.value))}
              className="w-full accent-white bg-white/10 h-1.5 rounded-lg appearance-none cursor-ew-resize"
            />
          </div>

          <div className="space-y-1">
            <div className="flex justify-between text-[10px] font-mono text-white/50">
              <span>RADAR VELOCITY MULTIPLIER</span>
              <span className="text-white font-medium">{sweepSpeed.toFixed(1)}x</span>
            </div>
            <input
              type="range"
              min="0.2"
              max="3.0"
              step="0.1"
              value={sweepSpeed}
              onChange={(e) => setSweepSpeed(parseFloat(e.target.value))}
              className="w-full accent-white bg-white/10 h-1.5 rounded-lg appearance-none cursor-ew-resize"
            />
          </div>

        </div>

        {/* Buttons / Filters */}
        <div className="flex items-center space-x-2 pt-2">
          <button
            onClick={() => setNoiseFilter(!noiseFilter)}
            className={`flex-1 py-1.5 px-3 rounded-xl border text-center font-mono text-[9px] uppercase tracking-wider transition-all cursor-pointer ${
              noiseFilter 
                ? 'bg-white text-neutral-950 border-white' 
                : 'bg-transparent text-white border-white/20 hover:border-white/50'
            }`}
          >
            {noiseFilter ? 'Noise Offset On' : 'Plain Aperture'}
          </button>
          
          <button
            onClick={() => {
              setAzimuth(145);
              setElevation(42);
              setSweepSpeed(1.5);
            }}
            className="px-3 py-1.5 bg-white/5 hover:bg-white/15 border border-white/5 hover:border-white/15 text-white rounded-xl text-[9px] font-mono uppercase tracking-wider cursor-pointer"
          >
            Reset
          </button>
        </div>

      </div>

      {/* Radar Canvas Visualizer */}
      <div className="md:col-span-7 flex flex-col items-center justify-between bg-white/1 shadow-inner h-full liquid-glass rounded-3xl p-5 min-h-[300px]">
        
        {/* Device Header */}
        <div className="w-full flex items-center justify-between border-b border-white/5 pb-2.5">
          <div className="flex items-center space-x-2">
            <Radar className="h-4 w-4 text-white animate-pulse" />
            <span className="text-xs font-semibold text-white uppercase tracking-wider font-mono">
              Live Coordinate Sweeper
            </span>
          </div>

          <div className="flex items-center space-x-1">
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-ping" />
            <span className="text-[8px] font-mono tracking-widest text-white/40 uppercase">
              GRID ALIGNED
            </span>
          </div>
        </div>

        {/* Central Canvas Container */}
        <div className="relative flex items-center justify-center p-3 flex-1 w-full my-auto">
          <canvas
            ref={canvasRef}
            width={260}
            height={260}
            className="w-[240px] h-[240px] z-10 block pointer-events-none drop-shadow-xl"
            title="Interactive Terrestrial Satellite Sweep Radar Plot"
          />

          <div className="absolute top-2 left-2 bg-neutral-950/70 p-2 rounded-lg text-[8px] font-mono text-white/40 leading-snug backdrop-blur-md select-none">
            AZ: <span className="text-white font-medium">{azimuth}°</span><br />
            EL: <span className="text-white font-medium">{elevation}°</span><br />
            RAD: <span className="text-white font-medium">{(sweepAngleRef.current * (180/Math.PI)).toFixed(0)}°</span>
          </div>
        </div>

        {/* Satellite Tabs selector */}
        <div className="w-full grid grid-cols-3 gap-2 border-t border-white/5 pt-3">
          {SATELLITE_TRACKS.map((sat) => (
            <button
              key={sat.id}
              onClick={() => {
                setSelectedSat(sat);
                setElevation(Math.floor(sat.altitudeKm / 10)); // simulated dynamic height shift
              }}
              className={`p-2 rounded-xl text-[8px] uppercase tracking-wider font-mono border text-center flex flex-col justify-center transition-all truncate cursor-pointer ${
                selectedSat.id === sat.id
                  ? 'bg-white text-black font-bold border-white'
                  : 'bg-transparent text-white/70 border-white/10 hover:border-white/30'
              }`}
            >
              <span className="truncate">{sat.name.split(' ')[0]}</span>
              <span className="text-[7px] text-white/40 group-hover:text-white/60 block mt-0.5 mt-0.5-no-override">
                {sat.altitudeKm} KM
              </span>
            </button>
          ))}
        </div>

      </div>

    </div>
  );
}
