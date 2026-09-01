import { frontendClassName, surfaceClass } from "@trebired/frontend";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "dark" | "outline" | "primary" | "white";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  className?: string;
  href: string;
  variant?: ButtonVariant;
};

const TONE_BY_VARIANT: Record<ButtonVariant, string> = {
  dark: "dark",
  outline: "outline",
  primary: "highlight",
  white: "white",
};

export function Button({ children, className, href, variant = "primary", ...rest }: ButtonProps) {
  const base = surfaceClass(frontendClassName("button"), { size: "lg", tone: TONE_BY_VARIANT[variant] });
  const classes = [base, `btn-${variant}`, className].filter(Boolean).join(" ");

  return (
    <a href={href} className={classes} data-tbf-soft-redirect="" {...rest}>
    {children}
    </a>
  );
}
