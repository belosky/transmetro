export function Panel({ title, right, children, className = "" }) {
  return (
    <section className={`border border-neutral-800 bg-neutral-900 ${className}`}>
      {(title || right) && (
        <header className="flex items-center justify-between gap-2 border-b border-neutral-800 px-4 py-2.5">
          <h2 className="text-sm font-semibold text-neutral-100">{title}</h2>
          {right}
        </header>
      )}
      <div className="p-4">{children}</div>
    </section>
  );
}

export function Btn({ variant = "ghost", className = "", ...props }) {
  const styles = {
    primary: "bg-neutral-100 text-black hover:bg-white",
    ok: "border border-green-600 text-green-400 hover:bg-green-950",
    warn: "border border-amber-500 text-amber-300 hover:bg-amber-950",
    danger: "border border-red-600 text-red-400 hover:bg-red-950",
    ghost: "border border-neutral-700 text-neutral-200 hover:bg-neutral-800",
  }[variant];
  return (
    <button
      {...props}
      className={`px-3 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-neutral-100 disabled:cursor-not-allowed disabled:opacity-40 ${styles} ${className}`}
    />
  );
}

export function Stat({ label, value, tone = "text-neutral-100" }) {
  return (
    <div className="border border-neutral-800 bg-neutral-900 px-4 py-3">
      <div className="text-xs text-neutral-400">{label}</div>
      <div className={`text-2xl font-semibold ${tone}`}>{value}</div>
    </div>
  );
}

const STATUS_STYLE = {
  "En Patio": { dot: "bg-neutral-300", text: "text-neutral-200" },
  "En Ruta": { dot: "bg-green-500", text: "text-green-400" },
  Mantenimiento: { dot: "bg-amber-400", text: "text-amber-300" },
};

export function StatusBadge({ status }) {
  const s = STATUS_STYLE[status];
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-medium ${s.text}`}>
      <span className={`h-2 w-2 ${s.dot}`} />
      {status}
    </span>
  );
}
