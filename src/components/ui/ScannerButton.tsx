import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface ScannerButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  /** Full-width button (e.g. for mobile or contained layouts) */
  fullWidth?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  }

export default function ScannerButton({
  children,
  startIcon,
  endIcon,
  fullWidth = false,
  className = "",
  type = "button",
  ...props
}: ScannerButtonProps) {
  return (
    <button
      type={type}
      className={`btn-scan ${fullWidth ? "btn-scan-full" : ""} ${className}`.trim()}
      {...props}
    >
      {startIcon && <span className="btn-scan-icon">{startIcon}</span>}
      <span className="btn-scan-label">{children}</span>
      {endIcon && <span className="btn-scan-icon">{endIcon}</span>}
      <div className="spotlight-beam" aria-hidden />
      <div className="scan-line" aria-hidden />
    </button>
  );
}
