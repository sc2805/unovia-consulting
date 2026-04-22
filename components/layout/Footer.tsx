import Link from "next/link";
import { ArrowUpRight, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { COMPANY, NAV_LINKS, SERVICES } from "@/lib/constants";

// =============================================================================
// Footer — Multi-column footer with links, contact info, and newsletter
// =============================================================================

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-gray-300" id="footer">
      {/* Top CTA Strip */}
      <div className="border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Ready to take the next step?
            </h3>
            <p className="text-gray-400 text-sm md:text-base">
              Let&apos;s discuss how Unovia can help you achieve your financial goals.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold-500 text-navy-900 font-bold rounded-lg hover:bg-gold-400 transition-all duration-300 shadow-lg shadow-gold-500/20 hover:-translate-y-0.5 whitespace-nowrap text-sm"
            id="footer-cta"
          >
            Talk to an Expert
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white mb-4 shadow-lg">
              <Logo variant="dark" />
            </div>

            <div className="flex gap-3">
              <a
                href={COMPANY.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-navy-800 flex items-center justify-center text-gray-400 hover:bg-gold-500 hover:text-navy-900 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={COMPANY.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-navy-800 flex items-center justify-center text-gray-400 hover:bg-gold-500 hover:text-navy-900 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-gold-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Our Services
            </h4>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-gray-400 hover:text-gold-400 transition-colors duration-200"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <Phone className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="text-sm text-gray-400 hover:text-gold-400 transition-colors"
                >
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-sm text-gray-400 hover:text-gold-400 transition-colors"
                >
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-400">{COMPANY.address}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            &copy; {currentYear} {COMPANY.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
