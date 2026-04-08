"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import type { EventData } from "@/lib/event-utils";

const APP_STORE_URL = "https://apps.apple.com/app/asku-denison/id6744640581";

export default function EventCard({
  event,
  dateStr,
  location,
  description,
}: {
  event: EventData;
  dateStr: string;
  location: string | null;
  description: string | null;
}) {
  const handleOpenApp = () => {
    const deepLink = event.originalEventId
      ? `asku://event/${event.originalEventId}`
      : "asku://";
    const start = Date.now();
    window.location.href = deepLink;
    setTimeout(() => {
      if (Date.now() - start < 2000) {
        window.location.href = APP_STORE_URL;
      }
    }, 1500);
  };

  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center gap-6">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(196,30,58,0.5)]" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary">
                Denison University
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold tracking-tighter text-center text-white max-w-2xl leading-[1.1]"
            >
              {event.title}
            </motion.h1>

            {/* Subtitle meta */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground"
            >
              {dateStr && (
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {dateStr}
                </span>
              )}
              {location && (
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  {location}
                </span>
              )}
            </motion.div>
          </div>
        }
      >
        {/* Card content inside the 3D scroll container */}
        <div className="flex flex-col h-full bg-[#0C0C0F] p-6 md:p-10 justify-between">
          {/* Top section */}
          <div>
            {/* Brand inside card */}
            <div className="flex items-center gap-2 mb-6">
              <div className="h-6 w-1 rounded-full bg-primary" />
              <span className="text-xs font-bold tracking-[0.15em] uppercase text-primary">
                Denison
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight leading-tight">
              {event.title}
            </h2>

            {/* Meta rows */}
            <div className="flex flex-col gap-0 rounded-xl border border-white/[0.06] bg-white/[0.02] overflow-hidden mb-6">
              {dateStr && (
                <div className="flex items-start gap-3 px-4 py-3.5 text-sm text-[#AEAEB2]">
                  <Calendar className="w-4 h-4 mt-0.5 text-[#636366] shrink-0" />
                  <span>{dateStr}</span>
                </div>
              )}
              {location && (
                <div className="flex items-start gap-3 px-4 py-3.5 text-sm text-[#AEAEB2] border-t border-white/[0.04]">
                  <MapPin className="w-4 h-4 mt-0.5 text-[#636366] shrink-0" />
                  <span>{location}</span>
                </div>
              )}
            </div>

            {/* Description */}
            {description && (
              <p className="text-sm leading-relaxed text-[#636366] mb-8">
                {description}
              </p>
            )}
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center gap-4">
            <LiquidButton
              onClick={handleOpenApp}
              size="xl"
              className="w-full max-w-xs text-primary font-semibold text-base"
            >
              Open in Union
            </LiquidButton>
            <span className="text-xs text-[#3A3A3C]">
              Union &middot; Denison University
            </span>
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
}
