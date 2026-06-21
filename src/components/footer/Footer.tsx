export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-navy-800 py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-navy-500 text-sm">
          © {new Date().getFullYear()} Mahin Ibn Mahmud
        </p>
        <p className="text-navy-600 text-xs">Public Health Professional · Dhaka, Bangladesh</p>
      </div>
    </footer>
  );
}
