import { frontendClassName, surfaceClass } from "@trebired/frontend";
import type { AnchorHTMLAttributes, ReactNode } from "react";

import { Link } from "#eww9luqvc386";

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
    <Link href={href} className={classes} {...rest}>
    {children}
    </Link>
  );
}
