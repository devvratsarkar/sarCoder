export default function PrimaryFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between text-secondary text-sm">
        <span>© {new Date().getFullYear()} SarCODER</span>
        <span className="text-primary">Web, mobile, design & social</span>
      </div>
    </footer>
  );
}
