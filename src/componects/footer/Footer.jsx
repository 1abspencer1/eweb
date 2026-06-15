import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Sparkles,
} from "lucide-react";

function NewsletterSection() {
  return (
    <div className="border-b border-neutral-800/60">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-12 lg:py-16">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-16">
          <div className="max-w-xl">
            <div className="mb-3 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-amber-400" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-400">
                The House
              </span>
            </div>
            <h3 className="text-xl font-light tracking-tight text-white sm:text-2xl">
              Subscribe to Our Newsletter
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-400">
              Be the first to discover new collections, exclusive pieces, and
              private events.
            </p>
          </div>
          <form
            className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto lg:min-w-[420px]"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 border border-neutral-800 bg-neutral-900/60 px-5 py-3 text-sm text-white placeholder:text-neutral-500 outline-none transition-colors duration-300 focus:border-amber-400/50"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 border border-amber-400/80 bg-transparent px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-amber-400 transition-all duration-300 hover:bg-amber-400 hover:text-neutral-950"
            >
              Subscribe
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function FooterAbout() {
  return (
    <div className="space-y-5">
      <Link to="/" className="inline-block">
        <span className="text-2xl font-light tracking-[0.15em] text-white">
          AURUM
        </span>
      </Link>
      <p className="max-w-xs text-sm leading-[1.8] text-neutral-400">
        Crafting timeless luxury jewelry since 1987. Each piece tells a story of
        excellence, heritage, and uncompromising craftsmanship.
      </p>
      <div className="flex items-center gap-4">
        {[
          { icon: Facebook, href: "#", label: "Facebook" },
          { icon: Twitter, href: "#", label: "Twitter" },
          { icon: Instagram, href: "#", label: "Instagram" },
          { icon: Linkedin, href: "#", label: "LinkedIn" },
        ].map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="grid h-10 w-10 place-items-center border border-neutral-800 text-neutral-400 transition-all duration-300 hover:border-amber-400/60 hover:text-amber-400"
          >
            <Icon className="h-4 w-4" />
          </a>
        ))}
      </div>
    </div>
  );
}

function FooterLinks() {
  const links = [
    { label: "The Shop", to: "/shop" },
    { label: "Collections", to: "/collections" },
    { label: "About Us", to: "/about" },
    { label: "Craftsmanship", to: "/craftsmanship" },
    { label: "Bespoke", to: "/bespoke" },
  ];

  return (
    <div>
      <h4 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-300">
        Explore
      </h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              to={link.to}
              className="group inline-flex items-center gap-2 text-sm text-neutral-400 transition-colors duration-300 hover:text-amber-400"
            >
              <span className="h-px w-3 bg-neutral-700 transition-all duration-300 group-hover:w-5 group-hover:bg-amber-400" />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterServices() {
  const links = [
    { label: "Shipping & Returns", to: "/shipping" },
    { label: "Size Guide", to: "/size-guide" },
    { label: "Care Guide", to: "/care" },
    { label: "Authentication", to: "/authentication" },
    { label: "Gift Cards", to: "/gift-cards" },
  ];

  return (
    <div>
      <h4 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-300">
        Client Care
      </h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              to={link.to}
              className="group inline-flex items-center gap-2 text-sm text-neutral-400 transition-colors duration-300 hover:text-amber-400"
            >
              <span className="h-px w-3 bg-neutral-700 transition-all duration-300 group-hover:w-5 group-hover:bg-amber-400" />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterContact() {
  return (
    <div>
      <h4 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-300">
        Visit Us
      </h4>
      <ul className="space-y-4">
        <li className="flex items-start gap-3">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-400/70" />
          <span className="text-sm leading-relaxed text-neutral-400">
            42 Admiralty Way
            <br />
            Lagos, Nigeria
          </span>
        </li>
        <li className="flex items-center gap-3">
          <Phone className="h-4 w-4 shrink-0 text-amber-400/70" />
          <span className="text-sm text-neutral-400">+234 800 AURUM 01</span>
        </li>
        <li className="flex items-center gap-3">
          <Mail className="h-4 w-4 shrink-0 text-amber-400/70" />
          <span className="text-sm text-neutral-400">
            concierge@aurum.house
          </span>
        </li>
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-100">
      <NewsletterSection />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:gap-8">
            <FooterAbout />
            <FooterLinks />
            <FooterServices />
            <FooterContact />
          </div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row sm:px-8 lg:px-12">
          <p className="text-xs tracking-wide text-neutral-500">
            &copy; {new Date().getFullYear()} AURUM. All Rights Reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link
              to="/privacy"
              className="text-xs tracking-wide text-neutral-500 transition-colors duration-300 hover:text-neutral-300"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-xs tracking-wide text-neutral-500 transition-colors duration-300 hover:text-neutral-300"
            >
              Terms of Service
            </Link>
            <Link
              to="/cookies"
              className="text-xs tracking-wide text-neutral-500 transition-colors duration-300 hover:text-neutral-300"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
