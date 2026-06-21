interface SectionHeaderProps {
  label: string;
  title: string;
}

export default function SectionHeader({ label, title }: SectionHeaderProps) {
  return (
    <div>
      <p className="text-teal-400 text-xs font-semibold tracking-[0.2em] uppercase mb-2">
        {label}
      </p>
      <h2
        className="text-3xl lg:text-4xl font-bold text-white"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        {title}
      </h2>
      <div className="mt-3 flex items-center gap-3">
        <div className="h-px w-12 bg-teal-500" />
        <div className="h-px w-4 bg-navy-600" />
      </div>
    </div>
  );
}
