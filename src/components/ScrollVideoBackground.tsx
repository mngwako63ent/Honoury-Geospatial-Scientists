/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register standard ScrollTrigger plugin for GSAP
gsap.registerPlugin(ScrollTrigger);

export default function ScrollVideoBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const targetTimeRef = useRef<number>(0);
  const currentTimeRef = useRef<number>(0);
  const rafRef = useRef<number | null>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  const [isMetadataLoaded, setIsMetadataLoaded] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);
  const [hasError, setHasError] = useState<boolean>(false);

  // 1. Initialize and capture metadata once the video is loaded
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      if (video.duration && !isNaN(video.duration) && video.duration > 0) {
        setDuration(video.duration);
        setIsMetadataLoaded(true);
        setHasError(false);
      }
    };

    const handleError = () => {
      console.warn("Retrying video load or fallback stream due to load latency.");
      setHasError(true);
    };

    // If metadata is already cached / preloaded
    if (video.readyState >= 1) {
      handleLoadedMetadata();
    } else {
      video.addEventListener('loadedmetadata', handleLoadedMetadata);
    }
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('error', handleError);
    };
  }, []);

  // 2. High-performance requestAnimationFrame loop to lerp currentTime
  // This achieves flawless 60fps video seeking with zero frame drops, layout thrashing, or UI stutter
  useEffect(() => {
    if (!isMetadataLoaded || duration <= 0) return;

    const video = videoRef.current;
    if (!video) return;

    const renderLoop = () => {
      const targetTime = targetTimeRef.current;
      const curTime = currentTimeRef.current;
      const difference = targetTime - curTime;

      // Only seek if there is a meaningful difference to avoid excessive decode calls
      if (Math.abs(difference) > 0.001) {
        // Smoothly interpolate towards the target scroll position (12% leap per tick)
        const nextTime = curTime + difference * 0.12;

        // Clip bounds securely
        const boundedTime = Math.max(0, Math.min(duration - 0.1, nextTime));
        
        currentTimeRef.current = boundedTime;
        video.currentTime = boundedTime;
      }

      rafRef.current = requestAnimationFrame(renderLoop);
    };

    rafRef.current = requestAnimationFrame(renderLoop);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isMetadataLoaded, duration]);

  // 3. GSAP ScrollTrigger to update target currentTime and handle container 200% scale zoom at center
  useEffect(() => {
    if (!isMetadataLoaded || duration <= 0) return;

    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video) return;

    // Reset initial states to prevent layout shifts
    gsap.set(container, { scale: 1 });

    const timelineProxy = { val: 0 };

    // GSAP Timeline mapped to body scroll progress
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.1, // Quick responsive tracking
        invalidateOnRefresh: true,
      }
    });

    timelineRef.current = tl;

    // (A) Map scroll position continuously to video timeline proxy
    tl.to(timelineProxy, {
      val: duration - 0.1,
      ease: "none",
      duration: 1,
      onUpdate: () => {
        targetTimeRef.current = timelineProxy.val;
      }
    }, 0);

    // (B) Zoom container to 200% (scale 2.0) as page hits the middle, and scale back gracefully at bottom
    tl.to(container, {
      keyframes: [
        { scale: 1.0, duration: 0 },
        { scale: 2.0, duration: 0.5, ease: "power2.inOut" },
        { scale: 1.0, duration: 0.5, ease: "power2.inOut" }
      ],
      duration: 1,
      ease: "none"
    }, 0);

    // Force layout refresh for immediate trigger calculations
    ScrollTrigger.refresh();

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [isMetadataLoaded, duration]);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden z-0 bg-neutral-950">
      
      {/* Scaling Container targeting DOM directly */}
      <div 
        ref={containerRef} 
        className="w-full h-full origin-center will-change-transform flex items-center justify-center"
      >
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover mix-blend-screen opacity-45 filter brightness-[0.75] saturate-[0.8] contrast-[1.1]"
          style={{ mixBlendMode: 'screen' }}
          referrerPolicy="no-referrer"
        >
          <source 
            src="https://res.cloudinary.com/dm7sxhaeb/video/upload/v1780642764/Globe_qb4ham.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Extreme Low-Light Solid Overlay to keep navigation/copys perfectly readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-transparent to-neutral-950/70 pointer-events-none" />

    </div>
  );
}
