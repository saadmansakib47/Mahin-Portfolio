"use client";

import { Phone, Mail, Linkedin, MapPin } from "lucide-react";
import type { HeroData } from "@/types/portfolio";

interface HeroSectionProps {
  data: HeroData;
}

export default function HeroSection({ data }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen bg-navy-950 overflow-hidden flex items-center">
      {/* Background accent blobs */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10"
        style={{
          background:
            "radial-gradient(circle, #14b8a6 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-8"
        style={{
          background:
            "radial-gradient(circle, #285f91 0%, transparent 70%)",
          transform: "translate(-40%, 40%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text content */}
        <div className="order-2 lg:order-1">
          <p className="text-teal-400 text-sm font-medium tracking-[0.2em] uppercase mb-4">
            Public Health Professional
          </p>

          <h1
            className="text-5xl lg:text-6xl font-bold leading-tight mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {data.name.split(" ").slice(0, 2).join(" ")}
            <br />
            <span className="text-teal-400">
              {data.name.split(" ").slice(2).join(" ")}
            </span>
          </h1>

          <blockquote className="border-l-2 border-teal-500 pl-4 mb-6 text-navy-200 italic text-sm leading-relaxed">
            {data.quote}
            <footer className="text-navy-400 not-italic mt-1 text-xs">
              — Benjamin Disraeli
            </footer>
          </blockquote>

          <p className="text-navy-200 leading-relaxed mb-8 text-sm max-w-lg">
            {data.about}
          </p>

          {/* Contact info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <ContactItem
              icon={<Phone size={14} />}
              label={data.contact.phone}
              href={`tel:${data.contact.phone}`}
            />
            <ContactItem
              icon={<Mail size={14} />}
              label={data.contact.email}
              href={`mailto:${data.contact.email}`}
            />
            <ContactItem
              icon={<Linkedin size={14} />}
              label="mahin-ibn-mahmud"
              href={`https://${data.contact.linkedin}`}
            />
            <ContactItem
              icon={<MapPin size={14} />}
              label={data.contact.address}
            />
          </div>
        </div>

        {/* Right: Photo */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <PhotoFrame src={data.photoPath} name={data.name} />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-navy-400">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-navy-400 to-transparent" />
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-2 text-navy-300 hover:text-teal-400 transition-colors duration-200 group">
      <span className="text-teal-500 group-hover:text-teal-400 flex-shrink-0">
        {icon}
      </span>
      <span className="text-xs truncate">{label}</span>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  return content;
}

function PhotoFrame({ src, name }: { src: string; name: string }) {
  return (
    <div className="relative">
      {/* Decorative ring */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, #14b8a6, #285f91, #14b8a6)",
          padding: "3px",
          borderRadius: "50%",
          width: "280px",
          height: "280px",
        }}
      />
      <div
        className="relative overflow-hidden bg-navy-800 flex items-center justify-center"
        style={{
          width: "280px",
          height: "280px",
          borderRadius: "50%",
          border: "4px solid #0c1f3d",
          margin: "3px",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={name}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = "none";
            target.parentElement!.innerHTML = `
              <div style="display:flex;align-items:center;justify-content:center;width:100%;height:100%;background:linear-gradient(135deg,#163962,#0e264b)">
                <span style="font-size:72px;color:#285f91;font-family:serif">M</span>
              </div>`;
          }}
        />
      </div>
    </div>
  );
}
