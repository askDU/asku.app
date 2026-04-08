"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
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
          </div>
        }
      >
        {/* Card content — details only, no duplicate title */}
        <div className="flex flex-col h-full bg-[#0C0C0F] p-6 md:p-10 justify-between">
          <div>
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
              <p className="text-sm leading-relaxed text-[#636366]">
                {description}
              </p>
            )}
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center gap-4 mt-8">
            <button
              onClick={handleOpenApp}
              className="w-full max-w-xs h-12 rounded-2xl bg-primary text-white font-semibold text-base
                         flex items-center justify-center gap-2
                         shadow-[0_2px_16px_rgba(196,30,58,0.3)]
                         hover:shadow-[0_4px_24px_rgba(196,30,58,0.4)] hover:-translate-y-0.5
                         active:translate-y-0 active:shadow-[0_1px_8px_rgba(196,30,58,0.2)]
                         transition-all duration-200 cursor-pointer"
            >
              Open in Union
              <ExternalLink className="w-4 h-4" />
            </button>
            <span className="text-xs text-[#3A3A3C]">
              Union &middot; Denison University
            </span>
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
}
