import { LandingInset } from "@/components/landing-inset/Index";

const stats = [
  { value: "80+", label: "Countries served" },
  { value: "50K+", label: "Active users" },
  { value: "$500M+", label: "Processed monthly" },
  { value: "99.9%", label: "Uptime" },
];

const offices = [
  {
    location: "United States",
    address: "8 The Green, Ste A, Dover, Delaware, 19901 United States",
  },
  {
    location: "Lagos, Nigeria",
    address: "Block 59, Plot 12B Kusenla Rd, Ikate, Lekki Lagos. 42 Olowu St, Opebi 101233, Ikeja, Lagos, Nigeria.",
  },
];

export function StatsOfficesSection() {
  return (
    <section className="bg-grey-100 py-16 min-[1440px]:py-[80px]">
      <LandingInset>
        {/* Stats */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 min-[1440px]:gap-0 min-[1440px]:divide-x min-[1440px]:divide-white/10">
          {stats.map((s) => (
            <div key={s.label} className="text-center min-[1440px]:px-12">
              <p className="font-nohemi text-[40px] font-semibold text-secondary min-[1440px]:text-[52px]">
                {s.value}
              </p>
              <p className="mt-2 text-[16px] text-white/70 min-[1440px]:text-[18px]">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-white/10" />

        {/* Offices */}
        <div className="mt-12">
          <p className="text-[18px] font-medium text-white min-[1440px]:text-[20px]">
            Our Offices:
          </p>
          <div className="mt-6 grid gap-8 md:grid-cols-2 min-[1440px]:gap-14">
            {offices.map((o) => (
              <div key={o.location}>
                <p className="text-[16px] font-semibold text-white min-[1440px]:text-[18px]">
                  {o.location}
                </p>
                <p className="mt-2 text-[14px] leading-6 text-white/60 min-[1440px]:text-[16px] min-[1440px]:leading-7">
                  {o.address}
                </p>
              </div>
            ))}
          </div>
        </div>
      </LandingInset>
    </section>
  );
}
