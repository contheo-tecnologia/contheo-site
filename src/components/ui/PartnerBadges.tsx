import React from "react";
import Image from "next/image";

export function PartnerBadges() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-6 w-full">
      {/* Microsoft Partner Badge */}
      <div className="flex items-center justify-center h-11 sm:h-12 px-4.5 py-1.5 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_30px_rgba(0,164,239,0.2)] hover:scale-[1.03] transition-all duration-300 group cursor-default">
        <Image
          src="/clients/microsoft_partner_official.png"
          alt="Microsoft Partner"
          width={155}
          height={40}
          className="h-6 sm:h-7 w-auto object-contain transition-transform duration-300"
          priority
        />
      </div>

      {/* AWS Partner Badge */}
      <div className="flex items-center justify-center h-11 sm:h-12 px-4.5 py-1.5 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_30px_rgba(255,153,0,0.2)] hover:scale-[1.03] transition-all duration-300 group cursor-default">
        <Image
          src="/clients/aws_partner_official.png"
          alt="AWS Partner Network"
          width={145}
          height={40}
          className="h-6 sm:h-7 w-auto object-contain transition-transform duration-300"
          priority
        />
      </div>
    </div>
  );
}