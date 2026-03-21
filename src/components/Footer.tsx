"use client";

const navGroups = [
  {
    title: "Advisory",
    links: [
      { label: "Business Risk Scan", href: "#services" },
      { label: "Risk Immunity Blueprint", href: "#services" },
      { label: "Corporate Structuring", href: "#services" },
      { label: "Tax Optimization", href: "#services" },
      { label: "Asset Protection", href: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Why ShieldCore", href: "#why-shieldcore" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Connect",
    links: [
      {
        label: "consult@shieldcoreadvisory.ph",
        href: "mailto:consult@shieldcoreadvisory.ph",
      },
      { label: "+63 XXX XXX XXXX", href: "tel:+63XXXXXXXXXX" },
      { label: "Metro Manila, Philippines", href: "#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/30 bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#" className="group flex items-center gap-2.5">
              <img
                src="/favicon.svg"
                alt="ShieldCore Advisory"
                className="h-6 w-6"
              />
              <div className="flex flex-col">
                <span className="text-base font-bold tracking-wide text-foreground">
                  ShieldCore
                </span>
                <span className="-mt-1 text-[9px] font-medium uppercase tracking-[0.25em] text-gold">
                  Advisory
                </span>
              </div>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              Philippines-based business structuring and risk advisory for
              entrepreneurs who understand that protection is the foundation of
              lasting success.
            </p>
          </div>

          {/* Nav Groups */}
          {navGroups.map((group) => (
            <div key={group.title}>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold/70">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted transition-colors duration-200 hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border/20 pt-8 sm:flex-row">
          <p className="text-xs text-muted/60">
            &copy; {new Date().getFullYear()} ShieldCore Advisory. All rights
            reserved.
          </p>
          <p className="text-xs text-muted/40">
            Protecting business structures. Securing personal wealth.
          </p>
        </div>
      </div>
    </footer>
  );
}
