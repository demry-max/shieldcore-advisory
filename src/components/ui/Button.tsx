"use client";

import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "lg";
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

const variants = {
  primary:
    "bg-gold text-background hover:bg-gold-light shadow-lg shadow-gold/10",
  secondary:
    "bg-surface-light text-foreground hover:bg-charcoal-light border border-border",
  outline:
    "bg-transparent text-gold border border-gold/40 hover:bg-gold/10 hover:border-gold",
};

const sizes = {
  default: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "default",
  href,
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const baseClasses = `inline-flex items-center justify-center font-semibold uppercase tracking-wider transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={baseClasses}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={baseClasses}
    >
      {children}
    </motion.button>
  );
}
